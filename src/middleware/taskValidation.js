const TaskModel = require ('../model/taskModel');

const taskValidation = async (req,res,next)=>{
    const {macaddress, celNumber, profile, name} = req.body;
    if(!macaddress)
         return res.status(400).json({ error: 'macaddress é obrigatório'});
    else if(!celNumber)
          return res.status(400).json({ error: 'celular é obrigatório'});
    else if(!profile)
         return res.status(400).json({ error: 'Selecionar um perfil é obrigatório'});
    else if(!name)
         return res.status(400).json({ error: 'Nome é obrigatória'});
     else{
        let exists;
        
        exists = await TaskModel.
        findOne(
            { 
            'celNumber': {'$eq': celNumber }  
            });
    
        if(exists){
            return res.status(400).json({ error: 'Celular já existe'});
            }
        
        next()
     }
}

module.exports = taskValidation;