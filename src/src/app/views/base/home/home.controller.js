(function() {
  'use strict';

  angular
    .module('app')
    .controller('HomeController', HomeController);

  /** @ngInject */
  function HomeController($location) {
    var _self = this;

    _self.me = {
      age: (new moment().diff('1993-09-16', 'years'))
    };

    _self.menu = [
      {
        hash:'section-1',
        label: 'Sobre mim',
        bold: true
      },
      {
        hash:'section-2',
        label: 'Meus contatos',
        bold: true
      },
      {
        state:'/posts',
        label: 'Posts',
        bold: true
      }
      // ,
      // {
      //   state:'index_en-US',
      //   img: {
      //     classes: 'flag flag-en',
      //     src: 'assets/img/flag_en-US.png',
      //     alt: 'en'
      //   },
      //   label: 'English'
      // }
    ];
  }
})();
