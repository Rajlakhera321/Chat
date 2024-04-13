import mongoose from "mongoose";

export const connection = async () => {
    try {
        await mongoose.connect(process.env.DB_URL,{}).then(()=>{

        }).catch(err=>{console.log(err,"ersdfas")});
    }
    catch (error) {
        process.exit()
    }
}