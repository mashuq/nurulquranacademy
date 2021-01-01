import Api from '@/utils/Api'

const site = {
    namespaced: true,

    state() {
        return {
            site: {}
        }
    },
    mutations: {
        saveSite(state, site){
            state.site = site;
        }
    },
    actions: {
        loadSite(context) {
            Api().get("/site").then((response) => {
                context.commit("saveSite", response.data)
            })
        }
    },
    getters: {
        logo(state){
            try{
                return `${process.env.VUE_APP_API_URL}${state.site.Logo.url}`;
            }catch{
                return "";
            }
        }
    }
}

export default site;