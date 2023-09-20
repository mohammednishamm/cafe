import React from 'react'
function Fourth() {
    return (  
        <div className='four'>
            <div className='four1'>
                <h1 className='for'>Contact Us</h1>
                <p className='for1'>Praesent tellus magna, consectetur sit amet volutpat eu, pulvinar vitae sem. Sed ultrices. bg white 80% alpha. btn #066</p>
                <span className='foo'>Tel: 010-020-0340</span><br /><br />
                <span className='for2'>Email: info@company.com</span>
                <br />
                <button className='map'>Open Maps</button>
            </div>
            <div className='four2'>
                <input className='name' type="text" placeholder='Name' />
                <input className='name' type="text" placeholder='Email' />
                <input className='mess' type="text" placeholder='Message...' />
                <p className='send'>Send it</p>


            </div>

        </div>
    );
}

export default Fourth;