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
    const course = new Course(course);
    const createdCourse = await courseService.create(item);

    res.writeHead(201, DEFAULT_HEADER);
    res.write(JSON.stringify({ course: createdCourse }));

    return res.end();
  },

  // UPDATE Courses
  '/courses:update': async (req, res) => {
    res.write('UPDATE Course');
    res.end();
  },

  // DELETE Courses
  '/courses:delete': async (req, res) => {
    res.write('DELETE Course');
    res.end();
  },
})

export {
  courseRoutes
}