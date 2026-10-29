(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/home/competencias/[id]/page.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PartidoSalaPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useSocket$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useSocket.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Input$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Input.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Button.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$home$2f$competencias$2f5b$id$5d2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/app/home/competencias/[id]/page.module.css [app-client] (css module)");
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
function PartidoSalaPage() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(89);
    if ($[0] !== "619c3cffaab8a2a9a00d2941ed5c3d5d558d71c314b508aac3d527a6010d5127") {
        for(let $i = 0; $i < 89; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "619c3cffaab8a2a9a00d2941ed5c3d5d558d71c314b508aac3d527a6010d5127";
    }
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const urlParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])();
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = {
            serverUrl: "http://localhost:4000"
        };
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const { socket, isConnected } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useSocket$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(t0);
    const idPartido = urlParams.id;
    let t1;
    if ($[2] !== searchParams) {
        t1 = searchParams.get("id");
        $[2] = searchParams;
        $[3] = t1;
    } else {
        t1 = $[3];
    }
    const id = t1;
    let t2;
    if ($[4] !== searchParams) {
        t2 = searchParams.get("nombre");
        $[4] = searchParams;
        $[5] = t2;
    } else {
        t2 = $[5];
    }
    const nombre = t2;
    let t3;
    if ($[6] !== searchParams) {
        t3 = searchParams.get("es_admin");
        $[6] = searchParams;
        $[7] = t3;
    } else {
        t3 = $[7];
    }
    const es_admin = t3;
    const params = `id=${id}&nombre=${nombre}&es_admin=${es_admin}`;
    const [partido, setPartido] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    let t4;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = [];
        $[8] = t4;
    } else {
        t4 = $[8];
    }
    const [equipos, setEquipos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t4);
    const [cargando, setCargando] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [nuevoResultadoLocal, setNuevoResultadoLocal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [nuevoResultadoVisitante, setNuevoResultadoVisitante] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [ultimaActualizacion, setUltimaActualizacion] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    let t5;
    let t6;
    if ($[9] !== idPartido) {
        t5 = ({
            "PartidoSalaPage[useEffect()]": ()=>{
                fetch(`http://localhost:4000/partidos/${idPartido}`).then(_PartidoSalaPageUseEffectAnonymous).then({
                    "PartidoSalaPage[useEffect() > (anonymous)()]": (data)=>{
                        setPartido(data);
                        setCargando(false);
                    }
                }["PartidoSalaPage[useEffect() > (anonymous)()]"]).catch({
                    "PartidoSalaPage[useEffect() > (anonymous)()]": ()=>setCargando(false)
                }["PartidoSalaPage[useEffect() > (anonymous)()]"]);
                fetch("http://localhost:4000/equipos").then(_PartidoSalaPageUseEffectAnonymous2).then({
                    "PartidoSalaPage[useEffect() > (anonymous)()]": (data_0)=>setEquipos(Array.isArray(data_0) ? data_0 : [])
                }["PartidoSalaPage[useEffect() > (anonymous)()]"]).catch({
                    "PartidoSalaPage[useEffect() > (anonymous)()]": ()=>setEquipos([])
                }["PartidoSalaPage[useEffect() > (anonymous)()]"]);
            }
        })["PartidoSalaPage[useEffect()]"];
        t6 = [
            idPartido
        ];
        $[9] = idPartido;
        $[10] = t5;
        $[11] = t6;
    } else {
        t5 = $[10];
        t6 = $[11];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t5, t6);
    let t7;
    let t8;
    if ($[12] !== idPartido || $[13] !== socket) {
        t7 = ({
            "PartidoSalaPage[useEffect()]": ()=>{
                if (!socket) {
                    return;
                }
                socket.emit("join_room", {
                    tipo_sala: "partido",
                    id_sala: idPartido
                });
                const onPartidoActualizado = {
                    "PartidoSalaPage[useEffect() > onPartidoActualizado]": (data_1)=>{
                        setPartido({
                            "PartidoSalaPage[useEffect() > onPartidoActualizado > setPartido()]": (anterior)=>anterior ? {
                                    ...anterior,
                                    resultado: data_1.resultado
                                } : anterior
                        }["PartidoSalaPage[useEffect() > onPartidoActualizado > setPartido()]"]);
                        setUltimaActualizacion(new Date());
                    }
                }["PartidoSalaPage[useEffect() > onPartidoActualizado]"];
                socket.on("partido_actualizado", onPartidoActualizado);
                return ()=>{
                    socket.off("partido_actualizado", onPartidoActualizado);
                    socket.emit("leave_room", {
                        tipo_sala: "partido",
                        id_sala: idPartido
                    });
                };
            }
        })["PartidoSalaPage[useEffect()]"];
        t8 = [
            socket,
            idPartido
        ];
        $[12] = idPartido;
        $[13] = socket;
        $[14] = t7;
        $[15] = t8;
    } else {
        t7 = $[14];
        t8 = $[15];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t7, t8);
    let t9;
    if ($[16] !== nuevoResultadoLocal) {
        t9 = ({
            "PartidoSalaPage[onChangeResultadoLocal]": (event)=>{
                setNuevoResultadoLocal(event.target.value);
                console.log(nuevoResultadoLocal);
            }
        })["PartidoSalaPage[onChangeResultadoLocal]"];
        $[16] = nuevoResultadoLocal;
        $[17] = t9;
    } else {
        t9 = $[17];
    }
    const onChangeResultadoLocal = t9;
    let t10;
    if ($[18] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = ({
            "PartidoSalaPage[onChangeResultadoVisitante]": (event_0)=>{
                setNuevoResultadoVisitante(event_0.target.value);
                console.log(setNuevoResultadoVisitante);
            }
        })["PartidoSalaPage[onChangeResultadoVisitante]"];
        $[18] = t10;
    } else {
        t10 = $[18];
    }
    const onChangeResultadoVisitante = t10;
    let t11;
    if ($[19] !== idPartido || $[20] !== nuevoResultadoLocal || $[21] !== nuevoResultadoVisitante || $[22] !== socket) {
        t11 = ({
            "PartidoSalaPage[actualizarResultado]": ()=>{
                if (nuevoResultadoVisitante === null || nuevoResultadoLocal === null) {
                    alert("El resultado debe ser num\xE9rico");
                    return;
                }
                const resultadoAdaptado = Number(nuevoResultadoLocal) * 1000 + Number(nuevoResultadoVisitante);
                console.log(resultadoAdaptado);
                socket.emit("actualizar_partido", {
                    id_partido: idPartido,
                    resultado: Number(resultadoAdaptado)
                });
            }
        })["PartidoSalaPage[actualizarResultado]"];
        $[19] = idPartido;
        $[20] = nuevoResultadoLocal;
        $[21] = nuevoResultadoVisitante;
        $[22] = socket;
        $[23] = t11;
    } else {
        t11 = $[23];
    }
    const actualizarResultado = t11;
    let t12;
    if ($[24] !== params || $[25] !== partido || $[26] !== router) {
        t12 = ({
            "PartidoSalaPage[volver]": ()=>{
                if (partido && partido.id_competencia) {
                    router.push(`/home/competencias/${partido.id_competencia}?${params}`);
                } else {
                    router.push(`/home/competencias?${params}`);
                }
            }
        })["PartidoSalaPage[volver]"];
        $[24] = params;
        $[25] = partido;
        $[26] = router;
        $[27] = t12;
    } else {
        t12 = $[27];
    }
    const volver = t12;
    let t13;
    if ($[28] !== equipos) {
        t13 = ({
            "PartidoSalaPage[nombreEquipo]": (idEquipo)=>{
                const equipo = equipos.find({
                    "PartidoSalaPage[nombreEquipo > equipos.find()]": (e)=>e.id_equipo === idEquipo
                }["PartidoSalaPage[nombreEquipo > equipos.find()]"]);
                return equipo ? equipo.nombre : "A definir";
            }
        })["PartidoSalaPage[nombreEquipo]"];
        $[28] = equipos;
        $[29] = t13;
    } else {
        t13 = $[29];
    }
    const nombreEquipo = t13;
    const formatearFecha = _PartidoSalaPageFormatearFecha;
    const formatearHora = _PartidoSalaPageFormatearHora;
    if (cargando) {
        let t14;
        if ($[30] === Symbol.for("react.memo_cache_sentinel")) {
            t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$home$2f$competencias$2f5b$id$5d2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].contenedor,
                children: "Cargando..."
            }, void 0, false, {
                fileName: "[project]/src/app/home/competencias/[id]/page.js",
                lineNumber: 240,
                columnNumber: 13
            }, this);
            $[30] = t14;
        } else {
            t14 = $[30];
        }
        return t14;
    }
    if (!partido) {
        let t14;
        if ($[31] === Symbol.for("react.memo_cache_sentinel")) {
            t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$home$2f$competencias$2f5b$id$5d2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].titulo,
                children: "Partido no encontrado"
            }, void 0, false, {
                fileName: "[project]/src/app/home/competencias/[id]/page.js",
                lineNumber: 250,
                columnNumber: 13
            }, this);
            $[31] = t14;
        } else {
            t14 = $[31];
        }
        let t15;
        if ($[32] !== volver) {
            t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$home$2f$competencias$2f5b$id$5d2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].contenedor,
                children: [
                    t14,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$home$2f$competencias$2f5b$id$5d2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].volver,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            onClick: volver,
                            children: "← Volver"
                        }, void 0, false, {
                            fileName: "[project]/src/app/home/competencias/[id]/page.js",
                            lineNumber: 257,
                            columnNumber: 84
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/home/competencias/[id]/page.js",
                        lineNumber: 257,
                        columnNumber: 53
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/home/competencias/[id]/page.js",
                lineNumber: 257,
                columnNumber: 13
            }, this);
            $[32] = volver;
            $[33] = t15;
        } else {
            t15 = $[33];
        }
        return t15;
    }
    let t14;
    if ($[34] !== volver) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$home$2f$competencias$2f5b$id$5d2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].volver,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                onClick: volver,
                children: "← Volver a la competencia"
            }, void 0, false, {
                fileName: "[project]/src/app/home/competencias/[id]/page.js",
                lineNumber: 267,
                columnNumber: 42
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/home/competencias/[id]/page.js",
            lineNumber: 267,
            columnNumber: 11
        }, this);
        $[34] = volver;
        $[35] = t14;
    } else {
        t14 = $[35];
    }
    const t15 = isConnected ? "CONECTADO" : "DESCONECTADO";
    let t16;
    if ($[36] !== t15) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$home$2f$competencias$2f5b$id$5d2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].etiqueta,
            children: [
                "SALA EN VIVO / ",
                t15
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/home/competencias/[id]/page.js",
            lineNumber: 276,
            columnNumber: 11
        }, this);
        $[36] = t15;
        $[37] = t16;
    } else {
        t16 = $[37];
    }
    let t17;
    if ($[38] !== nombreEquipo || $[39] !== partido.id_equipo_local) {
        t17 = nombreEquipo(partido.id_equipo_local);
        $[38] = nombreEquipo;
        $[39] = partido.id_equipo_local;
        $[40] = t17;
    } else {
        t17 = $[40];
    }
    let t18;
    if ($[41] !== nombreEquipo || $[42] !== partido.id_equipo_visitante) {
        t18 = nombreEquipo(partido.id_equipo_visitante);
        $[41] = nombreEquipo;
        $[42] = partido.id_equipo_visitante;
        $[43] = t18;
    } else {
        t18 = $[43];
    }
    let t19;
    if ($[44] !== t17 || $[45] !== t18) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$home$2f$competencias$2f5b$id$5d2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].titulo,
            children: [
                t17,
                " vs ",
                t18
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/home/competencias/[id]/page.js",
            lineNumber: 302,
            columnNumber: 11
        }, this);
        $[44] = t17;
        $[45] = t18;
        $[46] = t19;
    } else {
        t19 = $[46];
    }
    let t20;
    if ($[47] === Symbol.for("react.memo_cache_sentinel")) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$home$2f$competencias$2f5b$id$5d2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].marcadorEtiqueta,
            children: "Resultado:"
        }, void 0, false, {
            fileName: "[project]/src/app/home/competencias/[id]/page.js",
            lineNumber: 311,
            columnNumber: 11
        }, this);
        $[47] = t20;
    } else {
        t20 = $[47];
    }
    let t21;
    if ($[48] !== nuevoResultadoLocal || $[49] !== nuevoResultadoVisitante) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$home$2f$competencias$2f5b$id$5d2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].marcadorValor,
            children: [
                nuevoResultadoLocal,
                " - ",
                nuevoResultadoVisitante
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/home/competencias/[id]/page.js",
            lineNumber: 318,
            columnNumber: 11
        }, this);
        $[48] = nuevoResultadoLocal;
        $[49] = nuevoResultadoVisitante;
        $[50] = t21;
    } else {
        t21 = $[50];
    }
    let t22;
    if ($[51] !== ultimaActualizacion) {
        t22 = ultimaActualizacion && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$home$2f$competencias$2f5b$id$5d2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].marcadorHora,
            children: [
                "Actualizado a las ",
                ultimaActualizacion.toLocaleTimeString("es-AR")
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/home/competencias/[id]/page.js",
            lineNumber: 327,
            columnNumber: 34
        }, this);
        $[51] = ultimaActualizacion;
        $[52] = t22;
    } else {
        t22 = $[52];
    }
    let t23;
    if ($[53] !== t21 || $[54] !== t22) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$home$2f$competencias$2f5b$id$5d2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].marcador,
            children: [
                t20,
                t21,
                t22
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/home/competencias/[id]/page.js",
            lineNumber: 335,
            columnNumber: 11
        }, this);
        $[53] = t21;
        $[54] = t22;
        $[55] = t23;
    } else {
        t23 = $[55];
    }
    let t24;
    if ($[56] === Symbol.for("react.memo_cache_sentinel")) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$home$2f$competencias$2f5b$id$5d2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].datoEtiqueta,
            children: "Fecha"
        }, void 0, false, {
            fileName: "[project]/src/app/home/competencias/[id]/page.js",
            lineNumber: 344,
            columnNumber: 11
        }, this);
        $[56] = t24;
    } else {
        t24 = $[56];
    }
    let t25;
    if ($[57] !== partido.fecha) {
        t25 = formatearFecha(partido.fecha);
        $[57] = partido.fecha;
        $[58] = t25;
    } else {
        t25 = $[58];
    }
    let t26;
    if ($[59] !== t25) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$home$2f$competencias$2f5b$id$5d2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].dato,
            children: [
                t24,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$home$2f$competencias$2f5b$id$5d2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].datoValor,
                    children: t25
                }, void 0, false, {
                    fileName: "[project]/src/app/home/competencias/[id]/page.js",
                    lineNumber: 359,
                    columnNumber: 45
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/home/competencias/[id]/page.js",
            lineNumber: 359,
            columnNumber: 11
        }, this);
        $[59] = t25;
        $[60] = t26;
    } else {
        t26 = $[60];
    }
    let t27;
    if ($[61] === Symbol.for("react.memo_cache_sentinel")) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$home$2f$competencias$2f5b$id$5d2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].datoEtiqueta,
            children: "Hora"
        }, void 0, false, {
            fileName: "[project]/src/app/home/competencias/[id]/page.js",
            lineNumber: 367,
            columnNumber: 11
        }, this);
        $[61] = t27;
    } else {
        t27 = $[61];
    }
    let t28;
    if ($[62] !== partido.hora) {
        t28 = formatearHora(partido.hora);
        $[62] = partido.hora;
        $[63] = t28;
    } else {
        t28 = $[63];
    }
    let t29;
    if ($[64] !== t28) {
        t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$home$2f$competencias$2f5b$id$5d2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].dato,
            children: [
                t27,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$home$2f$competencias$2f5b$id$5d2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].datoValor,
                    children: [
                        t28,
                        " hs"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/home/competencias/[id]/page.js",
                    lineNumber: 382,
                    columnNumber: 45
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/home/competencias/[id]/page.js",
            lineNumber: 382,
            columnNumber: 11
        }, this);
        $[64] = t28;
        $[65] = t29;
    } else {
        t29 = $[65];
    }
    let t30;
    if ($[66] === Symbol.for("react.memo_cache_sentinel")) {
        t30 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$home$2f$competencias$2f5b$id$5d2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].datoEtiqueta,
            children: "Lugar"
        }, void 0, false, {
            fileName: "[project]/src/app/home/competencias/[id]/page.js",
            lineNumber: 390,
            columnNumber: 11
        }, this);
        $[66] = t30;
    } else {
        t30 = $[66];
    }
    let t31;
    if ($[67] !== partido.lugar) {
        t31 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$home$2f$competencias$2f5b$id$5d2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].dato,
            children: [
                t30,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$home$2f$competencias$2f5b$id$5d2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].datoValor,
                    children: partido.lugar
                }, void 0, false, {
                    fileName: "[project]/src/app/home/competencias/[id]/page.js",
                    lineNumber: 397,
                    columnNumber: 45
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/home/competencias/[id]/page.js",
            lineNumber: 397,
            columnNumber: 11
        }, this);
        $[67] = partido.lugar;
        $[68] = t31;
    } else {
        t31 = $[68];
    }
    let t32;
    if ($[69] !== t26 || $[70] !== t29 || $[71] !== t31) {
        t32 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$home$2f$competencias$2f5b$id$5d2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].datos,
            children: [
                t26,
                t29,
                t31
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/home/competencias/[id]/page.js",
            lineNumber: 405,
            columnNumber: 11
        }, this);
        $[69] = t26;
        $[70] = t29;
        $[71] = t31;
        $[72] = t32;
    } else {
        t32 = $[72];
    }
    let t33;
    if ($[73] !== actualizarResultado || $[74] !== es_admin || $[75] !== nombreEquipo || $[76] !== nuevoResultadoLocal || $[77] !== nuevoResultadoVisitante || $[78] !== onChangeResultadoLocal || $[79] !== partido.id_equipo_local || $[80] !== partido.id_equipo_visitante) {
        t33 = es_admin === "1" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$home$2f$competencias$2f5b$id$5d2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].admin,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$home$2f$competencias$2f5b$id$5d2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].adminTitulo,
                    children: "Panel del administrador"
                }, void 0, false, {
                    fileName: "[project]/src/app/home/competencias/[id]/page.js",
                    lineNumber: 415,
                    columnNumber: 61
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Input$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    onChange: onChangeResultadoVisitante,
                    placeholder: nombreEquipo(partido.id_equipo_visitante),
                    value: nuevoResultadoVisitante,
                    type: "number"
                }, void 0, false, {
                    fileName: "[project]/src/app/home/competencias/[id]/page.js",
                    lineNumber: 415,
                    columnNumber: 124
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Input$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    onChange: onChangeResultadoLocal,
                    placeholder: nombreEquipo(partido.id_equipo_local),
                    value: nuevoResultadoLocal,
                    type: "number"
                }, void 0, false, {
                    fileName: "[project]/src/app/home/competencias/[id]/page.js",
                    lineNumber: 415,
                    columnNumber: 273
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    onClick: actualizarResultado,
                    children: "Publicar resultado"
                }, void 0, false, {
                    fileName: "[project]/src/app/home/competencias/[id]/page.js",
                    lineNumber: 415,
                    columnNumber: 410
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/home/competencias/[id]/page.js",
            lineNumber: 415,
            columnNumber: 31
        }, this);
        $[73] = actualizarResultado;
        $[74] = es_admin;
        $[75] = nombreEquipo;
        $[76] = nuevoResultadoLocal;
        $[77] = nuevoResultadoVisitante;
        $[78] = onChangeResultadoLocal;
        $[79] = partido.id_equipo_local;
        $[80] = partido.id_equipo_visitante;
        $[81] = t33;
    } else {
        t33 = $[81];
    }
    let t34;
    if ($[82] !== t14 || $[83] !== t16 || $[84] !== t19 || $[85] !== t23 || $[86] !== t32 || $[87] !== t33) {
        t34 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$home$2f$competencias$2f5b$id$5d2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].contenedor,
            children: [
                t14,
                t16,
                t19,
                t23,
                t32,
                t33
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/home/competencias/[id]/page.js",
            lineNumber: 430,
            columnNumber: 11
        }, this);
        $[82] = t14;
        $[83] = t16;
        $[84] = t19;
        $[85] = t23;
        $[86] = t32;
        $[87] = t33;
        $[88] = t34;
    } else {
        t34 = $[88];
    }
    return t34;
}
_s(PartidoSalaPage, "RbjEvCpSGdwk5tDQPsCvbk3ij3k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useSocket$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    ];
});
_c = PartidoSalaPage;
function _PartidoSalaPageFormatearHora(valor_0) {
    return valor_0 ? String(valor_0).slice(0, 5) : "--:--";
}
function _PartidoSalaPageFormatearFecha(valor) {
    if (!valor) {
        return "Sin fecha";
    }
    const fecha = new Date(`${String(valor).slice(0, 10)}T00:00:00`);
    return isNaN(fecha.getTime()) ? "Sin fecha" : fecha.toLocaleDateString("es-AR");
}
function _PartidoSalaPageUseEffectAnonymous2(response_0) {
    return response_0.json();
}
function _PartidoSalaPageUseEffectAnonymous(response) {
    return response.json();
}
var _c;
__turbopack_context__.k.register(_c, "PartidoSalaPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/home/competencias/[id]/page.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "contenedor": "page-module__chx03W__contenedor",
  "dato": "page-module__chx03W__dato",
  "datoEtiqueta": "page-module__chx03W__datoEtiqueta",
  "datoValor": "page-module__chx03W__datoValor",
  "datos": "page-module__chx03W__datos",
  "enVivo": "page-module__chx03W__enVivo",
  "equipo": "page-module__chx03W__equipo",
  "equipoNombre": "page-module__chx03W__equipoNombre",
  "etiqueta": "page-module__chx03W__etiqueta",
  "evento": "page-module__chx03W__evento",
  "eventoInfo": "page-module__chx03W__eventoInfo",
  "eventoPartido": "page-module__chx03W__eventoPartido",
  "grilla": "page-module__chx03W__grilla",
  "lista": "page-module__chx03W__lista",
  "marcador": "page-module__chx03W__marcador",
  "seccionTitulo": "page-module__chx03W__seccionTitulo",
  "titulo": "page-module__chx03W__titulo",
  "vacio": "page-module__chx03W__vacio",
  "volver": "page-module__chx03W__volver",
});
}),
"[project]/src/hooks/useSocket.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>useSocket
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$socket$2e$io$2d$client$2f$build$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/socket.io-client/build/esm/index.js [app-client] (ecmascript) <locals>");
var _s = __turbopack_context__.k.signature();
;
;
function useSocket({ serverUrl = "ws://localhost:4000", options = {} } = {}) {
    _s();
    const [isConnected, setIsConnected] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const socketRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    if (!socketRef.current) {
        // Solo se crea una vez
        socketRef.current = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$socket$2e$io$2d$client$2f$build$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["io"])(serverUrl, options);
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useSocket.useEffect": ()=>{
            const socket = socketRef.current;
            const onConnect = {
                "useSocket.useEffect.onConnect": ()=>{
                    setIsConnected(true);
                    console.log("✅ WebSocket conectado:", socket.id);
                }
            }["useSocket.useEffect.onConnect"];
            const onDisconnect = {
                "useSocket.useEffect.onDisconnect": ()=>{
                    setIsConnected(false);
                    console.log("❌ WebSocket desconectado");
                }
            }["useSocket.useEffect.onDisconnect"];
            socket.on("connect", onConnect);
            socket.on("disconnect", onDisconnect);
            return ({
                "useSocket.useEffect": ()=>{
                    socket.off("connect", onConnect);
                    socket.off("disconnect", onDisconnect);
                }
            })["useSocket.useEffect"];
        }
    }["useSocket.useEffect"], []);
    return {
        socket: socketRef.current,
        isConnected
    };
}
_s(useSocket, "dKqSXJnoeWXkGZYCwYfPCTsfw1o=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_16xdnqkeavfgu._.js.map