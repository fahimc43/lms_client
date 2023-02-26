import React from "react";
import youngMan from "../../image/young-man.png";
import mainLogo from "../../image/mainLogo.svg";
import mail from "../../image/mail.svg";

function Footer() {
  return (
    <div>
      <div className="footer-top mt-10 px-20">
        <div className="young-man absolute -mt-24 hidden md:block">
          <img src={youngMan} alt="" width={300} />
        </div>

        <div className=" flex flex-col justify-center py-14 items-center gap-5">
          <div>
            <h4 className="footer-title">
              Earn cep points by becoming a trainer while helping others as well
            </h4>
          </div>
          <div>
            <button className="footer-button px-10 py-5">
              Become An Instructor
            </button>
          </div>
        </div>
      </div>
      <div className="footer-feet">
        <div className=" flex flex-col justify-center gap-10">
          <div>
            <img src={mainLogo} alt="" />
          </div>
          <div>
            <p className="footer-para">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form,
            </p>
          </div>
          <div className=" flex flex-col gap-5">
            <div className=" flex flex-row items-center gap-3">
              <img src={mail} alt="" />
              <p className="footer-link">myceppoint@gmail.com</p>
            </div>
            <div className=" flex flex-row items-center gap-3">
              <img src={mail} alt="" />
              <p className="footer-link">myceppoint@gmail.com</p>
            </div>
            <div className=" flex flex-row items-center gap-3">
              <img src={mail} alt="" />
              <p className="footer-link">myceppoint@gmail.com</p>
            </div>
          </div>
        </div>
        <div>
          <h4 className="footer-imp-top">Important Link</h4>
          <h5 className="footer-imp-link">Career</h5>
        </div>
      </div>
    </div>
  );
}

export default Footer;
