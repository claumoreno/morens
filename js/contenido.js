/*
 * ============================================================
 *  MORENS · CONTENIDO EDITORIAL
 *  Todo lo que no es producto: portada, la semana, el dato,
 *  apuntes, club e invitada. Edita los textos aquí.
 *
 *  Tono: natural, como se lo contarías a una amiga. Información
 *  concreta (dónde, cuándo, cuánto, por qué vale la pena) y nada
 *  de frases de efecto.
 *
 *  Fotos:
 *   - Propia:      { src: "img/mi-foto.jpg", tono: "claro", alt: "…" }
 *   - Wikimedia:   wiki("Nombre exacto del archivo.jpg", "Autor", "Licencia", "tono", "alt")
 *   - Unsplash:    unsplash("idDeLaFoto", "Autor", "tono", "alt")
 *   - Sin foto:    { src: "", tono: "claro", alt: "…" }  → recuadro de color
 *   - Provisoria:  provisoria("archivo.jpg", "tono", "alt")  → ver abajo
 *  Si una foto no carga, se muestra el recuadro de color en su lugar.
 *
 *  FOTOS PROVISORIAS (Pinterest u otras sin permiso de uso)
 *  Van en fotos/provisorias/ y se usan solo para ver cómo queda el sitio
 *  privado. Cada vez que se use una, la línea lleva este comentario
 *  y la foto se anota en fotos-provisorias.md:
 *
 *    // PROVISORIA - reemplazar antes de lanzar
 *    foto: provisoria("cena-amigas.jpg", "chocolate", "Cuatro amigas cenando…"),
 *
 *  Antes de lanzar, buscar "PROVISORIA" en todo el proyecto: no debe quedar ninguna.
 * ============================================================
 */

/* Las funciones wiki(), unsplash() y provisoria() están en js/fotos.js */

const PORTADA = {
  bajada: "Para cuando cierras el computador y todavía queda la mejor parte del día.",
  fotos: [
    { src: "", tono: "chocolate", alt: "Jueves 20:30. Cuatro amigas cenando en una mesa larga del centro, con luz cálida." },
    { src: "", tono: "piedra", alt: "Detalle de una mano con un anillo de oro y uno de plata sobre un libro abierto." },
    { src: "", tono: "naranjo", alt: "Atardecer desde una azotea del centro, con la cordillera al fondo y una mujer de espaldas con el top Ximena." },
  ],
};

/* La semana: qué hacer en Santiago. "nota" enlaza a un apunte (opcional). */
const SEMANA = [
  { dia: "Lun", hora: "07:00", lugar: "Santiago Centro", texto: "Salir a correr al Parque Forestal antes de ir a la oficina.", nota: "parque-forestal" },
  { dia: "Mar", hora: "19:30", lugar: "Santiago Centro", texto: "Ver una obra en el GAM, a pasos de Lastarria.", nota: "gam" },
  { dia: "Mié", hora: "13:30", lugar: "Las Condes", texto: "Almorzar en El Golf con alguien de quien quieras aprender.", nota: "cafe-con-alguien" },
  { dia: "Jue", hora: "20:00", lugar: "Providencia", texto: "Cenar con amigas en Barrio Italia. Mejor con reserva.", nota: "barrio-italia" },
  { dia: "Jue", hora: "22:00", lugar: "Ñuñoa", texto: "Seguir en algún bar de Plaza Ñuñoa.", nota: "plaza-nunoa" },
  { dia: "Vie", hora: "18:00", lugar: "Vitacura", texto: "Pasar por las galerías de arte de Alonso de Córdova.", nota: "galerias-vitacura" },
  { dia: "Sáb", hora: "09:30", lugar: "Recoleta", texto: "Comprar fruta en La Vega y quedarse a tomar desayuno en una cocinería.", nota: "vega-central" },
  { dia: "Sáb", hora: "12:00", lugar: "Santiago Centro", texto: "Bellas Artes y el MAC en una misma mañana.", nota: "bellas-artes" },
  { dia: "Sáb", hora: "17:00", lugar: "Santiago Centro", texto: "Caminar por París-Londres y seguir hasta Lastarria.", nota: "paris-londres" },
  { dia: "Dom", hora: "08:00", lugar: "Vitacura", texto: "Subir el Cerro El Carbón y tomar desayuno al bajar.", nota: "cerro-carbon" },
  { dia: "Dom", hora: "18:00", lugar: "En casa", texto: "Leer un rato y organizar la semana.", nota: "ordenar-semana" },
];

/* El dato: las recomendaciones del mes (ids de NOTAS). */
const EL_DATO = [
  { etiqueta: "El disco", nota: "diamond-life" },
  { etiqueta: "El libro", nota: "la-amortajada" },
  { etiqueta: "La película", nota: "una-mujer-fantastica" },
  { etiqueta: "El lugar", nota: "paris-londres" },
  { etiqueta: "La caminata", nota: "quebrada-de-macul" },
  { etiqueta: "La cartelera", nota: "gam" },
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
 * APUNTES
 * pilar: Cerros, Ciudad, Cultura, Trabajo, Restaurantes, Tendencias
 * sello: la comuna o el momento, en pocas palabras
 * Horarios, precios y accesos cambian: cuando corresponde, la nota
 * dice dónde confirmarlos.
 */
const NOTAS = [
  /* ---------- Cerros ---------- */
  {
    id: "quebrada-de-macul",
    pilar: "Cerros",
    sello: "Peñalolén",
    titulo: "Quebrada de Macul",
    bajada: "Un parque natural con cascadas, a media hora del centro.",
    foto: wiki("Entrada Parque Natural Quebrada de Macul, Peñalolén, Santiago 20231021.jpg", "Carlos Figueroa", "CC BY-SA 4.0", "olivo", "Entrada del Parque Natural Quebrada de Macul, con la precordillera detrás."),
    cuerpo: [
      "El Parque Natural Quebrada de Macul está en Peñalolén, a los pies de la cordillera. La entrada es gratuita y hay que registrarse en la caseta de guardaparques, al lado de la Medialuna de Peñalolén.",
      "Hay recorridos para distintos niveles. El sendero al Bosque de Peumos es corto, de unos 4 a 5 kilómetros ida y vuelta. La caminata a la Cascada San Juan es más larga: toma entre 3 y 4 horas en total, con tramos de subida.",
      "Cierra los lunes por mantención y los horarios cambian según la temporada, así que conviene revisarlos en la Municipalidad de Peñalolén antes de ir.",
      "En transporte público, se puede llegar en metro hasta la estación Grecia y tomar una micro por Av. Grecia hasta Diagonal Las Torres. Desde ahí son unos 1,5 kilómetros caminando hasta la entrada.",
      "Lleva agua, bloqueador y algo para comer. En verano, salir temprano hace toda la diferencia.",
    ],
  },
  {
    id: "cerro-carbon",
    pilar: "Cerros",
    sello: "Vitacura",
    titulo: "Cerro El Carbón",
    bajada: "Una muy buena primera subida, con todo Santiago de fondo.",
    foto: wiki("Cerro El Carbón y Manquehue, Vitacura, Santiago 20250804.jpg", "Carlos Figueroa", "CC BY-SA 4.0", "olivo", "El Cerro El Carbón y el Manquehue vistos desde Vitacura."),
    cuerpo: [
      "El Carbón está en Vitacura, al lado del Manquehue. Es una de las subidas más recomendadas para empezar: el sendero es claro y la pendiente es constante pero amable.",
      "El recorrido completo es de unos 8 kilómetros ida y vuelta, con cerca de 700 metros de desnivel. Calcula entre 3 y 3 horas y media, con calma.",
      "El acceso principal está en la rotonda La Pirámide, frente al colegio Saint George's. En transporte público, se llega en metro hasta Escuela Militar y desde ahí en micro C22 o 722 hasta La Pirámide.",
      "En el camino hay varios miradores para descansar, como El Litre, Guayacán y La Montaña. Desde arriba se ve casi toda la ciudad y, en días despejados, la cordillera completa enfrente.",
    ],
  },
  {
    id: "san-cristobal",
    pilar: "Cerros",
    sello: "Providencia y Recoleta",
    titulo: "Cerro San Cristóbal a pie",
    bajada: "El cerro que se puede subir antes del desayuno.",
    foto: wiki("Sanhattan desde el Cerro San Cristóbal, Santiago de Chile.jpg", "Autor en Wikimedia Commons", "CC BY-SA", "piedra", "Vista de Providencia y Las Condes desde el Cerro San Cristóbal."),
    cuerpo: [
      "Es el cerro más fácil de organizar: está dentro de la ciudad y se puede subir caminando desde Pío Nono, en Bellavista, o desde Pedro de Valdivia Norte, en Providencia.",
      "Arriba está el santuario y una de las vistas más completas de Santiago. Si quieres, puedes bajar en funicular o en teleférico (revisa sus horarios en el sitio del Parque Metropolitano).",
      "Temprano en la mañana se llena de gente corriendo y en bicicleta, sobre todo los fines de semana.",
      "Para subir sin apuro, cuenta entre una y dos horas ida y vuelta, según desde dónde partas.",
    ],
  },
  {
    id: "mirador-condores",
    pilar: "Cerros",
    sello: "Cajón del Maipo",
    titulo: "Mirador de Cóndores",
    bajada: "Un día completo en el Cajón del Maipo, con un poco más de exigencia.",
    foto: wiki("Camino al Alfalfal San José de Maipo 08.jpg", "Autor en Wikimedia Commons", "CC BY-SA", "piedra", "Camino a El Alfalfal, en San José de Maipo, con montañas alrededor."),
    cuerpo: [
      "El sendero parte en El Alfalfal, en el Cajón del Maipo, a cerca de una hora y media de Santiago en auto.",
      "Son entre 9 y 10 kilómetros ida y vuelta, con unos 770 metros de desnivel. El sendero es claro y fácil de seguir, aunque casi no tiene señalización.",
      "Lleva toda el agua que vas a necesitar desde el inicio: los arroyos del camino pasan por zonas de pastoreo y no conviene tomar de ahí.",
      "Si no tienes auto, varias agencias organizan la salida por el día desde Santiago. Y con suerte, como dice el nombre, se ven cóndores.",
    ],
  },
  {
    id: "triple-corona",
    pilar: "Cerros",
    sello: "Vitacura",
    titulo: "La Triple Corona",
    bajada: "El Carbón, el Manquehue y el Manquehuito en una sola salida.",
    foto: wiki("Cerro Manquehue desde Cerro 18.jpg", "Autor en Wikimedia Commons", "CC BY-SA", "olivo", "El Cerro Manquehue visto desde el Cerro 18."),
    cuerpo: [
      "Cuando El Carbón ya te queda corto, la Triple Corona junta tres cumbres seguidas: El Carbón, el Manquehue y el Manquehuito.",
      "Es una ruta larga y exigente, con tramos empinados y de roca suelta. No es para empezar, pero es un buen objetivo para el año.",
      "Hazla acompañada, con harta agua y partiendo temprano. Antes de ir, revisa el recorrido actualizado en aplicaciones de senderismo como Komoot o Wikiloc.",
    ],
  },
  {
    id: "cerro-provincia",
    pilar: "Cerros",
    sello: "Lo Barnechea",
    titulo: "Cerro Provincia, a lo mucho",
    bajada: "El más exigente de esta lista. Para cuando ya subiste varios.",
    foto: wiki("Pre-Cordillera de los Andes, Santiago, Chile.JPG", "Autor en Wikimedia Commons", "CC BY-SA", "piedra", "La precordillera de los Andes vista desde Santiago."),
    cuerpo: [
      "El Provincia llega a 2.750 metros y tiene una de las mejores vistas de Santiago. Pero es largo: desde el acceso de Puente Ñilhue, en el camino a Farellones, son casi 18 kilómetros ida y vuelta.",
      "En verano es caluroso, empinado y casi no tiene sombra ni agua. Por eso se recomienda en otoño o invierno, saliendo muy temprano.",
      "El acceso suele cerrar los lunes y tiene cobro de entrada. Revisa las condiciones con la Asociación Parque Cordillera antes de ir.",
    ],
  },
  {
    id: "el-plomo",
    pilar: "Cerros",
    sello: "5.424 m",
    titulo: "El Plomo, la cumbre que se ve desde Santiago",
    bajada: "Qué es, cuánto mide y por qué es tan importante.",
    foto: wiki("Cordillera de los Andes, junto a Sanhattan.jpg", "Hector Garcia", "CC BY-SA", "piedra", "La cordillera nevada detrás de los edificios de Las Condes."),
    cuerpo: [
      "El Plomo es la cumbre más alta que se ve desde Santiago en los días despejados. Mide 5.424 metros y está al nororiente de la ciudad, detrás de los cerros más cercanos.",
      "En 1954, unos arrieros encontraron cerca de la cima el cuerpo de un niño inca que había sido dejado ahí como ofrenda hace unos 500 años. Es uno de los hallazgos arqueológicos más importantes de Chile.",
      "Si te interesa la historia, el Museo Nacional de Historia Natural, en la Quinta Normal, la explica muy bien.",
      "Subirlo es una expedición de varios días, con aclimatación y guía. Mirarlo no cuesta nada.",
    ],
  },

  /* ---------- Ciudad ---------- */
  {
    id: "paris-londres",
    pilar: "Ciudad",
    sello: "Santiago Centro",
    titulo: "Barrio París-Londres",
    bajada: "Dos calles de adoquín a pasos de la Iglesia San Francisco.",
    foto: wiki("Barrio París-Londres, en Santiago de Chile.jpg", "Willemarcel", "CC BY-SA 3.0", "piedra", "Una calle de adoquines del barrio París-Londres."),
    cuerpo: [
      "El barrio se construyó en los años veinte, en terrenos que eran parte del convento de San Francisco. Son dos calles cortas y curvas, con casas de estilo europeo.",
      "Se recorre en media hora y es especialmente lindo al atardecer, cuando se encienden las luces.",
      "En Londres 38 funciona un sitio de memoria que recuerda lo que pasó ahí durante la dictadura. Vale la pena entrar.",
      "Desde ahí puedes seguir caminando por la Alameda hasta Lastarria.",
    ],
  },
  {
    id: "lastarria",
    pilar: "Ciudad",
    sello: "Santiago Centro",
    titulo: "Barrio Lastarria",
    bajada: "Librerías, cafés, teatro y el Cerro Santa Lucía al lado.",
    foto: wiki("Calle Lastarria -Libreria Ulises -fRF2.jpg", "Rodrigo Fernández", "CC BY-SA 4.0", "piedra", "La calle Lastarria con la Librería Ulises."),
    cuerpo: [
      "Lastarria es uno de los barrios más caminables del centro. Tiene calles angostas, edificios antiguos, cafés, librerías y restaurantes.",
      "A una cuadra está el GAM, con teatro, danza y música, y muy cerca el Cerro Santa Lucía, que se sube en poco rato y tiene una vista muy linda del centro.",
      "Un buen plan de sábado: un café, una vuelta por la Librería Ulises, en la misma calle Lastarria, y después subir el Santa Lucía.",
    ],
  },
  {
    id: "barrio-italia",
    pilar: "Ciudad",
    sello: "Providencia",
    titulo: "Barrio Italia",
    bajada: "Casas antiguas convertidas en tiendas, talleres y restaurantes.",
    foto: wiki("Avenida Italia, Providencia, Santiago 20231022.jpg", "Carlos Figueroa", "CC BY-SA 4.0", "chocolate", "La avenida Italia, en Providencia."),
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
    foto: wiki("Plaza Ñuñoa, Ñuñoa, Santiago 20240505.jpg", "Carlos Figueroa", "CC BY-SA 4.0", "chocolate", "Plaza Ñuñoa en un día de semana."),
    cuerpo: [
      "Plaza Ñuñoa es uno de los centros de vida de barrio de Santiago. Alrededor hay bares, restaurantes y cafés con mesas afuera.",
      "A una cuadra está el Teatro UC, de la Universidad Católica, con una cartelera que vale la pena revisar.",
      "Una buena idea para un jueves: ver una obra y después quedarse a comer cerca de la plaza.",
    ],
  },
  {
    id: "parque-forestal",
    pilar: "Ciudad",
    sello: "Santiago Centro",
    titulo: "Parque Forestal",
    bajada: "El parque para correr, leer en el pasto o ir de museo en museo.",
    foto: wiki("Parque Forestal, Santiago de Chile.JPG", "Arturo Rinaldi Villegas", "CC BY-SA 3.0", "olivo", "Senderos y árboles del Parque Forestal."),
    cuerpo: [
      "El Parque Forestal corre a lo largo del río Mapocho, entre Plaza Baquedano y la Estación Mapocho. Es largo, plano y con árboles grandes, ideal para correr temprano.",
      "En el camino está el Palacio de Bellas Artes, donde funcionan el Museo Nacional de Bellas Artes y el Museo de Arte Contemporáneo.",
      "Los fines de semana se llena de gente leyendo en el pasto, paseando perros o haciendo picnic.",
    ],
  },

  /* ---------- Cultura ---------- */
  {
    id: "bellas-artes",
    pilar: "Cultura",
    sello: "Santiago Centro",
    titulo: "Museo Nacional de Bellas Artes",
    bajada: "Un edificio de 1910 en el Parque Forestal.",
    foto: wiki("Museo Nacional de Bellas Artes, Santiago 20230311.jpg", "Carlos Figueroa", "CC BY-SA 4.0", "claro", "Fachada del Museo Nacional de Bellas Artes."),
    cuerpo: [
      "El museo se inauguró en 1910, para el Centenario, frente al Parque Forestal. Solo el hall central, con su cúpula de vidrio, ya vale la visita.",
      "Un consejo para disfrutarlo más: elegir una o dos salas y verlas con tiempo, en vez de intentar recorrer todo.",
      "Al salir, Lastarria queda a pocas cuadras para tomar un café.",
    ],
  },
  {
    id: "mac",
    pilar: "Cultura",
    sello: "Parque Forestal",
    titulo: "Museo de Arte Contemporáneo",
    bajada: "Arte actual en la parte de atrás del mismo edificio de Bellas Artes.",
    foto: wiki("Fachada interior Museo Nacional de Bellas Artes - A740450.jpg", "Autor en Wikimedia Commons", "CC BY-SA", "claro", "Interior del Palacio de Bellas Artes."),
    cuerpo: [
      "El MAC es el museo de arte contemporáneo de la Universidad de Chile. Su sede principal está en el Parque Forestal, en la parte posterior del Palacio de Bellas Artes.",
      "Trabaja con ciclos de exposiciones que cambian varias veces al año, así que casi siempre hay algo nuevo.",
      "Como está pegado a Bellas Artes, se pueden ver los dos museos en una misma mañana.",
    ],
  },
  {
    id: "gam",
    pilar: "Cultura",
    sello: "Santiago Centro",
    titulo: "GAM, Centro Cultural Gabriela Mistral",
    bajada: "Teatro, danza y música en la Alameda, a pasos de Lastarria.",
    foto: wiki("Centro Cultural Gabriela Mistral, Santiago 20230422.jpg", "Carlos Figueroa", "CC BY-SA 4.0", "piedra", "El edificio del Centro Cultural Gabriela Mistral en la Alameda."),
    cuerpo: [
      "El GAM está en la Alameda, frente al barrio Lastarria. Tiene una cartelera muy variada de teatro, danza y música durante todo el año.",
      "Además de las salas, tiene espacios abiertos y exposiciones, como las del Museo de Arte Popular Americano.",
      "Revisa la cartelera en su sitio web y compra con anticipación: las obras más buscadas se agotan.",
    ],
  },
  {
    id: "galerias-vitacura",
    pilar: "Cultura",
    sello: "Vitacura",
    titulo: "Galerías de arte en Vitacura",
    bajada: "Arte contemporáneo en una tarde y, en general, sin pagar entrada.",
    foto: { src: "", tono: "claro", alt: "Sala blanca de una galería de arte con una obra grande en la pared." },
    cuerpo: [
      "En Vitacura, en Alonso de Córdova y sus calles cercanas, hay varias galerías de arte contemporáneo, muy cerca unas de otras.",
      "Algunas con muchos años de trayectoria son la Galería Isabel Aninat, en Alonso de Córdova, y la Galería Patricia Ready, en calle Espoz.",
      "La mayoría no cobra entrada y se pueden recorrer en una tarde. Es una buena forma de conocer artistas chilenos actuales.",
      "Muchas hacen inauguraciones abiertas al público. Seguirlas en redes sociales es la mejor forma de enterarse.",
    ],
  },
  {
    id: "diamond-life",
    pilar: "Cultura",
    sello: "El disco",
    titulo: "Sade · Diamond Life (1984)",
    bajada: "El primer disco de Sade, ideal para escuchar mientras te arreglas.",
    foto: unsplash("wCT3oz2seaQ", "lesha tuman", "negro", "Un tocadiscos con un vinilo girando, con luz cálida."),
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
    foto: unsplash("uwXQAoTq2wU", "American Heritage Chocolate", "claro", "Un libro abierto sobre una mesa, al lado de una taza de café."),
    cuerpo: [
      "La historia la cuenta una mujer durante su propio velorio. Desde ahí recuerda su vida, sus amores y su familia.",
      "María Luisa Bombal es una de las escritoras chilenas más importantes del siglo XX y esta es una de sus obras más conocidas.",
      "Es corta y se puede leer en una tarde.",
    ],
  },
  {
    id: "una-mujer-fantastica",
    pilar: "Cultura",
    sello: "La película",
    titulo: "Una mujer fantástica (2017)",
    bajada: "La película chilena que ganó el Oscar.",
    foto: { src: "", tono: "negro", alt: "Una sala de cine con la pantalla encendida." },
    cuerpo: [
      "La dirigió Sebastián Lelio y la protagoniza Daniela Vega. Cuenta la historia de Marina, una mujer trans que enfrenta la muerte de su pareja y todo lo que viene después.",
      "En 2018 ganó el Oscar a Mejor Película Extranjera, el primero para Chile en esa categoría.",
      "Gran parte se filmó en Santiago, así que también es una forma de ver la ciudad con otros ojos.",
    ],
  },

  /* ---------- Trabajo ---------- */
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
    titulo: "Inteligencia artificial en el trabajo diario",
    bajada: "Tres usos prácticos y una regla.",
    foto: unsplash("TdgfSyDoWBE", "Yen Vu", "claro", "Un cuaderno y un computador sobre un escritorio de trabajo."),
    cuerpo: [
      "Primeros borradores. Sirve para escribir correos, actas o la estructura de una presentación. Después revisas y corriges.",
      "Resumir documentos largos. Pide que indique de qué página sale cada dato y revisa esas páginas.",
      "Preparar reuniones. Pídele que te haga las preguntas difíciles que te podrían hacer.",
      "La regla: todo lo que firmas o envías con tu nombre lo revisas tú.",
    ],
  },
  {
    id: "pedir-aumento",
    pilar: "Trabajo",
    sello: "Antes de la evaluación",
    titulo: "Cómo pedir un aumento",
    bajada: "Prepararlo bien es la mitad de la conversación.",
    foto: { src: "", tono: "piedra", alt: "Una sala de reuniones con luz de tarde." },
    cuerpo: [
      "Elige bien el momento: después de un buen resultado o cerca de la evaluación anual, no en medio de una crisis del equipo.",
      "Lleva datos. Qué lograste, qué responsabilidades sumaste y cuánto se paga por un cargo parecido. Las encuestas de remuneraciones y los portales de empleo sirven de referencia.",
      "Di un número concreto. Es más fácil negociar desde una cifra que desde un \"lo que ustedes consideren\".",
      "Si la respuesta es no, pregunta qué tendría que pasar para que sea sí y en qué plazo. Y déjalo por escrito.",
    ],
  },
  {
    id: "ordenar-semana",
    pilar: "Trabajo",
    sello: "Dom 18:00",
    titulo: "Cómo organizar la semana el domingo",
    bajada: "Veinte minutos para empezar el lunes más tranquila.",
    foto: { src: "", tono: "claro", alt: "Una agenda abierta con la semana escrita a mano." },
    cuerpo: [
      "Revisa el calendario y anota lo que no se puede mover: reuniones, entregas, la comida con amigas.",
      "Elige tres prioridades de trabajo para la semana. Si todo es prioridad, nada lo es.",
      "Bloquea tiempo para lo importante, también para lo personal: el entrenamiento, el cerro, un rato para leer.",
      "Deja algo de espacio libre. Siempre aparece algo que no estaba en el plan.",
    ],
  },

  /* ---------- Restaurantes ---------- */
  {
    id: "confiteria-torres",
    pilar: "Restaurantes",
    sello: "Desde 1879",
    titulo: "Confitería Torres",
    bajada: "Uno de los restaurantes más antiguos de Santiago, donde nació el barros luco.",
    foto: wiki("Confitería Torres.jpg", "Jaime Troncoso", "CC0", "chocolate", "Fachada de la Confitería Torres."),
    cuerpo: [
      "La Confitería Torres abrió en 1879 en Ahumada con Huérfanos. En 1904 se trasladó a la Alameda, al Palacio Íñiguez, donde funcionó durante más de un siglo.",
      "Ahí nació el barros luco: el presidente Ramón Barros Luco pedía siempre un sándwich de carne con queso derretido, y el nombre se quedó.",
      "Hoy también tiene un local en Isidora Goyenechea, en Las Condes. Antes de ir, revisa en sus redes qué local está abierto y en qué horario.",
    ],
  },
  {
    id: "mercado-central",
    pilar: "Restaurantes",
    sello: "Santiago Centro",
    titulo: "Mercado Central",
    bajada: "Un edificio de 1872 y el caldillo de congrio de Neruda.",
    foto: wiki("Mercado Central de Santiago, Santiago 20190715 06.jpg", "Carlos Figueroa", "CC BY-SA 4.0", "piedra", "La estructura de fierro del Mercado Central."),
    cuerpo: [
      "La estructura de fierro del mercado se fabricó en Inglaterra y se armó en Santiago. Abrió en 1872, a orillas del Mapocho, y sigue funcionando.",
      "Conviene ir a almorzar temprano. Hay pescados, mariscos y mesas para compartir.",
      "Pablo Neruda le dedicó una oda al caldillo de congrio en Odas elementales. Leerla antes de pedirlo es un buen panorama.",
    ],
  },
  {
    id: "vega-central",
    pilar: "Restaurantes",
    sello: "Recoleta",
    titulo: "La Vega Central",
    bajada: "Fruta, verdura y cocinerías al otro lado del Mapocho.",
    foto: wiki("Vega Central, Recoleta, Santiago 20231015.jpg", "Carlos Figueroa", "CC BY-SA 4.0", "olivo", "Puestos de fruta y verdura en La Vega Central."),
    cuerpo: [
      "Está en Recoleta, cruzando el río desde el Mercado Central. Es uno de los mercados de frutas y verduras más grandes y tradicionales de Santiago.",
      "Además de los puestos, tiene cocinerías donde se almuerza bien y barato. Es un muy buen panorama de sábado en la mañana.",
      "Ve temprano, con bolsa propia y algo de efectivo, aunque cada vez más puestos aceptan tarjeta.",
    ],
  },
  {
    id: "donde-cenar",
    pilar: "Restaurantes",
    sello: "Jue 20:00",
    titulo: "Cómo elegir dónde cenar con amigas",
    bajada: "Algunos criterios para que la conversación sea lo principal.",
    foto: unsplash("Wra2sFv_Z44", "Autor en Unsplash", "chocolate", "Un grupo de amigas conversando en la mesa de un restaurante."),
    cuerpo: [
      "Que se pueda conversar. Si la música está muy fuerte, es mejor dejarlo para después.",
      "Una mesa redonda o larga funciona mejor que una en fila. Y siempre conviene reservar.",
      "Una carta corta suele ser buena señal: los lugares que hacen pocas cosas generalmente las hacen bien.",
      "Que no haya apuro por desocupar la mesa.",
    ],
  },

  /* ---------- Tendencias ---------- */
  {
    id: "top-con-jeans",
    pilar: "Tendencias",
    sello: "Oficina y noche",
    titulo: "Cómo usar un top de satín con jeans",
    bajada: "Una combinación que sirve para la oficina y para salir después.",
    foto: { src: "", tono: "chocolate", alt: "Top de satín con jeans anchos, de espaldas, caminando por el centro." },
    cuerpo: [
      "La idea es combinar una pieza más elegante arriba, como un top de satín o encaje, con algo relajado abajo, como jeans anchos o un pantalón de tela.",
      "En la oficina lo puedes usar debajo de un blazer. En la noche, sin el blazer, ya estás lista para salir.",
      "Bailarinas o un taco bajo son lo más cómodo para moverse por la ciudad.",
    ],
  },
  {
    id: "cafe-en-vez-de-negro",
    pilar: "Tendencias",
    sello: "Otoño-invierno 2026",
    titulo: "El café reemplaza al negro",
    bajada: "Moka, caoba y chocolate en las colecciones de la temporada.",
    foto: { src: "", tono: "chocolate", alt: "Un abrigo café colgado junto a una ventana." },
    cuerpo: [
      "En los desfiles de otoño-invierno 2026 del hemisferio norte, los tonos café (moka, caoba, chocolate) aparecieron una y otra vez como alternativa al negro.",
      "Funcionan igual que el negro, porque combinan con casi todo, pero se ven más cálidos y menos formales. El verde oliva también aparece como otro neutro de la temporada.",
      "Como en Chile la temporada llega unos meses después, es una buena pista de lo que vamos a ver en Santiago el próximo otoño.",
      "Una forma fácil de probarlo: cambiar el abrigo o la cartera negra por una café.",
    ],
  },
  {
    id: "transparencias",
    pilar: "Tendencias",
    sello: "Otoño-invierno 2026",
    titulo: "Transparencias, pero en capas",
    bajada: "Cómo llevar una tendencia de pasarela al día a día.",
    foto: { src: "", tono: "negro", alt: "Detalle de una manga de malla transparente sobre una camisa." },
    cuerpo: [
      "Las telas transparentes fueron otra de las tendencias de los desfiles de otoño-invierno 2026, casi siempre usadas en capas y no solas.",
      "Para el día, la clave es superponer: un top de malla debajo de una camisa abierta o un vestido de tirantes sobre un top de manga larga.",
      "Para la noche se puede usar con menos capas, siempre con algo más estructurado al lado, como un blazer o un abrigo.",
    ],
  },
  {
    id: "oro-y-plata",
    pilar: "Tendencias",
    sello: "Todo el año",
    titulo: "Oro y plata al mismo tiempo",
    bajada: "La regla de no mezclar metales ya no corre.",
    foto: { src: "", tono: "piedra", alt: "Una mano con anillos finos de oro y de plata." },
    cuerpo: [
      "Durante años la regla fue elegir oro o plata. Hoy se mezclan sin problema, en anillos, pulseras y aros.",
      "Lo que ayuda a que se vea intencional es repetir: si llevas un anillo de oro y uno de plata, suma otro detalle de cada uno, como un aro o una pulsera.",
      "Las piezas finas y simples son las más fáciles de mezclar y de usar todos los días.",
    ],
  },
];

/*
 * CLUB MORENS
 * pilares: en orden de importancia. encuentros: "pilar" debe coincidir
 * con el nombre de un pilar.
 */
const CLUB = {
  frase: "Un club para moverse, aprender cosas nuevas y conocer a mujeres de otras profesiones. Una vez al mes como mínimo.",
  detalle: "Grupos de 10 a 20 personas. Cada una paga lo suyo.",
  estado: "Las inscripciones se abren pronto.",
  foto: unsplash("ahPZamckL7A", "Geronimo Giqueaux", "olivo", "Dos mujeres corriendo en un parque."),
  pilares: [
    { nombre: "Moverse", texto: "Run club los martes temprano en el Parque Forestal y un cerro al mes, de los más tranquilos a los más exigentes." },
    { nombre: "Aprender algo", texto: "Talleres cortos de cosas que siempre quisiste probar: cerámica, fotografía, finanzas personales, oratoria." },
    { nombre: "Red profesional", texto: "Desayunos con una invitada que cuenta cómo llegó donde está. Abogadas, arquitectas, emprendedoras, chefs." },
    { nombre: "Salir a conocer", texto: "Galerías, museos, bares y recorridos por barrios, con alguien que los conoce bien." },
  ],
  encuentros: [
    { fecha: "Mar 01 dic", hora: "07:00", pilar: "Moverse", texto: "Primer run club en el Parque Forestal. Desde ahí, todos los martes." },
    { fecha: "Dom 06 dic", hora: "08:00", pilar: "Moverse", texto: "Cerro El Carbón y desayuno al bajar." },
    { fecha: "Jue 10 dic", hora: "19:00", pilar: "Salir a conocer", texto: "Recorrido por las galerías de Alonso de Córdova, en Vitacura." },
    { fecha: "Sáb 12 dic", hora: "11:00", pilar: "Aprender algo", texto: "Taller de cerámica para principiantes." },
    { fecha: "Mié 16 dic", hora: "08:00", pilar: "Red profesional", texto: "Desayuno con la invitada de diciembre." },
    { fecha: "Jue 14 ene", hora: "19:00", pilar: "Salir a conocer", texto: "Recorrido de arquitectura por París-Londres con una arquitecta, y después comida." },
    { fecha: "Sáb 23 ene", hora: "10:00", pilar: "Aprender algo", texto: "Taller de finanzas personales: presupuesto, ahorro y primeras inversiones." },
    { fecha: "Dom 07 feb", hora: "08:00", pilar: "Moverse", texto: "Quebrada de Macul hasta el Bosque de Peumos." },
  ],
};

const ANFITRIONA = {
  titulo: "La invitada de diciembre",
  bajada: "Cada mes, una mujer de una profesión distinta: arquitecta, abogada, chef, historiadora. Tres preguntas, sin pose.",
  preguntas: ["Qué hace", "Qué está leyendo", "Un lugar de Santiago que recomienda"],
  estado: "Se publica en diciembre.",
  foto: { src: "", tono: "claro", alt: "Retrato en su lugar de trabajo, con luz de ventana." },
};

const LA_MESA = {
  texto: "Es nuestra lista de espera. Quienes estén en ella pueden comprar 30 minutos antes de que abra la tienda y reciben primero las invitaciones al club.",
  abre: "Abre en febrero",
};
