#!/usr/bin/env node

'use strict';

const each = require('../index');
const fs = require('fs');

const files = [
  'examples/file1.txt',
  'examples/file2.txt',
];

each(files, fs.readFile, (err, files) => {
  if (err) { throw err; }

  files.forEach((content, i) => {
    console.log(`file${i+1}.txt`, content.toString('utf8'));
  });
});