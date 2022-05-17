import React, { useState } from 'react'


export default function Textfrom(props) {
    const handleUpclick = () => {
        console.log('uppercase was click' + text);
        let newtext = text.toUpperCase();
        setText(newtext)
        props.showAlert("converted to UpperCase", "success");
    }
    const handleloclick = () => {
        console.log('lowercase was click' + text);
        let newtext = text.toLowerCase();
        setText(newtext)
        props.showAlert("converted to lowerCase!", "success");
    }
    const handleclclick = () => {
        console.log('clear Text was click' + text);
        let newtext ='';
        setText(newtext)
        props.showAlert("Clear Text!", "success");
    }
    const handleExtrespace= () => {
        console.log('remove space');
        let newtext = text.split(/[ ]+/);
        setText(newtext.join(" "));
        props.showAlert("Remove Extra Space!", "success");
    }
    const handleOnChange = (event) => {
        console.log('OnChange')
        setText(event.target.value)
    }

    const [text, setText] = useState('Enter text Here');
    // Text = 'new text';worng way
    // settext='new text';right way
    return (
            <>
            
        <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>

            <h1>{props.Heading}</h1>

            {/* <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
            </div> */}
            <div className="mb-3">
                {/* <label for="exampleFormControlTextarea1" className="form-label">Example textarea</label> */}
                <textarea className="form-control" value={text} onChange={handleOnChange}  style={{backgroundColor: props.mode==='dark'?'#5ba395':'white', color: props.mode==='dark'?'white':'black'}}  id="exampleFormControlTextarea1" rows="8"></textarea>
            </div>
            
            <button className="btn btn-primary mx-3" onClick={handleUpclick}>Convert To UppercCase</button>
            <button className="btn btn-primary mx-3" onClick={handleloclick}>Convert To lowerCase</button>
            <button className="btn btn-primary mx-3" onClick={handleclclick}>Clear Text</button>
            <button className="btn btn-primary mx-3" onClick={handleExtrespace}>Remove Extre spice</button>
        </div>
        <div className="containermy 3" style={{color: props.mode==='dark'?'white':'black'}}>
            <h1> your Text Summary</h1>
            <p>{text.split(" ").length} Words,{text.length}characters</p>
            <p>{0.8 * text.split(" ").length} Minute to Read</p>
            <p>{0.002* text.length}characters to read</p>
            <h2 my-2>Preview</h2>
            <p my-2>{text.length>0?text:"Enter Your Text Here To Somthing To Preview"}</p>
        </div>
        </>
    )
}
