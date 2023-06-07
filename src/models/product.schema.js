import {Schema, model} from "mongoose"


const productSchema = new Schema(
    {
        name: {
            type: String,
            require: true
        },
        uuid: {
            type: String,
            require: true
        },
        price: {
            type: String,
            require: true
        },
        tagname: {
            type: String,
            require: true
        },
        isOffer: {
            type: Boolean,
            require: true
        },
        priceOffer: {
            type: String,
            require: true
        },
    },
    {
        timestamps: true,
        versionKey: false
    }
)

const Productos = new model('productos', productSchema)

export {Productos} 