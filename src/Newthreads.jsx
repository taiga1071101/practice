import './App.css'
import Header from './Header';
import {Link} from 'react-router-dom';

function NewThreads() {
const onCreateThread = () =>{
  const inputTitle = document.getElementById("title").value;
  const body = {"title":inputTitle};
  const url = "https://railway.bulletinboard.techtrain.dev/threads";
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body) 
  })
}

  return (
    <>
    <Header/>
    <main className="main">
      <div>
        <p>スレッド新規作成</p>
      </div>
      <div>
        <input type="text" id="title"/>
      </div>
      <div className="undercontents">
        <div className="headersecond">
          <Link to="/">Topに戻る</Link>
        </div>
        <div>
          <button onClick={onCreateThread}>作成</button>
        </div>
      </div>
    </main>
    </>
  )
}

export default NewThreads;