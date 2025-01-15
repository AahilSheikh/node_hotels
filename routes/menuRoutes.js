const express = require ('express');
const router = express.Router();
const menuItem = require('../models/menuitem')

router.post('/', async (req,res) =>{
    try {
      const data = req.body
      const newMenu = new menuItem(data);
      const response =  await newMenu.save(data);
      console.log('data saved');
      res.status(200).json(response);
      
    } 
    catch (error) {
      console.log(error);
      res.status(500).json({error:'Internal Server Error'})
      
    }
  })
  
  router.get('/',async (req,res) =>{
    try {
      const data = await menuItem.find();
      console.log('data fetched');
      res.status(200).json(data);
      
    } catch (error) {
      console.log(err);
      res.status(500).json({error:'Internal Server Error'})
      
    }
  })

          //TASK PERFORM

          router.get('/:tasteType',async (req,res) =>{
            try {
              const tasteType = req.params.tasteType;
              if(tasteType == 'sour' || tasteType == 'sweet' || tasteType == 'unflavour' || tasteType == 'spicy'){
                const response = await menuItem.find({taste:tasteType});
                console.log('response fetched');
                res.status(200).json(response)
                
              }
              else{
                res.status(400).json({error:'Invalid taste type'});
              }
            } catch (error) {
              console.log(error);
              res.status(500).json({error:'Internal Server Errror'})
              
              
            }
          })



          //comment added for testing
  module.exports = router;