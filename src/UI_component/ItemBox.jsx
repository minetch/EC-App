import { makeStyles } from '@mui/material';
import React from 'react'

const useStyles = makeStyles({
    container:{
        height: 200,
        width:70,
    },image:{
        height:50,
        width:50,
    },maker:{
        fontSize:11,
    },price:{
        fontSize:9
    },hover:{
        backgroundColor:"#81c784"
    }

})

const ItemBox = (props) => {
    const classes = useStyles();
    return(
        <>
            <div className={classes.container}>
                <img src={props.Image} alt="" className={classes.Image} />
                <p className="">{props.Price}</p>
                <p className="">{props.Maker}</p>
            </div>
        </>
    );
}

export default ItemBox;