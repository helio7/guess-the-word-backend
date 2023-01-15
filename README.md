Me pasaron el desafío el viernes 13 a las 17hs pero empecé a revisarlo y desarrollar hace unas 5 horas. Tengo este desarrollo para entregar ahora, después de las casi 48 horas.

No están todos los requisitos cumplidos, pero tengo una idea de cómo implementar lo que me falta, y lo voy a hacer próximamente a pesar de haberme quedado sin tiempo.

Paso a explicar lo que se logró:
- Una API en Node.js con TypeScript desarrollada usando el Framework Nest.js.
- Se conecta a una base de datos SQL (mediante Postgres).
  - Tiene las siguientes tablas:
    - 'word': guarda todas las palabras que considera el juego.
    - 'game': guarda todas las partidas que crea el juego.
  - Está sólo en mi computadora, así que se la tendría que recrear en el equipo donde se quiera probar esta API.
- La carpeta 'world-loader-script' contiene el diccionario 'words.txt' junto a un script. Con el comando 'npm run generate-insert-sql-query-from-words-txt' en la raíz del proyecto (después de 'npm install'), se consume ese diccionario y se prepara una consulta SQL para insertar todas las palabras en la base de datos.
- Mientras el servidor esté funcionando, cada 5 minutos crea una nueva partida en la base de datos, eligiendo una palabra al azar que no se haya usado antes en una partida.
- El servidor expone un endpoint 'POST /wordle/guess-word/:gameId' que acepta el ID de una partida, y una palabra para intentar adivinar la del juego. El endpoint devuelve los resultados del intento correctamente.

Falta:
- Un sistema de autenticación que permita registrar usuarios y luego loguearse con los mismos, para obtener un token que permita acceder a los endpoints protegidos de la API. 
- Un modo de persistir la cantidad de intentos que cada usuario hizo por partida (lo lograría con una tabla intermedia 'UserGame' entre otra tabla 'User' y 'Game'.
- Que el cron reinicie esa información persistida de intentos cada 5 minutos.
- Persistir en 'UserGame' un campo que indique si el usuario adivinó o no la palabra.
- Un endpoint que revise la tabla 'UserGame' para saber la cantidad de veces que cada usuario adivinó la palabra, y devuelva los que más lo hayan logrado.
- Un endpoint similar al anterior pero que revise el campo en relación a las palabras.
- Pruebas para los controladores y los servicios con Jest.
