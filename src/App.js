
import React, { useState, useEffect } from 'react';
import PostList from './components/PostList';
import axios from 'axios';
import Pagination from './components/Pagination';
import queryString from 'query-string';

function App() {
  const [postList, setPostList] = useState([]);
  const [pagination, setPagination] = useState({
    _limit: 10,
    _page: 1,
    _totalRows: 1
  });
  const [filters, setFilters] = useState({
    _page: 1,
    _limit: 10
  })

  useEffect(() => {
    async function fetchData() {
      const queryParams = queryString.stringify(filters);
      const res = await axios.get(`http://js-post-api.herokuapp.com/api/posts?${queryParams}`);
      const { data } = res;
      setPostList(data.data);
      setPagination(data.pagination);
    }

    fetchData();
  }, [filters])

  function handlePageChange(newPage) {
    setFilters({
      ...filters,
      _page: newPage
    })
  }

  return (
    <div className="App">
      my app
      <PostList posts={postList} />
      <Pagination pagination={pagination} onPageChange={handlePageChange} />
    </div>
  )
}

export default App
