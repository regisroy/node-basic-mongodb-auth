Cours OpenClassRoom : https://openclassrooms.com/en/courses/6390246-passez-au-full-stack-avec-node-js-express-et-mongodb/6521356-tirez-le-maximum-de-ce-cours
## Front et Back
- front  
  - git clone https://github.com/OpenClassrooms-Student-Center/go-fullstack-fr-frontend.git frontend  
  > cd frontend  
  > npm install  
  > ng serve  
  - http://localhost:4200  
- back
  > node server               # démarre le serveur une fois pour toute  
  > npm install -g nodemon  
  > nodemon server            # détecte les changements dans les sources -> ok dans les devs  
  - install express  
  > npm install --save express     # cela va modifier package.json  
  - http://localhost:3000  
  > npm install --save body-parser   # parser le json reçu  
  - création d'un cluster mongoDB dans AWS (free) avec mongoDB@regisroy.net  
    - mongodb+srv://sa:<password>@cluster0.ko7vx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority 
  > npm install --save mongoose  
  > npm install --save mongoose-unique-validator  
  > npm install --save bcrypt  
  > npm install --save jsonwebtoken  
  > npm install --save multer  
  > 

