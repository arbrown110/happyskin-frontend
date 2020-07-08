import React from 'react'
import ReviewsContainer from '../containers/ReviewsContainer'

const ProductPage = (props) => {

    console.log(props)

    let product = props.products.filter(product => product.id == props.match.params.id)[0]
    console.log(product)
    return (
        <div>
            <h1>{product ? product.name : null}</h1>
            <h3>{product ? product.brand : null}</h3>
            <h3>{product ? product.price : null}</h3>
            <p>{product ? product.ingredients : null}</p>
            {product ? <img src={product.image} alt="product"/> : null}
            <ReviewsContainer product={product} />
        </div>
    )
}

export default ProductPage