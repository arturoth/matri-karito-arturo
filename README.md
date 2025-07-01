# Wedding Website

> **Nota:** Este proyecto es un fork de un repositorio original y ha sido adaptado con cambios propios para ajustarse a las necesidades del evento y preferencias personales.

Este proyecto es un sitio web para bodas construido con [Hugo](https://gohugo.io/). Permite personalizar fácilmente la información y el diseño para adaptarse a cualquier evento, con un enfoque en la mantenibilidad y la edición sencilla de contenido.

## ¿Cómo funciona?

El sitio está estructurado para que puedas modificar tanto el contenido como la presentación de manera simple:

- **Contenido**: Se encuentra en la carpeta `content/section/` y otras subcarpetas de `content/`. Aquí puedes editar los archivos `.md` para cambiar textos, títulos, descripciones y datos de cada sección del sitio (por ejemplo, dress code, ubicación, regalos, etc.).
- **Presentación**: Se maneja principalmente desde la carpeta `layouts/partials/`, donde están los componentes reutilizables (partials) y los fragmentos de sección.

## Estructura relevante

- `content/section/` — Archivos Markdown con la información de cada sección principal del sitio.
- `layouts/partials/sections/` — Partials específicos para renderizar secciones como el carrusel, travel, etc.
- `layouts/partials/shared/` — Partials reutilizables como el header, footer, navegación, etc.
- `layouts/partials/homepage/main.html` — Estructura principal de la página de inicio, donde se incluyen y organizan los partials y secciones.
- `static/css/style.css` — Hoja de estilos principal para personalizar la apariencia.

## ¿Cómo modificar el contenido?

1. **Editar textos y datos**:
   - Ve a la carpeta `content/section/` y abre el archivo correspondiente (por ejemplo, `dress.md`, `location.md`, `gifts.md`).
   - Modifica los campos YAML (títulos, subtítulos, descripciones, etc.) o el contenido Markdown según lo que quieras mostrar.
   - Puedes agregar saltos de línea, negritas y otros elementos Markdown.

2. **Agregar o modificar secciones**:
   - Para agregar una nueva sección, crea un nuevo archivo `.md` en `content/section/` y un partial correspondiente en `layouts/partials/sections/` si necesitas un diseño especial.
   - Para modificar la estructura visual de una sección, edita el partial correspondiente en `layouts/partials/sections/` o en `layouts/partials/homepage/main.html`.

3. **Modificar componentes globales**:
   - El header, footer y navegación están en `layouts/partials/shared/`.
   - Los SVGs y otros recursos visuales están en `layouts/partials/svgs/`.

## Ejemplo de flujo de edición

- Quieres cambiar la dirección de la ceremonia:
  1. Edita el archivo `content/section/location.md` y actualiza el campo `address`.
  2. Si necesitas cambiar cómo se muestra, edita el partial correspondiente en `layouts/partials/homepage/main.html`.

- Quieres agregar una nueva sección de fotos:
  1. Crea `content/section/photos.md` con el contenido.
  2. Crea un partial en `layouts/partials/sections/photos.html` si necesitas un diseño especial.
  3. Incluye el partial en `main.html` donde corresponda.

## Despliegue

El sitio se puede desplegar fácilmente usando [Hugo](https://gohugo.io/) y GitHub Pages. Solo ejecuta:

```bash
hugo --minify
```

Y sube el contenido de la carpeta `public/` a tu hosting estático preferido.

## Créditos y recursos

- Basado en Hugo y personalizaciones propias.
- Inspiración visual de plantillas de Wix y paletas de color de ColorHunt.

---

Para dudas o mejoras, revisa los archivos en `layouts/partials/` y `content/section/` para entender cómo se conectan las piezas.
