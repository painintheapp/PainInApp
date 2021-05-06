import React from 'react'
import { Modal } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux'

const { confirm } = Modal;
const ROOT_URL = process.env.REACT_APP_ROOT_URL;

const DeleteConfirm = ({ title, content, buttonName, selectedItem, type, apiRequest, Icon, method = 'DELETE', oKText,customBtnClass,btnLabelSize='20px' }) => {


    const dispatch = useDispatch();

    const showDeleteConfirm = () => {
        confirm({
            title: title,
            icon: <QuestionCircleOutlined />,
            content: content,
            okText: oKText || 'Delete',
            okType: 'primary',
            cancelText: 'Cancel',
            confirmLoading: true,

            onOk() {
                return new Promise((resolve, reject) => {
                    const token = localStorage.getItem('token');

                    fetch(`${ROOT_URL}/${type}`, {
                        method: method,
                        headers: new Headers({
                            "Content-Type": "application/json",
                            'Authorization': token,
                            'APIType': "web"
                        }),
                        body: JSON.stringify(selectedItem)
                    }).then((response) => {
                        response.json().then((response) => {
                            dispatch({
                                type: `${apiRequest}_SUCCESS`,
                                payload: response
                            })
                            resolve();
                        })
                    }).catch(err => {
                        dispatch({
                            type: `${apiRequest}_FAILURE`,
                            payload: "Some Error Occur While. Deleting Record"
                        })
                        reject();
                    })

                }).catch(() => {
                    dispatch({
                        type: `${apiRequest}_FAILURE`,
                        payload: "Some Error Occur While. Deleting Record"
                    })
                });

            },
            onCancel() {
            },
        });
    }


    return (<span className={`gx-link gx-pointer deleteButton ${customBtnClass} ` } style={{ fontSize: btnLabelSize }} onClick={showDeleteConfirm} > {Icon ? Icon : buttonName} </span>)
}

export default DeleteConfirm
