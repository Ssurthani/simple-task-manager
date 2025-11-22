import React,{useState,useEffect} from 'react';
import TaskList from './components/TaskList';
import API from './api';

export default function App(){
 const [tasks,setTasks]=useState([]);
 const [form,setForm]=useState({title:'',importance:'medium',deadline:''});

 const load=async()=>{setTasks((await API.get('/tasks')).data);};
 const create=async()=>{await API.post('/tasks',form);load();};

 useEffect(()=>{load();},[]);

 return <div style={{padding:20}}>
  <h1>Simple Task Manager</h1>
  <input placeholder="Title" onChange={e=>setForm({...form,title:e.target.value})}/>
  <select onChange={e=>setForm({...form,importance:e.target.value})}>
    <option>low</option><option>medium</option><option>high</option>
  </select>
  <input type="date" onChange={e=>setForm({...form,deadline:e.target.value})}/>
  <button onClick={create}>Add</button>
  <TaskList tasks={tasks}/>
 </div>;
}
