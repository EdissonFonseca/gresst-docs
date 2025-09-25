# Endpoints de la API

Esta sección documenta todos los endpoints disponibles en la API de la Plataforma de Gestión de Residuos.

## Gestión de Recolecciones

### Listar Recolecciones
```http
GET /api/v1/collections
```

**Parámetros de consulta:**
- `page` - Número de página (por defecto: 1)
- `per_page` - Elementos por página (por defecto: 20)
- `status` - Filtrar por estado
- `date_from` - Fecha de inicio
- `date_to` - Fecha de fin

**Respuesta:**
```json
{
  "success": true,
  "data": [
    {
      "id": "12345",
      "type": "collection",
      "attributes": {
        "status": "completed",
        "waste_type": "organic",
        "scheduled_date": "2024-01-15T10:00:00Z",
        "completed_date": "2024-01-15T10:30:00Z"
      }
    }
  ]
}
```

### Crear Recolección
```http
POST /api/v1/collections
```

**Cuerpo de la petición:**
```json
{
  "customer_id": "12345",
  "waste_type": "organic",
  "scheduled_date": "2024-01-20T10:00:00Z",
  "location": {
    "address": "123 Main St",
    "latitude": 40.7128,
    "longitude": -74.0060
  }
}
```

### Obtener Recolección
```http
GET /api/v1/collections/{id}
```

### Actualizar Recolección
```http
PUT /api/v1/collections/{id}
```

### Eliminar Recolección
```http
DELETE /api/v1/collections/{id}
```

## Gestión de Rutas

### Listar Rutas
```http
GET /api/v1/routes
```

### Crear Ruta
```http
POST /api/v1/routes
```

### Optimizar Ruta
```http
POST /api/v1/routes/{id}/optimize
```

## Gestión de Clientes

### Listar Clientes
```http
GET /api/v1/customers
```

### Crear Cliente
```http
POST /api/v1/customers
```

**Cuerpo de la petición:**
```json
{
  "name": "Empresa ABC",
  "email": "contacto@empresa.com",
  "phone": "+1234567890",
  "address": {
    "street": "123 Main St",
    "city": "New York",
    "state": "NY",
    "zip": "10001"
  }
}
```

## Gestión de Flota

### Listar Vehículos
```http
GET /api/v1/vehicles
```

### Obtener Ubicación de Vehículo
```http
GET /api/v1/vehicles/{id}/location
```

**Respuesta:**
```json
{
  "success": true,
  "data": {
    "vehicle_id": "12345",
    "location": {
      "latitude": 40.7128,
      "longitude": -74.0060,
      "timestamp": "2024-01-15T10:30:00Z"
    },
    "status": "in_route"
  }
}
```

## Códigos de Estado HTTP

### Éxito (2xx)
- `200 OK` - Petición exitosa
- `201 Created` - Recurso creado exitosamente
- `204 No Content` - Petición exitosa sin contenido

### Error del Cliente (4xx)
- `400 Bad Request` - Petición malformada
- `401 Unauthorized` - No autenticado
- `403 Forbidden` - Sin permisos
- `404 Not Found` - Recurso no encontrado
- `422 Unprocessable Entity` - Datos de validación fallidos

### Error del Servidor (5xx)
- `500 Internal Server Error` - Error interno del servidor
- `502 Bad Gateway` - Error de gateway
- `503 Service Unavailable` - Servicio no disponible

## Manejo de Errores

### Estructura de Error
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

### Códigos de Error Comunes
- `VALIDATION_ERROR` - Error de validación de datos
- `AUTHENTICATION_ERROR` - Error de autenticación
- `AUTHORIZATION_ERROR` - Error de autorización
- `NOT_FOUND` - Recurso no encontrado
- `RATE_LIMIT_EXCEEDED` - Límite de velocidad excedido

---

¿Necesitas información sobre webhooks? Consulta la sección de [Webhooks](/docs/api/webhooks) para más detalles.
