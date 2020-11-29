import React from "react"
import PropTypes from "prop-types"

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <title>Motologi - Your Photography Partner</title>
        <meta name="description" content="TELL YOUR STORY TROUGH PICTURE | a single picture can describe more than thousand of words, last years, emotional. let us help you make that a reality"/>
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        {props.headComponents}
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;700&display=swap" rel="stylesheet" />
        <meta property="og:title" content="HOME"/>
        <meta property="og:type" content="article"/>
        <meta property="og:url" content="http://monoxlogi.com/" />
        <meta property="og:site_name" content="Monologi - Wedding Photography Jakarta based on jakarta"/>
        <meta property="og:description" content="TELL YOUR STORY TROUGH PICTURE | a single picture can describe more than thousand of words, last years, emotional. let us help you make that a reality"/>
        <meta property="og:image" content="https://drive.google.com/uc?export=view&id=1O78HJtHKwMiB37OCWqWaRw9sMStZjidf" />
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
