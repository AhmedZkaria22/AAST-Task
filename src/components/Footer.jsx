import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faRss } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import img1 from '../images/aast-1.jpg';
import img2 from '../images/aast-2.jpg';
import img3 from '../images/aast-3.jpg';
import img4 from '../images/aast-4.jpg';
import catlogFile from '../AsstCatalog.pdf';

function Footer() {
    const footerCols = [
        ['Featured Links', 'Campus 1 Services', 'Medical 2 Services', 'Sports 3 Services', 'AASTMT 4 Catalogue'],
        ['Featured Services', 'Campus 5 Services', 'Medical 6 Services', 'Sports 7 Affairs', 'AASTMT 8 Catalogue']
    ];
    const footerLinks = [
        'http://www.aast.edu/en/services/',
        'https://www.aast.edu/en/sites/clinic/',
        'http://www.aast.edu/ar/services/sports-services/'
    ];
    return (
        <footer>
            <div className="footer__grid">
                <div className="footer__grid__col">
                    <h5>AASTMT In Photos</h5>
                    <div className='footer__grid__col__img-wrapper'>
                        <img src={img1} alt="" />
                        <img src={img2} alt="" />
                        <img src={img3} alt="" />
                        <img src={img4} alt="" />
                    </div>
                    <a href="http://www.aast.edu/en/photo_gallery/">view more</a>
                </div>
                {
                    footerCols.map( (footerCol, i) => {return(
                        <div key={i} className="footer__grid__col">
                            <h5>{footerCol[0]}</h5>
                            {
                                footerCol.map( (footerColLink, j) => {return(
                                    (j !== 0 && j === 4) ? <a key={j} href={catlogFile} download>{footerColLink}</a>
                                    : (j !== 0 && j !== 4) ? <a key={j} href={footerLinks[j-1]}>{footerColLink}</a>
                                    : null
                                )} )
                            }
                        </div>
                    )} )
                }
                <div className="footer__grid__col">
                    <div className="footer__grid__col-last">
                        <a href="https://www.facebook.com/AAST.Officialpage/"> <FontAwesomeIcon icon={faFacebookF} /> </a>
                        <a href="http://www.aast.edu/en/news/feed.php"> <FontAwesomeIcon icon={faRss} /> </a>
                        <a href="http://www.aast.edu/en/admission/contact-us.php">all campuses detailed contacts</a>
                    </div>
                    <div className="footer__grid__col-last">
                        <p>E-mail: <a href="mailto:admission@aast.edu">send e-mail</a></p>
                    </div>
                </div>
            </div>
            <div className="footer__copyright">
                <p>{'2021 © All Rights Reserved IDC | Arab Academy for Science, Technology & Maritime Transport | Call Center 19619'}</p>
            </div>
        </footer>
    )
}

export default Footer
