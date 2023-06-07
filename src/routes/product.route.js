import { Router } from "express"
import { postProduct, putProduct, getProduct, getProducts, deleteProduct} from "../controllers/product.ctrl.js"

const router = Router()

router.post('/create', postProduct)
router.put('/update/:uuid', putProduct)
router.get('/getone/:uuid', getProduct)
router.get('/getall', getProducts)
router.delete('/delete/:uuid', deleteProduct)

export default router