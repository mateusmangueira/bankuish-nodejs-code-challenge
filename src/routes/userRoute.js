import { once } from 'node:events';
import User from '../entities/user.js';
import { DEFAULT_HEADER } from '../util/sharedCode.js';

const userRoutes = ({
  userService
}) => ({
  // GET users
  '/users:get': async (req, res) => {
    const users = await userService.find();
    res.write(JSON.stringify({ users }));
    return res.end();
  },

  // POST users
  '/users:post': async (req, res) => {
    const data = await once(req, 'data');
    const item = JSON.parse(data);
    const user = new User(item);
    const cratedUser = await userService.create(user);
    res.writeHead(201, DEFAULT_HEADER);
    res.write(JSON.stringify(cratedUser));
    return res.end();
  },

  // UPDATE users
  '/users:patch': async (req, res) => {
    const data = await once(req, 'data');
    const item = JSON.parse(data);
    const updatedUser = await userService.update(item);

    res.writeHead(201, DEFAULT_HEADER);
    res.write(JSON.stringify(updatedUser));

    return res.end();
  },

  // DELETE users
  '/users:delete': async (req, res) => {
    const data = await once(req, 'data');
    const item = JSON.parse(data);
    const deletedUser = await userService.delete(item);

    res.writeHead(201, DEFAULT_HEADER);
    res.write(JSON.stringify(deletedUser));

    return res.end();
  },
})

export {
  userRoutes
}