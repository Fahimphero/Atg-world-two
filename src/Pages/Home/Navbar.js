import React from 'react';
import search from '../../Images/Vector.svg';
import logo from '../../Images/Union 1.png'
import dropdown from '../../Images/Vector.png'
import './Home.css'
import banner from '../../Images/fotoJoin.png'
import google from '../../Images/google.png'
import facebook from '../../Images/facebook.png'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">


                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse " id="navbarSupportedContent">
                    <div className='mobile w-100 d-flex justify-content-around align-items-center py-2'>
                        <div className='d-flex align-items-center'> <a className="navbar-brand" href=" "><span style={{ color: '#27A365', fontSize: '25px' }}>ATG.</span><span style={{ fontSize: '25px' }}>W<img src={logo} alt="" /></span ><span style={{ fontSize: '25px' }}>RLD</span> </a></div>
                        <div className='mobile-width' >
                            <form className="d-flex" role="search">
                                <input className="form-control ps-5 rounded-pill bg-light background" type="search" placeholder="  Search for your favourite groups in ATG"

                                    aria-label="Search">

                                </input>

                            </form>
                        </div>

                        <div className='d-flex align-items-center'>
                            <button type="button" data-bs-toggle="modal" data-bs-target="#staticBackdrop" className='border-0 bg-light'>    <h5 className='m-0'>Create a acount. <span className='text-primary'>Its free! <span><img src={dropdown} alt="" /></span> </span></h5></button>
                        </div>
                        <div className="modal fade " id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                            <div className="my-5  mx-auto responsive-modal modal-dialog modal-dialog-centered user-name">
                                <div className="modal-content ">
                                    <div style={{ backgroundColor: '#EFFFF4', color: '#008A45' }} className="modal-header">
                                        <h5 className="user-name modal-title " id="staticBackdropLabel">Let's learn share and inspire each other with our passion for computer engineering.Sign up now</h5>

                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        <div className="row">
                                            <div className="col">
                                                <div>
                                                    <h3 className='fw-bold user-name'>Create Account</h3>
                                                </div>

                                                <div className='d-flex '>
                                                    <div className="mb-3">

                                                        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='First Name'></input>

                                                    </div>
                                                    <div className="mb-3">

                                                        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Last Name'></input>

                                                    </div>


                                                </div>
                                                <div className="mb-3">

                                                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Email'></input>
                                                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Password'></input>
                                                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Confirm Password'></input>
                                                    <div className='mt-3'>
                                                        <button className='btn btn-primary rounded-pill w-100'>Create Account</button>
                                                    </div>
                                                    <div className='mt-4'>
                                                        <button className='user-name btn btn-light border border-2 rounded-3 w-100'><img className='icon ' src={facebook} alt="" /> Sign up with Facebook</button>
                                                    </div>
                                                    <div className='mt-3'>
                                                        <button className='user-name btn btn-light border border-2 rounded-3 w-100'><img className='icon' src={google} alt="" /> Sign up with Google</button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col">
                                                <p className='text-end'>Already have an account? <span className='text-primary'>Sign In</span></p>

                                                <img className='img-fluid' src={banner} alt="" />
                                            </div>
                                        </div>

                                    </div>
                                    <div className="modal-footer">
                                        <small>By signing, you agree to our Terms & Conditions, Privacy Policy</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;