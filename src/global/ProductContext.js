import React,{createContext} from 'react'
import{db} from '../config/config';

export const ProductContext=createContext();

export class ProductContextProvider extends React.Component{


    state={
        products:[]
    }
    componentDidMount(){
        const prevProducts=this.state.products;
        db.collection('Products').onSnapshot(snapshot=>{
            let changes= snapshot.docChanges();
            changes.forEach(change=>{
                if(change.type==='added'){
                    prevProducts.push({
                        productID:change.doc.id,
                        productName:change.doc.data().productName,
                        productPrice:change.doc.data().productPrice,
                    
                        productImg:change.doc.data().productImg
                    })
                }
                this.setState({
                    products:prevProducts
                })
            })
        })
    }
    render(){
        return(
            <ProductContext.Provider value={{products:[...this.state.products]}}>
            {this.props.children}
            </ProductContext.Provider>

        )
    }
}