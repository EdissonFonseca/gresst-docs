# Autenticación

La API de la Plataforma de Gestión de Residuos utiliza múltiples métodos de autenticación para garantizar la seguridad y flexibilidad en el acceso a los recursos.

## Métodos de Autenticación

### 🔑 API Keys
Las API Keys son la forma más simple de autenticarse con la API:

```bash
curl -H "Authorization: Bearer YOUR_API_KEY" \
     https://api.waste-management.com/v1/collections
```

### 🔐 OAuth 2.0
Para aplicaciones que requieren acceso en nombre de usuarios:

```bash
# Obtener token de acceso
curl -X POST https://api.waste-management.com/oauth/token \
     -H "Content-Type: application/x-www-form-urlencoded" \
     -d "grant_type=client_credentials&client_id=YOUR_CLIENT_ID&client_secret=YOUR_CLIENT_SECRET"
```

### 🎫 JWT Tokens
Para autenticación de sesiones de usuario:

```bash
curl -H "Authorization: Bearer JWT_TOKEN" \
     https://api.waste-management.com/v1/collections
```

## Configuración de API Keys

### Creación de API Key
1. Accede a la configuración de tu cuenta
2. Ve a la sección "API Keys"
3. Haz clic en "Crear nueva API Key"
4. Configura los permisos necesarios
5. Guarda la API Key de forma segura

### Permisos de API Key
- **Lectura** - Acceso de solo lectura a recursos
- **Escritura** - Acceso de lectura y escritura
- **Administración** - Acceso completo a la API
- **Personalizado** - Permisos específicos por endpoint

## OAuth 2.0

### Flujo de Autorización
1. **Solicitud de autorización** - Redirigir al usuario a la página de autorización
2. **Autorización del usuario** - El usuario autoriza la aplicación
3. **Código de autorización** - Se devuelve un código de autorización
4. **Intercambio por token** - Intercambiar el código por un token de acceso
5. **Uso del token** - Usar el token para acceder a la API

### Scopes Disponibles
- **read:collections** - Leer recolecciones
- **write:collections** - Crear y modificar recolecciones
- **read:customers** - Leer información de clientes
- **write:customers** - Crear y modificar clientes
- **admin:all** - Acceso completo a la API

## JWT Tokens

### Estructura del Token
```json
{
  "header": {
    "alg": "HS256",
    "typ": "JWT"
  },
  "payload": {
    "sub": "user123",
    "iat": 1640995200,
    "exp": 1641081600,
    "scope": "read:collections write:collections"
  }
}
```

### Validación del Token
```python
import jwt

def validate_jwt_token(token, secret):
    try:
        payload = jwt.decode(token, secret, algorithms=['HS256'])
        return payload
    except jwt.ExpiredSignatureError:
        return None
    except jwt.InvalidTokenError:
        return None
```

## Rate Limiting

### Límites por Método de Autenticación
- **API Keys básicas**: 1000 requests/hora
- **API Keys premium**: 10000 requests/hora
- **API Keys enterprise**: 100000 requests/hora
- **OAuth tokens**: 5000 requests/hora
- **JWT tokens**: 1000 requests/hora

### Headers de Rate Limiting
```http
X-RateLimit-Limit: 1000
X-RateLimit-Remaining: 999
X-RateLimit-Reset: 1640995200
```

## Seguridad

### Mejores Prácticas
- **Nunca** expongas tu API Key en código cliente
- **Usa HTTPS** para todas las comunicaciones
- **Rota** las API Keys regularmente
- **Implementa** rate limiting en tu aplicación

### Validación de Tokens
- **Verifica** la firma del token
- **Valida** la expiración del token
- **Confirma** los permisos del token
- **Registra** el uso del token

---

¿Necesitas información sobre endpoints específicos? Consulta la sección de [Endpoints](/docs/api/endpoints) para más detalles.
