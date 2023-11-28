import { useState } from "react"
import React  from 'react'

export default function About(props) {
   


//     const [mystyle,setMyStyle] = useState({
//         color: 'black',
//         backgroundColor: 'white'
//         })

//        const [btnText, setBtnText] = useState("Enable DarkMode") 
//    const EnableDarkMode = ()=>{
//     if (mystyle.color === 'black') {
//         setMyStyle({
//                 color: 'white',
//                 backgroundColor: 'black',
//                 border: '1px solid white'
//         })
//         setBtnText ("Enable LightMode")
//         }
//         else{
//         setMyStyle({
//                 color: 'black',
//                 backgroundColor: 'white'
//         })
//         setBtnText("Enable DarkMode")
//     }
//    }

    return (
         <>
         <h1 className={`my-3 text-${props.mode === 'dark'?'light':'dark'}`}   >About us</h1>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item" >
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" style={{backgroundColor:props.mode==='dark'?'#2b4b7d':'#cfe2ff',color:props.mode==='dark'?'white':'#052c65'}}  type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            About Text Friendly
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={{backgroundColor:props.mode==='dark'?'#162235':'white',color:props.mode==='dark'?'white':'black'}}  >
                            <strong>Goal to make an userfriendly and usefull app.</strong><code>Text Friendly</code> is a tool which can be used to alter our texts with given funtionality,Which are converting to uppercase, lowercase ,changing fonts and removing spaces.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" >
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" style={{backgroundColor:props.mode==='dark'?'#2b4b7d':'#cfe2ff',color:props.mode==='dark'?'white':'#052c65'}}  type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Technology used 
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={{backgroundColor:props.mode==='dark'?'#162235':'white',color:props.mode==='dark'?'white':'black'}}>
                            <strong>Built using React js.</strong> 
 m                              React is a <code>JavaScript library</code> for building user interfaces. It is declarative, efficient, and flexible. React can be used to develop single-page applications, mobile applications, and server-rendered applications.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" >
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" style={{backgroundColor:props.mode==='dark'?'#2b4b7d':'#cfe2ff',color:props.mode==='dark'?'white':'#052c65'}}  type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Design and development
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={{backgroundColor:props.mode==='dark'?'#162235':'white',color:props.mode==='dark'?'white':'black'}}>
                           <strong>One of my ongoing project</strong> Hoping to add still more funtionalities , which would make some of the things
                        </div>
                    </div>
                </div>
            </div>
         </>
    )
}
