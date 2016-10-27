"use strict";

let grams =[
  {author: "Michael Scott", body: "Supervisor", photo_url: "http://az616578.vo.msecnd.net/files/2015/08/24/6357600113572837231773916132_michael-scott-s-top-tantrums.png"},
  {author: "Dwight Schrute", body: "Salesman", photo_url: "https://img.buzzfeed.com/buzzfeed-static/static/2015-12/16/11/campaign_images/webdr15/33-dwight-schrute-jokes-that-still-make-you-laugh-2-11189-1450281904-8_dblbig.jpg"},
  {author: "Toby Flenderson", body: "HR Rep", photo_url: "https://lh3.googleusercontent.com/-Xx3ekrHllIU/AAAAAAAAAAI/AAAAAAAAABU/62LVGMcOaqI/photo.jpg"}
]

// (function(){
//   angular.module("wdinstagram", [
//
//   ])
// })();

angular
  .module("wdinstagramApp", [
    "ui.router"
  ])
  .config([
    "$stateProvider",
    RouterFunction
  ])
  .controller("WDInstagramIndexController", [
    WDInstagramIndexControllerFunction
  ])
  .controller("WDInstagramShowController", [
    "$stateParams",
    WDInstagramShowControllerFunction
  ])
  .controller("WDInstagramNewController", [ //1 first lets create a "new" function an controller
    "$state",
    WDInstagramNewControllerFunction
  ])
  .controller("WDInstagramUpdateController", [
    "$stateParams",
    WDInstagramUpdateControllerFunction
  ])

  // .factory("WDInstagramFactory", [
  //   WDInstagramFactoryFunction
  // ])

  function WDInstagramUpdateControllerFunction ($stateParams){
    this.gram = grams[$stateParams.id]
    this.update = function(gram){
      this.gram.update({id: $stateParams.id})
    }
  }
  function WDInstagramNewControllerFunction($state){
    this.gram = {}
    this.create = function(){
      grams.push(this.gram)
      console.log(this.gram)
        $state.go("WDInstagramShow", {id: grams.length - 1}) // this makes the ID the index of the last array element.
console.log(grams)
    }

  } //stopped here, it creates it but it doesnt show up on show page.
  function WDInstagramFactoryFunction(){

  }
  function WDInstagramShowControllerFunction($stateParams){
    this.gram = grams[$stateParams.id] //this takes in the input from the URL. The .id is what we defined in state URL:
    console.log(this.gram, $stateParams)
  }
  function WDInstagramIndexControllerFunction (){
    this.grams = grams
  }
function RouterFunction($stateProvider){
  $stateProvider // this is instead of ng-controller because we defined it.
  .state("WDInstagramIndex", {
    url: "/wdinstagram",
    templateUrl: "js/ng-views/index.html",
    controller: "WDInstagramIndexController",
    controllerAs: "vm"
  })
  .state("WDInstagramNew", {
    url: "/wdinstagram/new",
    templateUrl: "js/ng-views/new.html",
    controller: "WDInstagramNewController",
    controllerAs: "vm"
  })
  .state("WDInstagramShow", {
    url: "/wdinstagram/:id",
    templateUrl: "js/ng-views/show.html",
    controller: "WDInstagramShowController",
    controllerAs: "vm"
  })
  .state("WDInstagramUpdate", {
    url: "/wdinstagram/:id/edit",
    templateUrl: "js/ng-views/edit.html",
    controller: "WDInstagramUpdateController",
    controllerAs: "vm"

  })
}
