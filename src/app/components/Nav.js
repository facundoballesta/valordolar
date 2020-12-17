import React, { Component } from 'react';

export default class Nav extends Component {
    render() {
        return (
            <div>
                <div className="navbar-fixed">
                    <nav className="blue darken-4 white-text">
                        <div className="container">
                            <div className="nav-wrapper">
                                <a href="#!" className="brand-logo">Dolar a Pesos</a>
                                <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                                <ul className="right hide-on-med-and-down">
                                    <li><a href="#valores">Valores</a></li>
                                    <li><a href="#conversor">Conversor</a></li>
                                    <li><a href="#noticias">Noticias</a></li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
                <ul className="sidenav" id="mobile-demo">
                    <li><a href="#valores">Valores</a></li>
                    <li><a href="#conversor">Conversor</a></li>
                    <li><a href="#noticias">Noticias</a></li>
                </ul>
            </div>
        )
    }
}