import React from 'react'
import {useSelector} from 'react-redux'

function Navbar() {
    
    const taskobj = useSelector(state => state)
    return <div style={{backgroundColor:'whitesmoke' , borderRadius: '10px'}} className='m-5'>

        <h1>Redux-todolist , Total tasks remaining : {taskobj.taskitems.length} </h1>
    </div>
}

export default Navbar