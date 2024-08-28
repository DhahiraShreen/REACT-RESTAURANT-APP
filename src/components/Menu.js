import React from 'react';
import './Menu.css';

function Menu() {
  const dishes = [
    { name: 'Noodles', price: 'Rs.50', image: '/images/noodles.jpg' },
    { name: 'Margherita Pizza', price: 'Rs.100', image: '/images/pizza.jpg' },
    { name: 'Fruit Salad', price: 'Rs.80', image: '/images/salad.jpg' },
  ];

  return (
    <div className="menu-container">
      {dishes.map((dish, index) => (
        <div className="dish-item" key={index}>
          <img src={dish.image} alt={dish.name} />
          <h3>{dish.name}</h3>
          <p>{dish.price}</p>
        </div>
      ))}
    </div>
  );
}

export default Menu;
