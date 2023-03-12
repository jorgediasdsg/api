import styles from './Post.module.css'

export function Post() {
    return (
        <article className={styles.Post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://github.com/jorgediasdsg.png" />
                    <div className={ styles.authorInfo}>
                        <strong>Jorge Dias</strong>
                        <span>Developer</span>
                    </div>
                </div>
                <time title="12 de Março às 18:50" dateTime="2023-03-12 18:50:21">Publicado à 1 hora</time>
            </header>
            <div className={styles.content}>
                <p>Loren ipsum dolor sit amet consectetur adipisicing elit.</p>
                <p>Quaerat, nemo. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <p>Quaerat, nemo.🤣🤣🤣</p>

                <img src="https://source.unsplash.com/random/600x150" />
            </div>
        </article>
    )
}