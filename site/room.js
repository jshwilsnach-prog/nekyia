/* Room helpers. Not the law — just the lamp fittings.
   Classic script, no build, loads from file://. */
(function (global) {
  "use strict";

  /** Size a canvas to its CSS box at device resolution. Returns {w,h} in CSS px. */
  function fit(canvas, aspect) {
    var parent = canvas.parentElement || document.body;
    var cssW = Math.max(240, parent.clientWidth);
    var cssH = aspect ? Math.round(cssW / aspect) : Math.max(240, parent.clientHeight);
    var dpr = Math.min(global.devicePixelRatio || 1, 2);
    canvas.style.width = cssW + "px";
    canvas.style.height = cssH + "px";
    canvas.width = Math.round(cssW * dpr);
    canvas.height = Math.round(cssH * dpr);
    var ctx = canvas.getContext("2d");
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    return { w: cssW, h: cssH, ctx: ctx };
  }

  /** Re-fit on resize, debounced to an animation frame. */
  function onResize(fn) {
    var queued = false;
    global.addEventListener("resize", function () {
      if (queued) return;
      queued = true;
      global.requestAnimationFrame(function () {
        queued = false;
        fn();
      });
    });
  }

  /** Read a CSS custom property off :root. */
  function token(name, fallback) {
    var v = getComputedStyle(document.documentElement)
      .getPropertyValue(name)
      .trim();
    return v || fallback;
  }

  /** Pointer position in CSS pixels relative to an element. */
  function pointer(el, ev) {
    var r = el.getBoundingClientRect();
    var p = ev.touches && ev.touches[0] ? ev.touches[0] : ev;
    return { x: p.clientX - r.left, y: p.clientY - r.top };
  }

  /** The lintel every room wears. Renders into #lintel. */
  function lintel(title) {
    var host = document.getElementById("lintel");
    if (!host) return;
    host.className = "lintel";
    host.innerHTML =
      '<a class="lintel__back" href="../../index.html">&larr; rooms</a>' +
      '<p class="lintel__title"></p>' +
      '<span class="lintel__spacer"></span>' +
      '<a class="lintel__back" href="https://nekyia.me">the door</a>';
    host.querySelector(".lintel__title").textContent = title;
  }

  /** The foot every room wears. Renders into #foot. */
  function foot(extra) {
    var host = document.getElementById("foot");
    if (!host) return;
    host.className = "foot";
    var law = (global.NEKYIA && global.NEKYIA.LAW) || "";
    host.textContent = (extra ? extra + "  ·  " : "") + law;
  }

  global.ROOM = { fit: fit, onResize: onResize, token: token, pointer: pointer, lintel: lintel, foot: foot };
})(typeof globalThis !== "undefined" ? globalThis : this);
