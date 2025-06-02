import mongoose from 'mongoose'

const mongodb_uri:string = process.env.MONGO_DB_URI! //here ! makes sure the mongodb_uri exists i.e. it is not undefined

if(!mongodb_uri){
    throw new Error("Please define the mongo db url in env file")
}

let cached = global.mongoose; 

if(!cached){
    cached = global.mongoose = {conn:null,promise:null};
}

export async function connectToDatabase(){
    if(cached.conn){
        return cached.conn
    }

    if(!cached.promise){
        const opts = {
            bufferCommands: true,
            maxPoolSize: 10,
        }
        cached.promise = mongoose.connect(mongodb_uri,opts).then(()=>mongoose.connection)
    }



}
