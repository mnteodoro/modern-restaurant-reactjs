import React from 'react';

import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section__padding' id="about">
    <div className='app__aboutus-overlay flex__center'>

    </div>
    <div className='app__aboutus-content flex__center'>
      <div className='app__aboutus-content_about'>
        <h1 className='headtext__cormorant'>
          About Us
        </h1>
        <img src={images.spoon} alt="about spoon" className='spoon__image' />
        <p className='p__opensans'>
          The Little Lemon Restaurant was founded by Mark Emmanuel Teodoro, an entrepreneur who began selling fried chicken from his roadside restaurant in Bulacan, Philippines, during the COVID-19 pandemic.
        </p>
        <button type='button' className='custom__button'>Know More</button>
      </div>

    <div className='app__aboutus-content_knife flex__center'>
      <img src={images.knife} alt='about knife' />
    </div>

    <div className='app__aboutus-content_history'>
        <h1 className='headtext__cormorant'>
          Our History
        </h1>
        <img src={images.spoon} alt="about spoon" className='spoon__image' />
        <p className='p__opensans'>
          The Little Lemon Restaurant is a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
        </p>
        <button type='button' className='custom__button'>Know More</button>
      </div>


    </div>
  </div>
);

export default AboutUs;
