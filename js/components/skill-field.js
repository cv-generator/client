Vue.component('skill-field', {
    props: ['preview'],
    data: function() {
        return {
            count: 1,

        }
    },
    template: `
    <div class="box">
    <p class="title text-bold px6">SKILL</p>
    <div id="skill"   class="item content" >
        <skill-list v-bind:preview="preview" v-for="i in count" ></skill-list>
    </div>
    <add-remove-button class="item ar-button" v-on:add="count++" v-on:minus="count--" v-if="!preview" ></add-remove-button>
</div>

    `
})