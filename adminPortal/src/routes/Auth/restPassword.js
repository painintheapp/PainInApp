import React from 'react'
import Layout from 'components/LayoutForPortal'
import RestPassword from 'components/Auth/ResetPassword'
const restPassword = () => {
    console.log("================ Here main ========")
    return (
        <Layout>
            <RestPassword />
        </Layout>
    )
}

export default restPassword
