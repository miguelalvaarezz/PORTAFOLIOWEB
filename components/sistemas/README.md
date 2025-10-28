# Sistemas de Pádel - Componentes Reutilizables

Este directorio contiene los sistemas de reservas y torneos para clubes de pádel, diseñados como componentes reutilizables e instalables.

## 📁 Estructura Modular

```
components/sistemas/
├── reservas/
│   ├── SistemaReservas.tsx
│   ├── ui/                 # Componentes de interfaz
│   ├── data/              # Datos, tipos, configuración
│   ├── hooks/             # Custom hooks (lógica)
│   ├── utils/             # Funciones auxiliares
│   └── README.md
├── torneos/
│   ├── SistemaTorneos.tsx
│   ├── ui/                 # Componentes de interfaz
│   ├── data/              # Datos, tipos, configuración
│   ├── hooks/             # Custom hooks (lógica)
│   ├── utils/             # Funciones auxiliares
│   └── README.md
└── README.md               # Este archivo
```

## 🚀 Instalación

### Sistema de Reservas

```tsx
import SistemaReservas from '@/components/sistemas/reservas/SistemaReservas';

// Uso básico
<SistemaReservas />

// Uso personalizado con colores del club
<SistemaReservas 
  colors={{
    primary: "#D6E826",    // Verde lima
    secondary: "#374151",  // Gris oscuro
    accent: "#EF4444"      // Rojo
  }}
  clubName="Tu Club de Pádel"
  clubLogo="/path/to/logo.png"
  courts={[
    { id: 1, name: "Pista 1", type: "Cristal", availability: 85 },
    { id: 2, name: "Pista 2", type: "Pared", availability: 70 },
    // ... más pistas
  ]}
  timeSlots={["09:00", "10:00", "11:00", ...]}
/>
```

### Sistema de Torneos

```tsx
import SistemaTorneos from '@/components/sistemas/torneos/SistemaTorneos';

// Uso básico
<SistemaTorneos />

// Uso personalizado
<SistemaTorneos 
  colors={{
    primary: "#EF4444",    // Rojo
    secondary: "#374151",  // Gris oscuro
    accent: "#D6E826"      // Verde lima
  }}
  clubName="Tu Club de Pádel"
  clubLogo="/path/to/logo.png"
  tournaments={{
    active: [...],
    upcoming: [...],
    finished: [...]
  }}
/>
```

## 🎨 Personalización

### Colores

Puedes personalizar los colores del sistema pasando un objeto `colors` con las siguientes propiedades:

- `primary`: Color principal del sistema (botones, destacados)
- `secondary`: Color secundario (textos, fondos)
- `accent`: Color de acento (elementos destacados)

### Datos

Ambos sistemas aceptan datos personalizados:

- **Sistema de Reservas**: Pistas disponibles (`courts`), horarios (`timeSlots`)
- **Sistema de Torneos**: Lista de torneos activos, próximos y finalizados

## 📝 Estado Actual

### ✅ Sistema de Reservas
- [x] Estructura base creada
- [ ] Lógica completa migrada
- [ ] Personalización de colores
- [ ] Configuración de pistas

### ✅ Sistema de Torneos  
- [x] Estructura base creada
- [ ] Lógica completa migrada
- [ ] Personalización de colores
- [ ] Configuración de torneos
- [ ] Modal de información
- [ ] Modal de clasificación
- [ ] Modal de inscripción

## 🔄 Próximos Pasos

1. Migrar toda la lógica de `app/sistemareservas/page.tsx` a `SistemaReservas.tsx`
2. Migrar toda la lógica de `app/sistematorneos/page.tsx` a `SistemaTorneos.tsx`
3. Agregar soporte completo para props personalizables
4. Crear sistema de temas/pre-sets de color
5. Agregar documentación de props en TypeScript
6. Crear ejemplos de uso
7. Agregar tests

## 💡 Uso en Páginas

Una vez completados los sistemas, puedes usarlos en cualquier página:

```tsx
// app/clubs/tu-club/page.tsx
import SistemaReservas from '@/components/sistemas/reservas/SistemaReservas';
import SistemaTorneos from '@/components/sistemas/torneos/SistemaTorneos';

export default function ClubPage() {
  return (
    <div>
      <SistemaReservas 
        colors={{ primary: "#TU_COLOR" }}
        clubName="Mi Club"
      />
      
      <SistemaTorneos 
        colors={{ primary: "#TU_COLOR" }}
        clubName="Mi Club"
      />
    </div>
  );
}
```

## 📖 Notas

- Los sistemas son completamente independientes y pueden usarse por separado
- Todos los colores son completamente personalizables
- La estructura de datos es flexible y extensible
- Los sistemas incluyen animaciones y efectos visuales premium

