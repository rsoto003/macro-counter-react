import React, { Component } from 'react';
import MacroIntro from './MacroIntro';
import MacroImportant from './MacroImportant';
import ThreeMacros from './ThreeMacros';


class Info extends Component {
    render(){
        return ( 
            <div className="container col-xl-8 col-lg-6 col-md-6 col-sm-2 lead">
                <MacroIntro />
                <MacroImportant />
                <ThreeMacros />
            </div>            
        )
    }
}

export default Info;