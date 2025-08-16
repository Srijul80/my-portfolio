import React from "react";
import certificate from "../../Images/citc-certificate.jpg";
const CertificateImage = () => {
  return (
    <>
      <div className=" flex items-center justify-center w-full  mt-6 p-2 ">
        <a href={certificate} target="_blank">
          <img
            src={certificate}
            alt="certificate image of frontend development "
            className="h-[200px] w-[200px] sm:h-[500px] sm:w-100 border border-orange-500 rounded-2xl hover:scale-105 transition-all duration-300 ease-in-out shadow hover:shadow-cyanshadow"
          />
        </a>
      </div>
    </>
  );
};

export default CertificateImage;
