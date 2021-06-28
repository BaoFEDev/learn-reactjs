FiltersViewer

```js
const filters = {
  isPromotion: true,
  salePrice_lte: 100,
  salePrice_gte: 100,
};
```

FILTER_LIST

- id:number
- getLabel: (filters) => string
- isActive: (filters) => true/false
- isVisible: (filters) => boolean
- isRemovable: boolean
- onRemove: func
- onToggle: func

```
DetailPage handleSubmit
|__ AddToCartForm (form management)
|  |__ QuantityField
```

/products/:productId -> ProductDescription
/products/:productId/additional -> ProductAdditional
/products/:productId/reviews -> ProductReviews

DetailPage
CLick chọn mua
Open mini cart
Go to Cart Page

Cart

- showMiniCart : true/false
- cartItems -> item(product,quantity)

State tính toán phụ thuộc vào state có sẵn

- cartItemsCount
- cartTotal
  => createSelector()
