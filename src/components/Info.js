import React from 'react';
import MacroIntro from './MacroIntro';
import MacroImportant from './MacroImportant';
import ThreeMacros from './ThreeMacros';


function Info(){
        return ( 
            <div className="container col-xl-8 col-lg-10 col-md-10 col-sm-12 col-xs-12 lead mx-auto">
                <MacroIntro />
                <MacroImportant />
                <ThreeMacros />
            </div>            
        )
}

export default Info;