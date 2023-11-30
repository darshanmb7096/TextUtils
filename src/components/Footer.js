import React from 'react';
import { useLocation } from 'react-router-dom';
import '../App.css';

export default function Footer(props) {
    const location = useLocation();

    return (
        <div>
            <footer className={`bg-body- text-center text-lg-start text-${props.mode === 'light' ? 'dark' : 'light'} bg-${props.mode} mt-auto ${location.pathname === '/' || location.pathname === '/about' ? 'footer fixed-bottom' : ''}`}>
                <div className={`text-center p-3 text-${props.mode === 'light' ? 'dark' : 'light'}`} style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                    © 2023 Copyright: Developed by
                    <strong> <a className={`text-body-${props.mode === 'light' ? 'dark' : 'light'}`} style={{ textDecoration: 'none', color: props.mode === 'light' ? 'black' : 'white' }} href="https://darsion.netlify.app" target='_blank' rel="noopener noreferrer"> DARSHAN MB</a></strong>
                </div>
            </footer>
        </div>
    )
}
