import * as React from "react"
import { useState, useEffect, useRef } from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { navigate } from "@reach/router"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Footer from "../components/footer"
import ServiceCard from "../components/serviceCard"
import Clients from "../components/clients"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import Background from "../images/aboutpage_background.jpg"
import KakaoFriends3 from "../images/kakao_friends_3.jpg"
import Icon1 from "../images/icon_1.jpg"
import Icon2 from "../images/icon_2.jpeg"
import Icon3 from "../images/icon_3.jpg"

const AboutPage = () => {
  const slickSettings = {
    dots: true, 
    infinite: true, 
    speed: 500,
    slidesToShow: 1, 
    slidesToScroll: 1
  }

  if (typeof window !== "undefined") {
    const screenHeight = window.innerHeight
    const screenWidth = screenWidth
  }

  return (
    <Layout>
      <div
        style={{
          position: "relative",
        }}
      >
        <div
          id="header"
          style={{
            overflow: "hidden",
            margin: "0 auto",
            position: "relative",
            height: "500px",
            width: "100%",
            top: "0",
            background: "#000000",
          }}
        >
          <div style={{ position: "absolute" }}>
            <img
              src={Background}
              style={{
                width: screenWidth,
                height: "500px",
                objectFit: "cover",
                opacity: "0.75",
              }}
              alt="Main Background"
            />
          </div>
          <div
            style={{
              position: "absolute",
              top: "12em",
              left: "5%",
              width: "90%",
              fontFamily: "Roboto Condensed",
              color: "#FFFFFF",
            }}
          >
            <p
              style={{
                textAlign: "center",
                fontSize: "35px",
                fontWeight: "700",
              }}
            >
              We are
            </p>
            <div
              style={{
                display: "block",
                width: "100px",
                height: "4px",
                background: "#ECEDF1",
                margin: "1.3em auto 1.3em",
              }}
            ></div>
            <p
              style={{
                textAlign: "center",
                fontSize: "17px",
                fontWeight: "400",
              }}
            >
              A team of creatives who blend code, design and interaction to make
              meaningful experiences.
            </p>
          </div>
        </div>

        <div
          id="coreServices"
          style={{
            background: "#353f50",
            width: "100%",
            color: "#FFFFFF",
            fontFamily: "Roboto Condensed",
            display: "flex",
            justifyContent: "center",
            position: "relative",
            paddingBottom: "2.5em",
          }}
        >
          <div>
            <div style={{ marginTop: "3em" }}>
              <h1 style={{ textAlign: "center" }}>Core Services</h1>
              <div
                style={{
                  width: "100px",
                  height: "4px",
                  background: "#ECEDF1",
                  margin: "1em auto 2em",
                }}
              ></div>
            </div>
            <div className="cards">
              <ServiceCard
                color={"#E91E63"}
                text={"games"}
                onClick={() => {
                  navigate("https://www.goodboydigital.com/services/games")
                }}
              />
              <ServiceCard color={"#009688"} text={"apps"} />
              <ServiceCard color={"#673ab7"} text={"brand experiences"} />
              <ServiceCard color={"#9c27b0"} text={"multiuser"} />
              <ServiceCard color={"#2196f3"} text={"XR"} />
              <ServiceCard color={"#fdd835"} text={"kids"} />
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          width: "100%",
          height: "100%",
          margin: "0",
          overflow: "hidden",
          position: "relative",
          background: "#cdd3dc",
          fontFamily: "Roboto Condensed",
        }}
      >
        <div style={{ margin: "2em 1.2em 2em 1.2em" }}>
          <p
            style={{
              fontSize: "25px",
              fontWeight: "600",
              color: "#000000",
              marginBottom: "0.7em",
            }}
          >
            WE DO THIS BY
          </p>
          <div
            style={{
              width: "100px",
              height: "4px",
              background: "#3f51b5",
              margin: "1em 0 1em 0",
            }}
          ></div>
          <p style={{ fontSize: "18px", fontWeight: "400", color: "#000000" }}>
            Analysing your brand and goals to determine the most effective
            avenue of communication to reach your audience.
          </p>
          <p style={{ fontSize: "16px", fontWeight: "400", color: "#2f3133" }}>
            Content that surprises and delights no matter where the audience is
            or how we reach them.
          </p>
          <p style={{ fontSize: "16px", fontWeight: "400", color: "#2f3133" }}>
            It is the essence of our company, an egalitarian approach to
            creation where your brand is king and the experience must support it
            whether on a diminutive mobile device or as an all encompassing
            virtual world.
          </p>
          <p style={{ fontSize: "16px", fontWeight: "400", color: "#2f3133" }}>
            In the digital space where every passing day ushers in new
            techniques and trends, a less is more approach can often be a tough
            discipline to maintain. For us every interaction, every touch, every
            gesture is built with passion and purpose. If it doesn't add, we
            subtract.
          </p>
          <p style={{ fontSize: "16px", fontWeight: "400", color: "#2f3133" }}>
            This focus and singularity is the reason why what we produce is so
            hard to put down.
          </p>
        </div>
      </div>

      <div
        style={{
          width: "100%",
          height: "100%",
          margin: "0",
          overflow: "hidden",
          position: "relative",
          background: "#161c24",
          fontFamily: "Roboto Condensed",
        }}
      >
        <div style={{ margin: "2em 1.2em 0 1.2em" }}>
          <p
            style={{
              fontSize: "25px",
              fontWeight: "600",
              color: "#FFFFFF",
              marginBottom: "0.7em",
            }}
          >
            LIVING IN YOUR BRAND
          </p>
          <div
            style={{
              width: "100px",
              height: "4px",
              background: "#3f51b5",
              margin: "1em 0 1em 0",
            }}
          ></div>
          <p style={{ fontSize: "16px", fontWeight: "200", color: "#FFFFFF" }}>
            Whether a fully fledged game or the opportunity to share stories
            with fellow viewers, our purpose is to create destinations where
            people feel that the time they spend is for their own reward.
          </p>
          <p style={{ fontSize: "16px", fontWeight: "200", color: "#FFFFFF" }}>
            The modern audience is far too smart for one-way marketing noise.
            They shape their own digital landscapes and demand experiences that
            align with their requirements. Our aim is to work with you to
            discover what their needs are and create spaces in which those needs
            can be met.
          </p>
          <img src={KakaoFriends3} style={{ width: "96%", marginLeft: "2%" }} />
        </div>
      </div>

      <Clients />

      <div
        style={{
          width: "100%",
          height: "100%",
          margin: "0",
          overflow: "hidden",
          position: "relative",
          background: "#ecedf1",
          fontFamily: "Roboto Condensed",
        }}
      >
        <div style={{ width: "88%", margin: "2em 6% 3em 6%" }}>
          <p
            style={{
              textAlign: "center",
              fontFamily: "Roboto Condensed",
              fontSize: "15px",
              fontWeight: "400",
              color: "#161c24",
            }}
          >
            _TESTIMONIALS
          </p>
          <Slider {...slickSettings}>
            <div>
              <img
                src={Icon1}
                style={{ height: "24%", width: "24%", margin: "0 38% 1em 38%" }}
              />
              <p style={{ textAlign: "center" }}>
                These guys stretch the boundaries of what's possible on the web.
                True professionals in their craft, creativity and execution.
                They deliver every step of the way! They enable digital customer
                play that just works across all devices, leaving the customer
                with a sense of WOW and wanting more.
              </p>
              <p style={{ textAlign: "center" }}>
                Stuart Nyman - Senior Director, Digital - APMEA, The Marketing
                Store
              </p>
            </div>
            <div>
              <img
                src={Icon2}
                style={{ height: "24%", width: "24%", margin: "0 38% 1em 38%" }}
              />
              <p style={{ textAlign: "center" }}>
                These guys stretch the boundaries of what's possible on the web.
                True professionals in their craft, creativity and execution.
                They deliver every step of the way! They enable digital customer
                play that just works across all devices, leaving the customer
                with a sense of WOW and wanting more.
              </p>
              <p style={{ textAlign: "center" }}>
                Scott Cummings - Director of Products, PBS Kids Digital, USA
              </p>
            </div>
            <div>
              <img
                src={Icon3}
                style={{ height: "24%", width: "24%", margin: "0 38% 1em 38%" }}
              />
              <p style={{ textAlign: "center" }}>
                Goodboy are an innovative team who seem to be able to seamlessly
                combine creativity and technology, always making sure the end
                product is ground breaking.
              </p>
              <p style={{ textAlign: "center" }}>
                Alistair Lee - Programme Director, Razorfish
              </p>
            </div>
          </Slider>
        </div>
      </div>
      <Footer />
    </Layout>
  )
}

export default AboutPage