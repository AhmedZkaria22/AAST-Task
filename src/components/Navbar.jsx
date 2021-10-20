import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'
import LgNavBarNested from './LgNavBarNested';
import SmNavBarNested from './SmNavBarNested';

function Navbar({wd, scrnCls}) {
    const menuList = ['Home', 'About', 'Colleges & Degrees' , 'Undergraduate Admission', 'International Certificates', 'Campuses'    , 'Student Services', 'Staff', 'Contact Us'];
    const aboutList = ['Overview','Dean Word'];
    const collegesList = ['Management & Technology','Maritime Transport & Technology','College of Law','Computing & Information Technology','International Transport & Logistics','Language & Communication','Fisheries Technology & Aquaculture','Pharmacy' ,'College of Oral & Dental Medicine','Engineering and Technology','College of Artificial Intelligence'];
    const campusesList = ['Alexandria','Heliopolis','Dokki','Smart Village','Port Said','South Valley','Lattakia','El Alamein','Sharjah']    
    const [aboutListener, setAboutListener] = useState(true);
    const [collegeListener, setCollegeListener] = useState(true);
    const [campusesListener, setCampusesListener] = useState(true);

    const menuLinks = [
        '/#', '/#', '/#', 'http://www.aast.edu/en/admission/contenttemp.php?page_id=54600011',
        'http://www.aast.edu/en/admission/contenttemp.php?page_id=54600004', '/#', 
        'http://www.aast.edu/en/admission/contenttemp.php?page_id=54600012',
        'http://www.aast.edu/en/admission/stafftemp.php',
        'http://www.aast.edu/en/admission/contact-us.php'
    ];
    const aboutLinks = [
        'http://www.aast.edu/en/admission/contenttemp.php?page_id=54600021',
        'http://www.aast.edu/en/admission/contenttemp.php?page_id=54600022'
    ];
    const collegesLinks = [
        'http://www.aast.edu/en/admission/contenttemp.php?page_id=54600015',
        'http://www.aast.edu/en/admission/contenttemp.php?page_id=54600013',
        'http://www.aast.edu/en/admission/contenttemp.php?page_id=54600027',
        'http://www.aast.edu/en/admission/contenttemp.php?page_id=54600017',
        'http://www.aast.edu/en/admission/contenttemp.php?page_id=54600016',
        'http://www.aast.edu/en/admission/contenttemp.php?page_id=54600018',
        'http://www.aast.edu/en/admission/contenttemp.php?page_id=54600019',
        'http://www.aast.edu/en/admission/contenttemp.php?page_id=54600020',
        'http://www.aast.edu/en/admission/contenttemp.php?page_id=54600026',
        'http://www.aast.edu/en/admission/contenttemp.php?page_id=54600014',
        'http://www.aast.edu/en/admission/contenttemp.php?page_id=54600028'
    ];
    const campusesLinks = [
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

    return (
        <section className={`app-navbar ${scrnCls}`}>{
            menuList.map( (menuItem, i) => {return(
                <>{
                    // (wd >= 576) ?
                    (wd >= 786) ?
                    <>{
                        (i !== 1 && i !== 2 && i !== 5) ?
                        <a key={i} href={menuLinks[i]}> {menuItem} </a>
                        :
                        <>    
                            {
                            (i === 1) ?
                            <LgNavBarNested menuItem={menuItem} index={i} dataArr1={aboutList} dataArr2={aboutLinks}/>
                            : (i === 2) ? 
                            <LgNavBarNested menuItem={menuItem} index={i} dataArr1={collegesList} dataArr2={collegesLinks}/>
                            : (i === 5) ? 
                            <LgNavBarNested menuItem={menuItem} index={i} dataArr1={campusesList} dataArr2={campusesLinks}/>
                            : null
                            }
                        </>
                    }</>
                    :<>{
                        (i !== 1 && i !== 2 && i !== 5) ?
                        <a key={i} href={menuLinks[i]}> {menuItem} </a>
                        :<>{
                            (i === 1) ?
                                <SmNavBarNested index={i} menuLinks={menuLinks} menuItem={menuItem} setlstn={setAboutListener} 
                                lstn={aboutListener} chindex={2} dataArr1={aboutList} dataArr2={aboutLinks}/>
                            : (i === 2) ? 
                                <SmNavBarNested index={i} menuLinks={menuLinks} menuItem={menuItem} setlstn={setCollegeListener} 
                                lstn={collegeListener} chindex={4} dataArr1={collegesList} dataArr2={collegesLinks}/>
                            : (i === 5) ? 
                                <SmNavBarNested index={i} menuLinks={menuLinks} menuItem={menuItem} setlstn={setCampusesListener} 
                                lstn={campusesListener} chindex={8} dataArr1={campusesList} dataArr2={campusesLinks}/>
                            : null
                        }</>                               
                    }</>
                }</>
            )} )            
        }
        <FontAwesomeIcon icon={faTimes} className='small-nav__close' onClick={() => {
            document.querySelector('.small-nav').style.animation = 'smallNav2 1.2s ease-in-out';
            setTimeout(() => {
                document.querySelector('.small-nav').style.display = 'none'; 
            }, 1200);  
        }}/>
        </section>
    )
}

export default Navbar