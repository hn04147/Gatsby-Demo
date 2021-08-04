import * as React from "react"

const ServiceCard = ({ color, text, onClick }) => {
  return (
    <div 
      style={{ 
        display: "block", 
        padding: "10px 10px", 
        position: "relative", 
        width: "100%", 
        marginBottom: "0.3em" 
      }}
      onClick={onClick}>
      <div 
        style={{ 
          background: color, 
          zIndex: "2", 
          position: "relative", 
          display: "inline-block", 
          width: "16em", 
          height: "7em", 
          textAlign: "center", 
          padding: text === "brand experiences" ? "2em" : "2.5em" 
        }}>
        <h2 
          style={{ 
            fontFamily: "Roboto Condensed" 
          }}>{text}</h2>
      </div>
      <div 
        style={{ 
          position: "absolute", 
          zIndex: "0", 
          display: "block", 
          content: "", 
          left: "18px", 
          top: "18px", 
          border: "3px solid #FFFFFF", 
          width: "16em", 
          height: "7em" 
        }}></div>
    </div>
  )
}

export default ServiceCard