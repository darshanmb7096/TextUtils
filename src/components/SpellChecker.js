import React from 'react'

export default function SpellChecker(props) {
  return (
    <div className='container'>
         <h1 className={`text-${props.mode==='light'?'dark':'light'}`} >Spell Checker</h1>
    </div>
  )
}
