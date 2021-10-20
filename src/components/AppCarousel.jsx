import React from 'react';
// import Img0 from '../images/admission-header.jpg';
import Img1 from '../images/01.jpg';
import Img2 from '../images/02.jpg';
import Img3 from '../images/03.jpg';
import Img4 from '../images/04.jpg';


function AppCarousel() {
    return (
        <section className='AppCarousel'>
            <div id="carouselControls" className="carousel slide" data-bs-touch="false">
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="600">
                        <img src={Img1} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item" data-bs-interval="600">
                        <img src={Img2} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item" data-bs-interval="600">
                        <img src={Img3} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item" data-bs-interval="600">
                        <img src={Img4} className="d-block w-100" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </section>
    )
}

export default AppCarousel
