export default {
    template: `
        <div :class="[showContentContainer ? 'contentContainerShow' : 'contentContainerHide', sendMinorContentStatus ? '' : 'contentContainerShowDouble' ]">
            <div v-for="mChoices in majorChoices" class="majorChoiceContainer">
                <span v-if="mChoices == 'Resume'">                
                    <a href="test" target="_blank" class="majorChoices">{{ mChoices }}</a>
                </span>
                <span v-else>
                    <button @click="chooseMajorChoice(mChoices)" class="majorChoices">{{ mChoices }}</button>
                </span>
            </div>
        </div>
    `,
    props: ['showContentContainer', 'sendMinorContentStatus'],
    data() {
        return {
            majorChoices: {
                    0: 'Finished Projects',
                    1: 'Current Projects',
                    2: 'About Me',
                    3: 'Resume'
            },
            hoverMajorChoice: ''
        }
    },
    // watch: {
    //     'showContentContainer': function() {
    //         if(this.showContentContainer) {
    //             this.outputMajorChoices();
    //         }
    //     }
    // },
    methods: {
        chooseMajorChoice(mChoices) {
            this.$emit('choice', mChoices, 'majorChioce');
        }
    }
}