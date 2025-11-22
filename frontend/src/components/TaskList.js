export default function TaskList({tasks}){
 return <div style={{marginTop:20}}>
  <h3>Tasks</h3>
  {tasks.map(t=> <div key={t._id} style={{border:'1px solid #ccc',margin:5,padding:5}}>
    <b>{t.title}</b><br/>Importance: {t.importance}<br/>Deadline: {t.deadline?.substring(0,10)}<br/>Priority: {t.priority}
  </div>)}
 </div>;
}