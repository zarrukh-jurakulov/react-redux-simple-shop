import React, { useEffect } from 'react'
import classes from './styles.module.css'
import {getProducts} from '../../redux/actions/productActions'
import {useDispatch, useSelector} from 'react-redux'

const ProductCard = () => {

    const dispatch = useDispatch()

    useEffect(()=> {
        getProducts()(dispatch)
    },[])

    const products = useSelector((state)=> state.allProducts.products)
    console.log("products", products);
    const renderCard = products.map((i)=> {
        const {category, title, price, image} = i
        return (
            <div className={classes.root}>
                <img src={image} alt="" />
                <div className={classes.cardTitle}>
                    <h3>{category}</h3>
                    <h1>{title}</h1>
                    <p>${price}</p> 
                </div>
            </div> 
        )
    })
    return (
        <>
            {renderCard}
        </>
    )
}

export default ProductCard
