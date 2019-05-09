import { getExampleData } from '../services';

export default {
    
  state: {
    data: '我是Redux中的数据 from modelPage1.js',
    num: 0
  },

  subscriptions: {
    // 
  },

  effects: {
    *getdata({ payload }, { call, put }) {
      const res = yield call(getExampleData);
      if (res) {
        console.log('请求已完成')
        yield put({
          type: 'save',
          payload
        });
      }

    },
  },

  reducers: {
    save(state, { payload }) {
      return {
        ...state,
        num: payload
      };
    },
  },
}