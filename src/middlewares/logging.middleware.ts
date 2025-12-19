import type { MiddlewareContext } from '../types/middleware';

export const loggingMiddleware = (context: MiddlewareContext<any>) => {
  console.log(`[${context.method}] ${context.url}`);
};
