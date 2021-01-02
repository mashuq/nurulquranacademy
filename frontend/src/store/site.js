import api from '@/utils/api'
import showdown from 'showdown'

const converter = new showdown.Converter()

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
            api().get("/site").then((response) => {
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
        },
        footer(state){
            try{
                return {
                   column1: converter.makeHtml(state.site.Footer.Column1),
                   column2: converter.makeHtml(state.site.Footer.Column2),
                   column3: converter.makeHtml(state.site.Footer.Column3),
                   facebook: state.site.Footer.Facebook,
                   youtube: state.site.Footer.Youtube,     
                };
            }catch{
                return {};
            }
        }    

    }
}

export default site;