import React from 'react'
import PropTypes from 'prop-types'
import { Tab, Tabs } from '@material-ui/core'

const ProductSort = ({ currentSort, onChange }) => {
    const handleSortChange = (event, newValue) => {
        if (onChange) onChange(newValue)
    }
    return (
        <Tabs value={currentSort}
            indicatorColor="primary"
            textColor="primary"
            onChange={handleSortChange}
            aria-label="disabled tabs example"
        >
            <Tab label="Giá thấp tới cao" value="salePrice:ASC"></Tab>
            <Tab label="Giá cao xuống thấp" value="salePrice:DESC"></Tab>
        </Tabs>
    )
}

ProductSort.propTypes = {
    currentSort: PropTypes.string.isRequired,
    onChange: PropTypes.func
}

export default ProductSort
