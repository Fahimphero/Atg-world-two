import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import user from '../../Images/DefaultUser.png'

const UserInfo = () => {

    return (
        <div>
            <p className='d-flex justify-content-center'><img src={user} style={{ width: '100px' }} alt="" /></p>

            <div style={{ margin: '0 100px' }}>
                <div className=' rounded-3 mb-3'>
                    <textarea className="form-control bg-light" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <div className="mb-3">
                    <label for="exampleInputName" className="form-label">Full Name</label>
                    <input type="text" className="form-control bg-light" id="exampleInputName" aria-describedby="name"></input>

                </div>
                <div className="mb-3">
                    <label for="exampleInputJob" className="form-label">Job Title</label>
                    <input type="text" className="form-control bg-light" id="exampleInputJob" aria-describedby="jobTitle"></input>
                </div>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control bg-light" id="exampleInputEmail1" aria-describedby="emailHelp"></input>

                </div>
            </div>
        </div>
    );
};

export default UserInfo;