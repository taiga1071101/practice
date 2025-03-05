import './App.css'
import {Link} from 'react-router-dom';

function Header() {
  return (
    <>
    <header className="header">
      <div className="headerfirst">掲示板</div>
      <div className="headersecond">
      <Link to="/threads/new">スレッドをたてる</Link>
      </div> 
    </header>
    </>
  )
}

export default Header