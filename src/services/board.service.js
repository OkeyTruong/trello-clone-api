import { BoardModel } from "*/models/board.model"

const createNewBoard = async(data)=>{
    try {
        const result = await BoardModel.createNewBoard(data)
        return result
    } catch (error) {
        throw new Error(error)
    }
}

export const BoardServices = { createNewBoard }