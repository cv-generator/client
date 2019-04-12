const serverUrl = `http://localhost:3000`

let app = new Vue({
    el: '#app',
    data: {
        isLoggedIn: false,
        currentPage: 'homepage',
        preview: false,
        cv_url: ''
    },
    created() {
        const token = localStorage.getItem('token')
        if (token) this.verify()
    },
    methods: {
        publish: function() {
            let scripts = Array.prototype.map.call(
                document.getElementsByTagName('script'),
                script => script.outerHTML
            ).join('')

            let body = '<body>' +
                (document.getElementsByClassName('page')[0]).outerHTML +
                scripts +
                '<\/body>'

            // Stylesheet string
            let head = '<head><style>' +
                Array.prototype.map.call(
                    document.styleSheets,
                    stylesheet => Array.prototype.map.call(
                        stylesheet.cssRules,
                        rule => rule.cssText
                    ).join('')
                ).join('') +
                '<\/style><\/head>'

            axios.post('https://selectpdf.com/api2/convert/', {
                    key: '3f4dcbc8-da33-49b2-946d-35d4273e4eb5',
                    html: head + body // string to print into pdf
                }, {
                    "Content-Type": "application/json",
                    responseType: "arraybuffer"
                })
                .then(({ data }) => {
                    let pdf = new Blob([data], { type: 'application/pdf' })

                    // pdf file url
                    let pdfFileURL = window.URL.createObjectURL(pdf);
                    let formData = new FormData()
                    formData.append('file', pdf)

                    axios.post('http://localhost:3000/upload', formData, {
                            headers: {
                                'Content-Type': 'multipart/form-data',
                                token: localStorage.getItem('token')
                            }
                        })
                        .then(({ data }) => {
                            this.cv_url = data.url
                            let a = document.createElement("a");
                            document.body.appendChild(a);
                            a.style = "display: none";
                            a.setAttribute('target', '_blank')
                            a.href = data.url;
                            a.download = data.file;
                            a.click();
                        })
                        .catch(err => console.log(err))
                })
                .catch(err => console.log(err))
        },
        verify: function() {
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



        },
        previewToggle() {
            this.preview = !this.preview;
        }
    }

})