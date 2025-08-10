import React from "react";
import { FaQuoteRight } from "react-icons/fa";

const reviews = [

  {
    name: "Rafiul Karim",
    role: "Event Organizer – Swimming Coach",
    text: "Hosting my annual swimming competition through AthleticHub was a game-changer. The posting process was smooth, and the platform instantly connected me with competitive swimmers.",
    img: "https://i.ibb.co.com/hJFcpf1c/muscular-young-sport-person-with-his-arm-crossed-standing-race-track-1.jpg"
  },
  {
    name: "Shahriar Alam",
    role: "Participant – Amateur Sprinter",
    text: "I joined a local 200m sprint event I found on AthleticHub, and it was the easiest sign-up I’ve ever experienced. Just one click and I was in! The reminders kept me on track until event day.",
    img: "" // no image
  },
  {
    name: "Sabbir Hossain",
    role: "Event Organizer – University Sports Club",
    text: "AthleticHub saved me weeks of manual work while organizing our inter-university athletics championship. The filtering tools helped athletes find us easily",
    img: "https://i.ibb.co.com/FqkDktwY/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-ta.jpg"
  },
  {
    name: "Tanvir Mahmud",
    role: "Participant – Long Jump Enthusiast",
    text: "I stumbled upon AthleticHub while looking for nearby athletic events. Signed up for a long jump competition in seconds, and got updates right up to event day.",
    img: "" // no image
  },
  {
    name: "Mehedi Rahman",
    role: "Event Organizer – Community Sports",
    text: "I organized a charity marathon through AthleticHub and it was stress-free from start to finish. The real-time participant counter boosted excitement, and I managed everything from my phone.",
    img: "https://i.ibb.co.com/jvCxVpbZ/pexels-stefanstefancik-91227-1.jpg"
  },
  {
    name: "Asif Chowdhury",
    role: "Participant – Swimming Athlete",
    text: "Applying for events used to be complicated, but with AthleticHub it took less than a minute. I felt secure with the JWT-protected login, and my spot was confirmed instantly.",
    img: "" 
  },
  {
    name: "Ashfaq Ahmed",
    role: "Event Organizer",
    text: "I host small competitions for my trainees, and AthleticHub gave me the perfect platform to reach more athletes. Posting events, setting deadlines, and tracking applicants is easier than ever.",
    img: "https://i.ibb.co.com/jvCxVpbZ/pexels-stefanstefancik-91227-1.jpg"
  },
  {
    name: "Rafiqul Islam",
    role: "Participant – College Athlete",
    text: "What I love most is the ability to filter events by type and location. My 'Applied Events' dashboard keeps everything organized so I never miss a sports opportunity.",
    img: "" 
  }


];

const ReviewCard = ({ review }) => {
 
  const initials = review.name
    .split(" ")
    .map(word => word[0])
    .join("")
    .toUpperCase();

  return (
    <div className="bg-white shadow-md border border-gray-300 rounded-lg p-4 flex flex-col justify-between relative">
      <p className="text-gray-700 mb-4 font-medium border-b pb-4 border-gray-300">{review.text}</p>

      <div className="flex items-center gap-3 mt-auto">
        {review.img ? (
          <img
            src={review.img}
            alt={review.name}
            className="w-10 h-10 rounded-full object-cover"
          />
        ) : (
          <div className="w-10 h-10 rounded-full bg-green-600 flex items-center justify-center text-white font-bold">
            {initials}
          </div>
        )}

        <div>
          <p className="font-semibold roboto">{review.name}</p>
         
        </div>
      </div>
       <p className="text-sm font-semibold mt-1 text-gray-500">{review.role}</p>

      <FaQuoteRight className="absolute bottom-8 right-4 text-yellow-400 text-2xl" />
    </div>
  );
};

const Review = () => {
  return (
    <section className="w-11/12 mx-auto px-4 py-12 lg:flex justify-between gap-6">

      
      {/* Left Column */}
      <div className="flex mb-0 md:mb-6 lg:w-1/4 lg:flex-col gap-6">
       
          <ReviewCard  review={reviews[0]} />
        
        <ReviewCard review={reviews[3]} />
      </div>

      {/* Middle Column */}
      <div className="flex lg:w-2/4 mt-6 lg:mt-0 flex-col gap-6">
        <ReviewCard review={reviews[1]} />
        <div className="grid   grid-cols-1 sm:grid-cols-2 gap-6">
          <ReviewCard review={reviews[5]} />
          <ReviewCard review={reviews[4]} />
        </div>
      </div>

      {/* Right Column */}
      <div className="flex lg:w-1/4 mt-6 lg:mt-0 flex-col gap-6">
        <ReviewCard review={reviews[2]} />
        <div className="lg:mt-6 mt-0">
          <ReviewCard review={reviews[7]} />
        </div>
        
      </div>
    </section>
  );
};

export default Review;
