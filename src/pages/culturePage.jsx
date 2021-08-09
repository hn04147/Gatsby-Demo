import * as React from "react"
import { useState, useEffect } from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import styled, { css } from "styled-components"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Footer from "../components/footer"
import MemberCard from "../components/memberCard"

import MainVideo from "../videos/culture_main.mp4"
import InstagramBackground from "../images/instagram_background.jpg"
import MainBackground from "../images/moon_background.jpg"
import Icon1 from "../images/icon_1.jpg"
import Icon2 from "../images/icon_2.jpeg"
import Icon3 from "../images/icon_3.jpg"
import TwitterLogo from "../images/twitter_logo.png"
import Team from "../images/team.png"
import Clock from "../images/clock.png"
import Number1 from "../images/number1.png"
import CoffeeMachine from "../images/coffee_machine.png"
import Timer from "../images/timer.png"

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
  const [screenWidth, setScreenWidth] = useState(2000)
  const [screenHeight, setScreenHeight] = useState(2000)

  useEffect(() => {
    setScreenHeight(window.innerHeight)
    setScreenWidth(window.innerWidth)
  }, [])

  useEffect(() => {
    setScreenHeight(window.innerHeight)
    setScreenWidth(window.innerWidth)
  }, [window.innerHeight, window.innerWidth])

  const slickSettings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    variableWidth: true,
  }

  const slickSettings2 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
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
        <video
          src={MainVideo}
          style={{
            width: screenWidth,
            height: screenHeight,
            objectFit: "cover",
            autoplay: "autoplay",
            background: "rgba(0, 0, 0, 0.8)",
          }}
          muted={true}
          loop={true}
          autoPlay={true}
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
              <MemberCard
                imgSrc={memberData[0].imgSrc}
                textUp={memberData[0].textUp}
                textDown={memberData[0].textDown}
              />
              <MemberCard
                imgSrc={memberData[1].imgSrc}
                textUp={memberData[1].textUp}
                textDown={memberData[1].textDown}
              />
              <MemberCard
                imgSrc={memberData[2].imgSrc}
                textUp={memberData[2].textUp}
                textDown={memberData[2].textDown}
              />
              <MemberCard
                imgSrc={memberData[3].imgSrc}
                textUp={memberData[3].textUp}
                textDown={memberData[3].textDown}
              />
              <MemberCard
                imgSrc={memberData[4].imgSrc}
                textUp={memberData[4].textUp}
                textDown={memberData[4].textDown}
              />
              <MemberCard
                imgSrc={memberData[5].imgSrc}
                textUp={memberData[5].textUp}
                textDown={memberData[5].textDown}
              />
            </Slider>
          </div>
        </div>
      </div>

      <div
        id="instagram"
        style={{
          width: "100%",
          height: "100%",
          background: "#161c24",
          margin: "0",
          padding: "2em 1.4em 2em 1.4em",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            position: "relative",
            margin: "0",
            padding: "0",
          }}
        >
          <img
            src={InstagramBackground}
            style={{
              width: "100%",
              height: "100%",
              margin: "0",
              padding: "0 0 .5em 0",
              borderRadius: "0px",
            }}
          />
        </div>

        <div
          style={{ width: "100%", height: "100%", padding: ".3em 0 .5em 0" }}
        >
          <div style={{ width: "100%", height: "15em", position: "relative" }}>
            <div
              style={{
                height: "14em",
                width: `98%`,
                background: "#252c39",
                left: "0px",
                top: "0px",
                position: "absolute",
                zIndex: "2",
                padding: "2em",
                borderRadius: "10px",
              }}
            >
              <img
                src={TwitterLogo}
                style={{ width: "2em", padding: "0", margin: "0" }}
              />
              <p
                style={{
                  fontFamily: "Roboto Condensed",
                  fontSize: "16px",
                  fontWeight: "300",
                  color: "#FFFFFF",
                  padding: "5px 0 0 0",
                  margin: "0",
                }}
              >
                @FITC
              </p>
              <p
                style={{
                  fontFamily: "Roboto Condensed",
                  fontSize: "14px",
                  fontWeight: "300",
                  color: "#FFFFFF",
                  padding: "5px 0 0 0",
                  margin: "0",
                }}
              >
                Sep 28th
              </p>
              <p
                style={{
                  fontFamily: "Roboto Condensed",
                  fontSize: "14px",
                  fontWeight: "300",
                  color: "#FFFFFF",
                  padding: "5px 0 0 0",
                  margin: "0",
                }}
              >
                From Zero to Hero The Rise and Rise of HTML5 Games with
                @goodboydigital{" "}
                <p style={{ fontWeight: "400" }}>
                  #FITCSpotlight http://fitc.ca/webgames
                </p>
              </p>
            </div>
            <div
              style={{
                height: "14em",
                width: `98%`,
                content: "",
                border: "solid 1px #FFFFFF",
                position: "absolute",
                left: "6px",
                top: "6px",
                zIndex: "1",
                borderRadius: "10px",
              }}
            ></div>
          </div>
        </div>

        <div
          style={{
            width: "100%",
            height: "100%",
            border: "solid 6px #3f51b5",
            background: "#aeb7c6",
            padding: "2em 1.3em 2em 1.3em",
            borderRadius: "10px",
          }}
        >
          <div
            style={{ width: "100%", height: "100%", margin: "0", padding: "0" }}
          >
            <div>
              <p
                style={{
                  fontFamily: "Roboto Condensed",
                  fontSize: "16px",
                  padding: "0",
                  margin: "0",
                  color: "#000000",
                  fontWeight: "700",
                }}
              >
                5 Things
              </p>
              <p
                style={{
                  fontFamily: "Roboto Condensed",
                  fontSize: "15px",
                  padding: "0",
                  margin: "0",
                  color: "#000000",
                  fontWeight: "500",
                }}
              >
                You Didn't Know About Us
              </p>
            </div>
            <div
              style={{
                margin: "0",
                padding: "1em 0 0 0",
                height: "100%",
                width: "100%",
              }}
            >
              <OneThing>
                <ThingImg src={Team} />
                <ThingTextUp>20</ThingTextUp>
                <ThingTextDown>Awesome members of Team GB</ThingTextDown>
              </OneThing>
              <OneThing>
                <ThingImg src={Clock} />
                <ThingTextUp>66</ThingTextUp>
                <ThingTextDown>Minutes in a Goodboy hour</ThingTextDown>
              </OneThing>
              <OneThing>
                <ThingImg src={Number1} />
                <ThingTextUp>#1</ThingTextUp>
                <ThingTextDown>
                  Popularity of 'The Wiggler' in Mario Kart
                </ThingTextDown>
              </OneThing>
              <OneThing>
                <ThingImg src={CoffeeMachine} />
                <ThingTextUp>15</ThingTextUp>
                <ThingTextDown>
                  Bar pressure of coffee machine pump
                </ThingTextDown>
              </OneThing>
              <OneThing>
                <ThingImg src={Timer} />
                <ThingTextUp>27</ThingTextUp>
                <ThingTextDown>Time in hours to charge an iPad2</ThingTextDown>
              </OneThing>
            </div>
          </div>
        </div>

        <div
          style={{
            width: "100%",
            height: "14em",
            background: "#252c39",
            marginTop: "1em",
            borderRadius: "10px",
          }}
        >
          <Slider {...slickSettings2}>
            <TalkBox>
              <TalkTop>_FOOSBALL TRASH TALK</TalkTop>
              <TalkMiddle>
                I'm just looking around to see who's gonna finish second.
              </TalkMiddle>
              <TalkLast>Larry Bird</TalkLast>
            </TalkBox>
            <TalkBox>
              <TalkTop>_WE BELIEVE</TalkTop>
              <TalkMiddle>Do. Or do not. There is no try.</TalkMiddle>
              <TalkLast>Yoda, Jedi / Space Elf</TalkLast>
            </TalkBox>
            <TalkBox>
              <TalkTop>_FOOSBALL TRASH TALK</TalkTop>
              <TalkMiddle>
                Show me a good loser, and I'll show you a loser.
              </TalkMiddle>
              <TalkLast>Vince Lombardi</TalkLast>
            </TalkBox>
            <TalkBox>
              <TalkTop>_TRUE DAT</TalkTop>
              <TalkMiddle>
                The problem with the world is that the intelligent people are
                full odf doubts, while the stupid ones are full of confidence.
              </TalkMiddle>
              <TalkLast>Charles Bukowski, Writer</TalkLast>
            </TalkBox>
          </Slider>
        </div>
      </div>

      <Footer />
    </Layout>
  )
}

export default CulturePage

const TalkBox = styled.div`
  width: 85%;
  height: 100%;
  max-height: 8em;
  padding: 2em;
`
const TalkTop = styled.p`
  font-family: Roboto Condensed;
  color: #FFFFFF;
  text-align: left;
  font-size: 16px;
  padding: 0;
  margin: 0;
`
const TalkMiddle = styled.p`
  font-family: Roboto Condensed;
  color: #ffffff;
  text-align: left;
  font-size: 15px;
  padding: 5px 0 5px 0;
  margin: 0;
`
const TalkLast = styled.p`
  font-family: Roboto Condensed;
  color: #ffffff;
  text-align: left;
  font-size: 16px;
  padding: 0;
  margin: 0;
`
const OneThing = styled.div`
  height: 100%;
  width: 100%;
  padding: 1em 0 1em 0;
  margin: 0;
  position: relative;
`
const ThingImg = styled.img`
  height: 40px;
  width: 40px;
  padding: 0 0 0 0;
  margin: 0;
  display: block;
`
const ThingTextUp = styled.p`
  font-size: 35px;
  font-family: Roboto Condensed;
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 20px;
  left: 60px;
`
const ThingTextDown = styled.p`
  font-size: 13px;
  font-family: Roboto Condensed;
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 45px;
  left: 60px;
`