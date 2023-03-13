import styles from './Task.module.css';


import { Trash, PencilLine, Circle, CheckCircle, ArrowsOutLineHorizontal } from 'phosphor-react';

interface Task {
    id: number;
    title: string;
    isComplete: boolean;
}


interface TaskProps {
    task: Task;
    onDoneTask?: (task: Task) => void;
    onEditTask?: (task: Task) => void;
}


export function Task({ task, onDoneTask, onEditTask }: TaskProps) {

    
    
    function handleDoneTask() {
        onDoneTask!(task)
    }

    function handleEditTask() {
        onEditTask!(task)
    }


    return (
        <div className={styles.taskLine}>
                <button
                onClick={handleDoneTask}
                title="Encerrar tarefa">
                {task.isComplete ? <CheckCircle size={20} /> : <Circle size={20} />}
                
                </button>
            
            <p>{task.isComplete ? <s>{task.title}</s> : task.title}</p>

                <div className={styles.taskOptions}>
                <button
                    onClick={handleEditTask}
                    title="Editar tarefa">
                    <PencilLine size={20} />
                </button>
                <button
                    // onClick={handleDeleteComment}
                    title="Deletar tarefa">
                    <Trash size={24} />
                </button>
                </div>
            
        </div>

    );
}