import styles from './Task.module.css';

import { Trash, PencilLine, Circle, CheckCircle } from 'phosphor-react';

export function Task() {

    return (
        <div className={styles.taskLine}>
                <button
                    // onClick={handleDeleteComment}
                    title="Editar tarefa">
                <CheckCircle size={20} />
                </button>
                {/* <input type="checkbox" /> */}
                <p>Titulo da tarefa</p>

                <div className={styles.taskOptions}>
                <button
                    // onClick={handleDeleteComment}
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