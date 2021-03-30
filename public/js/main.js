
import LoginComponent from './components/TheLoginComponent.js';
import AllUsers from './components/TheAllUsersComponent.js';
import HomeComponent from './components/TheHomeComponent.js';

const router = new VueRouter({
    routes:[
        { path : '/', name: 'root', component: LoginComponent },//first to /, and login component
        { path : '/users', name: 'users', component: AllUsers },//after login in success, go user components
        { path : '/home', name: 'home', component: HomeComponent, props:true }//props:ture, allow pass components
    ]
});

(() => {
    const vm = new Vue({
        data: {
            authenticated:false,
            isAdmin:false
        },

        created: function(){

        },

        methods: {
            logout(){
                //remove the cached user from localstorage, if it exists
                if(localStorage.getItem('cacheduser')){
                    localStorage.removeItem('cacheduser');
                }

                this.$router.push({ name:"root"});//user click logout, then back to logincomponents
            }

        },
      
        components:{
            
        },

        router

    }).$mount("#app");

})();