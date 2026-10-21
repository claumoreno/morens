/*
 * ============================================================
 *  MORENS · CONFIGURACIÓN DE LA TIENDA
 * ============================================================
 *  ventaAbierta: false  → la cápsula se muestra, pero no se puede
 *                         comprar. No aparece "La cuenta".
 *  ventaAbierta: true   → se activan "Agregar a la cuenta" y el
 *                         pedido por WhatsApp. Cambiarlo el día del drop.
 *
 *  whatsapp / instagram vacíos ("") → no se muestra ningún botón
 *  que dependa de ellos.
 * ============================================================
 */
const TIENDA = {
  ventaAbierta: false,
  whatsapp: "",   // solo dígitos, con código de país. Ej: "56912345678"
  instagram: "",  // usuario sin @. Ej: "morens"
  moneda: "CLP",
  locale: "es-CL",
  drop: {
    texto: "Jueves 22 abr · 19:00",
    largo: "Sale el jueves 22 de abril, 19:00",
    lista: "La mesa compra desde las 18:30",
  },
};

/*
 * ============================================================
 *  CÁPSULA 01 · HORA ÁMBAR
 * ============================================================
 *  hora: la hora de la prenda en la etiqueta interior (18 a 03).
 *  fotos: la primera es la de la tarjeta. Para usar una foto real,
 *         escribe su ruta en "src", ej. "img/productos/medianoche-frontal.jpg".
 *         Si "src" está vacío se muestra el recuadro de color con la
 *         descripción. "alt" describe la foto para lectores de pantalla.
 *  tono: color del recuadro (blanco, negro, piedra, claro, naranjo,
 *        olivo, chocolate).
 * ============================================================
 */
const PRODUCTOS = [
  {
    id: "top-medianoche",
    nombre: "Top Medianoche",
    precio: 34990,
    hora: "00",
    resumen: "Satín, espalda abierta",
    descripcion: "Satín negro, espalda abierta hasta la cintura, tirantes finos regulables. Para cuando te sacas el blazer.",
    colores: [
      { nombre: "Negro", hex: "#121110" },
      { nombre: "Chocolate", hex: "#3A2A21" },
    ],
    tallas: ["XS", "S", "M", "L", "XL"],
    serie: 30,
    composicion: "Se publica con la cápsula",
    cuidado: "Se publica con la cápsula",
    seLlevaCon: "la-cinta",
    fotos: [
      { src: "", tono: "claro", alt: "Top Medianoche sobre fondo de papel gris, cuerpo completo, de espaldas" },
      { src: "", tono: "chocolate", alt: "De espaldas en una barra de madera, la espalda abierta del top, aros de plata" },
      { src: "", tono: "claro", alt: "Detalle del satín y el tirante" },
    ],
  },
  {
    id: "top-lastarria",
    nombre: "Top Lastarria",
    precio: 29990,
    hora: "21",
    resumen: "Camisola con encaje",
    descripcion: "Camisola con borde de encaje suave y terminado. Va debajo del blazer a las 8:30 y sola a las 21:00.",
    colores: [
      { nombre: "Negro", hex: "#121110" },
      { nombre: "Crema", hex: "#EFE9DF" },
    ],
    tallas: ["XS", "S", "M", "L", "XL"],
    serie: 30,
    composicion: "Se publica con la cápsula",
    cuidado: "Se publica con la cápsula",
    seLlevaCon: "la-cinta",
    fotos: [
      { src: "", tono: "claro", alt: "Top Lastarria de frente sobre fondo de papel gris, borde de encaje en detalle" },
      { src: "", tono: "piedra", alt: "Una fachada de Lastarria al atardecer, ella cruza la calle con el top bajo un blazer abierto" },
      { src: "", tono: "claro", alt: "Detalle del borde de encaje" },
    ],
  },
  {
    id: "la-cinta",
    nombre: "La Cinta",
    precio: 9990,
    hora: "19",
    resumen: "Satín para el pelo o la muñeca",
    descripcion: "Cinta de satín para el moño bajo o la muñeca. Lo primero que te pones a las 19:00.",
    colores: [
      { nombre: "Naranjo", hex: "#D2642A" },
      { nombre: "Olivo", hex: "#4A4A2B" },
      { nombre: "Negro", hex: "#121110" },
    ],
    tallas: ["Única"],
    serie: 50,
    composicion: "Se publica con la cápsula",
    cuidado: "Se publica con la cápsula",
    fotos: [
      { src: "", tono: "claro", alt: "La Cinta anudada en un moño bajo, de perfil" },
      { src: "", tono: "olivo", alt: "La Cinta en la muñeca, sobre una mesa con un libro abierto" },
    ],
  },
];
