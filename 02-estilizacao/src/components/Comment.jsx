import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'

export function Comment() {
  return (
    <div className={styles.comment}>
      <img className={styles.avatar} src="https://avatars.githubusercontent.com/u/12806963?v=4" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Cezar Molinar</strong>
              <time title='2022-05-11 08:13:30' dateTime='2022-05-11 08:13:30'>Cerca de 1h atrás</time>
            </div>

            <button title='Deletar comentário'>
              <Trash size={24} />
            </button>
          </header>

          <p>Muito bom, parabens!</p>
        </div>

        <footer>
          <button>
            <ThumbsUp /> 
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>

    </div>
  )
}