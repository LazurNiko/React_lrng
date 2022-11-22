import React from 'react';
import { Header } from './components/Header/';
import { Footer } from './components/Footer/';
import { Message } from './components/Message/';
import { Product } from './components/Product/';
import { Vegetables } from './components/Vegetables';

import './App.css';

export function App() {
  const name = 'Niko';

  if(name.length > 30) {
    return "Name is to long"
  };

  return (
    <div className="App">
      <section className='Whoau'>
        <div>
          <p>
            Who are You? 
          </p>
        </div>
          <label htmlFor='name'>
          <input type="text" id='name' placeholder = "Type here..." />
          </label>
          <button type = "Submit" className='btn'>Submit</button>
      </section>
    
      {name ? (<>
      <Header />
      <h1 className='Welcome'>Welcome, {name}!</h1>
      <span className='Howsudo'><em>How's you doing?</em></span>
        <Message text="What's your favorite today?" /><Product
          title="Peperoni Pizza"
          description="Extra large Peperoni pizza"
          price={150} /><Product
          title="Chocolate Brownie"
          description="Your favorite dessert contains dark chocolate"
          price={100} /><Product
          title="Apple Juice"
          description="Fresh apple juice from our gardens"
          price={50} />
          <Vegetables product={Vegetables}/>
          <Footer date={new Date().getFullYear()} 
          /></>) : (<h1>
            Please log in!
          </h1>
          )
      }
    </div>
    )
  }
