import React from 'react'
import Layout from '../Componets/Layout/Layout';
import { Link } from 'react-router-dom';
import Background from '../Images/background.jpeg';
import '../Styles/HomeStyles.css';

const Home = () => {
  return (
    <Layout>
   <div className='home' style={{backgroundImage: `url(${Background})`}}>
<div className='headerContainer'>
  <h1>Food Website</h1>
  <p>Best Food in Town</p>
  <Link to="/menu">
    <button>ORDER NOW</button>
  </Link>
  
</div>
</div>
   </Layout>
  );
};

export default Home
