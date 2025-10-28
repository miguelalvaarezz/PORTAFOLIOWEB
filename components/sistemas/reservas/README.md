# Sistema de Reservas - Estructura

## 📁 Organización Modular

```
reservas/
├── SistemaReservas.tsx    # Componente principal
├── ui/                     # Componentes de interfaz
│   ├── CalendarWidget.tsx
│   ├── CourtSelector.tsx
│   ├── TimeSlotSelector.tsx
│   ├── PaymentModal.tsx
│   └── ConfirmButton.tsx
├── data/                   # Datos y configuración
│   ├── mockData.ts         # Datos de prueba
│   ├── types.ts            # Interfaces TypeScript
│   └── config.ts           # Configuración por defecto
├── hooks/                  # Custom hooks
│   ├── useReservations.ts
│   ├── useCourts.ts
│   └── useTimeSlots.ts
└── utils/                  # Funciones auxiliares
    ├── dateHelpers.ts
    ├── validation.ts
    └── apiHelpers.ts       # Para futura integración con backend
```

## 🎯 Descripción de Carpetas

### **UI** (Interfaz de Usuario)
Contiene todos los componentes visuales:
- `CalendarWidget.tsx`: Selector de fechas
- `CourtSelector.tsx`: Selector de pistas
- `TimeSlotSelector.tsx`: Selector de horarios
- `PaymentModal.tsx`: Modal de pago
- `ConfirmButton.tsx`: Botones de confirmación

### **Data** (Datos)
Contiene datos, tipos y configuración:
- `mockData.ts`: Datos de prueba (reemplazar con API)
- `types.ts`: Interfaces TypeScript para tipado fuerte
- `config.ts`: Configuración por defecto (colores, textos, etc.)

### **Hooks** (Lógica Custom)
Contiene hooks personalizados para la lógica de negocio:
- `useReservations.ts`: Gestión de reservas
- `useCourts.ts`: Gestión de pistas y disponibilidad
- `useTimeSlots.ts`: Gestión de horarios disponibles

### **Utils** (Utilidades)
Funciones auxiliares y helpers:
- `dateHelpers.ts`: Manipulación de fechas
- `validation.ts`: Validación de datos
- `apiHelpers.ts`: Helpers para integración con backend/API

## 🔄 Migración a Backend

### Fase 1: Estructura actual (Mock Data)
- Todos los datos están en `data/mockData.ts`
- Los hooks usan datos estáticos

### Fase 2: Integración con API
- Crear `api/reservations.ts` para llamadas a backend
- Actualizar hooks para usar `useQuery` / `useMutation` de React Query
- Mantener compatibilidad con datos mock

### Fase 3: Base de Datos
- Backend con Prisma/MongoDB
- API REST o GraphQL
- Real-time con WebSockets para disponibilidad

## 📦 Uso

```tsx
import SistemaReservas from './SistemaReservas';

<SistemaReservas 
  colors={{ primary: "#D6E826" }}
  clubName="Mi Club"
  apiConfig={{
    endpoint: "https://api.miclub.com/reservations",
    headers: { "Authorization": "Bearer..." }
  }}
/>
```

