import React, {Component} from 'react';

export default class Nav extends Component {
    render() {
        return (
            <div>

                <nav className="blue darken-4 white-text">
                    <div className="container">
                        <div className="nav-wrapper">
                            <a href="#!" className="brand-logo">Valor del Dolar</a>
                            <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                            <ul className="right hide-on-med-and-down">
                                <li><a href="#valores">Valores dolar</a></li>
                                <li><a href="badges.html">Components</a></li>
                                <li><a href="collapsible.html">Javascript</a></li>
                                <li><a href="mobile.html">Mobile</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>

                <ul className="sidenav" id="mobile-demo">
                    <li><a href="sass.html">Sass</a></li>
                    <li><a href="badges.html">Components</a></li>
                    <li><a href="collapsible.html">Javascript</a></li>
                    <li><a href="mobile.html">Mobile</a></li>
                </ul>

            </div>
        )
    }
}