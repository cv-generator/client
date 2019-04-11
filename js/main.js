const serverUrl = `http://localhost:3000`

let app = new Vue({
    el: '#app',
    data: {
        isLoggedIn: false,
        currentPage: 'homepage'
    },
    created() {
        const token = localStorage.getItem('token')
        if (token) this.verify()
    },
    methods: {
        verify: function () {
            let token = localStorage.getItem('token')
            axios
                .post(`${serverUrl}/verify`, { token }, { headers: { token } })
                .then(({ data }) => {
                    this.isLoggedIn = true
                    console.log(data.message)
                })
                .catch((err) => {
                    const { message } = err.response.data
                    swal("Error!", message, "error");
                    localStorage.removeItem('token')
                    localStorage.removeItem('UserId')
                    localStorage.removeItem('email')
                })
        }
    }
})