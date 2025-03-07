import React from 'react';
import { BrowserRouter as Router, Route,Routes} from 'react-router-dom';

import Home from './Home';
import NewThreads from './newthreads';
import Threads from './threads';

const App = () => {
  return (
    <div>
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/threads/new" element={<NewThreads/>} />
        <Route path="/threads/:thread_id" element={<Threads/>} />
      </Routes>
    </Router>
    </div>
  );
};


export default App