const PopularEventCard = ({ eventName, image, hoverImage }) => {
  return (
   <div className="w-full group max-w-xs mx-auto group cursor-pointer">

      <div className="relative  w-full h-56 overflow-hidden rounded-xl shadow-md p-2">
        <div className="relative w-full h-full rounded-lg overflow-hidden">
          {/* img 1 */}
          <img
            src={hoverImage}
            alt={`${eventName} hover`}
            className="absolute inset-0 w-full h-full object-cover rounded-lg z-0"
          />
          {/* img 2 */}
          <img
            src={image}
            alt={eventName}
            className="w-full   rounded-lg z-10 relative transition-all duration-500 ease-in-out group-hover:translate-y-full"
          />
        </div>
      </div>
      <h3 className="mt-4 text-lg text-gray-800 font-semibold text-center roboto transition-all duration-300 group-hover:translate-y-1 hover:text-green-700">{eventName}</h3>
    </div>
  );
};
export default PopularEventCard;