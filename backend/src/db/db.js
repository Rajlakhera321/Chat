import mongoose from "mongoose";

export const connection = async () => {
    try {
        await mongoose.connect(process.env.DB_URL,{}).then(()=>{
            console.log("connected to database");
        }).catch(err=>{console.log(err,"ersdfas")});
    }
    catch (error) {
        console.log(error)
        process.exit()
    }
}