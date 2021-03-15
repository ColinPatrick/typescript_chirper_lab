import * as express from 'express';
import * as cors from 'cors';
import apiRouter from './routes';
import * as path from 'path';

let app = express();

app.use(cors());
app.use(express.json());

app.use('/api', apiRouter);
app.use(express.static('public'));

app.get('*', (req, res) => res.sendFile(path.join(__dirname, "../public/index.html")));

app.listen(3000);