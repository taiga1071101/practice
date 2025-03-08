import './App.css'
import React,{ useState,useEffect } from 'react';
import Header from './Header';
import {useParams} from 'react-router-dom';

function Posts() {
  const { thread_id } = useParams();  // URLパラメータから掲示板IDを取得
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  // 該当スレッドのポストをフェッチ
  const fetchPosts = async () => {
    try {
      setLoading(true);
      const response = await fetch(`https://railway.bulletinboard.techtrain.dev/threads/${thread_id}/posts?offset=0`);
      const data = await response.json();
      setPosts(data.posts);
    } catch (error) {
      console.error('Failed to fetch posts:', error);
    } finally {
      setLoading(false);
    }
  };

  const onCreatePost = () =>{
    const inputPost = document.getElementById("post").value;
    const body = {"post":inputPost};
    const url = `https://railway.bulletinboard.techtrain.dev/threads/${thread_id}/posts`;
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body) 
    })
    document.getElementById("post").value = "";
    alert("投稿が完了しました")

    fetchPosts();
  };
  
  useEffect(() => {
    fetchPosts();
  }, []); // 初期表示時に一度だけポストをフェッチしてくる。


  
  console.log(posts)
  if (loading) {
    return <div>Loading...</div>;
  }
  const list = posts.map((post) => (<li>{post.post}</li>))


  return (
    <div>
      <Header />
      <main className="main">

      <ul>
        {list}
      </ul>
      <div>
        <input type="text" id="post"/>
      </div>
      <div>
        <button onClick={onCreatePost}>投稿</button>
      </div>
      </main>
    </div>
  );
}

export default Posts;