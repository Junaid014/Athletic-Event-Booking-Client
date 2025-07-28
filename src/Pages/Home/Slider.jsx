import { Link } from "react-router";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { TypeAnimation } from "react-type-animation";

const Slider = () => {
    const slides = [
        {
            image: "https://i.ibb.co/yn2zVWkk/rosario-fernandes-h-FEO9-Jnu-b8-unsplash-2.jpg",
            eventName: "Junior Track Stars",
            date: "July 2, 2025",
            description: "A fun and exciting sprint event just for kids aged 10–14! Run, cheer, and celebrate young athletic spirit.",
            cta: "Join Now"
        },
        {
            image: "https://i.ibb.co/MkTf2szd/arisa-chattasa-9-HLURpk-Np-XI-unsplash-1.jpg",
            eventName: "National Swimming Championship 2025",
            date: "July 6, 2025",
            description: "Join top athletes in a thrilling water showdown. Dive into competition and glory.",
            cta: "Register Now"
        },
        {
            image: "https://i.ibb.co/bMFbc6J4/muktasim-azlan-rj-Wf-NR-AC5g-unsplash-1.jpg",
            eventName: "Badminton Open Tournament",
            date: "July 10, 2025",
            description: "Smash your way to the top in this exciting open championship.",
            cta: "Register Now"
        }
    ];

    return (
        <div className="w-full">
            <Slide duration={5000} transitionDuration={700} infinite indicators arrows>
                {slides.map((slide, index) => (
                    <div key={index} className="each-slide-effect">
                        <div
                            className="w-full h-[650px] bg-no-repeat bg-cover bg-center relative flex items-center px-6 md:px-20"
                            style={{
                                backgroundImage: `
                  linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.3)),
                  url(${slide.image})
                `
                            }}
                        >
                            <div className="relative text-white max-w-xl z-10">
                                <h2 className="text-3xl roboto lg:text-5xl font-bold mb-4">
                                    <TypeAnimation
                                        sequence={[
                                            slide.eventName,
                                            2000,
                                            '',
                                            500
                                        ]}
                                        speed={50}
                                        repeat={Infinity}
                                        cursor={true}
                                    />
                                </h2>
                                <p className="text-lg font-medium mb-2">📅 {slide.date}</p>
                                <p className="text-md  mb-4">{slide.description}</p>
                                <Link to='browseEvents' className="btn bg-gradient-to-r px-5 from-green-600 to-green-800 text-white rounded-lg shadow-md hover:from-green-700 hover:to-green-900 transition duration-300">
                                    {slide.cta}
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </Slide>
        </div>
    );
};

export default Slider;
