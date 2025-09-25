# API y Integraciones

La **API de la Plataforma de Gestión de Residuos** proporciona acceso programático a todas las funcionalidades de la plataforma, permitiendo la integración con sistemas externos y el desarrollo de aplicaciones personalizadas.

## Características Principales

### 🔗 API RESTful
- **Endpoints REST** estándar para todas las operaciones
- **Formato JSON** para intercambio de datos
- **Códigos de estado HTTP** estándar
- **Versionado** de API para compatibilidad

### 🔐 Autenticación Segura
- **API Keys** para autenticación de aplicaciones
- **OAuth 2.0** para autenticación de usuarios
- **JWT Tokens** para sesiones seguras
- **Rate Limiting** para protección contra abuso

### 📡 Webhooks
- **Notificaciones en tiempo real** de eventos importantes
- **Configuración personalizable** de webhooks
- **Retry automático** para entregas fallidas
- **Validación** de firmas para seguridad

### 🛠️ SDKs y Herramientas
- **SDKs** para lenguajes populares (Python, JavaScript, Java, C#)
- **Herramientas** de desarrollo y testing
- **Documentación** interactiva con Swagger/OpenAPI
- **Ejemplos** de código y tutoriales

## Endpoints Principales

### 🚛 Gestión de Recolecciones
- **GET /api/v1/collections** - Listar recolecciones
- **POST /api/v1/collections** - Crear nueva recolección
- **GET /api/v1/collections/\{id\}** - Obtener recolección específica
- **PUT /api/v1/collections/\{id\}** - Actualizar recolección
- **DELETE /api/v1/collections/\{id\}** - Eliminar recolección

### 🗺️ Gestión de Rutas
- **GET /api/v1/routes** - Listar rutas
- **POST /api/v1/routes** - Crear nueva ruta
- **GET /api/v1/routes/\{id\}** - Obtener ruta específica
- **PUT /api/v1/routes/\{id\}** - Actualizar ruta
- **POST /api/v1/routes/\{id\}/optimize** - Optimizar ruta

### 👥 Gestión de Clientes
- **GET /api/v1/customers** - Listar clientes
- **POST /api/v1/customers** - Crear nuevo cliente
- **GET /api/v1/customers/\{id\}** - Obtener cliente específico
- **PUT /api/v1/customers/\{id\}** - Actualizar cliente
- **DELETE /api/v1/customers/\{id\}** - Eliminar cliente

### 🚛 Gestión de Flota
- **GET /api/v1/vehicles** - Listar vehículos
- **POST /api/v1/vehicles** - Crear nuevo vehículo
- **GET /api/v1/vehicles/\{id\}** - Obtener vehículo específico
- **PUT /api/v1/vehicles/\{id\}** - Actualizar vehículo
- **GET /api/v1/vehicles/\{id\}/location** - Obtener ubicación actual

## Autenticación

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

# Usar token de acceso
curl -H "Authorization: Bearer ACCESS_TOKEN" \
     https://api.waste-management.com/v1/collections
```

### 🎫 JWT Tokens
Para autenticación de sesiones de usuario:

```bash
curl -H "Authorization: Bearer JWT_TOKEN" \
     https://api.waste-management.com/v1/collections
```

## Formato de Datos

### 📄 Estructura de Respuesta
Todas las respuestas de la API siguen un formato estándar:

```json
{
  "success": true,
  "data": {
    "id": "12345",
    "type": "collection",
    "attributes": {
      "status": "completed",
      "created_at": "2024-01-15T10:30:00Z",
      "updated_at": "2024-01-15T12:45:00Z"
    }
  },
  "meta": {
    "pagination": {
      "page": 1,
      "per_page": 20,
      "total": 100
    }
  }
}
```

### ❌ Manejo de Errores
Los errores se devuelven con códigos de estado HTTP apropiados:

```json
{
  "success": false,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Los datos proporcionados no son válidos",
    "details": {
      "field": "email",
      "message": "El formato del email no es válido"
    }
  }
}
```

## Paginación

### 📄 Parámetros de Paginación
- **page** - Número de página (por defecto: 1)
- **per_page** - Elementos por página (por defecto: 20, máximo: 100)
- **sort** - Campo para ordenar
- **order** - Dirección del orden (asc, desc)

### 📊 Ejemplo de Uso
```bash
curl "https://api.waste-management.com/v1/collections?page=2&per_page=50&sort=created_at&order=desc"
```

## Filtros y Búsqueda

### 🔍 Filtros Disponibles
- **status** - Filtrar por estado
- **date_from** - Fecha de inicio
- **date_to** - Fecha de fin
- **customer_id** - ID del cliente
- **vehicle_id** - ID del vehículo

### 📊 Ejemplo de Uso
```bash
curl "https://api.waste-management.com/v1/collections?status=completed&date_from=2024-01-01&date_to=2024-01-31"
```

## Webhooks

### 🔔 Configuración de Webhooks
Los webhooks permiten recibir notificaciones en tiempo real de eventos importantes:

```json
{
  "url": "https://your-app.com/webhooks/waste-management",
  "events": ["collection.completed", "collection.failed"],
  "secret": "your-webhook-secret"
}
```

### 📡 Eventos Disponibles
- **collection.created** - Nueva recolección creada
- **collection.updated** - Recolección actualizada
- **collection.completed** - Recolección completada
- **collection.failed** - Recolección fallida
- **route.optimized** - Ruta optimizada
- **vehicle.location_updated** - Ubicación de vehículo actualizada

### 🔐 Validación de Webhooks
Los webhooks incluyen una firma para validar la autenticidad:

```python
import hmac
import hashlib

def verify_webhook_signature(payload, signature, secret):
    expected_signature = hmac.new(
        secret.encode('utf-8'),
        payload.encode('utf-8'),
        hashlib.sha256
    ).hexdigest()
    
    return hmac.compare_digest(signature, expected_signature)
```

## SDKs Disponibles

### 🐍 Python SDK
```python
from waste_management import WasteManagementAPI

api = WasteManagementAPI(api_key='YOUR_API_KEY')

# Listar recolecciones
collections = api.collections.list()

# Crear nueva recolección
collection = api.collections.create({
    'customer_id': '12345',
    'waste_type': 'organic',
    'scheduled_date': '2024-01-20T10:00:00Z'
})
```

### 🟨 JavaScript SDK
```javascript
const WasteManagementAPI = require('@waste-management/api');

const api = new WasteManagementAPI({
  apiKey: 'YOUR_API_KEY'
});

// Listar recolecciones
const collections = await api.collections.list();

// Crear nueva recolección
const collection = await api.collections.create({
  customer_id: '12345',
  waste_type: 'organic',
  scheduled_date: '2024-01-20T10:00:00Z'
});
```

### ☕ Java SDK
```java
import com.wastemanagement.api.WasteManagementAPI;

WasteManagementAPI api = new WasteManagementAPI("YOUR_API_KEY");

// Listar recolecciones
List<Collection> collections = api.collections().list();

// Crear nueva recolección
Collection collection = api.collections().create(CollectionRequest.builder()
    .customerId("12345")
    .wasteType("organic")
    .scheduledDate("2024-01-20T10:00:00Z")
    .build());
```

## Rate Limiting

### ⏱️ Límites de Velocidad
- **1000 requests** por hora para API Keys básicas
- **10000 requests** por hora para API Keys premium
- **100000 requests** por hora para API Keys enterprise

### 📊 Headers de Rate Limiting
```http
X-RateLimit-Limit: 1000
X-RateLimit-Remaining: 999
X-RateLimit-Reset: 1640995200
```

### 🔄 Manejo de Rate Limiting
```python
import time

def make_request_with_retry(api_call):
    while True:
        try:
            return api_call()
        except RateLimitExceeded:
            time.sleep(60)  # Esperar 1 minuto
            continue
```

## Seguridad

### 🔐 Mejores Prácticas
- **Nunca** expongas tu API Key en código cliente
- **Usa HTTPS** para todas las comunicaciones
- **Valida** todas las entradas de datos
- **Implementa** rate limiting en tu aplicación

### 🛡️ Validación de Datos
- **Valida** todos los datos de entrada
- **Sanitiza** datos antes de procesarlos
- **Usa** tipos de datos apropiados
- **Implementa** validación de esquemas

## Testing

### 🧪 Sandbox Environment
- **URL**: https://sandbox-api.waste-management.com
- **Datos de prueba** incluidos
- **Sin límites** de rate limiting
- **Datos** se resetean cada 24 horas

### 🔧 Herramientas de Testing
- **Postman Collection** disponible
- **Curl examples** en la documentación
- **SDK examples** para cada lenguaje
- **Mock server** para desarrollo local

## Soporte y Recursos

### 📚 Documentación
- **API Reference** completa
- **Guías** de integración
- **Tutoriales** paso a paso
- **Ejemplos** de código

### 💬 Soporte Técnico
- **Email**: api-support@waste-management.com
- **Chat**: Disponible en la plataforma
- **Foro**: Comunidad de desarrolladores
- **GitHub**: Repositorios de ejemplos

### 🔄 Actualizaciones
- **Changelog** de versiones
- **Notificaciones** de cambios importantes
- **Deprecation notices** con anticipación
- **Migration guides** para actualizaciones

---

¿Necesitas información sobre autenticación específica? Consulta la sección de [Autenticación](/docs/api/autenticacion) para más detalles.
