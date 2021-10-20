import React from 'react';

function Campuses({wd}) {
    const camps = ['Alexandria', 'Heliopolis', 'Dokki', 'Smart Village', 'Port Said', 'South Valley', 'Lattakia', 'Elalamein', 'Sharjah'];
    const campsLinks = [
        'http://www.aast.edu/en/admission/contenttemp.php?page_id=54600002',
        'http://www.aast.edu/en/admission/contenttemp.php?page_id=54600005',
        'http://www.aast.edu/en/admission/contenttemp.php?page_id=54600006',
        'http://www.aast.edu/en/admission/contenttemp.php?page_id=54600007',
        'http://www.aast.edu/en/admission/contenttemp.php?page_id=54600008',
        'http://www.aast.edu/en/admission/contenttemp.php?page_id=54600009',
        'http://www.aast.edu/en/admission/contenttemp.php?page_id=54600010',
        'http://www.aast.edu/en/admission/contenttemp.php?page_id=54600024',
        'http://www.aast.edu/en/admission/contenttemp.php?page_id=54600025'
    ];
    

    // const handelDelay1 = () => {        
    //     const links = document.querySelectorAll('#Campuses p a');
    //     links[0].style.opacity = '1';
    //     links[0].style.animationName = 'campusesAnmy1' ;
    //     for(let i = 1; i<links.length; i++){
    //         setTimeout(() => {
    //             links[i].style.opacity = '1';
    //             links[i].style.animationName = `campusesAnmy${i+1}` ;                    
    //         }, 400);
    //     } 
    // }
    // const handelDelay2 = () => {    
    //     const smLinks = document.querySelectorAll('#Campuses div a');
    //     for(let i = 1; i<smLinks.length; i++){
    //         setTimeout(() => {
    //             smLinks[i].style.opacity = '1';
    //             smLinks[i].style.animationName = `campusesGridAnmy` ;
    //         }, 200);
    //     }    
    // }

    // document.addEventListener('scroll', () => {
    //     const ht1 = document.getElementsByTagName('header')[0].offsetHeight ,
    //         ht2 = document.querySelector('.scr-no-small').offsetHeight ,
    //         ht3 = document.querySelector('.AppCarousel').offsetHeight;

    //     let totalOffset = 0;
    //     if( wd >= 786 ){ totalOffset = 20 + ht1 + ht2 + ht3;
    //     }else{ totalOffset = 20 + ht1 + ht3; }
        
    //     if( window.scrollY >= totalOffset ){
    //         if( wd >= 786 ){ handelDelay1();
    //         }else{ handelDelay2(); }
    //     }
    // });

    return (
        <section id='Campuses'>
            <h3>Our Campuses</h3>
            {
                (wd >= 786) &&
                <p>Our Campuses
                {
                    camps.map( (camp, i) => {return(
                        <a key={i} href={campsLinks[i]}>{camp}</a> 
                    )} )
                }
                </p>
                // :  
            }{
                (wd < 786) &&
                <div>{
                    camps.map( (camp, i) => {return(
                        <a key={i} href={campsLinks[i]}>{camp}</a>
                    )} )
                }</div>
            }

        </section>
    )
}

export default Campuses
