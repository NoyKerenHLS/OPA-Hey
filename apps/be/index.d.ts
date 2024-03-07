declare namespace Express {
  export interface Request {
    user?: any;
    login?: () => void;
    logout?: () => void;
  }
}
