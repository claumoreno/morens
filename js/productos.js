/*
 * ============================================================
 *  CONFIGURACIÓN DE LA TIENDA
 *  Edita estos datos con la información real de tu marca.
 * ============================================================
 */
const TIENDA = {
  nombre: "MORENS",
  // Número de WhatsApp con código de país, solo dígitos (ej. México: 52 + 10 dígitos)
  whatsapp: "5210000000000",
  instagram: "morens",
  correo: "hola@morens.com",
  moneda: "MXN",
  locale: "es-MX",
};

/*
 * ============================================================
 *  CATÁLOGO DE PRODUCTOS
 *  - imagen: ruta a la foto, ej. "img/productos/top-encaje.jpg".
 *    Si la dejas vacía se muestra un recuadro del color de "tono".
 *  - categoria: los filtros se crean solos a partir de este campo.
 *  - nuevo: true muestra la etiqueta "Nuevo".
 * ============================================================
 */
const PRODUCTOS = [
  {
    id: "top-encaje-negro",
    nombre: "Top de Encaje",
    categoria: "Tops",
    precio: 890,
    color: "Negro",
    tallas: ["XS", "S", "M", "L"],
    imagen: "",
    tono: "#1c1512",
    nuevo: true,
  },
  {
    id: "jeans-gris-deslavado",
    nombre: "Jeans Cadena",
    categoria: "Denim",
    precio: 1490,
    color: "Gris deslavado",
    tallas: ["24", "26", "28", "30"],
    imagen: "",
    tono: "#5e5d5a",
    nuevo: true,
  },
  {
    id: "chaqueta-piel-negra",
    nombre: "Chaqueta de Piel",
    categoria: "Piel",
    precio: 3290,
    color: "Negro",
    tallas: ["XS", "S", "M", "L"],
    imagen: "",
    tono: "#141110",
  },
  {
    id: "vestido-slip-chocolate",
    nombre: "Vestido Slip Satín",
    categoria: "Vestidos",
    precio: 1290,
    color: "Chocolate",
    tallas: ["XS", "S", "M", "L"],
    imagen: "",
    tono: "#422f26",
  },
  {
    id: "blazer-oversize-olivo",
    nombre: "Blazer Oversize",
    categoria: "Tops",
    precio: 1890,
    color: "Olivo",
    tallas: ["S", "M", "L"],
    imagen: "",
    tono: "#56503a",
  },
  {
    id: "vestido-midi-champan",
    nombre: "Vestido Midi",
    categoria: "Vestidos",
    precio: 1590,
    color: "Champán",
    tallas: ["XS", "S", "M", "L"],
    imagen: "",
    tono: "#c9ab86",
    nuevo: true,
  },
  {
    id: "cinturon-cadena-dorado",
    nombre: "Cinturón Cadena",
    categoria: "Accesorios",
    precio: 590,
    color: "Dorado",
    tallas: ["Única"],
    imagen: "",
    tono: "#9c7552",
  },
  {
    id: "bolso-piel-mini",
    nombre: "Mini Bolso",
    categoria: "Accesorios",
    precio: 1190,
    color: "Negro",
    tallas: ["Única"],
    imagen: "",
    tono: "#2e2320",
  },
  {
    id: "pantalon-piel-cacao",
    nombre: "Pantalón de Piel",
    categoria: "Piel",
    precio: 2490,
    color: "Cacao",
    tallas: ["XS", "S", "M", "L"],
    imagen: "",
    tono: "#6b4c38",
  },
];
