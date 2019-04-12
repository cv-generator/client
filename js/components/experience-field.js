Vue.component('experience-field', {
    props: ['preview'],
    data: function() {
        return {
            count: 1
        }
    },
    template: `
    <section>
        <p class="title text-bold px6">EXPERIENCE</p>
        <div v-for="exp in count">
            <experience-list v-bind:preview="preview"></experience-list>
        </div>
        <add-remove-button class="item ar-button" v-on:add="count++" v-on:minus="count--" v-if="!preview"></add-remove-button>
    </section>
    `
})