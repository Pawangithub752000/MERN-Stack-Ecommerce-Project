const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    name:{
        type:String,
        required:[true, "Please Enter product name"]
    },
    description:{
        type:String,
        required:[true, "Please Enter product Description"]
    },
    price:{
        type:Number,
        required:[true,"please Enter product price"],
        maxLength:[8, "Price cannot exceed 8 characters"]
    },
    rating:{
        type:Number,
        default:0
    },
    Images:[
        {
            public_id:{
                type:String,
                required:true 
            },
            url:{
                type:String,
                required:true 
            }
        }
    ],
    category:{
      type:String,
      required:[true,"please Enter Product Category"],   
    },
    Stock:{
        type:Number,
        required:[true,"please Enter product Stock"],
        maxLength:[4,"Stock cannot exceed 4 characters"],
        default:1
    },
    numOfReviews:{
        type:Number,
        default:0
    },
    reviews:[
        {
            name:{
                type:String,
                required:true,
            },
            rating:{
                type:Number,
                required:true,
            },
            comment:{
                type:String,
                required:true
            }
        }
    ],
    createdAt:{
        type:Date,
        default:Date.now

    }

})

module.exports = mongoose.model("Product",productSchema);





