# BloggerStyle
## He creado una aplicación basica para crear contenido de articulos o de blogs donde un usuario puede crear un contenido, 
## también pueda ver en que fecha se subió ese articulo editarlo y eliminarlo. Usé tecnologias Full-Stack MERN
### ![Captura de pantalla 2023-08-30 173451](https://github.com/Silkaleex/bloggerStyle/assets/82760991/3130051a-ad20-485e-bde5-e84554d9ac33)
## Empece creando una base de datos con mongoDb, despues instale use los siguientes comandos
### - node -v: nos verifica la version actual de nuestro node
### - npm -v: nos verifica la version actual de nuestro npm
### - node "archivo.js nos visualiza lo que tengamos creado en nuestro proyecto
### - npm install nos instala el package node.js
### - npm install express instala los datos de express
### - npm i nodemon --D instala nodemon que es una extension de nodeJs
### - npm npm install mongoose: nos conecta nuestra base de datos de mongoose a nuestro backend con express
### - npm install dotenv para encriptar las contraseñas de conexion entre nuestro mongoDb y nuestro express
## Una vez hecho esto lo que hice fue ir creando modelos y rutas
### ![image](https://github.com/Silkaleex/bloggerStyle/assets/82760991/2887867a-27e7-400d-be26-3e247317b5c5)
### Este es el modelo de articulos
### ![image](https://github.com/Silkaleex/bloggerStyle/assets/82760991/25117cc9-fb7a-4257-98c4-35687abf8755)
### ![image](https://github.com/Silkaleex/bloggerStyle/assets/82760991/787d4a9e-2cf3-44f3-b387-2877e2fd7574)
## Con esto ya pueo verificar si funciona mi base de datos con mi backend

## Encriptar contraseña
### Creamos un archivo .env
### ![image](https://github.com/Silkaleex/bloggerStyle/assets/82760991/d84cc55e-0ee1-422a-b456-39f6d77610d4)
### no hace falta poner variables donde pone password ponemos la contraseña que creamos para nuestra base de datos
### ![image](https://github.com/Silkaleex/bloggerStyle/assets/82760991/f5b87f98-f68b-4188-95da-9bc8f88561c5)
### Luego ponemos la encriptación en server.js
### ![image](https://github.com/Silkaleex/bloggerStyle/assets/82760991/845c6628-0080-4bae-8539-cee86ab29af6)

