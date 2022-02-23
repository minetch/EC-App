import { makeStyles } from '@mui/styles';
import { push } from 'connected-react-router';
import React from 'react'
<<<<<<< HEAD
import logo from '../Image/logo.png'
=======
import { useDispatch } from 'react-redux';
>>>>>>> upstream/master
import '../reset.css'
import { ShoPrint } from '../Image';

const useStyles = makeStyles({
    container:{
        width:'100%',
        height:70,
        backgroundColor:"#6D9EEB",
<<<<<<< HEAD
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
=======
    },image:{
        margin:"20px 25px",
        height:30,
        width:"auto",
        color:"white",
        
>>>>>>> upstream/master
    }



})
const Header = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    
    return(
        <>
            <div className={classes.container}>
<<<<<<< HEAD
                <img className={classes.logo} src ={logo}  alt="Logo"/>
                <p className={classes.title}>ShoPrint</p>
=======
                <img
                    src={ShoPrint}
                    alt=""
                    className={classes.image}
                    onClick={() => dispatch(push('/'))}
                ></img>
>>>>>>> upstream/master
            </div>
            
        </>
    );
}

export default Header;