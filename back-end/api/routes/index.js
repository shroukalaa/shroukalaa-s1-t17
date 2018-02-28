var express = require('express'),
  router = express.Router(),
//  productCtrl = require('../controllers/ProductController');
shroukCtrl = require('../controllers/shroukController');

  const authentication = require('../controllers/authentication')(router);
  app = express();
	memberCtrl = require('../controllers/MemberController');


//-------------------------------Product Routes-----------------------------------
// router.get('/product/getProducts', productCtrl.getProducts);
// router.get('/product/getProduct/:productId', productCtrl.getProduct);
// router.get(
//   '/product/getProductsBelowPrice/:price',
//   productCtrl.getProductsBelowPrice
// );
// router.post('/product/createProduct', productCtrl.createProduct);
// router.patch('/product/updateProduct/:productId', productCtrl.updateProduct);
// router.delete('/product/deleteProduct/:productId', productCtrl.deleteProduct);


app.use('/authentication' , authentication);
//------------------------------Youssef Product----------------------------------
router.get('/shrouk/getProducts', shroukCtrl.getProducts);
router.get('/shrouk/getProduct/:productId', shroukCtrl.getProduct);
router.get('/shrouk/getProductsBelowPrice/:price', shroukCtrl.getProductsBelowPrice);
router.post('/shrouk/createProduct', shroukCtrl.createProduct);
router.patch('/shrouk/updateProduct/:productId', shroukCtrl.updateProduct);
router.delete('/shrouk/deleteProduct/:productId', shroukCtrl.deleteProduct);


//-------------------------------Member Routes-----------------------------------
router.get('/member/getMembers', memberCtrl.getMembers);
router.post('/member/createMember', memberCtrl.createMember);
router.patch('/member/updateMember/:memberId', memberCtrl.updateMember);
router.delete('/member/deleteMember/:memberId', memberCtrl.deleteMember);

module.exports = router;
