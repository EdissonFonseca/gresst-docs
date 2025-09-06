# SDK

Los SDKs (Software Development Kits) proporcionan bibliotecas para integrar fácilmente la API de la Plataforma de Gestión de Residuos en diferentes lenguajes de programación.

## SDKs Disponibles

### 🐍 Python SDK
```bash
pip install waste-management-api
```

**Uso básico:**
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
```bash
npm install @waste-management/api
```

**Uso básico:**
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
```xml
<dependency>
    <groupId>com.wastemanagement</groupId>
    <artifactId>api-client</artifactId>
    <version>1.0.0</version>
</dependency>
```

**Uso básico:**
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

## Características de los SDKs

### 🔧 Funcionalidades Comunes
- **Autenticación automática** con API Keys
- **Manejo de errores** estandarizado
- **Rate limiting** automático
- **Retry automático** para fallos temporales

### 📚 Documentación
- **Documentación** completa para cada SDK
- **Ejemplos** de código
- **Guías** de integración
- **Tutoriales** paso a paso

### 🧪 Testing
- **Mocks** para testing
- **Datos de prueba** incluidos
- **Herramientas** de debugging
- **Ejemplos** de tests

---

¿Necesitas información sobre guías de usuario? Consulta la sección de [Guías de Usuario](/docs/guides/getting-started) para más detalles.
