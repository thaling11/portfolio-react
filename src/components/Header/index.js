import React from 'react';
import Navigation from '../Navigation';

function Header() {
    return (
        <div className="header">
            <div>
                <h1>Tori Haling</h1>
            </div>
            <div>
                <Navigation />
            </div>
        </div>
    )
}

export default Header;