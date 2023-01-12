import { loginService } from "../services/auth.service.js";
// import bcrypt from bcrypt;

const login = async (req, res) => {
    const { email, password } = req.body;
try {
    const user = await loginService(email);

    // const passwordIsValid = bcrypt.compare(password, user.password)

    res.send(user);

} catch (err){
    res.status(500).send(err.message)
}
};

export { login }
