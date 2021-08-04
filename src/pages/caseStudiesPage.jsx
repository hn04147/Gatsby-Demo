import * as React from "react"
import { useState, useEffect, useRef } from "react"
import styled, { css } from "styled-components"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { navigate } from "@reach/router"
import Layout from "../components/layout"
import Seo from "../components/seo"
import PictureCard from "../components/pictureCard"
import Footer from "../components/footer"

import KakaoFriends from "../images/kakao_friends.jpeg"
import KakaoFriends2 from "../images/kakao_friends_2.jpeg"
import KakaoFriends3 from "../images/kakao_friends_3.jpg"
import EffelTower from "../images/effel_tower.jpeg"
import LionBackground from "../images/lion_background.jpg"
import KoreanPalace from "../images/korean_palace.jpg"

const appsData = [
  {
    isBig: true,
    imgSource: KakaoFriends,
    textUp: "CARTOON NETWORK",
    textDown: "GameBox App",
  },
  {
    isBig: true,
    imgSource: KakaoFriends2,
    textUp: "BBC",
    textDown: "NightFall",
  },
  {
    isBig: false,
    imgSource: KakaoFriends3,
    textUp: "TMS / MCDONALD'S",
    textDown: "McDonald's in-App Games",
  },
  {
    isBig: false,
    imgSource: KakaoFriends,
    textUp: "BBC",
    textDown: "Cbeebies Get Creative App",
  },
  {
    isBig: false,
    imgSource: KakaoFriends2,
    textUp: "NEXUS STUDIOS / UNICEF",
    textDown: "Right Runner",
  },
  {
    isBig: false,
    imgSource: KakaoFriends3,
    textUp: "SEGA / FACEBOOK",
    textDown: "Sonic Jump for Facebook Instant Games",
  },
  {
    isBig: false,
    imgSource: KakaoFriends,
    textUp: "PBS KIDS",
    textDown: "PBS Kids Games App",
  },
  {
    isBig: false,
    imgSource: KakaoFriends2,
    textUp: "ITV",
    textDown: "ITV Rugby World Cup: Kick It!",
  },
  {
    isBig: false,
    imgSource: KoreanPalace,
    textUp: "CARTOON NETWORK",
    textDown: "Toon Cup 2020",
  },
]

const experiencesData = [
  {
    isBig: false,
    imgSource: EffelTower,
    textUp: "BBC",
    textDown: "Cbeebies Get Creative App",
  },
  {
    isBig: false,
    imgSource: LionBackground,
    textUp: "RAZORFISH / MCDONALD'S",
    textDown: "McDonald's: 40 Years Together",
  },
  {
    isBig: false,
    imgSource: KakaoFriends2,
    textUp: "ITV",
    textDown: "ITV Rugby World Cup: Kick It!",
  },
  {
    isBig: false,
    imgSource: KoreanPalace,
    textUp: "BBC",
    textDown: "Doctor Who, Time Vortex VR",
  },
  {
    isBig: false,
    imgSource: KakaoFriends2,
    textUp: "SAPIENT RAZORFISH / AVIVA",
    textDown: "Aviva Save Smarter",
  },
  {
    isBig: false,
    imgSource: KakaoFriends3,
    textUp: "COMIC RELIEF",
    textDown: "Comic Adventure",
  },
  {
    isBig: false,
    imgSource: KakaoFriends,
    textUp: "BBC",
    textDown: "Tell me Your Secrets",
  },
  {
    isBig: false,
    imgSource: KakaoFriends2,
    textUp: "RAZORFISH / MCDONALD'S",
    textDown: "Super Spice Dash",
  },
  {
    isBig: false,
    imgSource: KakaoFriends3,
    textUp: "RAZORFISH / MCDONALD'S",
    textDown: "McDonald's 100 Moments",
  },
]

const gamesData = [
  {
    isBig: false,
    imgSource: LionBackground,
    textUp: "POKI",
    textDown: "Subway Surfers HTML5",
  },
  {
    isBig: false,
    imgSource: KakaoFriends2,
    textUp: "BBC",
    textDown: "Nightfall",
  },
  {
    isBig: false,
    imgSource: EffelTower,
    textUp: "FANCY FORCE",
    textDown: "Happy Wheels",
  },
  {
    isBig: false,
    imgSource: KakaoFriends,
    textUp: "NICKELODEON",
    textDown: "The Adventures of Paddington",
  },
  {
    isBig: false,
    imgSource: KoreanPalace,
    textUp: "TMS/MCDONALD'S",
    textDown: "McDonald's in-App Games",
  },
  {
    isBig: false,
    imgSource: KakaoFriends2,
    textUp: "LEGO",
    textDown: "Out of Step",
  },
]

const techData = [
  {
    isBig: false,
    imgSource: KakaoFriends3,
    textUp: "BBC",
    textDown: "Doctor Who, Time Vortex VR",
  },
  {
    isBig: false,
    imgSource: KakaoFriends2,
    textUp: "GOODBOY OPEN SOURCE",
    textDown: "PixiJS",
  },
]

const allData = [...appsData, ...experiencesData, ...gamesData, ...techData]

const CaseStudiesPage = () => {
  const [isClick, setIsClick] = useState({
    all: true,
    apps: false,
    experiences: false,
    games: false,
    tech: false,
  })

  return (
    <Layout>
      <Seo title="Case Studies" />
      <div style={{ position: "relative", zIndex: "1" }}>
        <div
          style={{
            width: "100%",
            overflow: "hidden",
            margin: "0",
            position: "relative",
            background: "#252c39",
            zIndex: "1",
          }}
        >
          <div
            id="header"
            style={{
              width: "90%",
              fontFamily: "Roboto Condensed",
              color: "#FFFFFF",
              margin: "5em auto 0 auto",
              padding: "0",
            }}
          >
            <div
              id="header_title"
              style={{
                width: "100%",
                display: "block",
                textAlign: "center",
                margin: "0 0 2em 0",
              }}
            >
              <h1 style={{ marginBottom: "0.5em" }}>Case Studies</h1>
              <div
                style={{
                  display: "block",
                  width: "100px",
                  height: "4px",
                  background: "#ECEDF1",
                  margin: "0 auto 12px auto",
                }}
              ></div>
            </div>
            <div
              id="header_menu"
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                margin: "0 0 0 0",
              }}
            >
              <HeaderMenu>
                <div
                  style={{ color: isClick.all ? "#a7a9ac" : "#FFFFFF" }}
                  onClick={() => {
                    setIsClick({
                      all: true,
                      apps: false,
                      experiences: false,
                      games: false,
                      tech: false,
                    })
                  }}
                >
                  ALL
                </div>
                <HeaderMenuBar style={{ opacity: isClick.all ? "1" : "0" }} />
              </HeaderMenu>
              <HeaderMenu>
                <div
                  style={{ color: isClick.apps ? "#a7a9ac" : "#FFFFFF" }}
                  onClick={() => {
                    setIsClick({
                      all: false,
                      apps: true,
                      experiences: false,
                      games: false,
                      tech: false,
                    })
                  }}
                >
                  APPS
                </div>
                <HeaderMenuBar style={{ opacity: isClick.apps ? "1" : "0" }} />
              </HeaderMenu>
              <HeaderMenu>
                <div
                  style={{ color: isClick.experiences ? "#a7a9ac" : "#FFFFFF" }}
                  onClick={() => {
                    setIsClick({
                      all: false,
                      apps: false,
                      experiences: true,
                      games: false,
                      tech: false,
                    })
                  }}
                >
                  EXPERIENCES
                </div>
                <HeaderMenuBar
                  style={{ opacity: isClick.experiences ? "1" : "0" }}
                />
              </HeaderMenu>
              <HeaderMenu>
                <div
                  style={{ color: isClick.games ? "#a7a9ac" : "#FFFFFF" }}
                  onClick={() => {
                    setIsClick({
                      all: false,
                      apps: false,
                      experiences: false,
                      games: true,
                      tech: false,
                    })
                  }}
                >
                  GAMES
                </div>
                <HeaderMenuBar style={{ opacity: isClick.games ? "1" : "0" }} />
              </HeaderMenu>
              <HeaderMenu>
                <div
                  style={{ color: isClick.tech ? "#a7a9ac" : "#FFFFFF" }}
                  onClick={() => {
                    setIsClick({
                      all: false,
                      apps: false,
                      experiences: false,
                      games: false,
                      tech: true,
                    })
                  }}
                >
                  TECH
                </div>
                <HeaderMenuBar style={{ opacity: isClick.tech ? "1" : "0" }} />
              </HeaderMenu>
            </div>
          </div>

          <div id="content" style={{ marginBottom: "4em" }}>
            {isClick.all
              ? allData.map(i => (
                  <PictureCard
                    isBig={i.isBig}
                    imgSource={i.imgSource}
                    textUp={i.textUp}
                    textDown={i.textDown}
                  />
                ))
              : isClick.apps
              ? appsData.map(i => (
                  <PictureCard
                    isBig={i.isBig}
                    imgSource={i.imgSource}
                    textUp={i.textUp}
                    textDown={i.textDown}
                  />
                ))
              : isClick.experiences
              ? experiencesData.map(i => (
                  <PictureCard
                    isBig={i.isBig}
                    imgSource={i.imgSource}
                    textUp={i.textUp}
                    textDown={i.textDown}
                  />
                ))
              : isClick.games
              ? gamesData.map(i => (
                  <PictureCard
                    isBig={i.isBig}
                    imgSource={i.imgSource}
                    textUp={i.textUp}
                    textDown={i.textDown}
                  />
                ))
              : techData.map(i => (
                  <PictureCard
                    isBig={i.isBig}
                    imgSource={i.imgSource}
                    textUp={i.textUp}
                    textDown={i.textDown}
                  />
                ))}
          </div>
        </div>

        <Footer />
      </div>
    </Layout>
  )
}

export default CaseStudiesPage

const HeaderMenu = styled.div`
  margin: 0 .7em 0 .7em;
  font-size: 15px;
`
const HeaderMenuBar = styled.div`
  display: block;
  width: 100%;
  height: 3px;
  background: #3F51B5;
  margin: .3em auto .5em auto;
`