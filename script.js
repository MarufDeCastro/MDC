function loadPage(page){

    fetch(page)
    .then(Response => Response.texy())
    .then(data => {
        document.getElementById("content").innerHTML = data;

    });
}