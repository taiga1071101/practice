import './App.css'
import React,{ useState,useEffect } from 'react';
import Header from './Header';
import {useParams} from 'react-router-dom';

function Threads() {
  const { thread_id } = useParams();  // URLパラメータから掲示板IDを取得
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // APIなどからデータをフェッチする
    const fetchPosts = async () => {
      try {
        setLoading(true);
        // 実際のAPIエンドポイントを使ってデータを取得
        const response = await fetch(`https://railway.bulletinboard.techtrain.dev/threads/${thread_id}` + `/posts?offset=1`);
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error('Failed to fetch posts:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [thread_id]); // thread_idが変更されるたびに再度データを取得

  console.log(posts)
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Header />
      <h1>Board {thread_id} Posts</h1>

        <ul>
          {posts.map((post) => (
            <li key={post.threadId}>
              <h3>{post.posts}</h3>
             
            </li>
          ))}
        </ul>
    </div>
  );
}


export default Threads;