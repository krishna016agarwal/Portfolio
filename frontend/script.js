let tablinks = document.getElementsByClassName("tab-links");
let tabcontents = document.getElementsByClassName(" tab-contents");
let a = document.querySelector(".hidedata");
let b = document.querySelector(".button");
let c = document.querySelector("#projects");
let e = document.querySelector(".ppp");
let d = document.querySelector(".pp");
let f = document.querySelector(".group1");
let g = document.querySelector(".fa-angle-up");
let h = document.querySelector("#msg");
let k = document.querySelector(".auto-type");
let v = document.querySelector("#coding");
let x = document.querySelector(".name");
let y = document.querySelector(".email");
let z = document.querySelector(".message");

let form = document.forms["submitform"];

function opentab(tab) {
  for (tablink of tablinks) {
    tablink.classList.remove("active");
  }
  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active");
  }
  event.currentTarget.classList.add("active");
  document.getElementById(tab).classList.add("active");
  if (v.src.match("coding.png")) {
    v.src = "2021-07-19-11.jpg";
  } else {
    v.src = "coding.png";
  }
}
condition = true;
b.addEventListener("click", () => {
  if (condition) {
    c.id = "projects2";
    d.href = "#projects2";
    e.href = "#projects2";
    a.classList.remove("hide");
    b.classList.remove("button");
    b.classList.add("close");
    condition = false;
    b.innerText = "Close";
  } else {
    a.classList.add("hide");
    c.id = "projects";
    d.href = "#projects";
    b.classList.remove("close");
    b.classList.add("button");
    e.href = "#projects";
    condition = true;
    b.innerText = "See More";
  }
});

let calscroll = () => {
  let pos = Math.floor(document.documentElement.scrollTop);
  if (pos > 200) {
    f.classList.remove("hide");
    g.classList.remove("hide");
    f.classList.add("group");
  } else {
    f.classList.remove("group");
    g.classList.add("hide");
  }
};

window.onscroll = calscroll;

var info = {};

form.addEventListener("submit", async (e) => {
  info.name = x.value;
  info.email = y.value;
  info.message = z.value;
  

  e.preventDefault();
  h.innerHTML = "Message sent successfully";

try {
      
  
    const response = await fetch("http://localhost:3000/contact", {
        method: "POST",
        headers:{
          "Content-Type":"application/json"
        },
        body: JSON.stringify(info), 
       
      });
      // console.log(JSON.stringify(info));
  //    console.log(response);
      
} catch (error) {
    console.log("Mern error",error);
    
}

  setTimeout(function () {
    h.innerHTML = "";
  }, 4000);
  form.reset();
});

var typed = new Typed(k, {
  strings: ["Programmer", "Web Developer", "Full Stack Developer"],
  typeSpeed: 150,
  backSpeed: 150,
  looped: true,
});
