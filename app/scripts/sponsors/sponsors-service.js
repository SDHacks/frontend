app.service('Sponsors', function () {
  var count = 0;

  var sponsors = [
    {
      name: 'Google',
      image: 'images/sponsors/google.png',
      level: 'partner'
    }
    ,
    {
      name: 'Twilio',
      image: 'images/sponsors/twilio.png',
      level: 'bronze'
    }
    ,
    {
      name: 'Swipe Development',
      image: 'images/sponsors/swipedevelopment.png',
      level: 'bronze'
    }
  ];

  count = sponsors.length;

  return {
    getCount: function () {
      return count;
    },
    getSponsors: function () {
      return sponsors;
    }
  };
});