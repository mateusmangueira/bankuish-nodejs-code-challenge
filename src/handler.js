import { parse } from 'node:url';
import { DEFAULT_HEADER } from './util/sharedCode.js';
import { courseRoutes } from './routes/courseRoute.js';
import { userRoutes } from './routes/userRoute.js';

import { userFactory } from './factories/userFactory.js';
import { courseFactory } from './factories/courseFactory.js';

const courseService = courseFactory();
const userService = userFactory();

const allCourseRoutes = courseRoutes({
  courseService
});

const allUserRoutes = userRoutes({
  userService
});

const allRoutes = {
  ...allCourseRoutes,
  ...allUserRoutes,

  //404 Routes - if no route is found
  default: (req, res) => {
    res.writeHead(404, DEFAULT_HEADER);
    res.write('Error 404 not found!')
    res.end();
  }
}

function handler(req, res) {
  const { url, method } = req;
  const { pathname } = parse(url, true);
  const key = `${pathname}:${method.toLowerCase()}`;
  const route = allRoutes[key] || allRoutes.default;

  return Promise.resolve(route(req, res)).catch(handleError(res));
}

function handleError(res) {
  return error => {
    console.log('Some Error has happened:', error.stack);
    res.writeHead(500, DEFAULT_HEADER);
    res.write(JSON.stringify({ error: 'Internal Server Error' }));
    return res.end();
  }
}

export default handler;
