import { IncomingMessage, ServerResponse } from 'http';

type RequestHandler = (req: IncomingMessage, res: ServerResponse, next: Function) => void | Promise<void>;

const ctrlWrapper = (ctrl: RequestHandler): RequestHandler => {
  const func: RequestHandler = async (req, res, next) => {
    try {
      await ctrl(req, res, next);
    } catch (error) {
      next(error);
    }
  };
  return func;
};

export default ctrlWrapper;