import * as React from "react"
import { navigate } from "gatsby"

const PictureCard = ({ isBig, imgSource, textUp, textDown, imgHref="/" }) => {
  return (
    <div style={{ width: "100%", margin: "0 0 1em 0", padding: "0", display: "block" }}>
      
      <div 
        style={{
          width: isBig ? "100%" : "90%",
          height: "16em",
          position: "relative",
          left: isBig ? "0" : "5%",
        }}
        onClick={navigate(imgHref)}
      >
        <div style={{ margin: "0 auto", padding: "0", height: "12em", zIndex: "2", position: "relative" }}>
          <img 
            style={{
              width: "100%",
              height: "12em",
              objectFit: "cover",
              marginBottom: "0",
            }}
            src={imgSource}/>
        </div>
        <div 
          style={{
            background: "#353f50",
            display: "inline-block",
            width: "100%",
            height: "4em",
            position: "relative",
            zIndex: "2",
          }}>
          <p style={{fontFamily: "Roboto Condensed", margin: "1em 0 0 20px", padding: "0", fontSize: "13px" }}>{textUp}</p>
          <h4 style={{fontFamily: "Roboto Condensed", margin: "0 0 1em 20px", padding: "0" }}>{textDown}</h4>
        </div>
        {isBig ? null : (
          <div
            style={{
              width: "100%",
              position: "absolute",
              zIndex: "0",
              height: "16em",
              background: "#161c24",
              left: "0.4em",
              top: "0.4em",
              opacity: ".6",
          }}></div>
        )}
      </div>
    </div>
  )
  
}

export default PictureCard