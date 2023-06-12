const tokenKey = 'jaiToken'
const usernameKey = 'jaiUsername'

export const state = () => ({
  token: localStorage.getItem(tokenKey) || null,
  username: localStorage.getItem(usernameKey) || null,
})

export const getters = {
  GET_TOKEN(state) {
    return state.token
  },
  GET_USERNAME(state) {
    return state.username
  },
}

export const mutations = {
  SET_TOKEN(state, payload) {
    state.token = payload
  },
  SET_USERNAME(state, payload) {
    state.username = payload
  },
}

export const actions = {
  setToken({ commit }, payload) {
    localStorage.setItem(tokenKey, payload)
    commit('SET_TOKEN', payload)
  },
  removeToken({ commit }) {
    localStorage.removeItem(tokenKey)
    commit('SET_TOKEN', null)
  },
  setUsername({ commit }, payload) {
    localStorage.setItem(usernameKey, payload)
    commit('SET_USERNAME', payload)
  },
  removeUsername({ commit }) {
    localStorage.removeItem(usernameKey)
    commit('SET_USERNAME', null)
  },
}
