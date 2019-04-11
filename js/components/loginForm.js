Vue.component('loginform', {
    data() {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        login() {
            const { email, password } = this
            axios
                .post(`${serverUrl}/login`, { email, password })
                .then(({ data }) => {
                    const { details, token, message } = data
                    const { id, email } = details
                    swal('Success', message, 'success')
                    localStorage.setItem('token', token)
                    localStorage.setItem('UserId', id)
                    localStorage.setItem('email', email)
                    this.$emit('submit')
                    this.$emit('redirect-to-dashboard')
                })
                .catch((err) => {
                    console.log(err)
                    const { message } = err.response.data
                    swal('Error!', message, 'error')
                })

        }
    },
    template: `
      <div>
        <form class="form" v-on:submit.prevent="login">
            <center>
            <h3>Login!</h3>
            </center>
            <div class="form-group row">
                <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
                <div class="col-sm-10">
                    <input v-model="email" type="email" class="form-control" id="inputEmail3" placeholder="Email">
                </div>
            </div>
            <div class="form-group row">
                <label for="inputPassword3" class="col-sm-2 col-form-label">Password</label>
                <div class="col-sm-10">
                    <input v-model="password" type="password" class="form-control" id="inputPassword3" placeholder="Password">
                </div>
            </div>
            <div class="form-group row">
                <div class="col-sm-10">
                    <button type="submit" class="btn btn-primary">Sign in</button>
                </div>
            </div>
        </form>
      </div>`
})