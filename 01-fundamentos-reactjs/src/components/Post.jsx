import { useState } from 'react';
import { format, formatDistanceToNow } from 'date-fns'
import ptBr from 'date-fns/locale/pt-BR'


import { Avatar } from './Avatar'
import { Comment } from './Comment'

import styles from './Post.module.css'


export function Post({post}) {
    const { author, content, publishedAt } = post

    const [comments, setComments] = useState([
        'Post muito bacana heim?!'
    ])    
    const [newCommentText, setNewCommentText] = useState('')
    
    const publishedDateFormat = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", { locale: ptBr })

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, { locale: ptBr, addSuffix: true })

    function handleCreateNewComment() {
        event.preventDefault();
        setComments([...comments, newCommentText])
        setNewCommentText('')
    }

    function handleNewCommentChange() {
        setNewCommentText(event.target.value)
    }

    function deleteComment(commentToDelete) {
        console.log(`Deletar comentário: ${commentToDelete}`)
        const commentsWithoutDeletedOne = comments.filter((comment) => comment !== commentToDelete)
        setComments(commentsWithoutDeletedOne)
    }

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl} />
                    
                    <div className={ styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>
                <time title={publishedDateFormat} dateTime={publishedAt.toString()}>{publishedDateRelativeToNow}</time>
            </header>
            <div className={styles.content}>
                {content.map((line) => {
                    switch (line.type) {
                        case 'paragraph':
                            return <p  key={line.content}>{line.content}</p>
                        case 'image':
                            return <img key={line.content} src={line.content} alt=""/>
                        case 'hashtag':
                            return <p  key={line.content}>{line.content}</p>
                        case 'link':
                            return <p  key={line.content}><a target="_blank" href={line.content}>{line.content}</a></p>
                        default:
                            return null
                    }
                })}
            </div>
            <form onSubmit={ handleCreateNewComment } className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea
                    name="comment"
                    placeholder="Comente aqui"
                    onChange={handleNewCommentChange}
                    value={newCommentText}
                    required

                />
                
                <footer>
                    <button type="submit" >Publicar</button>
                </footer>
            </form>
            <div className={styles.commentList}>
                {comments.map(comment => {
                    return <Comment
                        key={comment}
                        content={comment}
                        onDeleteComment={deleteComment}
                        />
                })}
            </div>
        </article>
    )
}