import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/main.scss'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div className="wrapper">
        <section className="hero">
            <div className="container hero__container">
                <h1 className="title hero__title">privet</h1>
                <p className="hero__text">hello</p>
                <button className="button">OK</button>
                <img src="/img/IMG_5015.jpeg" alt="forest" />
            </div>
        </section>
    </div>
);