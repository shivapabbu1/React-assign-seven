import React from 'react'
import { Link } from 'react-router-dom'
 import { useLocation,useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
 import { edit  } from './Slice'; 
 import { useSelector } from 'react-redux';  

const Edit = () => {
    const location = useLocation();  
    const navigate = useNavigate();
    console.log(location.state)
   const index = (location.state.data);
    const dispatch = useDispatch();
   
  const array=useSelector((state)=>state.data)

      const newObj = {
        name: array[index].name,
        age : array[index].age,
        course : array[index].course,
        batch : array[index].batch
    }
    const handleChange=(e)=>{
        newObj[e.target.name] = e.target.value;
        console.log(newObj)

    }
    const handleupdate=(e)=>{
      //    console.log(context.entries[index])
    // payload : parameter passed with the action
    dispatch(edit({newObj,index}));
    //    context.updateFunction(
    //     (prevObj)=>{
    //         prevObj[index] = newObj;
    //         return (prevObj)  //updated prevobj is the new state
    //     }
    //    );
       navigate('/');
    }
    
  
  return (
    <div className='container'>

           <form className='form'>
                  <h2>Update Details</h2>
            <div className="input-container">
               <label htmlFor='name'className="placeholder">Name</label>
               <input name='name'className="input" type="text" onChange={handleChange} placeholder={array[index].name} />
                
            </div>
            <div className="input-container ">
                
                <label htmlFor="lastname" className="placeholder">Age</label>
                <input name='age'className="input" type="number" onChange={handleChange} placeholder={array[index].age}  />
            </div>
            <div className="input-container ">
            
                <label htmlFor="course" className="placeholder">Course</label>
                <input name="course"  className="input" type="text" onChange={handleChange} placeholder={array[index].course}  />
            </div>
            <div className="input-container ">
                
                <label htmlFor="batch" className="placeholder">Batch</label> 
                <input name="batch" type="text" className="input"  onChange={handleChange} placeholder={array[index].batch}  />
            </div>
            <div className='btn'>
            <Link to="/student"><button className="submit-btn" type='submit' onClick={handleupdate}  >Update</button></Link>
            <Link to="/student"><button  className="cancel-btn" type='cancel' >Cancel</button></Link>
            </div>
        </form>
    </div>
    
  )
}

export default Edit