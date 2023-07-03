var user = require('../model/ModelUser');
const bcrypt = require('bcrypt');


// Inscription
exports.register = async (req, res) => {
    try {
      const { username, email, password } = req.body;
  
      // Vérifier si l'utilisateur existe déjà dans la base de données
      const existingSchtroumf = await user.findOne({ where: { email: email } });
      if (existingSchtroumf) {
        return res.status(400).json({ message: 'Cet email est déjà utilisé' });
      }
  
      // Hasher le mot de passe
      const hashedPassword = await bcrypt.hash(password, 10);
  
      // Créer un nouveau schtroumf
      await user.create({ username, email, password: hashedPassword });
  
      res.status(201).json({ message: 'Inscription réussie' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Une erreur est survenue lors de l\'inscription' });
    }
  };
  
  
  //////////////conexion 
  // Connexion
  exports.login = async (req, res) => {
    try {
      const { email, password } = req.body;
  
      // Rechercher le schtroumf par email dans la base de données
      const schtroumf = await user.findOne({ where: { email: email } });
      if (!schtroumf) {
        return res.status(401).json({ message: 'Identifiants invalides' });
      }
  
      // Vérifier le mot de passe
      const isValidPassword = await bcrypt.compare(password, schtroumf.password);
      if (!isValidPassword) {
        return res.status(401).json({ message: 'Identifiants invalides' });
      }
  
      res.status(200).json({ message: 'Connexion réussie' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Une erreur est survenue lors de la connexion' });
    }
  };
  
  
  
  // Déconnexion
  exports.logout = (req, res) => {
    // Implémenter la logique de déconnexion ici
    res.status(200).json({ message: 'Déconnexion réussie' });
  };
  
  