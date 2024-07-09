import React from "react";
import "./Projects.css";
import slider1 from "../../assets/Projects/slider1.png";
import slider2 from "../../assets/Projects/slider2.png";
import slider3 from "../../assets/Projects/slider3.png";
import slider4 from "../../assets/Projects/slider4.png";
import slider5 from "../../assets/Projects/slider5.png";
import slider6 from "../../assets/Projects/slider6.png";
import slider7 from "../../assets/Projects/slider7.png";
import slider8 from "../../assets/Projects/slider8.png";
import slider9 from "../../assets/Projects/slider9.png";
import slider10 from "../../assets/Projects/slider10.png";
import slider11 from "../../assets/Projects/slider11.png";
import slider12 from "../../assets/Projects/slider12.png";
import slider13 from "../../assets/Projects/slider13.png";
import slider14 from "../../assets/Projects/slider14.png";
import slider15 from "../../assets/Projects/slider15.png";
import slider16 from "../../assets/Projects/slider16.png";
import slider17 from "../../assets/Projects/slider17.png";
import slider18 from "../../assets/Projects/slider18.png";
import slider19 from "../../assets/Projects/slider19.png";
import slider20 from "../../assets/Projects/slider20.png";
import slider21 from "../../assets/Projects/slider21.png";
import slider22 from "../../assets/Projects/slider22.png";
import slider23 from "../../assets/Projects/slider23.png";
import slider24 from "../../assets/Projects/slider24.png";
import slider25 from "../../assets/Projects/slider25.png";
import slider26 from "../../assets/Projects/slider26.png";
import slider27 from "../../assets/Projects/slider27.png";
import slider28 from "../../assets/Projects/slider28.png";
import fire from "../../assets/Projects/icon1.png";
import hammer from "../../assets/Projects/icon2.png";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";

const Projects = () => {
  return (
    <div className="swiper-container" name="projects">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          520: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1000: {
            slidesPerView: 4,
          },
        }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <div className="projects">
          <div className="container">
            <SwiperSlide>
              <div className="div-cointainer">
                <div className="card-wrapper swiper-wrapper">
                  <div className="card swiper-slide">
                    <div className="image-box">
                      <img src={slider27} alt="" />
                    </div>
                    <div className="profile-details">
                      <img src="" alt="" />
                      <div className="name-job">
                        <h3 className="name">Calumpit Public Market</h3>
                        <h4 className="job">Structural and Civil Works</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="div-cointainer">
                <div className="card-wrapper swiper-wrapper">
                  <div className="card swiper-slide">
                    <div className="image-box">
                      <img src={slider28} alt="" />
                    </div>
                    <div className="profile-details">
                      <img src="" alt="" />
                      <div className="name-job">
                        <h3 className="name">Calumpit Public Market</h3>
                        <h4 className="job">Structural and Civil Works</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="div-cointainer">
                <div className="card-wrapper swiper-wrapper">
                  <div className="card swiper-slide">
                    <div className="image-box">
                      <img src={slider1} alt="" />
                    </div>
                    <div className="profile-details">
                      <img src="" alt="" />
                      <div className="name-job">
                        <h3 className="name">
                          Amang Rodriguez Memorial Medical Center
                        </h3>
                        <h4 className="job">
                          Structural and Civil Works, Plumbing, Electrical,
                          <br></br>
                          Architectural works. Fire Pro
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="div-cointainer">
                <div className="card-wrapper swiper-wrapper">
                  <div className="card swiper-slide">
                    <div className="image-box">
                      <img src={slider2} alt="" />
                    </div>
                    <div className="profile-details">
                      <img src="" alt="" />
                      <div className="name-job">
                        <h3 className="name">
                          Gentry Manor by Megaworld Amenities
                        </h3>
                        <h4 className="job">Gym room</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="div-cointainer">
                <div className="card-wrapper swiper-wrapper">
                  <div className="card swiper-slide">
                    <div className="image-box">
                      <img src={slider3} alt="" />
                    </div>
                    <div className="profile-details">
                      <img src="" alt="" />
                      <div className="name-job">
                        <h3 className="name">
                          Manila Waterworks & Sewerage System
                        </h3>
                        <h4 className="job">
                          Construction of Multi-level parking
                          <br></br>
                          Architectural works. Fire Pro
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="div-cointainer">
                <div className="card-wrapper swiper-wrapper">
                  <div className="card swiper-slide">
                    <div className="image-box">
                      <img src={slider4} alt="" />
                    </div>
                    <div className="profile-details">
                      <img src="" alt="" />
                      <div className="name-job">
                        <h3 className="name">PLDT-Malolos</h3>
                        <h4 className="job">Genset pad construction</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="div-cointainer">
                <div className="card-wrapper swiper-wrapper">
                  <div className="card swiper-slide">
                    <div className="image-box">
                      <img src={slider5} alt="" />
                    </div>
                    <div className="profile-details">
                      <img src="" alt="" />
                      <div className="name-job">
                        <h3 className="name">
                          Gentry Manor by Megaworld Amenities
                        </h3>
                        <h4 className="job">Day Care Construction</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="div-cointainer">
                <div className="card-wrapper swiper-wrapper">
                  <div className="card swiper-slide">
                    <div className="image-box">
                      <img src={slider6} alt="" />
                    </div>
                    <div className="profile-details">
                      <img src="" alt="" />
                      <div className="name-job">
                        <h3 className="name">PLDT-North Marikina</h3>
                        <h4 className="job">Genset pad construction</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="div-cointainer">
                <div className="card-wrapper swiper-wrapper">
                  <div className="card swiper-slide">
                    <div className="image-box">
                      <img src={slider7} alt="" />
                    </div>
                    <div className="profile-details">
                      <img src="" alt="" />
                      <div className="name-job">
                        <h3 className="name">Urban Deca Cubao</h3>
                        <h4 className="job">Fit Out 34th/35th & 23rd floor</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="div-cointainer">
                <div className="card-wrapper swiper-wrapper">
                  <div className="card swiper-slide">
                    <div className="image-box">
                      <img src={slider8} alt="" />
                    </div>
                    <div className="profile-details">
                      <img src="" alt="" />
                      <div className="name-job">
                        <h3 className="name">Bicol Medical Center</h3>
                        <h4 className="job">
                          Fire Detection & Alarm System,
                          <br></br>
                          Public Adress System, <br />
                          Nurse Call System
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="div-cointainer">
                <div className="card-wrapper swiper-wrapper">
                  <div className="card swiper-slide">
                    <div className="image-box">
                      <img src={slider9} alt="" />
                    </div>
                    <div className="profile-details">
                      <img src="" alt="" />
                      <div className="name-job">
                        <h3 className="name">
                          Gov. Celestino Gallares Memorial Regional Hospital
                        </h3>
                        <h4 className="job">Nurse Call System</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="div-cointainer">
                <div className="card-wrapper swiper-wrapper">
                  <div className="card swiper-slide">
                    <div className="image-box">
                      <img src={slider10} alt="" />
                    </div>
                    <div className="profile-details">
                      <img src="" alt="" />
                      <div className="name-job">
                        <h3 className="name">
                          Batasan Hospital (Rosario Maclang)
                        </h3>
                        <h4 className="job">
                          Nurse Call System,
                          <br></br>
                          Fire Detection & Alarm System
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="div-cointainer">
                <div className="card-wrapper swiper-wrapper">
                  <div className="card swiper-slide">
                    <div className="image-box">
                      <img src={slider11} alt="" />
                    </div>
                    <div className="profile-details">
                      <img src="" alt="" />
                      <div className="name-job">
                        <h3 className="name">Villamor Air Base</h3>
                        <h4 className="job">Renovation of Baracks</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="div-cointainer">
                <div className="card-wrapper swiper-wrapper">
                  <div className="card swiper-slide">
                    <div className="image-box">
                      <img src={slider12} alt="" />
                    </div>
                    <div className="profile-details">
                      <img src="" alt="" />
                      <div className="name-job">
                        <h3 className="name">Clark Asean Villas</h3>
                        <h4 className="job">Construction of two villas</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="div-cointainer">
                <div className="card-wrapper swiper-wrapper">
                  <div className="card swiper-slide">
                    <div className="image-box">
                      <img src={slider26} alt="" />
                    </div>
                    <div className="profile-details">
                      <img src="" alt="" />
                      <div className="name-job">
                        <h3 className="name">Clark Asean Villas</h3>
                        <h4 className="job">Construction of two villas</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="div-cointainer">
                <div className="card-wrapper swiper-wrapper">
                  <div className="card swiper-slide">
                    <div className="image-box">
                      <img src={slider13} alt="" />
                    </div>
                    <div className="profile-details">
                      <img src="" alt="" />
                      <div className="name-job">
                        <h3 className="name">Bicol International Airport</h3>
                        <h4 className="job">
                          Structural & Civil works,
                          <br></br>
                          Suplly of Steel
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="div-cointainer">
                <div className="card-wrapper swiper-wrapper">
                  <div className="card swiper-slide">
                    <div className="image-box">
                      <img src={slider14} alt="" />
                    </div>
                    <div className="profile-details">
                      <img src="" alt="" />
                      <div className="name-job">
                        <h3 className="name">Department of Finance</h3>
                        <h4 className="job">
                          Fire Detection and Alarm System,
                          <br></br>
                          Supply of Interior Paint System
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="div-cointainer">
                <div className="card-wrapper swiper-wrapper">
                  <div className="card swiper-slide">
                    <div className="image-box">
                      <img src={slider15} alt="" />
                    </div>
                    <div className="profile-details">
                      <img src="" alt="" />
                      <div className="name-job">
                        <h3 className="name">
                          Gentry Manor by Megaworld Amenities
                        </h3>
                        <h4 className="job">
                          Game Room
                          <br></br>
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="div-cointainer">
                <div className="card-wrapper swiper-wrapper">
                  <div className="card swiper-slide">
                    <div className="image-box">
                      <img src={slider16} alt="" />
                    </div>
                    <div className="profile-details">
                      <img src="" alt="" />
                      <div className="name-job">
                        <h3 className="name">
                          Gentry Manor by Megaworld Amenities
                        </h3>
                        <h4 className="job">Game Room</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="div-cointainer">
                <div className="card-wrapper swiper-wrapper">
                  <div className="card swiper-slide">
                    <div className="image-box">
                      <img src={slider17} alt="" />
                    </div>
                    <div className="profile-details">
                      <img src="" alt="" />
                      <div className="name-job">
                        <h3 className="name">
                          Gentry Manor by Megaworld Amenities
                        </h3>
                        <h4 className="job">Gym Room</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="div-cointainer">
                <div className="card-wrapper swiper-wrapper">
                  <div className="card swiper-slide">
                    <div className="image-box">
                      <img src={slider18} alt="" />
                    </div>
                    <div className="profile-details">
                      <img src="" alt="" />
                      <div className="name-job">
                        <h3 className="name">
                          Gentry Manor by Megaworld Amenities
                        </h3>
                        <h4 className="job">Business Center</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="div-cointainer">
                <div className="card-wrapper swiper-wrapper">
                  <div className="card swiper-slide">
                    <div className="image-box">
                      <img src={slider19} alt="" />
                    </div>
                    <div className="profile-details">
                      <img src="" alt="" />
                      <div className="name-job">
                        <h3 className="name">
                          Gentry Manor by Megaworld Amenities
                        </h3>
                        <h4 className="job">Business Center</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="div-cointainer">
                <div className="card-wrapper swiper-wrapper">
                  <div className="card swiper-slide">
                    <div className="image-box">
                      <img src={slider20} alt="" />
                    </div>
                    <div className="profile-details">
                      <img src="" alt="" />
                      <div className="name-job">
                        <h3 className="name">
                          Gentry Manor by Megaworld Amenities
                        </h3>
                        <h4 className="job">Business Center</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="div-cointainer">
                <div className="card-wrapper swiper-wrapper">
                  <div className="card swiper-slide">
                    <div className="image-box">
                      <img src={slider21} alt="" />
                    </div>
                    <div className="profile-details">
                      <img src="" alt="" />
                      <div className="name-job">
                        <h3 className="name">
                          Gentry Manor by Megaworld Amenities
                        </h3>
                        <h4 className="job">Day Care</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="div-cointainer">
                <div className="card-wrapper swiper-wrapper">
                  <div className="card swiper-slide">
                    <div className="image-box">
                      <img src={slider22} alt="" />
                    </div>
                    <div className="profile-details">
                      <img src="" alt="" />
                      <div className="name-job">
                        <h3 className="name">
                          Gentry Manor by Megaworld Amenities
                        </h3>
                        <h4 className="job">Day Care</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="div-cointainer">
                <div className="card-wrapper swiper-wrapper">
                  <div className="card swiper-slide">
                    <div className="image-box">
                      <img src={slider23} alt="" />
                    </div>
                    <div className="profile-details">
                      <img src="" alt="" />
                      <div className="name-job">
                        <h3 className="name">
                          Gentry Manor by Megaworld Amenities
                        </h3>
                        <h4 className="job">Installation of Appliances</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="div-cointainer">
                <div className="card-wrapper swiper-wrapper">
                  <div className="card swiper-slide">
                    <div className="image-box">
                      <img src={slider24} alt="" />
                    </div>
                    <div className="profile-details">
                      <img src="" alt="" />
                      <div className="name-job">
                        <h3 className="name">
                          Gentry Manor by Megaworld Amenities
                        </h3>
                        <h4 className="job">Installation of Appliances</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="div-cointainer">
                <div className="card-wrapper swiper-wrapper">
                  <div className="card swiper-slide">
                    <div className="image-box">
                      <img src={slider25} alt="" />
                    </div>
                    <div className="profile-details">
                      <img src="" alt="" />
                      <div className="name-job">
                        <h3 className="name">
                          Gentry Manor by Megaworld Amenities
                        </h3>
                        <h4 className="job">Installation of Appliances</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </div>
        </div>
      </Swiper>
    </div>
  );
};

export default Projects;
