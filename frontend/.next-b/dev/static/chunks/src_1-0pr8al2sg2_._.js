(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/home/deportes/page.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DeportesPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Input$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Input.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Button.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CardDeporte$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/CardDeporte.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$home$2f$deportes$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/app/home/deportes/page.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
function DeportesPage() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(64);
    if ($[0] !== "4de31bb805de55d91676994bb0ba704d829df6fa3870f997d5150bd25f83aad0") {
        for(let $i = 0; $i < 64; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "4de31bb805de55d91676994bb0ba704d829df6fa3870f997d5150bd25f83aad0";
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
    const [busqueda, setBusqueda] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [orden, setOrden] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("az");
    let t5;
    let t6;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = ({
            "DeportesPage[useEffect()]": ()=>{
                fetch("http://localhost:4000/deportes").then(_DeportesPageUseEffectAnonymous).then({
                    "DeportesPage[useEffect() > (anonymous)()]": (data)=>setDeportes(data)
                }["DeportesPage[useEffect() > (anonymous)()]"]);
                fetch("http://localhost:4000/equipos").then(_DeportesPageUseEffectAnonymous2).then({
                    "DeportesPage[useEffect() > (anonymous)()]": (data_0)=>setEquipos(data_0)
                }["DeportesPage[useEffect() > (anonymous)()]"]);
            }
        })["DeportesPage[useEffect()]"];
        t6 = [];
        $[9] = t5;
        $[10] = t6;
    } else {
        t5 = $[9];
        t6 = $[10];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t5, t6);
    let t7;
    if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = ({
            "DeportesPage[onChangeBusqueda]": (event)=>{
                setBusqueda(event.target.value);
            }
        })["DeportesPage[onChangeBusqueda]"];
        $[11] = t7;
    } else {
        t7 = $[11];
    }
    const onChangeBusqueda = t7;
    let t8;
    if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = ({
            "DeportesPage[onChangeOrden]": (event_0)=>{
                setOrden(event_0.target.value);
            }
        })["DeportesPage[onChangeOrden]"];
        $[12] = t8;
    } else {
        t8 = $[12];
    }
    const onChangeOrden = t8;
    let t9;
    if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = ({
            "DeportesPage[limpiarFiltros]": ()=>{
                setBusqueda("");
                setOrden("az");
            }
        })["DeportesPage[limpiarFiltros]"];
        $[13] = t9;
    } else {
        t9 = $[13];
    }
    const limpiarFiltros = t9;
    let t10;
    if ($[14] !== equipos) {
        t10 = ({
            "DeportesPage[contarEquipos]": (idDeporte)=>equipos.filter({
                    "DeportesPage[contarEquipos > equipos.filter()]": (equipo)=>equipo.id_deporte === idDeporte
                }["DeportesPage[contarEquipos > equipos.filter()]"]).length
        })["DeportesPage[contarEquipos]"];
        $[14] = equipos;
        $[15] = t10;
    } else {
        t10 = $[15];
    }
    const contarEquipos = t10;
    let t11;
    if ($[16] !== params || $[17] !== router) {
        t11 = ({
            "DeportesPage[verDetalle]": (idDeporte_0)=>{
                router.push(`/home/deportes/${idDeporte_0}?${params}`);
            }
        })["DeportesPage[verDetalle]"];
        $[16] = params;
        $[17] = router;
        $[18] = t11;
    } else {
        t11 = $[18];
    }
    const verDetalle = t11;
    let t12;
    let t13;
    let t14;
    let t15;
    let t16;
    let t17;
    let t18;
    if ($[19] !== busqueda || $[20] !== contarEquipos || $[21] !== deportes || $[22] !== orden || $[23] !== verDetalle) {
        let t19;
        if ($[31] !== busqueda) {
            t19 = ({
                "DeportesPage[deportes.filter()]": (deporte)=>deporte.nombre.toLowerCase().includes(busqueda.toLowerCase())
            })["DeportesPage[deportes.filter()]"];
            $[31] = busqueda;
            $[32] = t19;
        } else {
            t19 = $[32];
        }
        const deportesFiltrados = deportes.filter(t19);
        let t20;
        if ($[33] !== contarEquipos || $[34] !== orden) {
            t20 = ({
                "DeportesPage[(anonymous)()]": (a, b)=>{
                    if (orden === "az") {
                        return a.nombre.localeCompare(b.nombre);
                    }
                    if (orden === "za") {
                        return b.nombre.localeCompare(a.nombre);
                    }
                    return contarEquipos(b.id_deporte) - contarEquipos(a.id_deporte);
                }
            })["DeportesPage[(anonymous)()]"];
            $[33] = contarEquipos;
            $[34] = orden;
            $[35] = t20;
        } else {
            t20 = $[35];
        }
        const deportesOrdenados = [
            ...deportesFiltrados
        ].sort(t20);
        t12 = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$home$2f$deportes$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].contenedor;
        if ($[36] === Symbol.for("react.memo_cache_sentinel")) {
            t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$home$2f$deportes$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].etiqueta,
                children: "EXPLORAR / PIOZONE"
            }, void 0, false, {
                fileName: "[project]/src/app/home/deportes/page.js",
                lineNumber: 192,
                columnNumber: 13
            }, this);
            t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$home$2f$deportes$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].titulo,
                children: "Deportes"
            }, void 0, false, {
                fileName: "[project]/src/app/home/deportes/page.js",
                lineNumber: 193,
                columnNumber: 13
            }, this);
            t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$home$2f$deportes$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].descripcion,
                children: "Elegí una ficha para consultar su detalle y sus relaciones."
            }, void 0, false, {
                fileName: "[project]/src/app/home/deportes/page.js",
                lineNumber: 194,
                columnNumber: 13
            }, this);
            $[36] = t13;
            $[37] = t14;
            $[38] = t15;
        } else {
            t13 = $[36];
            t14 = $[37];
            t15 = $[38];
        }
        let t21;
        if ($[39] === Symbol.for("react.memo_cache_sentinel")) {
            t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$home$2f$deportes$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].filtrosTitulo,
                children: "Filtrar y ordenar"
            }, void 0, false, {
                fileName: "[project]/src/app/home/deportes/page.js",
                lineNumber: 205,
                columnNumber: 13
            }, this);
            $[39] = t21;
        } else {
            t21 = $[39];
        }
        let t22;
        if ($[40] === Symbol.for("react.memo_cache_sentinel")) {
            t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$home$2f$deportes$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].labelCampo,
                children: "Buscar en esta sección"
            }, void 0, false, {
                fileName: "[project]/src/app/home/deportes/page.js",
                lineNumber: 212,
                columnNumber: 13
            }, this);
            $[40] = t22;
        } else {
            t22 = $[40];
        }
        let t23;
        if ($[41] !== busqueda) {
            t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$home$2f$deportes$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].campo,
                children: [
                    t22,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Input$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        onChange: onChangeBusqueda,
                        placeholder: "Nombre del deporte",
                        value: busqueda,
                        type: "text"
                    }, void 0, false, {
                        fileName: "[project]/src/app/home/deportes/page.js",
                        lineNumber: 219,
                        columnNumber: 48
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/home/deportes/page.js",
                lineNumber: 219,
                columnNumber: 13
            }, this);
            $[41] = busqueda;
            $[42] = t23;
        } else {
            t23 = $[42];
        }
        let t24;
        if ($[43] === Symbol.for("react.memo_cache_sentinel")) {
            t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$home$2f$deportes$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].labelCampo,
                children: "Ordenar por"
            }, void 0, false, {
                fileName: "[project]/src/app/home/deportes/page.js",
                lineNumber: 227,
                columnNumber: 13
            }, this);
            $[43] = t24;
        } else {
            t24 = $[43];
        }
        let t25;
        let t26;
        let t27;
        if ($[44] === Symbol.for("react.memo_cache_sentinel")) {
            t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                value: "az",
                children: "Nombre A–Z"
            }, void 0, false, {
                fileName: "[project]/src/app/home/deportes/page.js",
                lineNumber: 236,
                columnNumber: 13
            }, this);
            t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                value: "za",
                children: "Nombre Z–A"
            }, void 0, false, {
                fileName: "[project]/src/app/home/deportes/page.js",
                lineNumber: 237,
                columnNumber: 13
            }, this);
            t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                value: "equipos",
                children: "Más equipos"
            }, void 0, false, {
                fileName: "[project]/src/app/home/deportes/page.js",
                lineNumber: 238,
                columnNumber: 13
            }, this);
            $[44] = t25;
            $[45] = t26;
            $[46] = t27;
        } else {
            t25 = $[44];
            t26 = $[45];
            t27 = $[46];
        }
        let t28;
        if ($[47] !== orden) {
            t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$home$2f$deportes$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].campo,
                children: [
                    t24,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$home$2f$deportes$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].select,
                        value: orden,
                        onChange: onChangeOrden,
                        children: [
                            t25,
                            t26,
                            t27
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/home/deportes/page.js",
                        lineNumber: 249,
                        columnNumber: 48
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/home/deportes/page.js",
                lineNumber: 249,
                columnNumber: 13
            }, this);
            $[47] = orden;
            $[48] = t28;
        } else {
            t28 = $[48];
        }
        let t29;
        if ($[49] !== t23 || $[50] !== t28) {
            t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$home$2f$deportes$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].campos,
                children: [
                    t23,
                    t28
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/home/deportes/page.js",
                lineNumber: 257,
                columnNumber: 13
            }, this);
            $[49] = t23;
            $[50] = t28;
            $[51] = t29;
        } else {
            t29 = $[51];
        }
        let t30;
        if ($[52] === Symbol.for("react.memo_cache_sentinel")) {
            t30 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$home$2f$deportes$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].limpiar,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    onClick: limpiarFiltros,
                    children: "Limpiar filtros"
                }, void 0, false, {
                    fileName: "[project]/src/app/home/deportes/page.js",
                    lineNumber: 266,
                    columnNumber: 45
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/home/deportes/page.js",
                lineNumber: 266,
                columnNumber: 13
            }, this);
            $[52] = t30;
        } else {
            t30 = $[52];
        }
        if ($[53] !== t29) {
            t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$home$2f$deportes$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].filtros,
                children: [
                    t21,
                    t29,
                    t30
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/home/deportes/page.js",
                lineNumber: 272,
                columnNumber: 13
            }, this);
            $[53] = t29;
            $[54] = t16;
        } else {
            t16 = $[54];
        }
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$home$2f$deportes$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].resultados,
            children: [
                deportesOrdenados.length,
                " resultados"
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/home/deportes/page.js",
            lineNumber: 278,
            columnNumber: 11
        }, this);
        t18 = deportesOrdenados.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$home$2f$deportes$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].vacio,
            children: "No se encontraron deportes con ese criterio."
        }, void 0, false, {
            fileName: "[project]/src/app/home/deportes/page.js",
            lineNumber: 279,
            columnNumber: 44
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$home$2f$deportes$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].grilla,
            children: deportesOrdenados.map({
                "DeportesPage[deportesOrdenados.map()]": (deporte_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CardDeporte$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        nombre: deporte_0.nombre,
                        descripcion: deporte_0.descripcion,
                        cantidadEquipos: contarEquipos(deporte_0.id_deporte),
                        onClick: {
                            "DeportesPage[deportesOrdenados.map() > <CardDeporte>.onClick]": ()=>verDetalle(deporte_0.id_deporte)
                        }["DeportesPage[deportesOrdenados.map() > <CardDeporte>.onClick]"]
                    }, deporte_0.id_deporte, false, {
                        fileName: "[project]/src/app/home/deportes/page.js",
                        lineNumber: 280,
                        columnNumber: 63
                    }, this)
            }["DeportesPage[deportesOrdenados.map()]"])
        }, void 0, false, {
            fileName: "[project]/src/app/home/deportes/page.js",
            lineNumber: 279,
            columnNumber: 127
        }, this);
        $[19] = busqueda;
        $[20] = contarEquipos;
        $[21] = deportes;
        $[22] = orden;
        $[23] = verDetalle;
        $[24] = t12;
        $[25] = t13;
        $[26] = t14;
        $[27] = t15;
        $[28] = t16;
        $[29] = t17;
        $[30] = t18;
    } else {
        t12 = $[24];
        t13 = $[25];
        t14 = $[26];
        t15 = $[27];
        t16 = $[28];
        t17 = $[29];
        t18 = $[30];
    }
    let t19;
    if ($[55] === Symbol.for("react.memo_cache_sentinel")) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$home$2f$deportes$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].guia,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$home$2f$deportes$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].guiaTitulo,
                    children: "Guía rápida"
                }, void 0, false, {
                    fileName: "[project]/src/app/home/deportes/page.js",
                    lineNumber: 307,
                    columnNumber: 40
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$home$2f$deportes$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].guiaTexto,
                    children: "Usá la navegación o las fichas para abrir secciones y detalles. Filtrá los listados y seguí las relaciones entre deportes, equipos y competencias."
                }, void 0, false, {
                    fileName: "[project]/src/app/home/deportes/page.js",
                    lineNumber: 307,
                    columnNumber: 90
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/home/deportes/page.js",
            lineNumber: 307,
            columnNumber: 11
        }, this);
        $[55] = t19;
    } else {
        t19 = $[55];
    }
    let t20;
    if ($[56] !== t12 || $[57] !== t13 || $[58] !== t14 || $[59] !== t15 || $[60] !== t16 || $[61] !== t17 || $[62] !== t18) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t12,
            children: [
                t13,
                t14,
                t15,
                t16,
                t17,
                t18,
                t19
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/home/deportes/page.js",
            lineNumber: 314,
            columnNumber: 11
        }, this);
        $[56] = t12;
        $[57] = t13;
        $[58] = t14;
        $[59] = t15;
        $[60] = t16;
        $[61] = t17;
        $[62] = t18;
        $[63] = t20;
    } else {
        t20 = $[63];
    }
    return t20;
}
_s(DeportesPage, "CnXFoClzJoLTW8vEWZQRuhl3muk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"]
    ];
});
_c = DeportesPage;
function _DeportesPageUseEffectAnonymous2(response_0) {
    return response_0.json();
}
function _DeportesPageUseEffectAnonymous(response) {
    return response.json();
}
var _c;
__turbopack_context__.k.register(_c, "DeportesPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/home/deportes/page.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "campo": "page-module__e4k4yW__campo",
  "campos": "page-module__e4k4yW__campos",
  "contenedor": "page-module__e4k4yW__contenedor",
  "descripcion": "page-module__e4k4yW__descripcion",
  "etiqueta": "page-module__e4k4yW__etiqueta",
  "filtros": "page-module__e4k4yW__filtros",
  "filtrosTitulo": "page-module__e4k4yW__filtrosTitulo",
  "grilla": "page-module__e4k4yW__grilla",
  "guia": "page-module__e4k4yW__guia",
  "guiaTexto": "page-module__e4k4yW__guiaTexto",
  "guiaTitulo": "page-module__e4k4yW__guiaTitulo",
  "labelCampo": "page-module__e4k4yW__labelCampo",
  "limpiar": "page-module__e4k4yW__limpiar",
  "resultados": "page-module__e4k4yW__resultados",
  "select": "page-module__e4k4yW__select",
  "titulo": "page-module__e4k4yW__titulo",
  "vacio": "page-module__e4k4yW__vacio",
});
}),
"[project]/src/components/CardDeporte.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CardDeporte
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CardDeporte$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/CardDeporte.module.css [app-client] (css module)");
"use client";
;
;
;
function CardDeporte(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(15);
    if ($[0] !== "fd22f19a749c6ad59f95bf2a8080ee4f3ffce79db0142a6c308f3d56f68391ad") {
        for(let $i = 0; $i < 15; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "fd22f19a749c6ad59f95bf2a8080ee4f3ffce79db0142a6c308f3d56f68391ad";
    }
    const { nombre, descripcion, cantidadEquipos, onClick } = t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CardDeporte$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].etiqueta,
            children: "DEPORTES · PIOZONE"
        }, void 0, false, {
            fileName: "[project]/src/components/CardDeporte.js",
            lineNumber: 21,
            columnNumber: 10
        }, this);
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    let t2;
    if ($[2] !== nombre) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CardDeporte$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].titulo,
            children: nombre
        }, void 0, false, {
            fileName: "[project]/src/components/CardDeporte.js",
            lineNumber: 28,
            columnNumber: 10
        }, this);
        $[2] = nombre;
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    let t3;
    if ($[4] !== descripcion) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CardDeporte$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].descripcion,
            children: descripcion
        }, void 0, false, {
            fileName: "[project]/src/components/CardDeporte.js",
            lineNumber: 36,
            columnNumber: 10
        }, this);
        $[4] = descripcion;
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    let t4;
    if ($[6] !== cantidadEquipos) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CardDeporte$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].equipos,
            children: [
                cantidadEquipos,
                " equipos"
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/CardDeporte.js",
            lineNumber: 44,
            columnNumber: 10
        }, this);
        $[6] = cantidadEquipos;
        $[7] = t4;
    } else {
        t4 = $[7];
    }
    let t5;
    if ($[8] !== onClick) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CardDeporte$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].abrir,
            onClick: onClick,
            children: "Ver detalle →"
        }, void 0, false, {
            fileName: "[project]/src/components/CardDeporte.js",
            lineNumber: 52,
            columnNumber: 10
        }, this);
        $[8] = onClick;
        $[9] = t5;
    } else {
        t5 = $[9];
    }
    let t6;
    if ($[10] !== t2 || $[11] !== t3 || $[12] !== t4 || $[13] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CardDeporte$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].card,
            children: [
                t1,
                t2,
                t3,
                t4,
                t5
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/CardDeporte.js",
            lineNumber: 60,
            columnNumber: 10
        }, this);
        $[10] = t2;
        $[11] = t3;
        $[12] = t4;
        $[13] = t5;
        $[14] = t6;
    } else {
        t6 = $[14];
    }
    return t6;
}
_c = CardDeporte;
var _c;
__turbopack_context__.k.register(_c, "CardDeporte");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/CardDeporte.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "abrir": "CardDeporte-module__Q-6y3q__abrir",
  "card": "CardDeporte-module__Q-6y3q__card",
  "descripcion": "CardDeporte-module__Q-6y3q__descripcion",
  "equipos": "CardDeporte-module__Q-6y3q__equipos",
  "etiqueta": "CardDeporte-module__Q-6y3q__etiqueta",
  "titulo": "CardDeporte-module__Q-6y3q__titulo",
});
}),
]);

//# sourceMappingURL=src_1-0pr8al2sg2_._.js.map