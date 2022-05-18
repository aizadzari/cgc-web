import React from 'react'
import { ActionsType } from './ActionsType'

export const Reducer = (state, action) => {
  switch (action.type) {
    case ActionsType.GET_POSTS:
      return {
        data_list: action.payload
      }
  }
}
