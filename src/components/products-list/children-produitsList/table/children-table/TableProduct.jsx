import React, { Component } from 'react';
import Category from './category/Category';

class TableProduct extends Component {
    render(){

        return(
            <>
               <table>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                    <Category products={this.props.products} />
                </table> 
            </>
        )  
    }
}
export default TableProduct