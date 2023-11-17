export default {
    template: `
        <div class="outProjectContainer">
            <div class="projectSide">
                <p>Click image for large view
                    <a :href="chosenImg" target="_blank">
                        <img :src="chosenImg" class="projectImg">
                    </a>
                </p>
                <div class="miniImgContainer">
                    <div v-for="images in imageArry">
                        <button @click="chooseImg(images)">
                            <img :src="images" class="projectMiniImg">
                        </button>
                    </div>
                </div>
            </div>
            <div class="projectSide">
                <h2>
                    {{ newInfo.ProjectName }}
                </h2>
                <h3>Tags: {{ newInfo.Tags }}</h3>
                <p>{{ newInfo.ProjectDescription }}</p>
                <p class="projectLinks" v-show="newInfo.GithubStatus == '1'">
                    <a :href="newInfo.GithubLink" target="_blank">{{ newInfo.GithubLink}}</a>
                </p>
                <p class="projectLinks">
                <a :href="newInfo.Sitelink" target="_blank">{{ newInfo.Sitelink }}</a>
            </p>
            </div>
            <div>
                <button @click="goBack">Go Back</button>
            </div>
        </div>
    `,
    props: ['returnedMinorInfo'],
    data() {
        return {
            newInfo: [],
            imageArry: [],
            chosenImg: ""
        }
    },
    computed: {
        computedObjectToBeWatched() {
            return this.returnedMinorInfo
        }
    },
    watch: {
        computedObjectToBeWatched: {
            deep:true,
            handler(newVal, oldVal) {
                this.newInfo = newVal;
                this.chosenImg = this.newInfo['Image1'];
                for(var i = 1; i < 6; i++) {
                    var imgName = "Image" + i;
                    if(this.newInfo[imgName] !== null) {
                        this.imageArry.push(this.newInfo[imgName]);
                    }
                }  
            }
        }
    },
    methods: {
        chooseImg(chosenImage) {
            this.chosenImg = chosenImage;
        },
        goBack() {
            this.newInfo = [];
            this.imageArry = [];
            this.$emit('goBack', true);
        }
    }
}