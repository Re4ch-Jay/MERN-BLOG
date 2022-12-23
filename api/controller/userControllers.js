const User = require('../models/User')

// GET

const GET_USER = async (req, res) => {
    const {id} = req.params;
    try {
        const user = await User.findById(id);
        if(!user) throw Error("There is no user with this ID");
        res.status(200).json(user);
    } catch (error) {
        console.log(error)
        res.status(404).json({error: error.message})
    }
}

// UPDATE

const UPDATE_USER = async (req, res) => {
    try {
        
    } catch (error) {
        console.log(error)
        res.status(500).json({error: error.message})
    }
}

// Delete

const DELETE_USER = async (req, res) => {
    try {
        
    } catch (error) {
        console.log(error)
        res.status(500).json({error: error.message})
    }
}


module.exports = {GET_USER, UPDATE_USER, DELETE_USER}