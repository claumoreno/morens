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
    tono: "#1c1a19",
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
    tono: "#cbbfae",
  },
  {
    id: "sudadera-logo-arcilla",
    nombre: "Sudadera Logo",
    categoria: "Sudaderas",
    precio: 890,
    color: "Burdeos",
    tallas: ["S", "M", "L", "XL"],
    imagen: "",
    tono: "#6e2a2a",
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
    tono: "#3f4436",
  },
  {
    id: "pantalon-cargo-arena",
    nombre: "Pantalón Cargo",
    categoria: "Pantalones",
    precio: 1090,
    color: "Arena",
    tallas: ["28", "30", "32", "34"],
    imagen: "",
    tono: "#a88a63",
  },
  {
    id: "jogger-carbon",
    nombre: "Jogger",
    categoria: "Pantalones",
    precio: 790,
    color: "Carbón",
    tallas: ["S", "M", "L", "XL"],
    imagen: "",
    tono: "#3a3734",
  },
  {
    id: "gorra-bordada",
    nombre: "Gorra Bordada",
    categoria: "Accesorios",
    precio: 350,
    color: "Negro",
    tallas: ["Única"],
    imagen: "",
    tono: "#22201e",
  },
  {
    id: "tote-bag-natural",
    nombre: "Tote Bag",
    categoria: "Accesorios",
    precio: 290,
    color: "Natural",
    tallas: ["Única"],
    imagen: "",
    tono: "#d8ccb8",
    nuevo: true,
  },
];
