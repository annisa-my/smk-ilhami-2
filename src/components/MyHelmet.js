import React from "react"
import { Helmet } from "react-helmet"

function MyHelmet({ title, description }) {
  return (
    <Helmet>
      {title ? <title>{title} | Berpesantren</title> : null}
      {description ? <meta name="description" content={description} /> : null}
    </Helmet>
  )
}

export default MyHelmet
