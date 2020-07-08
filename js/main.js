function makeMeBigger(myelement) {
  var bigcard = myelement.parentNode.parentNode;
  var cardbody = myelement.parentNode;
  var oldspec = cardbody.children[1].innerHTML;

  //   var eElement = bigcard.parentNode; // some E DOM instance
  //   var newFirstElement = bigcard; //element which should be first in E
  //   console.log(bigcard.id);
  //     var closebtn = document.querySelector("#" + bigcard.id + " .close-button");
  //     console.log(bigcard);
  //   if (bigcard.style.width != "100vw") {
  //       bigcard.style.width = "100vw";

  //     eElement.insertBefore(newFirstElement, eElement.firstChild);
  //     closebtn.style.display = "block";
  //   } else {
  //     bigcard.style.width = "20vw";
  //       eElement.insertBefore(newFirstElement, bigcard.nextSibling);
  //       closebtn.style.display = "none";
  //   }
  // }
  var bigimg1 = "res/" + bigcard.id[4] + 1 + ".jpg";
  var bigimg2 = "res/" + bigcard.id[4] + 2 + ".jpg";
  var bigimg3 = "res/" + bigcard.id[4] + 3 + ".jpg";

  var newspecs = `
    - Modèle: 2018 <br />
    - Accessoirs: Sacoche <br />
    -<h4> Prix= 900 Dt</h4><br/>
     <h5>Appelez-nous sur: +216 56 105 842</h5>
    `;
  var nodeToAppend =
    `

    <div class="popup-container">
    
  <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active popup-img">
      <img class="d-block w-100 popup-img" src="` +
    bigimg1 +
    `" alt="First slide">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100 popup-img" src="` +
    bigimg2 +
    `" alt="Second slide">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100 popup-img" src="` +
    bigimg3 +
    `" alt="Third slide">
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
<div class="specs"> <h3>Caractéristiques génerale: </h3>` +
    oldspec +
    newspecs +
    `</div>
   
  </div>
`;
  document.getElementById("fade").innerHTML = nodeToAppend;

  $("#fade").modal({
    fadeDuration: 100,
  });

  //   $("#" + bigcard.id + " .voir-plus-button").click(function () {
  //   });
}
