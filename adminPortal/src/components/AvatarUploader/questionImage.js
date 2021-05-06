import React from 'react'
import { Upload } from 'antd'
import { LoadingOutlined } from '@ant-design/icons';
const Index = ({ name, setPhotoState, photoList, initialValues }) => {



    const token = localStorage.getItem('token');


    const { loading, imageUrl } = photoList;


    const handleChange = info => {
        if (info.file.status === 'uploading') {
            setPhotoState({ loading: true });
            return;
        }
        if (info.file.status === 'done') {
            console.log('info', info)
            // Get this url from response in real world.
            console.log(info.file.response.url.location);
            setPhotoState({
                imageUrl: info.file.response.url.location,
                loading: false,
            })
        }

    };


    const uploadButton = (
        <div className="questionImages">
            {loading ? <LoadingOutlined /> : <div> <span className="icon icon-image gx-d-block" style={{ fontSize: '33px', opacity: '0.3' }}></span>
                <span>upload picture</span></div>}

        </div>
    );

    const ImageProps = {
        action: `${process.env.REACT_APP_ROOT_URL}/uploadProfileImage`,
        method: "POST",
        headers: {
            'Authorization': token,
        },
        body: { "file": name },
        onChange: handleChange,
        multiple: false,
        listType: "picture-card",
        className: "avatar-uploader",
        showUploadList: false,


    };


    return (
        <Upload name={name} {...ImageProps} className="questionImages">
            {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100px', height: '80px', objectFit: 'cover' }} /> : uploadButton}
        </Upload>
    )
}

export default Index
