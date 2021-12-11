import React , {useEffect, useState} from 'react'
import axios from 'axios';
import './StudentList.css'



export default function StudentList() {
    const [userList, setUserList] = useState([])
   
    useEffect(() => {
        // Update the document title using the browser API
        axios.get('http://localhost:3000/getAllStudents').then(resp => {
                console.log(resp.data);
                setUserList(resp.data)
        });
        console.log(userList,'asdasd')
      },[]);
   
    return (
        <div className='student-card-container'>
            {
                userList.map((item)=>(
                    <div className='student-card'>
                         <div>{item.category}</div>
                         <div>{item.name}</div>
                         <div>{item.email}</div>
                    </div>
                ))
            }
            
        </div>
    )
}
