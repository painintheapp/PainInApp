import React from 'react'
import QuestionaireModal from 'components/Auth/Checkout/components/QuestionaireModal'
import bgImage from 'assets/images/nurse-bg.png'
const QuestionsModal = () => {

    return (
            <div >
                    <img src={bgImage} alt="" style={{height : '100vh', width:'100%', objectFit : 'cover'}}/>
                <QuestionaireModal />
            </div>
           
        
    )
}

export default QuestionsModal
