import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import { Post, PostType } from './components/Post'

import styles from './App.module.css'

import './global.css'



const posts: PostType[]  = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/jorgediasdsg.png',
      name: 'Jorge Dias',
      role: 'Developer'
    },
    content: [
      { type: 'paragraph', content: 'Loren ipsum dolor sit amet consectetur adipisicing elit.' },
      { type: 'paragraph', content: 'Quaerat, nemo. Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
      { type: 'paragraph', content: 'Quaerat, nemo.🤣🤣🤣' },
      { type: 'image', content: 'https://source.unsplash.com/random/750x250' },
      { type: 'paragraph', content: 'Quaerat, nemo.' },
      { type: 'hashtag', content: '#aa #bb #cc' },
      { type: 'link', content: 'https://www.google.com.br' },
    ],
    publishedAt: new Date('2023-03-12 18:50:21'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'CTO Rocketseat'
    },
    content: [
      { type: 'paragraph', content: 'Another bit the dust.' },
      { type: 'image', content: 'https://source.unsplash.com/random/650x650' },
      { type: 'hashtag', content: '#aa #bb #cc' },
      { type: 'link', content: 'https://www.google.com.br' },
    ],
    publishedAt: new Date('2023-03-12 18:50:21'),
  },
]

export function App() {
  return (
    <>
      <Header />
      <div className={styles.wapper}>
        <Sidebar  />
        <main>
          {posts.map(post => (
            <Post
              key={post.id}
              post={post}
            />
          ))}
        </main>
        </div>
    </>
  )
}

export default App
