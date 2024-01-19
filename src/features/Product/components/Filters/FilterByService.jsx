import { Box, Button, TextField, Typography, makeStyles, FormControlLabel, Checkbox } from '@material-ui/core';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
        borderTop: `1px solid ${theme.palette.grey[300]}`
    },

    list: {
        padding: 0,
        margin: 0,
        listStyle: 'none',
        '& > li': {
            margin: 0,
        }
    }
}))


const FilterByService = ({ filters = {}, onChange }) => {
    const classes = useStyles();
    const handleChange = (e) => {
        if (!onChange) return;
        const { name, checked } = e.target;
        onChange({ [name]: checked })
    }

    return (
        <Box className={classes.root}>
            <Typography variant="subtitle2">DỊCH VỤ</Typography>

            <ul className={classes.list}>
                {[
                    { value: 'isPromotion', label: 'Có khuyến mãi' },
                    { value: 'isFreeShip', label: 'Vận chuyển miễn phí' }
                ].map((service) => (
                    <li key={service.value}>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={Boolean(filters[service.value])}
                                    onChange={handleChange}
                                    name={service.value}
                                    color="primary"
                                />
                            }
                            label={service.label}
                        />
                    </li>
                ))}
            </ul>
        </Box>
    )
}

FilterByService.propTypes = {
    filters: PropTypes.object,
    onChange: PropTypes.func
}

export default FilterByService
