import express from 'express';

var router = express.Router();
/**
 * @swagger
 * definition:
 *   biz:
 *     properties:
 *       name:
 *         type: string
 *       password:
 *         type: string
 */

/**
 * @swagger
 * /biz/list:
 *   get:
 *     tags:
 *       - biz
 *     description: 返回所有账户
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: An array of biz
 *         schema:
 *           $ref: '#/definitions/account'
 */
router
  .get('/list', async function(req, res, next) {
      var data=await M.account.find()
      res.json(data);
  })


export default  router