import { ActionsType } from './ActionsType'

export const Reducer = (state, action) => {
  switch (action.type) {
    case ActionsType.GET_POSTS:
      let data;
      const checkData = localStorage.getItem("data_list");
      if (!checkData) {
        localStorage.setItem("data_list", JSON.stringify(action.payload))
        data = action.payload
      } else {
        data = JSON.parse(localStorage.getItem("data_list"));
      }

      return {
        data_list: data
      }
    case ActionsType.UPDATE_POSTS:
      localStorage.setItem("data_list", JSON.stringify(action.payload));
      return {
        data_list: action.payload
      }
    case ActionsType.REMOVE_POSTS:
      localStorage.setItem("data_list", JSON.stringify(action.payload));
      return {
        data_list: action.payload
      }
    default:
      return {
        data_list: action.payload
      }
  }
}
