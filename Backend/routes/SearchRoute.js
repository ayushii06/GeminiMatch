const express=require('express');
const {addToSearch,getSearch}=require('../controller/searchCtrl.js')
const {auth} = require('../middlewares/auth.js')

const router = express.Router();
router.post('/addSearch',auth,addToSearch)
router.post('/getSearch',auth,getSearch)

module.exports=router