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
                    <li class="nav-item active">
                        <a class="nav-link" href="#" v-on:click="getHomePage">Home <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item" v-if="!isLoggedIn">
                        <a class="nav-link" href="#" v-on:click="getRegisterPage">Register</a>
                    </li>
                    <li class="nav-item" v-if="!isLoggedIn">
                        <a class="nav-link" href="#" v-on:click="getLoginPage">Login</a>
                    </li>
                    <li class="nav-item" v-if="isLoggedIn" v-on:click="logout">
                        <a class="nav-link" href="#">Logout</a>
                    </li>
                </ul>
            </div>
        </nav>
    `
})