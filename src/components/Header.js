import React from 'react'
import logo from './amazon.png';
import './header.css'
import SearchIcon from '@material-ui/icons/Search';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import {Link} from 'react-router-dom'

const Header = () => {
    return (
        <header className="header">
            <Link to="/">
            <img className="header__image" src='https://pngimg.com/uploads/amazon/amazon_PNG11.png' alt="amazon"/>
            </Link>
            <div className="header__search">
            <input type="text" className="header__input" />
            <SearchIcon className="header__searchIcon" />
            </div>

            <div className="header__option">
                <span className="header__optionLineOne">Hello</span>
                <span className="header__optionLineTwo">Zakir</span>
            </div>
            <div className="header__option">
                <span className="header__optionLineOne">Return</span>
                <span className="header__optionLineTwo">& Orders</span>
            </div>

            <Link to="/checkout">
            <div className="header__optionBasket">
               <ShoppingBasketIcon />
               <span>0</span>
            </div>
            </Link>
         
           
        </header>
    )
}

export default Header
