import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getCatImg} from "../redux/reducers/dataImgReducer";

export default function Counter(){

    const [cartData, setCartData] = useState(0);

    const {cart,count, imgURL} = useSelector(state => ({
        ...state.AddCartReducer,
        ...state.CounterReducer,
        ...state.dataImgReducer
    }))

    const dispatch = useDispatch();

    const incrFunc = () => {
        dispatch({
            type:'INCR'
        })
    }

    const decrFunc = () => {
        dispatch({
            type:'DECR'
        })
    }

    const addToCartFunc = () => {
        dispatch({
            type:"ADDCART",
            payload: cartData
        })
    }

    useEffect(() => {
        dispatch(getCatImg())
    },[])


    return (
        <div>
            <h1>Panier {cart}</h1>
            <h1>Count {count}</h1>
            <button onClick={incrFunc}>+1</button>
            <button onClick={decrFunc}>-1</button>
            <input
                value={cartData}
                type="number"
                onInput={e => setCartData(e.target.value)}
            />
            <br/>
            <button onClick={addToCartFunc}>Ajouter au panier</button>
            {imgURL ? <img src={imgURL} style={{width:"300px"}} /> : "Rien"}
        </div>
    );  

}