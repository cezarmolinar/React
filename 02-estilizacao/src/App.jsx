import { Post } from "./components/Post";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";

import './global.css'
import styles from './App.module.css'

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post />
          <Post 
            author="Nome do autor"
            content="Loren ipsum dolor sit amet consectur Loren ipsum dolor sit amet consectur"
          />      
        </main>  
      </div>     
    </div>
  )
}
