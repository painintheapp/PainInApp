import React from 'react'
import {Row,Col} from 'antd'
import LoginForm from 'components/Auth/Signin'
import PainlessLogo from 'assets/images/loginLogo.png'
import PainlessLogoSmall from 'assets/images/painlessLogo.svg'
const Login = () => {
    return (
        <div style={{height : '100vh'}}>

                <Row className="gx-d-flex"  style={{justifyContent:'space-between', flexDirection:'row',height : '100%'}}> 
                    <Col xl={12} lg={12} sm={12} md={12} style={{ backgroundColor :'grey'}} className="gx-d-flex gx-align-items-center gx-justify-content-center gx-d-none gx-d-lg-flex">
                        
                            <img
                            alt=''
                            src={PainlessLogo}
                            width = "350px"
                            />
                            <img
                            alt=''
                            src={PainlessLogoSmall}
                            style={{position : 'absolute', top : '30px', width:'30%', height:40, left : '40px'}}
                            />
                        
                    </Col>
                    <Col  xl={12} lg={12} sm={24} md={24} className="gx-d-flex gx-align-items-center gx-justify-content-center gx-w-100">
                    <LoginForm />
                    </Col>

                </Row>

                  

        </div>
    )
}

export default Login
