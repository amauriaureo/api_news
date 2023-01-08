import userService from '../services/user.service.js'
// const mongoose = require("mongoose");

const create = async (req, res) => {
   try { const {name, username, email, password, avatar, background} = req.body;

    if (!name || !username || !email || !password || !avatar || !background) {
        res.status(400).send({message: "Submit all fields for registration."})
    }

    const user = await userService.createService(req.body);

    if (!user){
        return res.status(400).send({message: "Error creating User"});
    }

    // console.log(user);

    res.status(201).send({
        message: "User created succesfully",
        user: {
            id: user._id,
            name,
            username,
            email,
            // password,
            avatar,
            background
        },
    });
}   catch (err) {
    res.status(500).send({message: err.message})
}
};

const findAll = async(req, res) => {
    try {const users = await userService.findAllService();

    if(users.length === 0) {
        return res.status(400).send({ message: "There are no registered users"})
    }

    res.send(users)
} catch (err) {
    res.status(500). send ({message: err.message})
}
}

const findById = async (req, res) => {
    try {const user = req.user;
    res.send(user)
} catch (err) {
    res.status(500).send({message: err.message})
}
}

const update = async (req, res) => {
    try {const {name, username, email, password, avatar, background} = req.body;

    if (!name && !username && !email && !password && !avatar && !background) {
        res.status(400).send({message: "Submit at least one field for update."})
    }

    const { id, user } = req;

    await userService.updateService(
        id,
        name,
        username,
        email,
        password,
        avatar,
        background
    );

    res.send({message: "User succesfully updated"})
} catch (err) {
    res.status(500).send({message: err.message})
}


};

export default  { create, findAll, findById, update };
