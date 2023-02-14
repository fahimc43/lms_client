import React from "react";
import choose from "../../image/choose.png";
import expert from "../../image/expert.png";
import solution from "../../image/solution.png";
import update from "../../image/update.png";

function ChooseUs() {
  return (
    <div className=" bg-[#F8F8F8] mt-20">
      <div className="container mx-auto flex px-5 md:px-20 py-24 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <img
            className="object-cover object-center rounded"
            alt="choose"
            src={choose}
          />
        </div>
        <div className="md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h3 className=" font-montserrat text-3xl mb-3 font-semibold">
            Why Choosse Us
          </h3>

          <div className="md:flex mt-3">
            <div className="w-12 h-12 inline-flex items-center justify-center rounded-full mb-4 flex-shrink-0">
              <img src={expert} alt="expert" className=" w-8 h-10" />
            </div>
            <div className="flex-grow pl-5">
              <h4 className=" font-montserrat font-medium text-lg mb-2">
                Provide Expert Instructor
              </h4>
              <h5 className=" font-montserrat font-medium text-base">
                MyCEPPOINTS is put together by a wide range of industrial
                experts, educationists, and subject matter experts.
              </h5>
            </div>
          </div>
          <div className="md:flex mt-3">
            <div className="w-12 h-12 inline-flex items-center justify-center rounded-full mb-4 flex-shrink-0">
              <img src={solution} alt="expert" className=" w-8 h-10" />
            </div>
            <div className="flex-grow pl-5">
              <h4 className=" font-montserrat font-medium text-lg mb-2">
                Bringing Up Solution
              </h4>
              <h5 className=" font-montserrat font-medium text-base">
                MyCEPPOINTS identifies the current issues in the industry and
                brainstorms it’s solutions with our field experts while
                encouraging you to join us and publicly express your concerns
              </h5>
            </div>
          </div>
          <div className="md:flex mt-3">
            <div className="w-12 h-12 inline-flex items-center justify-center rounded-full mb-4 flex-shrink-0">
              <img src={expert} alt="expert" className=" w-8 h-10" />
            </div>
            <div className="flex-grow pl-5">
              <h4 className=" font-montserrat font-medium text-lg mb-2">
                Trusted knowledge
              </h4>
              <h5 className=" font-montserrat font-medium text-base">
                MyCEPPOINTS strives to promote a safe working environment by
                providing knowledge and expertise from experts.
              </h5>
            </div>
          </div>
          <div className="md:flex mt-3">
            <div className="w-12 h-12 inline-flex items-center justify-center rounded-full mb-4 flex-shrink-0">
              <img src={update} alt="expert" className=" w-8 h-10" />
            </div>
            <div className="flex-grow pl-5">
              <h4 className=" font-montserrat font-medium text-lg mb-2">
                Legal Compliance and Updates
              </h4>
              <h5 className=" font-montserrat font-medium text-base">
                MyCEPPOINTS is geared towards legal compliance while constantly
                up to date with the latest legislation.
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChooseUs;
