import { useState } from 'react';

import { Avatar } from './Avatar';
import styles from './Comment.module.css';

export function Comment({ content, onDeleteComment }) {

    const [likeCount, setLikeCount] = useState(0)


    function hancleDeleteComment() {
        onDeleteComment(content)
    }

    function handleLikeComment() { 
        setLikeCount(likeCount + 1)
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
                    <button onClick={handleLikeComment}>
                        Aplaudir {likeCount}
                    </button>
                </footer>
            </div>

        </div>
                    
    );
}