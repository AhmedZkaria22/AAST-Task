import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Img0 from '../images/admission-header.jpg';

function Header({wd}) {
    const fullDt = new Date().toDateString().split(' ');
    const days = [ 'Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday' ];
    const months = [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ];

    const trgDay = () => {
        for(let i = 0; i<days.length; i++){
            if( days[i].indexOf(fullDt[0])  !== -1 ){ return days[i]; }
        }    
    }
    const trgMonth = () => {
        for(let i = 0; i<months.length; i++){
            if( months[i].indexOf(fullDt[1])  !== -1 ){ return months[i]; }
        }    
    }
    const trgDayNum = () => {
        if( fullDt[2] === 1 ){ return '1st' }
        if( fullDt[2] === 2 ){ return '2nd' }
        if( fullDt[2] === 3 ){ return '3rd' }
        else{ return `${fullDt[2]}th` }
    }

    return (
        <header>
            <div className="header__date-lang">
                <p>{`${trgDay()}, ${trgDayNum()} ${trgMonth()}, ${fullDt[3]}`}</p>
                <div className="header__search">
                    <form className="header__search__form">
                        <input type="text" placeholder='AASTMT Search' onClick={() => {
                            document.querySelector('.header__form__checks-group').style.display = 'flex';                            
                        }}/>
                        <button type='submit'>
                            <FontAwesomeIcon icon={faSearch} />
                        </button>
                        
                        {/* <FontAwesomeIcon as={Button} type='submit' icon={faCoffee} /> */}
                        {/* <i class="fas fa-search"></i> */}
                    </form>
                    <div className="header__form__checks-group">
                        <div className="header__form__checks-group__item">
                            <input type="checkbox" id="check1" />
                            <label htmlFor="check1">google</label>                    
                        </div>
                        <div className="header__form__checks-group__item">
                            <input type="checkbox" id="check2" />
                            <label htmlFor="check2">news</label>                    
                        </div>
                        <div className="header__form__checks-group__item">
                            <input type="checkbox" id="check3" />
                            <label htmlFor="check3">staff</label>                    
                        </div>
                    </div>
                </div>
                <button>العربية</button>
            </div>
            {
                // (wd < 576) ?
                (wd < 786) ?
                <div>
                    <img src={Img0} className="d-block" alt="..." />
                    <FontAwesomeIcon icon={faBars} onClick={() => {
                        document.querySelector('.small-nav').style.display = 'block';
                        document.querySelector('.small-nav').style.animation = 'smallNav1 1.2s ease-in-out';
                    }}/>                        
                </div>                
                :   <img src={Img0} className="d-block aast-img" alt="..." />
            }
            
        </header>
    )
}

export default Header
