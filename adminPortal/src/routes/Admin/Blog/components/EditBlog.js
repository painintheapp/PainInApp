import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import FormModal from "components/Modal/EditFormModal";
import IntlMessages from 'util/IntlMessages'
import BlogForm from './BlogForm'

const EditBlog = ({ initialRecord }) => {
    // const dispatch = useDispatch()
    const faqProps = useSelector(state => state.CurdR)
    const { EditBlog_Modal, initialValues,  Loader } = faqProps


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
                modalTitle={<p className="gx-text-primary">{!initialValues ? <IntlMessages id="dp.addModal.newQuestion" /> : <IntlMessages id="blog.addModal.updatepage" />} </p>}
                basicButtonTitle="Reset Password"
                submitButtonText={initialValues === null ? <IntlMessages id="blog.addModal.save" /> : <IntlMessages id="blog.addModal.update" />}
                cancelButtonText={<IntlMessages id="blog.addModal.cancel" />}
                editApiRequest="EditRecord"
                apiLoader="StartSpinner"
                editApiMethod="PUT"
                editApiName="editSpecialist"
                ModalName="EditBlog_Modal"
                confirmLoading={Loader}
                ModalType="Hide_Modal"
                visible={EditBlog_Modal ? EditBlog_Modal : false}
                buttonStyleClass="gx-buttonStyleClass"
                isShowButton={false}
                initialValues={initialValues}
                width={400}
                className="doctor-profile-modal"
            >
               <BlogForm/>
            </FormModal>
        </div>

    )
}

export default EditBlog
