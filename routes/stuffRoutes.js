const express = require('express');
const router = express.Router();
const stuffCtrl = require('../controllers/StuffController');

router.post('/', stuffCtrl.createOneThing);
router.put('/:id', stuffCtrl.modifyOneThing);
router.delete('/:id', stuffCtrl.deleteOneThing);
router.get('/:id', stuffCtrl.getOneThing);
router.get('/', stuffCtrl.getAllThings);

module.exports = router;

