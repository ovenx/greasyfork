// ==UserScript==
// @name         1libdownload
// @namespace    http://library.lol
// @version      1.0
// @description  add btn to download book from IPFS('http://library.lol/') on 3lib.net
// @author       ovenx
// @include     /^https:\/\/.*\..*1lib\.org\/book.*$/
// @grant        none
// ==/UserScript==

(function () {
  "use strict";

  function findCoverImgUrl() {
    let coverImgUrl = null;
    let coverImg = document.querySelector(".details-book-cover-contaent .z-book-cover.covered>img");
    console.log(coverImg);

    if (coverImg) {
      coverImgUrl = coverImg.src;
    }

    console.log("CoverImgurl", coverImgUrl);
    return coverImgUrl;
  }

  function getBookMD5(coverImgUrl) {
    let bookMD5 = null;
    if (coverImgUrl) {
      bookMD5 = coverImgUrl.split("/").pop().split(".")[0];
    }
    console.log("bookMD5", bookMD5);
    return bookMD5;
  }

  function addbtn2librarydotlol(bookMD5) {
    let bookDeailsBtns = document.querySelectorAll(".book-details-button");
    let saveLaterbtn = bookDeailsBtns[bookDeailsBtns.length - 1];

    if (bookMD5) {
      let btnHTML2add = `<div class="book-details-button" style="margin-left:5px">
    <a class="btn btn-success" href="http://library.lol/main/${bookMD5}" target="_blank" > Download from IPFS </a>
  </div>`;
      saveLaterbtn.insertAdjacentHTML("afterend", btnHTML2add);
    }
  }

  function mainWork() {
    let _coverImgUrl = findCoverImgUrl();
    let _bookMD5 = getBookMD5(_coverImgUrl);
    addbtn2librarydotlol(_bookMD5);
  }

  setTimeout(mainWork, 1000);
})();
