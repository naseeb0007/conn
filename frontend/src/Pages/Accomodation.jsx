import React from 'react'
import Doctor3 from "../assets/Bannerdown.jpeg";

const Accomodation = () => {
  return (
    <div>
       {/* Banner Section */}
             <div className="relative w-full">
                    <img src={Doctor3} alt="Doctor" className="w-full h-60 md:h-120 object-cover" />
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
                      <h1 className="text-4xl font-bold">Hindi Language Learning</h1>
                    </div>
                  </div>
    </div>
  )
}

export default Accomodation