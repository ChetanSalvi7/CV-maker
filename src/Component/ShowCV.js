import React from 'react'

const ShowCV = ({ Main }) => {
    { Main && console.log(Main) }


    const PrintCV = () => {
        window.print();
    }
    return (
        <>
            {Main && <div className="row justify-content-center w-100">
                <div className="col-md-10">
                    <div className="cvWrapper">
                        <div className="intro">
                            <img src={Main.image} alt="image" id="pic" />
                            <h1 id="personName">{Main.name}</h1>
                            <div className="occupation">{Main.occupation}</div>
                        </div>
                        <div className="contentWrapper">
                            <div className="section one">
                                <h3 className="sectionTitle">Address</h3>
                                <div className="mail"><i class="fa-regular fa-envelope"></i> - {Main.email}</div>
                                <div className="mobile"><i class="fa-solid fa-phone"></i> - {Main.mnumber}</div>
                                <div className="location"><i class="fa-solid fa-location-dot"></i> - {Main.location}</div>
                            </div>
                            <div className="section two">
                                <h3 className="sectionTitle">EDUCTION</h3>
                                <div className="degree"><i class="fa-solid fa-graduation-cap"></i> - {Main.degree}</div>
                                <div className="collage"><i class="fa-solid fa-building-columns"></i> - {Main.institution}</div>
                                <div className="state"><i class="fa-solid fa-location-dot"></i> - {Main.state}</div>
                                <div className="gyear"><span><i class="fa-solid fa-calendar"></i>  Graduation year -- </span>{Main.gyear}</div>
                            </div>
                            <div className="section three">
                                <h3 className="sectionTitle">SKILLS</h3>
                                <div className="skills">{Main.skill}</div>
                            </div>
                            <div className="section four">
                                <h3 className="sectionTitle">WROK</h3>
                                <div className="role"><span>Worked as -- </span> {Main.yrole}</div>
                                <div className="company"><span>At --</span> {Main.company}</div>
                                <div className="syear"><span>From -- </span>{Main.sdate}</div>
                                <div className="eyear"><span>To -- </span>{Main.sdate}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row justify-content-center w-25 '>
                    <button id='printPageButton' className='btn btn-dark border' onClick={PrintCV}>Print CV</button>
                </div>
            </div>}
        </>
    )
}

export default ShowCV