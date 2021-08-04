import * as React from "react"

import LucasFirm from "../images/client_lucas_film.png"
import ComicRelief from "../images/client_comic_relief.png"
import Grubhub from "../images/client_grubhub.png"
import Nickelodeon from "../images/client_nickelodeon-1.png"
import Nexus from "../images/nexus-logo.png"
import Unicef from "../images/unicef-logo.png"

const Clients = ({ content=true }) => {
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
          <img
            src={LucasFirm}
            style={{ width: "42%", margin: "1em 4% 1em 4%" }}
          />
          <img src={Unicef} style={{ width: "42%", margin: "1em 4% 1em 4%" }} />
          <img src={Nexus} style={{ width: "42%", margin: "1em 4% 1em 4%" }} />
          <img
            src={Nickelodeon}
            style={{ width: "42%", margin: "1em 4% 1em 4%" }}
          />
          <img
            src={Grubhub}
            style={{ width: "42%", margin: "1em 4% 1em 4%" }}
          />
          <img
            src={ComicRelief}
            style={{ width: "42%", margin: "1em 4% 1em 4%" }}
          />
        </div>
      </div>
    </>
  )
}

export default Clients