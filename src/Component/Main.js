import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import ShowCV from './ShowCV';
import StaticCV from './StaticCV';

const Main = () => {
    const [data, setdata] = useState();
    const { register, handleSubmit } = useForm();
    const handleRegistration = (data) => {
        setdata(data)
    }
    { data && console.log(data) }

    const clickNext = () => {
        var firstBtn = document.getElementById('section-1');
        var secondBtn = document.getElementById('section-2');
        var thirdBtn = document.getElementById('section-3');
        var firstCVview = document.getElementById('firstCVview');
        if (firstBtn.style.display === "") {
            firstBtn.style.display = "none";
            firstCVview.style.display = "none";
            secondBtn.style.display = "block";
        } else if (secondBtn.style.display === "block") {
            firstBtn.style.display = "none";
            secondBtn.style.display = "none";
            thirdBtn.style.display = "block";
        }
    }

    const clickBack = () => {
        var firstBtn = document.getElementById('section-1');
        var secondBtn = document.getElementById('section-2');
        var thirdBtn = document.getElementById('section-3');
        var firstCVview = document.getElementById('firstCVview');
        var cv = document.getElementById('cv-view');
        if (secondBtn.style.display === "block") {
            firstBtn.style.display = "";
            firstCVview.style.display = "";
            secondBtn.style.display = "none";
        } else if (thirdBtn.style.display === "block") {
            secondBtn.style.display = "block";
            thirdBtn.style.display = "none";
            cv.style.display = "none"
        }
    }

    const CVShow = () => {
        var cv = document.getElementById('cv-view');
        var btn_top = document.getElementById('btn-top');
        var thirdBtn = document.getElementById('section-3');
        if (cv.style.display === "none") {
            cv.style.display = "block";
            thirdBtn.style.display = "none";
            btn_top.style.display = "flex"
        }
        else {
            cv.style.display = "none";
            thirdBtn.style.display = "block";
            btn_top.style.display = "none"
        }
    }



    return (
        <>
            <div className="container">
                <div className="form-container col-xxl-7 col-xl-6 col-lg-7 col-md-8 col-sm-12">
                    <form onSubmit={handleSubmit(handleRegistration)}>
                        <div className="main-title" id='section-1'>
                            <p>Basic Info</p>
                            <div className="mb-1">
                                <label className="form-label">Your Name</label>
                                <input type="text" className="form-control" name='name' {...register('name')} placeholder='Chetan Salvi' />
                            </div>
                            <div className="mb-1">
                                <label className="form-label">Profile Picture</label>
                                <input type="file" accept='image/*' name='image' {...register('image')} className="form-control" />
                            </div>
                            <div className="mb-1">
                                <label className="form-label">Occupation</label>
                                <input type="text" className="form-control" name='occup' {...register('occupation')} placeholder='Web Developer' />
                            </div>
                            <div className="mb-1">
                                <label className="form-label">E-mail</label>
                                <input type="email" className="form-control" name='email' {...register('email')} placeholder='abc@gmail.com' />
                            </div>
                            <div className="mb-1">
                                <label className="form-label">Mobile no</label>
                                <input type="number" className="form-control" name='number' {...register('mnumber')} placeholder='+919876543210' />
                            </div>
                            <div className="mb-1">
                                <label className="form-label">Your location</label>
                                <input type="text" className="form-control" name='location' {...register('location')} placeholder='Gift City,Ahmedabad' />
                            </div>
                            <button type="button" className=" btn-next" onClick={clickNext} >Next</button>
                        </div>


                        <div className="main-title" id='section-2'>
                            <p>Education</p>
                            <div className="mb-1">
                                <label className="form-label">Degree</label>
                                <input type="text" className="form-control" name='degree' {...register('degree')} placeholder='Bachelor in Science' />
                            </div>
                            <div className="mb-1">
                                <label className="form-label">Institution</label>
                                <input type="text" className="form-control" name='institution' {...register('institution')} placeholder='Stanford University' />
                            </div>
                            <div className="mb-1">
                                <label className="form-label">State</label>
                                <input type="text" className="form-control" name='state' {...register('state')} placeholder='Gujarat' />
                            </div>
                            <div className="mb-1">
                                <label className="form-label">Skills</label>
                                <input type="text" className="form-control" name='skill' {...register('skill')} placeholder='HTML, CSS, JAVASCRIPT, REACT' />
                            </div>
                            <div className="mb-1">
                                <label className="form-label">Graduation year</label>
                                <input type="number" className="form-control" name='gyear' {...register('gyear')} placeholder='2021' />
                            </div>
                            <div className="btn-box">
                                <button type="button" className=" btn-back" onClick={clickBack} >Previous</button>
                                <button type="button" className=" btn-next" onClick={clickNext}>Next</button>
                            </div>
                        </div>


                        <div className="main-title" id='section-3'>
                            <p>Work Experience</p>
                            <div className="mb-1">
                                <label className="form-label">Your Role</label>
                                <input type="text" className="form-control" name='yrole' {...register('yrole')} placeholder='Web Developer' />
                            </div>
                            <div className="mb-1">
                                <label className="form-label">Company</label>
                                <input type="text" className="form-control" name='company' {...register('company')} placeholder='Facebook' />
                            </div>
                            <div className="mb-1">
                                <label className="form-label">Start date</label>
                                <input type="date" className="form-control" name='sdate' {...register('sdate')} />
                            </div>
                            <div className="mb-1">
                                <label className="form-label">End date</label>
                                <input type="date" className="form-control" name='edate' {...register('edate')} />
                            </div>
                            <div className="mb-1">
                                <label className="form-label">About Yourself</label>
                                <textarea  className="form-control" name='desc' {...register('desc')} />
                            </div>

                            <div className="btn-box">
                                <button type="button" className=" btn-back" onClick={clickBack}>Previous</button>
                                <button type="submit" className=" btn-next" onClick={CVShow} >Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
                <div id="firstCVview"><StaticCV /></div>
                <div id="cv-view">
                    <ShowCV Main={data} />
                    <div className='btn-top-back' id='btn-top'>
                        <button type="button" className="btn-back end-btn" onClick={CVShow} >Back</button>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Main