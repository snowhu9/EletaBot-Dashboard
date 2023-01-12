import React, { Fragment } from "react";
import './intro.css';

const Intro = () => {
    return(
        <>
            <div className="intro-Continer">
                <img src={require('../../../../img/logo.png')} />
                <div className="btn">
                    <a className="btn1" href="#">add bot to discord</a>
                    <a className="btn2" href="#">DashBoard</a>
                </div>
            </div>
        </>
    );
}

export default Intro;