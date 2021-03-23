export default{
    name: "TheAllUsersComponent",

    template:
    `
        <section class="container"> 
            <div class="row">
                <div class="clo-sm-12">
                  <h1> This is the all users components</h1>
                </div>
            </div>
        </section>
    `,

    created: function(){
        console.log('all users components is ready');
        //fetch every user from the DB -> tbl_user table
    }
}