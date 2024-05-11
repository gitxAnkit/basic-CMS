const express = require('express');
const { createEntity,
    getAllEntity,
    deleteEntityByName,
    getEntityByName,
    createEntityData,
    getEntityData,
    deleteEntityData,
    updateEntityData,
    getEntityDataById } = require('../controllers/entityController');

const router = express.Router();


router.route('/')
    .post(createEntity)
    .get(getAllEntity);

router.route('/:ename')
    .delete(deleteEntityByName)
    .get(getEntityByName);//not working

router.route('/:ename/data')
    .post(createEntityData)
    .get(getEntityData);
router.route('/:ename/data/:id')
    .delete(deleteEntityData)
    .put(updateEntityData)
    .get(getEntityDataById);

module.exports = router;