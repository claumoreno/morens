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
    descripcion: "Camisola de satín con la espalda abierta hasta la cintura y tirantes finos regulables. Se puede usar debajo de un blazer en la oficina o sola en la noche.",
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
      { src: "", tono: "chocolate", alt: "Mujer de espaldas en una barra de madera, con la espalda abierta del top y aros de plata" },
      { src: "", tono: "claro", alt: "Detalle del satín y el tirante" },
    ],
  },
  {
    id: "top-lastarria",
    nombre: "Top Lastarria",
    precio: 29990,
    hora: "21",
    resumen: "Camisola con encaje",
    descripcion: "Camisola con borde de encaje suave. Combina con jeans anchos o con pantalón de tela.",
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
      { src: "", tono: "piedra", alt: "Mujer cruzando una calle de Lastarria al atardecer, con el top debajo de un blazer abierto" },
      { src: "", tono: "claro", alt: "Detalle del borde de encaje" },
    ],
  },
  {
    id: "la-cinta",
    nombre: "La Cinta",
    precio: 9990,
    hora: "19",
    resumen: "Satín para el pelo o la muñeca",
    descripcion: "Cinta de satín para amarrar el pelo o usar en la muñeca. Combina con los dos tops de la cápsula.",
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
