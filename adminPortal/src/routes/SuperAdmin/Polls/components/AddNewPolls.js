import React from 'react'
import { Button } from 'antd';
import { useSelector, useDispatch } from 'react-redux'
import FormModal from "../../../../components/Modal/FormModal";
import IntlMessages from '../../../../util/IntlMessages'
import PollsForm from '../../Polls/components/PollsForm'


const AddNewPolls = ( ) => {
    const dispatch = useDispatch()
    const faqProps = useSelector(state => state.CurdR)
    const { AddPolls_Modal,  Loader } = faqProps
    return (
        <div>
            <Button
            className='gx-pt-0'
                type="primary"
                onClick={() => {
                    dispatch({
                        type: 'Show_Modal',
                        payload: null,
                        ModalName: "AddPolls_Modal"
                    })
                }}
            >
                <IntlMessages id="dp.addNew" />
            </Button>
            <FormModal
                modalTitle={<p className="gx-text-primary"> <IntlMessages id="polls.addModal.addPolls" /> </p>}
                basicButtonTitle="Reset Password"
                submitButtonText={<IntlMessages id="polls.addModal.save" />}
                cancelButtonText={<IntlMessages id="polls.addModal.cancel" />}
                apiMethod="POST"
                addApiName="addPolls"
                addApiRequest="AddRecord"
                apiLoader="StartSpinner"
                ModalName="AddPolls_Modal"
                confirmLoading={Loader}
                ModalType="Hide_Modal"
                visible={AddPolls_Modal ? AddPolls_Modal : false}
                buttonStyleClass="gx-buttonStyleClass"
                isShowButton={false}
                width={600}
                className="doctor-profile-modal"
            >
                <PollsForm />
            </FormModal>
        </div>

    )
}

export default AddNewPolls
