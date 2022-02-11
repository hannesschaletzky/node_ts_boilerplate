// let the linter complain
// if (true) { console.log("HELLO WORLD!"); console.log("dwaDsa!") }
import express from 'express';
import http from 'http';
import 'dotenv/config';

const app = express();

const port = normalizePort(process.env.PORT);
app.set('port', port);

app.get('/', (req, res) => {
  res.json('Hello World!');
});

const server = http.createServer(app);
server.listen(port);
server.on('listening', onListening);

// app.listen(port, () => {
//   console.log(`App listening on port ${port}!`);
// });

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function normalizePort(val: any) {
  const port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

function onListening() {
  const addr = server.address();
  const bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr?.port;
  console.log('Listening on ' + bind);
}
