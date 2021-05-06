import React from 'react'
import HorizontalNav from '../components/menuContent'
const index = () => {
    return (
        <div className=" gx-header-horizontal gx-above-header-horizontal gx-w-100">
            <div className="gx-header-horizontal-top">
                <div className="gx-container">
                    <div className="gx-header-horizontal-top-flex gx-justify-content-between">
                        <div className="gx-header-horizontal-top-left gx-justify-content-sm-center">
                            <i className="icon icon-alert gx-mr-3" />
                            <p className="gx-mb-0 gx-text-truncate">announced</p>
                        </div>
                        <div className="gx-header-horizontal-top-right">
                            <div className="gx-header-horizontal-top-flex">                       
                             <HorizontalNav />
                             <span className="gx-mr-3">|</span>
                             <span> Sign In</span>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default index
