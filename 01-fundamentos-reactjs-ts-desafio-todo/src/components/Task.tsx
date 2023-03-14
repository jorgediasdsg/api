import styles from './Task.module.css';


import { Trash, PencilLine, Circle, CheckCircle } from 'phosphor-react';

interface Task {
    id: number;
    title: string;
    isComplete: boolean;
}


interface TaskProps {
    task: Task;
    onDoneTask?: (task: Task) => void;
    onEditTask?: (task: Task) => void;
    onDeleteTask?: (task: Task) => void;
}


export function Task({ task, onDoneTask, onEditTask, onDeleteTask }: TaskProps) {

    
    
    function handleDoneTask() {
        onDoneTask!(task)
    }

    function handleEditTask() {
        onEditTask!(task)
    }

    function handleDeleteTask() {
        onDeleteTask!(task)
    }



    return (
        <div className={!task.isComplete ? styles.taskLine : styles.taskLineDone}>
                <button
                onClick={handleDoneTask}
                title="Encerrar tarefa">
                {task.isComplete ? <CheckCircle size={26} /> : <Circle size={26} />}
                
                </button>
            
            <p>{task.isComplete ? <s>{task.title}</s> : task.title}</p>

                <div className={styles.taskOptions}>
                <button
                    onClick={handleEditTask}
                    title="Editar tarefa">
                    <PencilLine size={20} />
                </button>
                <button
                    onClick={handleDeleteTask}
                    title="Deletar tarefa">
                    <Trash size={24} />
                </button>
                </div>
            
        </div>

    );
}