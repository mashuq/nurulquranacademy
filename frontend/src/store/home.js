import api from '@/utils/api'

const home = {
    namespaced: true,

    state() {
        return {
            home: {}
        }
    },
    mutations: {
        saveHome(state, home) {
            state.home = home;
        }
    },
    actions: {
        loadHome(context) {
            api().get("/home").then((response) => {
                context.commit("saveHome", response.data)
            })
        }
    },
    getters: {
        slider(state) {
            try {
                return {
                    topBackgroundImage: `${process.env.VUE_APP_API_URL}${state.home.TopBackgroundImage.url}`,
                    headline: state.home.Headline,
                    siteDescription: state.home.SiteDescription,
                }
            } catch {
                return {
                    topBackgroundImage: "",
                    headline: "",
                    siteDescription: "",
                }
            }
        },
        mainTeacher(state) {
            try {
                return {
                    profilePicture: `${process.env.VUE_APP_API_URL}${state.home.MainTeacher.ProfilePicture.url}`,
                    name: state.home.MainTeacher.Name,
                    bio: state.home.MainTeacher.Bio,
                }
            } catch {
                return {
                    profilePicture: "",
                    name: "",
                    bio: "",
                }
            }
        },
        supportingTeachers(state) {
            try {
                let list = state.home.SupportingTeachers.map(st => {return {name : st.Name, education : st.Education, id : st._id, gender : st.Gender}})
                return list
            } catch {
                return []
            }
        },
        testimonials(state) {
            try {
                console.log("here")
                let list = state.home.Testimonials.map(st => {return {name : st.Name, course : st.Course, id : st._id, gender : st.Gender, testimonial : st.Testimonial}})
                console.log(list)
                return list
            } catch(ex) {
                console.log(ex)
                return []
            }
        },


    }
}

export default home;