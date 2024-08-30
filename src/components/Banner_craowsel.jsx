import React from 'react'
import Loader_Spinner from './Loader_Spinner'



export default function Banner_craowsel({ banner_content, Loading }) {
       return (
        <div>
            {Loading ? (<Loader_Spinner />) :
                <div id="carouselExampleCaptions" className="carousel slide">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={require("../assets/HOME/banner/hero-1.jpg")} className="d-block w-100" alt="..." />
                            {/* باید یه رابطه به دیتا بیس بزنیم و عکس را بیاریم */}
                            <div id='title_left' className="carousel-caption d-none d-md-block">
                                <h3>{banner_content[0].title}</h3>
                                <p>{banner_content[0].description}</p>
                                {/* باید یه رابطه به دیتا بیس بزنیم و تایتل و دیسکریپشن را بیاریم */}

                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={require("../assets/HOME/banner/hero-2.jpg")} className="d-block w-100" alt="..." />
                            <div id='title_left' className="carousel-caption d-none d-md-block">
                                <h3>{banner_content[1].title}</h3>
                                <p>{banner_content[1].description}</p>
                            </div>
                        </div>

                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span id='arrow_btn' className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span id='arrow_btn' className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>}




        </div>
    )
}

