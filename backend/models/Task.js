import mongoose from 'mongoose';
const TaskSchema=new mongoose.Schema({title:String,importance:String,deadline:Date,priority:Number});
export default mongoose.model('Task',TaskSchema);
