import express from 'express';
import Task from '../models/Task.js';
import {calculatePriority} from '../controllers/taskController.js';

const r=express.Router();

r.post('/',async(req,res)=>{
 const p=calculatePriority(req.body);
 const t=new Task({...req.body,priority:p});
 await t.save();
 res.json(t);
});

r.get('/',async(req,res)=>{
 res.json(await Task.find().sort({priority:-1}));
});

export default r;
