import React from 'react';
import Feature from '../../components/feature/Feature';
import './aboutFinvesta.css';

const AboutFinvesta = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text" id='head'>About Us</h1>
      <p>Finvesta adds value to your Data by Improving quality,enabling initlligent views for critical decision making</p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="Monitor" text="Monitor and Visualize investment trend, performace of past investments" />
      <Feature title="Build" text=" Get one unified view of your data, Use Pre-built strategies to optimize your investment positions" />
      <Feature title="Tracking" text="Develop new strategies tailored to your Objectives" />
    </div>
  </div>
);

export default AboutFinvesta;