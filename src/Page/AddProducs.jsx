import React, { useCallback, useState }from 'react'
import { TextArea } from '../UI_component';
import { Button } from '@mui/material';
import { makeStyles } from '@mui/styles';


const useStyles = makeStyles({
    input:{
        padding:"0px 100px"
    }
})



const AddProducts = () => {
    const classes = useStyles();
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    

    const Name = useCallback((event) => {
        setName(event.target.value)
    }, [setName])

    const Price = useCallback((event) => {
        setPrice(event.target.value)
    }, [setPrice])
    
    return(
        <>
            <h2 className="">商品の登録</h2>
            <div className={classes.input}>
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
                >確定</Button>    
            </div>
        </>
    )
}

export default AddProducts;