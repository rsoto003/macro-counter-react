import React, { Component } from 'react';
import MacroIntro from './MacroIntro';
import MacroImportant from './MacroImportant';


class Info extends Component {
    render(){
        return ( 
            <div className="container col-xl-8 lead">
                <MacroIntro />
                <MacroImportant />
            </div>            
        )
    }
}

export default Info;