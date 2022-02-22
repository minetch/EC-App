import React from 'react';
import { useDispatch } from 'react-redux';
import { push } from 'connected-react-router';

const Top = () => {
    const dispatch = useDispatch();
    return(
        <>
            <div className="Top-Container">
                <div className="Top">
                    <h1 className="Top-Title">ShopRint</h1>
                    <button className="" onClick={() => dispatch(push('/login'))}>ログイン</button>
                    <button className="" onClick={() => dispatch(push('/ItemList'))}>商品を見る</button>
                    <button className="" onClick={() => dispatch(push('/AddProducts'))}>商品をアップロード</button>
                </div>
            </div>
        </>
    );
}

export default Top;