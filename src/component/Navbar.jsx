import React from 'react'
import { Outlet,Link } from 'react-router-dom';
function Navbar() {
    return ( 

        <div className='main'>
            <div className='nisham'>
                <img className='image-1' src="https://www.tooplate.com/templates/2126_antique_cafe/img/antique-cafe-bg-01.jpg" alt="" />
            </div>
            <div className='nav'>
                <p className='int'>Intro</p>
                <p className='int'>Menu</p>
                <p className='int'>About</p>
                <p className='int'>Contact</p>
            </div>
            <div className='antique'>
                 <span className='anti'>Antique Cafe</span>
                <span className='daily'>your daily energy booster</span>

            </div>
            <div className='cofee'>
                <p className='shop'>
                This is a coffee shop template named Antique Cafe which is a parallax HTML5 template with a good responsiveness. Feel free to use this layout for your cafe. If you have any question, please send us a message.
                </p>
            </div>
            <button className='image-2'>Let's explore...</button>
            <Outlet/>
        </div>
 
      );
}

export default Navbar;