/*
 * ============================================================
 *  MORENS · CONFIGURACIÓN DE LA TIENDA
 * ============================================================
 *  ventaAbierta: false  → las cápsulas se muestran, pero no se puede
 *                         comprar. No aparece "La cuenta".
 *  ventaAbierta: true   → se activan "Agregar a la cuenta" y el
 *                         pedido por WhatsApp en las cápsulas abiertas.
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
 * Cápsulas. "abierta: false" deja sus prendas visibles pero en pausa,
 * aunque la venta general esté abierta.
 */
const CAPSULAS = [
  {
    id: "01",
    nombre: "Hora Ámbar",
    temporada: "Otoño",
    estado: "Sale el jueves 22 de abril, 19:00",
    bajada: "Dos tops y una cinta. Para cuando cierras el computador y todavía queda la mejor parte del día.",
    abierta: true,
  },
  {
    id: "02",
    nombre: "Sobremesa",
    temporada: "Primavera",
    estado: "Próximamente",
    bajada: "Un top de malla y dos vestidos, para comidas que se alargan.",
    abierta: false,
  },
];

/*
 * ============================================================
 *  PRENDAS
 * ============================================================
 *  capsula: "01" o "02".
 *  hora: la hora de la prenda en la etiqueta interior (18 a 03).
 *  fotos: la primera es la de la tarjeta (fondo gris de producto) y la
 *         segunda la de campaña. Para usar una foto real, escribe su ruta
 *         en "src", ej. "img/productos/ximena-frontal.jpg".
 *  tono: color del recuadro mientras no hay foto
 *        (negro, piedra, claro, naranjo, olivo, chocolate).
 *  Foto provisoria (Pinterest): ver js/fotos.js y fotos-provisorias.md.
 *        // PROVISORIA - reemplazar antes de lanzar
 *        provisoria("ximena-espalda.jpg", "claro", "Top Ximena de espaldas"),
 * ============================================================
 */
const PRODUCTOS = [
  {
    id: "top-ximena",
    capsula: "01",
    nombre: "Top Ximena",
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
      { src: "", tono: "claro", alt: "Top Ximena sobre fondo de papel gris, cuerpo completo, de espaldas" },
      { src: "", tono: "chocolate", alt: "Mujer de espaldas en una barra de madera, con la espalda abierta del top y aros de plata" },
      { src: "", tono: "claro", alt: "Detalle del satín y el tirante" },
    ],
  },
  {
    id: "top-beatriz",
    capsula: "01",
    nombre: "Top Beatriz",
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
      { src: "", tono: "claro", alt: "Top Beatriz de frente sobre fondo de papel gris, borde de encaje en detalle" },
      { src: "", tono: "piedra", alt: "Mujer cruzando una calle del centro al atardecer, con el top debajo de un blazer abierto" },
      { src: "", tono: "claro", alt: "Detalle del borde de encaje" },
    ],
  },
  {
    id: "la-cinta",
    capsula: "01",
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
      { src: "", tono: "claro", alt: "La Cinta amarrada en un moño bajo, de perfil" },
      { src: "", tono: "olivo", alt: "La Cinta en la muñeca, sobre una mesa con un libro abierto" },
    ],
  },
  {
    id: "top-violeta",
    capsula: "02",
    nombre: "Top Violeta",
    precio: 27990,
    hora: "20",
    resumen: "Malla, cuello alto",
    descripcion: "Top de malla ajustado, con cuello alto y manga larga. Funciona solo o debajo de un vestido de tirantes.",
    colores: [{ nombre: "Negro", hex: "#121110" }],
    tallas: ["XS", "S", "M", "L", "XL"],
    serie: 25,
    composicion: "Se publica con la cápsula",
    cuidado: "Se publica con la cápsula",
    fotos: [
      { src: "", tono: "claro", alt: "Top Violeta sobre fondo de papel gris, de frente" },
      { src: "", tono: "negro", alt: "Mujer de perfil en una mesa de restaurante, con el top de malla y el pelo tomado" },
    ],
  },
  {
    id: "vestido-amparo",
    capsula: "02",
    nombre: "Vestido Amparo",
    precio: 54990,
    hora: "01",
    resumen: "Mini, espalda descubierta",
    descripcion: "Vestido mini ajustado, con la espalda descubierta. Sencillo de frente y distinto cuando te das vuelta.",
    colores: [
      { nombre: "Negro", hex: "#121110" },
      { nombre: "Gris plomo", hex: "#5F5C59" },
    ],
    tallas: ["XS", "S", "M", "L", "XL"],
    serie: 20,
    composicion: "Se publica con la cápsula",
    cuidado: "Se publica con la cápsula",
    fotos: [
      { src: "", tono: "claro", alt: "Vestido Amparo sobre fondo de papel gris, de espaldas" },
      { src: "", tono: "piedra", alt: "Mujer de espaldas bajando una escalera del centro, con el vestido mini" },
    ],
  },
  {
    id: "vestido-olga",
    capsula: "02",
    nombre: "Vestido Olga",
    precio: 59990,
    hora: "22",
    resumen: "Midi de satín al bies",
    descripcion: "Vestido midi de satín cortado al bies, que cae suelto y se mueve al caminar.",
    colores: [
      { nombre: "Chocolate", hex: "#3A2A21" },
      { nombre: "Olivo", hex: "#4A4A2B" },
    ],
    tallas: ["XS", "S", "M", "L", "XL"],
    serie: 20,
    composicion: "Se publica con la cápsula",
    cuidado: "Se publica con la cápsula",
    fotos: [
      { src: "", tono: "claro", alt: "Vestido Olga sobre fondo de papel gris, cuerpo completo" },
      { src: "", tono: "chocolate", alt: "Mujer caminando hacia la barra de un restaurante, con el vestido midi en movimiento" },
    ],
  },
];
