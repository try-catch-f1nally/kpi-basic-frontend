import React from 'react';
import GoodCard from '../GoodsCard/GoodCard';
import classes from './GoodsList.module.css';

const GoodsList = () => {
  const goods = [
    {imgUrl: './img/goods/iphone-12-pro-gold.jpg', title: 'Apple iPhone 12 Pro 512GB (Gold)', price: 1045},
    {imgUrl: './img/goods/iphone-12-pro-pacific-blue.jpg', title: 'Apple iPhone 12 Pro 256GB (Pacific Blue)', price: 1019},
    {imgUrl: './img/goods/iphone-12-white.jpg', title: 'Apple iPhone 12 64GB (White)', price: 649},
    {imgUrl: './img/goods/iphone-13-pro-sierra-blue.jpg', title: 'Apple iPhone 13 Pro 1TB (Sierra Blue)', price: 1449},
    {imgUrl: './img/goods/iphone-13-red.jpg', title: 'Apple iPhone 13 128GB (Red)', price: 789},
    {imgUrl: './img/goods/iphone-13-starlight.jpg', title: 'Apple iPhone 13 256GB (Starlight)', price: 915},
  ];

  return (
    <section className={classes['goods']}>
      {goods.map(({imgUrl, title, price}) => <GoodCard imgUrl={imgUrl} title={title} price={price}/>)}
    </section>
  );
};

export default GoodsList;
