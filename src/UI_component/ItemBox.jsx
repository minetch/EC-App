import { makeStyles } from '@mui/styles';
import '../reset.css'

const useStyles = makeStyles({
    frame:{
        height:360,
        width:"20%",
        borderRadius:3,
        border:"2px solid",
        margin:2.5,
        '&:hover': {
            backgroundColor: "#B2B2B2",
        }
    },image:{
        maxHeight:"90%",
        maxWidth:"90%",
        margin:"5%"
    },name:{
        fontWeight:"bold",
        margin:"10px 5px 10px 5px", 
        float:"left",
    },maker:{
        fontSize:11,
        float:"left",
        textAlign:"center"
    },price:{
        fontSize:17,
        float:"right",
        margin:"10px 5px 10px 5px",
        fontFamily:"Impact",
    }
})

const ItemBox = (props) => {
    const classes = useStyles();

    return(
        <>
            <div 
                className={classes.frame}
                onClick={props.onClick}    
            >
                <img src={props.Image} alt="" className={classes.image} />
                <p className={classes.name}>{props.Name}</p>
                <p className={classes.price}>{props.Price}</p>
                <p className={classes.maker}>{props.Maker}</p>
            </div>
        </>
    );
}

export default ItemBox;