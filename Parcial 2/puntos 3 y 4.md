 3.  **Puntos de Acceso Fáciles de Recordar (Easy-to-Remember Access Points):**
    
   Los puntos de contacto entre todas las aplicaciones clientes y la API se llaman endpoints (puntos de acceso). La API necesita proporcionarlos para permitir que los clientes accedan a sus funcionalidades. Esto se puede hacer a través de cualquier protocolo de comunicación elegido. Estos puntos de acceso deben tener nombres mnemotécnicos para ayudar al desarrollador a entender su propósito con solo leerlos.

Por supuesto, el nombre en sí nunca debe reemplazar una documentación detallada, pero normalmente se considera una buena idea hacer referencia al recurso que se está utilizando y tener algún tipo de indicador de la acción que se está llevando a cabo al llamar a ese punto de acceso.

El siguiente es un buen ejemplo de un punto de acceso mal nombrado (destinado a listar los libros en una librería):
bashCopiar códigoGET /books/action1
Este ejemplo utiliza el protocolo HTTP para especificar el punto de acceso, y aunque la entidad utilizada (books) está siendo referenciada, el nombre de la acción no está claro; action1 podría significar cualquier cosa, o peor aún, el significado podría cambiar en el futuro, pero el nombre aún sería adecuado, por lo que cualquier cliente existente sin duda fallaría.




4. **Interfaz Uniforme (Uniform Interface):**
   
   
   Los puntos de acceso fáciles de recordar son importantes, pero también lo es ser consistente al definirlos. De nuevo, tienes que regresar al factor humano cuando consumes una API: tú también eres un humano. Por lo tanto, facilitar la vida de los desarrolladores que utilizan tus APIs es esencial si quieres que alguien las use; no puedes olvidar la experiencia del desarrollador. Esto significa que necesitas ser consistente al definir nombres de endpoints, formatos de solicitud y formatos de respuesta. Puede haber más de una versión para estos últimos dos (más específicamente, el formato de respuesta está directamente ligado a las diversas representaciones que un recurso puede tener), pero mientras el valor predeterminado sea siempre el mismo, no habrá problemas.

Un buen ejemplo de una interfaz inconsistente, aunque no en una API, se puede ver en el lenguaje de programación PHP. Tiene notación con guión bajo en la mayoría de los nombres de funciones, pero el guión bajo no se usa en algunas, por lo que el desarrollador siempre se ve obligado a volver a la documentación para verificar cómo escribir estas funciones (o peor, confiar en su memoria).
Otro ejemplo de mala práctica de diseño en una API es nombrar los endpoints basados en las acciones realizadas en lugar de los recursos manejados. 