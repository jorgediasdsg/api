import styles from './NewTask.module.css'

import { PlusCircle } from 'phosphor-react';

export function NewTask() {
    return (
        <form
            // onSubmit={handleCreateNewComment}
            className={styles.addTaskForm}
        >

            <input
                name="Task"
                placeholder="Adicione uma nova tarefa"
                // onChange={handleNewCommentChange}
                // value={newCommentText}
                // onInvalid={handleNewCommentInvalid}
                required
            />

            <button
                // onClick={handleDeleteComment}
                title="Criar tarefa">
                <PlusCircle size={24} />
            </button>
                
            
        </form>
    )
}