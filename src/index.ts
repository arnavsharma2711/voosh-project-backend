import app from './app';

const serverPort = process.env.PORT || 5000;
app.listen(serverPort, () => {
  /* eslint-disable no-console */
  console.log(`Listening: http://localhost:${serverPort}`);
  /* eslint-enable no-console */
});
