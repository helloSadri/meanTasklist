var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mean2tasklist',['mean2tasklist']);


// Get all Task
router.get('/tasks', function (req, res, next){
    // res.send('Here it is the TASK API');
    db.mean2tasklist.find(function(err, tasks){
        if (err){
            res.send(err);
        }
        res.json(tasks);

    });
});

//Get single Task
router.get('/task/:id', function (req, res, next){
    // res.send('Here it is the TASK API');
    db.mean2tasklist.findOne({_id: mongojs.ObjectId(req.params.id)}, function(err, task){
        if (err){
            res.send(err);
        }
        res.json(task);

    });
});

//Save Task
router.post('/task', function(req, res, next){
    var task = req.body;
    if(!task.todo || !(task.isDone +'')){
        res.status(400);
        res.json({
            "error": "Bad Data"
        });
        db.mean2tasklist.save(task, function(err, task){
            if(err){
                res.send(err);
            }
            res.json(task);
        });
    }
});

//Delete Task
router.delete('/task/:id', function (req, res, next){
    db.mean2tasklist.remove({_id: mongojs.ObjectId(req.params.id)}, function(err, task){
        if (err){
            res.send(err);
        }
        res.json(task);

    });
});

//Update Task
router.put('/task/:id', function (req, res, next){
    var task = req.body;
    var updTask ={};

    if (task.isDone) {
        updTask.isDone = task.isDone;
    }

    if (task.todo){
        updTask.todo = task.todo;
    }
    
    if (!ipdTask){
        res.status(400);
        res.json({
            "error":"Bad Data"
        });
    } else {

        db.mean2tasklist.update({_id: mongojs.ObjectId(req.params.id)},updTask, {}, function(err, task){
            if (err){
                res.send(err);
            }
            res.json(task);
        });
    }
});


module.exports = router;