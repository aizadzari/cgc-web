import React, { useState } from 'react'
import '../App.css'
import ContentPage from './ContentPage'
import Navbar from './TopNav/Navbar'
import GlobalProvider from './store/GlobalContext'
import ModalComment from './ModalComment'

const Home = () => {
    const [visible, setVisible] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null)

    const handlelogout = () => {

    }
    return (
        <React.Fragment>
            <GlobalProvider>
                    <Navbar
                        logout={handlelogout}
                    />
                    <ContentPage
                        setVisible={setVisible}
                        handleSelectedItem={(value) => {
                            setSelectedItem(value)
                        }}
                    />
                    <ModalComment
                        open={visible}
                        handleClose={() => setVisible(false)}
                        selectedItem={selectedItem}
                    />
            </GlobalProvider>
        </React.Fragment>
    )
}

export default Home