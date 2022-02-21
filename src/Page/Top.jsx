import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { push } from 'connected-react-router';
import { getUserId } from '../reducks/user/seletors'

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
                    <button className="" onClick={ () => dispatch(push('/ItemList'))}>商品を見る</button>
                    <p>{uid}</p>
                </div>
            </div>
        </>
    );
}

export default Top;