import { Avatar, Button, Card, CardContent, Typography } from '@material-ui/core';
import React, { useContext, useEffect, useState } from 'react'
import { GlobalContext } from './store/GlobalContext'

const ContentPage = ({ handleGoToNext }) => {
    const { state } = useContext(GlobalContext)
    const [datalist, setDataList] = useState([])

    useEffect(() => {
        if (state.data_list.length > 0) {
            setDataList(state.data_list)
        }
    }, [state.data_list])

    return (
        <React.Fragment>
            <div className='list-container'>
                <div className='list-body'>
                    {datalist.map((item, index) => {
                        return (
                            <Card
                                key={index}
                                variant="outlined"
                                className='margin-y-sm cards'
                                onClick={(event) => {
                                    event.stopPropagation()
                                    handleGoToNext(item)
                                }}>
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
                                            <div className='modal-actions'>
                                                <Button
                                                    size="small"
                                                    className="text-small margin-t-xs"
                                                    onClick={(event) => {
                                                        event.stopPropagation()
                                                        handleGoToNext(item)
                                                    }}
                                                >
                                                    View <i className="ri-arrow-right-s-line margin-l-xs align-middle"></i>
                                                </Button>
                                            </div>
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