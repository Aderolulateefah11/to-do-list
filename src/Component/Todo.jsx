import { useState } from "react"

import Forms from "./Forms";
import TodoList from "./TodoList";
import Footers from "./Footers";

export default function Todo(){
    const [todos,setTodos]=useState([])
    const CompletedTodos =todos.filter((todo)=>todo.done).length
    const TotalTodos=todos.length
    return(
        <div>
        <Forms  todos={todos} setTodos={setTodos}/>
        <TodoList todos={todos} setTodos={setTodos}/>
         <Footers CompletedTodos={CompletedTodos} TotalTodos={TotalTodos} />

        
    </div>
    );
    
}