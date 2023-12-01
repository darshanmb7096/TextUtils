// import React, { useState } from 'react';
// import axios from 'axios';

// export default function SpellChecker(props) {
//   const [text, setText] = useState('');
//   const [edits, setEdits] = useState([]);

//   async function run(textValue, setEditsFunc) {
//     try {
//       const response = await axios.post(
//         'https://api.sapling.ai/api/v1/edits',
//         {
//           "key": 'KS2ZWIGXILIVZ94T5165WFCSZBGMCLU8', // replace with your API key
//           "session_id": 'test session',
//           text: textValue,
//         },
//       );
//       const { data } = response;
//       console.log(data);
//       setEditsFunc(data.edits);
//     } catch (err) {
//       console.log(err);
//     }
//   }

//   var myHeaders = new Headers();
// myHeaders.append("apikey", "tiw8EF9sM9P3MsDQc804wsG66nGUta8g");

// var requestOptions = {
//   method: 'GET',
//   redirect: 'follow',
//   headers: myHeaders
// };

// fetch("https://api.apilayer.com/spell/spellchecker?q={q}", requestOptions)
//   .then(response => response.text())
//   .then(result => console.log(result))
//   .catch(error => console.log('error', error));


//   const handleOnChange = (event) => {
//     setText(event.target.value);
//   };

//   const handleSpellCheck = async () => {
//     await run(text, setEdits);
//   };

//   const spellCheck = async ()=>{
//     await fetch(text,setEdits)
//   }

//   return (
//     <div className='container'>
//       <h1 className={`text-${props.mode === 'light' ? 'dark' : 'light'}`}>Spell Checker</h1>
//       <div className="mb-3">
//         <textarea
//           className="form-control"
//           id="myBox"
//           rows="8"
//           style={{
//             backgroundColor: props.mode === 'light' ? 'white' : 'rgb(0 29 53)',
//             color: props.mode === 'dark' ? 'white' : 'black',
//           }}
//           value={text}
//           onChange={handleOnChange} placeholder='Enter a word'
//         ></textarea>
//       </div>
//       <button className='btn btn-primary mx-2 my-2' onClick={spellCheck}>Find Mistakes</button>
//       <br></br>
//       <h3 className={`text-${props.mode === 'light' ? 'dark' : 'light'}`} >Suggested Edits:</h3>
//       <ul className={`text-${props.mode === 'light' ? 'dark' : 'light'}`}>
//         {edits.map((edit) => (
//           <li key={edit.id}>
//             Replace <b>{edit.sentence.slice(edit.start, edit.end)}</b> with <b>{edit.replacement}</b> in sentence: <b>{edit.sentence}</b>
//           </li>
//         ))}
//          {edits.map((edit) => (
//           <li key={edit.id}>
//            Possible mistakes:  {edit.general_error_type}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }


import React, { useState } from 'react';

export default function SpellChecker(props) {
  const [text, setText] = useState('');
  const [corrections, setCorrections] = useState([]);

  const runSpellCheck = async () => {
    try {
      const myHeaders = new Headers();
      myHeaders.append("apikey", "tiw8EF9sM9P3MsDQc804wsG66nGUta8g");

      const requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
      };

      const response = await fetch(`https://api.apilayer.com/spell/spellchecker?q=${encodeURIComponent(text)}`, requestOptions);
      const result = await response.json(); // Assuming the API returns JSON
      console.log(result);

      if (result.corrections) {
        setCorrections(result.corrections);
      }

    } catch (err) {
      console.log('error', err);
    }
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleSpellCheck = async () => {
    await runSpellCheck();
  };

  return (
    <div className='container'>
      <h1 className={`text-${props.mode === 'light' ? 'dark' : 'light'}`}>Spell Checker</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          id="myBox"
          rows="8"
          style={{
            backgroundColor: props.mode === 'light' ? 'white' : 'rgb(0 29 53)',
            color: props.mode === 'dark' ? 'white' : 'black',
            
          }}
          value={text}
          onChange={handleOnChange}
          placeholder='Enter any word to check'
        ></textarea>
         <style> 
                {` 
                    ::placeholder { 
                        color: ${props.mode==='light'?'grey':'white'} 
                    }` 
                } 
            </style> 
      </div>
      <button className='btn btn-primary mx-2 my-2' onClick={handleSpellCheck}>Find Mistakes</button>
      <br></br>
      <div>
        <h3 className={`text-${props.mode === 'light' ? 'dark' : 'light'}`}>Corrected Text:</h3>
        <p className={`text-${props.mode === 'light' ? 'dark' : 'light'}`} >
          {corrections.map((correction, index) => (
            <span key={index}>
              {correction.best_candidate}&nbsp;
            </span>
          ))}
        </p>
      </div>
    </div>
  );
}

