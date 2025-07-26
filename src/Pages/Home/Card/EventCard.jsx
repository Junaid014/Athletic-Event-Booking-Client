import { Link } from 'react-router';
import React, { useEffect, useRef, useState } from 'react';
import Swal from 'sweetalert2';
import { MdDeleteOutline } from 'react-icons/md';
import { FaPenFancy } from 'react-icons/fa';



const EventCard = ({ index, event , onDelete, showDelete = false, hideDetails = true }) => {
    const { name,location, eventName,description,photo,deadline,email,eventType,_id } = event;
    
    const [show, setShow] = useState(false);
    const ref = useRef();


      useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setShow(true), index * 200);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [index]);

  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then(result => {
      if (result.isConfirmed) {
        onDelete(_id);
      }
    })
  }


    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setTimeout(() => setShow(true), index * 200);
                    observer.disconnect();
                }
            },
            { threshold: 0.2 }
        );

        if (ref.current) observer.observe(ref.current);

        return () => {
            if (ref.current) observer.unobserve(ref.current);
        };
    }, [index]);
    return (
        <div
            ref={ref}
            className={`transition-all duration-1000 ease-in-out transform ${show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}>


            <div className="card bg-base-200 h-[460px] w-[370px] shadow-lg shadow-gray-500 transition-transform duration-300 hover:-translate-y-1">
                <figure>
                    <img
                        src={photo} className='h-[250px] object-cover rounded-2xl p-1 w-full'
                        alt="event" />
                </figure>
                <div className="card-body">
                    
                    <h2 className="text-lg font-bold text-base-content">{eventName}</h2>
                    <h2 className=" font-medium text-base-content">{eventType}</h2>
                    

                    <h3 className="text-sm text-base-content font-semibold pb-3">Event Date:<span className=' ml-2 font-medium text-black bg-[#cfe8cf] rounded-lg px-2  roboto  py-0.5'>{deadline}</span> </h3>
                    
                    {
                        hideDetails && (
                            <div className="card-actions">
                                <Link to={`/events/${_id}`} className="mt-5  btn bg-gradient-to-l from-[#439347] to-[#4f7d52] text-white rounded-lg font-medium shadow-md hover:from-[#4f7d52] hover:to-[#71a574] transition-all duration-300 w-full">View Details</Link>
                            </div>
                        )
                    }
                    <div>
                        {
                            showDelete && (
                                <div className=" justify-between flex">
                                    <button onClick={handleDelete} className="btn bg-[#EA4744ED] hover:bg-[#EA4744] px-5"> <p className="text-xl text-white"><MdDeleteOutline /></p></button>


                                    <Link to={`/updateEvent/${_id}`}><button className="btn px-5 bg-orange-200"><p><FaPenFancy /></p></button></Link>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>


        </div>
    );
};

export default EventCard;