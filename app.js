const uploadQr = document.querySelector("label"),
qrInput = document.querySelector("#qr-code"),
para = document.querySelector("#para"),
resultBox = document.querySelector(".result-box"),
resultBoxPara = document.querySelector(".result-box p"),
copyBtn = document.querySelector(".copy-btn"),
linkBtn = document.querySelector(".link-btn"),
toastNotification = document.querySelector(".toast-notification");


async function fetchRequest(formData){
    para.innerText = "Scanning the QR code...";
    // sending post request to qr server api with passing form data as body and getting data from it.
    let response = await fetch("http://api.qrserver.com/v1/read-qr-code/", {method: "POST", body: formData});
    let result = await response.json();
    let content = result[0].symbol[0].data;
    console.log(content)
    if(content){
        para.innerText = "Upload QR code to Scan";
        resultBox.classList.remove("hide");
        resultBoxPara.innerText = content;
        // uploadQr.classList.add("pointer-none");
        if(content.startsWith("http")){
            linkBtn.classList.remove("hide");
        }else{
            linkBtn.classList.add("hide");
        }
    }else{
        para.innerText = result[0].symbol[0].error;
    }
}

qrInput.addEventListener("change", e => {
    resultBox.classList.add("hide");
    let file = e.target.files[0];   // getting user select file
    if(!file) return;
    let formData = new FormData();  // create a new formData object
    formData.append('file', file)   // adding select file to formData
    fetchRequest(formData);   // invoke fetchRequest() function to get data
})


copyBtn.addEventListener("click", ()=>{
    navigator.clipboard.writeText(resultBoxPara.innerText);
    toastNotification.classList.remove("hide");
    setTimeout(() => {
        toastNotification.classList.add("hide");
    }, 2000);
})

linkBtn.addEventListener("click", ()=>{
    window.open(resultBoxPara.innerText, '_blank')
})

