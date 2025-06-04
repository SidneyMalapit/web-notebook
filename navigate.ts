import fs from 'node:fs'
import path from 'node:path'
import { Router } from 'express'
import 'dotenv/config'

const router = Router();

const notesPath = process.env.NOTESPATH;
if (!(typeof notesPath === 'string')) throw Error('NOTESPATH not set');

const directoryTree = {};

router.get('/', (req, res, next) => {
});

function getSubdirectories(dir: string) {
  const subdirectories: string[] = [];
  const children = fs.readdirSync(dir);
  for (const child of children) {
    const childPath = path.join(dir, child);
    if (fs.statSync(childPath).isDirectory())
      subdirectories.push(child);
  }
  return subdirectories;
}

function createDirectoryTree(dir: string) {

}

createDirectoryTree(notesPath);

export default router;
