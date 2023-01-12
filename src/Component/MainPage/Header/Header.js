import React, { Fragment } from "react";
import "./Header.css";

const Header = () => {
    return(
        <Fragment>
            <header className="continer">
                <div className="title">
                    <img className="title-logo" src={require('../../../img/logo.png')}alt="logo" />
                    <h1>Eletabot</h1>
                </div>

                <div className="list">
                    <ul>
                        <a href="#">invite bot</a>
                        <a href="#">commands</a>
                        <a href="#">support</a>
                    </ul>
                </div>

                <div className="more">
                    <select>
                        <option>English</option>
                        <option>Arabic</option>
                    </select>
                    <a href="#">log in</a>
                </div>
            </header>
        </Fragment>
    );
}

export default Header;