import styles from "./todoItem.module.css"
export default function TodoItem({item, todos,setTodos} ){
    function handleDelete(){
      console.log("Delete button is clicked for item",item)
      setTodos (todos.filter((todo)=> todo !== item))
      
    }
    function handleClick(name){
     const newArray =   todos.map((todo) => 
            todo.name === name? {...todo, done: !todo.done} : todo
    )
    setTodos(newArray)
    }
     const classComplete = item.done ? styles.completed : ""
    return(
        <div className={styles.item}>
        <div className={styles.itemName}>
            <span className={classComplete} onClick={()=>handleClick(item.name)}>{item.name}</span>
          
        <span>
            <button onClick= {()=> handleDelete(item)} className={styles.deleteButton}>x</button>
        </span>
        </div>
        
        <hr className={styles.line}></hr>
   </div>
    )
   
}