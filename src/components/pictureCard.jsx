import * as React from "react"
import { useEffect, useState } from "react"

const PictureCard = ({ isBig, imgSource, textUp, textDown, onClick }) => {
  const [screenWidth, setScreenWidth] = useState(2000)
  const [screenHeight, setScreenHeight] = useState(2000)

  const handleResize = () => {
    setScreenWidth(window.innerWidth)
    setScreenHeight(window.innerHeight)
  }

  useEffect(() => {
    handleResize()
  }, [])

  useEffect(() => {
    window.addEventListener("resize", handleResize)
  }, [])

  return (
    <div
      style={{
        width: "100%",
        margin:
          screenWidth < 720
            ? "0 0 1em 0"
            : screenWidth < 960
            ? "0 0 2em 0"
            : "0 0 3em 0",
        padding: "0",
        display: "block",
      }}
    >
      <div
        style={{
          width: screenWidth > 720 || !isBig ? "90%" : "100%",
          height: screenWidth < 720 ? "16em" : screenWidth < 960 ? "24em" : "36em",
          position: "relative",
          left: screenWidth > 720 || !isBig ? "5%" : 0,
        }}
        onClick={onClick}
      >
        <div
          style={{
            margin: "0 auto",
            padding: "0",
            height:
              screenWidth < 720 ? "12em" : screenWidth < 960 ? "18em" : "28em",
            zIndex: "2",
            position: "relative",
          }}
        >
          <img
            style={{
              width: "100%",
              height:
                screenWidth < 720 ? "12em" : screenWidth < 960 ? "18em" : "28em",
              objectFit: "cover",
              marginBottom: "0",
            }}
            src={imgSource}
            alt="picturecard_img"
          />
        </div>
        <div
          style={{
            background: "#353f50",
            display: "inline-block",
            width: "100%",
            height: screenWidth < 720 ? "4em" : screenWidth < 960 ? "6em" : "8em",
            position: "relative",
            zIndex: "2",
          }}
        >
          <p
            style={{
              color: "#FFFFFF",
              fontFamily: "Roboto Condensed",
              margin: screenWidth < 960 ? "1em 0 0 20px" : "1.5em 0 .5em 20px",
              padding: "0",
              fontSize: screenWidth < 720 ? "13px" : screenWidth < 960 ? "18px" : "25px",
            }}
          >
            {textUp}
          </p>
          <p
            style={{
              color: "#FFFFFF",
              fontFamily: "Roboto Condensed",
              margin: "0 0 1em 20px",
              padding: "0",
              fontSize: screenWidth < 720 ? "18px" : screenWidth < 960 ? "24px" : "32px",
            }}
          >
            {textDown}
          </p>
        </div>
        {!isBig || screenWidth > 720 ? (
          <div
            style={{
              width: "100%",
              position: "absolute",
              zIndex: "0",
              height: screenWidth < 720 ? "16em" : screenWidth < 960 ? "24em" : "36em",
              background: "#161c24",
              left: screenWidth < 720 ? "0.4em" : screenWidth < 960 ? "0.7em" : "1em",
              top: screenWidth < 720 ? "0.4em" : screenWidth < 960 ? "0.7em" : "1em",
              opacity: ".6",
            }}
          ></div>
        ) : null}
      </div>
    </div>
  )
  
}

export default PictureCard