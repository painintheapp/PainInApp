import React from 'react'
import { Button } from 'antd';
import { useSelector, useDispatch } from 'react-redux'
import FormModal from "components/Modal/FormModal";
import IntlMessages from 'util/IntlMessages'
import OccupationForm from './OccupationForm'


const AddNewOccupation = () => {
    const dispatch = useDispatch()
    const faqProps = useSelector(state => state.CurdR)
    const { Add_Exercise_Modal, Loader } = faqProps
    return (
        <div>
            <Button
                className='gx-pt-0'
                type="primary"
                onClick={() => {
                    dispatch({
                        type: 'Show_Modal',
                        payload: null,
                        ModalName: "Add_Exercise_Modal"
                    })
                }}
            >
                <IntlMessages id="dp.addNew" />
            </Button>
            <FormModal
                modalTitle={<p className="gx-text-primary">New Occupation </p>}
                basicButtonTitle="Reset Password"
                submitButtonText={<IntlMessages id="dp.addModal.save" />}
                cancelButtonText={<IntlMessages id="dp.addModal.cancel" />}
                apiMethod="POST"
                addApiName="addOccupation"
                addApiRequest="AddRecord"
                apiLoader="StartSpinner"
                ModalName="Add_Exercise_Modal"
                confirmLoading={Loader}
                ModalType="Hide_Modal"
                visible={Add_Exercise_Modal ? Add_Exercise_Modal : false}
                buttonStyleClass="gx-buttonStyleClass"
                isShowButton={false}
                width={550}
                className="doctor-profile-modal"
            >
                <OccupationForm />
            </FormModal>
        </div>

    )
}

export default AddNewOccupation
