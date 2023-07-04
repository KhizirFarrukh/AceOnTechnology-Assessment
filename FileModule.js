const fs = require('fs');

async function readFileAsync(filepath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filepath, "utf8", (err, data) => {
      if(err) reject(err);
      resolve(data);
    });
  });
}

module.exports = readFileAsync;