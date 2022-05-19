import { Avatar, Button, Card, CardContent, Chip, Typography } from '@material-ui/core'
import React, { useContext, useEffect, useState } from 'react'
import { getPostById, getPostComments } from '../store/_api'
import ModalComment from '../ModalComment'
import { GlobalContext } from '../store/GlobalContext'
import { ActionsType } from '../store/ActionsType'
import ModalPost from '../ModalPost'

const DetailsContent = ({ id, handleBack }) => {
  const { state, dispatch } = useContext(GlobalContext)
  const [post, setPost] = useState({
    title: '',
    body: ''
  })
  const [comments, setComments] = useState([])
  const [visible, setVisible] = useState(false)
  const [showModalPost, setShowModalPost] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [selectedPost, setSelectedPost] = useState(null)

  useEffect(() => {
    let userData = JSON.parse(localStorage.getItem('authUser'))
    if (userData.role === 'admin') {
      setVisible(true)
    }
  }, [])

  useEffect(() => {
    let mounted = true;
    let data = JSON.parse(localStorage.getItem('data_list'))
    const findPost = data.find(item => item.id === parseFloat(id));
    if (id) {
      if (!data || !findPost || !findPost.comments) {
        getPostById(id)
          .then(items => {
            if (mounted) {
              setPost(items)
            }
          })

        getPostComments(id).then(items => {
          if (mounted) {
            setComments(items)
          }
        })
      } else {
        setPost(findPost)
        setComments(findPost.comments !== undefined || findPost.comments !== null ? findPost.comments : [])
      }
    }
    return () => mounted = false;
  }, [id])
  return (
    <React.Fragment>
      <div className='details-container'>
        <div className='list-body'>
          <Card variant="outlined" className='margin-y-sm cards' >
            <CardContent>
              <div className="list-items margin-x-sm">
                <div className='margin-t-xs margin-r-xs'>
                  <Avatar alt='logo' className='margin-r-xs' />
                </div>
                <div className='margin-t-xs'>
                  <Typography variant="subtitle1" color='textPrimary'>
                    {post.title}
                  </Typography>
                  <Typography variant="body2" color='textSecondary'>
                    {post.body}
                  </Typography>

                  <div className='modal-actions between'>
                    <Button
                      size="small"
                      className="text-small margin-t-xs"
                      onClick={() => {
                        setSelectedPost(post)
                        setShowModal(true)
                      }}
                    >
                      <i className="ri-chat-3-line margin-r-xs align-middle"></i>Comment
                      <Chip size='small' className='margin-l-xs' label={comments.length} />
                    </Button>
                    {visible && <div>
                      <Button
                        size="small"
                        className="text-small margin-t-xs"
                        onClick={() => {
                          setSelectedPost(post)
                          setShowModalPost(true)
                        }}
                      >
                        <i className="ri-pencil-line margin-r-xs align-middle"></i>Edit
                      </Button>
                      <Button
                        size="small"
                        color='secondary'
                        className="text-small margin-t-xs"
                        onClick={(event) => {
                          event.stopPropagation();
                          const newData = state.data_list.filter(itm => itm.id !== parseFloat(id))
                          dispatch({
                            type: ActionsType.UPDATE_POSTS,
                            payload: newData
                          })
                          handleBack()
                        }}
                      >
                        <i className="ri-delete-bin-7-line margin-r-xs align-middle"></i>Remove
                      </Button>
                    </div>}
                  </div>

                  <div className='margin-y-sm'>
                    {comments.map((comment, index) => {
                      return <div className='margin-y-sm' key={index}>
                        <Typography variant="subtitle1" color='textPrimary'>
                          {comment.name}
                        </Typography>
                        <Typography variant="body2" color='textSecondary' className='text-small'>
                          {comment.email}
                        </Typography>
                        <Typography variant="body2" color='textSecondary'>
                          {comment.body}
                        </Typography>
                        {visible && <div className='modal-actions end'>
                          <Button
                            size="small"
                            color='secondary'
                            className="text-small margin-t-xs"
                            onClick={(event) => {
                              event.stopPropagation();
                              const newComments = comments.filter(itm => itm.id !== comment.id)
                              setComments(newComments)

                              const newData = [...state.data_list];
                              const index = newData.findIndex(itm => itm.id === parseFloat(id));
                              const items = newData[index]

                              let newObj = { ...items, comments: newComments }

                              newData.splice(index, 1, { ...items, ...newObj })

                              dispatch({
                                type: ActionsType.UPDATE_POSTS,
                                payload: newData
                              })
                            }}
                          >
                            <i className="ri-delete-bin-7-line margin-r-xs align-middle"></i>Remove comment
                          </Button>
                        </div>}
                      </div>
                    })}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        <ModalPost
          open={showModalPost}
          handleClose={() => {
            setShowModalPost(false)
          }}
          item={selectedPost}
          submit={(payload) => {

            const newData = [...state.data_list];
            const index = newData.findIndex(item => item.id === selectedPost.id);
            const items = newData[index]

            newData.splice(index, 1, { ...items, ...payload })
            setPost(payload)

            dispatch({
              type: ActionsType.UPDATE_POSTS,
              payload: newData
            })
            setShowModalPost(false)
          }}
        />
        <ModalComment
          open={showModal}
          handleClose={() => {
            setShowModal(false)
          }}
          item={selectedPost}
          submit={(payload) => {
            let newComments = [...comments, { ...payload, id: comments.length + 1 }];
            setComments(newComments)

            const newData = [...state.data_list];
            const index = newData.findIndex(item => item.id === selectedPost.id);
            const items = newData[index]

            let newObj = { ...items, comments: newComments }

            newData.splice(index, 1, { ...items, ...newObj })

            dispatch({
              type: ActionsType.UPDATE_POSTS,
              payload: newData
            })
            setShowModal(false)
          }}
        />
      </div>
    </React.Fragment>
  )
}

export default DetailsContent