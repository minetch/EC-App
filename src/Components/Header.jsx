import { makeStyles } from '@mui/styles';
import { push } from 'connected-react-router';
import React from 'react'
import { useDispatch } from 'react-redux';
import '../reset.css'
import { ShoPrint } from '../Image';

const useStyles = makeStyles({
    container:{
        height:70,
        backgroundColor:"#6D9EEB",
    },image:{
        margin:"20px 25px",
        height:30,
        width:"auto",
        color:"white",
        
    }
})
const Header = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    
    return(
        <>
            <div className={classes.container}>
                <img
                    src={ShoPrint}
                    alt=""
                    className={classes.image}
                    onClick={() => dispatch(push('/'))}
                ></img>
            </div>
            
        </>
    );
}

export default Header;