$.getJSON("pups.json", function(pup) {
    let html = '';
    $.each(pup, function(i, dog) {
        html += ``
    });
    $(".grid-container").append(html);
});


//         html += `<div class="container">
//         <div class="image-container">
//             <img src=${dog.image}>
//         </div>
//         <h2>${dog.name}</h2>
//         <p>${dog.caption}</p>
//         </div>`
//     });