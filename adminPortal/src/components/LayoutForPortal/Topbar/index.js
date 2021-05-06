import React from "react";
import { Layout } from "antd";
import { Link } from "react-router-dom";
import { toggleCollapsedSideNav, onNavStyleChange } from "redux/actions/Setting";
import UserInfo from "components/UserInfo";

import { NAV_STYLE_DRAWER, NAV_STYLE_FIXED, NAV_STYLE_MINI_SIDEBAR, TAB_SIZE, THEME_TYPE_LITE, NAV_STYLE_NO_HEADER_MINI_SIDEBAR } from "constants/ThemeSetting";
import { useDispatch, useSelector } from "react-redux";

// import logo from '../../../assets/images/logoIcon.png'
const { Header } = Layout;





const Topbar = ({ transparent }) => {

  const { width, navCollapsed, navStyle, themeType } = useSelector(({ settings }) => settings);
  // const authProps = useSelector((state) => state.auth);
  // const { authUser } = authProps
  //const { searchText, setSearchText } = useState('');
  const dispatch = useDispatch();
  // const history = useHistory();
  // const RedirectToMapPage = () => {
  //   history.push('/siteMap')
  // }





  return (
    <Header >
      <div className={`gx-d-flex gx-justify-content-between gx-align-items-center gx-w-100 `}>
        <div className="gx-d-flex gx-align-items-center">
          {navStyle === NAV_STYLE_DRAWER || ((navStyle === NAV_STYLE_FIXED || navStyle === NAV_STYLE_MINI_SIDEBAR) && width < TAB_SIZE) ?
            <div className="gx-linebar gx-mr-2">
              <i className="gx-icon-btn icon icon-menu"
                onClick={() => {
                  dispatch(toggleCollapsedSideNav(!navCollapsed));
                }}
              />
            </div> : null}
          <Link to="/" className="gx-d-block gx-d-lg-none  gx-pointer"> collab care </Link>
          {(navStyle === NAV_STYLE_FIXED || navStyle === NAV_STYLE_MINI_SIDEBAR) ? <div className="gx-linebar">
            <i
              className={`gx-icon-btn icon icon-${navStyle === NAV_STYLE_MINI_SIDEBAR ? 'menu-unfold' : 'menu-fold'} ${themeType !== THEME_TYPE_LITE ? 'gx-text-black' : ''}`}
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
          </div> : null}
        </div>

        <div className="gx-header-notifications gx-d-flex gx-justofy-content-between gx-align-items-center  gx-p-2 gx-p-sm-0">





          <div className="gx-user-nav gx-align-items-center gx-d-flex">
            
            <UserInfo />
          </div>
        </div>
      </div>
      
    </Header>
  );
};

export default Topbar;
