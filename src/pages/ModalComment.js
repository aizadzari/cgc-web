import { Button, Modal, TextareaAutosize, Typography } from '@material-ui/core'
import React, { useEffect, useState } from 'react'

const ModalComment = ({ open, handleClose, item, submit }) => {
    const [selected, setSelected] = useState({
        userId: '',
        id: '',
        title: '',
        body: '',
    })
    const [formData, setFormData] = useState({
        body: "",
        email: "",
        id: "",
        name: "",
        postId: "",
    })

    useEffect(() => {
        let userData = JSON.parse(localStorage.getItem('authUser'))
        setSelected({
            userId: item && item.userId ? item.userId : '',
            id: item && item.id ? item.id : '',
            title: item && item.title ? item.title : '',
            body: item && item.body ? item.body : '',
        })
        setFormData({
            body: "",
            email: userData.email,
            id: "",
            name: userData.name,
            postId: item && item.id ? item.id : '',
        })
    }, [item])

    const updateFormData = (field, value) => {
        setFormData(prev => {
            return {
                ...prev,
                [field]: value
            }
        })
    }
    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            className='modal-ui'
        >
            <div className='modal-body'>
                <div>
                    <Typography variant="subtitle1" color='textPrimary'>
                        {selected.title}
                    </Typography>
                    <Typography variant="body2" color='textSecondary'>
                        {selected.body}
                    </Typography>
                </div>
                <div className='form-group'>
                    <TextareaAutosize
                        className='text-area margin-t-sm w-100'
                        aria-label="minimum height"
                        value={formData.body}
                        placeholder={`Comment...`}
                        onChange={(event) => {
                            updateFormData('body', event.target.value)
                        }}
                    />
                </div>
                <div className='modal-actions end margin-y-md'>
                    <Button className='margin-r-xs' onClick={handleClose}>Cancel</Button>
                    <Button
                        variant='contained'
                        color='primary'
                        onClick={(event) => {
                            setSelected({
                                userId: item && item.userId ? item.userId : '',
                                id: item && item.id ? item.id : '',
                                title: item && item.title ? item.title : '',
                                body: item && item.body ? item.body : '',
                            })

                            let userData = JSON.parse(localStorage.getItem('authUser'))
                            setFormData({
                                body: "",
                                email: userData.email,
                                id: "",
                                name: userData.name,
                                postId: item && item.id ? item.id : '',
                            })
                            submit(formData)
                        }}>Submit</Button>
                </div>
            </div>
        </Modal>
    )
}

export default ModalComment