import { v4 as uuid } from "uuid"

export const newProduct = (data) => {
    return {...data, uuid: uuid()}
}