'use strict';

app.controller('FAQCtrl',
  ['$scope', function ($scope) {

    var items = [
      {
        question: 'What is a hackathon?',
        answer: 'A hackathon is an event, typically lasting several days, in which a large number of people meet to engage in collaborative computer programming.'
      },
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
        question: 'Who can attend?',
        answer: 'We welcome any and all undergraduate students from any university to attend SD Hacks.'
      },
      {
        question: 'What if I have a question not answered here?',
        answer: 'Feel free to contact our team by using the form below OR send an email to support@sdhacks.io!'
      }
    ];

    $scope.items = items;
  }]);
