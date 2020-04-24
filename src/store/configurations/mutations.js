import { CONFIGURATIONS_MUTATIONS, CONFIGURATIONS_STATE } from './consts'

export const mutations = {
  [CONFIGURATIONS_MUTATIONS.SET_CONFIGURATIONS]: (state, list) => {
    state[CONFIGURATIONS_STATE.CONFIGURATIONS] = list
    state[CONFIGURATIONS_STATE.CONFIGURATIONS_LOADED] = !!list
  },
  [CONFIGURATIONS_MUTATIONS.SET_CURRENT_CONFIGURATION]: (state, configuration) => {
    state[CONFIGURATIONS_STATE.CURRENT_CONFIGURATION] = configuration
  }
}
