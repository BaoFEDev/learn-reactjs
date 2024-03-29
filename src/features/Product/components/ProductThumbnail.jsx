import React from 'react'
import PropTypes from 'prop-types'
import { Box } from '@material-ui/core'
import { STATIC_HOST } from 'constants/index';
import { THUMBNAIL_PLACEHOLDER } from 'constants/common';

const ProductThumbnail = ({ product }) => {
    const thumnailUrl = product.thumbnail ? `${STATIC_HOST}${product.thumbnail?.url}` : THUMBNAIL_PLACEHOLDER;
    return (
        <Box>
            <img src={thumnailUrl}
                alt={product.name}
                width="100%"
            />
        </Box>
    )
}

ProductThumbnail.propTypes = {
    product: PropTypes.object
}

export default ProductThumbnail
