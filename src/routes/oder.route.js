import { Router } from "express"
import { postOrder, putOrder, getOrder, getOrders, deleteOrder} from "../controllers/order.ctrl.js"

const router = Router()

router.post('/create', postOrder)
router.put('/update/:uuid', putOrder)
router.get('/getone/:uuid', getOrder)
router.get('/getall', getOrders)
router.delete('/delete/:uuid', deleteOrder)

export default router