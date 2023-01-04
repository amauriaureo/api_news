const User = require ("../models/User")

const createService = (body) => User.create(body);
// função do mongoose para buscar todos os usuários
const findAllService = () => User.find();

const findByIdService = (id) => User.findById(id);

module.exports = {
    createService,
    findAllService,
    findByIdService
}