# Propuesta DTI 2025-2026

Aplicación web interactiva para presentar la Transformación Estratégica DTI 2025-2026. Diseñada como una experiencia inmersiva y visualmente impactante.

**🚀 Deploy automático en GitHub Pages**

## 🚀 Características

- **SPA React** con scroll-snap y animaciones fluidas
- **Diseño responsive** optimizado para todos los dispositivos
- **Secciones interactivas**: Conceptos clave, Ejes y objetivos, Iniciativas con modales
- **Matriz de alineación** entre pilares e iniciativas
- **Modo presentación** para reuniones ejecutivas
- **Descarga de brochure** y agenda (.ics)

## 🛠️ Tecnologías

- React 18 + TypeScript
- Vite (build tool)
- Tailwind CSS
- Framer Motion (animaciones)
- Lucide React (iconos)

## 📦 Instalación

```bash
# Clonar repositorio
git clone https://github.com/tu-usuario/propuesta_dti.git
cd propuesta_dti

# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Build para producción
npm run build
```

## 🎯 Scripts disponibles

```bash
npm run dev          # Servidor de desarrollo
npm run dev:5174     # Servidor en puerto específico
npm run build        # Build de producción
npm run preview      # Preview del build
npm run lint         # Linting del código
```

## 📁 Estructura del proyecto

```
src/
├── components/          # Componentes reutilizables
│   ├── Modal.tsx       # Modal accesible
│   ├── MagneticButton.tsx
│   └── ThemeToggle.tsx
├── sections/           # Secciones de la página
│   ├── Hero.tsx        # Portada con video
│   ├── Context.tsx     # Contexto y glosario
│   ├── Pillars.tsx     # Conceptos clave
│   ├── Objectives.tsx  # Ejes y objetivos
│   ├── Initiatives.tsx # Detalle con modales P1-P4
│   ├── AlignmentMatrix.tsx
│   ├── InitiativesDeep.tsx
│   ├── AISinBarreras.tsx
│   └── Benefits.tsx
├── data/               # Datos estáticos
│   ├── glossary.json
│   └── objectives.json
├── config.ts          # Configuración global
└── theme.tsx          # Sistema de temas
```

## 🌐 Deploy

### GitHub Pages (Automático)

El proyecto está configurado para deploy automático en GitHub Pages:

1. **Habilitar GitHub Pages** en Settings > Pages
2. **Source**: Deploy from a branch → `gh-pages` o GitHub Actions
3. **Push a main** activa el deploy automático

### Manual

```bash
# Build
npm run build

# Los archivos están en dist/
# Subir a tu hosting preferido
```

## 📝 Personalización

### Contenido
- Editar `src/data/` para glosario y objetivos
- Modificar `src/config.ts` para configuración global
- Actualizar secciones en `src/sections/`

### Estilos
- Paleta de colores en `src/index.css` (variables CSS)
- Componentes en `src/components/`
- Tailwind config en `tailwind.config.js`

### Assets
- Logo: Reemplazar en `public/`
- Brochure: `public/brochure.pdf`
- Agenda: `public/meeting.ics`

## 🔧 Configuración

### Variables de entorno
```bash
# .env.local (opcional)
VITE_HERO_VIDEO_URL=https://tu-video.mp4
```

### Base path
Para cambiar el path base (ej: dominio personalizado):
```typescript
// vite.config.ts
export default defineConfig({
  base: '/', // o '/tu-path/'
})
```

## 📱 Responsive

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

## ♿ Accesibilidad

- Navegación por teclado
- Screen reader compatible
- Contraste WCAG AA
- Reducir animaciones (prefers-reduced-motion)

## 🚀 Próximos pasos

- [ ] Integrar logo DTI
- [ ] Paleta de colores final
- [ ] Imágenes corporativas
- [ ] Brochure oficial
- [ ] Datos reales de KPIs

## 📄 Licencia

© 2025 DTI. Todos los derechos reservados.
# Wed Aug 13 14:05:37 -04 2025
# Test Wed Aug 13 14:10:12 -04 2025
# Test sin video Wed Aug 13 14:14:36 -04 2025
# Test ultra simple Wed Aug 13 14:16:28 -04 2025
# Fix SPA routing Wed Aug 13 14:20:30 -04 2025
