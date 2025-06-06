import mongoose, { model, models, Schema } from "mongoose";
import bcrypt from "bcryptjs";

export interface InterfaceUser {
    email: string;
    firstName:string;
    lastName:string;
    password: string;
    _id?: mongoose.Types.ObjectId;
    createdAt?: Date;
    updatedAt?: Date;
}

const userSchema = new Schema<InterfaceUser>(
    {
        email:{type:String,required:true,unique:true},
        password:{type:String,required:true},
        firstName:{type:String,required:true},
        lastName:{type:String},
    },
    {timestamps:true}
)

userSchema.pre("save", async function (next){
    if(this.isModified("password")){
        this.password = await bcrypt.hash(this.password,10);
    }
    next();
});

const User = models?.User || model<InterfaceUser>("User",userSchema)
export default User