import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "@material-ui/core";
import QuantityField from "components/QuantityField/QuantityField";
import PropTypes from 'prop-types';
import React from 'react';
import { useForm } from "react-hook-form";
import * as yup from "yup";




const AddToCartForm = ({ onSubmit = null }) => {
    const schema = yup.object().shape({
        quantity: yup.number().required('Please enter quantity').min(1, 'Minimum value is 1').typeError('Please enter a number')
    });
    const form = useForm({
        defaultValues: {
            quantity: 1
        },
        resolver: yupResolver(schema),
    });

    const handleSubmit = async (values) => {
        if (onSubmit) {
            await onSubmit(values);
        }
    };
    return (
        <form onSubmit={form.handleSubmit(handleSubmit)}>
            <QuantityField name="quantity" label="Quantity" form={form} />
            <Button
                size="large"
                type="submit"
                variant="contained"
                color="primary"
                style={{ width: '250px' }}
            >
                Add to cart
            </Button>
        </form>
    )
}

AddToCartForm.propTypes = {
    onSubmit: PropTypes.func
}

export default AddToCartForm
