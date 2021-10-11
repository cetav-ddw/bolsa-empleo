import logo from './logo.svg';
import './App.css';
import Suscriber from './components/Suscriber';
import Form from './components/Form';
import Cards from './components/Cards';
import axios from 'axios';
import React, { useState, useEffect } from 'react'
import Paginator from './components/Paginator';

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(2)

  const [posts, setPost] = useState([])
  useEffect(() => {
      axios.get(`https://api.airtable.com/v0/appDz13O7ugHyw4mH/jobs?api_key=keyVGKRZEPpRENeUv`)
          .then(res => {
              setPost(res.data.records)
          })
          .catch(err => {
              console.log(err)
          })
  })
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = pageNumber => setCurrentPage(pageNumber);
  return (
    <div>
      <Suscriber />
      <Form />
      <Cards posts={currentPosts} />
      <Paginator
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      />
    </div>
  );
}

export default App;
