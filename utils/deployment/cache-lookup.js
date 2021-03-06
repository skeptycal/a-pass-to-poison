'use strict';

const lookup = [
  {
    control: 'max-age=60', // 1 minute
    types: ['text/html'],
  },
  {
    control: 'max-age=31536000', // 1 year
    types: ['text/css', 'application/javascript'],
  },
  {
    control: 'max-age=2592000', // 30 days
    types: [
      'image/gif',
      'image/jpeg',
      'image/png',
      'image/svg+xml',
      'image/webp',
    ],
  },
  {
    control: 'max-age=3600', // 1 hour
    types: ['application/json'],
  },
];

module.exports = type => {
  return lookup.find(pair => {
    return pair.types.some(s => s === type);
  });
};
