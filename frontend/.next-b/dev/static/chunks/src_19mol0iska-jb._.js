(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/home/equipos/page.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>EquiposPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Input$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Input.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Button.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CardEquipo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/CardEquipo.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$home$2f$equipos$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/app/home/equipos/page.module.css [app-client] (css module)");
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
function EquiposPage() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(82);
    if ($[0] !== "8b6fd5ba280499c61a02e99268583426258cbd0585f8e4dfc1fd808b8853126f") {
        for(let $i = 0; $i < 82; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "8b6fd5ba280499c61a02e99268583426258cbd0585f8e4dfc1fd808b8853126f";
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
    const [equipos, setEquipos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t3);
    let t4;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = [];
        $[8] = t4;
    } else {
        t4 = $[8];
    }
    const [deportes, setDeportes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t4);
    let t5;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = [];
        $[9] = t5;
    } else {
        t5 = $[9];
    }
    const [competencias, setCompetencias] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t5);
    const [busqueda, setBusqueda] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [filtroDeporte, setFiltroDeporte] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("todos");
    const [orden, setOrden] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("az");
    let t6;
    let t7;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = ({
            "EquiposPage[useEffect()]": ()=>{
                fetch("http://localhost:4000/equipos").then(_EquiposPageUseEffectAnonymous).then({
                    "EquiposPage[useEffect() > (anonymous)()]": (data)=>setEquipos(data)
                }["EquiposPage[useEffect() > (anonymous)()]"]);
                fetch("http://localhost:4000/deportes").then(_EquiposPageUseEffectAnonymous2).then({
                    "EquiposPage[useEffect() > (anonymous)()]": (data_0)=>setDeportes(data_0)
                }["EquiposPage[useEffect() > (anonymous)()]"]);
                fetch("http://localhost:4000/competencias").then(_EquiposPageUseEffectAnonymous3).then({
                    "EquiposPage[useEffect() > (anonymous)()]": (data_1)=>setCompetencias(data_1)
                }["EquiposPage[useEffect() > (anonymous)()]"]);
            }
        })["EquiposPage[useEffect()]"];
        t7 = [];
        $[10] = t6;
        $[11] = t7;
    } else {
        t6 = $[10];
        t7 = $[11];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t6, t7);
    let t8;
    if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = ({
            "EquiposPage[onChangeBusqueda]": (event)=>{
                setBusqueda(event.target.value);
            }
        })["EquiposPage[onChangeBusqueda]"];
        $[12] = t8;
    } else {
        t8 = $[12];
    }
    const onChangeBusqueda = t8;
    let t9;
    if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = ({
            "EquiposPage[onChangeDeporte]": (event_0)=>{
                setFiltroDeporte(event_0.target.value);
            }
        })["EquiposPage[onChangeDeporte]"];
        $[13] = t9;
    } else {
        t9 = $[13];
    }
    const onChangeDeporte = t9;
    let t10;
    if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = ({
            "EquiposPage[onChangeOrden]": (event_1)=>{
                setOrden(event_1.target.value);
            }
        })["EquiposPage[onChangeOrden]"];
        $[14] = t10;
    } else {
        t10 = $[14];
    }
    const onChangeOrden = t10;
    let t11;
    if ($[15] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = ({
            "EquiposPage[limpiarFiltros]": ()=>{
                setBusqueda("");
                setFiltroDeporte("todos");
                setOrden("az");
            }
        })["EquiposPage[limpiarFiltros]"];
        $[15] = t11;
    } else {
        t11 = $[15];
    }
    const limpiarFiltros = t11;
    let t12;
    if ($[16] !== deportes) {
        t12 = ({
            "EquiposPage[nombreDeporte]": (idDeporte)=>{
                const deporte = deportes.find({
                    "EquiposPage[nombreDeporte > deportes.find()]": (d)=>d.id_deporte === idDeporte
                }["EquiposPage[nombreDeporte > deportes.find()]"]);
                return deporte ? deporte.nombre : "Sin deporte";
            }
        })["EquiposPage[nombreDeporte]"];
        $[16] = deportes;
        $[17] = t12;
    } else {
        t12 = $[17];
    }
    const nombreDeporte = t12;
    let t13;
    if ($[18] !== competencias) {
        t13 = ({
            "EquiposPage[nombreCompetencia]": (idCompetencia)=>{
                const competencia = competencias.find({
                    "EquiposPage[nombreCompetencia > competencias.find()]": (c)=>c.id_competencia === idCompetencia
                }["EquiposPage[nombreCompetencia > competencias.find()]"]);
                return competencia ? competencia.nombre : "Sin competencia";
            }
        })["EquiposPage[nombreCompetencia]"];
        $[18] = competencias;
        $[19] = t13;
    } else {
        t13 = $[19];
    }
    const nombreCompetencia = t13;
    let t14;
    if ($[20] !== params || $[21] !== router) {
        t14 = ({
            "EquiposPage[verDetalle]": (idEquipo)=>{
                router.push(`/home/equipos/${idEquipo}?${params}`);
            }
        })["EquiposPage[verDetalle]"];
        $[20] = params;
        $[21] = router;
        $[22] = t14;
    } else {
        t14 = $[22];
    }
    const verDetalle = t14;
    let t15;
    let t16;
    let t17;
    let t18;
    let t19;
    let t20;
    let t21;
    if ($[23] !== busqueda || $[24] !== deportes || $[25] !== equipos || $[26] !== filtroDeporte || $[27] !== nombreCompetencia || $[28] !== nombreDeporte || $[29] !== orden || $[30] !== verDetalle) {
        const texto = busqueda.toLowerCase();
        const equiposFiltrados = equipos.filter({
            "EquiposPage[equipos.filter()]": (equipo)=>{
                const coincideTexto = equipo.nombre.toLowerCase().includes(texto) || nombreDeporte(equipo.id_deporte).toLowerCase().includes(texto) || nombreCompetencia(equipo.id_competencia).toLowerCase().includes(texto);
                const coincideDeporte = filtroDeporte === "todos" || String(equipo.id_deporte) === filtroDeporte;
                return coincideTexto && coincideDeporte;
            }
        }["EquiposPage[equipos.filter()]"]);
        let t22;
        if ($[38] !== nombreDeporte || $[39] !== orden) {
            t22 = ({
                "EquiposPage[(anonymous)()]": (a, b)=>{
                    if (orden === "az") {
                        return a.nombre.localeCompare(b.nombre);
                    }
                    if (orden === "za") {
                        return b.nombre.localeCompare(a.nombre);
                    }
                    return nombreDeporte(a.id_deporte).localeCompare(nombreDeporte(b.id_deporte));
                }
            })["EquiposPage[(anonymous)()]"];
            $[38] = nombreDeporte;
            $[39] = orden;
            $[40] = t22;
        } else {
            t22 = $[40];
        }
        const equiposOrdenados = [
            ...equiposFiltrados
        ].sort(t22);
        const hayFiltros = busqueda !== "" || filtroDeporte !== "todos";
        t15 = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$home$2f$equipos$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].contenedor;
        if ($[41] === Symbol.for("react.memo_cache_sentinel")) {
            t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$home$2f$equipos$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].etiqueta,
                children: "EXPLORAR / PIOZONE"
            }, void 0, false, {
                fileName: "[project]/src/app/home/equipos/page.js",
                lineNumber: 234,
                columnNumber: 13
            }, this);
            t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$home$2f$equipos$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].titulo,
                children: "Equipos"
            }, void 0, false, {
                fileName: "[project]/src/app/home/equipos/page.js",
                lineNumber: 235,
                columnNumber: 13
            }, this);
            t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$home$2f$equipos$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].descripcion,
                children: "Elegí una ficha para consultar su detalle y sus relaciones."
            }, void 0, false, {
                fileName: "[project]/src/app/home/equipos/page.js",
                lineNumber: 236,
                columnNumber: 13
            }, this);
            $[41] = t16;
            $[42] = t17;
            $[43] = t18;
        } else {
            t16 = $[41];
            t17 = $[42];
            t18 = $[43];
        }
        let t23;
        if ($[44] === Symbol.for("react.memo_cache_sentinel")) {
            t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$home$2f$equipos$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].filtrosTitulo,
                children: "Filtrar y ordenar"
            }, void 0, false, {
                fileName: "[project]/src/app/home/equipos/page.js",
                lineNumber: 247,
                columnNumber: 13
            }, this);
            $[44] = t23;
        } else {
            t23 = $[44];
        }
        let t24;
        if ($[45] === Symbol.for("react.memo_cache_sentinel")) {
            t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$home$2f$equipos$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].labelCampo,
                children: "Buscar en esta sección"
            }, void 0, false, {
                fileName: "[project]/src/app/home/equipos/page.js",
                lineNumber: 254,
                columnNumber: 13
            }, this);
            $[45] = t24;
        } else {
            t24 = $[45];
        }
        let t25;
        if ($[46] !== busqueda) {
            t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$home$2f$equipos$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].campo,
                children: [
                    t24,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Input$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        onChange: onChangeBusqueda,
                        placeholder: "Nombre o referencia",
                        value: busqueda,
                        type: "text"
                    }, void 0, false, {
                        fileName: "[project]/src/app/home/equipos/page.js",
                        lineNumber: 261,
                        columnNumber: 48
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/home/equipos/page.js",
                lineNumber: 261,
                columnNumber: 13
            }, this);
            $[46] = busqueda;
            $[47] = t25;
        } else {
            t25 = $[47];
        }
        let t26;
        if ($[48] === Symbol.for("react.memo_cache_sentinel")) {
            t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$home$2f$equipos$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].labelCampo,
                children: "Deporte"
            }, void 0, false, {
                fileName: "[project]/src/app/home/equipos/page.js",
                lineNumber: 269,
                columnNumber: 13
            }, this);
            $[48] = t26;
        } else {
            t26 = $[48];
        }
        let t27;
        if ($[49] === Symbol.for("react.memo_cache_sentinel")) {
            t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                value: "todos",
                children: "Todos"
            }, void 0, false, {
                fileName: "[project]/src/app/home/equipos/page.js",
                lineNumber: 276,
                columnNumber: 13
            }, this);
            $[49] = t27;
        } else {
            t27 = $[49];
        }
        let t28;
        if ($[50] !== deportes) {
            t28 = deportes.map(_EquiposPageDeportesMap);
            $[50] = deportes;
            $[51] = t28;
        } else {
            t28 = $[51];
        }
        let t29;
        if ($[52] !== filtroDeporte || $[53] !== t28) {
            t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$home$2f$equipos$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].campo,
                children: [
                    t26,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$home$2f$equipos$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].select,
                        value: filtroDeporte,
                        onChange: onChangeDeporte,
                        children: [
                            t27,
                            t28
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/home/equipos/page.js",
                        lineNumber: 291,
                        columnNumber: 48
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/home/equipos/page.js",
                lineNumber: 291,
                columnNumber: 13
            }, this);
            $[52] = filtroDeporte;
            $[53] = t28;
            $[54] = t29;
        } else {
            t29 = $[54];
        }
        let t30;
        if ($[55] === Symbol.for("react.memo_cache_sentinel")) {
            t30 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$home$2f$equipos$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].labelCampo,
                children: "Ordenar por"
            }, void 0, false, {
                fileName: "[project]/src/app/home/equipos/page.js",
                lineNumber: 300,
                columnNumber: 13
            }, this);
            $[55] = t30;
        } else {
            t30 = $[55];
        }
        let t31;
        let t32;
        let t33;
        if ($[56] === Symbol.for("react.memo_cache_sentinel")) {
            t31 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                value: "az",
                children: "Nombre A–Z"
            }, void 0, false, {
                fileName: "[project]/src/app/home/equipos/page.js",
                lineNumber: 309,
                columnNumber: 13
            }, this);
            t32 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                value: "za",
                children: "Nombre Z–A"
            }, void 0, false, {
                fileName: "[project]/src/app/home/equipos/page.js",
                lineNumber: 310,
                columnNumber: 13
            }, this);
            t33 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                value: "deporte",
                children: "Deporte"
            }, void 0, false, {
                fileName: "[project]/src/app/home/equipos/page.js",
                lineNumber: 311,
                columnNumber: 13
            }, this);
            $[56] = t31;
            $[57] = t32;
            $[58] = t33;
        } else {
            t31 = $[56];
            t32 = $[57];
            t33 = $[58];
        }
        let t34;
        if ($[59] !== orden) {
            t34 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$home$2f$equipos$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].campo,
                children: [
                    t30,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$home$2f$equipos$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].select,
                        value: orden,
                        onChange: onChangeOrden,
                        children: [
                            t31,
                            t32,
                            t33
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/home/equipos/page.js",
                        lineNumber: 322,
                        columnNumber: 48
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/home/equipos/page.js",
                lineNumber: 322,
                columnNumber: 13
            }, this);
            $[59] = orden;
            $[60] = t34;
        } else {
            t34 = $[60];
        }
        let t35;
        if ($[61] !== t25 || $[62] !== t29 || $[63] !== t34) {
            t35 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$home$2f$equipos$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].campos,
                children: [
                    t25,
                    t29,
                    t34
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/home/equipos/page.js",
                lineNumber: 330,
                columnNumber: 13
            }, this);
            $[61] = t25;
            $[62] = t29;
            $[63] = t34;
            $[64] = t35;
        } else {
            t35 = $[64];
        }
        let t36;
        if ($[65] === Symbol.for("react.memo_cache_sentinel")) {
            t36 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$home$2f$equipos$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].limpiar,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    onClick: limpiarFiltros,
                    children: "Limpiar filtros"
                }, void 0, false, {
                    fileName: "[project]/src/app/home/equipos/page.js",
                    lineNumber: 340,
                    columnNumber: 45
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/home/equipos/page.js",
                lineNumber: 340,
                columnNumber: 13
            }, this);
            $[65] = t36;
        } else {
            t36 = $[65];
        }
        if ($[66] !== t35) {
            t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$home$2f$equipos$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].filtros,
                children: [
                    t23,
                    t35,
                    t36
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/home/equipos/page.js",
                lineNumber: 346,
                columnNumber: 13
            }, this);
            $[66] = t35;
            $[67] = t19;
        } else {
            t19 = $[67];
        }
        let t37;
        if ($[68] !== busqueda || $[69] !== filtroDeporte || $[70] !== hayFiltros || $[71] !== nombreDeporte) {
            t37 = hayFiltros && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$home$2f$equipos$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].chips,
                children: [
                    busqueda !== "" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$home$2f$equipos$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].chip,
                        children: [
                            "“",
                            busqueda,
                            "”"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/home/equipos/page.js",
                        lineNumber: 354,
                        columnNumber: 77
                    }, this),
                    filtroDeporte !== "todos" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$home$2f$equipos$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].chip,
                        children: nombreDeporte(Number(filtroDeporte))
                    }, void 0, false, {
                        fileName: "[project]/src/app/home/equipos/page.js",
                        lineNumber: 354,
                        columnNumber: 157
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/home/equipos/page.js",
                lineNumber: 354,
                columnNumber: 27
            }, this);
            $[68] = busqueda;
            $[69] = filtroDeporte;
            $[70] = hayFiltros;
            $[71] = nombreDeporte;
            $[72] = t37;
        } else {
            t37 = $[72];
        }
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$home$2f$equipos$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].barraResultados,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$home$2f$equipos$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].resultados,
                    children: [
                        equiposOrdenados.length,
                        " ",
                        equiposOrdenados.length === 1 ? "resultado" : "resultados"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/home/equipos/page.js",
                    lineNumber: 363,
                    columnNumber: 51
                }, this),
                t37
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/home/equipos/page.js",
            lineNumber: 363,
            columnNumber: 11
        }, this);
        t21 = equiposOrdenados.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$home$2f$equipos$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].vacio,
            children: "No se encontraron equipos con ese criterio."
        }, void 0, false, {
            fileName: "[project]/src/app/home/equipos/page.js",
            lineNumber: 364,
            columnNumber: 43
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$home$2f$equipos$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].grilla,
            children: equiposOrdenados.map({
                "EquiposPage[equiposOrdenados.map()]": (equipo_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CardEquipo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        nombre: equipo_0.nombre,
                        deporte: nombreDeporte(equipo_0.id_deporte),
                        competencia: nombreCompetencia(equipo_0.id_competencia),
                        onClick: {
                            "EquiposPage[equiposOrdenados.map() > <CardEquipo>.onClick]": ()=>verDetalle(equipo_0.id_equipo)
                        }["EquiposPage[equiposOrdenados.map() > <CardEquipo>.onClick]"]
                    }, equipo_0.id_equipo, false, {
                        fileName: "[project]/src/app/home/equipos/page.js",
                        lineNumber: 365,
                        columnNumber: 60
                    }, this)
            }["EquiposPage[equiposOrdenados.map()]"])
        }, void 0, false, {
            fileName: "[project]/src/app/home/equipos/page.js",
            lineNumber: 364,
            columnNumber: 125
        }, this);
        $[23] = busqueda;
        $[24] = deportes;
        $[25] = equipos;
        $[26] = filtroDeporte;
        $[27] = nombreCompetencia;
        $[28] = nombreDeporte;
        $[29] = orden;
        $[30] = verDetalle;
        $[31] = t15;
        $[32] = t16;
        $[33] = t17;
        $[34] = t18;
        $[35] = t19;
        $[36] = t20;
        $[37] = t21;
    } else {
        t15 = $[31];
        t16 = $[32];
        t17 = $[33];
        t18 = $[34];
        t19 = $[35];
        t20 = $[36];
        t21 = $[37];
    }
    let t22;
    if ($[73] === Symbol.for("react.memo_cache_sentinel")) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$home$2f$equipos$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].guia,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$home$2f$equipos$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].guiaTitulo,
                    children: "Guía rápida"
                }, void 0, false, {
                    fileName: "[project]/src/app/home/equipos/page.js",
                    lineNumber: 395,
                    columnNumber: 40
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$home$2f$equipos$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].guiaTexto,
                    children: "Usá la navegación o las fichas para abrir secciones y detalles. Buscá por nombre, deporte o competencia, filtrá por deporte y seguí las relaciones entre equipos, jugadores y competencias."
                }, void 0, false, {
                    fileName: "[project]/src/app/home/equipos/page.js",
                    lineNumber: 395,
                    columnNumber: 90
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/home/equipos/page.js",
            lineNumber: 395,
            columnNumber: 11
        }, this);
        $[73] = t22;
    } else {
        t22 = $[73];
    }
    let t23;
    if ($[74] !== t15 || $[75] !== t16 || $[76] !== t17 || $[77] !== t18 || $[78] !== t19 || $[79] !== t20 || $[80] !== t21) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t15,
            children: [
                t16,
                t17,
                t18,
                t19,
                t20,
                t21,
                t22
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/home/equipos/page.js",
            lineNumber: 402,
            columnNumber: 11
        }, this);
        $[74] = t15;
        $[75] = t16;
        $[76] = t17;
        $[77] = t18;
        $[78] = t19;
        $[79] = t20;
        $[80] = t21;
        $[81] = t23;
    } else {
        t23 = $[81];
    }
    return t23;
}
_s(EquiposPage, "aOkmxwLkxQhT/NZccw8fntfMZl4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"]
    ];
});
_c = EquiposPage;
function _EquiposPageDeportesMap(deporte_0) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
        value: String(deporte_0.id_deporte),
        children: deporte_0.nombre
    }, deporte_0.id_deporte, false, {
        fileName: "[project]/src/app/home/equipos/page.js",
        lineNumber: 417,
        columnNumber: 10
    }, this);
}
function _EquiposPageUseEffectAnonymous3(response_1) {
    return response_1.json();
}
function _EquiposPageUseEffectAnonymous2(response_0) {
    return response_0.json();
}
function _EquiposPageUseEffectAnonymous(response) {
    return response.json();
}
var _c;
__turbopack_context__.k.register(_c, "EquiposPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/home/equipos/page.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "barraResultados": "page-module__cbTMpG__barraResultados",
  "campo": "page-module__cbTMpG__campo",
  "campos": "page-module__cbTMpG__campos",
  "chip": "page-module__cbTMpG__chip",
  "chips": "page-module__cbTMpG__chips",
  "contenedor": "page-module__cbTMpG__contenedor",
  "descripcion": "page-module__cbTMpG__descripcion",
  "etiqueta": "page-module__cbTMpG__etiqueta",
  "filtros": "page-module__cbTMpG__filtros",
  "filtrosTitulo": "page-module__cbTMpG__filtrosTitulo",
  "grilla": "page-module__cbTMpG__grilla",
  "guia": "page-module__cbTMpG__guia",
  "guiaTexto": "page-module__cbTMpG__guiaTexto",
  "guiaTitulo": "page-module__cbTMpG__guiaTitulo",
  "labelCampo": "page-module__cbTMpG__labelCampo",
  "limpiar": "page-module__cbTMpG__limpiar",
  "resultados": "page-module__cbTMpG__resultados",
  "select": "page-module__cbTMpG__select",
  "titulo": "page-module__cbTMpG__titulo",
  "vacio": "page-module__cbTMpG__vacio",
});
}),
"[project]/src/components/CardEquipo.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CardEquipo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CardEquipo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/CardEquipo.module.css [app-client] (css module)");
"use client";
;
;
;
function CardEquipo(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(18);
    if ($[0] !== "f8182b6eeaceb94eef5167072c833dd83f09931fd54ffe1535d473415b038268") {
        for(let $i = 0; $i < 18; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "f8182b6eeaceb94eef5167072c833dd83f09931fd54ffe1535d473415b038268";
    }
    const { nombre, deporte, competencia, onClick } = t0;
    let t1;
    if ($[1] !== nombre) {
        t1 = nombre.split(" ").map(_CardEquipoAnonymous).join("").slice(0, 2).toUpperCase();
        $[1] = nombre;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const iniciales = t1;
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CardEquipo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].etiqueta,
            children: "EQUIPOS · PIOZONE"
        }, void 0, false, {
            fileName: "[project]/src/components/CardEquipo.js",
            lineNumber: 30,
            columnNumber: 10
        }, this);
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    let t3;
    if ($[4] !== iniciales) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CardEquipo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cabecera,
            children: [
                t2,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CardEquipo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].escudo,
                    children: iniciales
                }, void 0, false, {
                    fileName: "[project]/src/components/CardEquipo.js",
                    lineNumber: 37,
                    columnNumber: 47
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/CardEquipo.js",
            lineNumber: 37,
            columnNumber: 10
        }, this);
        $[4] = iniciales;
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    let t4;
    if ($[6] !== nombre) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CardEquipo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].titulo,
            children: nombre
        }, void 0, false, {
            fileName: "[project]/src/components/CardEquipo.js",
            lineNumber: 45,
            columnNumber: 10
        }, this);
        $[6] = nombre;
        $[7] = t4;
    } else {
        t4 = $[7];
    }
    let t5;
    if ($[8] !== competencia || $[9] !== deporte) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CardEquipo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].relacion,
            children: [
                deporte,
                " · ",
                competencia
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/CardEquipo.js",
            lineNumber: 53,
            columnNumber: 10
        }, this);
        $[8] = competencia;
        $[9] = deporte;
        $[10] = t5;
    } else {
        t5 = $[10];
    }
    let t6;
    if ($[11] !== onClick) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CardEquipo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].abrir,
            onClick: onClick,
            children: "Ver detalle →"
        }, void 0, false, {
            fileName: "[project]/src/components/CardEquipo.js",
            lineNumber: 62,
            columnNumber: 10
        }, this);
        $[11] = onClick;
        $[12] = t6;
    } else {
        t6 = $[12];
    }
    let t7;
    if ($[13] !== t3 || $[14] !== t4 || $[15] !== t5 || $[16] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CardEquipo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].card,
            children: [
                t3,
                t4,
                t5,
                t6
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/CardEquipo.js",
            lineNumber: 70,
            columnNumber: 10
        }, this);
        $[13] = t3;
        $[14] = t4;
        $[15] = t5;
        $[16] = t6;
        $[17] = t7;
    } else {
        t7 = $[17];
    }
    return t7;
}
_c = CardEquipo;
function _CardEquipoAnonymous(palabra) {
    return palabra[0];
}
var _c;
__turbopack_context__.k.register(_c, "CardEquipo");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/CardEquipo.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "abrir": "CardEquipo-module__pQKyWa__abrir",
  "cabecera": "CardEquipo-module__pQKyWa__cabecera",
  "card": "CardEquipo-module__pQKyWa__card",
  "escudo": "CardEquipo-module__pQKyWa__escudo",
  "etiqueta": "CardEquipo-module__pQKyWa__etiqueta",
  "relacion": "CardEquipo-module__pQKyWa__relacion",
  "titulo": "CardEquipo-module__pQKyWa__titulo",
});
}),
]);

//# sourceMappingURL=src_19mol0iska-jb._.js.map