import styles from "./footers.module.css"
export default function Footers( {CompletedTodos,TotalTodos} ){
    return(
        <div className={styles.footer}>
            <span className={styles.item}>Completed Todos:{CompletedTodos}</span>
            <span>Total Todos:{TotalTodos}</span>
        </div>
    )
}