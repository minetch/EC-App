import { makeStyles } from '@mui/styles';
import React from 'react'
import { ItemBox } from '../UI_component';
import { coffee_cup, Case, cube, hunger, piece_of_cake, S, toothbrush} from '../Image'
import '../reset.css'
import { useDispatch } from 'react-redux';
import { push } from 'connected-react-router';


const img = new Image();
const src= "src/Image"
img.src = src

const useStyles = makeStyles({
    group:{
        display: "flex",
        margin:"20px 20px",
    }
})

const ItemList = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    return(
        <>
            <div className={classes.group}>
                <ItemBox 
                    Image={coffee_cup}
                    Name={"Cup"}
                    Price={"¥100"}
                    Maker={"Aiba Hizuki"}
                    onClick={() => dispatch(push('/ItemView/coffee_cup'))}
                />
                <ItemBox 
                    Image={Case}
                    Name={"謎のケース"}
                    Price={"¥100"}
                    Maker={"Aiba Hizuki"}
                    onClick={() => dispatch(push('/ItemView/Case'))}
                />
                <ItemBox 
                    Image={cube}
                    Name={"立方体"}
                    Price={"¥100"}
                    Maker={"Aiba Hizuki"}
                    onClick={() => dispatch(push('/ItemView/cube'))}
                />  
                <ItemBox 
                    Image={hunger}
                    Name={"ハンガー"}
                    Price={"¥100"}
                    Maker={"Aiba Hizuki"}
                    onClick={() => dispatch(push('/ItemView/hunger'))}
                />
                <ItemBox 
                    Image={piece_of_cake}
                    Name={"組み立てられるケーキ"}
                    Price={"¥100"}
                    Maker={"Aiba Hizuki"}
                    onClick={() => dispatch(push('/ItemView/piece_of_cake'))}
                />
            </div>
            <div className={classes.group}>
                <ItemBox 
                    Image={S}
                    Name={"S字フック"}
                    Price={"¥100"}
                    Maker={"Aiba Hizuki"}
                    onClick={() => dispatch(push('/ItemView/S'))}
                />
                <ItemBox 
                    Image={toothbrush}
                    Name={"歯ブラシ立て"}
                    Price={"¥100"}
                    Maker={"Aiba Hizuki"}
                    onClick={() => dispatch(push('/ItemView/toothbrush'))}
                />
            </div>
        </>   
    );
}

export default ItemList;
