import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { add } from './Slice'


const AddNew = () => {  
    const navigate=useNavigate();
const dispatch=useDispatch();
    const newObj = {
        name: "",
        age : "",
        course : "",
        batch : "",
        edit:'edit'
    }  
    const Change=(e)=>{
    newObj[e.target.name]=e.target.value
    console.log(newObj)
    }
     const submit=(e)=>{
        e.preventDefault();
     dispatch(add(newObj))
      console.log('hi')
      navigate('/student')
      }
      
    
    
    


  return (
    <div className='container'>
         <form className='form'>
            <h2>Add New Student</h2>
            <div className="input-container">
               <label htmlFor='name'className="placeholder">Name</label>
               <input name='name'className="input" type="text" placeholder=" " onChange={Change}/>
                
            </div>
            <div className="input-container ">
                
                <label htmlFor="lastname" className="placeholder">Age</label>
                <input name='age'className="input" type="number" placeholder=" " onChange={Change}/>
            </div>
            <div className="input-container ">
            
                <label htmlFor="course" className="placeholder">Course</label>
                <input name="course"  className="input" type="text" placeholder=" " onChange={Change}/>
            </div>
            <div className="input-container ">
                
                <label htmlFor="batch" className="placeholder">Batch</label> 
                <input name="batch" type="text" className="input" placeholder=" " onChange={Change}/>
            </div >
            <div className='btn'>
            <Link to="/student"><button className="submit-btn" type='submit'  onClick={submit}  >submit</button></Link>
            <Link to="/student"><button  className="cancel-btn" type='cancel' >Cancel</button></Link>
            </div>
        </form>
    </div>
  )
}

export default AddNew