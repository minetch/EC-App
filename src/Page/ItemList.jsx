import { makeStyles } from '@mui/styles';
import React from 'react'
import { ItemBox } from '../UI_component';
import {coffee_cup, Case} from '../Image';
import '../reset.css'

const useStyles = makeStyles({
    group:{
        display: "flex",
        margin:"20px 20px",
    }
})

const ItemList = () => {
    const classes = useStyles();
    return(
        <>
            <div className={classes.group}>
                <ItemBox 
                    Id={"/ItemView"}
                    Image={coffee_cup}
                    Name={"Cup"}
                    Price={"¥100"}
                    Maker={"Aiba Hizuki"}
                />
                <ItemBox 
                    Image={Case}
                    Name={"Cup"}
                    Price={"¥100"}
                    Maker={"Aiba Hizuki"}
                />
                <ItemBox 
                    Image={Case}
                    Name={"Cup"}
                    Price={"¥100"}
                    Maker={"Aiba Hizuki"}
                />  
                <ItemBox 
                    Image={Case}
                    Name={"Cup"}
                    Price={"¥100"}
                    Maker={"Aiba Hizuki"}
                />
                <ItemBox 
                    Image={Case}
                    Name={"Cup"}
                    Price={"¥100"}
                    Maker={"Aiba Hizuki"}
                />
            </div>
            <div className={classes.group}>
                <ItemBox 
                    Id={"/Top"}
                    Image={coffee_cup}
                    Name={"Cup"}
                    Price={"¥100"}
                    Maker={"Aiba Hizuki"}
                />
                <ItemBox 
                    Image={Case}
                    Name={"Cup"}
                    Price={"¥100"}
                    Maker={"Aiba Hizuki"}
                />
                <ItemBox 
                    Image={Case}
                    Name={"Cup"}
                    Price={"¥100"}
                    Maker={"Aiba Hizuki"}
                />  
                <ItemBox 
                    Image={Case}
                    Name={"Cup"}
                    Price={"¥100"}
                    Maker={"Aiba Hizuki"}
                />
                <ItemBox 
                    Image={Case}
                    Name={"Cup"}
                    Price={"¥100"}
                    Maker={"Aiba Hizuki"}
                />
            </div>
        </>   
    );
}

export default ItemList;
