import React ,{useState} from 'react'
import Navbar from './Navbar'
import {useDispatch} from 'react-redux'
import {useSelector} from 'react-redux'

function Addtask() {
    
const[Taskname,setTaskname] = useState('')

    const dispatch = useDispatch()
    const taskobj = useSelector(state => state)

function addtask() {

    dispatch({type:'ADD_TASK', payload: Taskname})
    console.log(taskobj.taskitems);
}

    return <div>

        

        <div className='row justify-content-center'>

                <div className='col-md-6 p-3' style={{backgroundColor:'white', borderRadius:'10px'}}>

                    <h1>Add Task component </h1>
                    <input type='text' placeholder='Taskname' className='form-control w-75' style={{display:'inline',borderColor:'Green'}} value={Taskname}
                    onChange={(e)=>{setTaskname(e.target.value)}} />
                    <button onClick={addtask} className ='btn btn-success m-2'>Add task</button>

                </div>

              
        </div>

    </div>
}

export default Addtask