import { useState } from "react";
import BasketContext from "./storeContextCe";


const BasketProvider = ({ children }) => {
    const [basket, setBasket] = useState([])
    const addToBasket = (k) => {
        setBasket(basket.concat(k))
    }
    const removeFromBasket = (id) => {
        const index = basket.findIndex((item) => item.id == id)
        let newBasket = [...basket]
        if (index) {
            newBasket.splice(index, 1);
            setBasket(newBasket)
        }
    }

    return (
        <BasketContext.Provider value={{ basket, setBasket, addToBasket, removeFromBasket }}>
            {children}
        </BasketContext.Provider>
    );
};

export default BasketProvider