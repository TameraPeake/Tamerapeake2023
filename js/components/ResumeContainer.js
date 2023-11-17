import Welcome from "./Welcome.js";
import ContentSection from "./content/ContentSection.js";
import GrabChoice from "./content/GrabChoice.js";
export default {
    components: { Welcome, ContentSection, GrabChoice },
    template: `
            <div v-show="choiceMade">
                <grab-choice @showMainNav="showMainNav" @minorContentClicked="minorContentClicked" :choiceResults="choiceResults"></grab-choice>
            </div>
            <div v-if="choiceMade == false">
                <welcome></welcome>
            </div>

            <div :class="(goToContentStatus) ? 'moveBtnLeft' : 'moveBtnDown'">
                <button @click.prevent="goToContent" :class="(goToContentStatus) ? 'goToContentBtnTrue' : 'goToContentBtnFalse'"></button>
            </div>
        
            <content-section @choice="choice" :method="startMajorChoices" :showContentContainer="goToContentStatus" :sendMinorContentStatus="sendMinorContentStatus"></content-section>
    `,
    data() {
        return {
            goToContentStatus: false,
            choiceMade: false,
            choiceName: '',
            choiceType: '',
            choiceResults: [],
            sendMinorContentStatus: true
        }
    },
    methods: {
        goToContent() {
            this.goToContentStatus = true;
        },

        startMajorChoices() {
            return (this.goToContentStatus ? true : false);
        },

        choice(chName, chType) {
            this.choiceName = chName;
            this.choiceResults.push(this.choiceName);
            this.choiceType = chType;
            this.choiceResults.push(this.choiceType);
            this.choiceMade = true;
        },
        minorContentClicked(minorClicked) {
            this.sendMinorContentStatus = minorClicked;
        },

        showMainNav(mainNavStatus) {
            this.sendMinorContentStatus = mainNavStatus;
            console.log(mainNavStatus);
        }

        // clearChoiceArray(clearChoiceArray) {
        //     if(clearChoiceArray) {
        //         this.choiceResults = [];
        //     }
        // }
    }
}