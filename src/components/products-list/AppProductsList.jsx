import React, { Component } from 'react';
import TableProduct from './children-produitsList/table/children-table/TableProduct';
import Search from './children-produitsList/search/Search';


class AppProductsList extends Component {
    constructor(props){
        super(props);
        this.state = {
            products : [
                {category: "Sporting Goods", price: "$49.99", stocked:true, name:"Football"},
                {category: "Sporting Goods", price: "$9.99", stocked:true, name:"Baseball"},
                {category: "Sporting Goods", price: "$29.99", stocked:false, name:"Basketball"},
                {category: "Electronics", price: "$199.99", stocked:true, name:"iPop Touch"},
                {category: "Electronics", price: "$399.99", stocked:false, name:"iPhone 5"},
                {category: "Electronics", price: "$199.99", stocked:true, name:"Nexus 7"}
            ]
        }
    }
    render(){
              return(
            <>
            <Search/>
            <TableProduct products={this.state.products} />
            </>
        )  
    }
}
export default AppProductsList