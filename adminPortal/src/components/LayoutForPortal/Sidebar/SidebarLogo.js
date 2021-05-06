import React from "react";
import {  useSelector } from "react-redux";
import { Link } from "react-router-dom";

import {
  NAV_STYLE_DRAWER,
  NAV_STYLE_FIXED,
  TAB_SIZE,
} from "constants/ThemeSetting";
import LogoImg from 'assets/images/painlesslogo.png'
import smalllogo from 'assets/images/smallpainless.png'
const SidebarLogo = () => {
  
  const { width } = useSelector(({ settings }) => settings);
  let navStyle = useSelector(({ settings }) => settings.navStyle);
  if (width < TAB_SIZE && navStyle === NAV_STYLE_FIXED) {
    navStyle = NAV_STYLE_DRAWER;
  }
  return (
    <div className="gx-layout-sider-header">
      {/* {(navStyle === NAV_STYLE_FIXED || navStyle === NAV_STYLE_MINI_SIDEBAR) ? <div className="gx-linebar">
        <i
          className={`gx-icon-btn icon icon-${navStyle === NAV_STYLE_MINI_SIDEBAR ? 'menu-unfold' : 'menu-fold'} ${themeType !== THEME_TYPE_LITE ? 'gx-text-white' : ''}`}
          onClick={() => {
            if (navStyle === NAV_STYLE_DRAWER) {
              dispatch(toggleCollapsedSideNav(!navCollapsed));
            } else if (navStyle === NAV_STYLE_FIXED) {
              dispatch(onNavStyleChange(NAV_STYLE_MINI_SIDEBAR))
            } else if (navStyle === NAV_STYLE_NO_HEADER_MINI_SIDEBAR) {
              dispatch(toggleCollapsedSideNav(!navCollapsed));
            } else {
              dispatch(onNavStyleChange(NAV_STYLE_FIXED))
            }
          }}
        />
      </div> : null} */}

      <Link to="/" className="gx-site-logo">
        
          <img src={LogoImg} alt="loco" width="112px" /> 
        
      </Link>
        <Link to="/" className="gx-site-logo-small">
          <img src={smalllogo} alt="loco" width="40px"  /> 
          </Link>
    </div>
  );
};

export default SidebarLogo;
