import { loginService } from "../services/auth.service.js";
import bcrypt from 'bcrypt';

const login = async (req, res) => {
    const { email, password } = req.body;
try {
    const user = await loginService(email);
    if(!user) {
        return res.status(404).send ({message: "User or password not found."})
    }

    const passwordIsValid = bcrypt.compareSync(password, user.password)
    
    if (!passwordIsValid){
        return res.status(404).send ({message: "User or password not found."})
    }

    res.send("Login ok.");

} catch (err){
    res.status(500).send(err.message)
}
};

export { login }
