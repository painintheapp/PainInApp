import React from 'react'
import { Upload, message, Button } from 'antd';
import { useDispatch } from 'react-redux'
import IntlMessages from "../../util/IntlMessages";
import { UploadOutlined } from '@ant-design/icons';
const Index = ({ type, url, table }) => {
    const token = localStorage.getItem('token');

    const dispatch = useDispatch();

    const props = {
        name: 'file',
        action: `${process.env.REACT_APP_ROOT_URL}/${url}`,
        data: { "requestFor": table },
        headers: {
            authorization: token,
        },
        onChange(info) {
            if (info.file.status !== 'uploading') {
                console.log(info.file, info.fileList);
            }
            if (info.file.status === 'done') {
                dispatch({
                    type: `${type}_SUCCESS`,
                    payload: info.file.response
                })
                message.success(`${info.file.name} file uploaded successfully`);

            } else if (info.file.status === 'error') {
                message.error(`${info.file.name} file upload failed.`);
            }
        },
    };

    return (
        <Upload  {...props}>
            <Button className="gx-mr-2 gx-pt-0">
                <UploadOutlined /> <IntlMessages id="clicktoupload" />
            </Button>
        </Upload>
    )
}


export default Index
