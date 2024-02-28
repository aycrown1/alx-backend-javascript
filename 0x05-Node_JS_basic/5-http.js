const http = require('http');
const countStudents = require('./3-read_file_async');

const args = process.argv.slice(2);
const DATABASE = args[0];

const hostname = '127.0.0.1';
const port = 1245;

const app = http.createServer(async (req, res) => {
  try {
    res.setHeader('Content-Type', 'text/plain');
    const { url } = req;

    if (url === '/') {
      res.end('Hello Holberton School!');
    } else if (url === '/students') {
      const students = await countStudents(DATABASE);
      res.end(`This is the list of our students\n${students.join('\n')}`);
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
