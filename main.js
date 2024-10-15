let inputForm = document.body.getElementsByClassName("input-form")[0];
let inputBox = document.body.getElementsByClassName("input-box")[0];
let imageContent = document.getElementById("image-content")
let showMorebtn = document.getElementById("show-more")

// https://api.unsplash.com/search/photos?page=1&query=office&client_id=

let asscessKey ="dYMEKm3cR2Mp0kfghmRAgASc3KJl0D-bU9adVcz9SlA";

let keyword = "";
let page = 1;

async function setImage() {
    keyword = inputBox.value;
    let url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${asscessKey}&per_page=12`;

    let response = await fetch(url);
    console.log(response);
    
    let data = await response.json();
    console.log(data);
    

   if (page == 1) {
        imageContent.innerHTML = "";
   }


    let resultsss = data.results;
    console.log(resultsss);
    

    resultsss.forEach((result) => {
              let img = document.createElement("img");
              img.src = result.urls.small;
              let a = document.createElement("a");
              a.href = result.links.html;
              a.appendChild(img);

              imageContent.appendChild(a);
    })

  
    showMorebtn.style.display = "block";


}

inputForm.addEventListener("submit", (e) => {
    e.preventDefault();
    page= 1;
    setImage()
    
})


showMorebtn.addEventListener("click", () =>{
    page++;
    setImage();
})