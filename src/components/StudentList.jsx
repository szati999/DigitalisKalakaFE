import React , {useEffect, useState} from 'react'
import axios from 'axios';
import './StudentList.css'



export default function StudentList() {
    const [userList, setUserlist] = useState([
        {
        "id":"R5XvXmekvECbjQeL3jYe",
        "category":"Magyar",
        "email":"kocsoglaika2@gmail.com",
        "name":"Lakatos Winetou2"
        },
        {
        "name":"Lakatos Winetou2",
        "email":"kocsoglaika2@gmail.com",
        "subject":"Magyar",
        "id":"UOyDvON1a9iaBTDVsjAi"
        }
        ])
    useEffect(() => {
        // Update the document title using the browser API
        // axios.get('localhost:3000/getAllStudents').then(resp => {
        //         console.log(resp.data);
        // });
        console.log(userList,'asdasd')
      });
   
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
