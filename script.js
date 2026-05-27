function loadPage(page){

    fetch(page)
    .then(Response => Response.text())
    .then(data => {
        document.getElementById("content").innerHTML = data;

    });
}