# rickymorty
Aplicacion basada en una API de Rick y Morty

## Yargs Commands
dos tipos de comandos
1. list: muestra los nombres de todos los personajes que tengan alguna coincidencia con el valor dado.
2. view: mostrara ciertos parametros en base al nombre de un personaje.

### Ejemplo de uso list
**$npm start -- list --filter="status" --value="dead" --page=3**

*de esta manera estamos filtrando solo los personajes con el valor dead en status de la pagina 3*

### Ejemplo de uso view
**$npm start -- view --name="toxic rick"**

*se mostraran por pantalla los datos de lo personajes cuyo nombre coincida*
