const Search = require("../models/searchModel");
const User = require("../models/userModel");

exports.addToSearch = async (req,res)=>{
    try{
        //get user id
        // console.log(req)
        const userId = req.user.id;
        //get all other data 
        const {title} = req.body;
        const searchHistory = await Search.create({
            user:userId,
            title:title,
        });
        await User.findByIdAndUpdate(
            {_id:userId},
            {
                $push:{
                    searchHistory: searchHistory._id,
                }
            },
            {new:true},
        )
        //return response 
        return res.status(200).json({
            success:true,
            message:'Product added Successfully',
            searchHistory,
        })
    }
    catch(error){
        console.log(error.message);
        return res.status(500).json({
            success:false,
            message:error.message,
        })
    }
}

 
exports.getSearch = async (req,res)=>{
    try{
        const userId = req.user.id;
        const userSearches = await User.findById(userId)
        .populate("searchHistory")
        const datas = userSearches.searchHistory;
        console.log(datas)
        const result = datas.sort(function sorting(a,b){
            return b.createdAt>a.createdAt?1:b.createdAt<a.createdAt?-1:0;
        })
        
        console.log()
        return res.status(200).json({
            success:true,
            message:'Searches fetch successfully',
            data:result,
        });
    }
    catch(error){
        return res.status(500).json({
            success:false,
            message:error.message,
        })
    }
}