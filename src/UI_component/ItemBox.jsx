import { makeStyles } from '@mui/styles';
import '../reset.css'
import Paper from '@mui/material/Paper';

const useStyles = makeStyles({
    frame:{
        width:"19%",
        margin:"0.5%",
        '&:hover': {
            backgroundColor: "#B2B2B2",
        }
    },image:{
        maxHeight:"90%",
        maxWidth:"90%",
        margin:"5%"
    },NameandPriceContainer:{
        display: 'flex',
        width:'100%'
    },name:{
        fontSize:20,
        fontWeight:"bold",
        margin:"10px 5px 10px 5px", 
    },maker:{
        fontSize:18,
        textAlign:"center"
    },price:{
        fontSize:20,
        float:"right",
        margin:"auto 5px auto auto",
        fontFamily:"Impact",
    }
})

const ItemBox = (props) => {
    const classes = useStyles();

    return(
        <>
            <Paper
                elevation={10}
                className={classes.frame}
                onClick={props.onClick}    
            >
                <img src={props.Image} alt="" className={classes.image} />
                
                <div className={classes.NameandPriceContainer}>
                    <p className={classes.name}>{props.Name}</p>
                    <p className={classes.price}>{props.Price}</p>
                </div>
                
                <p> design by</p><p className={classes.maker}>{props.Maker}</p>
            </Paper>
        </>
    );
}

export default ItemBox;