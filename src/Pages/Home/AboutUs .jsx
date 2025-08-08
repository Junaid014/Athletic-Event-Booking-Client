import { FaRunning, FaUsers, FaLock, FaSearch, FaTrophy, FaCalendarAlt } from 'react-icons/fa';
import Footer from '../../Component/Footer';

const AboutUs = () => {
  return (
   <section>
        <section  className="bg-gray-900 mb-20 mt-10 text-gray-200 px-6 py-12 w-11/12 mx-auto rounded-lg">
      <h2 className="text-3xl font-extrabold mb-8  roboto text-[#1a8012] text-center">About AthleticHub</h2>

      <p className="max-w-3xl mx-auto mb-6 text-center text-gray-300">
        AthleticHub is your all-in-one <strong>sports event booking and management platform</strong>, designed to bring athletes, organizers, and sports enthusiasts closer.  
        From competitive swimming and sprinting to badminton and basketball, our platform makes it easy to <em>create, discover, and participate</em> in sporting events with confidence.
      </p>

      <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto">
        <div className="flex flex-col items-center text-center">
          <FaRunning size={48} className="text-green-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Diverse Events</h3>
          <p className="text-gray-400">
            Participate or organize events across a wide variety of sports including swimming, sprints, long jump, volleyball, cycling, and more.
          </p>
        </div>

        <div className="flex flex-col items-center text-center">
          <FaUsers size={48} className="text-green-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Community Driven</h3>
          <p className="text-gray-400">
            Connect with athletes and organizers, join active discussions, and stay updated with upcoming events tailored to your interests.
          </p>
        </div>

        <div className="flex flex-col items-center text-center">
          <FaSearch size={48} className="text-green-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Smart Search & Filters</h3>
          <p className="text-gray-400">
            Quickly find events by type, date, or location with our powerful, easy-to-use live search and filter system.
          </p>
        </div>

        <div className="flex flex-col items-center text-center">
          <FaCalendarAlt size={48} className="text-green-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Manage Your Schedule</h3>
          <p className="text-gray-400">
            Keep track of your upcoming events, applications, and participation history through personalized dashboards.
          </p>
        </div>

        <div className="flex flex-col items-center text-center">
          <FaLock size={48} className="text-green-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Secure & Reliable</h3>
          <p className="text-gray-400">
            Enjoy peace of mind with JWT-secured authentication and encrypted data handling across all user interactions.
          </p>
        </div>

        <div className="flex flex-col items-center text-center">
          <FaTrophy size={48} className="text-green-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Interactive & Engaging</h3>
          <p className="text-gray-400">
            Benefit from real-time participation tracking, animated stats, and an intuitive UI designed to keep users motivated and informed.
          </p>
        </div>
      </div>

      <p className="text-center text-gray-400 mt-10 max-w-3xl mx-auto roboto">
        AthleticHub is committed to promoting sportsmanship and making event management effortless, helping you focus on what matters most — the sport.
      </p>
    </section>
    <Footer/>
   </section>
  );
};

export default AboutUs;
