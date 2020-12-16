import React, {Component} from 'react';

//Components
import Nav from './components/Nav';
import ValoresDolar from './components/ValoresDolar';

export default class App extends Component{
    render(){
        return(
            <div>
                <Nav/>
                <ValoresDolar/>
            </div>
        )
        
    }
}