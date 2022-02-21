import React, { useState, useEffect } from 'react'
import { Button, IconButton, makeStyles, OutlinedInput } from '@material-ui/core'
import { AddCircleOutline, RemoveCircleOutline } from '@material-ui/icons'
import { unwrapResult } from "@reduxjs/toolkit"
import { THUMBNAIL_PLACEHOLDER } from 'constants/common'
import { STATIC_HOST } from 'constants/index'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import { decreaseQuantity, increaseQuantity, removeFromCart, changeQuantity, setQuantity } from './cartSlice'
import { cartItemsCountSelector, cartTotalSelector } from './selectors'



const useStyles = makeStyles((theme) => ({
    flex: {
        display: 'flex',
    },
    justifyContentSpaceBetween: {
        justifyContent: "space-between"
    },
    productDetail: {
        display: 'flex',
        '& > img': {
            width: '130px',
            height: '130px',
        },
    },
    productName: {
        marginLeft: '10px',
    },
    'removeButton': {
        marginTop: '10px'
    },
    quantity: {
        display: 'flex'
    },
    outlinedInput: {
        width: '100px',
        height: '50px'
    },
    iconButton: {
        width: '50px',
        height: '50px'
    },

}));

const CartItems = props => {
    const { id, productThumbnail, productName, quantity } = props;
    const classes = useStyles();

    const cart = useSelector(state => state.cart);
    let cartList = cart.cartItems;
    const dispatch = useDispatch();
    const decrease = (cartItemId) => {
        let objectItems = cartList.filter(i => i.id === cartItemId)[0];
        const action = decreaseQuantity(objectItems);
        const resultAction = dispatch(action);
        unwrapResult(resultAction);
    }
    const increase = (cartItemId) => {
        let objectItems = cartList.filter(i => i.id === cartItemId)[0];
        const action = increaseQuantity(objectItems);
        const resultAction = dispatch(action);
        unwrapResult(resultAction);
    }
    const changeValue = (e, cartItemId) => {
        setValue(e.target.value)
        let objectItems = cartList.filter(i => i.id === cartItemId)[0];
        const action = setQuantity({
            ...objectItems,
            value
        });
        const resultAction = dispatch(action);
        unwrapResult(resultAction);
    }

    const remove = (cartItemId) => {
        let objectItems = cartList.filter(i => i.id === cartItemId)[0];
        const action = removeFromCart(objectItems);
        const resultAction = dispatch(action);
        unwrapResult(resultAction);
    }
    const [value, setValue] = useState(quantity);
    useEffect(() => {
        setValue(quantity)
    }, [quantity]);
    return (
        <>
            <div className={classes.productDetail}>
                <>
                    <img src={productThumbnail ? `${STATIC_HOST}${productThumbnail?.url}` : THUMBNAIL_PLACEHOLDER} alt="" />
                    <div className={classes.productName}>
                        <h4>{productName}</h4>
                        <Button
                            variant="contained"
                            color="primary"
                            className={classes.removeButton}
                            onClick={() => remove(id)}>
                            Remove
                        </Button>
                    </div>
                </>
            </div>
            <div className={classes.quantity}>
                <IconButton className={classes.iconButton} onClick={() => decrease(id)}>
                    <RemoveCircleOutline />
                </IconButton>
                <OutlinedInput
                    className={classes.outlinedInput}
                    type="number"
                    variant="outlined"
                    value={value}
                    onChange={(e) => changeValue(e, id)}
                />
                <IconButton className={classes.iconButton} onClick={() => increase(id)}>
                    <AddCircleOutline />
                </IconButton>
                {/* <QuantityField name="quantity" label="Quantity" form={form} /> */}
            </div>
        </>
    )
}

CartItems.propTypes = {
    id: PropTypes.number.isRequired,
    productThumbnail: PropTypes.object,
    productName: PropTypes.string,
    quantity: PropTypes.number.isRequired
}

export default CartItems
