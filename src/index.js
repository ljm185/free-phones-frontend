document.addEventListener('DOMContentLoaded', () => {
    const freePhoneList = document.querySelector("#free_phone_list");
    let freePhones = [];
    const freePhoneVideo = document.querySelector("#free_phone_video");

    fetch("http://localhost:3000/free_phones")
    .then(response => response.json())
    .then(freePhonesArray => {
      console.log(freePhonesArray);
      freePhones = freePhonesArray;
      freePhones.forEach(freePhone => {
        const freePhoneBullet = document.createElement("li");
        freePhoneBullet.id = freePhone.id;
        freePhoneBullet.innerText = freePhone.description;
        freePhoneList.appendChild(freePhoneBullet);
      })
    });

    document.addEventListener("click", (event) => {
        // debugger
        // console.log(event.target);
        if (event.target.tagName === "LI") {
            console.log("lolnope nice try");
            // debugger
            // console.log(event.target.innerText);
            const foundFreePhone = freePhones.find(freePhone => freePhone.id === parseInt(event.target.id));
            let lastListItem = freePhoneList.lastElementChild;
            while (lastListItem) {
              freePhoneList.removeChild(lastListItem);
              lastListItem = freePhoneList.lastElementChild;
            }
            freePhoneVideo.innerHTML = `<iframe width="560" height="315" src="" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
            const videoCode = foundFreePhone.url.slice(32);
            document.querySelector("iframe").src = "https://www.youtube.com/embed/" + videoCode + "?autoplay=1";
            // debugger
            document.querySelector("title").innerText = "EPIC FAIL!";
        }
    });
});