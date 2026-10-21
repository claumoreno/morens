/*
 * ============================================================
 *  MORENS · CONTENIDO EDITORIAL
 *  Todo lo que no es producto: portada, la semana, notas,
 *  recomendaciones, club y anfitriona. Edita los textos aquí.
 *
 *  Fotos: { src: "", tono: "...", alt: "..." }
 *  Si "src" está vacío se muestra un recuadro de color con la
 *  descripción. Tonos: negro, piedra, claro, naranjo, olivo, chocolate.
 *
 *  Tono: natural, como se lo contarías a una amiga. Información
 *  concreta (dónde, cuándo, por qué vale la pena) y nada de frases
 *  de efecto.
 * ============================================================
 */

const PORTADA = {
  capsula: "Cápsula 01",
  nombre: "Hora Ámbar",
  bajada: "Para cuando cierras el computador y todavía queda la mejor parte del día.",
  fotos: [
    { src: "", tono: "chocolate", alt: "Jueves 20:30. Cuatro amigas cenando en una mesa larga del centro, con luz cálida." },
    { src: "", tono: "piedra", alt: "Detalle de una mano con un anillo de oro y uno de plata sobre un libro abierto." },
    { src: "", tono: "naranjo", alt: "Atardecer desde una azotea del centro, con la cordillera al fondo y una mujer de espaldas con el top Medianoche." },
  ],
};

/* La semana: qué hacer en Santiago. "nota" enlaza a una nota de abajo (opcional). */
const SEMANA = [
  { dia: "Lun", hora: "07:00", lugar: "Santiago Centro", texto: "Salir a correr al Parque Forestal antes de ir a la oficina." },
  { dia: "Mar", hora: "19:30", lugar: "Santiago Centro", texto: "Ver una obra de teatro o un concierto en el GAM." },
  { dia: "Mié", hora: "13:30", lugar: "Las Condes", texto: "Almorzar en El Golf con alguien de quien quieras aprender.", nota: "cafe-con-alguien" },
  { dia: "Jue", hora: "20:00", lugar: "Providencia", texto: "Cenar con amigas en Barrio Italia. Mejor con reserva.", nota: "barrio-italia" },
  { dia: "Jue", hora: "22:00", lugar: "Ñuñoa", texto: "Seguir en algún bar de Plaza Ñuñoa.", nota: "plaza-nunoa" },
  { dia: "Vie", hora: "18:00", lugar: "Vitacura", texto: "Pasar por las galerías de arte de Alonso de Córdova.", nota: "galerias-vitacura" },
  { dia: "Sáb", hora: "11:00", lugar: "Santiago Centro", texto: "Ir al Museo de Bellas Artes y después tomar un café en Lastarria.", nota: "bellas-artes" },
  { dia: "Sáb", hora: "17:00", lugar: "Santiago Centro", texto: "Caminar por el barrio París-Londres.", nota: "paris-londres" },
  { dia: "Dom", hora: "08:00", lugar: "Cerros", texto: "Subir el Manquehue temprano y tomar desayuno al bajar.", nota: "tres-cerros" },
  { dia: "Dom", hora: "17:00", lugar: "En casa", texto: "Leer un rato. Este mes recomendamos La amortajada, de María Luisa Bombal.", nota: "la-amortajada" },
];

/* Gusto adquirido: las tres recomendaciones del mes (ids de NOTAS). */
const RECOMENDACIONES = [
  { etiqueta: "El disco", nota: "diamond-life" },
  { etiqueta: "El lugar", nota: "paris-londres" },
  { etiqueta: "El libro", nota: "la-amortajada" },
];

/* Lo que suena. Los títulos van en su idioma original. */
const PLAYLIST = {
  titulo: "Lo que suena",
  bajada: "Para escuchar antes de salir",
  temas: [
    { tema: "Smooth Operator", artista: "Sade" },
    { tema: "I'm Not in Love", artista: "10cc" },
    { tema: "The Worst", artista: "Jhené Aiko" },
    { tema: "I Feel Love", artista: "Donna Summer" },
    { tema: "L$D", artista: "A$AP Rocky" },
    { tema: "Fly Away", artista: "Lenny Kravitz" },
  ],
};

/*
 * NOTAS · el cuaderno de MORENS
 * pilar: crea los filtros solo (Ciudad, Cerros, Cultura, Trabajo, Restaurantes, Estilo)
 * sello: la comuna o el momento, en pocas palabras
 */
const NOTAS = [
  {
    id: "el-plomo",
    pilar: "Cerros",
    sello: "5.424 m",
    titulo: "El Plomo, la cumbre que se ve desde Santiago",
    bajada: "Qué es, cuánto mide y por qué es tan importante.",
    foto: { src: "", tono: "piedra", alt: "La cordillera nevada vista desde una azotea del centro, con El Plomo al fondo." },
    cuerpo: [
      "El Plomo es la cumbre más alta que se ve desde Santiago en los días despejados. Mide 5.424 metros y está al nororiente de la ciudad, detrás de los cerros más cercanos.",
      "En 1954, unos arrieros encontraron cerca de la cima el cuerpo de un niño inca que había sido dejado ahí como ofrenda hace unos 500 años. Es uno de los hallazgos arqueológicos más importantes de Chile.",
      "Si te interesa la historia, el Museo Nacional de Historia Natural, en la Quinta Normal, la explica muy bien.",
      "Subirlo requiere varios días, aclimatación y guía. Para la mayoría es una cumbre para mirar desde la ciudad.",
    ],
  },
  {
    id: "tres-cerros",
    pilar: "Cerros",
    sello: "Dom 08:00",
    titulo: "Tres cerros para subir un domingo",
    bajada: "Del más fácil de organizar al más exigente.",
    foto: { src: "", tono: "olivo", alt: "Sendero de cerro temprano en la mañana, con la ciudad abajo." },
    cuerpo: [
      "San Cristóbal. Está dentro de la ciudad y se puede subir caminando desde Pío Nono, en Bellavista, o desde Pedro de Valdivia Norte, en Providencia. Es el más fácil de organizar.",
      "Manquehue. Es más exigente, sobre todo el tramo final. Desde arriba se ve toda la ciudad y la cordillera de frente.",
      "Pochoco. Está en El Arrayán, en Lo Barnechea, y tiene vista a la precordillera. Es bueno cuando quieres algo más largo.",
      "Para cualquiera de los tres conviene salir temprano y llevar agua y bloqueador, sobre todo en verano.",
    ],
  },
  {
    id: "paris-londres",
    pilar: "Ciudad",
    sello: "Santiago Centro",
    titulo: "Barrio París-Londres",
    bajada: "Dos calles de adoquín a pasos de la Iglesia San Francisco.",
    foto: { src: "", tono: "piedra", alt: "Fachadas del barrio París-Londres al atardecer." },
    cuerpo: [
      "El barrio se construyó en los años veinte, en terrenos que eran parte del convento de San Francisco. Son dos calles cortas y curvas, con casas de estilo europeo.",
      "Se recorre en media hora y es especialmente lindo al atardecer, cuando se encienden las luces.",
      "En Londres 38 funciona un sitio de memoria que recuerda lo que pasó ahí durante la dictadura. Vale la pena entrar.",
      "Desde ahí puedes seguir caminando por la Alameda hasta Lastarria.",
    ],
  },
  {
    id: "barrio-italia",
    pilar: "Ciudad",
    sello: "Providencia",
    titulo: "Barrio Italia",
    bajada: "Casas antiguas convertidas en tiendas, talleres y restaurantes.",
    foto: { src: "", tono: "chocolate", alt: "Fachada de una casa antigua en Barrio Italia, con una tienda de diseño." },
    cuerpo: [
      "Barrio Italia está alrededor de la avenida Italia, entre Providencia y Ñuñoa. Muchas de sus casas antiguas hoy son tiendas de diseño, anticuarios, talleres y restaurantes.",
      "Lo mejor es recorrerlo caminando y entrar a los pasajes interiores, donde suele haber tiendas más pequeñas.",
      "Es una buena opción para una comida con amigas un jueves o para una tarde de sábado.",
    ],
  },
  {
    id: "plaza-nunoa",
    pilar: "Ciudad",
    sello: "Ñuñoa",
    titulo: "Plaza Ñuñoa",
    bajada: "Teatro, bares y vida de barrio.",
    foto: { src: "", tono: "chocolate", alt: "Plaza Ñuñoa de noche, con mesas afuera de los bares." },
    cuerpo: [
      "Plaza Ñuñoa es uno de los centros de la vida de barrio en Santiago. Alrededor hay bares, restaurantes y cafés con mesas afuera.",
      "A una cuadra está el Teatro UC, de la Universidad Católica, con una cartelera de teatro que vale la pena revisar.",
      "Una buena idea para un jueves es ver una obra y después quedarse a comer cerca de la plaza.",
    ],
  },
  {
    id: "galerias-vitacura",
    pilar: "Cultura",
    sello: "Vitacura",
    titulo: "Galerías de arte en Vitacura",
    bajada: "Arte contemporáneo en una tarde y sin pagar entrada.",
    foto: { src: "", tono: "claro", alt: "Sala blanca de una galería de arte con una obra grande en la pared." },
    cuerpo: [
      "En Vitacura, en Alonso de Córdova y sus calles cercanas, hay varias galerías de arte contemporáneo, muy cerca unas de otras.",
      "La mayoría no cobra entrada y se pueden recorrer en una tarde. Es una buena forma de conocer artistas chilenos actuales.",
      "Muchas hacen inauguraciones abiertas al público. Seguirlas en redes sociales es la mejor forma de enterarse.",
    ],
  },
  {
    id: "bellas-artes",
    pilar: "Cultura",
    sello: "Santiago Centro",
    titulo: "Museo Nacional de Bellas Artes",
    bajada: "Un edificio de 1910 en el Parque Forestal.",
    foto: { src: "", tono: "claro", alt: "Las escaleras de entrada del Museo Nacional de Bellas Artes." },
    cuerpo: [
      "El museo se inauguró en 1910, para el Centenario, frente al Parque Forestal. Solo el hall central, con su cúpula de vidrio, ya vale la visita.",
      "Un consejo para disfrutarlo más: elegir una o dos salas y verlas con tiempo, en vez de intentar recorrer todo.",
      "Al salir, Lastarria queda a pocas cuadras para tomar un café.",
    ],
  },
  {
    id: "diamond-life",
    pilar: "Cultura",
    sello: "El disco",
    titulo: "Sade · Diamond Life (1984)",
    bajada: "El primer disco de Sade, ideal para escuchar mientras te arreglas.",
    foto: { src: "", tono: "negro", alt: "El vinilo sobre una mesa de madera." },
    cuerpo: [
      "Es el primer disco de la banda y el que dio a conocer la voz de Sade Adu. Incluye \"Smooth Operator\" y \"Your Love Is King\".",
      "Mezcla jazz, soul y pop con un ritmo tranquilo. Funciona igual de bien antes de salir que de vuelta a la casa.",
      "Si nunca lo has escuchado completo, vale la pena hacerlo en orden.",
    ],
  },
  {
    id: "la-amortajada",
    pilar: "Cultura",
    sello: "El libro",
    titulo: "La amortajada, de María Luisa Bombal",
    bajada: "Una novela corta de 1938, perfecta para un domingo.",
    foto: { src: "", tono: "claro", alt: "El libro abierto y una taza al lado." },
    cuerpo: [
      "La historia la cuenta una mujer durante su propio velorio. Desde ahí recuerda su vida, sus amores y su familia.",
      "María Luisa Bombal es una de las escritoras chilenas más importantes del siglo XX y esta es una de sus obras más conocidas.",
      "Es corta y se puede leer en una tarde.",
    ],
  },
  {
    id: "cafe-con-alguien",
    pilar: "Trabajo",
    sello: "Mié 13:30",
    titulo: "Cómo pedirle un café a alguien que admiras",
    bajada: "Una forma simple de aprender de otras personas.",
    foto: { src: "", tono: "claro", alt: "Dos tazas de café y una libreta abierta sobre una mesa." },
    cuerpo: [
      "Escribe un mensaje corto: quién eres, por qué te interesa conversar con esa persona y una pregunta concreta.",
      "Ofrece ir tú, cerca de su oficina y a la hora que le acomode. Con 20 o 30 minutos basta.",
      "Llega con tus preguntas preparadas y escucha más de lo que hablas.",
      "Unas semanas después, escríbele para contarle qué hiciste con su consejo. Es un detalle que muy poca gente tiene.",
    ],
  },
  {
    id: "ia-en-el-trabajo",
    pilar: "Trabajo",
    sello: "Lun 08:30",
    titulo: "Cómo usar inteligencia artificial en el trabajo",
    bajada: "Tres usos prácticos y una regla básica.",
    foto: { src: "", tono: "negro", alt: "Un computador abierto en un escritorio con luz de mañana." },
    cuerpo: [
      "Primeros borradores. Sirve para escribir correos, actas o la estructura de una presentación. Después revisas y corriges.",
      "Resumir documentos largos. Pide que indique de qué página sale cada dato y revisa esas páginas.",
      "Preparar reuniones. Pídele que te haga las preguntas difíciles que te podrían hacer.",
      "La regla: todo lo que firmas o envías con tu nombre lo revisas tú.",
    ],
  },
  {
    id: "donde-cenar",
    pilar: "Restaurantes",
    sello: "Jue 20:00",
    titulo: "Cómo elegir dónde cenar con amigas",
    bajada: "Algunos criterios para que la conversación sea lo principal.",
    foto: { src: "", tono: "chocolate", alt: "Una mesa larga con mantel blanco y luz cálida." },
    cuerpo: [
      "Que se pueda conversar. Si la música está muy fuerte, es mejor dejarlo para después.",
      "Una mesa redonda o larga funciona mejor que una en fila. Y siempre conviene reservar.",
      "Una carta corta suele ser buena señal: los lugares que hacen pocas cosas generalmente las hacen bien.",
      "Que no haya apuro por desocupar la mesa.",
    ],
  },
  {
    id: "mercado-central",
    pilar: "Restaurantes",
    sello: "Santiago Centro",
    titulo: "Mercado Central",
    bajada: "Un edificio de 1872 y el caldillo de congrio de Neruda.",
    foto: { src: "", tono: "piedra", alt: "La estructura de fierro del Mercado Central vista desde adentro." },
    cuerpo: [
      "La estructura de fierro del mercado se fabricó en Inglaterra y se armó en Santiago. Abrió en 1872, a orillas del Mapocho, y sigue funcionando.",
      "Conviene ir a almorzar temprano. Hay pescados, mariscos y mesas para compartir.",
      "Pablo Neruda le dedicó una oda al caldillo de congrio en Odas elementales. Leerla antes de pedirlo es un buen panorama.",
    ],
  },
  {
    id: "top-con-jeans",
    pilar: "Estilo",
    sello: "De la oficina a la noche",
    titulo: "Cómo usar un top de satín con jeans",
    bajada: "Una combinación que sirve para la oficina y para salir después.",
    foto: { src: "", tono: "chocolate", alt: "Top de satín con jeans anchos, de espaldas, caminando por el centro." },
    cuerpo: [
      "La idea es combinar una pieza más elegante arriba, como un top de satín o encaje, con algo relajado abajo, como jeans anchos o un pantalón de tela.",
      "En la oficina lo puedes usar debajo de un blazer. En la noche, sin el blazer, ya estás lista para salir.",
      "Para los accesorios, mezclar oro y plata funciona bien. Bailarinas o un taco bajo son lo más cómodo para moverse por la ciudad.",
    ],
  },
];

const CLUB = {
  frase: "Un domingo subimos un cerro y un jueves recorremos la ciudad. En cada encuentro hay una invitada que comparte algo de lo que sabe.",
  detalle: "Un encuentro al mes, para grupos de 10 a 20 personas. Cada una paga lo suyo.",
  estado: "Las inscripciones se abren pronto.",
  foto: { src: "", tono: "olivo", alt: "Domingo 8:40 en la cumbre del Manquehue. Un grupo de amigas con la ciudad abajo y la cordillera nevada enfrente." },
  encuentros: [
    { fecha: "Dom 06 dic", hora: "08:00", texto: "Cerro Manquehue y desayuno al bajar." },
    { fecha: "Jue 14 ene", hora: "19:00", texto: "Recorrido de arquitectura por el barrio París-Londres con una arquitecta, y después comida." },
    { fecha: "Dom 07 feb", hora: "08:00", texto: "Cerro San Cristóbal." },
  ],
};

const ANFITRIONA = {
  titulo: "La invitada de diciembre",
  bajada: "Cada mes entrevistamos a una mujer de una profesión distinta: arquitecta, abogada, chef, historiadora. Le hacemos tres preguntas.",
  preguntas: ["Qué hace", "Qué está leyendo", "Un lugar de Santiago que recomienda"],
  estado: "Se publica en diciembre.",
  foto: { src: "", tono: "claro", alt: "Retrato en su lugar de trabajo, con luz de ventana." },
};

const LA_MESA = {
  texto: "Es nuestra lista de espera. Quienes estén en ella pueden comprar 30 minutos antes de que abra la tienda y reciben primero las invitaciones al club.",
  abre: "Abre en febrero",
};
