import app from './app';
import { PORT } from './constants';

const serverPort = PORT || 5000;
app.listen(serverPort, () => {
  /* eslint-disable no-console */
  console.log(`Listening: http://localhost:${serverPort}`);
  /* eslint-enable no-console */
});
