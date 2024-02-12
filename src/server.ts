import * as http from 'http';

const server = http.createServer();

const port = 3000;

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});