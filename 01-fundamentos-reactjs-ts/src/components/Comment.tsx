import { useState } from 'react';

import { Avatar } from './Avatar';
import styles from './Comment.module.css';

import { ThumbsUp, Trash } from 'phosphor-react';

interface CommentsProps {
    content: string;
    onDeleteComment: (comment: string) => void;
}

export function Comment({ content, onDeleteComment }: CommentsProps) {

    const [likeCount, setLikeCount] = useState(0)


    function handleDeleteComment() {
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
                        <button onClick={handleDeleteComment} title="Deletar comentário">
                            <Trash size={24} />
                        </button>
                    </header>
                    <p>{ content }</p>
                </div>
                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
                    
    );
}