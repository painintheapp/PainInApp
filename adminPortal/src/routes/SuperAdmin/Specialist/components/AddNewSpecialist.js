import React, { useState } from 'react'
import { Button } from 'antd';
import { useSelector, useDispatch } from 'react-redux'
import FormModal from "../../../../components/Modal/FormModal";
import IntlMessages from '../../../../util/IntlMessages'
import SpecialistForm from './SpecialistForm'


const AddNewQuestion = () => {
    const [photoList, setPhotoState] = useState({
        imageUrl: '',
        loading: false
    }
    )


    const dispatch = useDispatch()
    const faqProps = useSelector(state => state.CurdR)
    const { AddSpecialist_Modal, Loader } = faqProps




    return (
        <div>
            <Button
                className='gx-pt-0'
                type="primary"
                onClick={() => {
                    dispatch({
                        type: 'Show_Modal',
                        payload: null,
                        ModalName: "AddSpecialist_Modal"
                    })
                }}
            >
                <IntlMessages id="dp.addNew" />
            </Button>
            <FormModal
                modalTitle={<p className="gx-text-primary"> <IntlMessages id="dp.addModal.updateQuestion" /> </p>}
                basicButtonTitle="Reset Password"
                submitButtonText={<IntlMessages id="dp.addModal.save" />}
                cancelButtonText={<IntlMessages id="dp.addModal.cancel" />}
                apiMethod="POST"
                addApiName="addSpecialist"
                addApiRequest="AddRecord"
                apiLoader="StartSpinner"
                ModalName="AddSpecialist_Modal"
                confirmLoading={Loader}
                ModalType="Hide_Modal"
                visible={AddSpecialist_Modal ? AddSpecialist_Modal : false}
                buttonStyleClass="gx-buttonStyleClass"
                isShowButton={false}
                extraFieldName="profileImageUrl"
                extraFieldValue={photoList.imageUrl}
                width={800}
                className="doctor-profile-modal"
            >
                <SpecialistForm photoList={photoList} setPhotoState={setPhotoState} />
            </FormModal>
        </div>

    )
}

export default AddNewQuestion
