# Webhooks

Los webhooks permiten recibir notificaciones en tiempo real de eventos importantes en la Plataforma de Gestión de Residuos.

## Configuración de Webhooks

### Crear Webhook
```http
POST /api/v1/webhooks
```

**Cuerpo de la petición:**
```json
{
  "url": "https://your-app.com/webhooks/waste-management",
  "events": ["collection.completed", "collection.failed"],
  "secret": "your-webhook-secret"
}
```

### Eventos Disponibles
- `collection.created` - Nueva recolección creada
- `collection.updated` - Recolección actualizada
- `collection.completed` - Recolección completada
- `collection.failed` - Recolección fallida
- `route.optimized` - Ruta optimizada
- `vehicle.location_updated` - Ubicación de vehículo actualizada

## Validación de Webhooks

### Verificar Firma
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

### Headers de Webhook
```http
X-Webhook-Signature: sha256=abc123...
X-Webhook-Event: collection.completed
X-Webhook-Delivery: 12345
```

## Estructura de Eventos

### Evento de Recolección Completada
```json
{
  "id": "evt_12345",
  "type": "collection.completed",
  "created_at": "2024-01-15T10:30:00Z",
  "data": {
    "collection_id": "12345",
    "status": "completed",
    "completed_at": "2024-01-15T10:30:00Z",
    "waste_type": "organic",
    "customer_id": "67890"
  }
}
```

### Evento de Ubicación de Vehículo
```json
{
  "id": "evt_12346",
  "type": "vehicle.location_updated",
  "created_at": "2024-01-15T10:35:00Z",
  "data": {
    "vehicle_id": "12345",
    "location": {
      "latitude": 40.7128,
      "longitude": -74.0060
    },
    "timestamp": "2024-01-15T10:35:00Z"
  }
}
```

## Manejo de Errores

### Retry Automático
- **3 intentos** automáticos para entregas fallidas
- **Backoff exponencial** entre intentos
- **Timeout** de 30 segundos por intento
- **Notificación** de fallos persistentes

### Códigos de Estado
- `200 OK` - Webhook entregado exitosamente
- `4xx` - Error del cliente (no se reintenta)
- `5xx` - Error del servidor (se reintenta)

---

¿Necesitas información sobre SDKs? Consulta la sección de [SDK](/docs/api/sdk) para más detalles.
