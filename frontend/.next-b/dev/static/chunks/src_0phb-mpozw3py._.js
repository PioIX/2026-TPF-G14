(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/home/jugadores/page.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>JugadoresPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Input$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Input.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Button.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CardJugador$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/CardJugador.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$home$2f$jugadores$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/app/home/jugadores/page.module.css [app-client] (css module)");
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
function JugadoresPage() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(103);
    if ($[0] !== "89e7edf0b92de604b8fbdaf91361e6fead0aa8744c8b40f5d5bbf0ef6cc063cb") {
        for(let $i = 0; $i < 103; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "89e7edf0b92de604b8fbdaf91361e6fead0aa8744c8b40f5d5bbf0ef6cc063cb";
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
    const [jugadores, setJugadores] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t3);
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
    const [deportes, setDeportes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t5);
    const [busqueda, setBusqueda] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [filtroDeporte, setFiltroDeporte] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("todos");
    const [filtroEquipo, setFiltroEquipo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("todos");
    const [orden, setOrden] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("az");
    let t6;
    let t7;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = ({
            "JugadoresPage[useEffect()]": ()=>{
                fetch("http://localhost:4000/jugadores").then(_JugadoresPageUseEffectAnonymous).then({
                    "JugadoresPage[useEffect() > (anonymous)()]": (data)=>setJugadores(data)
                }["JugadoresPage[useEffect() > (anonymous)()]"]);
                fetch("http://localhost:4000/equipos").then(_JugadoresPageUseEffectAnonymous2).then({
                    "JugadoresPage[useEffect() > (anonymous)()]": (data_0)=>setEquipos(data_0)
                }["JugadoresPage[useEffect() > (anonymous)()]"]);
                fetch("http://localhost:4000/deportes").then(_JugadoresPageUseEffectAnonymous3).then({
                    "JugadoresPage[useEffect() > (anonymous)()]": (data_1)=>setDeportes(data_1)
                }["JugadoresPage[useEffect() > (anonymous)()]"]);
            }
        })["JugadoresPage[useEffect()]"];
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
            "JugadoresPage[onChangeBusqueda]": (event)=>{
                setBusqueda(event.target.value);
            }
        })["JugadoresPage[onChangeBusqueda]"];
        $[12] = t8;
    } else {
        t8 = $[12];
    }
    const onChangeBusqueda = t8;
    let t9;
    if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = ({
            "JugadoresPage[onChangeDeporte]": (event_0)=>{
                setFiltroDeporte(event_0.target.value);
                setFiltroEquipo("todos");
            }
        })["JugadoresPage[onChangeDeporte]"];
        $[13] = t9;
    } else {
        t9 = $[13];
    }
    const onChangeDeporte = t9;
    let t10;
    if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = ({
            "JugadoresPage[onChangeEquipo]": (event_1)=>{
                setFiltroEquipo(event_1.target.value);
            }
        })["JugadoresPage[onChangeEquipo]"];
        $[14] = t10;
    } else {
        t10 = $[14];
    }
    const onChangeEquipo = t10;
    let t11;
    if ($[15] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = ({
            "JugadoresPage[onChangeOrden]": (event_2)=>{
                setOrden(event_2.target.value);
            }
        })["JugadoresPage[onChangeOrden]"];
        $[15] = t11;
    } else {
        t11 = $[15];
    }
    const onChangeOrden = t11;
    let t12;
    if ($[16] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = ({
            "JugadoresPage[limpiarFiltros]": ()=>{
                setBusqueda("");
                setFiltroDeporte("todos");
                setFiltroEquipo("todos");
                setOrden("az");
            }
        })["JugadoresPage[limpiarFiltros]"];
        $[16] = t12;
    } else {
        t12 = $[16];
    }
    const limpiarFiltros = t12;
    let t13;
    if ($[17] !== equipos) {
        t13 = ({
            "JugadoresPage[buscarEquipo]": (idEquipo)=>equipos.find({
                    "JugadoresPage[buscarEquipo > equipos.find()]": (equipo)=>equipo.id_equipo === idEquipo
                }["JugadoresPage[buscarEquipo > equipos.find()]"])
        })["JugadoresPage[buscarEquipo]"];
        $[17] = equipos;
        $[18] = t13;
    } else {
        t13 = $[18];
    }
    const buscarEquipo = t13;
    let t14;
    if ($[19] !== buscarEquipo) {
        t14 = ({
            "JugadoresPage[nombreEquipo]": (idEquipo_0)=>{
                const equipo_0 = buscarEquipo(idEquipo_0);
                return equipo_0 ? equipo_0.nombre : "Sin equipo";
            }
        })["JugadoresPage[nombreEquipo]"];
        $[19] = buscarEquipo;
        $[20] = t14;
    } else {
        t14 = $[20];
    }
    const nombreEquipo = t14;
    let t15;
    if ($[21] !== buscarEquipo) {
        t15 = ({
            "JugadoresPage[idDeporteJugador]": (jugador)=>{
                if (jugador.id_deporte) {
                    return jugador.id_deporte;
                }
                const equipo_1 = buscarEquipo(jugador.id_equipo);
                return equipo_1 ? equipo_1.id_deporte : null;
            }
        })["JugadoresPage[idDeporteJugador]"];
        $[21] = buscarEquipo;
        $[22] = t15;
    } else {
        t15 = $[22];
    }
    const idDeporteJugador = t15;
    let t16;
    if ($[23] !== deportes) {
        t16 = ({
            "JugadoresPage[nombreDeporte]": (idDeporte)=>{
                const deporte = deportes.find({
                    "JugadoresPage[nombreDeporte > deportes.find()]": (d)=>d.id_deporte === idDeporte
                }["JugadoresPage[nombreDeporte > deportes.find()]"]);
                return deporte ? deporte.nombre : "Sin deporte";
            }
        })["JugadoresPage[nombreDeporte]"];
        $[23] = deportes;
        $[24] = t16;
    } else {
        t16 = $[24];
    }
    const nombreDeporte = t16;
    const nombreCompleto = _JugadoresPageNombreCompleto;
    let t17;
    if ($[25] !== params || $[26] !== router) {
        t17 = ({
            "JugadoresPage[verDetalle]": (idJugador)=>{
                router.push(`/home/jugadores/${idJugador}?${params}`);
            }
        })["JugadoresPage[verDetalle]"];
        $[25] = params;
        $[26] = router;
        $[27] = t17;
    } else {
        t17 = $[27];
    }
    const verDetalle = t17;
    let t18;
    let t19;
    let t20;
    let t21;
    let t22;
    let t23;
    let t24;
    if ($[28] !== buscarEquipo || $[29] !== busqueda || $[30] !== deportes || $[31] !== equipos || $[32] !== filtroDeporte || $[33] !== filtroEquipo || $[34] !== idDeporteJugador || $[35] !== jugadores || $[36] !== nombreDeporte || $[37] !== nombreEquipo || $[38] !== orden || $[39] !== verDetalle) {
        let t25;
        if ($[47] !== filtroDeporte) {
            t25 = ({
                "JugadoresPage[equipos.filter()]": (equipo_2)=>filtroDeporte === "todos" || String(equipo_2.id_deporte) === filtroDeporte
            })["JugadoresPage[equipos.filter()]"];
            $[47] = filtroDeporte;
            $[48] = t25;
        } else {
            t25 = $[48];
        }
        const equiposDisponibles = equipos.filter(t25);
        const texto = busqueda.toLowerCase();
        const jugadoresFiltrados = jugadores.filter({
            "JugadoresPage[jugadores.filter()]": (jugador_1)=>{
                const coincideTexto = nombreCompleto(jugador_1).toLowerCase().includes(texto) || nombreEquipo(jugador_1.id_equipo).toLowerCase().includes(texto) || nombreDeporte(idDeporteJugador(jugador_1)).toLowerCase().includes(texto) || String(jugador_1.posicion || "").toLowerCase().includes(texto);
                const coincideDeporte = filtroDeporte === "todos" || String(idDeporteJugador(jugador_1)) === filtroDeporte;
                const coincideEquipo = filtroEquipo === "todos" || filtroEquipo === "sin" && !buscarEquipo(jugador_1.id_equipo) || String(jugador_1.id_equipo) === filtroEquipo;
                return coincideTexto && coincideDeporte && coincideEquipo;
            }
        }["JugadoresPage[jugadores.filter()]"]);
        let t26;
        if ($[49] !== nombreEquipo || $[50] !== orden) {
            t26 = ({
                "JugadoresPage[(anonymous)()]": (a, b)=>{
                    if (orden === "az") {
                        return nombreCompleto(a).localeCompare(nombreCompleto(b));
                    }
                    if (orden === "za") {
                        return nombreCompleto(b).localeCompare(nombreCompleto(a));
                    }
                    if (orden === "apellido") {
                        return a.apellido.localeCompare(b.apellido);
                    }
                    return nombreEquipo(a.id_equipo).localeCompare(nombreEquipo(b.id_equipo));
                }
            })["JugadoresPage[(anonymous)()]"];
            $[49] = nombreEquipo;
            $[50] = orden;
            $[51] = t26;
        } else {
            t26 = $[51];
        }
        const jugadoresOrdenados = [
            ...jugadoresFiltrados
        ].sort(t26);
        const hayFiltros = busqueda !== "" || filtroDeporte !== "todos" || filtroEquipo !== "todos";
        t18 = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$home$2f$jugadores$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].contenedor;
        if ($[52] === Symbol.for("react.memo_cache_sentinel")) {
            t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$home$2f$jugadores$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].etiqueta,
                children: "EXPLORAR / PIOZONE"
            }, void 0, false, {
                fileName: "[project]/src/app/home/jugadores/page.js",
                lineNumber: 293,
                columnNumber: 13
            }, this);
            t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$home$2f$jugadores$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].titulo,
                children: "Jugadores"
            }, void 0, false, {
                fileName: "[project]/src/app/home/jugadores/page.js",
                lineNumber: 294,
                columnNumber: 13
            }, this);
            t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$home$2f$jugadores$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].descripcion,
                children: "Elegí una ficha para consultar su detalle y sus relaciones."
            }, void 0, false, {
                fileName: "[project]/src/app/home/jugadores/page.js",
                lineNumber: 295,
                columnNumber: 13
            }, this);
            $[52] = t19;
            $[53] = t20;
            $[54] = t21;
        } else {
            t19 = $[52];
            t20 = $[53];
            t21 = $[54];
        }
        let t27;
        if ($[55] === Symbol.for("react.memo_cache_sentinel")) {
            t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$home$2f$jugadores$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].filtrosTitulo,
                children: "Filtrar y ordenar"
            }, void 0, false, {
                fileName: "[project]/src/app/home/jugadores/page.js",
                lineNumber: 306,
                columnNumber: 13
            }, this);
            $[55] = t27;
        } else {
            t27 = $[55];
        }
        let t28;
        if ($[56] === Symbol.for("react.memo_cache_sentinel")) {
            t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$home$2f$jugadores$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].labelCampo,
                children: "Buscar en esta sección"
            }, void 0, false, {
                fileName: "[project]/src/app/home/jugadores/page.js",
                lineNumber: 313,
                columnNumber: 13
            }, this);
            $[56] = t28;
        } else {
            t28 = $[56];
        }
        let t29;
        if ($[57] !== busqueda) {
            t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$home$2f$jugadores$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].campo,
                children: [
                    t28,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Input$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        onChange: onChangeBusqueda,
                        placeholder: "Nombre o referencia",
                        value: busqueda,
                        type: "text"
                    }, void 0, false, {
                        fileName: "[project]/src/app/home/jugadores/page.js",
                        lineNumber: 320,
                        columnNumber: 48
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/home/jugadores/page.js",
                lineNumber: 320,
                columnNumber: 13
            }, this);
            $[57] = busqueda;
            $[58] = t29;
        } else {
            t29 = $[58];
        }
        let t30;
        if ($[59] === Symbol.for("react.memo_cache_sentinel")) {
            t30 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$home$2f$jugadores$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].labelCampo,
                children: "Deporte"
            }, void 0, false, {
                fileName: "[project]/src/app/home/jugadores/page.js",
                lineNumber: 328,
                columnNumber: 13
            }, this);
            $[59] = t30;
        } else {
            t30 = $[59];
        }
        let t31;
        if ($[60] === Symbol.for("react.memo_cache_sentinel")) {
            t31 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                value: "todos",
                children: "Todos"
            }, void 0, false, {
                fileName: "[project]/src/app/home/jugadores/page.js",
                lineNumber: 335,
                columnNumber: 13
            }, this);
            $[60] = t31;
        } else {
            t31 = $[60];
        }
        let t32;
        if ($[61] !== deportes) {
            t32 = deportes.map(_JugadoresPageDeportesMap);
            $[61] = deportes;
            $[62] = t32;
        } else {
            t32 = $[62];
        }
        let t33;
        if ($[63] !== filtroDeporte || $[64] !== t32) {
            t33 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$home$2f$jugadores$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].campo,
                children: [
                    t30,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$home$2f$jugadores$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].select,
                        value: filtroDeporte,
                        onChange: onChangeDeporte,
                        children: [
                            t31,
                            t32
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/home/jugadores/page.js",
                        lineNumber: 350,
                        columnNumber: 48
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/home/jugadores/page.js",
                lineNumber: 350,
                columnNumber: 13
            }, this);
            $[63] = filtroDeporte;
            $[64] = t32;
            $[65] = t33;
        } else {
            t33 = $[65];
        }
        let t34;
        if ($[66] === Symbol.for("react.memo_cache_sentinel")) {
            t34 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$home$2f$jugadores$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].labelCampo,
                children: "Equipo"
            }, void 0, false, {
                fileName: "[project]/src/app/home/jugadores/page.js",
                lineNumber: 359,
                columnNumber: 13
            }, this);
            $[66] = t34;
        } else {
            t34 = $[66];
        }
        let t35;
        if ($[67] === Symbol.for("react.memo_cache_sentinel")) {
            t35 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                value: "todos",
                children: "Todos"
            }, void 0, false, {
                fileName: "[project]/src/app/home/jugadores/page.js",
                lineNumber: 366,
                columnNumber: 13
            }, this);
            $[67] = t35;
        } else {
            t35 = $[67];
        }
        const t36 = equiposDisponibles.map(_JugadoresPageEquiposDisponiblesMap);
        let t37;
        if ($[68] === Symbol.for("react.memo_cache_sentinel")) {
            t37 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                value: "sin",
                children: "Sin equipo"
            }, void 0, false, {
                fileName: "[project]/src/app/home/jugadores/page.js",
                lineNumber: 374,
                columnNumber: 13
            }, this);
            $[68] = t37;
        } else {
            t37 = $[68];
        }
        let t38;
        if ($[69] !== filtroEquipo || $[70] !== t36) {
            t38 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$home$2f$jugadores$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].campo,
                children: [
                    t34,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$home$2f$jugadores$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].select,
                        value: filtroEquipo,
                        onChange: onChangeEquipo,
                        children: [
                            t35,
                            t36,
                            t37
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/home/jugadores/page.js",
                        lineNumber: 381,
                        columnNumber: 48
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/home/jugadores/page.js",
                lineNumber: 381,
                columnNumber: 13
            }, this);
            $[69] = filtroEquipo;
            $[70] = t36;
            $[71] = t38;
        } else {
            t38 = $[71];
        }
        let t39;
        if ($[72] === Symbol.for("react.memo_cache_sentinel")) {
            t39 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$home$2f$jugadores$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].labelCampo,
                children: "Ordenar por"
            }, void 0, false, {
                fileName: "[project]/src/app/home/jugadores/page.js",
                lineNumber: 390,
                columnNumber: 13
            }, this);
            $[72] = t39;
        } else {
            t39 = $[72];
        }
        let t40;
        let t41;
        let t42;
        let t43;
        if ($[73] === Symbol.for("react.memo_cache_sentinel")) {
            t40 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                value: "az",
                children: "Nombre A–Z"
            }, void 0, false, {
                fileName: "[project]/src/app/home/jugadores/page.js",
                lineNumber: 400,
                columnNumber: 13
            }, this);
            t41 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                value: "za",
                children: "Nombre Z–A"
            }, void 0, false, {
                fileName: "[project]/src/app/home/jugadores/page.js",
                lineNumber: 401,
                columnNumber: 13
            }, this);
            t42 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                value: "apellido",
                children: "Apellido"
            }, void 0, false, {
                fileName: "[project]/src/app/home/jugadores/page.js",
                lineNumber: 402,
                columnNumber: 13
            }, this);
            t43 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                value: "equipo",
                children: "Equipo"
            }, void 0, false, {
                fileName: "[project]/src/app/home/jugadores/page.js",
                lineNumber: 403,
                columnNumber: 13
            }, this);
            $[73] = t40;
            $[74] = t41;
            $[75] = t42;
            $[76] = t43;
        } else {
            t40 = $[73];
            t41 = $[74];
            t42 = $[75];
            t43 = $[76];
        }
        let t44;
        if ($[77] !== orden) {
            t44 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$home$2f$jugadores$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].campo,
                children: [
                    t39,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$home$2f$jugadores$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].select,
                        value: orden,
                        onChange: onChangeOrden,
                        children: [
                            t40,
                            t41,
                            t42,
                            t43
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/home/jugadores/page.js",
                        lineNumber: 416,
                        columnNumber: 48
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/home/jugadores/page.js",
                lineNumber: 416,
                columnNumber: 13
            }, this);
            $[77] = orden;
            $[78] = t44;
        } else {
            t44 = $[78];
        }
        let t45;
        if ($[79] !== t29 || $[80] !== t33 || $[81] !== t38 || $[82] !== t44) {
            t45 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$home$2f$jugadores$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].campos,
                children: [
                    t29,
                    t33,
                    t38,
                    t44
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/home/jugadores/page.js",
                lineNumber: 424,
                columnNumber: 13
            }, this);
            $[79] = t29;
            $[80] = t33;
            $[81] = t38;
            $[82] = t44;
            $[83] = t45;
        } else {
            t45 = $[83];
        }
        let t46;
        if ($[84] === Symbol.for("react.memo_cache_sentinel")) {
            t46 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$home$2f$jugadores$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].limpiar,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    onClick: limpiarFiltros,
                    children: "Limpiar filtros"
                }, void 0, false, {
                    fileName: "[project]/src/app/home/jugadores/page.js",
                    lineNumber: 435,
                    columnNumber: 45
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/home/jugadores/page.js",
                lineNumber: 435,
                columnNumber: 13
            }, this);
            $[84] = t46;
        } else {
            t46 = $[84];
        }
        if ($[85] !== t45) {
            t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$home$2f$jugadores$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].filtros,
                children: [
                    t27,
                    t45,
                    t46
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/home/jugadores/page.js",
                lineNumber: 441,
                columnNumber: 13
            }, this);
            $[85] = t45;
            $[86] = t22;
        } else {
            t22 = $[86];
        }
        let t47;
        if ($[87] !== busqueda || $[88] !== filtroDeporte || $[89] !== filtroEquipo || $[90] !== hayFiltros || $[91] !== nombreDeporte || $[92] !== nombreEquipo) {
            t47 = hayFiltros && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$home$2f$jugadores$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].chips,
                children: [
                    busqueda !== "" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$home$2f$jugadores$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].chip,
                        children: [
                            "“",
                            busqueda,
                            "”"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/home/jugadores/page.js",
                        lineNumber: 449,
                        columnNumber: 77
                    }, this),
                    filtroDeporte !== "todos" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$home$2f$jugadores$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].chip,
                        children: nombreDeporte(Number(filtroDeporte))
                    }, void 0, false, {
                        fileName: "[project]/src/app/home/jugadores/page.js",
                        lineNumber: 449,
                        columnNumber: 157
                    }, this),
                    filtroEquipo !== "todos" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$home$2f$jugadores$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].chip,
                        children: filtroEquipo === "sin" ? "Sin equipo" : nombreEquipo(Number(filtroEquipo))
                    }, void 0, false, {
                        fileName: "[project]/src/app/home/jugadores/page.js",
                        lineNumber: 449,
                        columnNumber: 262
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/home/jugadores/page.js",
                lineNumber: 449,
                columnNumber: 27
            }, this);
            $[87] = busqueda;
            $[88] = filtroDeporte;
            $[89] = filtroEquipo;
            $[90] = hayFiltros;
            $[91] = nombreDeporte;
            $[92] = nombreEquipo;
            $[93] = t47;
        } else {
            t47 = $[93];
        }
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$home$2f$jugadores$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].barraResultados,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$home$2f$jugadores$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].resultados,
                    children: [
                        jugadoresOrdenados.length,
                        " ",
                        jugadoresOrdenados.length === 1 ? "resultado" : "resultados"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/home/jugadores/page.js",
                    lineNumber: 460,
                    columnNumber: 51
                }, this),
                t47
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/home/jugadores/page.js",
            lineNumber: 460,
            columnNumber: 11
        }, this);
        t24 = jugadoresOrdenados.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$home$2f$jugadores$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].vacio,
            children: "No se encontraron jugadores con ese criterio."
        }, void 0, false, {
            fileName: "[project]/src/app/home/jugadores/page.js",
            lineNumber: 461,
            columnNumber: 45
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$home$2f$jugadores$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].grilla,
            children: jugadoresOrdenados.map({
                "JugadoresPage[jugadoresOrdenados.map()]": (jugador_2)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CardJugador$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        nombre: jugador_2.nombre,
                        apellido: jugador_2.apellido,
                        posicion: jugador_2.posicion,
                        deporte: nombreDeporte(idDeporteJugador(jugador_2)),
                        equipo: nombreEquipo(jugador_2.id_equipo),
                        onClick: {
                            "JugadoresPage[jugadoresOrdenados.map() > <CardJugador>.onClick]": ()=>verDetalle(jugador_2.id_jugador)
                        }["JugadoresPage[jugadoresOrdenados.map() > <CardJugador>.onClick]"]
                    }, jugador_2.id_jugador, false, {
                        fileName: "[project]/src/app/home/jugadores/page.js",
                        lineNumber: 462,
                        columnNumber: 65
                    }, this)
            }["JugadoresPage[jugadoresOrdenados.map()]"])
        }, void 0, false, {
            fileName: "[project]/src/app/home/jugadores/page.js",
            lineNumber: 461,
            columnNumber: 129
        }, this);
        $[28] = buscarEquipo;
        $[29] = busqueda;
        $[30] = deportes;
        $[31] = equipos;
        $[32] = filtroDeporte;
        $[33] = filtroEquipo;
        $[34] = idDeporteJugador;
        $[35] = jugadores;
        $[36] = nombreDeporte;
        $[37] = nombreEquipo;
        $[38] = orden;
        $[39] = verDetalle;
        $[40] = t18;
        $[41] = t19;
        $[42] = t20;
        $[43] = t21;
        $[44] = t22;
        $[45] = t23;
        $[46] = t24;
    } else {
        t18 = $[40];
        t19 = $[41];
        t20 = $[42];
        t21 = $[43];
        t22 = $[44];
        t23 = $[45];
        t24 = $[46];
    }
    let t25;
    if ($[94] === Symbol.for("react.memo_cache_sentinel")) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$home$2f$jugadores$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].guia,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$home$2f$jugadores$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].guiaTitulo,
                    children: "Guía rápida"
                }, void 0, false, {
                    fileName: "[project]/src/app/home/jugadores/page.js",
                    lineNumber: 496,
                    columnNumber: 40
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$home$2f$jugadores$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].guiaTexto,
                    children: "Usá la navegación o las fichas para abrir secciones y detalles. Buscá por nombre, equipo, deporte o posición, combiná los filtros y seguí las relaciones entre jugadores, equipos y competencias."
                }, void 0, false, {
                    fileName: "[project]/src/app/home/jugadores/page.js",
                    lineNumber: 496,
                    columnNumber: 90
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/home/jugadores/page.js",
            lineNumber: 496,
            columnNumber: 11
        }, this);
        $[94] = t25;
    } else {
        t25 = $[94];
    }
    let t26;
    if ($[95] !== t18 || $[96] !== t19 || $[97] !== t20 || $[98] !== t21 || $[99] !== t22 || $[100] !== t23 || $[101] !== t24) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t18,
            children: [
                t19,
                t20,
                t21,
                t22,
                t23,
                t24,
                t25
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/home/jugadores/page.js",
            lineNumber: 503,
            columnNumber: 11
        }, this);
        $[95] = t18;
        $[96] = t19;
        $[97] = t20;
        $[98] = t21;
        $[99] = t22;
        $[100] = t23;
        $[101] = t24;
        $[102] = t26;
    } else {
        t26 = $[102];
    }
    return t26;
}
_s(JugadoresPage, "jGgFs7iqw5uf16I4m2Ylwb7QKe8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"]
    ];
});
_c = JugadoresPage;
function _JugadoresPageEquiposDisponiblesMap(equipo_3) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
        value: String(equipo_3.id_equipo),
        children: equipo_3.nombre
    }, equipo_3.id_equipo, false, {
        fileName: "[project]/src/app/home/jugadores/page.js",
        lineNumber: 518,
        columnNumber: 10
    }, this);
}
function _JugadoresPageDeportesMap(deporte_0) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
        value: String(deporte_0.id_deporte),
        children: deporte_0.nombre
    }, deporte_0.id_deporte, false, {
        fileName: "[project]/src/app/home/jugadores/page.js",
        lineNumber: 521,
        columnNumber: 10
    }, this);
}
function _JugadoresPageNombreCompleto(jugador_0) {
    return `${jugador_0.nombre} ${jugador_0.apellido}`;
}
function _JugadoresPageUseEffectAnonymous3(response_1) {
    return response_1.json();
}
function _JugadoresPageUseEffectAnonymous2(response_0) {
    return response_0.json();
}
function _JugadoresPageUseEffectAnonymous(response) {
    return response.json();
}
var _c;
__turbopack_context__.k.register(_c, "JugadoresPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/home/jugadores/page.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "barraResultados": "page-module__3CK__q__barraResultados",
  "campo": "page-module__3CK__q__campo",
  "campos": "page-module__3CK__q__campos",
  "chip": "page-module__3CK__q__chip",
  "chips": "page-module__3CK__q__chips",
  "contenedor": "page-module__3CK__q__contenedor",
  "descripcion": "page-module__3CK__q__descripcion",
  "etiqueta": "page-module__3CK__q__etiqueta",
  "filtros": "page-module__3CK__q__filtros",
  "filtrosTitulo": "page-module__3CK__q__filtrosTitulo",
  "grilla": "page-module__3CK__q__grilla",
  "guia": "page-module__3CK__q__guia",
  "guiaTexto": "page-module__3CK__q__guiaTexto",
  "guiaTitulo": "page-module__3CK__q__guiaTitulo",
  "labelCampo": "page-module__3CK__q__labelCampo",
  "limpiar": "page-module__3CK__q__limpiar",
  "resultados": "page-module__3CK__q__resultados",
  "select": "page-module__3CK__q__select",
  "titulo": "page-module__3CK__q__titulo",
  "vacio": "page-module__3CK__q__vacio",
});
}),
"[project]/src/components/CardJugador.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CardJugador
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CardJugador$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/CardJugador.module.css [app-client] (css module)");
"use client";
;
;
;
function CardJugador(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(22);
    if ($[0] !== "03b87e2eae0f5b3b8f437846a57be8aa7f4397a117de5ddcbe72f62924ff9f22") {
        for(let $i = 0; $i < 22; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "03b87e2eae0f5b3b8f437846a57be8aa7f4397a117de5ddcbe72f62924ff9f22";
    }
    const { nombre, apellido, posicion, deporte, equipo, onClick } = t0;
    const t1 = `${nombre[0] || ""}${apellido[0] || ""}`;
    let t2;
    if ($[1] !== t1) {
        t2 = t1.toUpperCase();
        $[1] = t1;
        $[2] = t2;
    } else {
        t2 = $[2];
    }
    const iniciales = t2;
    let t3;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CardJugador$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].etiqueta,
            children: "JUGADORES · PIOZONE"
        }, void 0, false, {
            fileName: "[project]/src/components/CardJugador.js",
            lineNumber: 33,
            columnNumber: 10
        }, this);
        $[3] = t3;
    } else {
        t3 = $[3];
    }
    let t4;
    if ($[4] !== iniciales) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CardJugador$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cabecera,
            children: [
                t3,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CardJugador$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].avatar,
                    children: iniciales
                }, void 0, false, {
                    fileName: "[project]/src/components/CardJugador.js",
                    lineNumber: 40,
                    columnNumber: 47
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/CardJugador.js",
            lineNumber: 40,
            columnNumber: 10
        }, this);
        $[4] = iniciales;
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    let t5;
    if ($[6] !== apellido || $[7] !== nombre) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CardJugador$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].titulo,
            children: [
                nombre,
                " ",
                apellido
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/CardJugador.js",
            lineNumber: 48,
            columnNumber: 10
        }, this);
        $[6] = apellido;
        $[7] = nombre;
        $[8] = t5;
    } else {
        t5 = $[8];
    }
    let t6;
    if ($[9] !== deporte || $[10] !== equipo) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CardJugador$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].relacion,
            children: [
                deporte,
                " · ",
                equipo
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/CardJugador.js",
            lineNumber: 57,
            columnNumber: 10
        }, this);
        $[9] = deporte;
        $[10] = equipo;
        $[11] = t6;
    } else {
        t6 = $[11];
    }
    let t7;
    if ($[12] !== posicion) {
        t7 = posicion && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CardJugador$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].posicion,
            children: posicion
        }, void 0, false, {
            fileName: "[project]/src/components/CardJugador.js",
            lineNumber: 66,
            columnNumber: 22
        }, this);
        $[12] = posicion;
        $[13] = t7;
    } else {
        t7 = $[13];
    }
    let t8;
    if ($[14] !== onClick) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CardJugador$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].abrir,
            onClick: onClick,
            children: "Ver detalle →"
        }, void 0, false, {
            fileName: "[project]/src/components/CardJugador.js",
            lineNumber: 74,
            columnNumber: 10
        }, this);
        $[14] = onClick;
        $[15] = t8;
    } else {
        t8 = $[15];
    }
    let t9;
    if ($[16] !== t4 || $[17] !== t5 || $[18] !== t6 || $[19] !== t7 || $[20] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CardJugador$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].card,
            children: [
                t4,
                t5,
                t6,
                t7,
                t8
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/CardJugador.js",
            lineNumber: 82,
            columnNumber: 10
        }, this);
        $[16] = t4;
        $[17] = t5;
        $[18] = t6;
        $[19] = t7;
        $[20] = t8;
        $[21] = t9;
    } else {
        t9 = $[21];
    }
    return t9;
}
_c = CardJugador;
var _c;
__turbopack_context__.k.register(_c, "CardJugador");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/CardJugador.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "abrir": "CardJugador-module__ttq0zG__abrir",
  "avatar": "CardJugador-module__ttq0zG__avatar",
  "cabecera": "CardJugador-module__ttq0zG__cabecera",
  "card": "CardJugador-module__ttq0zG__card",
  "etiqueta": "CardJugador-module__ttq0zG__etiqueta",
  "posicion": "CardJugador-module__ttq0zG__posicion",
  "relacion": "CardJugador-module__ttq0zG__relacion",
  "titulo": "CardJugador-module__ttq0zG__titulo",
});
}),
]);

//# sourceMappingURL=src_0phb-mpozw3py._.js.map