import * as React from "react"

const MemberCard = ({ imgSrc, textUp, textDown }) => {
  return (
    <div>
      <div 
        style={{ 
          height: "24em", 
          width: "16em", 
        }}
      >
        <div 
          style={{ 
            height: "100%", 
            width: "100%", 
            padding: "0 .4em 0 .4em"
          }}
        >
          <img 
            src={imgSrc}
            style={{ 
              width: "100%", 
              height: "14em", 
              objectFit: "cover", 
              margin: "0", 
              padding: "0" 
            }}
          />
          <div 
            style={{
              width: "100%", 
              height: "10em", 
              background: "#354050", 
              margin: "0", 
              padding: "1em 0 1em 1.3em" 
            }}
          >
            <p 
              style={{
                fontFamily: "Roboto Condensed", 
                color: "#FFFFFF", 
                fontSize: "14px", 
                fontWeight: "300", 
                textAlign: "left", 
                padding: "0", 
                margin: "0" 
              }}
            >{textUp}</p>
            <p 
              style={{ 
                fontFamily: "Roboto Condensed", 
                color: "#FFFFFF", 
                fontSize: "15px", 
                fontWeight: "500", 
                textAlign: "left", 
                padding: "0", 
                margin: "0" 
              }}
            >{textDown}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MemberCard