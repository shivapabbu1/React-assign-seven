import React from 'react'
import { Link } from 'react-router-dom'

import { useSelector } from 'react-redux'
const Student = () => {
  const array =useSelector((state)=>state.data)


   




  return (
    <div className='main'>
        <div className='head'>
      <h1>Student Deatils</h1> 
      <Link to='/addnew'><button className='addbtn'>Add New Student</button></Link>
      </div>
     <div className='table'>
        
         <table border={2}>
         <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Batch</th>
          <th>Course</th>
          <th>Edit</th>
        </tr>
        <tbody>
            {
              array.map((i,index)=>{
                return(
                  <tr key={index}> 
                  <td>{i.name}</td>
                  <td>{i.age}</td>
                  <td>{i.course}</td>
                  <td>{i.batch}</td>
                  <td>
                  {" "}
                        
                        <Link to='/edit' className='editbutn' state={{data:index}}><button>edit</button></Link>
                  
                  </td>
                </tr>
                )
              })
            }
              
            
          
                 
               
          
            </tbody>
            
          
            
          
      </table>
        
     </div> 





    </div>
  )
}

export default Student