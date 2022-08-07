export default class UserService {
  constructor({
    userRepository,
  }) {
    this.userRepository = userRepository;
  }

  async find() {
    return await this.userRepository.find();
  }

  async create() {
    return await this.userRepository.create();
  }

  async update(data) {
    return await this.userRepository.update(data);
  }

  async delete(data) {
    return await this.userRepository.delete(data);
  }
}