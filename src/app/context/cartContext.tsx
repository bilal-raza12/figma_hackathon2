"use client"
import { createContext , useState , useContext , ReactNode} from "react";
import { IProducts } from "../types/types";

interface CartItems extends IProducts {
    quantity:number;
}
interface CartContextType {
    cartItems : IProducts[],
    totalPrice:string,
    addToCart: (product:IProducts) => void,
    removeFromCart: (_id:string) => void,
    increaseQuantity: (_id:string) => void,
    decreaseQuantity: (_id:string) => void,

 }
 const cartContext = createContext<CartContextType | undefined>(undefined);


 export const CartProvider = ({ children } : {children:ReactNode}) => {
    const [cartItems, setCartItems] = useState<CartItems[]>([]);
    const addToCart = (product:IProducts) => {
        setCartItems(prevCartItems => {
            const exixtingItem  = prevCartItems.find((item) => item._id === product._id);
            if (exixtingItem) {
                return prevCartItems.map(item => item._id === product._id ? {...item, quantity:item.quantity + 1} : item);
            }
            return [...prevCartItems, {...product, quantity: 1 }];
        });

    };

    const increaseQuantity = (_id:string) => {
        setCartItems(prevCartItems => prevCartItems.map(item => item._id === _id ? {...item, quantity:item.quantity + 1} : item));
    };
    const decreaseQuantity = (_id:string) => {
        setCartItems(prevCartItems => prevCartItems.map(item => item._id === _id && item.quantity > 1 ? {...item, quantity:item.quantity - 1} : item).filter(item => item.quantity>0));
    };
    const removeFromCart = (_id:string) => {
        setCartItems(prevCartItems => prevCartItems.filter(item => item._id!== _id));
    };
    const totalPrice = cartItems.reduce((total , item) => total + item.price , 0)
    return (
        <cartContext.Provider value={{ cartItems, totalPrice, addToCart, removeFromCart , increaseQuantity , decreaseQuantity }}>
            {children}
        </cartContext.Provider>
    );
 }


 export const useCart = ():CartContextType => {
    const context = useContext(cartContext)
    if (!context) {
        throw new Error("useCart must be used within a CartProvider");
    }
    return context;
 }