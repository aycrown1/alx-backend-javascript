const express = require('express');
const fs = require('fs');

const app = express();

app.listen(1245);

function countStudents(database) {
  return new Promise((resolve, reject) => {
    if (!database) {
      reject(new Error('Cannot load the database'));
    }
    const data = fs.readFileSync(database, { encoding: 'utf8', flag: 'r' });
    const headers = data.trim().split('\n')[0].trim().split(',');
    const list = data.trim().split('\n');

    const array = [];
    const cs = [];
    const swe = [];

    for (let i = 1; i < list.length; i += 1) {
      const cont = data.trim().split('\n')[i].trim().split(',');
      const newarray = {};
      for (let j = 0; j < headers.length; j += 1) {
        newarray[headers[j]] = cont[j];
      }
      if (newarray.field === 'CS') {
        cs.push(newarray.firstname);
      }
      if (newarray.field === 'SWE') {
        swe.push(newarray.firstname);
      }
      array.push(newarray);
    }

    resolve(`Number of students: ${array.length}\nNumber of students in CS: ${cs.length}. List: ${cs.join(', ')}\nNumber of students in SWE: ${swe.length}. List: ${swe.join(', ')}`);
  });
}

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  countStudents(process.argv[2])
    .then((result) => {
      res.send(`This is the list of our students\n${result}`);
    })
    .catch((error) => {
      res.send(error.toString());
    });
});

module.exports = app;
