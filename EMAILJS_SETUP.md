# 📧 EmailJS Setup Instructions

## Paso 1: Crear cuenta en EmailJS
1. Ve a https://www.emailjs.com/
2. Crea una cuenta gratuita
3. Verifica tu email

## Paso 2: Configurar servicio de email
1. En el dashboard, ve a "Email Services"
2. Añade tu proveedor de email (Gmail, Outlook, etc.)
3. Conecta tu cuenta de email
4. Copia el **Service ID**

## Paso 3: Crear template de email
1. Ve a "Email Templates"
2. Crea un nuevo template
3. Usa esta estructura:

```
Subject: Nuevo mensaje de {{from_name}}

De: {{from_name}}
Email: {{from_email}}
Asunto: {{subject}}

Mensaje:
{{message}}

---
Enviado desde tu portafolio web
```

4. Copia el **Template ID**

## Paso 4: Obtener Public Key
1. Ve a "Account" → "General"
2. Copia tu **Public Key**

## Paso 5: Configurar variables de entorno
Crea un archivo `.env.local` en la raíz del proyecto:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=tu_service_id_aqui
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=tu_template_id_aqui
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=tu_public_key_aqui
NEXT_PUBLIC_EMAILJS_TO_EMAIL=info@miguelalvarezweb.com
```

## Paso 6: Actualizar el código
Reemplaza en `components/contact-section.tsx`:

```typescript
const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;
const toEmail = process.env.NEXT_PUBLIC_EMAILJS_TO_EMAIL!;
```

## ✅ ¡Listo!
Tu formulario ahora enviará emails reales a tu cuenta.
