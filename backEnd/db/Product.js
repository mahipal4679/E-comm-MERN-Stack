const mongoose=require('mongoose');
const productSchema=new mongoose.Schema(
    {
        name:String,
        price:String,
        category:String,
        user_Id:String,
        company:String,
    }
)
module.exports = mongoose.model("products",productSchema);