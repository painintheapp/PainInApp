import React from 'react'
import { Upload, message } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
const { Dragger } = Upload;
const FIleUploader = ({name,setFileList, fileList}) => {
    const token = localStorage.getItem('token');
    const props = {
        action: `${process.env.REACT_APP_ROOT_URL}/uploadProfileImage`,
        method: "POST",
        headers: {
            'Authorization': token,
        },
        body: { name },


        name: 'file',
        multiple: true,
        onChange(info) {
            
            const { status } = info.file;

            if (status !== 'uploading') {
                console.log(info.file, info.fileList);
            }

            if (status === 'done') {
                let fileListArr = [...info.fileList];
                console.log('fileListArr1',fileListArr)
                fileListArr = fileListArr.map(file => {
                    if (file.response) {
                        // Component will show file.url as link
                        file.url = file.response.url.location;
                    }
                    return file;
                });
                console.log('fileListArr2',fileListArr)
                setFileList(fileListArr)
                message.success(`${info.file.name} file uploaded successfully.`);

            } 
            else if (status === 'error') {

                message.error(`${info.file.name} file upload failed.`);

            }
        },
    };
    return (
        <Dragger {...props} >
            <p className="ant-upload-drag-icon">
                <InboxOutlined />
            </p>
            <p className="ant-upload-hint">
                Drop your files here or click here to upload
        </p>
        </Dragger>
    )
}

export default FIleUploader
