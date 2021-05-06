import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import FormModal from "components/Modal/EditFormModal";
import IntlMessages from 'util/IntlMessages'
import CategoryForm from './CategoryForm'

const AddNewQuestion = ({ initialRecord }) => {
    // const dispatch = useDispatch()
    const faqProps = useSelector(state => state.CurdR)
    const { EditCategory_Modal, initialValues,  Loader } = faqProps

    console.log('=============initialValues=========',initialValues)
    let initialState = {
        loading: false,
        imageUrl: '',
    }
    const [photoList, setPhotoState] = useState(initialState)
    console.log("photoList",photoList)

    const fetchTeamUsers = () => {
        setPhotoState({
            loading: false,
            imageUrl: initialValues && initialValues.profileImageUrl,
        })
    }
    useEffect(fetchTeamUsers, [initialValues])


    return (
        <div>
            
            <FormModal
                modalTitle={<p className="gx-text-primary">{!initialValues ? <IntlMessages id="dp.addModal.newQuestion" /> : <IntlMessages id="catagory.addModal.catagory" />} </p>}
                basicButtonTitle="Reset Password"
                submitButtonText={initialValues === null ? <IntlMessages id="catagory.addModal.save" /> : <IntlMessages id="catagory.addModal.update" />}
                cancelButtonText={<IntlMessages id="dp.addModal.cancel" />}
                editApiRequest="EditRecord"
                apiLoader="StartSpinner"
                editApiMethod="PUT"
                editApiName="editExerciseCategory"
                ModalName="EditCategory_Modal"
                confirmLoading={Loader}
                ModalType="Hide_Modal"
                visible={EditCategory_Modal ? EditCategory_Modal : false}
                buttonStyleClass="gx-buttonStyleClass"
                isShowButton={false}
                initialValues={initialValues}
                width={400}
                className="doctor-profile-modal"
            >
               <CategoryForm/>
            </FormModal>
        </div>

    )
}

export default AddNewQuestion
