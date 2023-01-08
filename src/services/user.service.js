import User from "../models/User.js"

const createService = (body) => User.create(body);
// função do mongoose para buscar todos os usuários
const findAllService = () => User.find();

const findByIdService = (id) => User.findById(id);

const updateService = (
    id,
    name,
    username,
    email,
    password,
    avatar,
    background
) => User.findOneAndUpdate(
    {_id: id },
    { name, username, email, password, avatar, background }
)

export default {
    createService,
    findAllService,
    findByIdService,
    updateService
};