import React from 'react'
import './SidebarOption.css'

function SidebarOption({ active, text, Icon }) {
    return (
        <>

        {/* Active is used to set a prop to a desired setting at all times */}
        <div className={`sidebarOption ${active && "sidebarOption--active"} `}>
            <Icon /> 
            <h2>{text}</h2>
        </div>
        
        </>
    )
}

export default SidebarOption;