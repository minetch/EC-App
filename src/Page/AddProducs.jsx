import React, { useCallback, useState }from 'react'
import { TextArea } from '../UI_component';
import { Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { push } from 'connected-react-router';

const Modal = () => {
    const dispatch = useDispatch();
    if(true){
        return(
            <>
                <div>
                    <div>
                        <p>商品を追加しました</p>
                        <Button
                            variant="contained"
                            onClick={() => dispatch(push('/'))}
                        >トップへ戻る</Button>
                    </div>
                </div>
            </>
        );
    }else{
        return null;
    }

}

const AddProducts = () => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [showModal, setShowModal] = useState(false);
    
    const openModal = () => {
        setShowModal(true)
    }

    const Name = useCallback((event) => {
        setName(event.target.value)
    }, [setName])

    const Price = useCallback((event) => {
        setPrice(event.target.value)
    }, [setPrice])
    
    return(
        <>
            <h2 className="">商品の登録</h2>
            <div className="">
                <TextArea 
                    label={"商品名"}
                    multiline={false}
                    required={true}
                    onChange={Name}
                    fullWidth={true}
                    rows={1}
                    value={name}
                    type={"text"}
                />
                <TextArea 
                    label={"価格"}
                    multiline={false}
                    required={true}
                    onChange={Price}
                    fullWidth={true}
                    rows={1}
                    value={price}
                    type={"number"}
                />
                <Button 
                    variant="contained"
                    onClick={openModal}
                >確定</Button>
                <Modal modal={showModal}/>
            </div>
        </>
    )
}

export default AddProducts;