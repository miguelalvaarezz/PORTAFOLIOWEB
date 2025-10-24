# Deployment Configuration
# Para Vercel, Netlify, o cualquier hosting moderno

# Build optimizations
NODE_ENV=production
NEXT_TELEMETRY_DISABLED=1

# Performance optimizations
NODE_OPTIONS="--max-old-space-size=4096"

# Security headers (ya configurados en next.config.js)
# Cache headers (ya configurados en next.config.js)

# Para Vercel:
# vercel.json no necesario - Next.js se auto-configura

# Para Netlify:
# netlify.toml no necesario - Next.js se auto-configura

# Para otros hostings:
# Asegúrate de que el hosting soporte Node.js 18+ y Next.js 14+
