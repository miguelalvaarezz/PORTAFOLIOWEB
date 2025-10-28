# Portafolio Web - Miguel Álvarez

Portafolio profesional de Miguel Álvarez, diseñador gráfico y desarrollador web especializado en crear experiencias digitales excepcionales.

## 🚀 Características

- **Diseño Responsivo**: Optimizado para desktop y móvil
- **Animaciones Fluidas**: Implementadas con Framer Motion
- **Performance Optimizada**: Next.js 15 con optimizaciones avanzadas
- **SEO Completo**: Meta tags, sitemap, robots.txt
- **PWA Ready**: Manifest y service worker incluidos

## 🛠️ Tecnologías

- **Frontend**: Next.js 15, React 18, TypeScript
- **Styling**: Tailwind CSS
- **Animaciones**: Framer Motion
- **Iconos**: Lucide React
- **Formularios**: Telegram Bot (notificaciones push)
- **Deployment**: Vercel, Netlify, IONOS

## 📁 Estructura del Proyecto

```
├── app/                    # App Router de Next.js
│   ├── layout.tsx         # Layout principal
│   ├── page.tsx           # Página principal
│   ├── globals.css        # Estilos globales
│   ├── sitemap.ts         # Generación de sitemap
│   ├── robots.ts          # Generación de robots.txt
│   └── manifest.ts        # PWA manifest
├── components/             # Componentes React
│   ├── ui/               # Componentes base (Button, Input, etc.)
│   ├── mobile/           # Versión móvil
│   ├── hero-section.tsx  # Sección hero
│   ├── about-section.tsx # Sección sobre mí
│   ├── projects-section.tsx # Sección proyectos
│   ├── skills-section.tsx # Sección habilidades
│   ├── contact-section.tsx # Sección contacto
│   ├── navigation.tsx    # Navegación
│   ├── footer.tsx        # Footer
│   └── custom-cursor.tsx # Cursor personalizado
├── public/               # Archivos estáticos
│   ├── NC.webp          # Imágenes del proyecto
│   ├── valenzo.webp
│   ├── miguelalvarez.webp
│   └── dunkrelief.mov   # Video del proyecto
└── out/                 # Build estático (para hosting tradicional)
```

## 🚀 Instalación y Desarrollo

### Prerrequisitos
- Node.js 18+ 
- npm o yarn
- Cuenta de Telegram (para el bot de notificaciones)

### Instalación
```bash
# Clonar el repositorio
git clone https://github.com/tu-usuario/portafolio-web.git

# Instalar dependencias
npm install

# Crear archivo de variables de entorno
# Sigue las instrucciones en TELEGRAM_SETUP.md para configurar el bot
# Crea un archivo .env.local con tus credenciales de Telegram

# Ejecutar en desarrollo
npm run dev
```

### ⚠️ Configuración de Telegram Bot (OBLIGATORIO)

Para que el formulario de contacto funcione, debes configurar Telegram Bot:

1. **Crear un bot con @BotFather** en Telegram
2. **Obtener tu Chat ID** usando @userinfobot
3. **Crear un archivo `.env.local`** con:
```env
NEXT_PUBLIC_TELEGRAM_BOT_TOKEN=tu_bot_token
NEXT_PUBLIC_TELEGRAM_CHAT_ID=tu_chat_id
```

📖 **Guía completa**: Ver `TELEGRAM_SETUP.md`

**Ventajas de Telegram:**
- ✅ Notificaciones instantáneas en tu teléfono
- ✅ Totalmente gratis
- ✅ No requiere servidor backend
- ✅ Muy fácil de configurar (5 minutos)

⚠️ **SIN estas variables, el formulario NO funcionará.**

### Scripts Disponibles
```bash
npm run dev          # Servidor de desarrollo
npm run build        # Build de producción
npm run start        # Servidor de producción
npm run lint         # Linter
npm run type-check   # Verificación de tipos
```

## 🌐 Deployment

### Vercel (Recomendado)
1. Conectar repositorio GitHub a Vercel
2. Deploy automático en cada push
3. Dominio personalizado incluido

### Netlify
1. Arrastrar carpeta `out` a Netlify
2. Configurar dominio personalizado
3. Deploy automático

### IONOS (Hosting Tradicional)
1. Subir contenido de carpeta `out` a `/htdocs/`
2. Configurar `.htaccess` para SPA
3. Configurar tipos MIME para archivos

## 📱 Responsive Design

- **Desktop**: Versión completa con todas las animaciones
- **Mobile**: Versión optimizada con navegación simplificada
- **Tablet**: Adaptación automática entre versiones

## 🎨 Características de Diseño

- **Paleta de Colores**: Azul corporativo (#2563eb)
- **Tipografía**: Inter (sans-serif) + Merriweather (serif)
- **Animaciones**: Transiciones suaves con Framer Motion
- **Efectos**: Glass morphism, gradientes, blur effects

## 📞 Contacto

- **Email**: info@miguelalvarezweb.com
- **Teléfono**: +34 695 537 321
- **Ubicación**: Lanzarote, España
- **LinkedIn**: [Miguel Álvarez](https://linkedin.com/in/miguelalvarez)

## 📄 Licencia

Este proyecto es de uso personal y profesional. Todos los derechos reservados.

---

Desarrollado con ❤️ por Miguel Álvarez