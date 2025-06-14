import React from 'react';
import PopularEventCard from './PopularEventCard ';

const PopularEvent = () => {
    return (
       

            <div className="py-10 bg-gray-50">
  <h2 className="text-3xl font-bold text-center roboto text-gray-800 mb-8">
    Popular Events Ongoing
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 md:px-20">
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
  </div>
</div>

       
    );
};

export default PopularEvent;