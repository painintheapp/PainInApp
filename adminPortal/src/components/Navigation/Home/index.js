import React from 'react'
import HorizontalNav from '../components/menuContent'
import Logo from '../components/logo'
import { useDispatch } from 'react-redux';
import { SimpleModalAction } from 'redux/actions/Common';
const Index = () => {

    const dispatch = useDispatch()
    const openSignInModal = () => {
        dispatch(SimpleModalAction('login',true))
    }

    return (
        <div className=" gx-header-horizontal gx-above-header-horizontal gx-w-100">
            <div className="gx-header-horizontal-top">
                <div className="gx-container">
                    <div className="gx-header-horizontal-top-flex gx-justify-content-between">
                        <div className="gx-header-horizontal-top-left gx-justify-content-sm-center">
                            <p className="gx-mb-0 gx-text-truncate"><Logo /></p>
                        </div>
                        <div className="gx-header-horizontal-top-right">
                            <div className="gx-header-horizontal-top-flex">
                                <HorizontalNav />
                                <span className="gx-mr-3">|</span>
                                <span className="gx-pointer gx-link" onClick={() => openSignInModal()}> Sign In</span>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Index
