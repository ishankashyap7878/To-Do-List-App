const express= require('express');
const router = express.Router();

const add=require('../controllers/add');
const del=require('../controllers/delete');
const home=require('../controllers/home');

router.get('/',home.basic);
router.post('/todo',add.create);
router.get('/delete-todo',del.remove);
module.exports = router;