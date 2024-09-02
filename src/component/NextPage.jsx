
import axios from 'axios';
import React, { useState } from 'react'
import { useLocation,  } from 'react-router-dom'


const NextPage = () => {
    const[firstName,setFirstName]=useState("");
    const[lastName,setLastName]=useState("");
    const[phone,setPhone]=useState("");
    const[email,setEmail]=useState("");
    const[password,SetPassword]=useState("");
    const [loading,setLoading]=useState(true);
    const [error,setError]=useState(false);
    const {state}=useLocation();
    

    function updateData(){
      const {item}=state;
      axios.put('https://664a3286a300e8795d414a3e.mockapi.io/userDetlies'+`/${item?.id}`,{firstName,lastName,phone,email,password}).then((respones)=>{
        console.log("putrr",respones)
      }).catch((error)=>{
        setError(true)
      }).finally(()=>{
        setLoading(false);
      })
    }
    function mangeUser(){
      axios.post('https://664a3286a300e8795d414a3e.mockapi.io/userDetlies',
      {firstName,lastName,phone,email,password}).then((respones)=>{
       console.log("rr",respones)
      }).catch((error)=>{
console.log("ee",error)
      }).finally(()=>{
        setLoading(false)
      })
    }
  return (
    <div>
         <h1>Add New User</h1>
         <form className='formdiv'>
         <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">FirstName</label>
    <input type="text" class="form-control"  onChange={(e)=>setFirstName(e.target.value)} value={firstName}></input>
    <div id="first" class="form-text" ></div>
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">LastName</label>
    <input type="text" class="form-control"  onChange={(e)=>setLastName(e.target.value)} value={lastName}></input>
    <div id="last" class="form-text"></div>
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Phone</label>
    <input type="text" class="form-control"  onChange={(e)=>setPhone(e.target.value)}value={phone}></input>
    <div id="last" class="form-text"></div>
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email </label>
    <input type="email" required class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" 
     onChange={(e)=>setEmail(e.target.value)} value={email}></input>
    <div id="emailHelp" class="form-text"></div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1"  
    onChange={(e)=>SetPassword(e.target.value)} value={password} ></input>
  </div>
  <button type="submit" class="btn btn-primary" onClick={mangeUser}>Add User</button>
  <button type="submit" class="btn btn-primary" onClick={updateData}>UpDate Data</button>
</form>
    </div>
  )
}

export default NextPage
