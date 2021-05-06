import React from 'react'
import { Upload, Button } from 'antd'
const Index = ({ setFileList, fileList, multiple, icon, btnText, name }) => {

    const token = localStorage.getItem('token');
    const handleChange = info => {
        let fileListArr = [...info.fileList];

        // 1. Limit the number of uploaded files
        // Only to show two recent uploaded files, and old ones will be replaced by the new
        fileListArr = fileListArr.slice(-6);

        // 2. Read from response and show file link
        fileListArr = fileListArr.map(file => {
            if (file.response) {
                // Component will show file.url as link
                file.url = file.response.url.location;
            }
            return file;
        });

        setFileList(fileListArr);
    };


    const ImageProps = {
        action: `${process.env.REACT_APP_ROOT_URL}/uploadProfileImage`,
        method: "POST",
        headers: {
            'Authorization': token,
        },
        body: { name },
        onChange: handleChange,
        multiple: multiple,
    };


    return (
        <Upload {...ImageProps} fileList={fileList}>
            <Button className="gx-pt-0">
                <span className={`icon icon-${icon} gx-mr-2`}></span>  {btnText || 'Upload'}
            </Button>
        </Upload>
    )
}

export default Index
