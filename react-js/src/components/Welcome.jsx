import Sammy from "../img/Sammy.jpg"
import "../css/main.css"
import React, { useState } from 'react';

export default function Welcome() {
    const handleSubmit = event => {
        e.preventDefault();
        console.log('ok');
    }
    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        setMessage(e.target.value);
      }

    return (
        <>
        <div className="wrapper">
            <h1>Welcome to my app</h1>sss
            <p>This is going to the coolest app</p>
            <form onSubmit={handleSubmit}>
            <fieldset>
                <label>
                    <p>Name</p>
                    <input type="text" onChange={handleChange}/>
                </label>
            </fieldset>
            <h2>{message} is typing</h2>
            <button type="submit">Submit</button>
            </form>
            <img src={Sammy} alt="Sammy Image" width={200} height={200}></img>
        </div>
        </>
    );
}
