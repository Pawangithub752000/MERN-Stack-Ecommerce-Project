const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[false, "Please Enter product name"]
    },
    description:{
        type:String,
        required:[false, "Please Enter product Description"]
    },
    price:{
        type:Number,
        required:[false,"please Enter product price"],
        maxLength:[8, "Price cannot exceed 8 characters"]
    },
    ratings:{
        type:Number,
        default:0
    },
    Images:[
        {
            public_id:{
                type:String,
                required:false
            },
            url:{
                type:String,
                required:false
            }
        }
    ],
    category:{
      type:String,
      required:[false,"please Enter Product Category"],   
    },
    Stock:{
        type:Number,
        required:[false,"please Enter product Stock"],
        maxLength:[4,"Stock cannot exceed 4 characters"],
        default:1
    },
    numOfReviews:{
        type:Number,
        default:0
    },
    reviews:[
        {
            user:{
                type: mongoose.Schema.ObjectId,
                ref: "User",
                required: false,
                },
            name:{
                type:String,
                required:false,
            },
            rating:{
                type:Number,
                required:false,
            },
            comment:{
                type:String,
                required:false
            },
        }
    ],

    createdAt:{
        type:Date,
        default:Date.now
    },
});

module.exports = mongoose.model("Product",productSchema);






