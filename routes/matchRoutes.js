const {Router} = require('express');
const matchController = require('../controllers/matchController');


const router = Router();

router.get('/', matchController.list);
router.post('/create', matchController.create);
router.put('/:id', matchController.update);
router.delete('/:id', matchController.delete);

module.exports = router;