const tree = (await Promise.all([
  new Promise((resolve) => addEventListener('DOMContentLoaded', resolve)),
  fetch('/directory-tree').then((res) => res.json())
]))[1];

recurse(tree, document.getElementById('directory-root'));

function recurse(node, dirEl) {
  const { _children: children = [], name } = node;

  const nodeEl = (isFile(node) ? createFileElement : createDirElement)(dirEl, name);
  dirEl.append(nodeEl);

  for (const child of children) { recurse(child, nodeEl); }
}

function isFile(node) { return !node.hasOwnProperty('_children'); }

function createFileElement(parent, name) {
  const el = document.createElement('li');
  const anchor = document.createElement('a');

  anchor.href = parent.getAttribute('data-path') + name;
  anchor.textContent = name;
  el.append(anchor);

  return el;
}

function createDirElement(parent, name) {
  const el = document.createElement('ul');
  const nameEl = document.createElement('span');

  nameEl.textContent = parent.getAttribute('data-path') + name + '/';
  el.append(nameEl);
  el.setAttribute('data-path', nameEl.textContent);

  return el;
}
