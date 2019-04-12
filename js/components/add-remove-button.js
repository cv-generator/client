Vue.component('add-remove-button', {
    props: ['count'],
    data: function() {
        return {}
    },
    template: `
        <div>
            <button type="button" v-on:click="$emit('add')">Add field</button>
            <button type="button" v-on:click="$emit('minus')">Remove field</button>
        </div>
    `
})