//products URL route
const express = require('express');
const router = express.Router();

/********************* GET PRODUCT REQUEST *********************/
// http://localhost:3000/products/
// GET response for viewing all the products
// public access 


router.get('/', (req,res) => {
    res.status(200).json({
        message: 'this is the products page'
    });
});

/********************* END OF GET PRODUCT REQUEST *********************/

/********************* PSOT PRODUCT REQUEST *********************/
// http://localhost:3000/products/
// POST response for viewing all the products
// public access 


router.post('/', (req,res) => {
    res.status(200).json({
        message: 'this is the products page'
    });
});

/********************* END OF GET PRODUCT REQUEST *********************/

/********************* GET PRODUCT REQUEST FOR SINGLE PRODUCT *********************/
// http://localhost:3000/products/:productId
// GET response for viewing a single  products
// private access 


router.get('/:productId', (req,res) => {
    const id = req.params.productId;

    if(id === 'special'){
        res.status(200).json({
            message: 'special ID',
            id:id
        });
    }else{
        res.status(200).json({
            message: 'the other one not so special ID'
        });
    }

  
});

/********************* END OF GET PRODUCT REQUEST FOR SINGLE PRODUCT *********************/

/********************* PATCH PRODUCT REQUEST FOR SINGLE PRODUCT *********************/
// http://localhost:3000/products/:productId
// PATCH  response for updating a single product
// private access 


router.patch('/:productId', (req,res,next) => {
    res.status(200).json({
        message: 'this route is for update prodoct '
    })
  
});

/********************* END OF PATCH PRODUCT REQUEST FOR SINGLE PRODUCT *********************/


/********************* DELETE PRODUCT REQUEST FOR SINGLE PRODUCT *********************/
// http://localhost:3000/products/:productId
// DELETE  response for DELETING a single product
// private access 


router.delete('/:productId', (req,res,next) => {
    res.status(200).json({
        message: 'this route if for deleting products'
    });

  
});

/********************* END OF PATCH PRODUCT REQUEST FOR SINGLE PRODUCT *********************/


/********************* TEST  *********************/

router.get('/test', (req,res) => {
    res.json({
        message: 'this is for testing only'
    });
});

/********************* TEST *********************/

module.exports = router;