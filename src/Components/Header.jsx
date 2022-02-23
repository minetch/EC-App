import { makeStyles } from '@mui/styles';
import { push } from 'connected-react-router';
import React from 'react'
import { useDispatch } from 'react-redux';
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
        fontSize:30,
        color:"white",
        margin:"20px 0px",       
        fontFamily:"Impact"


    },
    logo:{
        width:'40px',
        height:'40px',
        margin:"15px 13px", 
    }



})
const Header = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    return(
        <>
            <div className={classes.container}>
                <img 
                    className={classes.logo} 
                    src ={logo}  
                    alt="Logo"
                    onClick={() => dispatch(push('/'))}
                />
                <p 
                    className={classes.title}
                    onClick={() => dispatch(push('/'))}
                >ShoPrint</p>
            </div>
            
        </>
    );
}

export default Header;