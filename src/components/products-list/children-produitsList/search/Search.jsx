import React, { Component } from 'react';

class Search extends Component {
    render(){
              return(
            <>
               <input type ="text"  placeholder ="Search"/>
               <input type ="checkbox"/> <label> Only show product in stock </label>
            
            </>
        )  
    }
}
export default Search