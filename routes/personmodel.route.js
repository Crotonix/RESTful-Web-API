const express = require('express');
const app = express();
const personModelRoutes = express.Router();

// Require PersonModel model in our routes module
var PersonModel = require('../models/PersonModel');

// Defined store route
personModelRoutes.route('/add').post(function (req, res) {
  let personModel = new PersonModel(req.body);
  personModel.save()
    .then(game => {
    res.status(200).json({'personModel': 'PersonModel in added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
personModelRoutes.route('/').get(function (req, res) {
    PersonModel.find(function (err, personModels){
    if(err){
      console.log(err);
    }
    else {
      res.json(personModels);
    }
  });
});

// Defined edit route
personModelRoutes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  PersonModel.findById(id, function (err, personModel){
      res.json(personModel);
  });
});

//  Defined update route
personModelRoutes.route('/update/:id').post(function (req, res) {
    PersonModel.findById(req.params.id, function(err, personModel) {
    if (!personModel)
        return next(new Error('Could not load Document'));
    else {
        personModel.p_name = req.body.p_name;
        personModel.p_age = req.body.p_age;
		personModel.p_gender = req.body.p_gender;
		personModel.p_number = req.body.p_number;

        personModel.save().then(personModel => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

// Defined delete | remove | destroy route
personModelRoutes.route('/delete/:id').get(function (req, res) {
    PersonModel.findByIdAndRemove({_id: req.params.id}, function(err, personModel){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = personModelRoutes;