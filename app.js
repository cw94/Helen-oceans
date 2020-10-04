console.log("hi");

let button;
let button2;
let button3;
let picchange1 = ["pic5.jpg", "pic6.jpg", "pic1.jpg"];
let picchange2 = ["pic8.jpg", "pic9.jpg", "pic2.jpg"];
let picchange3 = ["pic11.jpg", "pic12.jpg", "pic3.jpg"];
let textchange = ["Mysterious Undersea World", "An ocean is a body of water that composes much of a planet's hydrosphere. On Earth, an ocean is one of the major conventional divisions of the World Ocean. These are, in descending order by area, the Pacific, Atlantic, Indian, Southern (Antarctic), and Arctic Oceans. The phrases the ocean or the sea used without specification refer to the interconnected body of salt water covering the majority of the Earth's surface.", "As the world ocean is the principal component of Earth's hydrosphere, it is integral to life, forms part of the carbon cycle, and influences climate and weather patterns. The World Ocean is the habitat of 230,000 known species, but because much of it is unexplored, the number of species that exist in the ocean is much larger, possibly over two million. The origin of Earth's oceans is unknown; oceans are thought to have formed in the Hadean eon and may have been the cause for the emergence of life."];
let num1 = 0;
let num2 = 0;
let i = 0;
let ispeed = 1;
button = document.getElementById('button');

button.addEventListener("click", changepic);

function changepic(){
    document.getElementById('img1').src = picchange1[num1];
    document.getElementById('img2').src = picchange2[num1];
    document.getElementById('img3').src = picchange3[num1];
    num1 = (num1+1)%3;
}

button2 = document.getElementById('button2');

button2.addEventListener("click", changeword);

function changeword(){
    document.getElementById('keyword').innerText = textchange[num2];
    num2 = (num2+1)%3;
}

window.addEventListener('load', function(){
    console.log('page is loaded');
    fetch("ocean.json")
    .then(Response => Response.json())
    .then(data => {
        console.log(data);
        let nameelement = document.getElementById('ocean_name');
        button3 = document.getElementById('button3');
        
        button3.addEventListener("click", function(){
            if(i<5 && i>=0){
                nameelement.innerHTML = data.oceans[i].name;
            } else {
                ispeed *= -1;
                i += (ispeed * 2); 
                nameelement.innerHTML = data.oceans[i].name;
            }
            i += ispeed; 

        });      
    })

    
})