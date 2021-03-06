Vue.component('navbar', {
    props: ['isLoggedIn', 'currentPage'],
    data: function () {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        logout: function () {
            swal('Success!', 'Bye!', 'success')
            this.$emit('logout')
            this.$emit('get-home-page')
            localStorage.removeItem('UserId')
            localStorage.removeItem('token')
            localStorage.removeItem('email')
        },
        getHomePage() {
            this.$emit('get-home-page')
        },
        getLoginPage() {
            this.$emit('get-login-page')
        },
        getRegisterPage() {
            this.$emit('get-register-page')
        },
        getDashboardPage() {
            this.$emit('get-dashboard-page')
        }
    },
    template: `
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">CV Generator</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" href="#" v-on:click="getHomePage">Home</a>
                    </li>
                    <li class="nav-item" v-if="!isLoggedIn">
                        <a class="nav-link" href="#" v-on:click="getRegisterPage">Register</a>
                    </li>
                    <li class="nav-item" v-if="!isLoggedIn">
                        <a class="nav-link" href="#" v-on:click="getLoginPage">Login</a>
                    </li>
                    <li class="nav-item" v-if="isLoggedIn">
                        <a class="nav-link" href="#" v-on:click="getDashboardPage">Create</a>
                    </li>
                    <li class="nav-item" v-if="isLoggedIn" v-on:click="logout">
                        <a class="nav-link" href="#">Logout</a>
                    </li>
                    <li>
                    <a v-if="isLoggedIn" href="javascript:fbshareCurrentPage()" target="_blank" alt="Share on Facebook"><img
                        src="https://assets.cobaltnitra.com/teams/repository/export/685/994e08a161005809f00505692530e/685994e08a161005809f00505692530e.png"
                        style="width: 30px;" alt="" /></a>
                    </li>
                </ul>
            </div>
        </nav>`
})