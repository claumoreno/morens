/*
 * ============================================================
 *  MORENS · CONTENIDO EDITORIAL
 *  Todo lo que no es producto: portada, la semana, notas,
 *  recomendaciones, club y anfitriona. Edita los textos aquí.
 *
 *  Fotos: { src: "", tono: "...", alt: "..." }
 *  Si "src" está vacío se muestra un recuadro de color con la
 *  descripción. Tonos: negro, piedra, claro, naranjo, olivo, chocolate.
 * ============================================================
 */

const PORTADA = {
  capsula: "Cápsula 01",
  nombre: "Hora Ámbar",
  bajada: "Para cuando cierras el computador y todavía queda la mejor parte del día.",
  fotos: [
    { src: "", tono: "chocolate", alt: "Jueves 20:30. Cuatro amigas en una mesa larga del centro, luz naranja de lámpara. Una se ríe, otra mira fuera de cuadro. Nadie posa." },
    { src: "", tono: "piedra", alt: "Detalle. Una mano con un anillo de oro y uno de plata sobre un libro abierto." },
    { src: "", tono: "naranjo", alt: "Atardecer desde una azotea del centro. La cordillera al fondo, una silueta de espaldas con el top Medianoche." },
  ],
};

/* Qué hacer en Santiago. "nota" enlaza a una nota de abajo (opcional). */
const SEMANA = [
  { dia: "Lun", hora: "07:00", texto: "Correr por el Parque Forestal antes de la pega. Plano, con sombra, el río al lado." },
  { dia: "Mar", hora: "19:00", texto: "Una charla o una obra en el GAM, a pasos de Lastarria." },
  { dia: "Mié", hora: "13:30", texto: "Almuerzo con alguien que admiras, cerca de su oficina.", nota: "cafe-con-alguien" },
  { dia: "Jue", hora: "20:00", texto: "Cena larga en el centro. Mesa para cuatro, reserva hecha.", nota: "donde-cenar" },
  { dia: "Jue", hora: "21:30", texto: "Un bar con jazz o buena música. La conversación sigue." },
  { dia: "Vie", hora: "18:30", texto: "Caminar París-Londres cuando se prenden las luces.", nota: "paris-londres" },
  { dia: "Sáb", hora: "11:00", texto: "Bellas Artes. Una sala, con calma.", nota: "bellas-artes" },
  { dia: "Dom", hora: "08:00", texto: "Cerro Manquehue. Desayuno al bajar.", nota: "tres-cerros" },
  { dia: "Dom", hora: "17:00", texto: "Un libro y la semana planificada.", nota: "la-amortajada" },
];

/* Gusto adquirido: las tres recomendaciones del mes (ids de NOTAS). */
const RECOMENDACIONES = [
  { etiqueta: "El disco", nota: "diamond-life" },
  { etiqueta: "El lugar", nota: "paris-londres" },
  { etiqueta: "El libro", nota: "la-amortajada" },
];

/* Lo que suena. Los títulos van en su idioma original, como cita. */
const PLAYLIST = {
  titulo: "Lo que suena",
  bajada: "Para la previa del jueves",
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
 * pilar: Ciudad, Cordillera, Cultura, Ambición, La mesa, Estilo
 * sello: la hora o el lugar, como único dato (formato "23:40, Lastarria")
 */
const NOTAS = [
  {
    id: "el-plomo",
    pilar: "Cordillera",
    sello: "5.424 m",
    titulo: "El Plomo, la cumbre que se ve desde el centro",
    bajada: "En un día limpio aparece al fondo de la Alameda.",
    foto: { src: "", tono: "piedra", alt: "La cordillera nevada vista desde una azotea del centro, El Plomo al fondo" },
    cuerpo: [
      "Es la cumbre más alta que se ve desde Santiago cuando el smog lo permite. Mide 5.424 metros y está al nororiente de la ciudad, detrás de los cerros que vemos todos los días.",
      "En 1954, unos arrieros encontraron cerca de la cima el cuerpo de un niño inca, dejado ahí como ofrenda hace unos cinco siglos. Es uno de los hallazgos arqueológicos más importantes del país.",
      "El Museo Nacional de Historia Natural, en la Quinta Normal, cuenta su historia. Vale la pena ir antes de volver a mirar la cordillera.",
      "Subirlo es una expedición de varios días, con aclimatación y guía. Mirarlo no cuesta nada.",
    ],
  },
  {
    id: "tres-cerros",
    pilar: "Cordillera",
    sello: "Dom 08:00",
    titulo: "Tres cerros para un domingo temprano",
    bajada: "Subir antes de que caliente. Bajar a desayunar.",
    foto: { src: "", tono: "olivo", alt: "Sendero de cerro al amanecer, la ciudad abajo" },
    cuerpo: [
      "San Cristóbal. Dentro de la ciudad, con senderos y caminos que suben desde Pío Nono y desde Pedro de Valdivia Norte. Es el que se hace sin planificar.",
      "Manquehue. Más exigente, más empinado al final. Desde arriba se ve la ciudad completa y la cordillera de frente.",
      "Pochoco. Hacia El Arrayán, con vista a la precordillera. Para cuando el cuerpo pide algo más largo.",
      "Agua, bloqueador y salir temprano. En verano el sol pega fuerte desde media mañana.",
    ],
  },
  {
    id: "paris-londres",
    pilar: "Ciudad",
    sello: "Vie 18:30, centro",
    titulo: "Barrio París-Londres",
    bajada: "Dos calles curvas de adoquín, a pasos de San Francisco.",
    foto: { src: "", tono: "piedra", alt: "Fachadas del barrio París-Londres al atardecer" },
    cuerpo: [
      "Se construyó en los años veinte, sobre terrenos que fueron parte del convento de San Francisco. Son dos calles cortas y curvas, con fachadas que parecen de otra ciudad.",
      "A las 19:00, cuando se prenden las luces, es otro barrio que a mediodía.",
      "En Londres 38 funciona un sitio de memoria. Entrar cambia la forma de mirar estas calles.",
      "Desde ahí, Lastarria queda a un paseo corto por la Alameda.",
    ],
  },
  {
    id: "diamond-life",
    pilar: "Cultura",
    sello: "Jue 19:00, la previa",
    titulo: "Sade · Diamond Life (1984)",
    bajada: "Para la previa del jueves, mientras te arreglas.",
    foto: { src: "", tono: "negro", alt: "El vinilo sobre una mesa de madera" },
    cuerpo: [
      "Es el primer disco de la banda y la primera vez que se escuchó la voz de Sade Adu. Trae \"Smooth Operator\" y \"Your Love Is King\".",
      "Tiene algo de jazz, algo de soul y nada de apuro. Suena igual de bien mientras te arreglas que de vuelta a la casa.",
      "Escucharlo completo y en orden, al menos una vez.",
    ],
  },
  {
    id: "la-amortajada",
    pilar: "Cultura",
    sello: "Dom 17:00",
    titulo: "La amortajada, de María Luisa Bombal",
    bajada: "Una novela corta de 1938 que se lee en una tarde.",
    foto: { src: "", tono: "claro", alt: "El libro abierto, una taza al lado" },
    cuerpo: [
      "Una mujer escucha y recuerda durante su propio velorio. Desde ahí repasa a los hombres, a los hijos y la vida que tuvo.",
      "Bombal escribió poco y escribió distinto. Es una de las voces que abrieron la literatura chilena moderna.",
      "Se termina en una tarde y se queda varios días.",
    ],
  },
  {
    id: "cafe-con-alguien",
    pilar: "Ambición",
    sello: "Mié 13:30",
    titulo: "Pedir un café a alguien que admiras",
    bajada: "Veinte minutos bien pedidos valen más que un evento de networking.",
    foto: { src: "", tono: "claro", alt: "Dos tazas de café y una libreta abierta sobre una mesa" },
    cuerpo: [
      "Escribe corto. Quién eres, por qué esa persona y una sola pregunta concreta. Nadie responde a \"me encantaría conocerte\".",
      "Ofrece ir tú, cerca de su oficina y a la hora que le acomode. Veinte minutos. Llega antes.",
      "Lleva la pregunta preparada. Escucha más de lo que hablas. Paga tú.",
      "Después, escríbele qué hiciste con su consejo. Es lo que más se recuerda y casi nadie lo hace.",
    ],
  },
  {
    id: "ia-en-la-pega",
    pilar: "Ambición",
    sello: "Lun 08:30",
    titulo: "Inteligencia artificial en la pega, sin humo",
    bajada: "Tres usos que ahorran tiempo de verdad y una regla.",
    foto: { src: "", tono: "negro", alt: "Un computador abierto en un escritorio con luz de mañana" },
    cuerpo: [
      "Primeros borradores. Correos difíciles, actas, la estructura de una presentación. Lo que harías en una hora, en diez minutos, y después lo corriges tú.",
      "Leer lo largo. Un informe de ochenta páginas resumido en una. Pide siempre que cite la página y revisa esas páginas.",
      "Preparar la reunión. Pídele las preguntas que te haría la persona más difícil de la mesa.",
      "La regla. Lo que sale con tu nombre lo revisas tú. La herramienta escribe rápido, el criterio sigue siendo tuyo.",
    ],
  },
  {
    id: "donde-cenar",
    pilar: "La mesa",
    sello: "Jue 20:00",
    titulo: "Cómo elegir dónde cenar con amigas",
    bajada: "La comida importa. La conversación, más.",
    foto: { src: "", tono: "chocolate", alt: "Una mesa larga con mantel blanco y luz de lámpara" },
    cuerpo: [
      "Que se pueda conversar. Si hay que gritar, es un bar y no una cena.",
      "Mesa redonda o larga, nunca en fila. Reserva hecha a nombre de alguien.",
      "Carta corta. Un lugar que hace pocas cosas suele hacerlas bien.",
      "Sin apuro para irse. Una buena sobremesa no tiene hora de término.",
    ],
  },
  {
    id: "mercado-central",
    pilar: "La mesa",
    sello: "Sáb 12:30, Mapocho",
    titulo: "Mercado Central",
    bajada: "Fierro de 1872 y un caldillo con poema propio.",
    foto: { src: "", tono: "piedra", alt: "La estructura de fierro del Mercado Central vista desde adentro" },
    cuerpo: [
      "La estructura de fierro fundido se fabricó en Inglaterra y se armó en Santiago. El mercado abrió en 1872 y sigue funcionando a orillas del Mapocho.",
      "Se viene temprano, con hambre y sin apuro. Pescados, mariscos y mesas para compartir.",
      "El caldillo de congrio tiene oda propia. Neruda la publicó en Odas elementales. Leerla antes de pedirlo cambia el plato.",
    ],
  },
  {
    id: "bellas-artes",
    pilar: "Ciudad",
    sello: "Sáb 11:00, Parque Forestal",
    titulo: "Museo Nacional de Bellas Artes",
    bajada: "Un edificio de 1910 que se recorre en una hora.",
    foto: { src: "", tono: "claro", alt: "Las escaleras de entrada del Museo Nacional de Bellas Artes" },
    cuerpo: [
      "Se inauguró en 1910, para el Centenario, frente al Parque Forestal. El hall central, bajo la cúpula de vidrio, vale la visita aunque no mires nada más.",
      "La regla para no cansarse. Una sala, mirar con calma y salir con una obra en la cabeza.",
      "Las escaleras de la entrada son de las mejores del centro para sentarse a conversar después.",
    ],
  },
  {
    id: "top-con-jeans",
    pilar: "Estilo",
    sello: "18:30 a 23:40",
    titulo: "Un top fino con jeans",
    bajada: "La fórmula que resuelve el después de la pega.",
    foto: { src: "", tono: "chocolate", alt: "Top de satín con jeans anchos, de espaldas, caminando por el centro" },
    cuerpo: [
      "Arriba, una pieza que se note. Satín, encaje o la espalda. Abajo, algo relajado. Jeans anchos o pantalón sastre.",
      "En la oficina va bajo el blazer. A las 19:00 el blazer se va al respaldo de la silla.",
      "Oro y plata mezclados. Bailarinas o un taco bajo, para caminar de un lugar a otro.",
      "No es un look para cambiarse. Es uno para no tener que hacerlo.",
    ],
  },
];

const CLUB = {
  frase: "El cerro un domingo, la ciudad un jueves. Siempre con amigas, y cada vez con una mujer que sabe algo que vale la pena escuchar.",
  detalle: "Un encuentro al mes. Entre 10 y 20 mujeres. Cada una paga lo suyo.",
  estado: "Inscripciones pronto.",
  foto: { src: "", tono: "olivo", alt: "Domingo 8:40, cumbre del Manquehue. Diez mujeres, la ciudad abajo, la cordillera nevada enfrente. Alguien reparte café." },
  encuentros: [
    { fecha: "Dom 06 dic", hora: "08:00", texto: "Cerro Manquehue. Desayuno al bajar." },
    { fecha: "Jue 14 ene", hora: "19:00", texto: "Recorrido de arquitectura por el barrio París-Londres, con una arquitecta. Después, cena." },
    { fecha: "Dom 07 feb", hora: "08:00", texto: "Cerro San Cristóbal, temprano." },
  ],
};

const ANFITRIONA = {
  titulo: "La anfitriona de diciembre",
  bajada: "Cada mes, una mujer de una profesión distinta. Arquitecta, abogada, chef, historiadora. Tres preguntas, sin pose.",
  preguntas: ["Qué hace", "Qué está leyendo", "Su lugar de Santiago"],
  estado: "Se publica en diciembre.",
  foto: { src: "", tono: "claro", alt: "Retrato en su lugar de trabajo, luz de ventana" },
};

const LA_MESA = {
  texto: "La lista de espera. Compra 30 minutos antes que todas y recibe primero las invitaciones al club.",
  abre: "Abre en febrero",
};
