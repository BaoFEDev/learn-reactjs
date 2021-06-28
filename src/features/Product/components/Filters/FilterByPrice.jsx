import { Box, Button, TextField, Typography, makeStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
        borderTop: `1px solid ${theme.palette.grey[300]}`
    },

    range: {
        display: 'flex',
        flexFlow: 'row nowrap',
        alignItems: 'center',
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),

        '& > span': {
            marginLeft: theme.spacing(1),
            marginRight: theme.spacing(1),
        }
    }
}))

const FilterByPrice = ({ onChange }) => {
    const classes = useStyles();
    const [values, setValues] = useState({
        salePrice_gte: 0,
        salePrice_lte: 0
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues(prevValues => ({
            ...prevValues,
            [name]: value
        }));
    }
    const form = document.querySelector('form');
    const handleSubmit = (e) => {
        e.preventDefault();
        if (onChange) onChange(values);
        form.reset();
    }
    return (
        <form className={classes.root} onSubmit={handleSubmit}>
            <Typography variant="subtitle2">CHỌN KHOẢNG GIÁ</Typography>

            <Box className={classes.range}>
                <TextField name="salePrice_gte" value={values.salePrice_gte} onChange={handleChange} />
                <span>-</span>
                <TextField name="salePrice_lte" value={values.salePrice_lte} onChange={handleChange} />
            </Box>

            <Button variant="outlined" type="submit" color="primary" size="small" >Áp dụng</Button>
        </form>
    )
}

FilterByPrice.propTypes = {
    onChange: PropTypes.func
}

export default FilterByPrice
