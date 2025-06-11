import fs from 'node:fs';
import path from 'node:path';

class Node {
  constructor(readonly name: string, private _children?: Tree) {}

  get children() { return this._children; }
  get isDir() { return this.hasOwnProperty('children'); }
  get isFile() { return !this.isDir; }
}

interface Tree extends Array<Node> {}

const rootChildren: Node[] = [];
let notesTree: Node;

for (const dirent of fs.readdirSync('notes', {
  encoding: 'utf8',
  recursive: true,
  withFileTypes: true
})) {
  const { name, parentPath } = dirent;

  if (!name.endsWith('.md')) { continue; }

  let children = rootChildren;
  for (const dirname of parentPath.split(path.sep)) {
    const index = children.findIndex(({ name }) => name === dirname);

    // if dir not present in tree then populate
    if (index < 0) {
      const node = new Node(dirname, []);
      children.push(node);
      children = node.children!;
      continue;
    }

    children = children[index].children!;
  }

  children.push(new Node(name.slice(0, -3)));
}

notesTree = rootChildren[0];

export default notesTree;
