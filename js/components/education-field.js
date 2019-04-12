Vue.component('education-field', {
    props: ['preview'],
    data: function() {
        return {
            count: 1,
            status: "",
            school: "",
            desc: ""
        }
    },
    template: `
    <section>
        <p class="title text-bold px6">EDUCATION</p>
        <div v-for="exp in count">
            <education-list v-bind:preview="preview" ></education-list>
        </div>
        <add-remove-button class="item ar-button" v-on:add="count++" v-on:minus="count--" v-if="!preview" ></add-remove-button>
    </section>
    `
})