import React, { Suspense } from "react"
import Layout from "../components/layout"
import Footer from "../components/footer"
import { Canvas } from "@react-three/fiber"
import Earth from "../components/earth/earth"


const LabPage = () => {
  return (
    <Layout>
      <div style={{ width: "100%", height: "100vh", padding: "0", margin: "0", background: "black" }}>
        <div style={{ width: "100%", height: "100vh", padding: "0", margin: "0", position: "absolute" }}>
          <div style={{ color: "white", fontFamily: "Roboto Condensed" }}>

          </div>
          <Canvas>
              <Suspense fallback={<div>loading...</div>}>
                <Earth />
              </Suspense>
            </Canvas>
        </div>
      </div>
      <Footer />
    </Layout>
  )
}

export default LabPage
