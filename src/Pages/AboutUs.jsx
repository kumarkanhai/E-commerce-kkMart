import React from "react";
import aboutus from "../assets/GalleryImages/Aboutus.jpg";

const AboutUs = () => {
  return (
    <>
      <div className="bg-[#317873] mt-[10vh] h-[18vh] text-4xl font-bold italic px-9 flex items-center text-white">
        <h2>About Us</h2>
      </div>

      <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              class="object-cover object-center rounded"
              alt="hero"
              src={aboutus}
            />
          </div>
          <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium italic text-gray-900">
              Who we are ?
            </h1>
            <p class="mb-8 text-xl leading-relaxed">
              Building trust with Integrity. At KKMart, every decision made is
              based on ethical and moral principles - no success is meaningful
              if it’s not achieved the right way.
            </p>
          </div>
        </div>
      </section>

      <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col-reverse items-center">
          
          <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            TECHNOLOGY AT <span className="italic">KKMART</span>
            </h1>
            <p class="mb-8 text-xl leading-relaxed">
            KKMart technology drives path-breaking, customer-focused innovation that makes high quality products accessible to Indian shoppers, besides making the online shopping experience convenient, intuitive and seamless.
            </p>
          </div>
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              class="object-cover object-center rounded"
              alt="hero"
              src="https://corporate.flipkart.net/assets/images/technology-image.png"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
