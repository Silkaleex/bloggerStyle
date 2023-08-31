# BloggerStyle
## He creado una aplicación basica para crear contenido de articulos o de blogs donde un usuario puede crear un contenido, 
## también pueda ver en que fecha se subió ese articulo editarlo y eliminarlo. Usé tecnologias Full-Stack MERN
### ![Captura de pantalla 2023-08-30 173451](https://github.com/Silkaleex/bloggerStyle/assets/82760991/3130051a-ad20-485e-bde5-e84554d9ac33)

# Backend y DataBase
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

# Frontend
## Para empezar use el comando npx create-react-app client donde se crean todos los archivos necesarios para usar react
### para empezar cree una carpeta de components en esta entraran layouts, entraria el footer el sidebar,
### navbar, header, es una estructura que le daran a todas los componentes de pages en el que entraran cada sección de articulo,
### inicio del articulo, creando articulo, los detalles de todo el articulo y la lista de todos los articulos creados, Ademas tambien cree otra carpeta de y las rutas donde se redirigiran cada componente, por ejemplo si quiero redirigirme al componente de crear, me llevara a esa pagina a crear un articulo.
### Aqui muestro todos los componentes del front, empecemos por la carpeta de componentes en la carpeta de layouts
### Header
### ![image](https://github.com/Silkaleex/bloggerStyle/assets/82760991/0cbfcf29-07bc-4414-a349-834f6223d1ab)
### Nav
### ![image](https://github.com/Silkaleex/bloggerStyle/assets/82760991/87db5821-13b5-4c67-82cc-f34248e8b660)
### Sidebar
### ![image](https://github.com/Silkaleex/bloggerStyle/assets/82760991/a3c64063-3b06-4410-be49-70682e5e6951)
### 
### Footer
### ![image](https://github.com/Silkaleex/bloggerStyle/assets/82760991/fcf350ca-0d7a-4e0a-b59d-de4c676188e8)
### Pages
### Inicio
### ![image](https://github.com/Silkaleex/bloggerStyle/assets/82760991/a7855bd8-088a-4fb2-9075-8c6836a43c42)
### Editar
### ![image](https://github.com/Silkaleex/bloggerStyle/assets/82760991/d4fdea92-ef02-4997-a086-dbdca6f8eb6a)
### ![image](https://github.com/Silkaleex/bloggerStyle/assets/82760991/772860b0-d76b-4230-9b11-43ba4ee1bb3c)
### ![image](https://github.com/Silkaleex/bloggerStyle/assets/82760991/4a4e501e-0dce-4a18-87fa-711d4dc79fa0)
### ![image](https://github.com/Silkaleex/bloggerStyle/assets/82760991/bf457e0a-6872-4b7e-89c6-3f8759a9a823)
### Crear
### ![image](https://github.com/Silkaleex/bloggerStyle/assets/82760991/7801d722-f53f-4edc-8e1d-2be87c9cbf67)
### ![image](https://github.com/Silkaleex/bloggerStyle/assets/82760991/4d26b808-6e80-4e73-b106-37d2326181d8)
### ![image](https://github.com/Silkaleex/bloggerStyle/assets/82760991/19920ca7-b3a0-4c1e-b605-7c538250a2cd)
### Busqueda
### ![image](https://github.com/Silkaleex/bloggerStyle/assets/82760991/62953413-31c9-48b1-94ca-42b9331b81e4)
### ![image](https://github.com/Silkaleex/bloggerStyle/assets/82760991/fd4ba592-c854-49b8-9535-57fd2b74b7d8)
### ![image](https://github.com/Silkaleex/bloggerStyle/assets/82760991/99995fff-39e0-4b54-abba-56d807fb0fb9)
### Articulos
### ![image](https://github.com/Silkaleex/bloggerStyle/assets/82760991/eb2348de-81b1-422b-ab5d-95391343456f)
### ![image](https://github.com/Silkaleex/bloggerStyle/assets/82760991/0298d216-bef3-4e1d-b571-92c2b7984730)
### Listado
### ![image](https://github.com/Silkaleex/bloggerStyle/assets/82760991/21da1163-b403-47d2-9834-52552fe2a76f)
### ![image](https://github.com/Silkaleex/bloggerStyle/assets/82760991/9c38720d-b201-46c0-ace0-0eea712cc9cc)
### ![image](https://github.com/Silkaleex/bloggerStyle/assets/82760991/dace619b-9413-436c-96f8-d0f2e3e60dec)
### Detalles
### ![image](https://github.com/Silkaleex/bloggerStyle/assets/82760991/fab7dddc-6d43-4c50-a3c3-fe208c6372f7)
### ![image](https://github.com/Silkaleex/bloggerStyle/assets/82760991/709314af-4937-4958-ba7b-2b980a57cf42)



