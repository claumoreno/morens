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
 *  - imagen: ruta a la foto, ej. "img/productos/playera-negra.jpg".
 *    Si la dejas vacía se muestra un recuadro de color.
 *  - categoria: debe coincidir con uno de los filtros (Playeras,
 *    Sudaderas, Pantalones, Accesorios). Puedes inventar nuevas.
 *  - nuevo: true muestra la etiqueta "Nuevo".
 * ============================================================
 */
const PRODUCTOS = [
  {
    id: "playera-basica-negra",
    nombre: "Playera Básica",
    categoria: "Playeras",
    precio: 390,
    color: "Negro",
    tallas: ["S", "M", "L", "XL"],
    imagen: "",
    tono: "#2b2724",
    nuevo: true,
  },
  {
    id: "playera-oversize-hueso",
    nombre: "Playera Oversize",
    categoria: "Playeras",
    precio: 450,
    color: "Hueso",
    tallas: ["S", "M", "L", "XL"],
    imagen: "",
    tono: "#d9cfc1",
  },
  {
    id: "sudadera-logo-arcilla",
    nombre: "Sudadera Logo",
    categoria: "Sudaderas",
    precio: 890,
    color: "Arcilla",
    tallas: ["S", "M", "L", "XL"],
    imagen: "",
    tono: "#b5674a",
    nuevo: true,
  },
  {
    id: "hoodie-esencial-olivo",
    nombre: "Hoodie Esencial",
    categoria: "Sudaderas",
    precio: 950,
    color: "Olivo",
    tallas: ["M", "L", "XL"],
    imagen: "",
    tono: "#6b6b4a",
  },
  {
    id: "pantalon-cargo-arena",
    nombre: "Pantalón Cargo",
    categoria: "Pantalones",
    precio: 1090,
    color: "Arena",
    tallas: ["28", "30", "32", "34"],
    imagen: "",
    tono: "#c4ad8a",
  },
  {
    id: "jogger-carbon",
    nombre: "Jogger",
    categoria: "Pantalones",
    precio: 790,
    color: "Carbón",
    tallas: ["S", "M", "L", "XL"],
    imagen: "",
    tono: "#4a4744",
  },
  {
    id: "gorra-bordada",
    nombre: "Gorra Bordada",
    categoria: "Accesorios",
    precio: 350,
    color: "Negro",
    tallas: ["Única"],
    imagen: "",
    tono: "#1f1c1a",
  },
  {
    id: "tote-bag-natural",
    nombre: "Tote Bag",
    categoria: "Accesorios",
    precio: 290,
    color: "Natural",
    tallas: ["Única"],
    imagen: "",
    tono: "#e6dccd",
    nuevo: true,
  },
];
