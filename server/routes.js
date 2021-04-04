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
    case 'all':
      urls.push('https://www.amazon.com');
      urls.push('https://www.google.com');
      break;
    default:
      break;
  }

  return urls;
};

const makeRequest = async (url) => {
  const startTime = Date.now();
  const response = await fetch(url);
  const responseTime = Date.now();
  return {
    url: url,
    statusCode: response.status,
    duration: responseTime - startTime,
    date: responseTime
  };
}

const getStatus = async (req, res, next) => {
  const vendorUrls = createVendorUrls(req.params.site);
  const data = [];

  (await Promise.all(vendorUrls.map(url => makeRequest(url))))
    .forEach(values => data.push(values));
  
  res.json(data);
}

router.use('/:site', getStatus);

module.exports = router;
