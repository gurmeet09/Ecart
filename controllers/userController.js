//Import required module
var User = require('../models/user');
var mongoose = require('mongoose');

// // export the postEmployee method
// exports.postUser = function(req, res){
//   // creating the new employee
//   var user = new User({
    
//     firstname:   req.body.firstname,
//     lastname:    req.body.lastname,
//     email:       req.body.email,
//     username:    req.body.username,
//     password:    req.body.password,
//     created_at:  new Date(),
//     updated_at:  ""
//   });

//   //save the creating employee
//   user.save(function(error,response){
//     // handle the error
//       if(error){
//         return error;
//       }
//       else if (response) {
//         //send the response to the browser
//         res.json({
//           success: true,
//           body: response
//         });
//       }
//       else {
//         console.log('print');
//       }
//   }); // end of save method
// } // end of postEmployee method


//export getAllEmployee method
exports.getAllEmployee = function(req,res){
  console.log("getall")
  User.find({},function(error,response){
        if(error){
            return res.json(req,res,error);
        }
        //sending the reponse to the browser
        res.json(response);

    });
}

//Post users
exports.postUser=function(req,res) {
  console.log("post")
  var user=new User({
    firstname:   req.body.firstname,
    lastname:    req.body.lastname,
    email:       req.body.email,
    username:    req.body.username,
    password:    req.body.password,
  created_at: new Date( ),
  updated_at: new Date( ),
  });
  
  user.save(function(err,response) {
    console.log("hello");
  if(err) {
  return res.json(err);
  }
  
  res.json({
  success: true,
  body: response
  })
  
  });
  };
//export the getEmployee method
exports.getEmployee = function(req,res){
  // taking the id from the params of the url
  var id = req.params.id;
  //find the first employee form the collection
  Employee.findOne({employeeId:id},function(error,response){
    if(error){
        return res.json(error)
    }
    res.json(response);
  });
}


//export the searchEmployee method
exports.searchEmployee = function(req,res){
  var name = req.params.name;
  Employee.find({"name": new RegExp(name,"i")},function(error,response){
      if(error){
        res.json(error);
      }
      res.json(response);
  })
}

// export the updateEmployee method
exports.updateEmployee = function(req,res){
    console.log("In upadate");
  var id = req.params.employeeId;
  Employee.findOne({employeeId: id}, function(error,resEmployee){
      if(error){
          console.log("In error");
          res.json(error);
      }

      var newName = req.body.employeeName;
      //update the name
      resEmployee.name = newName;
      //update the date
      resEmployee.updated_at = new Date();
      //save the employee
      resEmployee.save(function(err, response){
          if(err){
              res.json(err);
          }

          res.json(response);
      });

  });
}


//export deleteEmployee method
exports.deleteEmployee = function(req,res){
  var empId = req.body.empId;
  Employee.findOne({employeeId: empId}, function(error,emp) {
      if(error){
        res.json(error);
      }
      Employee.remove({employeeId: empId},function(err,qres){
          if(err){
            res.json(err);
          }
          res.json("Successfully Deleted");
      });
  });
}
