let Exercise = require('../model/exercise');

const getExercises = async (req, res) => {
    var exercises = await Exercise.find();

    if(!exercises){
        return res.status(400).json("Error: can't find any exercises");
    }

    return res.status(200).json(exercises);
};

const getExercise = (req, res) => {
    Exercise.findById({_id: req.params.id})
    .then((result) => {
        return res.json(result);
    }).catch((err) => {
        return res.json(err);
    });
};

const addExercise = async (req, res) => {
    const username = req.body.username;
    const description = req.body.description;
    const duration = Number(req.body.duration);
    const date  = Date.parse(req.body.date);

    var newExercise = new Exercise({
        username, 
        description, 
        duration, 
        date
    });

    var result = await newExercise.save()

    if(!result) {
        return res.status(400).json("Error: can't save exercise");
    }

    return res.status(200).json('Exercise Added');
};

const updateExercise = (req, res) => {
    const id = req.params.id;

    Exercise.findByIdAndUpdate({_id: id}, req.body)
            .then( result => {
                return res.redirect('/exercises');
            })
            .catch ( err => {
               return res.json(err);
            });
};

const deleteExercise = (req, res) => {
    const id = req.params.id;

    Exercise.findByIdAndRemove({_id:id})
            .then(() => {
                return res.redirect('/exercises')
            })
            .catch(err => {
                return res.status(400).json(err)
            });
   
};

module.exports = {
    getExercises, 
    getExercise,
    addExercise, 
    updateExercise, 
    deleteExercise
}