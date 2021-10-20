import React from 'react';
import img1 from '../images/click-icon.png';
import img2 from '../images/Checklist-icon.png';
import img3 from '../images/results.png';
import img4 from '../images/help.png';
import img5 from '../images/how.png';
import img6 from '../images/current.png';
import img7 from '../images/world.png';
import img8 from '../images/photogallery.png';

function Services() {
    const srvImgs = [img1, img2, img3, img4, img5, img6, img7, img8];
    const srvNames = ['ONLINE ADMISSION', 'ENGLISH PLACEMENT TEST', 'ADMISSION RESULTS', 'NEED HELP?', 'HOW TO APPLY', 'WHAT DO I NEED TO DO', 'INTERNATIONAL STUDENTS', 'PHOTOGALLERY'];    
    const srvDescs = ['Undergraduate', 
        'Instructions for New Students & DEMO for AAST Cambridge Placement Test',     
        'Placement Test and Admission Results for New Applicants',     
        'please contact us for any help or additional Info.',     
        'In The following information you will find all you need to know about applying to AASTMT. Be sure to review all the admission steps.',     
        `If you're interested in joining AASTMT, you'll find all the information you need about admission policies, procedures and rules.`,     
        'Please review the following requirements to ensure you can provide all of the proper documentation to complete your application',     
        `Online Photogallery for AASTMT Students' visits`];
    const srvLinks = [
        'https://aastmtic.aast.edu/onlineadmission/',
        'http://www.aast.edu/en/colleges/placement-test.php',
        'https://aastmtic2.aast.edu/tansik/',
        'http://www.aast.edu/en/admission/',
        'http://www.aast.edu/en/admission/contenttemp.php?page_id=54600011',
        'http://www.aast.edu/en/admission/contenttemp.php?page_id=54600003',
        'http://www.aast.edu/en/centers/AfricanAffairs/',
        'http://www.aast.edu/en/admission/photogallery.php'
    ]
    return (
        <section id='services' className='container-fluid'>
            <div className="row">
            {
            srvNames.map( (srvName, i) => {return(
                <div key={i} className="services__item col-10 col-xs-10 col-sm-6 col-md-4 col-lg-3 text-center">
                    <img src={srvImgs[i]} alt="" />
                    <p>{srvName}</p>
                    {
                        (i <= 3 || i === 7) ?
                        <a href={srvLinks[i]}> {srvDescs[i]}</a>
                        :<p>{srvDescs[i]}</p>
                    }
                    {
                        (i === 4 || i === 5 || i === 6) &&  <a href={srvLinks[i]} className='cardButton'>read more</a>
                    }                
                </div>
            )} )
            }        
            </div>
        </section>
    )
}

export default Services
