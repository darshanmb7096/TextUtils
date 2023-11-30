import React from 'react';
import '../App.css'


export default function Home(props) {
  return (
    <div className='center'>
       <h1 style={{ color: props.mode === 'light' ? 'black' : 'white',textAlign:'center' }} >Text Friendly</h1>
       <h2 style={{ color: props.mode === 'light' ? 'black' : 'white',textAlign:'center' }} >Drop Your texts and see the magic!!!</h2>
      <div className="text-center">
        <a href="/TryIt" className="btn btn-primary" role="button">Try Text Friendly</a>
      </div>
    </div>
  )
}
