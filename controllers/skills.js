import * as skillDb from "../data/skill-db.js"

function index(req, res) {
  skillDb.find({}, function(error, skills){
    res.render('skills/index', {
      skills: skills,
      error: error
    })
  })
}

function show(req, res) {
  skillDb.findById(req.params.id, function(error, skills){
    res.render('skills/show', {
      skills: skills,
      error: error
    })
  })
}

export {
  index,
  show
}