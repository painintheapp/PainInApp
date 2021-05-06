import React, { useEffect ,useState} from "react";
import Widget from "components/Widget";
import IntlMessages from 'util/IntlMessages'
import {  useSelector,useDispatch } from "react-redux";
import {  Row, Col } from 'antd';
import ResetPasswordModal from './components/ResetPasswordModal'
import EditProfile from './components/EditProfile'
import Layout from 'components/LayoutForPortal'
import { DataGetAction } from "redux/actions/http";
const Index = () => {


    const dispatch = useDispatch()
    const styles = {
        img: {
            width: '50px',
            height: '50px',
            borderRadius: "50%"
        }
    }
    let initialState = {
        loading: false,
        imageUrl: '',
    }
    const [photoList, setPhotoState] = useState(initialState)


    const settingsProps = useSelector(state => state.auth)
    const { settingsData } = settingsProps

    const fetchSettings = () => {


        dispatch(DataGetAction('getProfile', '', 'gettingProfile'));
        if(settingsData.profileImageUrl){
            photoList.imageUrl= settingsData.profileImageUrl
        }
    }

    useEffect(fetchSettings, [settingsData.profileImageUrl]);




    return (
        <Layout>
            <Row>
                <Col xl={12} lg={12} md={12} sm={24} xs={24}>
                    <Widget>
                        <div className="gx-d-flex gx-align-items-flex-start gx-justify-content-between">
                            <div className="gx-d-flex"> 
                                {settingsData && settingsData.profileImageUrl ? <img src={settingsData && settingsData.profileImageUrl} alt="" style={styles.img} /> : <img src="/images/dummyImage.jpeg" alt="" style={styles.img} />}

                                <div className="details gx-ml-3 gx-d-flex gx-flex-column">
                                    <h4 className="gx-font-sans-bold" style={{ color: '#595959' }}>
                                        <span>{(settingsData && settingsData.firstName)}</span>
                                        <span className="gx-ml-1">{(settingsData && settingsData.lastName)}</span>
                                    </h4>
                                    <ResetPasswordModal />
                                    
                                </div>
                            </div>

                            <div>
                            <EditProfile  photoList={photoList} setPhotoState={setPhotoState}/>
                            </div>

                        </div>
                        <div className="gx-d-flex gx-justify-content-between gx-my-4">
                            <div className="gx-d-flex gx-align-items-center">
                                <span className="icon icon-email gx-text-primary" style={{  fontSize: '20px' }}></span>
                                <div className="details gx-ml-3 gx-d-flex gx-flex-column">
                                    <span style={{ color: '#D2D2D2' }}> <IntlMessages id="settings.profile.email" /></span>
                                    <span style={{ color: '#595959' }}>{(settingsData && settingsData.email) || 'email.yahoo.com'}</span>
                                </div>
                            </div>
                        </div>
                        <div className="gx-d-flex gx-justify-content-between">
                            <div className="gx-d-flex gx-align-items-center">
                                <span className="icon icon-phone gx-text-primary" style={{  fontSize: '20px' }}></span>
                                <div className="details gx-ml-3 gx-d-flex gx-flex-column">
                                    <span style={{ color: '#D2D2D2' }}><IntlMessages id="settings.profile.phone" /></span>
                                    <span style={{ color: '#595959' }}>+{(settingsData && settingsData.phoneNumber) || '2354534324'}</span>
                                </div>
                            </div>
                           
                            
                        </div>
                    </Widget>

                </Col>
            </Row>
        </Layout>
    )
}

export default Index
