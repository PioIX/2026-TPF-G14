(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/home/page.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HomePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Card.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$home$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/app/home/page.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function HomePage() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(42);
    if ($[0] !== "04483fceb948214a1951bce59013212ee71a2b6130a43ab4f5fcccfb654af37d") {
        for(let $i = 0; $i < 42; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "04483fceb948214a1951bce59013212ee71a2b6130a43ab4f5fcccfb654af37d";
    }
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    let t0;
    if ($[1] !== searchParams) {
        t0 = searchParams.get("id");
        $[1] = searchParams;
        $[2] = t0;
    } else {
        t0 = $[2];
    }
    const id = t0;
    let t1;
    if ($[3] !== searchParams) {
        t1 = searchParams.get("nombre");
        $[3] = searchParams;
        $[4] = t1;
    } else {
        t1 = $[4];
    }
    const nombre = t1;
    let t2;
    if ($[5] !== searchParams) {
        t2 = searchParams.get("es_admin");
        $[5] = searchParams;
        $[6] = t2;
    } else {
        t2 = $[6];
    }
    const es_admin = t2;
    const params = `id=${id}&nombre=${nombre}&es_admin=${es_admin}`;
    let t3;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = [];
        $[7] = t3;
    } else {
        t3 = $[7];
    }
    const [deportes, setDeportes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t3);
    let t4;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = [];
        $[8] = t4;
    } else {
        t4 = $[8];
    }
    const [equipos, setEquipos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t4);
    let t5;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = [];
        $[9] = t5;
    } else {
        t5 = $[9];
    }
    const [jugadores, setJugadores] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t5);
    let t6;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = [];
        $[10] = t6;
    } else {
        t6 = $[10];
    }
    const [competencias, setCompetencias] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t6);
    let t7;
    let t8;
    if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = ({
            "HomePage[useEffect()]": ()=>{
                fetch("http://localhost:4000/deportes").then(_HomePageUseEffectAnonymous).then({
                    "HomePage[useEffect() > (anonymous)()]": (data)=>setDeportes(data)
                }["HomePage[useEffect() > (anonymous)()]"]);
                fetch("http://localhost:4000/equipos").then(_HomePageUseEffectAnonymous2).then({
                    "HomePage[useEffect() > (anonymous)()]": (data_0)=>setEquipos(data_0)
                }["HomePage[useEffect() > (anonymous)()]"]);
                fetch("http://localhost:4000/jugadores").then(_HomePageUseEffectAnonymous3).then({
                    "HomePage[useEffect() > (anonymous)()]": (data_1)=>setJugadores(data_1)
                }["HomePage[useEffect() > (anonymous)()]"]);
                fetch("http://localhost:4000/competencias").then(_HomePageUseEffectAnonymous4).then({
                    "HomePage[useEffect() > (anonymous)()]": (data_2)=>setCompetencias(data_2)
                }["HomePage[useEffect() > (anonymous)()]"]);
            }
        })["HomePage[useEffect()]"];
        t8 = [];
        $[11] = t7;
        $[12] = t8;
    } else {
        t7 = $[11];
        t8 = $[12];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t7, t8);
    let t9;
    if ($[13] !== deportes.length) {
        t9 = {
            id: 1,
            titulo: "Deportes",
            cantidad: deportes.length,
            ruta: "/home/deportes"
        };
        $[13] = deportes.length;
        $[14] = t9;
    } else {
        t9 = $[14];
    }
    let t10;
    if ($[15] !== equipos.length) {
        t10 = {
            id: 2,
            titulo: "Equipos",
            cantidad: equipos.length,
            ruta: "/home/equipos"
        };
        $[15] = equipos.length;
        $[16] = t10;
    } else {
        t10 = $[16];
    }
    let t11;
    if ($[17] !== jugadores.length) {
        t11 = {
            id: 3,
            titulo: "Jugadores",
            cantidad: jugadores.length,
            ruta: "/home/jugadores"
        };
        $[17] = jugadores.length;
        $[18] = t11;
    } else {
        t11 = $[18];
    }
    let t12;
    if ($[19] !== competencias.length) {
        t12 = {
            id: 4,
            titulo: "Competencias y eventos",
            cantidad: competencias.length,
            ruta: "/home/competencias"
        };
        $[19] = competencias.length;
        $[20] = t12;
    } else {
        t12 = $[20];
    }
    let t13;
    if ($[21] !== t10 || $[22] !== t11 || $[23] !== t12 || $[24] !== t9) {
        t13 = [
            t9,
            t10,
            t11,
            t12
        ];
        $[21] = t10;
        $[22] = t11;
        $[23] = t12;
        $[24] = t9;
        $[25] = t13;
    } else {
        t13 = $[25];
    }
    const accesos = t13;
    let t14;
    if ($[26] !== params || $[27] !== router) {
        t14 = ({
            "HomePage[irASeccion]": (ruta)=>{
                router.push(`${ruta}?${params}`);
            }
        })["HomePage[irASeccion]"];
        $[26] = params;
        $[27] = router;
        $[28] = t14;
    } else {
        t14 = $[28];
    }
    const irASeccion = t14;
    let t15;
    if ($[29] !== nombre) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$home$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].etiqueta,
            children: [
                "PIOZONE / HOLA, ",
                nombre
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/home/page.js",
            lineNumber: 185,
            columnNumber: 11
        }, this);
        $[29] = nombre;
        $[30] = t15;
    } else {
        t15 = $[30];
    }
    let t16;
    let t17;
    if ($[31] === Symbol.for("react.memo_cache_sentinel")) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$home$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].titulo,
            children: "Todo el deporte, en un solo lugar"
        }, void 0, false, {
            fileName: "[project]/src/app/home/page.js",
            lineNumber: 194,
            columnNumber: 11
        }, this);
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$home$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].descripcion,
            children: "Explorá deportes, equipos, jugadores y competencias en una única aplicación."
        }, void 0, false, {
            fileName: "[project]/src/app/home/page.js",
            lineNumber: 195,
            columnNumber: 11
        }, this);
        $[31] = t16;
        $[32] = t17;
    } else {
        t16 = $[31];
        t17 = $[32];
    }
    let t18;
    let t19;
    if ($[33] === Symbol.for("react.memo_cache_sentinel")) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$home$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].explorar,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$home$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].subtitulo,
                    children: "¿Qué querés explorar?"
                }, void 0, false, {
                    fileName: "[project]/src/app/home/page.js",
                    lineNumber: 205,
                    columnNumber: 44
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$home$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].texto,
                    children: "Elegí una categoría o utilizá el buscador del encabezado."
                }, void 0, false, {
                    fileName: "[project]/src/app/home/page.js",
                    lineNumber: 205,
                    columnNumber: 103
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/home/page.js",
            lineNumber: 205,
            columnNumber: 11
        }, this);
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$home$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].accesosTitulo,
            children: "Accesos rápidos"
        }, void 0, false, {
            fileName: "[project]/src/app/home/page.js",
            lineNumber: 206,
            columnNumber: 11
        }, this);
        $[33] = t18;
        $[34] = t19;
    } else {
        t18 = $[33];
        t19 = $[34];
    }
    let t20;
    if ($[35] !== accesos || $[36] !== irASeccion) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$home$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].accesos,
            children: accesos.map({
                "HomePage[accesos.map()]": (acceso)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        titulo: acceso.titulo,
                        cantidad: acceso.cantidad,
                        onClick: {
                            "HomePage[accesos.map() > <Card>.onClick]": ()=>irASeccion(acceso.ruta)
                        }["HomePage[accesos.map() > <Card>.onClick]"]
                    }, acceso.id, false, {
                        fileName: "[project]/src/app/home/page.js",
                        lineNumber: 216,
                        columnNumber: 46
                    }, this)
            }["HomePage[accesos.map()]"])
        }, void 0, false, {
            fileName: "[project]/src/app/home/page.js",
            lineNumber: 215,
            columnNumber: 11
        }, this);
        $[35] = accesos;
        $[36] = irASeccion;
        $[37] = t20;
    } else {
        t20 = $[37];
    }
    let t21;
    if ($[38] === Symbol.for("react.memo_cache_sentinel")) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$home$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].guia,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$home$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].guiaTitulo,
                    children: "Guía rápida"
                }, void 0, false, {
                    fileName: "[project]/src/app/home/page.js",
                    lineNumber: 228,
                    columnNumber: 40
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$home$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].guiaTexto,
                    children: "Usá la navegación o las tarjetas para abrir secciones y detalles. Buscá desde arriba y seguí las relaciones entre equipos, jugadores y competencias."
                }, void 0, false, {
                    fileName: "[project]/src/app/home/page.js",
                    lineNumber: 228,
                    columnNumber: 90
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/home/page.js",
            lineNumber: 228,
            columnNumber: 11
        }, this);
        $[38] = t21;
    } else {
        t21 = $[38];
    }
    let t22;
    if ($[39] !== t15 || $[40] !== t20) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$home$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].contenedor,
            children: [
                t15,
                t16,
                t17,
                t18,
                t19,
                t20,
                t21
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/home/page.js",
            lineNumber: 235,
            columnNumber: 11
        }, this);
        $[39] = t15;
        $[40] = t20;
        $[41] = t22;
    } else {
        t22 = $[41];
    }
    return t22;
}
_s(HomePage, "OXeVxnMXM+CuRA8J1ndcymcQ7UI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"]
    ];
});
_c = HomePage;
function _HomePageUseEffectAnonymous4(response_2) {
    return response_2.json();
}
function _HomePageUseEffectAnonymous3(response_1) {
    return response_1.json();
}
function _HomePageUseEffectAnonymous2(response_0) {
    return response_0.json();
}
function _HomePageUseEffectAnonymous(response) {
    return response.json();
}
var _c;
__turbopack_context__.k.register(_c, "HomePage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/home/page.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "accesos": "page-module__0HUJcG__accesos",
  "accesosTitulo": "page-module__0HUJcG__accesosTitulo",
  "contenedor": "page-module__0HUJcG__contenedor",
  "descripcion": "page-module__0HUJcG__descripcion",
  "etiqueta": "page-module__0HUJcG__etiqueta",
  "explorar": "page-module__0HUJcG__explorar",
  "guia": "page-module__0HUJcG__guia",
  "guiaTexto": "page-module__0HUJcG__guiaTexto",
  "guiaTitulo": "page-module__0HUJcG__guiaTitulo",
  "subtitulo": "page-module__0HUJcG__subtitulo",
  "texto": "page-module__0HUJcG__texto",
  "titulo": "page-module__0HUJcG__titulo",
});
}),
"[project]/src/components/Card.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Card
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Card$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/Card.module.css [app-client] (css module)");
"use client";
;
;
;
function Card(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(12);
    if ($[0] !== "b41ea2916af4feba3c4e2ecfa4e13969bea199593a97e754576152a2f86e603d") {
        for(let $i = 0; $i < 12; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "b41ea2916af4feba3c4e2ecfa4e13969bea199593a97e754576152a2f86e603d";
    }
    const { titulo, cantidad, onClick } = t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Card$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].etiqueta,
            children: "EXPLORAR"
        }, void 0, false, {
            fileName: "[project]/src/components/Card.js",
            lineNumber: 20,
            columnNumber: 10
        }, this);
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    let t2;
    if ($[2] !== titulo) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Card$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].titulo,
            children: titulo
        }, void 0, false, {
            fileName: "[project]/src/components/Card.js",
            lineNumber: 27,
            columnNumber: 10
        }, this);
        $[2] = titulo;
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    let t3;
    if ($[4] !== cantidad) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Card$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cantidad,
            children: [
                cantidad,
                " registros"
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Card.js",
            lineNumber: 35,
            columnNumber: 10
        }, this);
        $[4] = cantidad;
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    let t4;
    if ($[6] !== onClick) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Card$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].abrir,
            onClick: onClick,
            children: "Abrir sección →"
        }, void 0, false, {
            fileName: "[project]/src/components/Card.js",
            lineNumber: 43,
            columnNumber: 10
        }, this);
        $[6] = onClick;
        $[7] = t4;
    } else {
        t4 = $[7];
    }
    let t5;
    if ($[8] !== t2 || $[9] !== t3 || $[10] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Card$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].card,
            children: [
                t1,
                t2,
                t3,
                t4
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Card.js",
            lineNumber: 51,
            columnNumber: 10
        }, this);
        $[8] = t2;
        $[9] = t3;
        $[10] = t4;
        $[11] = t5;
    } else {
        t5 = $[11];
    }
    return t5;
}
_c = Card;
var _c;
__turbopack_context__.k.register(_c, "Card");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Card.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "abrir": "Card-module__r9_ZKW__abrir",
  "cantidad": "Card-module__r9_ZKW__cantidad",
  "card": "Card-module__r9_ZKW__card",
  "etiqueta": "Card-module__r9_ZKW__etiqueta",
  "titulo": "Card-module__r9_ZKW__titulo",
});
}),
]);

//# sourceMappingURL=src_0qaeuolp9f50r._.js.map