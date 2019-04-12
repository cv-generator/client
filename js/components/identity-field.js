Vue.component('identity-field', {
    props: ['preview'],
    data: function() {
        return {
            nama: "",
            profesi: ""
        }
    },
    template: `
    <div class="header px6">
        <figure>
            <img src="https://dummyimage.com/300.png" alt="dummy profile picture">
        </figure>
        <div class="intro">
            <p class="fullname" v-if="preview">{{ nama }}</p>
            <input style="" type="text" class="fullname camouflage" placeholder="fullname" onkeypress="this.style.width = ((this.value.length + 9)* 24) + 'px';" v-model="nama" v-if="!preview">
            <div class="divider"></div>
            <p class="profesi" v-if="preview">{{ profesi }}</p>
            <input style="" type="text" class="profesi camouflage text-bold" placeholder="profesi" onkeypress="this.style.width = ((this.value.length + 4)* 12) + 'px';" v-model="profesi" v-if="!preview">
        </div>
    </div>
    `
})