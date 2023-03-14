import { useState, useEffect } from "react";

import styles from './Tasks.module.css'

import { PlusCircle, PencilLine, Notepad } from 'phosphor-react';
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

    function setLocalStorage(tasks: Task[] | null ){
        localStorage.setItem('tasks', JSON.stringify(tasks))
    }

    function getLocalStorage() {
        const tasks = localStorage.getItem('tasks')
        if (tasks) {
            setTasks(JSON.parse(tasks))
        }
    }

    
    function handleCreateNewTask() {
        event!.preventDefault();
        getLocalStorage()


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
            setLocalStorage(updatedTasks)
            setNewTaskText('')
            setEditTask(0);
            return


        } else {
    
            const newTask = {
                id: Math.random(),
                title: newTaskText,
                isComplete: false
            }
            

            setLocalStorage([...tasks, newTask])
            setTasks([...tasks, newTask])
            setNewTaskText('')
            setEditTask(0);
        }
    }

    function doneTask(_task: Task) {
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
        setLocalStorage(updatedTasks)
    }

    function handleDeleteTask(_task: Task) {
        const updatedTasks = tasks.filter((task) => task.id !== _task.id)
        
        setTasks(updatedTasks)
        setLocalStorage(updatedTasks)
    }


    function handleEditTask(_task: Task) {
       
       const taskToUpdate = tasks.find((task) => task.id === _task.id)
        
        setNewTaskText(taskToUpdate!.title)
        setEditTask(taskToUpdate!.id);
    }
    const isNewTaskInputEmpty = newTaskText.length === 0  

    useEffect(() => {
        const tasks = localStorage.getItem('tasks')
        if (tasks === null) {
            return
        } else {
            setTasks(JSON.parse(tasks))
        }
    }, [])

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
                    required
                />

                <button
                    type="submit" 
                    disabled={isNewTaskInputEmpty}
                    title="Criar tarefa">
                    {editTask ? <PencilLine size={24}  /> : <PlusCircle size={24} />}
                </button>
            </form>
            
            <div className={styles.totalStyle}>
                <p>
                    
                    

                    
                    {' '} 
                    {tasks.reduce((acc, task) => {
                        if (task.isComplete) {
                            return acc + 1
                        }
                        return acc
                    }, 0)}
                    /
                    {tasks.reduce((acc, task) => {
                        if (task.isComplete) {
                            return acc + 1
                        }
                        return acc
                    }, 0) + tasks.reduce((acc, task) => {
                        if (!task.isComplete) {
                            return acc + 1
                        }
                        return acc
                    }, 0) }
                </p>
            </div>
            
                {
                (tasks.length === 0) && (
                    
                    <>
                        <p className={styles.MessageZeroTasks}>  <Notepad size={74} className={styles.notepad} />Nenhuma tarefa cadastrada</p>
                    </>
                    
                    ) || (
                        
                    tasks.map(task => (
                        <Task
                            key={task.id}
                            task={task}
                            onDoneTask={doneTask}
                            onEditTask={handleEditTask}
                            onDeleteTask={handleDeleteTask}
                        />
                    ))
                                  
                )
                }

            <a href="https://github.com/jorgediasdsg/api" target="_blank"><p className={styles.author}>@jorgediasdsg</p></a>
        </>
    )
}