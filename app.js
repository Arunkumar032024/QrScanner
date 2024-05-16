const uploadQr = document.querySelector("label"),
qrInput = document.querySelector("#qr-code");

// async function fetchRequest(formData, file){
//     // sending post request to qr server api with passing form data as body and getting data from it.
//     let response = await fetch("http://api.qrserver.com/v1/read-qr-code/", {method: 'POST', body: formData});
//     console.log(response)

// }

// qrInput.addEventListener("change", e => {
//     let file = e.target.files[0];   // getting user select file
//     if(!file) return;
//     let formData = new formData();  // create a new formData object
//     formData.append('file', file)   // adding select file to formData
//     fetchRequest(formData, file);   // invoke fetchRequest() function to get data
// })


async function fetchRequest(formData, file){
    // sending post request to qr server api with passing form data as body and getting data from it.
    let response = await fetch("http://api.qrserver.com/v1/read-qr-code/", {method: "POST", body: formData});
    console.log(response)

}

qrInput.addEventListener("change", e => {
    let file = e.target.files[0];   // getting user select file
    if(!file) return;
    let formData = new FormData();  // create a new formData object
    // formData.append('file', file)   // adding select file to formData
    fetchRequest(formData, file);   // invoke fetchRequest() function to get data
})