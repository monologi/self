import React from "react"
import Layout from "../components/layout";
import instagramImg from "../../static/json/test.json";

export default function Home() {
  console.log(instagramImg)
  return (
    <Layout>
      <img style={{ width: '100%' }} src="https://drive.google.com/uc?export=view&id=1O78HJtHKwMiB37OCWqWaRw9sMStZjidf" alt="" />
      <div className="ig-place">
        {
          instagramImg && instagramImg.map((item, key) => {
            return <img className="insta-photo" src={item} alt="key" key={key} />
          })
        }
      </div>
    </Layout>
  )
}
