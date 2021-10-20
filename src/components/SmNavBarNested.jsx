import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'

function SmNavBarNested({index, menuLinks, menuItem, setlstn, lstn, chindex, dataArr1, dataArr2}) {
    const handelNavRefClick = (percl, Evlistener, chindex) => { 
        if(Evlistener === true){ document.querySelector(`.${percl}`).children[chindex].style.display = 'block'; } 
        if(Evlistener === false){ document.querySelector(`.${percl}`).children[chindex].style.display = 'none'; } 
    }
    return (
        <>
            <div key={index} className="phone-navbar__link">
                <a href={menuLinks[index]}> {menuItem} </a>
                <FontAwesomeIcon icon={faAngleDown} onClick={(e) =>{                                      
                    handelNavRefClick('scr-small', lstn, chindex);
                    setlstn( prevState => (prevState === false) ? true : false );
                }}/>
            </div>
            <div key={index*2} className='phone-navbar__link-list__container'>{
                dataArr1.map( (dtln, j) => { return( <a key={j} href={dataArr2[j]}>{dtln}</a> ) } )
            }</div>            
        </>
    )
}

export default SmNavBarNested
