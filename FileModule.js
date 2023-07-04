const fs = require('fs');

async function readFileAsync(filepath) {
  try {
    await fs.readFileAsync(filepath, (err, data) => {
      if(err) throw err;

    });
  } catch(exception) {
    console.log(exception);
  }
}

module.exports = readFileAsync;