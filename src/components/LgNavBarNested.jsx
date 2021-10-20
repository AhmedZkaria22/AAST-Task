import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'

function LgNavBarNested({ menuItem, index, dataArr1, dataArr2}) {

    // const [curListn, setCurListn] = useState(false);
    let curListn = false;

    const handelNestedRefEnter = (e) => { 
        e.target.style.display = 'block';
    } 

    const handelNestedRefLeave = (e) => { 
        e.target.style.animation = 'navAnmy2 0.85s ease-in-out';
        setTimeout(() => {
            e.target.style.display = 'none'; 
        }, 850);                 
    }

    const handelNavRefEnter = (index) => {     
        // setCurListn(true);
        curListn = true;
        if(curListn === true){ 
            document.querySelector('.scr-no-small').children[index].children[1].style.display = 'block';
        } 
    }

    const handelNavRefLeave = (index) => { 
        // setCurListn(false);
        curListn = false;
        if(curListn === false){ 
            document.querySelector('.scr-no-small').children[index].children[1].style.animation = 'navAnmy2 0.85s ease-in-out';
            setTimeout(() => {
                document.querySelector('.scr-no-small').children[index].children[1].style.display = 'none';
            }, 850); 
        } 
    }


    return (
        <div key={index} className="navbar__link-list" 
        onMouseEnter={() => { handelNavRefEnter(index);}}
        onMouseLeave={() => {handelNavRefLeave(index);}}>

            <a href='/#'> {menuItem} <FontAwesomeIcon icon={faAngleDown} /> </a>

            <div className='navbar__link-list__container'
                onMouseEnter={(e) => { handelNestedRefEnter(e);}} onMouseLeave={(e) => handelNestedRefLeave(e)}>{
                    dataArr1.map( (dt1, j) => { return( <a key={j} href={dataArr2[j]}>{dt1}</a> ) } )
            }</div>
        </div>
)
}

export default LgNavBarNested
