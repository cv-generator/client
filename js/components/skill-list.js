Vue.component('skill-list', {
    props: ['preview'],
    data: function() {
        return {
            skill: "",
            nilai: ""
        }
    },
    template: `
    
        <div>
            <ul>
                <li class="text-darker" v-if="!preview">
                    <input style="" type="text" class="skill" placeholder="skill" v-if="!preview" v-model="skill">
                    <input type="range" v-model="nilai" min="0" max="100">
                    <input type="number" v-model="nilai"  min="0" max="100">
                </li>
                <li class="text-darker" v-if="preview">
                    <div class="skill-name">{{ skill }}</div>
                    <div class="progress-bar" role="progressbar" aria-valuenow="10"
                    aria-valuemin="0" aria-valuemax="100" v-bind:style="{width: nilai + '%'}">
                    </div>
                </li>
            </ul>
        </div>
        
    
    `
})