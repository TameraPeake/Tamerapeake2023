
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

        //setup background of canvas 
        const body = document.querySelector('body');
        const canvasSize = body.offsetWidth * body.offsetHeight;
        const starsFraction = canvasSize / 2000;

        //create each star using a random x and y axis as well as size
        for(let i = 0; i < starsFraction; i++) {
            // Set up random elements
            let xPos = random(0, 100);
            let yPos = random(0, 100);
            let alpha = random(0.5, 1); //am alpha below 0.5 will make it hard to see
            let size = random(1, 2);
            let colour = '#ffffff';

            //add the stars to the body
            const star = document.createElement('div');
            if(i % 5 !== 0 && i % 7 === 0 && i % 9 !== 0) {
                star.classList.add('sevenStarShine'); //I added this line of code to add the periodic shine to the stars
            }
            
            if(i % 5 === 0 && i % 7 !== 0 && i % 9 !== 0) {
                star.classList.add('fiveStarShine');
            }

            if(i % 5 !== 0 && i % 7 !== 0 && i % 9 === 0) {
                star.classList.add('nineStarShine'); //I added this line of code to add the periodic shine to the stars
            }

            if(i % 2 ===0 && i % 4 !== 0) {
                star.classList.add('twoStarShine');
            }
            star.classList.add('starImg');
            star.style.position = 'relative';
            star.style.left = xPos + '%';
            star.style.top = yPos + '%';
            // star.style.opacity = alpha;
            star.style.width = size + 'px';
            star.style.height = size + 'px';
            star.style.backgroundColor = colour;
            document.body.appendChild(star);
        }
    }

}

//I tried using a variety of different tactics to create a stary sky. I tried to create a photoshop image and then tried to loop through the 
//image after multple sized copies of that image were outputted onto the page after load. 
//I just couldn't get past the hook cycle. the page always loaded before any of my functions could load
//Instead I stumbled on this tutorial found at https://dev.to/nicm42/creating-stars-using-javascript-46ca
//The idea they had was to append the stars directly to the page body which seemed to avoid the issue with paging loading
//they also created the stars in the actual javascript and instead of copying them onto the dom
//which should avoid slower page speeds 