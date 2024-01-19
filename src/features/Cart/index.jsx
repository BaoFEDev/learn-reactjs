import { Button, Container, Grid, makeStyles } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux'
import CartItems from './CartItems'
import { cartItemsCountSelector, cartTotalSelector } from './selectors'



const useStyles = makeStyles((theme) => ({
    root: {
        paddingTop: theme.spacing(3)
    },
    left: {
        padding: `${theme.spacing(1.5)}px ${theme.spacing(1.5)}px !important`,
        borderRight: `1px solid ${theme.palette.grey[300]}`,
        backgroundColor: '#fff'
    },
    right: {
        padding: `${theme.spacing(1.5)}px ${theme.spacing(1.5)}px !important`,
        backgroundColor: '#fff'
    },
    flex: {
        display: 'flex',
    },
    justifyContentSpaceBetween: {
        justifyContent: "space-between"
    },
    checkoutBtn: {
        float: "right",
        marginTop: "10px"
    }
}));

const CartFeature = props => {
    const classes = useStyles();
    const cartTotal = useSelector(cartTotalSelector);
    const cartCount = useSelector(cartItemsCountSelector)
    const cart = useSelector(state => state.cart);
    let cartList = cart.cartItems;
    return (
        <form className={classes.root}>
            <Container>
                <Grid container spacing={2}>
                    <Grid item md={8}
                        className={classes.left}>
                        {cartList.map((i) =>
                            <div className={`${classes.flex} ${classes.justifyContentSpaceBetween}`} key={i.id}>
                                <CartItems
                                    id={i.id}
                                    productThumbnail={i.product.thumbnail}
                                    productName={i.product.name}
                                    quantity={i.quantity}
                                />
                            </div>
                        )}
                    </Grid>
                    <Grid item md={4}
                        className={classes.right}>
                        <div className={`${classes.flex} ${classes.justifyContentSpaceBetween}`}>
                            <div>Cart total</div>
                            <div>{cartTotal}</div>
                        </div>
                        <Button variant="contained" color="primary" className={classes.checkoutBtn}>
                            Checkout
                        </Button>
                    </Grid>
                </Grid>
            </Container>
        </form>
    )
}

CartFeature.propTypes = {

}

export default CartFeature
