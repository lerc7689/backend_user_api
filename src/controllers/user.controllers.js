const catchError = require('../utils/catchError');
const User = require('../models/User');

const getAll = catchError(async(req, res) => {
    // Operaciones...
    const users = await User.findAll();
    return res.json(users)
});

const create = catchError(async(req, res) => {
    // Operaciones...
    const {first_name, last_name, email, password, birthday} = req.body;
    const user = await User.create({first_name, last_name, email, password, birthday});
    return res.json(user)
});

const getOne = catchError(async(req, res) => {
    // Operaciones...
    const {id} = req.params;
    const findedUser = await User.findByPk(id);
    return res.json(findedUser)
});

const remove = catchError(async(req, res) => {
    // Operaciones...
    const {id} = req.params;
    await User.destroy({where: {id}});
    return res.sendStatus(204)
});

const update = catchError(async(req, res) => {
    // Operaciones...
    const {id} = req.params;
    const {first_name, last_name, email, password, birthday} = req.body;
    const updatedUser = await User.update({first_name, last_name, email, password, birthday}, {where: {id}, returning:true});
    return res.json(updatedUser)
});

module.exports = {
    getAll,
    create,
    getOne,
    remove,
    update
}