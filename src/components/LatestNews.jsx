import React from 'react';
import nwImg1 from '../images/retreiveOnePIC1.jfif';
import nwImg2 from '../images/retreiveOnePIC2.jfif';

function LatestNews() {
    const nwImgs = [nwImg1, nwImg2, nwImg1];
    const nwHds = [
        'The Visit of STEM School To The Arab Academy For Science, Technology & Maritime Transport',
        'The Visit of STEM School To The Arab Academy For Science, Technology & Maritime Transport On Sunday, April 10, 2016',
        'The Visit of STEM School To The Arab Academy For Science, Technology & Maritime Transport'
    ];
    const nwDescs = [
        'The Visit of STEM School To The Arab Academy For Science, Technology & Maritime Transport On Sunday, April 10, 2016',
        'The Visit of International Liberty School To The Arab Academy For Science, Technology & Maritime Transport on Tuesday, April 5, 2016',
        'The Visit of STEM School To The Arab Academy For Science, Technology & Maritime Transport On Sunday, April 10, 2016'
    ];
    const nwLinks = [
        'http://www.aast.edu/en/admission/news.php?language=1&view=1&unit=387&event=14&get_event_type=1',
        'http://www.aast.edu/en/admission/news.php?language=1&view=1&unit=387&event=14&get_event_type=1',
        'http://www.aast.edu/en/admission/news.php?language=1&view=1&unit=387&event=14&get_event_type=1'
    ]
    return (
        <section id='latestNews'>
            <h3>Latest News</h3>
            <div className="latestNews__container">{
            nwHds.map( (nwHd, i) => {return(
                <div key={i} className="latestNews__container__item">
                    <img src={nwImgs[i]} className="d-block w-100" alt="..." />
                    <p>{nwHd}</p>           
                    <p>{`${nwDescs[i]}...`}</p>
                    <a href={nwLinks[i]} className='cardButton'>Read more</a>                    
                </div>
            )} )
            }</div>
        </section>
    )
}

export default LatestNews
