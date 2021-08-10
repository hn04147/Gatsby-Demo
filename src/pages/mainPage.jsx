import * as React from "react"
import { useState, useEffect } from "react"
import { navigate } from "@reach/router"
import Layout from "../components/layout"
import Seo from "../components/seo"
import PictureCard from "../components/pictureCard"
import ServiceCard from "../components/serviceCard"
import Clients from "../components/clients"

import GoodBoyLogo from "../images/gb_logo.png"
import MobileGrid from "../images/about-mobile-grid.png"
//import KoreanPalace from "../images/korean_palace.jpg"
import KakaoFriends from "../images/kakao_friends.jpeg"
import KakaoFriends2 from "../images/kakao_friends_2.jpeg"
import KakaoFriends3 from "../images/kakao_friends_3.jpg"
import ContactMap from "../images/contact_map.jpeg"
import GoodBoyLogo2 from "../images/goodboy2x.png"

import MainVideo from "../videos/main_video.mp4"
//import ChunsikDance from "../videos/chunsik_dance.mp4"


const MainPage = () => {
  const [arrowOpacity, setArrowOpacity] = useState(1)

  const [screenWidth, setScreenWidth] = useState(2000)
  const [screenHeight, setScreenHeight] = useState(2000)
  const [yScroll, setYScroll] = useState(0)

  const handleYLocation = () => {
    setYScroll(window.scrollY)
  }

  const handleResize = () => {
    setScreenWidth(window.innerWidth)
    setScreenHeight(window.innerHeight)
  }

  useEffect(() => {
    handleResize()
  }, [])

  useEffect(() => {
    window.addEventListener("resize", handleResize)
    window.addEventListener("scroll", handleYLocation)
  }, [])

  useEffect(() => {
    const onScroll = () => setArrowOpacity(1 - window.scrollY / (screenHeight * 0.8))
    window.addEventListener("scroll", onScroll)
    // console.log(isContact)
    // if (isContact) window.scrollTo({top: 10000, left: 0})
    return function cleanup() {
      window.removeEventListener("scroll", onScroll)
    }
  }, [])

  return (
    <Layout>
      <Seo title="Main" />
      <div
        style={{
          zIndex: "9",
          right: "18px",
          top: "18px",
          width: screenWidth < 720 ? "35px" : "120px",
          height: "21px",
          position: "fixed",
        }}
        onClick={() => {
          window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
        }}
      >
        <img
          src={screenWidth < 720 ? GoodBoyLogo : GoodBoyLogo2}
          alt="GoodBoy Digital Logo"
        />
      </div>

      <div
        id="header"
        style={{
          overflow: "hidden",
          margin: "0 auto",
          position: "relative",
          height: "100vh",
          width: "100%",
          top: `${(150 * yScroll) / screenHeight}px`,
        }}
      >
        <div style={{ position: "absolute" }}>
          {/* <img
            src={KoreanPalace}
            style={{
              width: screenWidth,
              height: screenHeight,
              objectFit: "cover",
            }}
            alt="Main Background"
          /> */}
          <video
            src={MainVideo}
            style={{
              width: screenWidth,
              height: screenHeight,
              objectFit: "cover",
              autoplay: "autoplay",
            }}
            muted={true}
            loop={true}
            autoPlay={true}
          />
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div
            style={{
              position: "absolute",
              width: "27px",
              top: "86%",
              zIndex: "1",
              cursor: "pointer",
            }}
            onClick={() => {
              window.scrollTo({
                top: screenHeight,
                left: 0,
                behavior: "smooth",
              })
            }}
          >
            <svg
              className="scroll"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              viewBox="0 0 26 74"
              style={{ opacity: arrowOpacity }}
            >
              <polygon
                id="line-1"
                points="13 0 13 74"
                style={{ stroke: "#FFFFFF", strokeWidth: "2px" }}
              ></polygon>
              <polygon
                id="line-2"
                points="13 74 1 60"
                style={{ stroke: "#FFFFFF", strokeWidth: "2px" }}
              ></polygon>
              <polygon
                id="line-3"
                points="13 74 25 60"
                style={{ stroke: "#FFFFFF", strokeWidth: "2px" }}
              ></polygon>
            </svg>
          </div>
        </div>
      </div>

      <div
        id="about"
        style={{
          overflow: "hidden",
          margin: "0 auto",
          position: "relative",
          height: "100vh",
          width: "100%",
          zIndex: "2",
        }}
      >
        <img
          src={MobileGrid}
          style={{
            width: screenWidth,
            height: screenHeight,
            objectFit: "cover",
          }}
          alt="mobile_grid"
        />
        <div
          style={{
            position: "absolute",
            top: "12%",
            left: "5%",
            width: "87%",
            height: "100%",
            color: "#FFFFFF",
            fontFamily: "Roboto Condensed",
          }}
        >
          <h3>AMAZING FOR EVERYONE</h3>
          <div
            style={{
              width: "100px",
              height: "4px",
              background: "#4051b5",
              margin: "12px 0 12px",
            }}
          ></div>
          <div style={{ paddingTop: "12px" }}>
            <p>
              We are a digital play production partner for global clients. We
              produce premium quality interactive experiences that reach
              audiences on all platforms. Meaningful connections between brands
              and engaged consumers, wherever they are, however they connect.
            </p>
            <div style={{ marginTop: `4em` }}>
              <a
                href="/culturePage"
                style={{ textDecoration: "none", color: "#FFFFFF" }}
              >
                <span>FIND OUT MORE</span>
                <svg
                  className="arrow"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  viewBox="0 0 23 14"
                  style={{ height: `0.7em`, paddingLeft: `1em` }}
                >
                  <line
                    x1="22"
                    y1="7"
                    x2="16"
                    y2="1"
                    style={{ stroke: "#FFFFFF", strokeWidth: "2px" }}
                  ></line>
                  <line
                    x1="22"
                    y1="7"
                    x2="16"
                    y2="13"
                    style={{ stroke: "#FFFFFF", strokeWidth: "2px" }}
                  ></line>
                  <line
                    x1="0"
                    y1="7"
                    x2="23"
                    y2="7"
                    style={{ stroke: "#FFFFFF", strokeWidth: "2px" }}
                  ></line>
                </svg>
              </a>
            </div>
            <Clients content={false} />
          </div>
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

      <div
        id="coreServices"
        style={{
          background: "#242c39",
          width: "100%",
          color: "#FFFFFF",
          fontFamily: "Roboto Condensed",
          display: "block",
          justifyContent: "center",
          position: "relative",
          paddingTop: "4em",
          paddingBottom: "2.5em",
        }}
      >
        <PictureCard
          isBig={true}
          imgSource={KakaoFriends3}
          textUp={"CARTOON NETWORK"}
          textDown={"GAMEBOX APP"}
        />
        <PictureCard
          isBig={true}
          imgSource={KakaoFriends}
          textUp={"BBC"}
          textDown={"NIGHTFALL"}
        />
        <PictureCard
          isBig={true}
          imgSource={KakaoFriends2}
          textUp={"NICKELODEON"}
          textDown={"THE ADVENTURES OF PADDINGTON"}
        />
        <div
          style={{
            display: "block",
            width: "100%",
            position: "relative",
            height: "5em",
          }}
        >
          <div
            style={{
              background: "#242c39",
              border: "2px solid #FFFFFF",
              width: "60%",
              height: "3em",
              position: "absolute",
              zIndex: "2",
              padding: "2em 0 0 0",
              margin: "1.7em 0 0 0",
              left: "20%",
            }}
          >
            <div
              style={{
                position: "absolute",
                display: "inline-block",
                textAlign: "center",
                width: "100%",
                fontFamily: "Roboto Condensed",
                fontWeight: "700",
                paddingTop: "0",
                top: "0.8em",
              }}
            >
              MORE CASE STUDIES
            </div>
          </div>
          <div
            style={{
              content: "",
              border: "2px solid #FFFFFF",
              width: "60%",
              height: "3em",
              position: "absolute",
              zIndex: "0",
              padding: "2em 0 0 0",
              margin: "1.7em 0 0 0",
              left: "21%",
              top: "5px",
            }}
          ></div>
        </div>
      </div>

      <div
        style={{
          margin: "0 auto",
          position: "relative",
          height: "100vh",
          width: "100%",
          overflow: "hidden",
        }}
      >
        <div>
          <img
            src={ContactMap}
            style={{
              width: screenWidth,
              height: screenHeight,
              objectFit: "cover",
            }}
            alt="Contact Background"
          />
        </div>
        <div
          style={{
            position: "absolute",
            top: "27%",
            left: "10%",
            width: "80%",
            height: "100%",
            color: "#FFFFFF",
            fontFamily: "Roboto Condensed",
          }}
        >
          <h1 style={{ display: "flex", justifyContent: "center" }}>
            Contact Us
          </h1>
          <div
            style={{
              width: "100px",
              height: "4px",
              background: "#ECEDF1",
              margin: "1em auto 2em",
            }}
          ></div>
          <div style={{ width: "80%", margin: "0 auto 0 auto" }}>
            <p
              style={{
                fontSize: "15px",
                fontWeight: "500",
                color: "#FFFFFF",
                margin: ".5em auto .8em auto",
                textAlign: "center",
              }}
            >
              hello@goodboydigital.com
            </p>
            <p
              style={{
                fontSize: "15px",
                fontWeight: "500",
                color: "#FFFFFF",
                margin: ".5em auto .8em auto",
                textAlign: "center",
              }}
            >
              +44 20 8533 1177
            </p>
            <p
              style={{
                fontSize: "17px",
                fontWeight: "300",
                color: "#AEB4BB",
                margin: "0 auto .8em auto",
                textAlign: "center",
              }}
            >
              _OUR TECH
            </p>
            <p
              style={{
                fontSize: "15px",
                fontWeight: "500",
                color: "#FFFFFF",
                margin: ".2em auto .8em auto",
                textAlign: "center",
              }}
            >
              PixiJS.com
            </p>
            <p
              style={{
                fontSize: "17px",
                fontWeight: "300",
                color: "#AEB4BB",
                margin: "0 auto .8em auto",
                textAlign: "center",
              }}
            >
              _FIND US
            </p>
            <p
              style={{
                fontSize: "15px",
                fontWeight: "500",
                color: "#FFFFFF",
                margin: ".2em auto 2em auto",
                textAlign: "center",
              }}
            >
              Unit B1, Matchmakers Wharf, Homerton Road, London, E95FF, UK
            </p>
            <p
              style={{
                fontSize: "15px",
                fontWeight: "300",
                color: "#AEB4BB",
                margin: "0 auto 4em auto",
                textAlign: "center",
              }}
            >
              © 2021 Goodboy Digital Ltd. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default MainPage