import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import './App.css'
import Header from './Header';


function Home() {
  const [threads, setthreads] = useState([])

  useEffect(() => {
    const urls = `https://railway.bulletinboard.techtrain.dev/threads`;
    fetch(urls)
      .then((res) => res.json())
      .then((urls) => setthreads(urls))
      .catch(() => console.log("error"));
  }, []);

  const list = threads.map((thread) => (<Link to={`/threads/${thread.id}`}>{thread.title}<br /></Link>))

  return (
    <>
    <Header />
    <main className="main">
    <div>
      <p>新着スレッド</p>
    </div>
    <div>
      <ul>
        {list}
      </ul>
    </div>
    </main>
    </>
  )
}

export default Home