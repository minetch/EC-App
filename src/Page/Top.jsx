import React from 'react';
import { useDispatch } from 'react-redux';
import { push } from 'connected-react-router';
import { getUserId } from '../reducks/user/seletors'
import { useSelector } from 'react-redux';

const Top = () => {
    const dispatch = useDispatch();
    const selector = useSelector(state => state);
    const uid = getUserId(selector);

    return(
        <>
            <div className="Top-Container">
                <div className="Top">
                    <h1 className="Top-Title">ShopRint</h1>
                    <button className="" onClick={() => dispatch(push('/login'))}>ログイン</button>
                    <p>{uid}</p>
                </div>
            </div>
        </>
    );
}

export default Top;