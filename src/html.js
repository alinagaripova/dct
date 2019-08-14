import React from "react"
import PropTypes from "prop-types"

export default class HTML extends React.Component {
    render() {
        let headComponents = this.props.headComponents
        let css
        if (process.env.NODE_ENV == `production`) {
            headComponents = headComponents.filter(component => component.type !== 'style')
            css = (<><link rel="stylesheet" href="./style.css"/><link rel="stylesheet" href="./responsive.css"/></>)
        }
        return (
            <html {...this.props.htmlAttributes}>
            <head>
                <meta charSet="utf-8" />
                <meta httpEquiv="x-ua-compatible" content="ie=edge" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, shrink-to-fit=no"
                />
                {headComponents}
                {css}
            </head>
            <body {...this.props.bodyAttributes}>
            {this.props.preBodyComponents}
            <div
                key={`body`}
                id="___gatsby"
                dangerouslySetInnerHTML={{ __html: this.props.body }}
            />
            {this.props.postBodyComponents}
            </body>
            </html>
        )
    }
}

HTML.propTypes = {
    htmlAttributes: PropTypes.object,
    headComponents: PropTypes.array,
    bodyAttributes: PropTypes.object,
    preBodyComponents: PropTypes.array,
    body: PropTypes.string,
    postBodyComponents: PropTypes.array,
}