import mongoose from "mongoose"

export default class MongoClient {
    constructor() {
        this.connected = true
        this.client = mongoose
    }

    connect = async()  => {
        try {
            await this.client.connect('mongodb://localhost:27017/arquitectura')
        } catch(error) {
            console.log(error)
            // throw new Error('cannot connect to the database')
        }
    }
}