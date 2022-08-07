import UserRepository from "../repositories/userRepository.js";
import UserService from "../services/userService.js";

const userFactory = () => {
  const userRepository = new UserRepository();
  const userService = new UserService({ userRepository });
  return userService;
}

export {
  userFactory
}