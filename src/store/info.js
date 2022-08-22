import firebase from 'firebase/compat/app'

export default {
  state: {
    info: {}
  },
  mutations: {
    setInfo(state, info) {
      state.info = info
    },
    clearInfo(state) {
      state.info = {}
    }
  },
  actions: {
    async fetchInfo({dispatch, commit}) {
      try {
        const uid = await dispatch('getUId')
        const info = (await firebase.database().ref(`/users/${uid}/info`).once('value')).val()
        commit('setInfo', info)
      } catch (e) {
        commit('setError', e)
        throw e
      }
    },
    // 1-14
    async updateInfo({dispatch, commit, getters}, toUpdate) {
      try {
        const uid = await dispatch('getUId')
        const updateData = {...getters.info, ...toUpdate}
        await firebase.database().ref(`/users/${uid}/info`).update(updateData)
        commit('setInfo', updateData)
      } catch (e) {
        commit('setError', e)
        throw e
      }
    }
  },
  getters: {
    info: s => s.info
  }
}
