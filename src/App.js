import React from "react";
import axios from "axios";
import Swal from "sweetalert2";
import './App.css'
import { Button } from "bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { User } from "./components/User";

function App() {

  const [users,setUsers] = React.useState([])
  const [input,setInput] = React.useState('')
  
  const inputHandler = (e) => {
    setInput(e.target.value)
  }

  const submitHandler = (e) => {
    e.preventDefault()
    if(input){
      axios.get(`https://api.github.com/users/${input.trim()}`).then(({data})=> { 

      let user = {
        id:data.id,
        username:data.login,
        followers:data.followers,
        following:data.following,
        image:data.avatar_url,
        bio:data.bio
      }

      let existed = users.find((u)=> u.id == user.id);
      if(existed){
        alert("this user already exists")
      }
      else{
      setUsers([...users,user])

      }

      
    }).catch(()=>{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Cant find user with this username!',
        
      })
    })

    
    }
    else{
      alert("input cannot be empty")
    }

    setInput('')
   
  }

  const deleteHandler = (id) => {
    let filtered = users.filter((user)=>user.id!== id)
    setUsers(filtered)
  }


  return (
    <div className="App container">
      
      <form onSubmit={submitHandler} className="formum">
        <input value={input} onChange={inputHandler}></input>
        <button type="submit"  className="ownbtn">Add</button>
      </form>

      <div className="row users">

        {
          users?.map((user)=>{
            return(
              <User
              username={user.username}
              key={user.id}
              id={user.id}
              image={user.image}
              bio={user.bio}
              followers={user.followers}
              following={user.following}
              onDelete={()=>deleteHandler(user.id)}
              />
            )
          })
        }
    
      </div>


    </div>
  );
}

export default App;
