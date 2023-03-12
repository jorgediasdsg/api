import { Header } from './components/Header'
import { Post } from './components/Post'
import { Sidebar } from './components/Sidebar'

import styles from './App.module.css'

import './global.css'

function App() {

  return (
    <>
      <Header />
      <div className={styles.wapper}>
        <Sidebar  />
        <main>

          <Post
            author="Jorge Dias"
            title="Título do post"
            content="Loren ipsum dolor sit amet consectetur adipisicing elit. Quaerat, nemo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, nemo."
            image="https://source.unsplash.com/random/600x150"
            />
          <Post
            author="Camila S"
            title="Título do post"
            content="Loren ipsum dolor sit amet consectetur adipisicing elit. Quaerat, nemo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, nemo."
            image="https://source.unsplash.com/random/600x150"
          />
        </main>
        </div>
    </>
  )
}

export default App
