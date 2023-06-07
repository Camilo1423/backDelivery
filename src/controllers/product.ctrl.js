import { Productos } from "../models/product.schema.js"
import { newProduct } from "../valueObjects/new.product.js"

const postProduct = async ({body}, res) => {
    try {
        const data = newProduct(body)
        const resp = await Productos.create({...data})
        if(!resp) return res.status(404).json({status: false}) 
        return res.status(200).json({status: true, data: {...resp._doc}}) 
    } catch (error) {
        return res.status(500).json({status: false}) 
    }
}
const putProduct = async ({body, params}, res) => {
    try {
        const resp = await Productos.findOne({uuid: params.uuid})
        if(!resp) return res.status(404).json({status: false}) 
        const keysData = Object.keys(body)
        for (const item of keysData) {
            resp[item] = body[item]
        }
        resp.save()
        return res.status(200).json({status: true, data: resp})
    } catch (error) {
        return res.status(500).json({status: false}) 
    }
}
const getProduct = async ({params}, res) => {
    try {
        const resp = await Productos.findOne({uuid: params.uuid})
        if(!resp) return res.status(404).json({status: false})
        return res.status(200).json({status: true, data: resp})
    } catch (error) {
        return res.status(500).json({status: false}) 
    }
}
const getProducts = async (_, res) => {
    try {
        const resp = await Productos.find()
        if(!resp) return res.status(404).json({status: false})
        return res.status(200).json({status: true, data: resp})
    } catch (error) {
        return res.status(500).json({status: false}) 
    }
}
const deleteProduct = async ({params}, res) => {
    try {
        await Productos.deleteOne({uuid: params.uuid})
        return res.status(200).json({status: true})
    } catch (error) {
        return res.status(500).json({status: false}) 
    }
}

export { postProduct, putProduct, getProduct, getProducts, deleteProduct } 