# JSON Web Token (JWT)

## ¿Qué es un JSON Web Token?

Un **JSON Web Token (JWT)** es un estándar abierto (RFC 7519) que define una forma compacta y segura de transmitir información entre dos partes como un objeto JSON. Estos tokens se utilizan comúnmente para autenticar y autorizar usuarios en aplicaciones web y servicios API, permitiendo que los sistemas confíen en el token sin necesidad de consultar una base de datos en cada solicitud.

### Características de los JWT

- **Autenticación sin estado**: Los JWT permiten que los servidores no necesiten almacenar la información del usuario en cada solicitud. En su lugar, la información está en el propio token, lo que facilita la escalabilidad de aplicaciones.
- **Seguro y verificable**: Los JWT son firmados digitalmente usando algoritmos como HMAC o RSA, lo que asegura que no se pueden alterar sin invalidar su firma.

## Estructura de un JWT

Un JSON Web Token consta de tres partes principales, cada una codificada en Base64 y separada por puntos (`.`). Las partes de un JWT son:

1. **Header (Encabezado)**
2. **Payload (Cuerpo)**
3. **Signature (Firma)**

### 1. Header (Encabezado)

El encabezado contiene información sobre el tipo de token y el algoritmo de firma utilizado. Usualmente, el tipo de token será `JWT` y el algoritmo puede ser `HS256` (HMAC con SHA-256) o `RS256` (RSA con SHA-256).

**Ejemplo de un header:**

```json
{
  "alg": "HS256",
  "typ": "JWT"
}
