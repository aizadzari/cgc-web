import React from 'react'
import '../App.css'
import ContentPage from './ContentPage'
import GlobalProvider from './store/GlobalContext'

const Home = (props) => {
    const handleGoToNext = (item) => {
        props.history.push({
            pathname: `details/${item.id}`,
        })
    }
    return (
        <React.Fragment>
            <GlobalProvider>
                    <ContentPage
                        handleGoToNext={handleGoToNext}
                    />
            </GlobalProvider>
        </React.Fragment>
    )
}

export default Home