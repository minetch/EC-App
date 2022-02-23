import { makeStyles } from '@mui/styles';
import React from 'react'
import '../reset.css'

const useStyles = makeStyles({
    container:{
        height:70,
        backgroundColor:"#6D9EEB",
    },title:{
        fontSize:20,
        padding:"25px 30px",
        fontWeight:"bold",
        color:"white",

    }
})
const Header = () => {
    const classes = useStyles();
    return(
        <>
            <div className={classes.container}>
                <p className={classes.title}>ShoPrint</p>
            </div>
            
        </>
    );
}

export default Header;