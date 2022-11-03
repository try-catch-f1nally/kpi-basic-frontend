import React from 'react';
import classes from './GoodCard.module.css';

const GoodCard = ({imgUrl, title, price}) => {
  return (
    <div className={classes['good-card']}>
      <img className={classes['good-card__image']} src={imgUrl} alt=""/>
      <div className={classes['good-card__title']}>{title}</div>
      <div className={classes['good-card__price']}>$ {price}</div>
    </div>
  );
};

export default GoodCard;
