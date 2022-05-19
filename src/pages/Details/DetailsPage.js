import React from 'react'
import DetailsContent from './DetailsContent'
import GlobalProvider from '../store/GlobalContext'

const DetailsPage = (props) => {
    const handleBack = () => {
        props.history.push('/home')
    }
    return (
        <React.Fragment>
            <GlobalProvider>
                <DetailsContent id={props.match.params.id} handleBack={handleBack} />
            </GlobalProvider>
        </React.Fragment>
    )
}

export default DetailsPage