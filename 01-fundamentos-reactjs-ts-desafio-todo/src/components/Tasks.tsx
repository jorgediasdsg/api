import { useState } from "react";

import styles from './Tasks.module.css'

import { PlusCircle, PencilLine } from 'phosphor-react';
import { Task } from "./Task";

export function Tasks() {
    
    const [tasks, setTasks] = useState<Task[]>([])
    const [newTaskText, setNewTaskText] = useState('')
    const [editTask, setEditTask] = useState(0)

    interface Task {
        id: number;
        title: string;
        isComplete: boolean;
        doneTask?: (task: Task) => void;
    }

    function handleNewTaskChange(event: React.ChangeEvent<HTMLInputElement>) {
        setNewTaskText(event.target.value)
    }
    
    function handleCreateNewTask() {
        event!.preventDefault();

        if (editTask > 0) {
        
            const updatedTasks = tasks.map((task) => {
                if (task.id === editTask) {
                    return {
                        ...task,
                        title: newTaskText
                    }
                }
                return task
            })
            setTasks(updatedTasks)
            setNewTaskText('')
            setEditTask(0);
            return


        } else {
    
            const newTask = {
                id: Math.random(),
                title: newTaskText,
                isComplete: false
            }
            

            setTasks([...tasks, newTask])
            setNewTaskText('')
            setEditTask(0);
        }
    }

    function handleSaveTask() {
        event!.preventDefault();
        const updatedTasks = tasks.map((task) => {
            if (task.id === task.id) {
                return {
                    ...task,
                    title: newTaskText
                }
            }
            return task
        })
        setTasks(updatedTasks)
        setNewTaskText('')
        setEditTask(0);
    }

    function doneTask(_task: Task) {
        console.log('Tarefa concluída')
        const updatedTasks = tasks.map((task) => {
            if (task.id === _task.id) {
                return {
                    ...task,
                    isComplete: !task.isComplete
                }
            }
            return task
        })
        setTasks(updatedTasks)
    }

    function handleDeleteTask(_task: Task) {
        console.log('Tarefa concluída')
        const updatedTasks = tasks.filter((task) => task.id !== _task.id)
        setTasks(updatedTasks)
    }


    function handleEditTask(_task: Task) {
       console.log('Tarefa editada')
        // Find task to update 
       const taskToUpdate = tasks.find((task) => task.id === _task.id)
        setNewTaskText(taskToUpdate!.title)
        setEditTask(taskToUpdate!.id);
    }
    const isNewTaskInputEmpty = newTaskText.length === 0 
   

    return (
        <>
            <form
                onSubmit={handleCreateNewTask}
                className={styles.addTaskForm}
            >
                <input
                    name="Task"
                    placeholder="Adicione uma nova tarefa"
                    onChange={handleNewTaskChange}
                    value={newTaskText}
                    // onInvalid={handleNewCommentInvalid}
                    required
                />

                <button
                    type="submit" 
                    disabled={isNewTaskInputEmpty}
                    title="Criar tarefa">
                    {editTask ? <PencilLine size={24}  /> : <PlusCircle size={24} />}
                </button>


            </form>

            {tasks.map(task => (
                <Task
                    key={task.id}
                    task={task}
                    onDoneTask={doneTask}
                    onEditTask={handleEditTask}
                    onDeleteTask={handleDeleteTask}
                />
            ))}

        </>
    )
}