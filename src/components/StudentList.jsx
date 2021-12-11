import React , {useEffect, useState, useRef} from 'react'
import axios from 'axios';
import './StudentList.css'
import mentorimage from './mentor.svg'
import certificate from './certificate.svg'
import motivation from './motivation.svg'


export default function StudentList() {
    const [userList, setUserList] = useState([])
    const [isContactShown, setContactShown] = useState(false)
    const textarearef =  useRef()


    useEffect(() => {
        const id = localStorage.getItem('studentSubject')

        // Update the document title using the browser API
        axios.get(`http://localhost:3000/getStudents/${id}`).then(resp => {
                setUserList(resp.data)
        });
      },[]);
    return (
        <div className='student-card-container'>
            <div className='student-card-holder'>
                <div className='title-container'>
                    <div className='title'>Mentorok</div>
                    <div className='subtitle'>Találd meg a számodra legmegfelelőbb mentort, vedd fel vele a kapcsolatot és máris kezdődhet a korrepetálás.</div>
                </div>
                    <div className='holder'>
                        {
                            userList.map((item)=>(
                                <div className='student-card'>
                                    <div className='profile-image' ><img src={mentorimage} alt=''/></div>
                                    <div className='student-name'>{item.name}</div>
                                    <div className='category'>
                                        <div><img src={certificate} alt=''/></div>
                                        <div>
                                            <div className='profil'>Profil</div>
                                            <div>{item.category}</div>
                                        </div>
                                    </div>
                                        <div className='motivation'>
                                        <div><img src={motivation} alt=''/></div>
                                            <div>
                                                <div className='profil'>Rólam</div>
                                                <div>Lorem ipsum dolor sit amet, cons adipiscing elit. Donec dignissim mi et dui pretium, eget sodales urna lacinia. Orci varius natoque penatibus et magnis dis parturien montes, nascetur ridiculus mus. </div>
                                            </div>
                                        </div>
                                        <div className='button-container'>
                                             <button onClick={()=> setContactShown(!isContactShown)} className="btn btn-primary btn-lg" type="button">Kapcsolat</button>
                                        </div>
                                </div>
                            ))
                        }
                    </div>
                    {
                        isContactShown && 
                        <div className='contact-modal'>
                            <div><textarea ref={textarearef} placeholder='irj valamit'/></div>
                            <div className='modal-button-container'>
                                <button onClick={()=> setContactShown(!isContactShown)} className="btn btn-danger" type="button">Bezaras</button>
                                <button onClick={()=> console.log(textarearef.current.value,'teaxtarea')} className="btn btn-primary" type="button">Kuldes</button>
                            </div>
                          
                        </div>
                    }
                    <div>

                    </div>
                </div>
        </div>
    )
}
