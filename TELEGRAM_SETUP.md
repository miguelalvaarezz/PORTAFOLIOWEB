# 📱 Configuración de Telegram Bot

## ¿Por qué Telegram?

✅ **Gratis** - No requiere pago  
✅ **Instantáneo** - Recibes notificaciones al instante en tu teléfono  
✅ **Simple** - Solo necesitas 2 credenciales  
✅ **Seguro** - No requiere servidor backend  
✅ **Notificaciones push** - Los mensajes llegan directamente a tu teléfono

## 🚀 Pasos de Configuración (5 minutos)

### Paso 1: Crear el Bot

1. Abre Telegram en tu teléfono
2. Busca **@BotFather** en la búsqueda
3. Inicia una conversación y escribe: `/newbot`
4. Sigue las instrucciones:
   - **Nombre del bot**: Mi Portafolio Bot
   - **Username del bot**: miguelportafolio_bot (debe terminar en "_bot")

5. **BotFather te dará un TOKEN** como este:
   ```
   1234567890:ABCdefGHIjklMNOpqrsTUVwxyz-12345678
   ```
   ⚠️ **Guarda este token, lo necesitarás**

### Paso 2: Obtener tu Chat ID

**Opción A: Usando @userinfobot**
1. Busca **@userinfobot** en Telegram
2. Inicia conversación
3. Te enviará tu Chat ID (es un número como: `123456789`)

**Opción B: Usando el navegador**
1. Envía un mensaje a tu bot recién creado
2. Abre en tu navegador:
   ```
   https://api.telegram.org/botTU_TOKEN_AQUI/getUpdates
   ```
   (Reemplaza TU_TOKEN_AQUI con el token que te dio BotFather)
3. Busca el número `"chat":{"id":123456789}` - ese es tu Chat ID

### Paso 3: Crear archivo .env.local

Crea un archivo `.env.local` en la raíz del proyecto:

```env
# Telegram Bot Configuration
NEXT_PUBLIC_TELEGRAM_BOT_TOKEN=1234567890:ABCdefGHIjklMNOpqrsTUVwxyz-12345678
NEXT_PUBLIC_TELEGRAM_CHAT_ID=123456789
```

⚠️ **IMPORTANTE**: No subas este archivo a GitHub. Ya está en `.gitignore`

### Paso 4: Probar

1. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```

2. Envía un mensaje desde el formulario
3. Revisa tu Telegram - ¡deberías recibir la notificación!

## 📋 Ejemplo de Mensaje Recibido

```
🆕 Nueva solicitud de Demo Gratuita

👤 Nombre: Juan Pérez
📧 Email: juan@example.com
🏢 Club: Club Pádel Lanzarote
💬 Mensaje:
Hola Miguel, me interesa una demo gratuita...

---
📅 15/01/2024, 10:30:25
```

## 🔒 Seguridad

- El Bot Token es **público** (empieza con `NEXT_PUBLIC_`)
- Está bien que sea público - Telegram protege el bot
- Solo TU Chat ID puede recibir los mensajes
- Si alguien intenta usar tu bot sin tu Chat ID, no funcionará

## ⚠️ Troubleshooting

### No recibo mensajes
1. Verifica que el bot esté iniciado en Telegram
2. Verifica que hayas enviado al menos un mensaje al bot
3. Verifica que el Chat ID sea correcto
4. Abre la consola del navegador (F12) y revisa errores

### Error "Bot Token inválido"
- Asegúrate de copiar el token completo
- No debe tener espacios extra
- Debe empezar con números

### Error "Chat ID inválido"
- Verifica que sea un número
- Sin comillas ni espacios
- Debe ser el ID de TU chat personal

## 🎉 ¡Listo!

Tu formulario ahora enviará mensajes directamente a tu Telegram. Cada vez que alguien solicite una demo, recibirás una notificación instantánea en tu teléfono.

---

¿Necesitas ayuda? Contacta en: info@miguelalvarezweb.com
