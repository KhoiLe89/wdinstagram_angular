"use strict";

let theOfficeCast =[
  {name: "Michael Scott", title: "Supervisor", photo_url: "http://az616578.vo.msecnd.net/files/2015/08/24/6357600113572837231773916132_michael-scott-s-top-tantrums.png"},
  {name: "Dwight Schrute", title: "Salesman", photo_url: "https://img.buzzfeed.com/buzzfeed-static/static/2015-12/16/11/campaign_images/webdr15/33-dwight-schrute-jokes-that-still-make-you-laugh-2-11189-1450281904-8_dblbig.jpg"},
  {name: "Toby Flenderson", title: "HR Rep", photo_url: "https://lh3.googleusercontent.com/-Xx3ekrHllIU/AAAAAAAAAAI/AAAAAAAAABU/62LVGMcOaqI/photo.jpg"}
]

// (function(){
//   angular.module("wdinstagram", [
//
//   ])
// })();

angular
  .module("wdinstagramApp", [])
  .controller("WdinstagramController", [ WdinstagramControllerFunction])

  function WdinstagramControllerFunction (){
    this.characters = theOfficeCast
  }
