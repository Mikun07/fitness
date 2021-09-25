let User = require('../model/users');

const getUsers = async (req, res) => {
    var users = await User.find();

    if(!users){
        return res.status(400).json({ error: 'User not found'});
    }

    return res.status(200).json(users)

    //the above code can also be written as
    /*
        User.find()
            .then(users => {
                res.status(200).json({user})
            })
            .catch(err => { 
                res.status(400).json({err})
            })
    */
   // remember to remove async method when using this method
};

const addUser = async (req, res) => {
    const username  = req.body.username;

    var newUser = await new User({username}); //same as username: username

    var result = await newUser.save();

    if(!result) {
        return res.status(400).json("User not Saved");
    }

    return res.json('User created');

    // above code is the same as
    /*
        const newUser = new User({username});
        newUser.save()
                .then(() => {
                    res.json('User Created');
                })
                .catch(err => {
                    res.json('Error:' +err)
                })
    */
};

module.exports = {
    getUsers, 
    addUser
}