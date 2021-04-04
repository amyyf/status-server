/**
 * Middleware to handle API endpoint requests.
 */

const express = require('express');
const fetch = require('isomorphic-fetch');

const router = express.Router();

const createVendorUrls = (endpoint) => {
  // Split out the vendor name from the endpoint.
  let vendor = endpoint.split('-');

  let urls = [];

  // Add URLs to query based on first part of vendor name.
  switch(vendor[0]) {
    case 'amazon':
      urls.push('https://www.amazon.com');
      break;
    case 'google':
      urls.push('https://www.google.com');
      break;
    // TODO: this isn't currently working.
    case 'all':
      urls.push('https://www.amazon.com');
      urls.push('https://www.google.com');
      break;
    default:
      break;
  }

  return urls;
};

const getStatus = (req, res, next) => {
  const vendorUrls = createVendorUrls(req.params.site);

  vendorUrls.forEach(url => {
    const startTime = Date.now();
    fetch(url)
      .then(response => {
        const responseTime = Date.now();
        console.log(res.json({
          url: url,
          statusCode: response.status,
          duration: responseTime - startTime,
          date: responseTime
        }))
      });
  })
}

router.use('/:site', getStatus);

module.exports = router;
