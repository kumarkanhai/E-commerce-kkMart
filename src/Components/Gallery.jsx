import React from "react"
import watch from "../assets/GalleryImages/watch.jpg"
import jewel from "../assets/GalleryImages/jewellery.jpg"
import shoe from "../assets/GalleryImages/shoes.jpg"
import perfume from "../assets/GalleryImages/perfume.jpg"
import phones from "../assets/GalleryImages/Gadjet.jpg"
import elec from "../assets/GalleryImages/elec.jpg"


const Gallery = () => {
  return (
    <div>

<div className="text-4xl font-semibold mt-10 text-red-900 py-3 rounded-full text-center underline">
          <h2>Gallery</h2>
        </div>

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-8 mx-auto flex">
          <div className="flex flex-wrap flex-col md:flex-row  -m-1">
            <div className="flex flex-wrap  w-full md:w-1/2">
              <div className=" p-1 w-1/2">
                <img
                  alt="gallery"
                  className="w-full object-cover h-full object-center block hover:-translate-z-3 hover:scale-90 duration-300 rounded-xl "
                  src={jewel}
                />
              </div>
              <div className=" p-1 w-1/2">
                <img
                  alt="gallery"
                  className="w-full object-cover h-full object-center block hover:-translate-z-3 hover:scale-90 duration-300 rounded-xl"
                  src={watch}
                />
              </div>
              <div className=" p-1 w-full">
                <img
                  alt="gallery"
                  className="w-full h-full object-cover object-center block hover:-translate-z-3 hover:scale-90 duration-300 rounded-xl "
                  src={phones}
                />
              </div>
            </div>
            <div className="flex flex-wrap w-full md:w-1/2">
              <div className="p-1 w-full">
                <img
                  alt="gallery"
                  className="w-full h-full object-cover object-center block hover:-translate-z-3 hover:scale-90 duration-300 rounded-xl" 
                  src={elec}
                />
              </div>
              <div className="p-1 w-1/2">
                <img
                  alt="gallery"
                  className="w-full object-cover h-full object-center block hover:-translate-z-3 hover:scale-90 duration-300 rounded-xl"
                  src={perfume}
                />
              </div>
              <div className="p-1 w-1/2">
                <img
                  alt="gallery"
                  className="w-full object-cover h-full object-center block hover:-translate-z-3 hover:scale-90 duration-300 rounded-xl"
                  src={shoe}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
