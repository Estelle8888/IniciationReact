import React, { Component } from 'react';
import Produit from './children-category/produit/Produit';

export default class Category extends Component {

    render(){
        let prevCategory;
        let displayCategory;

        return(
            <>
            { this.props.products.map((p,index) => {
                displayCategory=p.category !== prevCategory;
                if (displayCategory){
                    prevCategory = p.category;
                }
                return(
                    <>
                       { displayCategory &&
                           <tr >
                            <td colSpan="2" className="font-weight-bold">{ p.category}</td>
                           </tr>
                        }
                        <Produit product={ p } key={ index }/>
                    </>
                
                )
            }
            )
            }
            </>
        )  
    }
}
