import React from 'react';

const EventCard = ({index,event}) => {
    const {name,eventName}=event;
    console.log(event);
    console.log(index);
    return (
        <div>
            <h2>{name}</h2>
        </div>
    );
};

export default EventCard;