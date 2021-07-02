const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const stuffCtrl = require('../controllers/StuffController');

router.post('/', auth, stuffCtrl.createOneThing);
router.put('/:id', auth, stuffCtrl.modifyOneThing);
router.delete('/:id', auth, stuffCtrl.deleteOneThing);
router.get('/:id', auth, stuffCtrl.getOneThing);
router.get('/', auth, stuffCtrl.getAllThings);

module.exports = router;

