Vue.component('experience-list', {
    props: ['preview'],
    data: function() {
        return {
            office: "",
            position: "",
            desc: "",
            from: "",
            until: ""
        }
    },
    template: `
        <div class="item">
            <ul>
                <li>
                    <p class="text-bold text-darker" v-if="preview">{{ position }}</p>
                    <input style="" type="text" class="position text-bold" placeholder="position" v-if="!preview" v-model="position">
                    <div v-if="!preview"><input type="number" class="camouflage" name="quantity" min="1900" max="2100" placeholder="from" v-model="from" > - <input type="number" class="camouflage" name="quantity" min="1900" max="2100" placeholder="until" v-model="until" ></div>
                    <p v-if="preview">{{ from }} - {{ until }}</p>
                </li>
            </ul>
            <div>
                <p class="text-bold text-darker" v-if="preview">{{ office }}</p>
                <input style="" type="text" class="position text-bold" placeholder="office" v-if="!preview" v-model="office">
                <p v-if="preview">{{ desc }}</p>
                <div v-if="!preview">
                    <textarea class="detailed" placeholder="description" cols="72" v-model="desc"></textarea>

                </div>
            </div>
        </div>

    `
})