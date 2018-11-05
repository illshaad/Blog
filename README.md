Mon projet 

J'ai mis en place un projet, un blog qui intègre un système d'authentification afin d'accéder à son profil.

J’ai encore pas mal d’améliorations à faire pour qu’il soit totalement fonctionnel.

Les technologies utilisées sont en back-end Nodejs Express et  base de donnée en MongoDB et React freamork Bootstrap pour le front-end , réaliser en ES6.

La création de son profil.

Grâce au modèle qui est constitué d'un prénom, nom, mots de passe, email, seul l’administrateur du blog peut se créer et accéder à son compte pour ce faire, il faudra utiliser l’outil Postman (permet de tester une api restfull). Le mot de passe et crypté à l’aide d’un package "Bcrypt".

La connexion de son profil.

Une fois la création de son profil , on peut se rendre sur l'onglet "login" sur le blog pour se connecter il suffit de rentrer le même émail et mot de passe inscrit dans Postman.

Création du premier blog.

Une fois connecté, j'ai créé une nouvelle route qui vous redirige sur une autre page, cette page vous donne accès un formulaire ou vous aurez la possibilité de le compléter pour la première création d'un blog. 

Ce formulaire et crée en React Bootstrap.

Le nouveau  blog.

Le blog crée vous remarquerai que la page ne vous redirigera pas automatiquement vers votre nouveau blog , il vous faudra cliquer sur le l'onglet 'home' pour qu'il s'affiche. Vous pourrez supprimer ce blog s'il ne vous convient pas. Il me reste à ajouter la fonctionnalité de modification et d'ajouter une image.

Je n'ai pas réussi à faire fonctionner le token, c'est pour cela qu'il vous faudra à chaque fois vous reconnecter pour pouvoir crée un nouvel article le site ne s’actualise pas automatique et ne garde pas le compte enregistré. Peut être une incompatibilité avec du ES6 pour le Token.

Pour tester l’api en sans crée de nouveau compte avec l’outil Postman je vous donne l’email et le mots de passe utilisé durant la création de ce projet.

Email : shadd@gmail.com
MDP : azerty
Allez dans le fichier principal faire npm start.
Allez dans le dossier serveur faire npm start.

Voila .