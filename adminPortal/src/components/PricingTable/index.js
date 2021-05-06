import React from 'react'
import { Card } from 'antd'
const PricingTable = ({ children, title, list, styleName, extra, bgcolor, listImage }) => {
    const headStyle = {
        backgroundColor: bgcolor
    }
    const bodyStyle = {
        textAlign: 'left',
        minHeight: '420px',
        padding: '24px 14px'
    }
    const styles = {
        selectBtn: {
            position: 'absolute',
            bottom: '20px',
            left: '50%',
            transform: 'translateX(-50%)',
        }
    }
    return (
        <Card title={title} headStyle={headStyle} bodyStyle={bodyStyle} className="gx-card-widget pricing-table" extra={extra}>
            {list.map(item => {
                return <div className="gx-mb-3" >
                    <div className="gx-d-flex">
                        <div style={{ width: '13%' }}>
                            <img src={listImage} alt="" className="gx-mr-2" />
                        </div>

                        <span style={{ fontSize: '12px', display: 'inline-block', width: "87%" }} className="gx-gray-font"  > {item}</span>
                    </div>
                </div>
            })}

            <span style={styles.selectBtn}>
                {children}
            </span>


        </Card>
    )
}

export default PricingTable
