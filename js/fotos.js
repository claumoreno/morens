/*
 * ============================================================
 *  MORENS · AYUDAS PARA FOTOS
 *  Se carga antes que productos.js y contenido.js, así las tres
 *  funciones sirven para prendas y para contenido.
 * ============================================================
 */

function wiki(archivo, autor, licencia, tono, alt) {
  return {
    src: `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(archivo)}?width=1200`,
    tono,
    alt,
    credito: `${autor} · ${licencia} · Wikimedia Commons`,
    fuente: `https://commons.wikimedia.org/wiki/File:${encodeURIComponent(archivo.replace(/ /g, "_"))}`,
  };
}

// PROVISORIA - reemplazar antes de lanzar (todas las fotos que usen esta función)
function provisoria(archivo, tono, alt) {
  return { src: `fotos/provisorias/${archivo}`, tono, alt, provisoria: true };
}

function unsplash(id, autor, tono, alt) {
  return {
    src: `https://unsplash.com/photos/${id}/download?w=1200`,
    tono,
    alt,
    credito: `${autor} · Unsplash`,
    fuente: `https://unsplash.com/photos/${id}`,
  };
}
