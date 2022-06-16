import React from "react"
import { Helmet } from "react-helmet"

function MyHelmet({ title, description }) {
  return (
    <Helmet>
      {title ? <title>{title} | UrbanGarden</title> : null}
      {description ? <meta name="description" content={description} /> : null}
      <style>{'body { background-color: black; }'}</style>
    </Helmet>
  )
}

export default MyHelmet
