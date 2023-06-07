import { v4 as uuid } from "uuid"

export const newOrder = (data) => {
    return {...data, uuid: uuid()}
}