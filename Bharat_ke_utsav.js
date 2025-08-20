//mens
const mens = document.getElementsByClassName("men")[1];
const mens1 = document.getElementsByClassName("men")[2];
const mens2 = document.getElementsByClassName("men")[3];
const mens3 = document.getElementsByClassName("men")[4];
const mens4 = document.getElementsByClassName("men")[5];
const mens5 = document.getElementsByClassName("men")[6];
//womens
const women1 = document.getElementsByClassName("women")[1];
const women2 = document.getElementsByClassName("women")[2];
const women3 = document.getElementsByClassName("women")[3];
const women4 = document.getElementsByClassName("women")[4];
const women5 = document.getElementsByClassName("women")[5];
const women6 = document.getElementsByClassName("women")[6];

//per men id(p tag)
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");

// per women id(p tag)
const w1 = document.getElementById("w1");
const w2 = document.getElementById("w2");
const w3 = document.getElementById("w3");
const w4 = document.getElementById("w4");
const w5 = document.getElementById("w5");
const w6 = document.getElementById("w6");



console.log(mens);
//one
mens.addEventListener("mouseover",()=>{
        one.style.display = "block";
});
mens.addEventListener("mouseout",()=>{
    one.style.display = "none";
});

//two
mens1.addEventListener("mouseover",()=>{
    two.style.display = "block";
})
mens1.addEventListener("mouseout",()=>{
    two.style.display = "none";
});

//three

mens2.addEventListener("mouseover",()=>{
    three.style.display = "block";
})
mens2.addEventListener("mouseout",()=>{
    three.style.display = "none";
});

//four
mens3.addEventListener("mouseover",()=>{
    four.style.display = "block";
})
mens3.addEventListener("mouseout",()=>{
    four.style.display = "none";
});

//five
mens4.addEventListener("mouseover",()=>{
    five.style.display = "block";
})
mens4.addEventListener("mouseout",()=>{
    five.style.display = "none";
});

//six
mens5.addEventListener("mouseover",()=>{
    six.style.display = "block";
})
mens5.addEventListener("mouseout",()=>{
    six.style.display = "none";
});


// women events

women1.addEventListener("mouseover",()=>{
    w1.style.display = "block";
})
women1.addEventListener("mouseout",()=>{
    w1.style.display = "none";
})

women2.addEventListener("mouseover",()=>{
    w2.style.display = "block";
})
women2.addEventListener("mouseout",()=>{
    w2.style.display = "none";
})

women3.addEventListener("mouseover",()=>{
    w3.style.display = "block";
})
women3.addEventListener("mouseout",()=>{
    w3.style.display = "none";
})

women4.addEventListener("mouseover",()=>{
    w4.style.display = "block";
})
women4.addEventListener("mouseout",()=>{
    w4.style.display = "none";
})
women5.addEventListener("mouseover",()=>{
    w5.style.display = "block";
})
women5.addEventListener("mouseout",()=>{
    w5.style.display = "none";
})
women6.addEventListener("mouseover",()=>{
    w6.style.display = "block";
})
women6.addEventListener("mouseout",()=>{
    w6.style.display = "none";
})


const sidemenu = document.getElementsByClassName("sidemenu")[0];
const cancelicon = document.getElementById("cancelicon");
const hamicon = document.getElementById("hamicon");
hamicon.addEventListener("click",function(){

    if(getComputedStyle(sidemenu).width === "0px"){
        sidemenu.style.width = "300px";
    }
        
    });

cancelicon.addEventListener("click",function(){
    if(sidemenu.style.width === "300px"){
        sidemenu.style.width = "0px";
    }
})    
   
    






