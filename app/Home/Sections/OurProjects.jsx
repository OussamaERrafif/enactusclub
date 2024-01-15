import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Card from '../components/Card';

const cardProps = [
  {
    title: 'Clean Water Project',
    description:
      'This project aims to provide clean water to underprivileged communities in developing countries. With your help, we can make a difference in the lives of thousands of people.',
    donationAmount: 1000,
    donationGoal: 5000,
    tags: ['Water', 'Community', 'Development'],
    imageUrl: 'https://source.unsplash.com/random',
  },
  {
    title: 'Education for All',
    description:
      'This project aims to provide education to children from low-income families who cannot afford to attend school. With your help, we can give these children a chance to build a better future.',
    donationAmount: 500,
    donationGoal: 2000,
    tags: ['Education', 'Children', 'Community'],
    imageUrl: 'https://source.unsplash.com/random',
  },
  {
    title: 'Sustainable Agriculture',
    description:
      'This project aims to promote sustainable agriculture practices in rural communities. With your help, we can empower farmers to grow healthy crops while protecting the environment.',
    donationAmount: 2000,
    donationGoal: 10000,
    tags: ['Agriculture', 'Sustainability', 'Community'],
    imageUrl: 'https://source.unsplash.com/random',
  },
  {
    title: 'Healthcare for All',
    description:
      'This project aims to provide healthcare to underprivileged communities who cannot afford medical treatment. With your help, we can improve the health and well-being of thousands of people.',
    donationAmount: 100,
    donationGoal: 500,
    tags: ['Healthcare', 'Community', 'Development'],
    imageUrl: 'https://source.unsplash.com/random',
  },
];

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 2,
  centerMode: true,
  variableWidth: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        centerMode: true,
        variableWidth: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
        centerMode: true,
        variableWidth: true,
      },
    },
  ],
};

const OurProjects = () => {
  return (
    <div className="p-4">
      <div className="flex flex-col items-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4 relative">
          Our Projects
          <div className="h-1 w-20 bg-yellow-500 absolute bottom-0"></div>
        </h1>
        <Slider {...sliderSettings}>
          {cardProps.map((card, index) => (
            <div key={index} className="m-4">
              <Card {...card} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default OurProjects;
