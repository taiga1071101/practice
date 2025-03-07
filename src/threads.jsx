import './App.css'
import React,{ useState,useEffect } from 'react';
import Header from './Header';
import {useParams} from 'react-router-dom';

function Posts() {
  const { thread_id } = useParams();  // URLパラメータから掲示板IDを取得
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  
  const onCreatePost = () =>{
    let inputTitle = document.getElementById("post").value;
    const body = {"post":inputTitle};
    const url = `https://railway.bulletinboard.techtrain.dev/threads/${thread_id}` +`/posts`;
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body) 
    })
    document.getElementById("post").value = "";
    alert("投稿が完了しました")

    useEffect(()=>{
      onCreatePost();
    },[]);
  };
  
  useEffect(() => {
    // APIなどからデータをフェッチする
    const fetchPosts = async () => {
      try {
        setLoading(true);
        // 実際のAPIエンドポイントを使ってデータを取得
        const response = await fetch(`https://railway.bulletinboard.techtrain.dev/threads/${thread_id}` + `/posts?offset=0`);
        const data = await response.json();
        setPosts(data.posts);
      } catch (error) {
        console.error('Failed to fetch posts:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []); // thread_idが変更されるたびに再度データを取得


  
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