/**
 * Middleware to handle API endpoint requests.
 */

const express = require('express');
const fetch = require('isomorphic-fetch');

const router = express.Router();

// Return an array of vendor URLs.
const createVendorUrls = (endpoint) => {
  // Split out the vendor name from the endpoint.
  let vendor = endpoint.split('-');
  let urls = [];

  // 'All' endpoint needs to query both sites.
  if (vendor[0] === 'all') {
    // Hardcoding since we only have two endpoints for now.
    urls.push('https://www.amazon.com');
    urls.push('https://www.google.com');
  } else {
    // Single endpoints just need the URL formatted.
    urls.push(`https://www.${vendor[0]}.com`);
  }

  return urls;
};

// Fetch the vendor response and return our desired data.
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

// Handles all URL requests and returns a single JSON response.
const getStatus = async (req, res, next) => {
  const vendorUrls = createVendorUrls(req.params.site);
  const data = [];

  (await Promise.all(vendorUrls.map(url => makeRequest(url))))
    .forEach(values => data.push(values));
  
  res.json(data);
}

router.use('/:site', getStatus);

module.exports = router;
