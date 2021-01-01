import { createStore } from 'vuex'
import home from './home';
import site from './site';

export default createStore({
  modules: {
    home: home,
    site: site,
  }
})
