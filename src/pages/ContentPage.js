import { Avatar, Button, Card, CardContent, Typography } from '@material-ui/core';
import React, { useContext, useEffect, useState } from 'react'
import { GlobalContext } from './store/GlobalContext'

const ContentPage = ({ setVisible, handleSelectedItem }) => {
    const {state} = useContext(GlobalContext)
    const [datalist, setDataList] = useState([])

    useEffect(() => {
        if (state.data_list.length > 0) {
            console.log(state.data_list);
            setDataList(state.data_list)
        }
    }, [state.data_list])

    const handleGoToNext = (item) => {
        console.log(item);
    }
    return (
        <React.Fragment>
            <div className='list-container'>
                <div className='list-body'>
                    {datalist.map((item, index) => {
                        return (
                            <Card key={index} variant="outlined" className='margin-y-sm cards' onClick={() => handleGoToNext(item)}>
                                <CardContent>
                                    <div className="list-items margin-x-sm">
                                        <div className='margin-t-xs margin-r-xs'>
                                            <Avatar alt='logo' className='margin-r-xs' />
                                        </div>
                                        <div className='margin-t-xs'>
                                            <Typography variant="subtitle1" color='textPrimary'>
                                                {item.title}
                                            </Typography>
                                            <Typography variant="body2" color='textSecondary'>
                                                {item.body}
                                            </Typography>
                                            <Button
                                                size="small"
                                                onClick={() => {
                                                    handleSelectedItem(item)
                                                    setVisible(true)
                                                }}
                                                className="text-small margin-t-xs"
                                            >
                                                Comment<i className="ri-chat-3-line margin-l-xs align-middle"></i>
                                            </Button>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        )
                    })}
                </div>
            </div>
        </React.Fragment>
    )
}

export default ContentPage