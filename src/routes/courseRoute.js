import { once } from 'node:events';
import Course from '../entities/course.js';
import { DEFAULT_HEADER } from '../util/sharedCode.js';

const courseRoutes = ({
  courseService
}) => ({
  // GET Courses
  '/courses:get': async (req, res) => {
    res.write('GET Courses');
    res.end();
  },

  // POST Courses
  '/courses:post': async (req, res) => {
    const data = await once(req, 'data');
    const course = JSON.parse(data);
    const { courseId, desiredCourse, requiredCourse } = new Course(course);
    res.writeHead(201, DEFAULT_HEADER);
    res.write(JSON.stringify({
      courseId,
      desiredCourse,
      requiredCourse
    }));
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