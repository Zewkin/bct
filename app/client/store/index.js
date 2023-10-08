import Vue from 'vue';
import Vuex from 'vuex';

import issues from './modules/issues';
import video from './modules/video';

import config from '../../config';

Vue.use(Vuex);

export function createStore() {
  return new Vuex.Store({
    strict: !config.isProduction,

    modules: {
      issues,
      video
    },
  });
}
