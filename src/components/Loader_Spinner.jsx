import React from 'react'
import { createPortal } from 'react-dom'

export default function Loader_Spinner() {
    return createPortal (
        <div ><span className="loader"></span></div>,
        document.getElementById("loader_portal")
    )
}
