import React, { Component } from 'react';

export default class Produit extends Component {

    render(){
        return(
            <>
            <tr>
                <td className ={ this.props.product.stocked? "text-black":"text-danger"}> { this.props.product.name } </td>
                <td> { this.props.product.price} </td>
            </tr>
            </>
        )  
    }
}
