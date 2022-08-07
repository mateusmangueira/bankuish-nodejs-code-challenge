import CourseRepository from "../repositories/courseRepository.js"
import CourseService from "../services/courseService.js"

const courseFactory = () => {
  const courseRepository = new CourseRepository();
  const courseService = new CourseService({ courseRepository });
  return courseService;
}

export {
  courseFactory
}