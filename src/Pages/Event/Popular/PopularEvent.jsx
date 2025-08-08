import React from 'react';
import PopularEventCard from './PopularEventCard ';

const PopularEvent = () => {
    return (
       

            <div className="  mb-26">
  <h2 className="lg:text-3xl  text-2xl font-bold text-center roboto text-[#1a8012] mb-12">
    Popular Events Ongoing
  </h2>

  <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-4 px-0 md:px-20">
    <PopularEventCard
      eventName="Sprint"
      image="https://i.ibb.co/8LStqt3s/7138866-1.jpg "
      hoverImage="https://i.ibb.co/67bqCHNw/jonathan-chng-Hgo-Kvt-Kpy-HA-unsplash-1.jpg"
    />
    <PopularEventCard
      eventName="Swimming "
      image="https://i.ibb.co/vx7hF0sT/2105-i301-016-F-m004-c9-International-Olympic-Day-isometric-background-1.jpg"
      hoverImage="https://i.ibb.co/Ndg7JqJP/five-swimmers-racing-against-each-other-swiming-pool-1.jpg"
    />
    <PopularEventCard
      eventName="Badminton "
      image="https://i.ibb.co/KTyWpsg/2374948-fotor-20250614215332.png"
      hoverImage="https://i.ibb.co/bMFbc6J4/muktasim-azlan-rj-Wf-NR-AC5g-unsplash-1.jpg"
    />
    <PopularEventCard
      eventName="Badminton "
      image="https://i.ibb.co.com/fG2mdmPz/hands-with-basketball-ball-1.jpg"
      hoverImage="https://i.ibb.co.com/FkMjmTw1/cool-black-man-doing-sports-playing-basketball-sunrise-jumping.jpg"
    />
  </div>
</div>

       
    );
};

export default PopularEvent;