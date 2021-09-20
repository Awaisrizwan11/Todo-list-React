import React , {useState} from 'react'
import {useDispatch} from 'react-redux'


function Todoitem({task}) {

    const [show, setshow] = useState('none')
    const [newtask,setnewtask] = useState('')

    const dispatch = useDispatch()

function deleteitem(task) {

    dispatch({type:'DELETE_TASK', payload: task})
}

function edittask() {
    setshow('inline')
}

function finaledit(task) {
    dispatch({type: 'EDIT_TASK' , payload :{oldtask: task , newtask : newtask}})
    setshow('none')
}
    
    return <div>

       <div className="row justify-content-center">

           <div className='col-md-9'>

                    <h1 className='text-left' style={{textAlign:'left'}}>{task}</h1>
             </div>

                    <div className='col-md-1'>

                            <button onClick={edittask} className='btn btn-warning'>Edit</button>

                    </div>

                        <div className='col-md-1'>

                            <button onClick={()=> deleteitem(task)} className='btn btn-danger'>Delete</button>

                        </div>

       </div>
                             <input type='text' style={{display: show}} value={newtask} 
                             onChange={(e)=>{setnewtask(e.target.value)}} />
                             <button className ='btn btn-success m-1' style={{display: show}} onClick={()=>{finaledit(task)}} >FINAL Edit</button>

                             <hr style={{borderColor:'black'}} />
    </div>
}

export default Todoitem