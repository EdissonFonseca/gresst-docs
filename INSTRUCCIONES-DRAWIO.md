# 📋 Instrucciones para Importar Modelos C4 en draw.io

## 🎯 Archivos Generados

He creado 4 archivos XML para draw.io que contienen los modelos C4 completos de Gresst:

1. **`C4-Context-Gresst.drawio`** - Diagrama de Contexto (Nivel 1)
2. **`C4-Container-Gresst.drawio`** - Diagrama de Contenedores (Nivel 2)
3. **`C4-Component-Gresst.drawio`** - Diagrama de Componentes (Nivel 3)
4. **`C4-Code-Gresst.drawio`** - Diagrama de Código (Nivel 4)

## 🚀 Cómo Importar en draw.io

### Opción 1: Importar desde archivo local

1. **Abre draw.io** en tu navegador: [https://app.diagrams.net/](https://app.diagrams.net/)

2. **Selecciona "Open Existing Diagram"**

3. **Haz clic en "Device"** para seleccionar archivos desde tu computadora

4. **Navega a la carpeta** donde guardaste los archivos `.drawio`

5. **Selecciona el archivo** que quieres importar (ej: `C4-Context-Gresst.drawio`)

6. **Haz clic en "Open"**

### Opción 2: Importar desde GitHub (si subiste los archivos)

1. **Abre draw.io** en tu navegador

2. **Selecciona "Open Existing Diagram"**

3. **Haz clic en "GitHub"** o "URL"

4. **Pega la URL** del archivo raw de GitHub:
   ```
   https://raw.githubusercontent.com/EdissonFonseca/gresst-docs/main/C4-Context-Gresst.drawio
   ```

5. **Haz clic en "Open"**

## 🎨 Personalización en draw.io

### Cambiar Colores
1. **Selecciona un elemento** haciendo clic en él
2. **En el panel derecho**, busca la sección "Style"
3. **Cambia el color de relleno** (Fill) o borde (Stroke)
4. **Aplica el cambio** y se reflejará inmediatamente

### Modificar Texto
1. **Haz doble clic** en el elemento que quieres editar
2. **Escribe el nuevo texto**
3. **Presiona Enter** para confirmar

### Agregar Elementos
1. **Arrastra elementos** desde la barra lateral izquierda
2. **Conecta elementos** usando las flechas de conexión
3. **Personaliza el estilo** según tus necesidades

### Exportar en Diferentes Formatos
1. **Ve a File → Export as**
2. **Selecciona el formato** deseado:
   - **PNG** - Para imágenes de alta calidad
   - **PDF** - Para documentos
   - **SVG** - Para gráficos vectoriales
   - **XML** - Para editar posteriormente

## 📊 Estructura de los Diagramas

### 🎯 Nivel 1 - Contexto
- **Usuarios**: Generadores, Gestores, Recolectores, Administradores
- **Sistema Principal**: Gresst Platform
- **Sistemas Externos**: ERP, Facturación, GIS, Notificaciones, Pagos

### 🏗️ Nivel 2 - Contenedores
- **Frontend**: Web App (React/Vue.js), Mobile App (React Native/Flutter)
- **API Gateway**: Kong/Nginx
- **Backend Services**: Auth, Management, Tracking, Notification, Payment
- **Data Layer**: PostgreSQL, Redis, File Storage
- **Infrastructure**: Load Balancer, CDN

### 🔧 Nivel 3 - Componentes
- **Controllers**: Manejan peticiones HTTP
- **Services**: Lógica de negocio
- **Repositories**: Acceso a datos
- **Integrations**: Conexiones externas
- **Utilities**: Servicios auxiliares

### 💻 Nivel 4 - Código
- **WasteService**: Clase principal del servicio
- **WasteRepository**: Acceso a datos de residuos
- **ValidationService**: Validaciones de negocio
- **Domain Models**: Waste, WasteData, Location, etc.
- **Enumerations**: WasteType, WasteStatus

## 🎨 Paleta de Colores Utilizada

- **👥 Usuarios**: `#e1f5fe` (Azul claro)
- **🏢 Sistema Principal**: `#e8f5e8` (Verde claro)
- **📊 Sistemas Externos**: `#f3e5f5` (Púrpura claro)
- **🌐 Frontend**: `#e8f5e8` (Verde claro)
- **🔧 Backend**: `#fff3e0` (Naranja claro)
- **🗄️ Data Layer**: `#f3e5f5` (Púrpura claro)
- **⚖️ Infrastructure**: `#fce4ec` (Rosa claro)
- **🛠️ Utilities**: `#fce4ec` (Rosa claro)

## 💡 Consejos de Uso

1. **Mantén la consistencia** en colores y estilos
2. **Usa iconos** para hacer los diagramas más visuales
3. **Agrupa elementos** relacionados
4. **Añade notas** para explicar decisiones técnicas
5. **Exporta en alta resolución** para presentaciones

## 🔄 Actualizaciones

Para actualizar los diagramas:

1. **Edita el archivo XML** directamente
2. **O modifica en draw.io** y exporta como XML
3. **Guarda los cambios** en tu repositorio
4. **Comparte la nueva versión** con tu equipo

## 📱 Uso en Presentaciones

- **PowerPoint**: Importa como imagen PNG
- **Google Slides**: Arrastra el archivo SVG
- **Confluence**: Usa el plugin de draw.io
- **Notion**: Importa como imagen o embebido

¡Los diagramas están listos para usar en draw.io! 🎉

