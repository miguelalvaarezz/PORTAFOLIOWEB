# Sistema de Torneos - Estructura

## 📁 Organización Modular

```
torneos/
├── SistemaTorneos.tsx      # Componente principal
├── ui/                     # Componentes de interfaz
│   ├── TournamentCard.tsx
│   ├── TournamentTabs.tsx
│   ├── InfoModal.tsx
│   ├── ClassificationModal.tsx
│   ├── RegistrationModal.tsx
│   └── MatchCard.tsx
├── data/                   # Datos y configuración
│   ├── mockData.ts         # Torneos de prueba
│   ├── types.ts            # Interfaces TypeScript
│   └── config.ts           # Configuración por defecto
├── hooks/                  # Custom hooks
│   ├── useTournaments.ts
│   ├── useStandings.ts
│   └── useMatches.ts
└── utils/                  # Funciones auxiliares
    ├── tournamentHelpers.ts
    ├── validation.ts
    └── apiHelpers.ts       # Para futura integración con backend
```

## 🎯 Descripción de Carpetas

### **UI** (Interfaz de Usuario)
Componentes visuales del sistema:
- `TournamentCard.tsx`: Tarjeta individual de torneo
- `TournamentTabs.tsx`: Pestañas (Activos, Próximos, Finalizados)
- `InfoModal.tsx`: Modal de información con tabs
- `ClassificationModal.tsx`: Modal de clasificación
- `RegistrationModal.tsx`: Formulario de inscripción
- `MatchCard.tsx`: Tarjeta de partido

### **Data** (Datos)
- `mockData.ts`: Torneos de prueba
- `types.ts`: Interfaces TypeScript
  - `Tournament` interface
  - `Standing` interface
  - `Match` interface
  - `Registration` interface
- `config.ts`: Configuración (colores, textos, reglas)

### **Hooks** (Lógica Custom)
- `useTournaments.ts`: Gestión de torneos
  - CRUD de torneos
  - Filtrado por estado
  - Paginación
- `useStandings.ts`: Clasificaciones
  - Cálculo de puntos
  - Ordenamiento
  - Estadísticas
- `useMatches.ts`: Partidos
  - Registro de resultados
  - Generación de emparejamientos
  - Historial

### **Utils** (Utilidades)
- `tournamentHelpers.ts`: Helpers para torneos
  - Generar bracket
  - Calcular puntos
  - Verificar reglas
- `validation.ts`: Validaciones
  - Formato de inscripción
  - Resultados válidos
  - Fechas coherentes
- `apiHelpers.ts`: Helpers para backend
  - Llamadas a API
  - Formateo de datos
  - Manejo de errores

## 🔄 Migración a Backend

### Fase 1: Mock Data
```typescript
// data/mockData.ts
export const tournaments = [...];
```

### Fase 2: API REST
```typescript
// utils/apiHelpers.ts
export const fetchTournaments = async () => {
  const res = await fetch('/api/tournaments');
  return res.json();
};
```

### Fase 3: Base de Datos Real-time
```typescript
// hooks/useTournaments.ts
import { useQuery } from '@tanstack/react-query';

export const useTournaments = () => {
  return useQuery({
    queryKey: ['tournaments'],
    queryFn: fetchTournaments
  });
};
```

## 📦 Uso

```tsx
import SistemaTorneos from './SistemaTorneos';

<SistemaTorneos 
  colors={{ primary: "#EF4444" }}
  clubName="Mi Club"
  apiConfig={{
    endpoint: "https://api.miclub.com/tournaments",
    headers: { "Authorization": "Bearer..." }
  }}
/>
```

## 🚀 Roadmap

### Actual
- ✅ Estructura de carpetas
- ✅ Interfaces TypeScript
- ⏳ Migración de lógica

### Próximos
- [ ] Migrar componentes UI
- [ ] Implementar hooks personalizados
- [ ] Agregar tipos e interfaces
- [ ] Integrar con API REST
- [ ] Agregar real-time updates
- [ ] Tests unitarios
- [ ] Documentación completa

