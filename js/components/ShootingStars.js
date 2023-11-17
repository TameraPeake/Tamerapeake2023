export default {
    template: `
    
    `,
    data() {
        return {

        }
    },

    created() {
        //create random helper function
        function random(min, max) {
            return min + Math.random() * (max + 1 - min);
        }

        const body = document.querySelector('body');

        for(let i = 0; i < 10; i++) {
            // let xPos = random(0, 100);
            let yPos = random(0, 100);
            const shootingStar = document.createElement('div');
            shootingStar.style.position = 'relative';
            // shootingStar.style.left = xPos + '%';
            shootingStar.style.top = yPos + '%';
            shootingStar.classList.add('shootingStarClass');
            document.body.appendChild(shootingStar);
        }
    }
}