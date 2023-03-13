import styles from './NewTask.module.css'

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
                type="submit"
                // disabled={isNewCommentInputEmpty}
            >
                Adicionar
            </button>
            
        </form>
    )
}