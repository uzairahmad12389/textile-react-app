import React, { useState } from 'react';

export default function Textform(props) {
    const [text, setText] = useState('');

    const handleUpperCase = () => {
        if (text === '') {
            props.showAlert("Text is empty");
        } else {
            setText(text.toUpperCase());
            props.showAlert("Text converted to upper case!");
        }
    };

    const handleLowerCase = () => {
        if (text === '') {
            props.showAlert("Text is empty");
        } else {
            setText(text.toLowerCase());
            props.showAlert("Text converted to lower case!");
        }
    };
    
    const handleClearText = () => {
        if (text === '') {
            props.showAlert("Text is already empty");
        } else {
            setText('');
            props.showAlert("Text cleared!");
        }
    };

    const handleCopyText = () => {
        if (text === '') {
            props.showAlert("Text is empty");
        } else {
            navigator.clipboard.writeText(text);
            props.showAlert("Text copied to clipboard!");
        }
    };

    const handlePasteText = async () => {
        const clipboardText = await navigator.clipboard.readText();
        if (clipboardText === '') {
            props.showAlert("Clipboard is empty");
        } else {
            setText(clipboardText);
            props.showAlert("Text pasted from clipboard!");
        }
    };

    const countWords = (text) => {
        return text.trim().split(/\s+/).filter(word => word.length > 0).length;
    };

    const countCharacters = (text) => {
        return text.length;
    };

    return (
        <div className="container">
            <label htmlFor="exampleInputEmail1" className="form-label">
                {props.title}
            </label>
            <form>
                <textarea
                    className="form-control"
                    id="exampleInputPassword1"
                    rows="8"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    style={{backgroundColor: props.mode === "dark" ? 'grey' : 'white'}}
                ></textarea>
            </form>
            <button
                type="button"
                className="btn btn-primary mx-2 my-2"
                onClick={handleUpperCase}
                style={{backgroundColor: 'blue'}}
            >
                Convert to upper case
            </button>
            <button
                type="button"
                className="btn btn-primary mx-2 my-2"
                onClick={handleLowerCase}
                style={{backgroundColor: 'blue'}}
            >
                Convert to lower case
            </button>
            <button
                type="button"
                className="btn btn-danger mx-2 my-2"
                onClick={handleClearText}
                style={{backgroundColor: 'blue'}}
            >
                Clear Text
            </button>
            <button
                type="button"
                className="btn btn-success mx-2 my-2"
                onClick={handleCopyText}
                style={{backgroundColor: 'blue'}}
            >
                Copy Text
            </button>
            <button
                type="button"
                className="btn btn-info mx-2 my-2"
                onClick={handlePasteText}
                style={{backgroundColor: 'blue'}}
            >
                Paste Text
            </button>
            <button
                type="button"
                className="btn btn-secondary mx-2 my-2"
                onClick={() => alert('Additional Action')}
                style={{backgroundColor: 'blue'}}
            >
                Additional Action
            </button>
            <div className="text-summary">
                <p>Word Count: {countWords(text)}</p>
                <p>Character Count: {countCharacters(text)}</p>
            </div>
        </div>
    );
}
