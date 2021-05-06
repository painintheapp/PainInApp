import React from 'react'
import { Button } from 'antd';
import { useSelector, useDispatch } from 'react-redux'
import FormModal from "../../../../components/Modal/FormModal";
import IntlMessages from '../../../../util/IntlMessages'
import CatagoryForm from '../../Catagory/components/CatagoryForm'


const AddNewCatagory = () => {
    const dispatch = useDispatch()
    const faqProps = useSelector(state => state.CurdR)
    const { AddCatagory_Modal, Loader } = faqProps
    return (
        <div>
            <Button
                className='gx-pt-0'
                type="primary"
                onClick={() => {
                    dispatch({
                        type: 'Show_Modal',
                        payload: null,
                        ModalName: "AddCatagory_Modal"
                    })
                }}
            >
                <IntlMessages id="dp.addNew" />
            </Button>
            <FormModal
                modalTitle={<p className="gx-text-primary"> <IntlMessages id="catagory.addModal.catagory" /> </p>}
                basicButtonTitle="Reset Password"
                submitButtonText={<IntlMessages id="dp.addModal.save" />}
                cancelButtonText={<IntlMessages id="dp.addModal.cancel" />}
                apiMethod="POST"
                addApiName="addCatagory"
                addApiRequest="AddRecord"
                apiLoader="StartSpinner"
                ModalName="AddCatagory_Modal"
                confirmLoading={Loader}
                ModalType="Hide_Modal"
                visible={AddCatagory_Modal ? AddCatagory_Modal : false}
                buttonStyleClass="gx-buttonStyleClass"
                isShowButton={false}
                width={600}
                className="doctor-profile-modal"
            >
                <CatagoryForm />
            </FormModal>
        </div>

    )
}

export default AddNewCatagory
