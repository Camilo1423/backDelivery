import { Ordenes } from "../models/order.schema.js"
import { newOrder } from "../valueObjects/new.order.js"

const postOrder = async ({body}, res) => {
    try {
        const data = newOrder(body)
        const resp = await Ordenes.create({...data})
        if(!resp) return res.status(404).json({status: false}) 
        return res.status(200).json({status: true, data: {...resp._doc}}) 
    } catch (error) {
        return res.status(500).json({status: false}) 
    }
}
const putOrder = async ({body, params}, res) => {
    try {
        const resp = await Ordenes.findOne({uuid: params.uuid})
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
const getOrder = async ({params}, res) => {
    try {
        const resp = await Ordenes.findOne({uuid: params.uuid})
        if(!resp) return res.status(404).json({status: false})
        return res.status(200).json({status: true, data: resp})
    } catch (error) {
        return res.status(500).json({status: false}) 
    }
}
const getOrders = async (_, res) => {
    try {
        const resp = await Ordenes.find()
        if(!resp) return res.status(404).json({status: false})
        return res.status(200).json({status: true, data: resp})
    } catch (error) {
        return res.status(500).json({status: false}) 
    }
}
const deleteOrder = async ({params}, res) => {
    try {
        await Ordenes.deleteOne({uuid: params.uuid})
        return res.status(200).json({status: true})
    } catch (error) {
        return res.status(500).json({status: false}) 
    }
}

export { postOrder, putOrder, getOrder, getOrders, deleteOrder } 