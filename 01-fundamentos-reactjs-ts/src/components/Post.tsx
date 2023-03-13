import { FormEvent, useState, ChangeEvent, InvalidEvent } from 'react';
import { format, formatDistanceToNow } from 'date-fns'
import ptBr from 'date-fns/locale/pt-BR'


import { Avatar } from './Avatar'
import { Comment } from './Comment'

import styles from './Post.module.css'

interface Author {
    name: string
    role: string
    avatarUrl: string
        
}

interface Content {
    type: 'paragraph' | 'image' | 'hashtag' | 'link'
    content: string
}

export interface PostType {
    id: number
    publishedAt: Date
    author: Author
    content: Content[]
}

interface PostProps {
    post: PostType
}

export function Post({ post }: PostProps) {
    // desestruturação do post informando o tipo da variável


    const [comments, setComments] = useState(['Post muito bacana heim?!'])    
    
    const [newCommentText, setNewCommentText] = useState('')
    
    const publishedDateFormat = format(post.publishedAt, "d 'de' LLLL 'às' HH:mm'h'", { locale: ptBr })

    const publishedDateRelativeToNow = formatDistanceToNow(post.publishedAt, { locale: ptBr, addSuffix: true })

    function handleCreateNewComment(event:FormEvent) {
        event.preventDefault();
        setComments([...comments, newCommentText])
        setNewCommentText('')
    }

    function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity('')
        setNewCommentText(event.target.value)
    }

    function handleNewCommentInvalid(event:InvalidEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity('O comentário não pode ser vazio!')
    }

    function deleteComment(commentToDelete: string) {
        console.log(`Deletar comentário: ${commentToDelete}`)
        const commentsWithoutDeletedOne = comments.filter((comment) => comment !== commentToDelete)
        setComments(commentsWithoutDeletedOne)
    }

    const isNewCommentInputEmpty = newCommentText.length === 0 

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={post.author.avatarUrl} />
                    
                    <div className={ styles.authorInfo}>
                        <strong>{post.author.name}</strong>
                        <span>{post.author.role}</span>
                    </div>
                </div>
                <time title={publishedDateFormat} dateTime={post.publishedAt.toString()}>{publishedDateRelativeToNow}</time>
            </header>
            <div className={styles.content}>
                {post.content.map((line) => {
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
                    onInvalid={ handleNewCommentInvalid }
                    required

                />
                
                <footer>
                    <button type="submit" disabled={isNewCommentInputEmpty}>Publicar</button>
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