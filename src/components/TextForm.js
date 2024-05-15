import React, { useState, useRef } from 'react';

export default function TextForm(props) {
    const [text, setText] = useState('');
    const textAreaRef = useRef(null);

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    };

    const handleOnChange = (event) => {
        setText(event.target.value);
    };

    const handleDownClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    };

    const handleClearClick = () => {
        setText('');
    };

    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
    };

    const copy = () => {
        textAreaRef.current.select();
        document.execCommand('copy');
    };

    const handleExtraSpaces = () => {
        let newText = text.split(/\s+/);
        setText(newText.join(' '));
    };

    return (
        <>
            <div className={`container text-${props.mode==='light'?'dark':'light'}`}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea
                        style={{backgroundColor: props.mode==='light'?'white':'grey',color: props.mode==='light'?'black':'white'}}
                        ref={textAreaRef}
                        className="form-control"
                        value={text}
                        onChange={handleOnChange}
                        rows="8"
                    ></textarea>
                </div>
                <button disabled={text.length===0} className='btn btn-primary mx-2 my-1' onClick={handleUpClick}>Convert to UpperCase</button>
                <button disabled={text.length===0} className='btn btn-primary mx-2 my-1' onClick={handleDownClick}>Convert to LowerCase</button>
                <button disabled={text.length===0} className='btn btn-primary mx-2 my-1' onClick={handleClearClick}>Clear Text</button>
                <button disabled={text.length===0} className='btn btn-primary mx-2 my-1' onClick={speak}>Speak</button>
                <button disabled={text.length===0} className='btn btn-primary mx-2 my-1' onClick={copy}>Copy Text</button>
                <button disabled={text.length===0} className='btn btn-primary mx-2 my-1' onClick={handleExtraSpaces}>Remove Extra spaces</button>
            </div>
            <div className={`container my-3 text-${props.mode==='light'?'dark':'light'}`}>
                <h2>Your Text Summary</h2>
                <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
                <p>{0.008 * text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Minutes Read</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:'Nothing To Preview!'}</p>
            </div>
        </>
    );
}
