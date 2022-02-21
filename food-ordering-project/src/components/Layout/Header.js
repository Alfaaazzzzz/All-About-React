import React from 'react'
import mealsImage from '../../Assets/meals.jpg'
import classes from './Header.module.css'
import HeaderCartButton from './HeaderCartButton'


const Header = (props) => {
  return (
    <React.Fragment>
        <header className={classes.header} >
        <h1>Raidan Restaurant</h1>
        <HeaderCartButton onClick={props.onShowCart}/>
        </header>
        <div className={classes['main-image']}>
            <img src={mealsImage} alt='Table full of Meals' />
        </div>
    </React.Fragment>
  )
}

export default Header