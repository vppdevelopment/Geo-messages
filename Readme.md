# Instalacion de ambiente

## src (Codigo fuente)

## Examples (Ejemplos funcionando de las tecnologias a utilizar)

Geolocalizacion basada en rangos de busqueda:
http://developer.factual.com/common-places-use-case-examples/
* Algunas caracteristicas requieren cuenta premium, asi que debemos investigar cuales podemos usar

APIdocs de Factual:
http://developer.factual.com/api-docs/

Uso del API de factual para hacer busquedas por rango y ubicacion
http://developer.factual.com/working-with-factual-places/index.html

Clasificacion de lugares en el API de factual.
http://developer.factual.com/search-place-rank-and-boost/index.html

Categorias de lugares en Factual.
http://developer.factual.com/working-with-categories/

## Instalacion de bower

1. Tener previamente instalado *node* y *npm*
2. `npm install -g bower`
3. `bower install` (En la carpeta donde se encuentre el bower.json)

## Instalacion de firebase

1. Instalar node.js en la maquina

2. Verificar las variables de entorno e incluir la carpeta bin de la instalacion de node.js en PATH

	* Para verificar la ruta de la instalacion de node.js ejecutar el comando npm get prefix
3. Ejecutar el comando npm install -g firebase-tools

	* Si falla por permisos en la carpeta de node_modules de la instalacion de node.js asegurarse que esta tenga todos los permisos 
		Mac y Linux: chmod 777 <ruta de instalacion de node.js>

	Mas informacion https://github.com/npm/npm/issues/5869

4. Para verificar que la instalacion fue realizada con exito, ejecutar el comando 'firebase' en la consola

5. Para crear una aplicacion de firebase ejecutar 'firebase init' y adicionar las credenciales de acceso de firebase.
