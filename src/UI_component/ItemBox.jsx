import { makeStyles } from '@mui/styles';
import '../reset.css'

const useStyles = makeStyles({
    frame:{
        maxHeight:"40%",
        minHeight:"40%",
        maxWidth:"20%",
        minWidth:"20%",
        borderRadius:3,
        border:"2px solid",
        margin:"0.1%",
        '&:hover': {
            backgroundColor: "#B2B2B2",
        }
    },image:{
        maxHeight:"90%",
        maxWidth:"90%",
        margin:"5%"
    },container:{
        display:"flex"
    },name:{
        fontWeight:"bold",
        margin:"10px 5px 10px 5px", 
        float:"left",
    },maker:{
        fontSize:11,
        float:"left",
        textAlign:"center",
        margin:"10px 5px"
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
                <img src={props.Image} alt="media" className={classes.image} />
                    <div className={classes.container}>
                        <p className={classes.name}>{props.Name}</p>
                        <p className={classes.price}>{props.Price}</p>
                        <p className={classes.maker}>{props.Maker}</p>
                    </div>
            </div>
        </>
    );
}

export default ItemBox;