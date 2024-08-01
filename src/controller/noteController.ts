import { Request, Response } from 'express';
import { HttpCode } from '../core/constants';
import app from '../server';

app.post('/createNote', (req: Request, res: Response) => {
	return res.status(HttpCode.OK).send({
		message: `teste`
	});
});
