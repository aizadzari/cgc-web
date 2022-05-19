import React from 'react'
import DetailsContent from './DetailsContent'
import GlobalProvider from '../store/GlobalContext'
import { Button } from '@material-ui/core'

const DetailsPage = (props) => {
    const handleBack = () => {
        props.history.push('/home')
    }
    return (
        <React.Fragment>
            <GlobalProvider>
                <Button onClick={() => handleBack()}>Back</Button>
                <DetailsContent id={props.match.params.id} handleBack={handleBack} />
            </GlobalProvider>
        </React.Fragment>
    )
}

export default DetailsPage