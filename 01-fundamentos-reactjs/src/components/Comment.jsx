import { Avatar } from './Avatar';
import styles from './Comment.module.css';

export function Comment({ content, onDeleteComment }) {
    function hancleDeleteComment() {
        onDeleteComment(content)
    }

    return (
        <div className={styles.comment}>
            <Avatar src="https://github.com/jorgediasdsg.png" hasBorder={false} />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Jorge Dias</strong>
                            <time title="12 de Março às 18:50" dateTime="2023-03-12 18:50:21">Cerca de à 1 hora atrás</time>
                        </div>
                        <button onClick={ hancleDeleteComment } title="Deleter comentário">
                            Deletar
                        </button>
                    </header>
                    <p>{ content }</p>
                </div>
                <footer>
                    <button>
                        Aplaudir 20
                    </button>
                </footer>
            </div>

        </div>
                    
    );
}