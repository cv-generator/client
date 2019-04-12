Vue.component('contact-field', {
    props: ['preview'],
    data: function() {
        return {
            contact: "",
            location: "",
            email: ""
        }
    },
    template: `
                    <div class="box">
                        <p class="title text-bold px6">CONTACT</p>
                        <div class="item contact">
                            <ul>
                                <li class="text-darker" v-if="!preview"><i class="fas fa-map-marker-alt"></i> <input style="" type="text" class="position" placeholder="your place" v-model="location"></li>
                                <li class="text-darker" v-if="!preview"><i class="fas fa-phone"></i><input style="" type="text" class="position" placeholder="contact" v-model="contact"></li>
                                <li class="text-darker" v-if="!preview"><i class="far fa-envelope"></i><input style="" type="text" class="position" placeholder="email" v-model="email"></li>
                                <li class="text-darker" v-if="preview && location !== '' "><i class="fas fa-map-marker-alt"></i> {{ location }}</li>
                                <li class="text-darker" v-if="preview && contact !== ''  "><i class="fas fa-phone"></i>{{ contact }}</li>
                                <li class="text-darker" v-if="preview && email !== '' "><i class="far fa-envelope"></i>{{ email }}</li>
                            </ul>
                        </div>
                    </div>
    `
})