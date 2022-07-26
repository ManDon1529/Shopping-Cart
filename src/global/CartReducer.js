import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
 

export const CartReducer=(state,action)=>{

    const {shoppingCart,totalPrice,totalQty}=state;

    let product;
    let index;
    let updatedPrice;
    let updatedQty;

    switch(action.type){
        case 'ADD_TO_CART':
        const check=shoppingCart.find(product=>product.productID===action.id)
        if(check){
           toast.info('this Product is already in your cart',{

            position:"top-right",
            autoClose:2000,
            hideProgressBar:false,
            closeOnClick:true,
            pauseOnHover:false,
            draggable:false,
            progress:undefined
           });
           
            return state;
        }
        else {
            product=action.product;
            product['qty']=1;
            product['TotalProductPrice']=product.productPrice * product.qty;
            updatedQty=totalQty+1;
            updatedPrice=totalPrice + product.productPrice;
            return{
                shoppingCart:[product,...shoppingCart],totalPrice:updatedPrice,totalQty:updatedQty

            }
        }
       break;

       case 'INC':
        product=action.cart;
        product.qty=++product.qty;
        product.TotalProductPrice=product.productPrice * product.qty;
        updatedQty=totalQty+1;
        updatedPrice=totalPrice + product.productPrice;
        index=shoppingCart.findIndex(cart=>cart.productID===action.id)
        shoppingCart[index]=product;
        return {
            shoppingCart:[...shoppingCart],totalPrice:updatedPrice,totalQty:updatedQty
        }
        case 'DEC':
        product=action.cart;
        if(product.qty>1){
            product.qty=product.qty-1;
            product.TotalProductPrice=product.qty * product.productPrice;
            updatedPrice=totalPrice-product.productPrice;
            updatedQty= totalQty-1;
            index=shoppingCart.findIndex(cart=>cart.productID===action.id)
            shoppingCart[index]=product;
            return{
                shoppingCart:[...shoppingCart],totalPrice:updatedPrice,totalQty:updatedQty
            }
        }
        else{
            return state;
        }
            break;
            case 'DELETE':
                const filtered= shoppingCart.filter(product=>product.productID !== action.id);
                product=action.cart;
                updatedQty=totalQty-product.qty;
                updatedPrice= totalPrice-product.qty * product.productPrice;
                return{
                    shoppingCart:[... filtered], totalPrice: updatedPrice, totalQty: updatedQty
                }
                break;


        default:
            return state;
    }
}