app.service('Sponsors', function () {
  var count = 0;

  var sponsors = [
    {
      name: 'Google',
      image: 'images/sponsors/google.png',
      level: 'partner'
    },
    {
      name: 'Quixey',
      image: 'images/sponsors/quixey.png',
      level: 'platinum'
    },
    {
      name: 'Flipboard',
      image: 'images/sponsors/flipboard.png',
      level: 'platinum'
    },
    {
      name: 'Cisco',
      image: 'images/sponsors/cisco.png',
      level: 'gold'
    },
    {
      name: 'Twilio',
      image: 'images/sponsors/twilio.png',
      level: 'bronze'
    },
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