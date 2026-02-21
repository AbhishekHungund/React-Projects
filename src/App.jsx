import {useState} from "react";

function App(){
  const [task,setTask]= useState("");
  const [todos,setTodos]=useState([]);

  const addTask = () => {
    if (task.trim()==="") return;

    setTodos([...todos,task]);
    setTask("");
  }

  const deleteTask =(index) => {
    const newTodos = todos.filter((_,i) => i !== index);
    setTodos(newTodos);
  } 

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center" >
    <div className="bg-white p-6 rounded-lg shadow-md w-96" >
      <h1 className="text-2xl font-bold mb-4 text-center" >Todo App</h1>
      <div className="flex gap-2 mb-4" >
      <input 
      className="border border-grey-700 rounded p-2"
      onKeyDown={(e)=> {
        if(e.key === "Enter") addTask();
      }}
      type="text"
      placeholder="Enter Task"
      value={task}
      onChange={(e)=>
        setTask(e.target.value)
      }/>
      

      <button onClick={addTask } className="bg-blue-500 text-white px-4 rounded" >Add</button>
      </div>


      <h2 className="font-semibold mb-2" >Tasks:</h2>
      {todos.length === 0 ? (
        <p className="text-gray-500" >No tasks yet</p>
      ) : (
        todos.map((t,index)=> (
        <div key={index} className="flex justify-between items-center bg-gray-50 p-2 mb-2 rounded" >
        <p>{t}</p>
        <button onClick={()=> deleteTask(index)
        } className="bg-red-600 text-white rounded px-3 py-1" > Delete</button>
  
        </div>
      )))}
    </div>
    </div>
  )

}

export default App;

/*
import {useState} from "react";

function App(){
  const [task,setTask] = useState("");
  const [todos,setTodos] = useState([]);

  const addTodo= () =>{
    setTodos(...todos,task);
    setTask("");
  } 

  const deleteTask = (index)=>{
    const newTodos= todos.filter((_,i) => i!== index);
    setTodos(newTodos);

  }

  return (
    <div>
      <h1>Todo App</h1>
      <input 
      type="text"
      placeholder="Enter task"
      value={task}
      onChange={(e)=>
        setTask(e.target.value)
      }/>

      <button onClick={addTodo} >Add</button>

      <h2>Tasks</h2>
      {todos.length === 0 ? (
        <p>No tasks yet</p>
      ) : (
        todos.map((t,index)=>(
          <div key={index}>
            <p>{t}</p>
            <button onClick={()=> deleteTask(index)} >Delete</button>
        
  
    </div>
  )



}
export default App;*/