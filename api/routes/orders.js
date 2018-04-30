const express = require('express');
const router = express.Router();




/********************* GET ORDER LIST  REQUEST *********************/
// http://localhost:3000/orders/
// GET response for viewing all the orders
// public access 


router.get('/', (req,res,next) => {
    res.status(200).json({
        message: 'this is the orders page'
    });
});

/********************* GET ORDER LIST  REQUEST *********************/


/********************* PSOT ORDER REQUEST *********************/
// http://localhost:3000/orders/
// POST response for viewing all the orders
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


router.get('/:orderId', (req,res) => {
    const id = req.params.orderId;

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


router.patch('/:orderId', (req,res,next) => {
    res.status(200).json({
        message: 'this route is for update prodoct '
    })
  
});

/********************* END OF PATCH PRODUCT REQUEST FOR SINGLE PRODUCT *********************/


/********************* DELETE PRODUCT REQUEST FOR SINGLE PRODUCT *********************/
// http://localhost:3000/products/:productId
// DELETE  response for DELETING a single product
// private access 


router.delete('/:orderId', (req,res,next) => {
    res.status(200).json({
        message: 'this route if for deleting products'
    });

  
});

/********************* END OF PATCH PRODUCT REQUEST FOR SINGLE PRODUCT *********************/

/********************* TEST  *********************/

router.get('/test', (req,res) => {
    res.json({
        message: 'this is for testing ORDERS route only'
    });
});

/********************* TEST *********************/

module.exports = router;