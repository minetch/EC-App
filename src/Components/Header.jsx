import { makeStyles } from '@mui/styles';
import React from 'react'
import logo from '../Image/logo.png'
import '../reset.css'

const useStyles = makeStyles({
    container:{
        width:'100%',
        height:70,
        backgroundColor:"#6D9EEB",
        display: 'flex'

    },
    title:{
        fontSize:20,
        fontWeight:"bold",
        color:"white",
        margin:"25px 0px",       
        


    },
    logo:{
        width:'40px',
        height:'40px',
        margin:"15px 13px", 
    }



})
const Header = () => {
    const classes = useStyles();
    return(
        <>
            <div className={classes.container}>
                <img className={classes.logo} src ={logo}  alt="Logo"/>
                <p className={classes.title}>ShoPrint</p>
            </div>
            
        </>
    );
}

export default Header;