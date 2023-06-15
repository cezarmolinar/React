import { PencilLine } from 'phosphor-react'

import styles from './Sidebar.module.css'

export function Sidebar(){
  return (
    <aside className={styles.sidebar}>
      <img 
        className={styles.cover} 
        src= "https://images.unsplash.com/photo-1592609931095-54a2168ae893?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGRldmVsb3BlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=300&q=50" 
      />
      <div className={styles.profile}>
        <img 
          className={styles.avatar} 
          src= "https://avatars.githubusercontent.com/u/12806963?v=4" 
        />                
        <strong>Cezar A. Molinar</strong>
        <span>Web Developer</span>
      </div>
      <footer>
        <a href='#'>
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  )
}