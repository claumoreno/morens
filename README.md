# MORENS · página web

Página estática (HTML, CSS y JavaScript, sin instalar nada) publicada con GitHub Pages en https://claumoreno.github.io/morens/

## Páginas

| Archivo         | Qué es                                                        |
|-----------------|---------------------------------------------------------------|
| `index.html`    | Inicio: portada, cápsulas, la semana, el dato, apuntes, club, mujeres que hacen y La mesa |
| `producto.html` | Ficha de cada prenda (`producto.html?p=top-ximena`)           |
| `nota.html`     | Cada apunte (`nota.html?n=quebrada-de-macul`)                 |

## Qué editar

| Quiero cambiar…                                         | Archivo              |
|---------------------------------------------------------|----------------------|
| Abrir la venta, WhatsApp, Instagram, fecha del drop     | `js/productos.js` → `TIENDA` |
| Cápsulas (nombre, temporada, si está abierta)           | `js/productos.js` → `CAPSULAS` |
| Prendas, precios, colores, tallas, hora, fotos          | `js/productos.js` → `PRODUCTOS` |
| Portada, la semana, el dato, lo que suena               | `js/contenido.js`    |
| Apuntes                                                 | `js/contenido.js` → `NOTAS` |
| Club, anfitriona del mes, La mesa                       | `js/contenido.js`    |
| Colores y tipografía                                    | `css/styles.css` → bloque `:root` |

### Abrir la venta (el día del drop)

En `js/productos.js` cambia `ventaAbierta: false` por `ventaAbierta: true` y escribe el número en `whatsapp`. Se activan "Agregar a la cuenta", La cuenta (la boleta) y el pedido por WhatsApp.

Mientras `whatsapp` e `instagram` estén vacíos, no aparece ningún botón que dependa de ellos.

### Poner una foto

1. Sube la foto a `img/` (por ejemplo `img/productos/ximena-frontal.jpg`).
2. Busca el recuadro en `js/productos.js` o `js/contenido.js` y escribe la ruta en `src`:
   ```js
   { src: "img/productos/ximena-frontal.jpg", tono: "claro", alt: "Top Ximena sobre fondo de papel gris…" },
   ```
3. Deja el `alt`: describe la foto para quien usa lector de pantalla.

Para fotos de terceros, `js/contenido.js` tiene dos ayudas que además agregan el crédito:
`wiki("Archivo.jpg", "Autor", "Licencia", "tono", "alt")` para Wikimedia Commons y
`unsplash("id", "Autor", "tono", "alt")` para Unsplash. Todos los créditos aparecen al pie de la página.
Si una foto no carga, se muestra el recuadro de color.

Fotos de producto: fondo de papel gris claro, flash parejo. Fotos de campaña: la ciudad, la mesa, el cerro, atardecer naranjo o flash de noche. Nunca se mezclan en el mismo espacio.

### Agregar un apunte

Copia un bloque `{ … }` dentro de `NOTAS`, cambia el `id` (sin espacios ni tildes) y los textos. El `pilar` crea el filtro solo (Cerros, Ciudad, Cultura, Trabajo, Restaurantes, Tendencias).

## Ver la página en tu computador

Desde esta carpeta:

```bash
python3 -m http.server 8000
```

y entra a <http://localhost:8000>.
