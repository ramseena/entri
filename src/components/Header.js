import React from 'react';
import logo from '../images/news.png';

const Header = () => {
    return (
        <>
            <header className='center'>
                <img width={'100%'} height={150} mode='fit'src={logo} alt='logo'></img>
            </header>
        </>
    )
}

export default Header