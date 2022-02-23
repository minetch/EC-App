import React from 'react';
import { useDispatch } from 'react-redux';
import { push } from 'connected-react-router';
import { Button } from '@mui/material';

const Top = () => {
    const dispatch = useDispatch();
    return(
        <>
            <div className="Top-Container">
                <div className="Top">
                    <Button 
                        className="" 
                        onClick={() => dispatch(push('/login'))}
                        variant="contained"    
                    >ログイン</Button>
                    <Button 
                        className="" 
                        onClick={() => dispatch(push('/ItemList'))}
                        variant="contained"
                    >商品を見る</Button>
                    <Button 
                        className="" 
                        onClick={() => dispatch(push('/AddProducts'))}
                        variant="contained"
                    >商品をアップロード</Button>
                </div>
            </div>
        </>
    );
}

export default Top;