import React from "react";

import Widget from "components/Widget/index";

const IconWithTextCard = ({ cardColor, icon, title, subTitle, iconColor }) => {
    return (
        <Widget styleName={`gx-card-full gx-p-3 gx-bg-${cardColor} gx-text-white`}>
            <div className="gx-media gx-align-items-center gx-flex-nowrap">
                <div className="gx-mr-2 gx-mr-xxl-3">
                    
                    <img src={icon} width="30" height="30" alt=""/>
                </div>
                <div className="gx-media-body">
                    <h1 className="gx-font-20 gx-font-weight-semi-bold gx-mb-1 gx-text-white">{title}</h1>
                    <p className="gx-mb-0 gx-font-12">{subTitle}</p>
                </div>
            </div>
        </Widget>
    );
};

export default IconWithTextCard;
