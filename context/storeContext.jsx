import { useState } from "react";
import BasketContext from "./storeContextCe";


const BasketProvider = ({ children }) => {
    const [basket, setBasket] = useState(["1"])
    const addToBasket = (k) => {
        setBasket(basket.concat(k))
    }
    const removeFromBasket = (k) => {
        const index = basket.findIndex((item) => item.id === k.id)
        let newBasket = [...basket]

        if (index && basket.length !== 1) {
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