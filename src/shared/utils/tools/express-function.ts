import { Express, Request, Response } from 'express';

export function expressFunction(app: () => Promise<Express>) {
  return async function (req: Request, res: Response) {
    const server = await app();
    server(req, res);
  };
}
