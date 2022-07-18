import React from 'react'
import Image from '../Image/executive-profile-1.png'

const StaticCV = () => {

    const PrintCV = () => {
        window.print();
    }
  return (
    <>
    <div className="firstCV">
     <div className="row justify-content-center w-100">
                <div className="col-md-10">
                    <div className="cvWrapper">
                        <div className="intro">
                            <img src={Image} alt="image" id="pic" />
                            <h1 id="personName">John Dev</h1>
                            <div className="occupation">Web Developer</div>
                            <div className="desc">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti fuga 
                            veniam, animi vero tenetur suscipit numquam sit libero minus voluptas. Sequi aut quis unde
                             possimus.
                             Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate, quis tempore vero fugit officia 
                             error repudiandae deleniti minus quisquam sed?</div>
                        </div>
                        <div className="contentWrapper">
                            <div className="section one">
                                <h3 className="sectionTitle">Address</h3>
                                <div className="mail"><i class="fa-regular fa-envelope"></i> - John.dev@email.com</div>
                                <div className="mobile"><i class="fa-solid fa-phone"></i> - +919876543210</div>
                                <div className="location"><i class="fa-solid fa-location-dot"></i> - New York</div>
                            </div>
                            <div className="section two">
                                <h3 className="sectionTitle">EDUCTION</h3>
                                <div className="degree"><i class="fa-solid fa-graduation-cap"></i> -  Bachelors's in Computer Application</div>
                                <div className="collage"><i class="fa-solid fa-building-columns"></i> - University of Oxford</div>
                                <div className="state"><i class="fa-solid fa-location-dot"></i> - England</div>
                                <div className="gyear"><span><i class="fa-solid fa-calendar"></i>  Graduation year -- </span>2015</div>
                            </div>
                            <div className="section three">
                                <h3 className="sectionTitle">SKILLS</h3>
                                <div className="skills">HTML , CSS , JAVASCRIPT , REACT JS , NEXT JS</div>
                            </div>
                            <div className="section four">
                                <h3 className="sectionTitle">WROK</h3>
                                <div className="role"><span>Worked as -- </span> Web Developer</div>
                                <div className="company"><span>At --</span> Applie</div>
                                <div className="syear"><span>From -- </span>02-05-2019</div>
                                <div className="eyear"><span>To -- </span>02-05-2021</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row justify-content-center w-25 '>
                    <button id='printPageButton' className='btn btn-dark border' onClick={PrintCV}>Print CV</button>
                </div>
            </div>
            </div>
    </>
  )
}

export default StaticCV