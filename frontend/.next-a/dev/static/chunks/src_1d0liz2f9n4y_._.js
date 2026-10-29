(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/home/competencias/page.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CompetenciasPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Input$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Input.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Button.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CardCompetencia$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/CardCompetencia.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$home$2f$competencias$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/app/home/competencias/page.module.css [app-client] (css module)");
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
function CompetenciasPage() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(101);
    if ($[0] !== "0c4301301a6b6aa88860b5b9ddd15e055e40e185f7eb7393afb0d91267c5b2d3") {
        for(let $i = 0; $i < 101; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "0c4301301a6b6aa88860b5b9ddd15e055e40e185f7eb7393afb0d91267c5b2d3";
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
    const [competencias, setCompetencias] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t3);
    let t4;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = [];
        $[8] = t4;
    } else {
        t4 = $[8];
    }
    const [eventos, setEventos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t4);
    let t5;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = [];
        $[9] = t5;
    } else {
        t5 = $[9];
    }
    const [deportes, setDeportes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t5);
    let t6;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = [];
        $[10] = t6;
    } else {
        t6 = $[10];
    }
    const [equipos, setEquipos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t6);
    const [busqueda, setBusqueda] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [filtroDeporte, setFiltroDeporte] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("todos");
    const [filtroTipo, setFiltroTipo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("todos");
    const [orden, setOrden] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("az");
    let t7;
    let t8;
    if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = ({
            "CompetenciasPage[useEffect()]": ()=>{
                fetch("http://localhost:4000/competencias").then(_CompetenciasPageUseEffectAnonymous).then({
                    "CompetenciasPage[useEffect() > (anonymous)()]": (data)=>setCompetencias(Array.isArray(data) ? data : [])
                }["CompetenciasPage[useEffect() > (anonymous)()]"]).catch({
                    "CompetenciasPage[useEffect() > (anonymous)()]": ()=>setCompetencias([])
                }["CompetenciasPage[useEffect() > (anonymous)()]"]);
                fetch("http://localhost:4000/eventos").then(_CompetenciasPageUseEffectAnonymous2).then({
                    "CompetenciasPage[useEffect() > (anonymous)()]": (data_0)=>setEventos(Array.isArray(data_0) ? data_0 : [])
                }["CompetenciasPage[useEffect() > (anonymous)()]"]).catch({
                    "CompetenciasPage[useEffect() > (anonymous)()]": ()=>setEventos([])
                }["CompetenciasPage[useEffect() > (anonymous)()]"]);
                fetch("http://localhost:4000/deportes").then(_CompetenciasPageUseEffectAnonymous3).then({
                    "CompetenciasPage[useEffect() > (anonymous)()]": (data_1)=>setDeportes(Array.isArray(data_1) ? data_1 : [])
                }["CompetenciasPage[useEffect() > (anonymous)()]"]).catch({
                    "CompetenciasPage[useEffect() > (anonymous)()]": ()=>setDeportes([])
                }["CompetenciasPage[useEffect() > (anonymous)()]"]);
                fetch("http://localhost:4000/equipos").then(_CompetenciasPageUseEffectAnonymous4).then({
                    "CompetenciasPage[useEffect() > (anonymous)()]": (data_2)=>setEquipos(Array.isArray(data_2) ? data_2 : [])
                }["CompetenciasPage[useEffect() > (anonymous)()]"]).catch({
                    "CompetenciasPage[useEffect() > (anonymous)()]": ()=>setEquipos([])
                }["CompetenciasPage[useEffect() > (anonymous)()]"]);
            }
        })["CompetenciasPage[useEffect()]"];
        t8 = [];
        $[11] = t7;
        $[12] = t8;
    } else {
        t7 = $[11];
        t8 = $[12];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t7, t8);
    let t9;
    if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = ({
            "CompetenciasPage[onChangeBusqueda]": (event)=>{
                setBusqueda(event.target.value);
            }
        })["CompetenciasPage[onChangeBusqueda]"];
        $[13] = t9;
    } else {
        t9 = $[13];
    }
    const onChangeBusqueda = t9;
    let t10;
    if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = ({
            "CompetenciasPage[onChangeDeporte]": (event_0)=>{
                setFiltroDeporte(event_0.target.value);
            }
        })["CompetenciasPage[onChangeDeporte]"];
        $[14] = t10;
    } else {
        t10 = $[14];
    }
    const onChangeDeporte = t10;
    let t11;
    if ($[15] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = ({
            "CompetenciasPage[onChangeTipo]": (event_1)=>{
                setFiltroTipo(event_1.target.value);
            }
        })["CompetenciasPage[onChangeTipo]"];
        $[15] = t11;
    } else {
        t11 = $[15];
    }
    const onChangeTipo = t11;
    let t12;
    if ($[16] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = ({
            "CompetenciasPage[onChangeOrden]": (event_2)=>{
                setOrden(event_2.target.value);
            }
        })["CompetenciasPage[onChangeOrden]"];
        $[16] = t12;
    } else {
        t12 = $[16];
    }
    const onChangeOrden = t12;
    let t13;
    if ($[17] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = ({
            "CompetenciasPage[limpiarFiltros]": ()=>{
                setBusqueda("");
                setFiltroDeporte("todos");
                setFiltroTipo("todos");
                setOrden("az");
            }
        })["CompetenciasPage[limpiarFiltros]"];
        $[17] = t13;
    } else {
        t13 = $[17];
    }
    const limpiarFiltros = t13;
    let t14;
    if ($[18] !== deportes) {
        t14 = ({
            "CompetenciasPage[nombreDeporte]": (idDeporte)=>{
                const deporte = deportes.find({
                    "CompetenciasPage[nombreDeporte > deportes.find()]": (d)=>d.id_deporte === idDeporte
                }["CompetenciasPage[nombreDeporte > deportes.find()]"]);
                return deporte ? deporte.nombre : "Sin deporte";
            }
        })["CompetenciasPage[nombreDeporte]"];
        $[18] = deportes;
        $[19] = t14;
    } else {
        t14 = $[19];
    }
    const nombreDeporte = t14;
    let t15;
    if ($[20] !== equipos) {
        t15 = ({
            "CompetenciasPage[nombreEquipo]": (idEquipo)=>{
                const equipo = equipos.find({
                    "CompetenciasPage[nombreEquipo > equipos.find()]": (e)=>e.id_equipo === idEquipo
                }["CompetenciasPage[nombreEquipo > equipos.find()]"]);
                return equipo ? equipo.nombre : null;
            }
        })["CompetenciasPage[nombreEquipo]"];
        $[20] = equipos;
        $[21] = t15;
    } else {
        t15 = $[21];
    }
    const nombreEquipo = t15;
    const convertirFecha = _CompetenciasPageConvertirFecha;
    let t16;
    if ($[22] !== eventos) {
        t16 = ({
            "CompetenciasPage[fechaCompetencia]": (competencia)=>{
                if (competencia.fecha_inicio) {
                    return convertirFecha(competencia.fecha_inicio);
                }
                const fechas = eventos.filter({
                    "CompetenciasPage[fechaCompetencia > eventos.filter()]": (evento)=>evento.id_competencia === competencia.id_competencia
                }["CompetenciasPage[fechaCompetencia > eventos.filter()]"]).map({
                    "CompetenciasPage[fechaCompetencia > (anonymous)()]": (evento_0)=>convertirFecha(evento_0.fecha)
                }["CompetenciasPage[fechaCompetencia > (anonymous)()]"]).filter(_CompetenciasPageFechaCompetenciaAnonymous).sort(_CompetenciasPageFechaCompetenciaAnonymous2);
                return fechas.length > 0 ? fechas[0] : null;
            }
        })["CompetenciasPage[fechaCompetencia]"];
        $[22] = eventos;
        $[23] = t16;
    } else {
        t16 = $[23];
    }
    const fechaCompetencia = t16;
    let t17;
    if ($[24] !== nombreEquipo) {
        t17 = ({
            "CompetenciasPage[nombreEvento]": (evento_1, competencia_0)=>{
                const local = nombreEquipo(evento_1.id_equipo_local);
                const visitante = nombreEquipo(evento_1.id_equipo_visitante);
                if (local && visitante) {
                    return `${local} vs ${visitante}`;
                }
                return competencia_0 ? competencia_0.nombre : `Evento ${evento_1.id_evento}`;
            }
        })["CompetenciasPage[nombreEvento]"];
        $[24] = nombreEquipo;
        $[25] = t17;
    } else {
        t17 = $[25];
    }
    const nombreEvento = t17;
    let hoy;
    let t18;
    if ($[26] === Symbol.for("react.memo_cache_sentinel")) {
        hoy = new Date();
        hoy.setHours(0, 0, 0, 0);
        t18 = ({
            "CompetenciasPage[calcularEstado]": (tipo, fecha_1)=>{
                if (!fecha_1) {
                    return {
                        texto: "Sin fecha",
                        proximo: false
                    };
                }
                if (fecha_1 >= hoy) {
                    return {
                        texto: tipo === "Competencia" ? "Pr\xF3xima competencia" : "Pr\xF3ximo evento",
                        proximo: true
                    };
                }
                return {
                    texto: tipo === "Competencia" ? "Finalizada" : "Finalizado",
                    proximo: false
                };
            }
        })["CompetenciasPage[calcularEstado]"];
        $[26] = hoy;
        $[27] = t18;
    } else {
        hoy = $[26];
        t18 = $[27];
    }
    const calcularEstado = t18;
    let t19;
    let t20;
    let t21;
    let t22;
    let t23;
    let t24;
    let t25;
    if ($[28] !== busqueda || $[29] !== competencias || $[30] !== deportes || $[31] !== eventos || $[32] !== fechaCompetencia || $[33] !== filtroDeporte || $[34] !== filtroTipo || $[35] !== nombreDeporte || $[36] !== nombreEvento || $[37] !== orden || $[38] !== params || $[39] !== router) {
        const itemsCompetencias = competencias.map({
            "CompetenciasPage[competencias.map()]": (competencia_1)=>({
                    clave: `c-${competencia_1.id_competencia}`,
                    tipo: "Competencia",
                    nombre: competencia_1.nombre,
                    idDeporte: competencia_1.id_deporte,
                    fecha: fechaCompetencia(competencia_1),
                    ruta: `/home/competencias/${competencia_1.id_competencia}`
                })
        }["CompetenciasPage[competencias.map()]"]);
        const itemsEventos = eventos.map({
            "CompetenciasPage[eventos.map()]": (evento_2)=>{
                const competencia_2 = competencias.find({
                    "CompetenciasPage[eventos.map() > competencias.find()]": (c)=>c.id_competencia === evento_2.id_competencia
                }["CompetenciasPage[eventos.map() > competencias.find()]"]);
                return {
                    clave: `e-${evento_2.id_evento}`,
                    tipo: "Evento",
                    nombre: nombreEvento(evento_2, competencia_2),
                    idDeporte: competencia_2 ? competencia_2.id_deporte : null,
                    fecha: convertirFecha(evento_2.fecha),
                    ruta: `/home/eventos/${evento_2.id_evento}`
                };
            }
        }["CompetenciasPage[eventos.map()]"]);
        const items = [
            ...itemsCompetencias,
            ...itemsEventos
        ];
        let t26;
        if ($[47] !== params || $[48] !== router) {
            t26 = ({
                "CompetenciasPage[verDetalle]": (ruta)=>{
                    router.push(`${ruta}?${params}`);
                }
            })["CompetenciasPage[verDetalle]"];
            $[47] = params;
            $[48] = router;
            $[49] = t26;
        } else {
            t26 = $[49];
        }
        const verDetalle = t26;
        const texto_0 = busqueda.toLowerCase();
        const itemsFiltrados = items.filter({
            "CompetenciasPage[items.filter()]": (item)=>{
                const coincideTexto = item.nombre.toLowerCase().includes(texto_0) || nombreDeporte(item.idDeporte).toLowerCase().includes(texto_0);
                const coincideDeporte = filtroDeporte === "todos" || String(item.idDeporte) === filtroDeporte;
                const coincideTipo = filtroTipo === "todos" || item.tipo.toLowerCase() === filtroTipo;
                return coincideTexto && coincideDeporte && coincideTipo;
            }
        }["CompetenciasPage[items.filter()]"]);
        let t27;
        if ($[50] !== orden) {
            t27 = ({
                "CompetenciasPage[(anonymous)()]": (a_0, b_0)=>{
                    if (orden === "az") {
                        return a_0.nombre.localeCompare(b_0.nombre);
                    }
                    if (orden === "za") {
                        return b_0.nombre.localeCompare(a_0.nombre);
                    }
                    if (!a_0.fecha && !b_0.fecha) {
                        return 0;
                    }
                    if (!a_0.fecha) {
                        return 1;
                    }
                    if (!b_0.fecha) {
                        return -1;
                    }
                    const aProxima = a_0.fecha >= hoy;
                    const bProxima = b_0.fecha >= hoy;
                    if (aProxima && !bProxima) {
                        return -1;
                    }
                    if (!aProxima && bProxima) {
                        return 1;
                    }
                    return aProxima ? a_0.fecha - b_0.fecha : b_0.fecha - a_0.fecha;
                }
            })["CompetenciasPage[(anonymous)()]"];
            $[50] = orden;
            $[51] = t27;
        } else {
            t27 = $[51];
        }
        const itemsOrdenados = [
            ...itemsFiltrados
        ].sort(t27);
        const hayFiltros = busqueda !== "" || filtroDeporte !== "todos" || filtroTipo !== "todos";
        t19 = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$home$2f$competencias$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].contenedor;
        if ($[52] === Symbol.for("react.memo_cache_sentinel")) {
            t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$home$2f$competencias$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].etiqueta,
                children: "EXPLORAR / PIOZONE"
            }, void 0, false, {
                fileName: "[project]/src/app/home/competencias/page.js",
                lineNumber: 382,
                columnNumber: 13
            }, this);
            t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$home$2f$competencias$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].titulo,
                children: "Competencias y eventos"
            }, void 0, false, {
                fileName: "[project]/src/app/home/competencias/page.js",
                lineNumber: 383,
                columnNumber: 13
            }, this);
            t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$home$2f$competencias$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].descripcion,
                children: "Consultá competencias y eventos, ordenados y etiquetados por deporte y fecha."
            }, void 0, false, {
                fileName: "[project]/src/app/home/competencias/page.js",
                lineNumber: 384,
                columnNumber: 13
            }, this);
            $[52] = t20;
            $[53] = t21;
            $[54] = t22;
        } else {
            t20 = $[52];
            t21 = $[53];
            t22 = $[54];
        }
        let t28;
        if ($[55] === Symbol.for("react.memo_cache_sentinel")) {
            t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$home$2f$competencias$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].filtrosTitulo,
                children: "Filtrar y ordenar"
            }, void 0, false, {
                fileName: "[project]/src/app/home/competencias/page.js",
                lineNumber: 395,
                columnNumber: 13
            }, this);
            $[55] = t28;
        } else {
            t28 = $[55];
        }
        let t29;
        if ($[56] === Symbol.for("react.memo_cache_sentinel")) {
            t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$home$2f$competencias$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].labelCampo,
                children: "Buscar en esta sección"
            }, void 0, false, {
                fileName: "[project]/src/app/home/competencias/page.js",
                lineNumber: 402,
                columnNumber: 13
            }, this);
            $[56] = t29;
        } else {
            t29 = $[56];
        }
        let t30;
        if ($[57] !== busqueda) {
            t30 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$home$2f$competencias$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].campo,
                children: [
                    t29,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Input$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        onChange: onChangeBusqueda,
                        placeholder: "Nombre o referencia",
                        value: busqueda,
                        type: "text"
                    }, void 0, false, {
                        fileName: "[project]/src/app/home/competencias/page.js",
                        lineNumber: 409,
                        columnNumber: 48
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/home/competencias/page.js",
                lineNumber: 409,
                columnNumber: 13
            }, this);
            $[57] = busqueda;
            $[58] = t30;
        } else {
            t30 = $[58];
        }
        let t31;
        if ($[59] === Symbol.for("react.memo_cache_sentinel")) {
            t31 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$home$2f$competencias$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].labelCampo,
                children: "Deporte"
            }, void 0, false, {
                fileName: "[project]/src/app/home/competencias/page.js",
                lineNumber: 417,
                columnNumber: 13
            }, this);
            $[59] = t31;
        } else {
            t31 = $[59];
        }
        let t32;
        if ($[60] === Symbol.for("react.memo_cache_sentinel")) {
            t32 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                value: "todos",
                children: "Todos"
            }, void 0, false, {
                fileName: "[project]/src/app/home/competencias/page.js",
                lineNumber: 424,
                columnNumber: 13
            }, this);
            $[60] = t32;
        } else {
            t32 = $[60];
        }
        let t33;
        if ($[61] !== deportes) {
            t33 = deportes.map(_CompetenciasPageDeportesMap);
            $[61] = deportes;
            $[62] = t33;
        } else {
            t33 = $[62];
        }
        let t34;
        if ($[63] !== filtroDeporte || $[64] !== t33) {
            t34 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$home$2f$competencias$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].campo,
                children: [
                    t31,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$home$2f$competencias$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].select,
                        value: filtroDeporte,
                        onChange: onChangeDeporte,
                        children: [
                            t32,
                            t33
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/home/competencias/page.js",
                        lineNumber: 439,
                        columnNumber: 48
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/home/competencias/page.js",
                lineNumber: 439,
                columnNumber: 13
            }, this);
            $[63] = filtroDeporte;
            $[64] = t33;
            $[65] = t34;
        } else {
            t34 = $[65];
        }
        let t35;
        if ($[66] === Symbol.for("react.memo_cache_sentinel")) {
            t35 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$home$2f$competencias$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].labelCampo,
                children: "Tipo"
            }, void 0, false, {
                fileName: "[project]/src/app/home/competencias/page.js",
                lineNumber: 448,
                columnNumber: 13
            }, this);
            $[66] = t35;
        } else {
            t35 = $[66];
        }
        let t36;
        let t37;
        let t38;
        if ($[67] === Symbol.for("react.memo_cache_sentinel")) {
            t36 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                value: "todos",
                children: "Todos"
            }, void 0, false, {
                fileName: "[project]/src/app/home/competencias/page.js",
                lineNumber: 457,
                columnNumber: 13
            }, this);
            t37 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                value: "competencia",
                children: "Competencias"
            }, void 0, false, {
                fileName: "[project]/src/app/home/competencias/page.js",
                lineNumber: 458,
                columnNumber: 13
            }, this);
            t38 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                value: "evento",
                children: "Eventos"
            }, void 0, false, {
                fileName: "[project]/src/app/home/competencias/page.js",
                lineNumber: 459,
                columnNumber: 13
            }, this);
            $[67] = t36;
            $[68] = t37;
            $[69] = t38;
        } else {
            t36 = $[67];
            t37 = $[68];
            t38 = $[69];
        }
        let t39;
        if ($[70] !== filtroTipo) {
            t39 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$home$2f$competencias$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].campo,
                children: [
                    t35,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$home$2f$competencias$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].select,
                        value: filtroTipo,
                        onChange: onChangeTipo,
                        children: [
                            t36,
                            t37,
                            t38
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/home/competencias/page.js",
                        lineNumber: 470,
                        columnNumber: 48
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/home/competencias/page.js",
                lineNumber: 470,
                columnNumber: 13
            }, this);
            $[70] = filtroTipo;
            $[71] = t39;
        } else {
            t39 = $[71];
        }
        let t40;
        if ($[72] === Symbol.for("react.memo_cache_sentinel")) {
            t40 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$home$2f$competencias$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].labelCampo,
                children: "Ordenar por"
            }, void 0, false, {
                fileName: "[project]/src/app/home/competencias/page.js",
                lineNumber: 478,
                columnNumber: 13
            }, this);
            $[72] = t40;
        } else {
            t40 = $[72];
        }
        let t41;
        let t42;
        let t43;
        if ($[73] === Symbol.for("react.memo_cache_sentinel")) {
            t41 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                value: "az",
                children: "Nombre A–Z"
            }, void 0, false, {
                fileName: "[project]/src/app/home/competencias/page.js",
                lineNumber: 487,
                columnNumber: 13
            }, this);
            t42 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                value: "za",
                children: "Nombre Z–A"
            }, void 0, false, {
                fileName: "[project]/src/app/home/competencias/page.js",
                lineNumber: 488,
                columnNumber: 13
            }, this);
            t43 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                value: "fecha",
                children: "Fecha"
            }, void 0, false, {
                fileName: "[project]/src/app/home/competencias/page.js",
                lineNumber: 489,
                columnNumber: 13
            }, this);
            $[73] = t41;
            $[74] = t42;
            $[75] = t43;
        } else {
            t41 = $[73];
            t42 = $[74];
            t43 = $[75];
        }
        let t44;
        if ($[76] !== orden) {
            t44 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$home$2f$competencias$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].campo,
                children: [
                    t40,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$home$2f$competencias$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].select,
                        value: orden,
                        onChange: onChangeOrden,
                        children: [
                            t41,
                            t42,
                            t43
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/home/competencias/page.js",
                        lineNumber: 500,
                        columnNumber: 48
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/home/competencias/page.js",
                lineNumber: 500,
                columnNumber: 13
            }, this);
            $[76] = orden;
            $[77] = t44;
        } else {
            t44 = $[77];
        }
        let t45;
        if ($[78] !== t30 || $[79] !== t34 || $[80] !== t39 || $[81] !== t44) {
            t45 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$home$2f$competencias$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].campos,
                children: [
                    t30,
                    t34,
                    t39,
                    t44
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/home/competencias/page.js",
                lineNumber: 508,
                columnNumber: 13
            }, this);
            $[78] = t30;
            $[79] = t34;
            $[80] = t39;
            $[81] = t44;
            $[82] = t45;
        } else {
            t45 = $[82];
        }
        let t46;
        if ($[83] === Symbol.for("react.memo_cache_sentinel")) {
            t46 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$home$2f$competencias$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].limpiar,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    onClick: limpiarFiltros,
                    children: "Limpiar filtros"
                }, void 0, false, {
                    fileName: "[project]/src/app/home/competencias/page.js",
                    lineNumber: 519,
                    columnNumber: 45
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/home/competencias/page.js",
                lineNumber: 519,
                columnNumber: 13
            }, this);
            $[83] = t46;
        } else {
            t46 = $[83];
        }
        if ($[84] !== t45) {
            t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$home$2f$competencias$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].filtros,
                children: [
                    t28,
                    t45,
                    t46
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/home/competencias/page.js",
                lineNumber: 525,
                columnNumber: 13
            }, this);
            $[84] = t45;
            $[85] = t23;
        } else {
            t23 = $[85];
        }
        let t47;
        if ($[86] !== busqueda || $[87] !== filtroDeporte || $[88] !== filtroTipo || $[89] !== hayFiltros || $[90] !== nombreDeporte) {
            t47 = hayFiltros && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$home$2f$competencias$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].chips,
                children: [
                    busqueda !== "" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$home$2f$competencias$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].chip,
                        children: [
                            "“",
                            busqueda,
                            "”"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/home/competencias/page.js",
                        lineNumber: 533,
                        columnNumber: 77
                    }, this),
                    filtroDeporte !== "todos" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$home$2f$competencias$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].chip,
                        children: nombreDeporte(Number(filtroDeporte))
                    }, void 0, false, {
                        fileName: "[project]/src/app/home/competencias/page.js",
                        lineNumber: 533,
                        columnNumber: 157
                    }, this),
                    filtroTipo !== "todos" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$home$2f$competencias$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].chip,
                        children: filtroTipo === "competencia" ? "Competencias" : "Eventos"
                    }, void 0, false, {
                        fileName: "[project]/src/app/home/competencias/page.js",
                        lineNumber: 533,
                        columnNumber: 260
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/home/competencias/page.js",
                lineNumber: 533,
                columnNumber: 27
            }, this);
            $[86] = busqueda;
            $[87] = filtroDeporte;
            $[88] = filtroTipo;
            $[89] = hayFiltros;
            $[90] = nombreDeporte;
            $[91] = t47;
        } else {
            t47 = $[91];
        }
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$home$2f$competencias$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].barraResultados,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$home$2f$competencias$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].resultados,
                    children: [
                        itemsOrdenados.length,
                        " ",
                        itemsOrdenados.length === 1 ? "resultado" : "resultados"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/home/competencias/page.js",
                    lineNumber: 543,
                    columnNumber: 51
                }, this),
                t47
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/home/competencias/page.js",
            lineNumber: 543,
            columnNumber: 11
        }, this);
        t25 = itemsOrdenados.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$home$2f$competencias$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].vacio,
            children: "No se encontraron competencias ni eventos con ese criterio."
        }, void 0, false, {
            fileName: "[project]/src/app/home/competencias/page.js",
            lineNumber: 544,
            columnNumber: 41
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$home$2f$competencias$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].grilla,
            children: itemsOrdenados.map({
                "CompetenciasPage[itemsOrdenados.map()]": (item_0)=>{
                    const estado = calcularEstado(item_0.tipo, item_0.fecha);
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CardCompetencia$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        tipo: item_0.tipo,
                        nombre: item_0.nombre,
                        deporte: nombreDeporte(item_0.idDeporte),
                        fecha: item_0.fecha,
                        estado: estado.texto,
                        proximo: estado.proximo,
                        onClick: {
                            "CompetenciasPage[itemsOrdenados.map() > <CardCompetencia>.onClick]": ()=>verDetalle(item_0.ruta)
                        }["CompetenciasPage[itemsOrdenados.map() > <CardCompetencia>.onClick]"]
                    }, item_0.clave, false, {
                        fileName: "[project]/src/app/home/competencias/page.js",
                        lineNumber: 547,
                        columnNumber: 18
                    }, this);
                }
            }["CompetenciasPage[itemsOrdenados.map()]"])
        }, void 0, false, {
            fileName: "[project]/src/app/home/competencias/page.js",
            lineNumber: 544,
            columnNumber: 139
        }, this);
        $[28] = busqueda;
        $[29] = competencias;
        $[30] = deportes;
        $[31] = eventos;
        $[32] = fechaCompetencia;
        $[33] = filtroDeporte;
        $[34] = filtroTipo;
        $[35] = nombreDeporte;
        $[36] = nombreEvento;
        $[37] = orden;
        $[38] = params;
        $[39] = router;
        $[40] = t19;
        $[41] = t20;
        $[42] = t21;
        $[43] = t22;
        $[44] = t23;
        $[45] = t24;
        $[46] = t25;
    } else {
        t19 = $[40];
        t20 = $[41];
        t21 = $[42];
        t22 = $[43];
        t23 = $[44];
        t24 = $[45];
        t25 = $[46];
    }
    let t26;
    if ($[92] === Symbol.for("react.memo_cache_sentinel")) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$home$2f$competencias$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].guia,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$home$2f$competencias$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].guiaTitulo,
                    children: "Guía rápida"
                }, void 0, false, {
                    fileName: "[project]/src/app/home/competencias/page.js",
                    lineNumber: 582,
                    columnNumber: 40
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$home$2f$competencias$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].guiaTexto,
                    children: "Usá la navegación o las fichas para abrir secciones y detalles. Filtrá por deporte o tipo, ordená por fecha para ver lo próximo primero y seguí las relaciones entre competencias, eventos y equipos."
                }, void 0, false, {
                    fileName: "[project]/src/app/home/competencias/page.js",
                    lineNumber: 582,
                    columnNumber: 90
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/home/competencias/page.js",
            lineNumber: 582,
            columnNumber: 11
        }, this);
        $[92] = t26;
    } else {
        t26 = $[92];
    }
    let t27;
    if ($[93] !== t19 || $[94] !== t20 || $[95] !== t21 || $[96] !== t22 || $[97] !== t23 || $[98] !== t24 || $[99] !== t25) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t19,
            children: [
                t20,
                t21,
                t22,
                t23,
                t24,
                t25,
                t26
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/home/competencias/page.js",
            lineNumber: 589,
            columnNumber: 11
        }, this);
        $[93] = t19;
        $[94] = t20;
        $[95] = t21;
        $[96] = t22;
        $[97] = t23;
        $[98] = t24;
        $[99] = t25;
        $[100] = t27;
    } else {
        t27 = $[100];
    }
    return t27;
}
_s(CompetenciasPage, "ttofh0iTzRkh39aic8QkfhNdw80=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"]
    ];
});
_c = CompetenciasPage;
function _CompetenciasPageDeportesMap(deporte_0) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
        value: String(deporte_0.id_deporte),
        children: deporte_0.nombre
    }, deporte_0.id_deporte, false, {
        fileName: "[project]/src/app/home/competencias/page.js",
        lineNumber: 604,
        columnNumber: 10
    }, this);
}
function _CompetenciasPageFechaCompetenciaAnonymous2(a, b) {
    return a - b;
}
function _CompetenciasPageFechaCompetenciaAnonymous(fecha_0) {
    return fecha_0 !== null;
}
function _CompetenciasPageConvertirFecha(valor) {
    if (!valor) {
        return null;
    }
    const texto = String(valor).length === 10 ? `${valor}T00:00:00` : valor;
    const fecha = new Date(texto);
    return isNaN(fecha.getTime()) ? null : fecha;
}
function _CompetenciasPageUseEffectAnonymous4(response_2) {
    return response_2.json();
}
function _CompetenciasPageUseEffectAnonymous3(response_1) {
    return response_1.json();
}
function _CompetenciasPageUseEffectAnonymous2(response_0) {
    return response_0.json();
}
function _CompetenciasPageUseEffectAnonymous(response) {
    return response.json();
}
var _c;
__turbopack_context__.k.register(_c, "CompetenciasPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/home/competencias/page.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "barraResultados": "page-module__ptRn3G__barraResultados",
  "campo": "page-module__ptRn3G__campo",
  "campos": "page-module__ptRn3G__campos",
  "chip": "page-module__ptRn3G__chip",
  "chips": "page-module__ptRn3G__chips",
  "contenedor": "page-module__ptRn3G__contenedor",
  "descripcion": "page-module__ptRn3G__descripcion",
  "etiqueta": "page-module__ptRn3G__etiqueta",
  "filtros": "page-module__ptRn3G__filtros",
  "filtrosTitulo": "page-module__ptRn3G__filtrosTitulo",
  "grilla": "page-module__ptRn3G__grilla",
  "guia": "page-module__ptRn3G__guia",
  "guiaTexto": "page-module__ptRn3G__guiaTexto",
  "guiaTitulo": "page-module__ptRn3G__guiaTitulo",
  "labelCampo": "page-module__ptRn3G__labelCampo",
  "limpiar": "page-module__ptRn3G__limpiar",
  "resultados": "page-module__ptRn3G__resultados",
  "select": "page-module__ptRn3G__select",
  "titulo": "page-module__ptRn3G__titulo",
  "vacio": "page-module__ptRn3G__vacio",
});
}),
"[project]/src/components/CardCompetencia.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CardCompetencia
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CardCompetencia$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/CardCompetencia.module.css [app-client] (css module)");
"use client";
;
;
;
function CardCompetencia(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(37);
    if ($[0] !== "5b3a0778ffb6ac769c9c9797414bd1f5a76dbbd562420486f1d11b473468b90f") {
        for(let $i = 0; $i < 37; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "5b3a0778ffb6ac769c9c9797414bd1f5a76dbbd562420486f1d11b473468b90f";
    }
    const { tipo, nombre, deporte, fecha, estado, proximo, onClick } = t0;
    let t1;
    if ($[1] !== fecha) {
        t1 = fecha ? fecha.getDate() : "--";
        $[1] = fecha;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const dia = t1;
    let t2;
    if ($[3] !== fecha) {
        t2 = fecha ? fecha.toLocaleDateString("es-AR", {
            month: "short"
        }).replace(".", "") : "s/f";
        $[3] = fecha;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    const mes = t2;
    let t3;
    if ($[5] !== fecha) {
        t3 = fecha ? fecha.toLocaleDateString("es-AR", {
            day: "numeric",
            month: "long",
            year: "numeric"
        }) : "Sin fecha";
        $[5] = fecha;
        $[6] = t3;
    } else {
        t3 = $[6];
    }
    const fechaTexto = t3;
    let t4;
    if ($[7] !== tipo) {
        t4 = tipo.toUpperCase();
        $[7] = tipo;
        $[8] = t4;
    } else {
        t4 = $[8];
    }
    let t5;
    if ($[9] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CardCompetencia$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].etiqueta,
            children: [
                t4,
                " · PIOZONE"
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/CardCompetencia.js",
            lineNumber: 65,
            columnNumber: 10
        }, this);
        $[9] = t4;
        $[10] = t5;
    } else {
        t5 = $[10];
    }
    let t6;
    if ($[11] !== dia) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CardCompetencia$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].dia,
            children: dia
        }, void 0, false, {
            fileName: "[project]/src/components/CardCompetencia.js",
            lineNumber: 73,
            columnNumber: 10
        }, this);
        $[11] = dia;
        $[12] = t6;
    } else {
        t6 = $[12];
    }
    let t7;
    if ($[13] !== mes) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CardCompetencia$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].mes,
            children: mes
        }, void 0, false, {
            fileName: "[project]/src/components/CardCompetencia.js",
            lineNumber: 81,
            columnNumber: 10
        }, this);
        $[13] = mes;
        $[14] = t7;
    } else {
        t7 = $[14];
    }
    let t8;
    if ($[15] !== t6 || $[16] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CardCompetencia$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].calendario,
            children: [
                t6,
                t7
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/CardCompetencia.js",
            lineNumber: 89,
            columnNumber: 10
        }, this);
        $[15] = t6;
        $[16] = t7;
        $[17] = t8;
    } else {
        t8 = $[17];
    }
    let t9;
    if ($[18] !== t5 || $[19] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CardCompetencia$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cabecera,
            children: [
                t5,
                t8
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/CardCompetencia.js",
            lineNumber: 98,
            columnNumber: 10
        }, this);
        $[18] = t5;
        $[19] = t8;
        $[20] = t9;
    } else {
        t9 = $[20];
    }
    let t10;
    if ($[21] !== nombre) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CardCompetencia$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].titulo,
            children: nombre
        }, void 0, false, {
            fileName: "[project]/src/components/CardCompetencia.js",
            lineNumber: 107,
            columnNumber: 11
        }, this);
        $[21] = nombre;
        $[22] = t10;
    } else {
        t10 = $[22];
    }
    let t11;
    if ($[23] !== deporte || $[24] !== fechaTexto) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CardCompetencia$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].relacion,
            children: [
                deporte,
                " · ",
                fechaTexto
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/CardCompetencia.js",
            lineNumber: 115,
            columnNumber: 11
        }, this);
        $[23] = deporte;
        $[24] = fechaTexto;
        $[25] = t11;
    } else {
        t11 = $[25];
    }
    const t12 = proximo ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CardCompetencia$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].estadoProximo : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CardCompetencia$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].estado;
    let t13;
    if ($[26] !== estado || $[27] !== t12) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: t12,
            children: estado
        }, void 0, false, {
            fileName: "[project]/src/components/CardCompetencia.js",
            lineNumber: 125,
            columnNumber: 11
        }, this);
        $[26] = estado;
        $[27] = t12;
        $[28] = t13;
    } else {
        t13 = $[28];
    }
    let t14;
    if ($[29] !== onClick) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CardCompetencia$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].abrir,
            onClick: onClick,
            children: "Ver detalle →"
        }, void 0, false, {
            fileName: "[project]/src/components/CardCompetencia.js",
            lineNumber: 134,
            columnNumber: 11
        }, this);
        $[29] = onClick;
        $[30] = t14;
    } else {
        t14 = $[30];
    }
    let t15;
    if ($[31] !== t10 || $[32] !== t11 || $[33] !== t13 || $[34] !== t14 || $[35] !== t9) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CardCompetencia$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].card,
            children: [
                t9,
                t10,
                t11,
                t13,
                t14
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/CardCompetencia.js",
            lineNumber: 142,
            columnNumber: 11
        }, this);
        $[31] = t10;
        $[32] = t11;
        $[33] = t13;
        $[34] = t14;
        $[35] = t9;
        $[36] = t15;
    } else {
        t15 = $[36];
    }
    return t15;
}
_c = CardCompetencia;
var _c;
__turbopack_context__.k.register(_c, "CardCompetencia");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/CardCompetencia.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "abrir": "CardCompetencia-module__989HZW__abrir",
  "cabecera": "CardCompetencia-module__989HZW__cabecera",
  "calendario": "CardCompetencia-module__989HZW__calendario",
  "card": "CardCompetencia-module__989HZW__card",
  "dia": "CardCompetencia-module__989HZW__dia",
  "estado": "CardCompetencia-module__989HZW__estado",
  "estadoProximo": "CardCompetencia-module__989HZW__estadoProximo",
  "etiqueta": "CardCompetencia-module__989HZW__etiqueta",
  "mes": "CardCompetencia-module__989HZW__mes",
  "relacion": "CardCompetencia-module__989HZW__relacion",
  "titulo": "CardCompetencia-module__989HZW__titulo",
});
}),
]);

//# sourceMappingURL=src_1d0liz2f9n4y_._.js.map