(function () {
  "use strict";

  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];
  const pagina = document.body.dataset.pagina;
  const enInicio = pagina === "inicio";
  const ancla = (id) => (enInicio ? `#${id}` : `index.html#${id}`);

  const esc = (s) =>
    String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  const formato = new Intl.NumberFormat(TIENDA.locale, { style: "currency", currency: TIENDA.moneda, maximumFractionDigits: 0 });
  const precio = (n) => formato.format(n);
  const buscarProducto = (id) => PRODUCTOS.find((p) => p.id === id);
  const buscarNota = (id) => NOTAS.find((n) => n.id === id);
  const linkWhatsapp = (texto) => `https://wa.me/${TIENDA.whatsapp}?text=${encodeURIComponent(texto)}`;

  // ---------- Piezas de sistema ----------

  // Foto real o recuadro de color con la descripción de la foto que va ahí
  function foto(f, clase = "") {
    if (f.src) {
      return `<div class="foto ${clase}"><img src="${esc(f.src)}" alt="${esc(f.alt)}" loading="lazy"></div>`;
    }
    return `<div class="foto foto--${f.tono} ${clase}" role="img" aria-label="${esc(f.alt)}">
      <span class="foto__desc" aria-hidden="true">Foto · ${esc(f.alt)}</span></div>`;
  }

  // La línea de la cordillera vista desde Santiago, en un solo trazo. El punto más alto es El Plomo.
  const CORDILLERA =
    "0,92 40,90 78,86 110,88 150,80 182,82 214,72 240,75 270,64 296,68 322,56 344,60 368,46 386,50 404,36 420,40 436,24 452,30 470,20 486,28 506,22 528,34 552,30 578,42 604,38 632,48 660,42 690,52 718,48 748,58 778,54 808,62 840,58 872,66 904,62 936,70 968,68 1000,76 1034,74 1068,82 1104,80 1140,86 1200,90";
  const cordillera = (clase = "") =>
    `<svg class="cordillera ${clase}" viewBox="0 0 1200 100" preserveAspectRatio="none" aria-hidden="true" focusable="false"><polyline points="${CORDILLERA}"/></svg>`;

  // Timbre circular con la hora de la prenda
  const timbre = (hora) => `<span class="timbre" aria-label="Hora ${hora}">${hora}</span>`;

  // Etiqueta interior: 18 a 03, con la hora de la prenda marcada
  const HORAS = ["18", "19", "20", "21", "22", "23", "00", "01", "02", "03"];
  const etiquetaHoras = (hora) =>
    `<ol class="horas" aria-label="Etiqueta de horas, de 18 a 03. Su hora es ${hora}">
      ${HORAS.map((h) => `<li${h === hora ? ' class="horas__suya" aria-current="true"' : ""}>${h}</li>`).join("")}
    </ol>`;

  // ---------- Cabecera y pie (iguales en todas las páginas) ----------

  function cabecera() {
    const destino = $("[data-cabecera]");
    if (!destino) return;
    const cuenta = TIENDA.ventaAbierta
      ? `<button class="nav-btn" type="button" data-abrir-cuenta>Cuenta (<span data-num-cuenta>0</span>)</button>`
      : "";
    destino.outerHTML = `
      <div class="barra">
        <span class="barra__envios">Envíos a todo Chile · Pedidos por WhatsApp</span>
        <span>Próximo drop · ${esc(TIENDA.drop.texto)}</span>
      </div>
      <header class="cabecera">
        <div class="contenedor cabecera__fila">
          <button class="menu-btn" type="button" aria-label="Abrir menú" aria-expanded="false" aria-controls="nav"><span></span><span></span></button>
          <nav id="nav" class="nav" aria-label="Principal">
            <a href="${ancla("capsula")}">Cápsula 01</a>
            <a href="${ancla("semana")}">La semana</a>
            <a href="${ancla("cuaderno")}">Cuaderno</a>
            <a href="${ancla("club")}">Club</a>
            <a class="nav__movil" href="${ancla("la-mesa")}">La mesa</a>
          </nav>
          <a href="index.html" class="logo" aria-label="MORENS, inicio">MORENS</a>
          <div class="cabecera__der">
            <a class="nav-link" href="${ancla("la-mesa")}">La mesa</a>
            ${cuenta}
          </div>
        </div>
      </header>`;

    const menuBtn = $(".menu-btn");
    const nav = $("#nav");
    menuBtn.addEventListener("click", () => {
      const abierto = nav.classList.toggle("abierto");
      menuBtn.setAttribute("aria-expanded", abierto);
      menuBtn.setAttribute("aria-label", abierto ? "Cerrar menú" : "Abrir menú");
    });
    nav.addEventListener("click", (e) => {
      if (!e.target.closest("a")) return;
      nav.classList.remove("abierto");
      menuBtn.setAttribute("aria-expanded", "false");
    });
  }

  function pie() {
    const destino = $("[data-pie]");
    if (!destino) return;
    const ig = TIENDA.instagram
      ? `<a href="https://instagram.com/${esc(TIENDA.instagram)}" target="_blank" rel="noopener">Instagram</a>`
      : "";
    destino.outerHTML = `
      <footer class="pie">
        <div class="contenedor">
          ${cordillera("cordillera--pie")}
          <p class="pie__marca">MORENS</p>
          <div class="pie__fila">
            <span>Santiago de Chile</span>
            ${ig}
            <span>© ${new Date().getFullYear()}</span>
          </div>
        </div>
      </footer>`;
  }

  // ---------- La cuenta (solo si la venta está abierta) ----------

  const CLAVE = "morens-cuenta";
  let cuenta = [];

  function leerCuenta() {
    try {
      cuenta = (JSON.parse(localStorage.getItem(CLAVE)) || []).filter((i) => buscarProducto(i.id));
    } catch (e) {
      cuenta = [];
    }
  }

  function guardarCuenta() {
    try {
      localStorage.setItem(CLAVE, JSON.stringify(cuenta));
    } catch (e) {
      /* sin almacenamiento: la cuenta vive solo en esta visita */
    }
  }

  function agregarACuenta(id, color, talla) {
    const existente = cuenta.find((i) => i.id === id && i.color === color && i.talla === talla);
    if (existente) existente.cantidad += 1;
    else cuenta.push({ id, color, talla, cantidad: 1 });
    guardarCuenta();
    pintarCuenta();
    abrirCuenta();
  }

  const horaActual = () => new Date().toLocaleTimeString("es-CL", { hour: "2-digit", minute: "2-digit", hour12: false });
  const fechaActual = () => new Date().toLocaleDateString("es-CL", { day: "2-digit", month: "2-digit" });
  const totalCuenta = () => cuenta.reduce((s, i) => s + buscarProducto(i.id).precio * i.cantidad, 0);

  function montarCuenta() {
    if (!TIENDA.ventaAbierta) return;
    leerCuenta();
    document.body.insertAdjacentHTML(
      "beforeend",
      `<div class="velo" data-velo hidden></div>
      <aside class="cuenta" aria-label="La cuenta" aria-hidden="true" tabindex="-1">
        <div class="cuenta__cabecera">
          <h2>La cuenta</h2>
          <button class="cerrar" type="button" data-cerrar-cuenta aria-label="Cerrar la cuenta">×</button>
        </div>
        <div class="cuenta__cuerpo" data-cuenta-cuerpo></div>
        <div class="cuenta__pie">
          <button class="btn btn--linea btn--ancho" type="button" data-pedir>Pedir por WhatsApp</button>
          <p class="cuenta__nota">Envíos a todo Chile. Te respondemos esta noche.</p>
        </div>
      </aside>`
    );
    $("[data-cerrar-cuenta]").addEventListener("click", cerrarCuenta);
    $("[data-velo]").addEventListener("click", cerrarCuenta);
    document.addEventListener("keydown", (e) => e.key === "Escape" && cerrarCuenta());
    document.addEventListener("click", (e) => e.target.closest("[data-abrir-cuenta]") && abrirCuenta());

    $("[data-cuenta-cuerpo]").addEventListener("click", (e) => {
      const btn = e.target.closest("[data-cambiar]");
      if (!btn) return;
      const i = +btn.dataset.indice;
      cuenta[i].cantidad += +btn.dataset.cambiar;
      if (cuenta[i].cantidad <= 0) cuenta.splice(i, 1);
      guardarCuenta();
      pintarCuenta();
    });

    $("[data-pedir]").addEventListener("click", () => {
      if (!cuenta.length) return;
      const lineas = cuenta.map((i) => {
        const p = buscarProducto(i.id);
        return `${i.cantidad} × ${p.nombre} · ${i.color.toLowerCase()} · talla ${i.talla} · ${precio(p.precio * i.cantidad)}`;
      });
      const mensaje = `Hola MORENS. Este es mi pedido:\n\n${lineas.join("\n")}\n\nTotal ${precio(totalCuenta())}`;
      if (TIENDA.whatsapp) window.open(linkWhatsapp(mensaje), "_blank", "noopener");
      $("[data-cuenta-cuerpo]").insertAdjacentHTML("beforeend", '<p class="cuenta__listo" role="status">Listo. Te escribimos esta noche.</p>');
    });

    pintarCuenta();
  }

  function pintarCuenta() {
    if (!TIENDA.ventaAbierta) return;
    const piezas = cuenta.reduce((s, i) => s + i.cantidad, 0);
    $$("[data-num-cuenta]").forEach((el) => (el.textContent = piezas));
    $("[data-pedir]").disabled = cuenta.length === 0;

    $("[data-cuenta-cuerpo]").innerHTML = cuenta.length
      ? `<div class="boleta">
          <p class="boleta__marca">MORENS</p>
          <p class="boleta__sub">santiago de chile</p>
          <div class="boleta__fila boleta__fila--linea"><span>Mesa 01</span><span>${fechaActual()} · ${horaActual()}</span></div>
          <span class="sello-hora" aria-hidden="true">${horaActual()}</span>
          ${cuenta
            .map((item, i) => {
              const p = buscarProducto(item.id);
              return `<div class="boleta__item">
                <div class="boleta__fila"><span>${item.cantidad} × ${esc(p.nombre)}</span><span>${precio(p.precio * item.cantidad)}</span></div>
                <div class="boleta__fila boleta__fila--sub">
                  <span>${esc(item.color.toLowerCase())} · talla ${esc(item.talla === "Única" ? "única" : item.talla)}</span>
                  <span class="cantidad">
                    <button type="button" data-cambiar="-1" data-indice="${i}" aria-label="Quitar uno de ${esc(p.nombre)}">−</button>
                    <button type="button" data-cambiar="1" data-indice="${i}" aria-label="Agregar uno de ${esc(p.nombre)}">+</button>
                  </span>
                </div>
              </div>`;
            })
            .join("")}
          <div class="boleta__fila boleta__fila--linea"><span>Envío</span><span>lo vemos por chat</span></div>
          <div class="boleta__fila boleta__total"><span>Total</span><span>${precio(totalCuenta())}</span></div>
          <p class="boleta__gracias">gracias por venir</p>
        </div>
        ${cordillera("cordillera--cuenta")}`
      : '<p class="cuenta__vacia">Todavía no pides nada.</p>';
  }

  function abrirCuenta() {
    const panel = $(".cuenta");
    panel.classList.add("abierta");
    panel.setAttribute("aria-hidden", "false");
    $("[data-velo]").hidden = false;
    document.body.classList.add("sin-scroll");
    panel.focus();
  }

  function cerrarCuenta() {
    const panel = $(".cuenta");
    if (!panel || !panel.classList.contains("abierta")) return;
    panel.classList.remove("abierta");
    panel.setAttribute("aria-hidden", "true");
    $("[data-velo]").hidden = true;
    document.body.classList.remove("sin-scroll");
  }

  // ---------- Inicio ----------

  function tarjetaProducto(p) {
    return `<article class="producto">
      <a class="producto__link" href="producto.html?p=${p.id}">
        <div class="producto__img">${foto(p.fotos[0])}${timbre(p.hora)}</div>
        <div class="producto__fila">
          <h3>${esc(p.nombre)}</h3>
          <span class="mono">${precio(p.precio)}</span>
        </div>
        <p class="producto__sub">${esc(p.resumen)} · ${p.colores.map((c) => esc(c.nombre.toLowerCase())).join(", ")}</p>
      </a>
    </article>`;
  }

  function tarjetaNota(n, etiqueta) {
    return `<article class="nota-card">
      <a href="nota.html?n=${n.id}">
        ${foto(n.foto, "foto--card")}
        <p class="mono etiqueta">${esc(etiqueta || n.pilar)} · ${esc(n.sello)}</p>
        <h3>${esc(n.titulo)}</h3>
        <p>${esc(n.bajada)}</p>
      </a>
    </article>`;
  }

  function inicio() {
    // Portada
    $("[data-portada-fotos]").innerHTML =
      foto(PORTADA.fotos[0], "portada__principal") + foto(PORTADA.fotos[1], "portada__detalle") + foto(PORTADA.fotos[2], "portada__atardecer");
    $("[data-portada-texto]").innerHTML = `
      <div>
        <p class="mono etiqueta">${esc(PORTADA.capsula)}</p>
        <h1 class="portada__titulo">${esc(PORTADA.nombre)}</h1>
      </div>
      <div class="portada__accion">
        <p>${esc(PORTADA.bajada)}</p>
        <a class="btn" href="#capsula">Ver la cápsula</a>
      </div>`;
    $$("[data-cordillera]").forEach((el) => (el.outerHTML = cordillera(el.dataset.cordillera)));

    // 01 · La cápsula
    $("[data-capsula-estado]").textContent = TIENDA.ventaAbierta
      ? `${PRODUCTOS.length} piezas · series de 30`
      : TIENDA.drop.largo;
    $("[data-capsula]").innerHTML = PRODUCTOS.map(tarjetaProducto).join("");

    // 02 · La semana
    $("[data-semana]").innerHTML = SEMANA.map((s) => {
      const texto = s.nota ? `<a href="nota.html?n=${s.nota}">${esc(s.texto)}</a>` : esc(s.texto);
      return `<li><span class="mono">${esc(s.dia)} ${esc(s.hora)}</span><span>${texto}${s.lugar ? `<span class="agenda__lugar mono">${esc(s.lugar)}</span>` : ""}</span></li>`;
    }).join("");

    // 03 · Gusto adquirido
    $("[data-recomendaciones]").innerHTML = RECOMENDACIONES.map((r) => tarjetaNota(buscarNota(r.nota), r.etiqueta)).join("");
    $("[data-playlist]").innerHTML = `
      <div class="playlist__cabecera"><h3>${esc(PLAYLIST.titulo)}</h3><span class="mono">${esc(PLAYLIST.bajada)}</span></div>
      <ol>${PLAYLIST.temas
        .map((t, i) => `<li><span class="mono">${String(i + 1).padStart(2, "0")}</span><span lang="en">${esc(t.tema)}</span><span class="playlist__artista">${esc(t.artista)}</span></li>`)
        .join("")}</ol>`;

    // 04 · El cuaderno, con filtro por pilar
    const pilares = ["Todo", ...new Set(NOTAS.map((n) => n.pilar))];
    let filtro = "Todo";
    const pintarFiltros = () =>
      ($("[data-filtros]").innerHTML = pilares
        .map((p) => `<button type="button" aria-pressed="${p === filtro}" data-pilar="${esc(p)}">${esc(p)}</button>`)
        .join(""));
    const pintarNotas = () =>
      ($("[data-notas]").innerHTML = NOTAS.filter((n) => filtro === "Todo" || n.pilar === filtro)
        .map((n) => tarjetaNota(n))
        .join(""));
    $("[data-filtros]").addEventListener("click", (e) => {
      const btn = e.target.closest("[data-pilar]");
      if (!btn) return;
      filtro = btn.dataset.pilar;
      pintarFiltros();
      pintarNotas();
    });
    pintarFiltros();
    pintarNotas();

    // 05 · Club MORENS
    const quieroIr = TIENDA.whatsapp
      ? `<a class="btn btn--linea" href="${linkWhatsapp("Hola MORENS. Quiero ir al próximo encuentro del club.")}" target="_blank" rel="noopener">Quiero ir</a>`
      : `<p class="mono estado">${esc(CLUB.estado)}</p>`;
    $("[data-club]").innerHTML = `
      ${foto(CLUB.foto, "club__foto")}
      <div class="club__texto">
        <p class="frase">${esc(CLUB.frase)}</p>
        <ul class="agenda">${CLUB.encuentros
          .map((e) => `<li><span class="mono">${esc(e.fecha)}<br>${esc(e.hora)}</span><span>${esc(e.texto)}</span></li>`)
          .join("")}</ul>
        <p class="club__detalle">${esc(CLUB.detalle)}</p>
        ${quieroIr}
      </div>`;

    // 06 · Mujeres que hacen
    $("[data-anfitriona]").innerHTML = `
      ${foto(ANFITRIONA.foto, "anfitriona__foto")}
      <div class="anfitriona__texto">
        <h3>${esc(ANFITRIONA.titulo)}</h3>
        <p>${esc(ANFITRIONA.bajada)}</p>
        <dl>${ANFITRIONA.preguntas.map((q) => `<div><dt class="mono">${esc(q)}</dt><dd>—</dd></div>`).join("")}</dl>
        <p class="mono estado">${esc(ANFITRIONA.estado)}</p>
      </div>`;

    // La mesa
    const sumarme = TIENDA.whatsapp
      ? `<a class="btn btn--ancho" href="${linkWhatsapp("Hola MORENS. Quiero estar en La mesa.")}" target="_blank" rel="noopener">Sumarme</a>`
      : `<p class="mono estado">${esc(LA_MESA.abre)}.</p>`;
    $("[data-la-mesa]").innerHTML = `
      <div class="la-mesa__texto">
        <h2>La mesa</h2>
        <p>${esc(LA_MESA.texto)}</p>
        ${sumarme}
      </div>
      <div class="boleta boleta--mesa" aria-label="Boleta de La mesa">
        <p class="boleta__marca">MORENS</p>
        <p class="boleta__sub">santiago de chile</p>
        <div class="boleta__fila boleta__fila--linea"><span>La mesa</span><span>lista de espera</span></div>
        <span class="sello-hora" aria-hidden="true">18:30</span>
        <div class="boleta__fila"><span>Abre</span><span>${esc(LA_MESA.abre.replace(/^Abre /, "").toLowerCase())}</span></div>
        <div class="boleta__fila"><span>Acceso anticipado</span><span>jue 22 abr · 18:30</span></div>
        <div class="boleta__fila"><span>La página</span><span>19:00</span></div>
        <p class="boleta__gracias">gracias por venir</p>
      </div>`;
  }

  // ---------- Ficha de producto ----------

  function producto() {
    const p = buscarProducto(new URLSearchParams(location.search).get("p"));
    const destino = $("[data-ficha]");
    if (!p) {
      destino.innerHTML = `<p class="vacio">Esta pieza no existe. <a href="index.html#capsula">Ver la cápsula</a></p>`;
      return;
    }
    document.title = `${p.nombre} · MORENS`;
    let color = p.colores[0].nombre;
    let talla = p.tallas.length === 1 ? p.tallas[0] : null;
    const compa = p.seLlevaCon && buscarProducto(p.seLlevaCon);
    // Arriba la foto de campaña (la segunda), abajo las de producto
    const principal = p.fotos[1] || p.fotos[0];
    const resto = p.fotos.filter((f) => f !== principal);

    const acciones = TIENDA.ventaAbierta
      ? p.agotado
        ? `<button class="btn btn--ancho" type="button" disabled>Se fue. La próxima ronda viene pronto.</button>`
        : `<button class="btn btn--ancho" type="button" data-agregar>Agregar a la cuenta</button>`
      : `<button class="btn btn--ancho" type="button" disabled>${esc(TIENDA.drop.largo)}</button>
         <p class="ficha__aviso">${esc(TIENDA.drop.lista)}. <a href="index.html#la-mesa">Qué es La mesa</a></p>`;
    const preguntar = TIENDA.whatsapp
      ? `<a class="btn btn--linea btn--ancho" href="${linkWhatsapp(`Hola MORENS. Tengo una pregunta sobre el ${p.nombre}.`)}" target="_blank" rel="noopener">Preguntar por WhatsApp</a>`
      : "";

    destino.innerHTML = `
      <p class="mono migas"><a href="index.html#capsula">Cápsula 01 · Hora Ámbar</a> / ${esc(p.nombre)}</p>
      <div class="ficha">
        <div class="ficha__fotos">
          ${foto(principal, "ficha__principal")}
          <div class="ficha__dos">${resto.map((f) => foto(f)).join("")}</div>
        </div>
        <div class="ficha__info">
          <h1>${esc(p.nombre)}</h1>
          <p class="mono ficha__precio">${precio(p.precio)}</p>
          <p class="ficha__desc">${esc(p.descripcion)}</p>

          <fieldset class="opciones">
            <legend class="mono">Color · <span data-color-nombre>${esc(color.toLowerCase())}</span></legend>
            <div class="colores">${p.colores
              .map((c, i) => `<button type="button" class="color" style="--c:${c.hex}" aria-label="${esc(c.nombre)}" aria-pressed="${i === 0}" data-color="${esc(c.nombre)}"></button>`)
              .join("")}</div>
          </fieldset>

          <fieldset class="opciones">
            <legend class="mono">Talla</legend>
            <div class="tallas">${p.tallas
              .map((t) => `<button type="button" class="talla" aria-pressed="${t === talla}" data-talla="${esc(t)}">${esc(t)}</button>`)
              .join("")}</div>
            <p class="ficha__error" data-error-talla role="alert" hidden>Elige una talla.</p>
          </fieldset>

          <div class="ficha__acciones">${acciones}${preguntar}</div>

          <div class="ficha__hora">
            <p class="mono">Su hora</p>
            ${etiquetaHoras(p.hora)}
            <p class="ficha__nota">Cada pieza MORENS tiene su hora, marcada en la etiqueta interior.</p>
          </div>

          <dl class="ficha__datos">
            <div><dt>Composición</dt><dd>${esc(p.composicion)}</dd></div>
            <div><dt>Cuidado</dt><dd>${esc(p.cuidado)}</dd></div>
            <div><dt>Hecho en</dt><dd>Santiago, serie de ${p.serie}</dd></div>
          </dl>

          ${
            compa
              ? `<a class="se-lleva" href="producto.html?p=${compa.id}">
                  <span class="se-lleva__muestra" style="--c:${compa.colores[0].hex}" aria-hidden="true"></span>
                  <span><strong>Se lleva con ${esc(compa.nombre)}</strong><br>${esc(compa.resumen)} · <span class="mono">${precio(compa.precio)}</span></span>
                </a>`
              : ""
          }
        </div>
      </div>`;

    destino.addEventListener("click", (e) => {
      const c = e.target.closest("[data-color]");
      const t = e.target.closest("[data-talla]");
      if (c) {
        color = c.dataset.color;
        $$("[data-color]", destino).forEach((b) => b.setAttribute("aria-pressed", b === c));
        $("[data-color-nombre]").textContent = color.toLowerCase();
      }
      if (t) {
        talla = t.dataset.talla;
        $$("[data-talla]", destino).forEach((b) => b.setAttribute("aria-pressed", b === t));
        $("[data-error-talla]").hidden = true;
      }
      if (e.target.closest("[data-agregar]")) {
        if (!talla) {
          $("[data-error-talla]").hidden = false;
          return;
        }
        agregarACuenta(p.id, color, talla);
      }
    });
  }

  // ---------- Nota ----------

  function nota() {
    const n = buscarNota(new URLSearchParams(location.search).get("n"));
    const destino = $("[data-nota]");
    if (!n) {
      destino.innerHTML = `<p class="vacio">Esta nota no existe. <a href="index.html#cuaderno">Ver el cuaderno</a></p>`;
      return;
    }
    document.title = `${n.titulo} · MORENS`;
    const otras = NOTAS.filter((o) => o.id !== n.id && o.pilar === n.pilar)
      .concat(NOTAS.filter((o) => o.id !== n.id && o.pilar !== n.pilar))
      .slice(0, 3);
    destino.innerHTML = `
      <p class="mono migas"><a href="index.html#cuaderno">Cuaderno</a> / ${esc(n.pilar)}</p>
      <article class="articulo">
        <header>
          <p class="mono etiqueta">${esc(n.pilar)} · ${esc(n.sello)}</p>
          <h1>${esc(n.titulo)}</h1>
          <p class="articulo__bajada">${esc(n.bajada)}</p>
        </header>
        ${foto(n.foto, "articulo__foto")}
        <div class="articulo__cuerpo">${n.cuerpo.map((p) => `<p>${esc(p)}</p>`).join("")}</div>
      </article>
      <section class="seccion seccion--corta" aria-labelledby="otras">
        <div class="seccion__cabecera"><h2 id="otras">Seguir leyendo</h2></div>
        <div class="grid-3">${otras.map((o) => tarjetaNota(o)).join("")}</div>
      </section>`;
  }

  cabecera();
  pie();
  if (pagina === "inicio") inicio();
  if (pagina === "producto") producto();
  if (pagina === "nota") nota();
  montarCuenta();
})();
