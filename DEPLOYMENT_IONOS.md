# GUÍA COMPLETA: IONOS DEPLOY NOW

## 📋 PREPARACIÓN INICIAL

### 1. INSTALAR GIT
- Descarga Git desde: https://git-scm.com/download/win
- Instala con configuración por defecto
- Reinicia PowerShell después de la instalación

### 2. CREAR REPOSITORIO EN GITHUB
1. Ve a https://github.com
2. Haz clic en "New repository"
3. Nombre: "portafolio-web-avanzado"
4. Descripción: "Portafolio profesional de Miguel Álvarez"
5. Marca como "Public"
6. NO marques "Add README" (ya tienes uno)
7. Haz clic en "Create repository"

### 3. SUBIR CÓDIGO A GITHUB
```bash
# En PowerShell (después de instalar Git):
git init
git add .
git commit -m "Initial commit - Portafolio profesional"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/portafolio-web-avanzado.git
git push -u origin main
```

## 🚀 CONFIGURACIÓN EN IONOS

### 1. ACCEDER A IONOS DEPLOY NOW
1. Ve a https://www.ionos.es/hosting/aplicaciones-web/deploy-now
2. Haz clic en "Comenzar gratis"
3. Inicia sesión con tu cuenta IONOS

### 2. CONECTAR REPOSITORIO
1. Haz clic en "Conectar repositorio"
2. Selecciona "GitHub"
3. Autoriza IONOS para acceder a tu GitHub
4. Selecciona tu repositorio "portafolio-web-avanzado"

### 3. CONFIGURACIÓN DEL PROYECTO
IONOS detectará automáticamente que es Next.js y usará esta configuración:

**Build Settings:**
- Framework: Next.js (detectado automáticamente)
- Build Command: `npm run build`
- Output Directory: `.next`
- Install Command: `npm install`

### 4. VARIABLES DE ENTORNO
En el panel de IONOS, añade estas variables:
```
NODE_ENV=production
NEXT_PUBLIC_SITE_URL=https://tu-dominio.com
NEXT_PUBLIC_EMAILJS_SERVICE_ID=tu_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=tu_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=tu_public_key
NEXT_PUBLIC_EMAILJS_TO_EMAIL=miguelalvaarezz@gmail.com
```

## 🌐 CONFIGURAR DOMINIO PERSONALIZADO

### 1. EN IONOS DEPLOY NOW
1. Ve a tu proyecto desplegado
2. Haz clic en "Configurar dominio"
3. Añade tu dominio personalizado
4. IONOS te dará un dominio temporal (ej: proyecto-123.ionos.app)

### 2. CONFIGURAR DNS
1. Ve al panel de control de IONOS
2. Selecciona tu dominio
3. Ve a "DNS" → "Zona DNS"
4. Configura estos registros:

```
Tipo: CNAME
Nombre: www
Valor: proyecto-123.ionos.app

Tipo: A
Nombre: @
Valor: [IP que te proporcione IONOS]
```

### 3. ACTIVAR SSL
1. En Deploy Now, ve a "Configuración"
2. Activa "SSL automático"
3. IONOS configurará Let's Encrypt automáticamente

## ✅ VERIFICACIÓN FINAL

### 1. DEPLOYMENT
- IONOS construirá automáticamente tu proyecto
- El proceso tomará 2-5 minutos
- Verás el progreso en tiempo real

### 2. TESTING
1. Accede a tu dominio temporal primero
2. Verifica que todo funciona correctamente
3. Luego configura tu dominio personalizado

### 3. ACTUALIZACIONES FUTURAS
- Cada vez que hagas `git push` a main
- IONOS detectará los cambios automáticamente
- Reconstruirá y redesplegará la aplicación

## 🔧 ARCHIVOS IMPORTANTES YA CREADOS

✅ `ionos.json` - Configuración para IONOS
✅ `vercel.json` - Configuración alternativa
✅ `netlify.toml` - Configuración alternativa
✅ `README.md` - Documentación completa
✅ `.htaccess` - Configuración Apache (backup)

## 📞 SOPORTE

Si tienes problemas:
1. Revisa los logs en IONOS Deploy Now
2. Verifica las variables de entorno
3. Contacta soporte de IONOS si es necesario

¡Tu portafolio estará online en menos de 30 minutos! 🚀
