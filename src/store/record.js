import firebase from 'firebase/compat/app'

export default {
  actions: {
    async createRecord({dispatch, commit}, record) {
      try {
        const uid = await dispatch('getUId')
        return await firebase.database().ref(`/users/${uid}/records`).push(record)
      } catch (e) {
        commit('setError', e)
        throw e
      }
    }
  }
}
