Vue.component('education-list', {
    props: ['preview'],
    data: function() {
        return {
            status: "",
            school: "",
            desc: "",
            from: "",
            until: ""
        }
    },
    template: `
    
        <div class="item">
            <ul>
                <li>
                    <p class="text-bold text-darker" v-if="preview">{{ status }}</p>
                    <input style="" type="text" class="position text-bold" placeholder="status" v-if="!preview" v-model="status">
                    <div v-if="!preview"><input type="number" class="camouflage" name="quantity" min="1900" max="2100" placeholder="from" v-model="from" > - <input type="number" class="camouflage" name="quantity" min="1900" max="2100" placeholder="until" v-model="until" ></div>
                    <p v-if="preview">{{ from }} - {{ until }}</p>
                </li>
            </ul>
            <div>
                <p class="text-bold text-darker" v-if="preview">{{ school }}</p>
                <input style="" type="text" class="position text-bold" placeholder="school" v-if="!preview" v-model="school">
                <p v-if="preview">{{ desc }}</p>
                <div v-if="!preview">
                    <textarea class="detailed" placeholder="description" cols="72" v-model="desc"></textarea>

                </div>
            </div>
        </div>
        
    
    `
})