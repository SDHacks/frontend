'use strict';

app.controller('FAQCtrl',
  ['$scope', function ($scope) {

    var items = [
      {
        question: 'How big are the team sizes?',
        answer: 'We encourage a policy of no lone hackers, and no teams bigger than five. We believe that this best promotes both what a hack means to us, and what is the most fun.'
      },
      {
        question: 'What if I don\'t have a team?',
        answer: 'No problem! We\'ll be having a mixer right before the hack so that you can team up. No one has to hack alone.'
      },
      {
        question: 'How much does it cost?',
        answer: 'The event is free to college students who make it through our registration process. Food, electricity, internet, and all other necessary equipment for your development process will be provided.'
      },
      {
        question: 'Lorem ipsum dolor sit amet?',
        answer: 'Sed vel nibh ac augue cursus fringilla. Phasellus aliquet metus vitae dui tempor, nec feugiat risus pellentesque. Proin condimentum mattis vehicula.'
      },
      {
        question: 'Sed vel nibh ac augue cursus fringilla?',
        answer: 'Quisque gravida risus malesuada orci venenatis aliquet.'
      },
      {
        question: 'Aliquam sem ante, venenatis vitae porttitor vitae, rhoncus in mi?',
        answer: 'Donec risus sem, pellentesque et dui et, egestas egestas orci. Ut eget elit id turpis vulputate egestas quis quis nunc. Integer metus libero, aliquet sit amet sollicitudin sed, elementum vitae orci. Praesent faucibus erat eget lobortis aliquam.'
      }
    ];

    $scope.items = items;
  }]);
