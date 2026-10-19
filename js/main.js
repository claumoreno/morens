(function () {
  "use strict";

  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const CLAVE_BOLSA = "morens-bolsa";

  const formatoPrecio = new Intl.NumberFormat(TIENDA.locale, {
    style: "currency",
    currency: TIENDA.moneda,
    maximumFractionDigits: 0,
  });
  const precio = (n) => formatoPrecio.format(n);
  const buscarProducto = (id) => PRODUCTOS.find((p) => p.id === id);

  // ---------- Bolsa (guardada en el navegador) ----------
  let bolsa = [];
  try {
    bolsa = JSON.parse(localStorage.getItem(CLAVE_BOLSA)) || [];
    bolsa = bolsa.filter((item) => buscarProducto(item.id));
  } catch (e) {
    bolsa = [];
  }

  function guardarBolsa() {
    try {
      localStorage.setItem(CLAVE_BOLSA, JSON.stringify(bolsa));
    } catch (e) {
      /* sin almacenamiento: la bolsa vive solo en esta visita */
    }
  }

  function agregar(id, talla) {
    const existente = bolsa.find((i) => i.id === id && i.talla === talla);
    if (existente) existente.cantidad += 1;
    else bolsa.push({ id, talla, cantidad: 1 });
    guardarBolsa();
    pintarBolsa();
    avisar(`${buscarProducto(id).nombre} (talla ${talla}) agregado a tu bolsa`);
  }

  function cambiarCantidad(indice, delta) {
    bolsa[indice].cantidad += delta;
    if (bolsa[indice].cantidad <= 0) bolsa.splice(indice, 1);
    guardarBolsa();
    pintarBolsa();
  }

  // ---------- Imagen o recuadro de color ----------
  function visual(p) {
    if (p.imagen) {
      return `<img src="${p.imagen}" alt="${p.nombre} color ${p.color}" loading="lazy">`;
    }
    return `<div class="placeholder" style="--tono:${p.tono}"><span>${p.categoria}</span></div>`;
  }

  // ---------- Catálogo ----------
  const categorias = ["Todo", ...new Set(PRODUCTOS.map((p) => p.categoria))];
  let filtro = "Todo";

  function pintarFiltros() {
    $("[data-filtros]").innerHTML = categorias
      .map(
        (c) =>
          `<button role="tab" aria-selected="${c === filtro}" data-categoria="${c}">${c}</button>`
      )
      .join("");
  }

  function pintarProductos() {
    const lista = PRODUCTOS.filter((p) => filtro === "Todo" || p.categoria === filtro);
    $("[data-productos]").innerHTML = lista
      .map(
        (p, i) => `
        <article class="producto" data-id="${p.id}">
          <div class="producto__img">
            ${p.nuevo ? '<span class="etiqueta">Nuevo</span>' : ""}
            ${visual(p)}
          </div>
          <div class="producto__info">
            <span class="producto__num">${String(i + 1).padStart(2, "0")}</span>
            <h3>${p.nombre}</h3>
            <p class="producto__precio">${precio(p.precio)}</p>
            <p class="producto__color">${p.color}</p>
          </div>
          <div class="producto__compra">
            <label class="sr-only" for="talla-${p.id}">Talla</label>
            <select id="talla-${p.id}" data-talla>
              ${p.tallas.map((t) => `<option value="${t}">${t}</option>`).join("")}
            </select>
            <button class="btn btn--oscuro btn--chico" data-agregar>Agregar</button>
          </div>
        </article>`
      )
      .join("");
  }

  $("[data-filtros]").addEventListener("click", (e) => {
    const btn = e.target.closest("[data-categoria]");
    if (!btn) return;
    filtro = btn.dataset.categoria;
    pintarFiltros();
    pintarProductos();
  });

  $("[data-productos]").addEventListener("click", (e) => {
    if (!e.target.closest("[data-agregar]")) return;
    const tarjeta = e.target.closest(".producto");
    agregar(tarjeta.dataset.id, $("[data-talla]", tarjeta).value);
  });

  // ---------- Panel de la bolsa ----------
  const panel = $(".bolsa");
  const overlay = $("[data-overlay]");

  function abrirBolsa() {
    $("[data-aviso]").classList.remove("visible");
    panel.classList.add("abierta");
    panel.setAttribute("aria-hidden", "false");
    overlay.hidden = false;
    document.body.classList.add("sin-scroll");
  }

  function cerrarBolsa() {
    panel.classList.remove("abierta");
    panel.setAttribute("aria-hidden", "true");
    overlay.hidden = true;
    document.body.classList.remove("sin-scroll");
  }

  function pintarBolsa() {
    const total = bolsa.reduce((s, i) => s + buscarProducto(i.id).precio * i.cantidad, 0);
    const piezas = bolsa.reduce((s, i) => s + i.cantidad, 0);

    document.querySelectorAll("[data-num-bolsa]").forEach((el) => (el.textContent = piezas));
    $("[data-bolsa-total]").textContent = precio(total);
    $("[data-enviar-pedido]").disabled = bolsa.length === 0;

    $("[data-bolsa-items]").innerHTML = bolsa.length
      ? bolsa
          .map((item, i) => {
            const p = buscarProducto(item.id);
            return `
            <div class="item">
              <div class="item__img">${visual(p)}</div>
              <div class="item__info">
                <strong>${p.nombre}</strong>
                <span>${p.color} · Talla ${item.talla}</span>
                <div class="cantidad">
                  <button aria-label="Quitar uno" data-menos="${i}">−</button>
                  <span>${item.cantidad}</span>
                  <button aria-label="Agregar uno" data-mas="${i}">+</button>
                </div>
              </div>
              <span class="item__precio">${precio(p.precio * item.cantidad)}</span>
            </div>`;
          })
          .join("")
      : '<p class="bolsa__vacia">Tu bolsa está vacía.</p>';
  }

  $("[data-bolsa-items]").addEventListener("click", (e) => {
    const menos = e.target.closest("[data-menos]");
    const mas = e.target.closest("[data-mas]");
    if (menos) cambiarCantidad(+menos.dataset.menos, -1);
    if (mas) cambiarCantidad(+mas.dataset.mas, 1);
  });

  $("[data-enviar-pedido]").addEventListener("click", () => {
    const lineas = bolsa.map((item) => {
      const p = buscarProducto(item.id);
      return `• ${item.cantidad} × ${p.nombre} (${p.color}, talla ${item.talla}) — ${precio(p.precio * item.cantidad)}`;
    });
    const total = bolsa.reduce((s, i) => s + buscarProducto(i.id).precio * i.cantidad, 0);
    const mensaje = `¡Hola ${TIENDA.nombre}! Quiero hacer este pedido:\n\n${lineas.join("\n")}\n\nTotal: ${precio(total)}`;
    window.open(`https://wa.me/${TIENDA.whatsapp}?text=${encodeURIComponent(mensaje)}`, "_blank");
  });

  $(".bolsa-btn").addEventListener("click", abrirBolsa);
  $("[data-cerrar-bolsa]").addEventListener("click", cerrarBolsa);
  overlay.addEventListener("click", cerrarBolsa);
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") cerrarBolsa();
  });

  // ---------- Menú móvil ----------
  const menuBtn = $(".menu-btn");
  const nav = $("#nav");
  menuBtn.addEventListener("click", () => {
    const abierto = nav.classList.toggle("abierto");
    menuBtn.setAttribute("aria-expanded", abierto);
  });
  nav.addEventListener("click", (e) => {
    if (e.target.closest("a")) {
      nav.classList.remove("abierto");
      menuBtn.setAttribute("aria-expanded", "false");
    }
  });

  // ---------- Aviso flotante ----------
  let temporizador;
  function avisar(texto) {
    const aviso = $("[data-aviso]");
    aviso.textContent = texto;
    aviso.classList.add("visible");
    clearTimeout(temporizador);
    temporizador = setTimeout(() => aviso.classList.remove("visible"), 2400);
  }

  // ---------- Enlaces de contacto ----------
  $("[data-link-whatsapp]").href = `https://wa.me/${TIENDA.whatsapp}`;
  $("[data-link-instagram]").href = `https://instagram.com/${TIENDA.instagram}`;
  $("[data-link-correo]").href = `mailto:${TIENDA.correo}`;
  $("[data-anio]").textContent = new Date().getFullYear();

  pintarFiltros();
  pintarProductos();
  pintarBolsa();
})();
