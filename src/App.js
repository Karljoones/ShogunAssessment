import React, {useState, useEffect} from 'react'
import './App.css';
import CommentSection from './Components/CommentSection'

function App() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/comments?_limit=10')
    .then((response) => response.json())
    .then((json) => setComments(json));
  }, []);

  return (
    <div className="App">
      <CommentSection comments={comments} />
    </div>
  );
}

export default App;
