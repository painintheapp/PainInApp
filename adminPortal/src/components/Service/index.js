import React from 'react'

const index = ({ Item }) => {
    return (
        <div className="gx-d-flex gx-flex-column">
            <div className=" gx-mt-4 gx-icon-box gx-d-flex gx-flex-column gx-justify-content-center"
                style={{
                    background: `${Item.bg} 0% 0% no-repeat padding-box`,
                    boxShadow: `0px 0px 20px ${Item.bxs}`
                }}
            >
                <img src={Item.imgUrl} alt="" />
            </div>
            <h2 className="gx-mt-4 gx-font-weight-bold" style={{maxWidth:'284px'}}>{Item.title}</h2>
            <p className="h3 gx-mt-2 " style={{ color: '#848484', maxWidth: '310px', lineHeight: '30px' }}>{Item.desc}</p>
        </div>
    )
}

export default index
