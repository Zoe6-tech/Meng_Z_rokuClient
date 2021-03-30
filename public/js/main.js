
import LoginComponent from './components/TheLoginComponent.js';
import AllUsers from './components/TheAllUsersComponent.js';

const router = new VueRouter({
    routes:[
        { path : '/', name: 'root', component: LoginComponent },//first to /, and login component
        { path : '/users', name: 'users', component: AllUsers }//after login in success, go user components
    ]
});

(() => {
    const vm = new Vue({
        data: {
            allMovies: []
        },

        created: function(){
            // fetch('/api/movies') // http://localhost:5050/api/movies
            // .then(res => res.json())
            // .then(data => {
            //     //show the data in table form
            //     console.table(data);
            //     this.allMovies = data;
            // })
            // .catch(err => console.error(err));
        },

        methods: {

        },
      
        components:{
            // moviethumb :TheMovieThumb
        },

        router

    }).$mount("#app");

})();