import React, {Component} from 'react';

//Components
import Nav from './components/Nav';
import ValoresDolar from './components/ValoresDolar';
import Conversor from './components/Conversor';
import Noticias from './components/Noticias';

export default class App extends Component{
    render(){
        return(
            <div>
                <Nav/>
                <div className="container white z-depth-4">
                    <div className="row">
                        <div className="col m12 l8">
                            <ValoresDolar/>
                        </div>
                        <div className="col m12 l4">
                            <Conversor/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col s12">
                            <Noticias/>
                        </div>
                    </div>
                </div>
            </div>
        )
        
    }
}