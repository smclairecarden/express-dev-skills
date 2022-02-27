import { response } from "express"
import * as skillDb from "../data/skill-db.js"

function index(req, res) {
  skillDb.find({}, function(error, skills){
    res.render('skills/index', {
      skills: skills,
      error: error,
      time: req.time,
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

function newSkill(req, res) {
  res.render('skills/new')
}

function create(req, res) {
  skillDb.create(req.body, function(error, skills){
    res.redirect('/skills')
  })
}

function deleteSkill(req, res) {
  skillDb.findByIdAndDelete(req.params.id, function(error, skill) {
    res.redirect('/skills')
  })
}

function edit(req, res) {
  skillDb.findById(req.params.id, function(error, skills){
    res.render('skills/edit', {
      skills: skills,
      error: error
    })
  })
}

//The edit function does not work but I wanted to leave it in hope that one day I will have it working.

export {
  index,
  show,
  newSkill as new,
  create,
  deleteSkill as delete,
  edit,
}