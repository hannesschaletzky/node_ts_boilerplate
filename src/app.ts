import 'dotenv/config';
import { setupExpressServer } from './utils/server';

const hostname = process.env.HOSTNAME;
const port = process.env.PORT;

setupExpressServer().then((server) => {
  server.listen(port, () => {
    console.log(`Server running on ${hostname}:${port}/`);
  });
});
