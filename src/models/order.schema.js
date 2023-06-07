import {Schema, model} from "mongoose"


const orderSchema = new Schema(
    {
        nameProduct: {
            type: String,
            require: true
        },
        price: {
            type: String,
            require: true
        },
        isOffer: {
            type: Boolean,
            require: true
        },
        dateTime: {
            type: String,
            require: true
        },
        nameCustomer: {
            type: String,
            require: true
        },
    },
    {
        timestamps: true,
        versionKey: false
    }
)

const Ordenes = new model('Order', orderSchema)

export {Ordenes} 