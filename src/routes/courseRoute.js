import { once } from 'node:events';
import Course from '../entities/course.js';
import { DEFAULT_HEADER } from '../util/sharedCode.js';

const courseRoutes = ({
  courseService
}) => ({
  // GET Courses
  '/courses:get': async (req, res) => {
    const courses = await courseService.find();
    res.write(JSON.stringify({ courses }));
    return res.end();
  },

  // POST Courses
  '/courses:post': async (req, res) => {
    const data = await once(req, 'data');
    const item = JSON.parse(data);
    const course = new Course(item);
    const createdCourse = await courseService.create(course);

    res.writeHead(201, DEFAULT_HEADER);
    res.write(JSON.stringify(createdCourse));

    return res.end();
  },

  // UPDATE Courses
  '/courses:patch': async (req, res) => {
    const data = await once(req, 'data');
    const item = JSON.parse(data);
    const updatedCourse = await courseService.update(item);

    res.writeHead(201, DEFAULT_HEADER);
    res.write(JSON.stringify(updatedCourse));

    return res.end();
  },

  // DELETE Courses
  '/courses:delete': async (req, res) => {
    const data = await once(req, 'data');
    const item = JSON.parse(data);
    const deletedCourse = await courseService.delete(item);
    res.write(JSON.stringify(deletedCourse));
    return res.end();
  },
})

export {
  courseRoutes
}