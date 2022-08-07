import { once } from 'node:events';
import User from '../entities/user.js';
import { DEFAULT_HEADER } from '../util/sharedCode.js';



const userRoutes = ({
  userService
}) => ({
  // GET users
  '/users:get': async (req, res) => {
    res.write('GET Users');
    res.end();
  },

  // POST users
  '/users:post': async (req, res) => {
    const data = await once(req, 'data');
    const user = JSON.parse(data);
    const { userId, courses } = new User(user);
    res.writeHead(201, DEFAULT_HEADER);
    res.write(JSON.stringify({
      userId,
      courses,
    }));
    return res.end();
  },

  // UPDATE users
  '/users:update': async (req, res) => {
    res.write('UPDATE User');
    res.end();
  },

  // DELETE users
  '/users:delete': async (req, res) => {
    res.write('DELETE User');
    res.end();
  },
})

export {
  userRoutes
}