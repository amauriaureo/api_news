const create = (req, res) => {
    const {name, username, email, password, avatar, background} = req.body;

    if (!name || !username || !email || !password || !avatar || !background) {
        res.status(400).send({message: "Submit all fields for registration."})
    }

    // console.log(user);

    res.status(201).send({
        message: "User created succesfully",
        user: {
            name,
            username,
            email,
            // password,
            avatar,
            background
        },
    });
};

module.exports = { create };