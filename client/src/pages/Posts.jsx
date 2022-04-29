import React, { useState, useMemo, useEffect } from "react";
import '../styles/App.css'
import PostList from "../components/PostList";
import PostFilter from "../components/PostFilter";
import { usePosts, useSortedPosts } from "../hooks/usePosts"
import Loader from "../components/UI/Loader/Loader";
import { useFetching } from "../hooks/useFetching";
import Pagination  from '../components/UI/pagination/Pagination'
import UserService from "../services/UserService";

function Posts() {
    const [filter, setFilter] = useState({ sort: '', query: '' })
    const [users, setUsers] = useState([]);
    const sortedAndSearchedPosts = usePosts(users, filter.sort, filter.query)

    const [fetchUsers, isUsersLoading, userError] = useFetching( async () => {
      try {
        const response = await UserService.getUsers();
        console.log(response)
        setUsers(response.data)
        
      } catch (e) {
        console.log(e)
      }
      
    })
    
    useEffect(() => { 
      fetchUsers()
     }, [])

    return (
      <div className="App">
        <hr style={{ margin: '15px 0px' }} />
        <PostFilter
          filter={filter}
          setFilter={setFilter}
        />
        {userError && 
          <h1>Произошла ошибка ${userError}</h1>
        }
  
        {isUsersLoading 
          ? <div style={{display: 'flex', justifyContent: "center", marginTop: 50}}><Loader/></div>
          : <PostList users={sortedAndSearchedPosts} title={"Пользователи"} />
        }
      </div>
    );
  }
  
  export default Posts;
  