// your API
const apiKey = "";

const submitBtn = document.querySelector("#submitBtn");

const inputElement = document.querySelector("input");
const imgSection = document.querySelector(".imgSection");

const getImages = async () =>{
  const options = {
    method: "POST",
    headers:{
      "Content-Type" : "application/json",
      "Authorization" : `Bearer ${apiKey}`
    },
    body: JSON.stringify({
      prompt : inputElement.value,
      n : 4,
      size : "512x512"
    })
  };
  try{
    const response = await fetch("https://api.openai.com/v1/images/generations" , options);

    const data = await response.json();
    console.log(data);

    data?.data.forEach(imageObject => {
      const imgContainer = document.createElement("div");
      imgContainer.classList.add("imgContainer");
      const imgElement = document.createElement("img");
      imgElement.setAttribute("src", imageObject.url);

      imgContainer.append(imgElement);
      imgSection.append(imgContainer);
    })

  }catch(error){
    console.error(error);
  }
}

submitBtn.addEventListener("click",getImages);
