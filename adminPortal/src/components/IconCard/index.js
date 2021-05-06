import React from 'react'
import Widget from "components/Widget";
const Index = ({bgColor,icon,figures,desc}) => {
    return (
        <Widget styleName="gx-card-full">
            <div>
                <div><img src={icon} alt=""/></div>
                <div></div>
            </div>
        
    </Widget>
    )
}

export default Index
