# MORENS — página web

Tienda en línea sencilla para la marca MORENS. Es una página estática (HTML, CSS y JavaScript, sin instalar nada) que se publica gratis con **GitHub Pages**. Los pedidos llegan por **WhatsApp**.

## Publicarla (una sola vez)

1. En GitHub, entra al repositorio → **Settings** → **Pages**.
2. En *Build and deployment* → *Source*, elige **Deploy from a branch**.
3. Selecciona la rama (`main` o la que tenga estos archivos) y la carpeta **/ (root)** → **Save**.
4. En uno o dos minutos la página estará en `https://<tu-usuario>.github.io/morens/`.

Cada vez que subas cambios a esa rama, la página se actualiza sola.

## Qué editar

| Quiero cambiar…                         | Archivo                                    |
|-----------------------------------------|--------------------------------------------|
| WhatsApp, Instagram, correo, moneda     | `js/productos.js` → `TIENDA`               |
| Productos, precios, tallas, fotos       | `js/productos.js` → `PRODUCTOS`            |
| Textos (portada, nosotros, contacto)    | `index.html`                               |
| Colores y tipografías                   | `css/styles.css` → bloque `:root`          |

### Agregar fotos de productos

1. Sube la foto a `img/productos/` (de preferencia vertical, 3:4, por ejemplo 900×1200 px, en `.jpg` o `.webp`).
2. En `js/productos.js` escribe la ruta en el campo `imagen`, por ejemplo:
   ```js
   imagen: "img/productos/playera-negra.jpg",
   ```

Si `imagen` está vacía, se muestra un recuadro del color indicado en `tono`.

### Agregar un producto

Copia uno de los bloques `{ ... }` dentro de `PRODUCTOS`, pégalo y cambia los datos. El `id` debe ser único (sin espacios ni acentos).

## Cómo funcionan los pedidos

El cliente agrega prendas a su bolsa y presiona **Enviar pedido por WhatsApp**: se abre WhatsApp con el pedido ya escrito (prendas, tallas, cantidades y total) dirigido al número en `TIENDA.whatsapp`. Tú confirmas disponibilidad, envío y forma de pago por ahí.

## Verla en tu computadora

Abre `index.html` con doble clic, o desde esta carpeta ejecuta:

```bash
python3 -m http.server 8000
```

y entra a <http://localhost:8000>.
