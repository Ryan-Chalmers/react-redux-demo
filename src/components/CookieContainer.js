import React from 'react';
import {useSelector, useDispatch} from "react-redux";
import {buyCookie} from "../redux";

function CookieContainer() {
    const numOfCookie = useSelector(state => state.cookie.numOfCookies)
    const dispatch = useDispatch()
    return (
        <div>
            <h2>Number of Cookies - {numOfCookie}</h2>
            <button onClick={()=>dispatch(buyCookie())}>Buy Cookie</button>
        </div>
    );
}

export default CookieContainer;