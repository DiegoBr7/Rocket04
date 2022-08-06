import {Post} from '../src/Post';
import {Header}from './components/Header';

import styles from './App.module.css';

import './global.css'

export function App() {
  return (
  <div>

    <Header/>

    <div className={styles.wrapper} ></div>
    
    <aside>
     sidebar
    </aside>

    <main>
      <Post
      author:Diego Brasileiro
      content:lorenAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
      />

        <Post
      author:Diego Brasileiro
      content:lorenAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
        />
    </main>

  </div>
  )
}


