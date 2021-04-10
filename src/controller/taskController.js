const response  =  require ('express');
const TaskModel = require('../model/taskModel');
class taskController {
	 

    async create(req,res){
        const task = new TaskModel(req.body);
        await task
                .save()
                .then(response => {
                    return res.status(200).json(response);
                })
                .catch(error => {
                    return res.status(500).json(error);
                });
    }    
    async updateProfile(req,res){
        await  TaskModel.findByIdAndUpdate({'_id': req.params.id},req.body, {new : true})
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        });
    }
	async queryFila(req, res){
    await TaskModel
          .find({ 
            status : 'ON' 
          })
          .then(response => {
            return res.status(200).json(response);
          })
          .catch(error => {
            return res.status(500).json(error);
          });
  }
	async statusOn(req,res){
		array.push()
	}
	async statusOff(req,res){
		array.pop()
	}
}
module.exports = new taskController();