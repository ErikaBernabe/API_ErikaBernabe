Una **API REST (Representational State Transfer)** es un estilo de arquitectura para diseñar servicios web que se basan en un conjunto de principios que deben cumplir. Aquí están las restricciones clave que una API REST debe seguir para ser considerada RESTful:

1. **Arquitectura cliente-servidor**:
   - La API debe estar basada en una separación clara entre el cliente y el servidor. El cliente realiza las solicitudes y el servidor procesa las peticiones, enviando de vuelta las respuestas.
   
2. **Comunicación sin estado**:
   - Cada petición del cliente al servidor debe contener toda la información necesaria para entender la solicitud, sin depender de información almacenada en el servidor. Esto significa que el servidor no mantiene el estado de la sesión del cliente entre diferentes solicitudes.
   
3. **Capacidad de cacheo**:
   - Las respuestas de las peticiones deben ser explícitamente marcadas como cacheables o no cacheables. Esto ayuda a mejorar la eficiencia de la API, ya que los clientes pueden almacenar las respuestas y reutilizarlas sin necesidad de volver a consultar el servidor.

4. **Interfaz uniforme**:
   - La API debe tener una interfaz consistente que permita la interacción con los recursos de una manera estándar. Esto incluye el uso de métodos HTTP (GET, POST, PUT, DELETE) para las operaciones CRUD y la representación de los recursos a través de identificadores únicos (URLs).

5. **Sistema en capas**:
   - La API debe estar diseñada para soportar capas entre el cliente y el servidor, como proxies, balanceadores de carga o servidores intermedios, sin que esto afecte la interacción del cliente con el servidor final.

6. **Código bajo demanda (opcional)**:
   - Aunque es opcional, una API REST puede enviar código ejecutable al cliente, como scripts JavaScript, que pueden ser ejecutados en el lado del cliente para mejorar la funcionalidad.

**Ejemplo de restricciones para un servidor REST**:
- El servidor debe garantizar que cada recurso tenga una identificación única a través de una URL.
- El servidor no debe almacenar el estado del cliente entre solicitudes (stateless).
- El servidor debe proporcionar respuestas que sean cacheables cuando sea posible para mejorar la eficiencia.


**Api**
- Metodo p/peticiones


**REST**
- Arquitectura de software
- Define requisitos7restricciones

**API-RestFu**
- cumple 