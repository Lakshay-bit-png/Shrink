const express = require('express');
const router = express.Router();
const handler = require('../controller/savelink');
const handlerr = require('../controller/getlink');
const { getRedirectUrl } = require('../controller/redirect');


router.post('/save', handler.createMapping);
router.post('/get', handlerr.getMapping);
router.get('/:code', getRedirectUrl);

module.exports = router;
