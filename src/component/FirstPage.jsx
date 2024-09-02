import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import NextPage from './NextPage';
import './styles.css';
import UpdateIcon from '@mui/icons-material/Update';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';


const FirstPage = () => {
    const [data,setData]=useState([]);
    const [error,setError]=useState(false);
    const[loading,setLoading]=useState(true);
    
    
    function getdata(){
        axios.get('https://6634798c9bb0df2359a19f31.mockapi.io/UserDetail').then((respones) => {
            setData(respones?.data);
            console.log("ddd", respones);

    }).catch((error)=>{
        setError(true);

    }).finally((loading)=>{
        setLoading(false);
    })
    
    
    }
    useEffect(() => {
        getdata()
      }, [])
      function deletedata(id){
        axios.get('https://6634798c9bb0df2359a19f31.mockapi.io/UserDetail', `${id}`).then((respones) => {
            console.log("ddd", respones);
            let tempdata=data?.filter((item)=>item?.id !==id)
           console.log("rrr", tempdata)
    }).catch((error)=>{
        setError(true);

    }).finally((loading)=>{
        setLoading(false);
    })
    
    
    }
    // useEffect(() => {
    //     getdata()
    //   }, [])
  return (
    <div>
        <div className='headerdiv'>
        <h1>User detalis</h1>
        <div className='inputdiv'>
        <input type='search' placeholder='search' ></input>
        </div>
        <Link to='nextpage'> <button>Add User</button></Link>
        </div>
        <table class='table'>
            <thead>
                <tr>
                    <th scope='col'>ID</th>
                    <th scope='col'>FirstName</th>
                    <th scope='col'>LastName</th>
                    <th scope='col'>Phone</th>
                    <th scope='col'>Email</th>
                    <th scope='col'>Password</th>
                    <th scope='col'>Address</th>
                    <th scope='col'>Action</th>
                </tr>
            </thead>
            <tbody>
                {data?.map((item,index)=>{
                    return(
                        <>
                        <tr>
                            <th scope='row'>{index+1}</th>
                            <td>{item?.firstName}</td>
                            <td>{item?.lastName}</td>
                            <td>{item?.phone}</td>
                            <td>{item?.email}</td>
                            <td>{item?.password}</td>
                            <td>{item?.address}</td>
                            <td>
                            <div>
                                <IconButton>
                                   <Link to='nextpage'> <UpdateIcon onClick={()=>({state:{item}})}/></Link>
                                </IconButton>
                         <IconButton>
                            <DeleteIcon onClick={()=>deletedata(item?.$id)}/>
                         </IconButton>
        
                  </div>
                  </td>
                            
                        </tr>
                        </>
                    )

                })
        
            }
            </tbody>
        </table>
    </div>
  )
}

export default FirstPage