import { useState } from "react"
import useStorage from "../hooks/useStorage"


const ProgressBar = ({file}) => {

    const {progress, url, error} = useStorage(file)

    return (
        <>
        <div className="progress-bar">progress</div>

        </>
    )

}

export default ProgressBar