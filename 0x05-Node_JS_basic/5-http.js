const http = require('http');
const fs = require('fs');

function countStudents(database) {
  return new Promise((resolve, reject) => {
    if (!fs.existsSync(database)) {
      reject(new Error('Cannot load the database'));
    }
    const data = fs.readFileSync(database, { encoding: 'utf8', flag: 'r' });
    const headers = data.trim().split('\n')[0].trim().split(',');
    const list = data.trim().split('\n');

    const arr = [];
    const cs = [];
    const swe = [];

    for (let i = 1; i < list.length; i += 1) {
      const cont = list[i].trim().split(',');
      const newArr = {};
      for (let j = 0; j < headers.length; j += 1) {
        newArr[headers[j]] = cont[j];
      }
      if (newArr.field === 'CS') {
        cs.push(newArr.firstname);
      }
      if (newArr.field === 'SWE') {
        swe.push(newArr.firstname);
      }
      arr.push(newArr);
    }

    const result = `Number of students: ${arr.length}\nNumber of students in CS: ${cs.length}. List: ${cs.join(', ')}\nNumber of students in SWE: ${swe.length}. List: ${swe.join(', ')}`;
    resolve(result);
  });
}

const hostname = '127.0.0.1';
const port = 1245;
const DATABASE = process.argv[2];

const app = http.createServer(async (req, res) => {
  try {
    res.setHeader('Content-Type', 'text/plain');
    const { url } = req;

    if (url === '/') {
      res.end('Hello Holberton School!');
    } else if (url === '/students') {
      const result = await countStudents(DATABASE);
      res.end(`This is the list of our students\n${result}`);
    } else {
      res.statusCode = 404;
      res.end('Not Found');
    }
  } catch (error) {
    res.statusCode = 500;
    res.end(error.message);
  }
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

module.exports = app;
