import MinorChoice from "./MinorChoice.js";
import AboutMe from "./AboutMe.js";
export default {
    components: { MinorChoice, AboutMe },
    template: `
        <div class="resultContainer">
            <h1>{{ choiceTitle }}</h1>
            <div v-show="hideMinor ">
                <about-me></about-me>
            </div>
            <div v-show="hideMinor == false">
                <div v-show="showMinorChoiceList">
                    <div v-for="minorChoices in returnedMinorChoices">
                        <button @click.prevent="showProject(minorChoices)" class="minorBtns">{{ minorChoices }}</button>
                    </div>
                </div>
                <div v-show="showMinorChoiceList == false">
                    <minor-choice :returnedMinorInfo="returnedMinorInfo" @goBack="goBack"></minor-choice>
                </div>
            </div>
        </div>
    `,
    props: ['choiceResults'],
    data() {
        return {
            choiceTitle: '',
            returnedMinorInfo: [],
            returnedMinorChoices: [],
            fullReturnedMinorChoices: [],
            showMinorChoiceList: true,
            hideMinor: false,
            showAbout: false
        }
    },
    computed: {
        computedObjectToBeWatched() {
            return this.choiceResults
        }
    },
    watch: {
        computedObjectToBeWatched: {
            deep:true,
            handler(newVal, oldVal) {
                if(newVal.length > 0) {
                    this.choiceTitle = newVal[0];

                    if(this.choiceTitle == "About Me") {
                        this.hideMinor = true;
                    }

                    else {
                        this.hideMinor = false;
                    }


                    const requestOptions = {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({newVal})
                    };

                    fetch('../../../classes/input.php', requestOptions)
                        .then(response => response.json())
                        .then(data => {
                            for(var i = 0; i < data.length; i++) {
                                this.returnedMinorChoices.push(data[i]['ProjectName']);
                            }

                            // console.log(data);
                            this.fullReturnedMinorChoices = data;
                        })
                    this.choiceResults.splice(0,2);
                    this.returnedMinorChoices = [];
                }       
            }
        }
    },

    methods: {
        showProject(chosenMinor) {
            for(var x = 0; x < this.fullReturnedMinorChoices.length; x++) {
                if(this.fullReturnedMinorChoices[x]['ProjectName'] == chosenMinor) {
                    this.returnedMinorInfo = this.fullReturnedMinorChoices[x];
                    // console.log(this.returnedMinorInfo);
                }
            }
            this.showMinorChoiceList = false;
            this.showMinorBox();
        },

        showMinorBox() {
            const body = document.querySelector('body');
            document.body.classList.add('removeOverflow');
            this.$emit('minorContentClicked', this.showMinorChoiceList);
        },

        goBack(goBackStatus) {
            this.showMinorChoiceList = true;
            this.$emit("showMainNav", true);
        }
    }
}