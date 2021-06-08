import React from 'react'
import classes from './styles.module.css'
import ProductCard from '../productCard'

const ProductList = () => {
    return (
        <div className={classes.root}>
            <ProductCard />
        </div>
    )
}

export default ProductList
