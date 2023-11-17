import ResumeContainer from "./components/ResumeContainer.js";
import Stars from "./components/Stars.js";
import ShootingStars from "./components/ShootingStars.js";
export default {
    components: { ResumeContainer, Stars, ShootingStars },

    template: `
        <stars></stars>
        <resume-container></resume-container>
    `
}