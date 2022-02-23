import { makeStyles } from '@mui/styles';
import React from 'react';
import '../reset.css'

const useStyles = makeStyles({
    container:{
        height:300,
        backgroundColor:'#202020',
    },text:{
        fontSize:100,
        color:"#B2B2B2",
        textAlign:"center",
        padding:"90px",
        fontWeight:"bold",
    }
})
const Footer = () => {
    const classes = useStyles();
    return(
        <>
            <div className={classes.container}>
                <p className={classes.text}>フッターっぽいもの</p>
            </div>
        </>
    );
}

export default Footer;