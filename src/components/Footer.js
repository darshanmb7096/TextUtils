import React from 'react'

export default function Footer(props) {
    return (
        <div>
            <footer className={`bg-body- text-center text-lg-start text-${props.mode === 'light'?'dark':'light'}  bg-${props.mode}  ` }>
                <div className={`text-center p-3 text-${props.mode === 'light'?'dark':'light'}`} style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                    © 2023 Copyright: Developed by
                   <strong> <a className={`text-body-${props.mode === 'light'?'dark':'light'}`} style={{textDecoration:'none',color: props.mode === 'light' ? 'black' : 'white'}} href="https://darsion.netlify.app" target='_blank'> DARSHAN MB</a></strong>
                </div>
            </footer>
        </div>
    )
}
