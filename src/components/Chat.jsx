import { faFacebookF, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faComment, faMinus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'

function Chat() {
    const [chatHoursListener, setChatHoursListener] = useState(Boolean);
    const [headHours, setHeadHours] = useState('Show');
    const handelChatHours = () => {
        setChatHoursListener( prevState => (! prevState) ? false : true );
        if( chatHoursListener === false ){ 
            document.querySelector('.chat-main__oper-hours').style.display = 'block';
            document.querySelector('.chat-main__oper-hours').style.animation = 'chatHours1 0.6s ease-in-out'; 
            setHeadHours('Hide');
            setChatHoursListener(true); } 
        else{ 
            document.querySelector('.chat-main__oper-hours').style.animation = 'chatHours2 0.6s ease-in-out';
            setTimeout(() => {
                document.querySelector('.chat-main__oper-hours').style.display = 'none'; 
            }, 600);  
            setHeadHours('Show');
            setChatHoursListener(false); 
        }
    }

    const [operHoursData, setOperHouresData] = useState([
        'Monday - Wendsday, Friday - Sunday', '8:00 am to 10:00 pm', 'Thursday', '12:00 am to 10:00 pm'
    ]);    
    const handelSelectChange = (e) => {
        const selectType = e.target.value
        if(selectType === 'Any department' || selectType === 'General Information and Inquiries (Offline)'){
            setOperHouresData(['Monday - Wendsday, Friday - Sunday', '8:00 am to 10:00 pm', 'Thursday', '12:00 am to 10:00 pm']);
        }else{ setOperHouresData(['Monday - Wendsday, Sunday', '8:30 am to 3:45 pm', 'Thursday', '8:30 am to 1:45 pm', 'Friday - Saturday', 'Closed']); }
    };

    
    const [counter, setCounter] = useState(0);
    const handelSubmit = (e) => {
        e.preventDefault();
        const inputs = [...document.querySelectorAll('#chat form input') , document.querySelector('#chat form textarea')];        
        
        for(let i = 0; i < inputs.length; i++){            
            if(inputs[i].value.length === 0){ inputs[i].nextElementSibling.style.display = 'block';     
            }else{ inputs[i].nextElementSibling.style.display = 'none'; }

            if( i === 0 && inputs[i].value.length > 0 ){
                if( inputs[i].value.length < 7 ){ inputs[i].nextElementSibling.textContent = 'length must large 7 chars'; inputs[i].nextElementSibling.style.display = 'block';  }
                if( inputs[i].value.charCodeAt(0)  < 60 ){ inputs[i].nextElementSibling.textContent = 'name not start with number'; inputs[i].nextElementSibling.style.display = 'block';  }    
            }

            if( i === 1 && inputs[i].value.length > 0 ){
                const emailPattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
                if( inputs[i].value.length < 12 ){ inputs[i].nextElementSibling.textContent = 'length must large 12 chars'; inputs[i].nextElementSibling.style.display = 'block';  }
                if( emailPattern.test(inputs[i].value) === false ){ inputs[i].nextElementSibling.textContent = 'email not valid'; inputs[i].nextElementSibling.style.display = 'block';   }
            }

            if(i === 2 && inputs[i].value.length > 0){
                if( inputs[i].value.length !== 11  ){ inputs[i].nextElementSibling.textContent = 'phone must 11 number'; inputs[i].nextElementSibling.style.display = 'block';  }
                let phLn = 0;
                for(let j = 0; j< inputs[2].value.length; j++){
                    if( inputs[i].value.charCodeAt(j) >= 48 && inputs[i].value.charCodeAt(j) <= 57 ){
                        phLn += 1;
                    }
                }
                if( inputs[i].value.length !== phLn ){
                    inputs[i].nextElementSibling.textContent = 'chars now allow'; inputs[i].nextElementSibling.style.display = 'block';                    
                }    
            }

            if( i === 3 && inputs[i].value.length > 0 ){
                if( inputs[i].value.length < 10 ){ inputs[i].nextElementSibling.textContent = 'length must large 10 chars'; inputs[i].nextElementSibling.style.display = 'block';  }
            }
        }
        
        const labels = [ ...document.querySelectorAll('#chat form div') ];
        setCounter(0);
        for( let i = 0; i< labels.length; i++ ){
            if( labels[i].style.display === 'none' ){ setCounter( prevState => prevState + 1 );
            }else{ setCounter( prevState => prevState + 0 ); }
        }
    }

    return (
        <section id='chat'>
            <FontAwesomeIcon icon={faComment} onClick={() => {                
                document.querySelector('.chat-main').style.top = '45vh';
                document.querySelector('.chat-main').style.width = '27vw';
                document.querySelector('.chat-main').style.height = '55vh';
                document.querySelector('.chat-main').style.opacity = '1';
            }}/>
            <div className="chat-main">
                <div className="chat-main__head">
                    <p>AAST Support</p>
                    <FontAwesomeIcon icon={faMinus} onClick={() => {
                        document.querySelector('.chat-main').style.top = '82vh';
                        document.querySelector('.chat-main').style.width = '0vw';
                        document.querySelector('.chat-main').style.height = '0vh';
                        document.querySelector('.chat-main').style.opacity = '0';
                    }}/>
                </div>
                <div className="chat-main__form">
                    <p>Sorry, we aren't online at the moment. Leave a message and we'll get back to you within 24 hours.You may call our Call Center 19838 from 8:00 am till 10:00 pm all week days.</p>
                    <button onClick={handelChatHours}>{`${headHours} Our Operating Hours`}</button>
                    <div className="chat-main__oper-hours">
                        <p>Choose a department</p>
                        <select name="" id="" defaultValue='Any department' onChange={ handelSelectChange }>
                            <option value="Any department" >Any department</option>
                            <option value="General Information and Inquiries (Offline)" >General Information and Inquiries (Offline)</option>
                            <option value={`Technical support (Student & Staff) (Offline)`} >{'Technical support (Student & Staff) (Offline)'}</option>
                        </select>
                        <div className="chat-main__oper-hours__details">
                            <p>Operating Hours (Africa/Cairo)</p>
                            {
                                operHoursData.map( (operHour, i) => {return(
                                    (i % 2 === 0) ?
                                    <p key={i}> {operHour} </p>
                                    : <p key={i} className='oper-hours-light'> {operHour} </p>
                                )} )
                            }
                        </div>
                    </div>
                    <div className="chat-main__sign__google">
                            <span>sign in with</span> 
                            <button> <FontAwesomeIcon icon={faFacebookF} /> </button>
                            <button> <FontAwesomeIcon icon={faGoogle} /> </button>
                            <span>OR</span>
                    </div>
                    <form action="" onSubmit={handelSubmit}>
                        <label>Introduce your self *</label>
                        <input type="text" placeholder='Type Name' />
                        <div name='name'> Please type your name </div>
                        <input type="text" placeholder='Type Email' />
                        <div name='email'> Please type your email </div>

                        <label>Phone Number *</label>
                        <input type="text" placeholder='Type Phone Number' />
                        <div name='name'> Please type your phone number </div>

                        <label>Message *</label>                        
                        <textarea cols="30" rows="4" placeholder='Type Message'></textarea>
                        <div name='message'> Please type your message </div>
                        {
                            (counter === 4) 
                            ? <p className='successSubmit'>Data Successfully Send</p>
                            : null
                        }
                        <button type='submit'>Send Message</button>
                    </form>
                </div>
            </div>            
        </section>
    )
}

export default Chat
