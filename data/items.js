const path = require('path');
const fs = require('node:fs/promises');

async function getStoredItems() {
  const filePath = path.resolve(__dirname, 'data', 'items.json');
  const rawFileContent = await fs.readFile(filePath, { encoding: 'utf-8' });
  const data = JSON.parse(rawFileContent);
  return data.items ?? [];
}

function storeItems(items) {
  const filePath = path.resolve(__dirname, 'data', 'items.json');
  return fs.writeFile(filePath, JSON.stringify({ items: items || [] }));
}

exports.getStoredItems = getStoredItems;
exports.storeItems = storeItems;
