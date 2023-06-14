import { Post } from "./Post";
import { Header } from "./components/Header";
import './global.css'
import styles from './App.module.css'
import { Sidebar } from "./components/Sidebar";

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <h1>Hello World</h1>
          <Post 
            author="Nome do autor"
            content="Loren ipsum dolor sit amet consectur Loren ipsum dolor sit amet consectur"
          />      
        </main>  
      </div>     
    </div>
  )
}
