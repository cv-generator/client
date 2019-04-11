Vue.component('registerform', {
    data() {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        register() {
            const { email, password } = this
            axios
                .post(`${serverUrl}/register`, { email, password })
                .then(({ data }) => {
                    swal('Success', data.message, 'success')
                    this.$emit('redirect-to-login')
                })
                .catch((err) => {
                    const { errors } = err.response.data
                    let errorMessages = []
                    for (let key in errors) errorMessages.push(errors[key].message)
                    errorMessages = errorMessages.join('\n')
                    swal("Error!", errorMessages, "error");
                })
        }
    },
    template: `
    <div>
        <form class="form" v-on:submit.prevent="register">
            <center>
            <h3>Register!</h3>
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
                    <button type="submit" class="btn btn-primary">Register!</button>
                </div>
            </div>
        </form>
      </div>`
})