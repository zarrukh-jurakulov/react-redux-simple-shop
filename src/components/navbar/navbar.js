import React from 'react'
import classes from './styles.module.css'

const Navbar = () => {
    return (
        <div className={classes.root}>
            <div className={classes.projectName}>
                <h2>Simple Shop</h2>
            </div>
            <div className={classes.search}>
                <input type="search" placeholder="Search..." />
            </div>
            <div className={classes.navTitle}>
                <p>Best Sellers</p>
                <p>Today's Deals</p>
                <p>FAQ</p>
                <p>Helps</p>
                <p>Contact</p>
            </div>
        </div>
    )
}

export default Navbar
