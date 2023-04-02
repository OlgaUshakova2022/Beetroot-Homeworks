import React from 'react';
import './Lesson11.css'

const Lesson11 = function () {
    

    // вывожу header  из урока11


    return (
        <div className='Lesson11'>
            <header className='header'>
                <div>
                   
                </div>
                        <div >
                            <ul className='nav'>
                                <li>Product</li>
                                <li>Customers</li>
                                <li>Pricing</li>
                                <li>Resources</li>
                            </ul>
                        </div>
                <nav>
                    <button className='button-singin'>Sign In</button>
                    <button className='button-singup'>Sign Up</button>
                </nav>
            </header>
        </div>
    );
}
    
export default Lesson11;