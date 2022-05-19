import { Button, Modal, TextareaAutosize, TextField } from '@material-ui/core'
import React, { useEffect, useState } from 'react'

const ModalPost = ({ open, handleClose, item, submit }) => {
    const [formData, setFormData] = useState({
        userId: '',
        id: '',
        title: '',
        body: '',
    })

    useEffect(() => {
        setFormData({
            userId: item && item.userId ? item.userId : '',
            id: item && item.id ? item.id : '',
            title: item && item.title ? item.title : '',
            body: item && item.body ? item.body : '',
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
                <div className='form-group'>
                    <TextField
                        className='w-100'
                        id="outlined-basic"
                        label="Title"
                        variant="outlined"
                        value={formData.title}
                        onChange={e => {
                            updateFormData('title', e.target.value)
                        }}
                    />
                </div>
                <div className='form-group'>
                    <TextareaAutosize
                        className='text-area margin-t-sm w-100'
                        value={formData.body}
                        onChange={e => {
                            updateFormData('body', e.target.value)
                        }}
                    />
                </div>
                <div className='modal-actions end margin-y-md'>
                    <Button className='margin-r-xs' onClick={handleClose}>Cancel</Button>
                    <Button
                        variant='contained'
                        color='primary'
                        onClick={(event) => {
                            setFormData({
                                userId: item && item.userId ? item.userId : '',
                                id: item && item.id ? item.id : '',
                                title: item && item.title ? item.title : '',
                                body: item && item.body ? item.body : '',
                            })
                            submit(formData)
                        }}>Save</Button>
                </div>
            </div>
        </Modal>
    )
}

export default ModalPost