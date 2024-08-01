import express, { type Request, type Response } from 'express';
import compression from 'compression';

import { HttpCode } from './core/constants';
import { envs } from './core/config/env';

const app = express();
const port = envs.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(compression());

app.listen(port, () => {
	console.log(`Escutando a porta ${port}`);
});

app.get('/', (req: Request, res: Response) => {
	return res.status(HttpCode.OK).send({
		message: `API de exemplo, mais rotas em: http://localhost:${port}/`
	});
});

app.get('/teste', (req: Request, res: Response) => {
	return res.status(HttpCode.OK).send({
		message: `teste`
	});
});

export default app;
