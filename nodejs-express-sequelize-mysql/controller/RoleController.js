


var role = require('../model/ModelRole');

//////create
exports.role = function(req, res) {
   
    const rolesch = role.build({ role:req.body.role });
    ///console.log(advertisment instanceof user); 
    rolesch.save().then((e)=>{
         if(e)console.log(e);
        console.log('schtroumf was saved to the database!');
        res.send('schtroumf bien creer');
     })
     
}


//////////////////////get///////////////////////////
exports.getAllAdvertisments = function(req,res){ 
   role.findAll().then(adv => {
   console.log("schtroumf: ", adv);
/// je renvoi ma fonction json avec en parametre mes users 
   res.json(adv);
}
)}
///////////////update/////////////////////
exports.updateAdvertisment = function (req, res) {
  const id = req.params.id; // Récupérer l'ID à partir des paramètres de requête
  const updatedRole = req.body.role; // Récupérer le nouveau rôle à partir du corps de la requête

  role.update(
    { role: updatedRole }, // Les valeurs à mettre à jour
    { where: { id: id } } // La condition pour trouver l'enregistrement à mettre à jour
  )
    .then(() => {
      res.json("schtroumf bien mis à jour");
    })
    .catch((error) => {
      console.log("Erreur lors de la mise à jour : ", error);
      res.status(500).json("Erreur lors de la mise à jour du schtroumf");
    });
}


/////////////////DELETE  /////////////////////////////////


exports.deleteAdvertisment = function (req, res) {
  console.log("delete bien entree dedans ");
  
  // Récupérer l'ID à partir des paramètres de requête
  const id = req.params.id;

  // Utiliser l'ID pour supprimer l'enregistrement correspondant
  role.destroy({
    where: {
      id: id
    }
  }).then(() => {
    res.json("schtroumf bien supprimé");
  }).catch((error) => {
    console.log("Erreur lors de la suppression : ", error);
    res.status(500).json("Erreur lors de la suppression du schtroumf");
  });
}

////////////////////////////
////////////////////////////
 
