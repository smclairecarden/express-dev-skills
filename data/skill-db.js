const skills = [
  {text: 'HTML', hasSkill: true, _id: 817233},
  {text: 'CSS', hasSkill: false, _id: 456789},
  {text: 'Java Script', hasSkill: false, _id: 123456},
  {text: 'Team Work', hasSkill: true, _id: 785432},
]

const find = (conditions, callback) => {
  // see if this works, if not, execute the code in the catch block
  try {
    // make sure that conditions is an object - if not throw a TypeError
    if (!(conditions instanceof Object)){
      throw new TypeError('Please pass in an object')
    }
    // If the object is empty, return all the todos
    if (Object.keys(conditions).length === 0) return callback(null, skills)
	// deal with errors
  } catch (error) {
    console.log(error)
    callback(error, [])
  }
}

const findById = (id, callback) =>{
  try {
    const skill = skills.find(skill => skill._id === parseInt(id))
    if(!skill) throw new Error ('No skill was found')
    return callback(null, skill)
  } catch (error) {
    console.log(error)
    return callback(error, null)
  }
}

function create(skill, callback) {
  skill._id = Date.now() % 1000000
  skill.done = false
  skills.push(skill)
  return callback(null, skill)
}

function findByIdAndDelete(id, callback) {
  try {
    const idx = skills.findIndex(skill => skill._id == parseInt(id))
    const deletedSkill = skills.splice(idx, 1)
    if (!deletedSkill.length ) throw new Error ('No skill was deleted')
    return callback(null, deletedSkill[0])
    } catch(error) {
    return callback(error, null)
  }
}

function findByIdAndEdit(id, callback) {
  skills.push(skill)
  return callback(null, skill)
}

export {
  find,
  findById,
  create,
  findByIdAndDelete,
  findByIdAndEdit,
}