import React, { useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import userImg from '../../Images/DefaultUser.png'
import gif from '../../Images/Spinner-1s-104px (2).svg'
import Loading from '../Loading/Loading';
import '../Home/Users.css'

const Users = () => {
    const navigate = useNavigate();
    const [users, setUsers] = useState([]);
    const [userInfo, setUserInfo] = useState({});

    const [name, setName] = useState('');

    // console.log(users.length)
    useEffect(() => {
        fetch('https://602e7c2c4410730017c50b9d.mockapi.io/users')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])

    if (users.length === 0) {
        return <Loading></Loading>
    }

    const handleUserInfo = (id) => {
        fetch(`https://602e7c2c4410730017c50b9d.mockapi.io/users/${id}`)
            .then(res => res.json())
            .then(data => {

                setName(`${data?.profile?.firstName} ${data?.profile?.lastName}`)
                setUserInfo(data)
            })
        // console.log(name)
    }

    if (!userInfo) {
        return <Loading></Loading>
    }




    return (
        <div className='container my-5'>
            <div className="row gx-5">
                <div className="col-lg-4">
                    <div>
                        <h3 className='px-3 py-2 bg-info fw-bold text-center border-top rounded-3'>Users List</h3>
                    </div>
                    {
                        users?.map(user => <div key={user?.id} className=' border rounded-3 align-items-center mb-2 hover-button'>
                            <button onClick={() => handleUserInfo(user?.id)} className='btn border-0 m-0 w-100 '>
                                <div className='d-flex px-5 py-1 align-items-center '>
                                    <p className='m-0'><img style={{ width: '40px' }} src={userImg} alt="" /></p>
                                    <h4 className='m-0 text-center ps-2'> {user?.profile?.firstName} {user?.profile?.lastName}</h4>
                                </div>
                            </button>

                        </div>)
                    }


                </div>
                <div className="col-lg-8">
                    <h3 className='px-3 py-2 bg-info fw-bold text-center border-top rounded-3'>User Details</h3>
                    {userInfo?.profile &&
                        <div>

                            <div>
                                <p className='d-flex justify-content-center'><img src={userInfo?.avatar} style={{ width: '100px' }} alt="No data to show" /></p>
                                <p className='text-center mb-4'>@{userInfo?.profile?.username}</p>
                                <div style={{ margin: '0 100px' }}>
                                    <div className=' rounded-3 mb-3'>
                                        <textarea readOnly alt='No data to show' className="form-control bg-light" defaultValue={userInfo?.Bio} id="exampleFormControlTextarea1" rows="3"></textarea>
                                    </div>


                                    <div className="mb-3">
                                        <label htmlFor="exampleInputName" className="form-label">Full Name</label>

                                        <input type="text" readOnly defaultValue={name} alt='No data to show' className="form-control bg-light" id="exampleInputName" aria-describedby="name"></input>

                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="exampleInputJob" className="form-label">Job Title</label>
                                        <input type="text" readOnly defaultValue={userInfo?.jobTitle} alt='No data to show' className="form-control bg-light" id="exampleInputJob" aria-describedby="jobTitle"></input>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputEmail1" className="form-label">Email Address</label>
                                        <input type="email" readOnly defaultValue={userInfo?.profile?.email} alt='No data to show' className="form-control bg-light" id="exampleInputEmail1" aria-describedby="emailHelp"></input>

                                    </div>
                                </div>


                            </div>

                        </div>

                    }
                </div>

            </div>
        </div >
    );
};

export default Users;