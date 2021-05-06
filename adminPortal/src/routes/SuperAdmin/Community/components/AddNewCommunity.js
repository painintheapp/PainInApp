import React from 'react'
import { Button } from 'antd';
import { useSelector, useDispatch } from 'react-redux'
import FormModal from "../../../../components/Modal/FormModal";
import IntlMessages from '../../../../util/IntlMessages'
import CommunityForm from './CommunityForm'


const AddNewCommunity = () => {
    const dispatch = useDispatch()
    const faqProps = useSelector(state => state.CurdR)
    const { AddCoummunity_Modal, Loader } = faqProps

    return (
        <div>
            <Button
                className='gx-pt-0'
                type="primary"
                onClick={() => {
                    dispatch({
                        type: 'Show_Modal',
                        payload: null,
                        ModalName: "AddCoummunity_Modal"
                    })
                }}
            >
                <IntlMessages id="community.addNew" />
            </Button>
            <FormModal
                modalTitle={<p className="gx-text-primary"> <IntlMessages id="community.addModal.community" /> </p>}
                basicButtonTitle="Reset Password"
                submitButtonText={<IntlMessages id="community.addModal.save" />}
                cancelButtonText={<IntlMessages id="community.addModal.cancel" />}
                apiMethod="POST"
                addApiName="addCommunity"
                addApiRequest="AddRecord"
                apiLoader="StartSpinner"
                ModalName="AddCoummunity_Modal"
                confirmLoading={Loader}
                ModalType="Hide_Modal"
                visible={AddCoummunity_Modal ? AddCoummunity_Modal : false}
                buttonStyleClass="gx-buttonStyleClass"
                isShowButton={false}
                width={600}
                className="doctor-profile-modal"
            >
                <CommunityForm />
            </FormModal>
        </div>

    )
}

export default AddNewCommunity
