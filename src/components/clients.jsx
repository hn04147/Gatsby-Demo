import * as React from "react"
import styled from "styled-components"
import { useState, useEffect } from "react"

import LucasFirm from "../images/client_lucas_film.png"
import ComicRelief from "../images/client_comic_relief.png"
import Grubhub from "../images/client_grubhub.png"
import Nickelodeon from "../images/client_nickelodeon-1.png"
import Nexus from "../images/nexus-logo.png"
import Unicef from "../images/unicef-logo.png"

const imgArr_ = [
  {
    imgSrc: LucasFirm,
    imgAlt: "lucas_firm_logo"
  },
  {
    imgSrc: ComicRelief,
    imgAlt: "comic_relief_logo"
  },
  {
    imgSrc: Grubhub,
    imgAlt: "grubhub_logo"
  },
  {
    imgSrc: Nickelodeon,
    imgAlt: "nickelodeon_logo"
  },
  {
    imgSrc: Nexus,
    imgAlt: "nexus_logo"
  },
  {
    imgSrc: Unicef,
    imgAlt: "unicef_logo"
  }
]

const Clients = ({ content=true }) => {
  const [screenWidth, setScreenWidth] = useState(1000)
  const [screenHeight, setScreenHeight] = useState(1000)
  const [imgArr, setImgArr] = useState(imgArr_)

  const handleResize = () => {
    setScreenWidth(window.innerWidth)
    setScreenHeight(window.innerHeight)
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    if (screenWidth < 720) setImgArr(imgArr_)
    else if (screenWidth >= 720 && screenWidth < 960) setImgArr(imgArr_.slice(0, 4)) 
    else setImgArr(imgArr_.slice(0, 5))
  }, [screenWidth])

  return (
    <>
      <div
        style={{
          background: content ? "#252c39" : null,
          content: content ? null : "",
          width: "100%",
          height: "100%",
          padding: "3em 0 2em 0",
        }}
      >
        <p
          style={{
            textAlign: "center",
            fontFamily: "Roboto Condensed",
            fontSize: "15px",
            fontWeight: "400",
            color: "#FFFFFF",
          }}
        >
          _OUR CLIENTS
        </p>
        <div style={{ width: "86%", margin: "0 7% 0 7%" }}>
          {imgArr.map((i, idx) => {
            return (
              <ImgContainer src={i.imgSrc} alt={i.imgAlt} />
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Clients

// 0~599, 600~719, 720~959, 960~

const ImgContainer = styled.img`
  width: 42%;
  margin: 1em 4% 1em 4%;

  @media only screen and (min-width: 600px) {
    width: 27.3%;
    margin: 1em 3% 1em 3%;
  }
  @media only screen and (min-width: 720px) {
    width: 21%;
    margin: 1em 2% 1em 2%;
  }
  @media only screen and (min-width: 960px) {
    width: 16%;
    margin: 1em 2% 1em 2%;
  }
`