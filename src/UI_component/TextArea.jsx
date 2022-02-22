import React from 'react'
import { TextField } from '@mui/material'
import { makeStyles } from '@mui/styles'

const Styles = makeStyles({
    full:{
        marginBottom:16,
    },
    half: {
        marginLeft:8,
        marginRight:8,
        marginBottom:16,
        minWidth:130,
        width:'calc(50% - 16px)'
    }

})

const TextArea = (props) => {
    const style = Styles();
    const textStyle = props.fullWidth ? style.full : style.half;
    return(
        <TextField
            margin='dense'
            className={textStyle}
            label={props.label}
            fullWidth={props.fullWidth}
            multiline={props.multiline}
            rows={props.rows}
            type={props.type}
            value={props.value}
            required={props.required}
            onChange={props.onChange}
        />
    );
}

export default TextArea;