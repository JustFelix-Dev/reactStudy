import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import List from './assets/Components/List'
import useFetch from './assets/Components/useFetch'
import { BrowserRouter as Router , Route ,Routes } from 'react-router-dom'
import Navbar from './assets/Navbar'
import Create from './assets/Components/Create'
import BlogDetails from './assets/Components/BlogDetails'
import Error from './assets/Components/Error'

function App() {
   console.log('Helllo World!')
  
   const  { isPending,data:list,error } = useFetch('http://localhost:8000/details')

  
//    const handleDelete = (id)=>{
//       const newList = list.filter((list)=> list.id != id)
//        setList(newList)
//   }

  return (
     <>
      <Navbar/>
     <Router>
      <Routes>
         <Route  path='/'>
     { error && <div>{error}</div>}
     { isPending && <div>Loading...</div>}
     <List  details={list}/> <br />
         </Route>
         <Route path='/create'>
         <Create/>
         </Route>
         <Route path='/blogs/:id'>
          <BlogDetails/>
         </Route>
         <Route path='*'>
            <Error/>
         </Route>

      </Routes>
     </Router>
     <List  details={list.filter((item)=> item.author == "Felix")} handleDelete={handleDelete}/>
     </>
  )
}

export default App;
