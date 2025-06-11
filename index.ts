import fs from 'node:fs'
import path from 'node:path'
import express from 'express'
import Handlebars from 'handlebars';
import { marked } from 'marked'
import 'dotenv/config'

import notesTree from './notes-tree.ts';

if (typeof process.env.NOTESPATH !== 'string') throw Error('NOTESPATH not set');
const notesPath = path.normalize(process.env.NOTESPATH);

const template = Handlebars.compile(fs.readFileSync('public/.template.hbs', 'utf8'));
const directoryTemplate = Handlebars.compile(fs.readFileSync('public/.directory.hbs', 'utf8'));

const app = express();

app.use((_, res, next) => {
  res.locals = {
    templateInfo: null,
    noteInfo: null
  };
  next();
});

app.get('/', (_, res) => { res.send(directoryTemplate({})); });

app.get('/directory-tree', (_, res) => res.json(notesTree));

app.get('/notes/test', (_, res, next) => {
  const filePath = path.join(notesPath, 'test.md');
  res.locals.templateInfo = {
    body: marked.parse(fs.readFileSync(filePath, 'utf8')),
    name: 'test',
    filePath
  };
  next();
});

/*
app.get('/notes/:course', (_, res) => res.redirect('/notes'));
app.get('/notes', (_, res) => {

});
*/

app.get('/notes/:course/:name', (req, res, next) => {
  const { course = '', name = '' } = req.params;
  const notePath = path.join(notesPath, course);
  const notesDir = fs.readdirSync(notePath);

  if (notesDir.includes(`${name}.md`))
    res.locals.noteInfo = { course, name };

  next();
});

app.use(express.static('public'));
app.use('/raw', (req, res, next) => {
  const filePath = path.join(notesPath, req.path);

  if (!fs.existsSync(filePath)) return next();

  express.static(notesPath)(req, res, next);
});

// renderer, all roads lead here
app.use((req, res) => {
  const { noteInfo, templateInfo } = res.locals;

  if (noteInfo !== null) {
    const { course, name } = noteInfo;
    const filePath = path.join(notesPath, course, `${name}.md`);
    const document = fs.readFileSync(filePath, 'utf8');
    const documentHTML = marked.parse(document);
    const compiledTemplate = template({
      body: documentHTML,
      name,
      course,
      filePath: sanitizeFilePath(filePath),
      isNote: true
    });

    return res.send(compiledTemplate);
  }

  const {
    status = 404,
    body = '<span id="not-found">resource not found</span>',
    name = status,
  } = templateInfo ?? {};

  const compiledTemplate = template({
    body,
    name,
    isNote: false
  });

  res.status(status).send(compiledTemplate);
});

function sanitizeFilePath(path: string) {
  return path.replace(notesPath, '').replace(/\\/g, '/');
}

const PORT = process.env.PORT ?? 3002;
app.listen(PORT, () => console.log(`app working on port ${PORT}`));
