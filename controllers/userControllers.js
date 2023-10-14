const data = [
    { id:1, username: 'User1', password: 'kiww'},
    { id:2, username: 'User2', password: 'kiww'},
    { id:3, username: 'User3', password: 'kiww'}
]

module.exports ={
    getAll:(req, res) => {
        res.status(201).send(data)
    },
    getById: (req, res) => {
        const id = req.params.id;
        const users = data.filter(user => user.id == id);
        if (users.length > 0) {
            res.status(200).send(users[0]);
        } else {
            res.status(404).send({ message: 'User not found' });
        }
    },
    create: (req, res) => {
        const newUser =req.body;
        newUser.id = data.length +1;
        data.push(newUser);
        res.status(201).send("sampeyan mlebu")
    },
    update: (req, res) => {
        const id= req.params.id;
        const updateUser = req.body;
        const userIndex = data.findIndex(user => user.id==id);
        if (userIndex !== -1) {
            data[userIndex] = {...data[userIndex], ...updateUser};
            res.status(200).send(data[userIndex]);
        }else {
            res.status(404).send({message: 'User ora ada'})
        }
    },
    remove: (req, res) => {
        const id = req.params.id;
        const userIndex = data.findIndex(user => user.id == id);

        if (userIndex !== -1) {
            const removedUSer = data.splice(userIndex,1)[0];
            res.status(200).send(removedUSer);
        }else{
            res.status(404).send({message: "user ora ada jancok"})
        }
    }
};

