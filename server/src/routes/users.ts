import Router from 'koa-router';
import { login } from '@controllers/auth';

export default (router: Router) => {
  router.post('/auth/login', login)
}
