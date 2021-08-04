import * as React from "react"

const Footer = () => {
  return (
    <>
      <div
        style={{
          width: "100%",
          height: "100%",
          overflow: "hidden",
          margin: "0",
          position: "relative",
          background: "#11161d",
          fontFamily: "Roboto Condensed",
          color: "#FFFFFF",
          zIndex: "2",
        }}
      >
        <div
          style={{
            position: "relative",
            top: "0px",
            height: "50px",
            width: "100px",
            left: "50%",
            margin: "-.5em 0 2em -50px",
          }}
        >
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            viewBox="0 0 60 30"
            onClick={() => {window.scrollTo({ top: 0, left: 0, behavior: "smooth" })}}
          >
            <polygon
              fill="#FFFFFF"
              points="28.4,17.6 23.5,22.5 24.9,23.9 29.9,19 34.8,23.9 36.2,22.5 31.3,17.6 29.9,16.1 "
            ></polygon>
          </svg>
        </div>
        <div style={{ width: "80%", margin: "0 auto 0 auto" }}>
          <p
            style={{
              fontSize: "15px",
              fontWeight: "300",
              color: "#AEB4BB",
              margin: "0 auto .8em auto",
              textAlign: "center",
            }}
          >
            _CONTACT US
          </p>
          <p
            style={{
              fontSize: "13px",
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
              fontSize: "13px",
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
              fontSize: "15px",
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
              fontSize: "13px",
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
              fontSize: "15px",
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
              fontSize: "13px",
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
              fontSize: "13px",
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
    </>
  )
}

export default Footer 