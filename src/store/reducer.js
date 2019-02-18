//纯函数： 不改输入，输出可控，必输出
//reducer : 业务逻辑，拷贝并更新后的state+返回，负责获取state
import * as types from './types'
const reducer = (state,{type,payload}) => {
  switch (type) {
    case types.VIEW_NAV:
      return {
        ...state,
        bNav:payload
      };

    case types.VIEW_FOOT:
      return {
        ...state,
        bFoot:payload
      };

    case types.VIEW_LOADING:
      return {
        ...state,
        bLoading:payload
      };

    case types.UPDATE_LIST:
      return {
        ...state,
        list:payload
      };

    case types.UPDATE_FOLLOW:
      return {
        ...state,
        follow:payload
      };

    case types.UPDATE_DETAIL:
      console.log('reducer',payload);
      return {
        ...state,
        detail:payload.data[payload.id-1]
      };

    case types.CHECK_USER:
      return {
        ...state,
        user:payload
      };


    default:
      return state
  }
};

export default  reducer;