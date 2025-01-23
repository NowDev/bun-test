import express, { NextFunction, Request, Response } from 'express'
import http from 'http';

const app = express();

app.get('/test', (req: Request, res: Response) => {
  res.json({ status: true, message: 'alive!' });
});

const httpServer = http.createServer(app);
httpServer.listen(80, () => {
  console.log('Server is listening on port 80');
  // Self test
  fetch('http://localhost/test')
    .then((res) => {
        if (res.status !== 200) {
            throw new Error('Self test failed');
        }
        console.log('Self test passed');
        process.exit(0);
    })
});