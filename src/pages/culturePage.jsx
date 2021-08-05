import * as React from "react"
import { useState } from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Footer from "../components/footer"
import MemberCard from "../components/memberCard"

import MainBackground from "../images/moon_background.jpg"
import Icon1 from "../images/icon_1.jpg"
import Icon2 from "../images/icon_2.jpeg"
import Icon3 from "../images/icon_3.jpg"

const memberData = [
  {
    imgSrc: Icon1,
    textUp: "_DEVELOPER",
    textDown: "Sangjin Lee"
  },
  {
    imgSrc: Icon2,
    textUp: "_TECHNICAL PARTNER",
    textDown: "Mat Groves"
  },
  {
    imgSrc: Icon3,
    textUp: "_CREATIVE PARTNER",
    textDown: "John Denton"
  },
  {
    imgSrc: Icon1,
    textUp: "_MANAGING DIRECTOR",
    textDown: "James Walker"
  },
  {
    imgSrc: Icon2,
    textUp: "_DEVELOPER",
    textDown: "Gabriele Santolini"
  },
  {
    imgSrc: Icon3,
    textUp: "_CREATIVE DIRECTOR",
    textDown: "Tom Jennings"
  },
]

const CulturePage = () => {
  const slickSettings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    variableWidth: true,
  }

  return (
    <Layout>
      <Seo title="Culture" />
      <div
        id="header"
        style={{
          width: "100%",
          height: "600px",
          overflow: "hidden",
          margin: "0",
          position: "relative",
        }}
      >
        <img
          src={MainBackground}
          style={{
            width: "100%",
            height: "100%",
          }}
          alt="Header Background"
        />
        <div
          style={{
            position: "absolute",
            top: "40%",
            width: "80%",
            left: "10%",
            color: "#FFFFFF",
            fontFamily: "Roboto Condensed",
            textAlign: "center",
          }}
        >
          <h2>PLAY HARD, WORK HARD</h2>
          <div
            style={{
              display: "block",
              width: "100px",
              height: "4px",
              background: "#ECEDF1",
              margin: "12px auto 12px",
            }}
          ></div>
          <p style={{ fontSize: "15px", paddingTop: "5px" }}>
            Play is the beating heart of Goodboy. Whether for business or
            pleasure - we bring it!
          </p>
        </div>
      </div>

      <div
        id="members"
        style={{
          background: "#252c39",
          width: "100%",
          height: "100%",
          maringBottom: "2em",
          paddingBottom: "4em",
        }}
      >
        <div
          id="members_text"
          style={{
            textAlign: "center",
            paddingTop: "50px",
          }}
        >
          <h3
            style={{
              color: "#ECEDF1",
              fontFamily: "Roboto Condensed",
            }}
          >
            MEET THE GOODBOY GANG
          </h3>
          <div
            style={{
              display: "block",
              width: "100px",
              height: "4px",
              background: "#ECEDF1",
              margin: "12px auto 12px",
            }}
          ></div>
          <h4
            style={{
              color: "#ECEDF1",
              paddingTop: "10px",
              fontFamily: "Roboto Condensed",
            }}
          >
            Teamwork makes the dream work
          </h4>
          <div style={{ margin: "0", padding: "0" }}>
            <Slider {...slickSettings}>
              {/* {memberData.map((i, idx) => {
                <MemberCard imgSrc={i.imgSrc} textUp={i.textUp} textDown={i.textDown} />
              })} */}
              <MemberCard imgSrc={memberData[0].imgSrc} textUp={memberData[0].textUp} textDown={memberData[0].textDown} />
              <MemberCard imgSrc={memberData[1].imgSrc} textUp={memberData[1].textUp} textDown={memberData[1].textDown} />
              <MemberCard imgSrc={memberData[2].imgSrc} textUp={memberData[2].textUp} textDown={memberData[2].textDown} />
              <MemberCard imgSrc={memberData[3].imgSrc} textUp={memberData[3].textUp} textDown={memberData[3].textDown} />
              <MemberCard imgSrc={memberData[4].imgSrc} textUp={memberData[4].textUp} textDown={memberData[4].textDown} />
              <MemberCard imgSrc={memberData[5].imgSrc} textUp={memberData[5].textUp} textDown={memberData[5].textDown} />
            </Slider>
          </div>
        </div>
      </div>

      <Footer />
    </Layout>
  )
}

export default CulturePage
