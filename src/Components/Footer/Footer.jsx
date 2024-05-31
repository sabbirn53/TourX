import React from "react";
import './footer.css'
import video from '../assets/video2.mp4'
import { GrSend } from "react-icons/gr";
import { MdOutlineModeOfTravel } from "react-icons/md";
import { GrLocation } from "react-icons/gr";
import { FiFacebook } from "react-icons/fi";
import {FaInstagram } from "react-icons/fa";
import {FaTripadvisor } from "react-icons/fa";
import {FiChevronRight } from "react-icons/fi";

const Footer = ()=>{
    return(
        <section className="footer">
            <div className="videoDiv">
            <video src={video} muted autoPlay loop type="video/mp4"></video>
            </div>

            <div className="secContent container">
                <div className="contactDiv flex">
                    <div className="text">
                        <small>
                          KEEP IN TOUCH  
                        </small>
                        <h2>Travel with us</h2>
                    </div>

                    <div className="inputDiv flex">
                        <input type="text" placeholder="Enter your Email"/>
                            <button className="btn flex" type="submit">
                               SEND <GrSend />
                            </button>
                            </div>
                </div>
                <div className="footerCard flex">
                    <div className="footerIntro flex">
                        <div className="logoDiv">
                            <a href="https://facebook.com/sabbirn53" className="logo flex">
                                <MdOutlineModeOfTravel className="icon"/>TourX.
                            </a>
                            </div>
                            <div className="footerParagraph">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error excepturi quis at rem unde quaerat hic recusandae deserunt, tempore aut nulla nihil ratione provident. Vel, quasi ab, ipsum esse magni natus deleniti voluptatibus necessitatibus porro quibusdam asperiores at, iure perferendis consectetur laudantium debitis id? Quae incidunt blanditiis natus possimus impedit?
                            </div>

                            <div className="footerSocials flex">
                                <GrLocation className="icon"/>
                                <FiFacebook className="icon"/>
                                <FaInstagram className="icon"/>
                                <FaTripadvisor className="icon"/>
                            </div>
                    </div>

                    <div className="footerLinks grid">
                        <div className="linkGroup">
                            <span className="groupTitle">
                                Our Sister Company
                            </span>

                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                Insurance
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                Ads Agency
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                Resort
                            </li>
                        </div>

                        <div className="linkGroup">
                            <span className="groupTitle">
                                PATNERS
                            </span>

                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                Bookings
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                RentCar
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                Cinegraphy
                            </li>
                        </div>

                        <div className="linkGroup">
                            <span className="groupTitle">
                                PAYMENTS
                            </span>

                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                VisaCard
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                MasterCard
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                Banking
                            </li>
                        </div>
                    </div>
                    <div className="footerDiv flex">
                        <span>Created By <a href="">Shuvo</a>|2024 All rights reserved</span>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Footer;