import { Button, Modal, TextareaAutosize, Typography } from '@material-ui/core'
import React from 'react'

const ModalComment = ({ open, handleClose, selectedItem }) => {
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
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        {selectedItem && selectedItem.title}
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        {selectedItem && selectedItem.body}
                    </Typography>
                </div>
                <div>
                    <TextareaAutosize
                        className='text-area margin-t-sm'
                        aria-label="minimum height"
                        minRows={3}
                        placeholder={`Comment...`}
                    />
                </div>
                <div className='modal-actions margin-y-md'>
                    <Button className='margin-r-xs' onClick={handleClose}>Cancel</Button>
                    <Button variant='contained' color='primary' onClick={handleClose}>Submit</Button>
                </div>
            </div>
        </Modal>
    )
}

export default ModalComment