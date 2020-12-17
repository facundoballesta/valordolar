import React, {Component} from 'react';

//Components
import Nav from './components/Nav';
import ValoresDolar from './components/ValoresDolar';
import Conversor from './components/Conversor';

export default class App extends Component{
    render(){
        return(
            <div>
                <Nav/>
                <div className="container">
                    <div className="row">
                        <div className="col m12 l8">
                            <ValoresDolar/>
                        </div>
                        <div className="col m12 l4">
                            <Conversor/>
                        </div>
                    </div>
                </div>
            </div>
        )
        
    }
}