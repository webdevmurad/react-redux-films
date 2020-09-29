import { array } from "prop-types"
import React from "react"
import ContentLoader from "react-content-loader"

const Loader = () => (
    <ContentLoader 
        speed={1}
        width={290}
        height={400}
        viewBox="0 0 290 400"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        >
        <rect x="12" y="3" rx="10" ry="10" width="289" height="400" />
    </ContentLoader>
)

export default Loader