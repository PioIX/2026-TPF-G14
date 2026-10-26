"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import styles from "./admin.module.css";

const API_URL = "http://localhost:4000";

const CONFIG = {
  equipos: {
    label: "Equipos",
    endpoint: "/equipos",
    id: "id_equipo",
    empty: { nombre: "", escudo: "", id_deporte: "", id_competencia: "" },
    fields: [
      { name: "nombre", label: "Nombre del equipo", required: true },
      { name: "escudo", label: "URL del escudo", placeholder: "https://..." },
      { name: "id_deporte", label: "Deporte", type: "select", source: "deportes", value: "id_deporte", text: "nombre", required: true },
      { name: "id_competencia", label: "Torneo", type: "select", source: "competencias", value: "id_competencia", text: "nombre", required: true },
    ],
    columns: [
      { key: "id_equipo", label: "ID" },
      { key: "nombre", label: "Equipo" },
      { key: "id_deporte", label: "ID deporte" },
      { key: "id_competencia", label: "ID torneo" },
    ],
  },
  jugadores: {
    label: "Jugadores",
    endpoint: "/jugadores",
    id: "id_jugador",
    empty: { nombre: "", apellido: "", posicion: "", foto: "", id_equipo: "" },
    fields: [
      { name: "nombre", label: "Nombre", required: true },
      { name: "apellido", label: "Apellido", required: true },
      { name: "posicion", label: "Posición", required: true },
      { name: "foto", label: "URL de la foto", placeholder: "https://..." },
      { name: "id_equipo", label: "Equipo", type: "select", source: "equipos", value: "id_equipo", text: "nombre", required: true },
    ],
    columns: [
      { key: "id_jugador", label: "ID" },
      { key: "nombre", label: "Nombre" },
      { key: "apellido", label: "Apellido" },
      { key: "posicion", label: "Posición" },
      { key: "id_equipo", label: "ID equipo" },
    ],
  },
  competencias: {
    label: "Torneos",
    endpoint: "/competencias",
    id: "id_competencia",
    empty: { nombre: "", tipo: "", id_deporte: "" },
    fields: [
      { name: "nombre", label: "Nombre del torneo", required: true },
      { name: "tipo", label: "Tipo", required: true, placeholder: "Ej.: Liga, Copa, Amistoso" },
      { name: "id_deporte", label: "Deporte", type: "select", source: "deportes", value: "id_deporte", text: "nombre", required: true },
    ],
    columns: [
      { key: "id_competencia", label: "ID" },
      { key: "nombre", label: "Torneo" },
      { key: "tipo", label: "Tipo" },
      { key: "id_deporte", label: "ID deporte" },
    ],
  },
};

const SOURCES = ["deportes", "equipos", "competencias"];
const SINGULAR = { equipos: "equipo", jugadores: "jugador", competencias: "torneo" };

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState("equipos");
  const [data, setData] = useState({ equipos: [], jugadores: [], competencias: [], deportes: [] });
  const [form, setForm] = useState(CONFIG.equipos.empty);
  const [editingId, setEditingId] = useState(null);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [notice, setNotice] = useState("");

  const loadData = useCallback(async () => {
    setLoading(true);
    setError("");
    try {
      const entries = await Promise.all(
        [...SOURCES, "jugadores"].map(async (key) => {
          const response = await fetch(`${API_URL}/${key}`, { credentials: "include" });
          const result = await response.json().catch(() => []);
          if (!response.ok) throw new Error(result.error || `No se pudo cargar ${key}.`);
          if (!Array.isArray(result)) throw new Error(result.error || `La respuesta de ${key} no es una lista.`);
          return [key, result];
        })
      );
      setData(Object.fromEntries(entries));
    } catch (err) {
      setError(`No se pudieron cargar los datos. Verificá que el backend esté activo en ${API_URL}. ${err.message}`);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { loadData(); }, [loadData]);

  useEffect(() => {
    setForm({ ...CONFIG[activeTab].empty });
    setEditingId(null);
    setSearch("");
    setNotice("");
  }, [activeTab]);

  const config = CONFIG[activeTab];
  const filteredRows = useMemo(() => {
    const rows = data[activeTab] || [];
    const term = search.trim().toLocaleLowerCase();
    if (!term) return rows;
    return rows.filter((row) => Object.values(row).some((value) => String(value ?? "").toLocaleLowerCase().includes(term)));
  }, [data, activeTab, search]);

  function startEdit(row) {
    const nextForm = {};
    for (const key of Object.keys(config.empty)) nextForm[key] = row[key] == null ? "" : String(row[key]);
    setForm(nextForm);
    setEditingId(row[config.id]);
    setNotice("");
    setError("");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function cancelEdit() {
    setForm({ ...config.empty });
    setEditingId(null);
    setError("");
    setNotice("");
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setSaving(true);
    setError("");
    setNotice("");

    const payload = { ...form };
    for (const key of Object.keys(payload)) {
      if (payload[key] === "" && ["id_deporte", "id_competencia", "id_equipo"].includes(key)) payload[key] = null;
    }
    for (const key of ["id_deporte", "id_competencia", "id_equipo"]) {
      if (payload[key] !== undefined && payload[key] !== null) payload[key] = Number(payload[key]);
    }

    try {
      const url = editingId == null ? `${API_URL}${config.endpoint}` : `${API_URL}${config.endpoint}/${editingId}`;
      const response = await fetch(url, {
        method: editingId == null ? "POST" : "PUT",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(payload),
      });
      const result = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(result.error || "El servidor rechazó la operación.");
      setNotice(editingId == null ? `${SINGULAR[activeTab]} agregado correctamente.` : "Cambios guardados correctamente.");
      setForm({ ...config.empty });
      setEditingId(null);
      await loadData();
    } catch (err) {
      setError(`No se pudo guardar. ${err.message}`);
    } finally {
      setSaving(false);
    }
  }

  async function deleteRow(row) {
    const displayName = row.nombre || `${row.nombre || ""} ${row.apellido || ""}`.trim() || `registro #${row[config.id]}`;
    if (!window.confirm(`¿Seguro que querés eliminar “${displayName}”? Esta acción no se puede deshacer.`)) return;
    setError("");
    setNotice("");
    try {
      const response = await fetch(`${API_URL}${config.endpoint}/${row[config.id]}`, {
        method: "DELETE",
        credentials: "include",
      });
      const result = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(result.error || "El servidor rechazó la eliminación.");
      if (String(editingId) === String(row[config.id])) cancelEdit();
      setNotice("Registro eliminado correctamente.");
      await loadData();
    } catch (err) {
      setError(`No se pudo eliminar. ${err.message} Si tiene registros relacionados, revisá las relaciones de la base de datos. `);
    }
  }

  function getCellValue(row, key) {
    if (key === "id_deporte") return data.deportes.find((item) => String(item.id_deporte) === String(row[key]))?.nombre || row[key] || "—";
    if (key === "id_competencia") return data.competencias.find((item) => String(item.id_competencia) === String(row[key]))?.nombre || row[key] || "—";
    if (key === "id_equipo") return data.equipos.find((item) => String(item.id_equipo) === String(row[key]))?.nombre || row[key] || "—";
    return row[key] ?? "—";
  }

  return (
    <main className={styles.page}>
      <aside className={styles.sidebar}>
        <a className={styles.brand} href="/" aria-label="Volver al inicio"><span className={styles.brandIcon}>P</span><span>PioZone<small>ADMINISTRACIÓN</small></span></a>
        <p className={styles.sideLabel}>GESTIÓN</p>
        <nav className={styles.sideNav} aria-label="Secciones administrativas">
          {Object.entries(CONFIG).map(([key, item]) => (
            <button key={key} className={`${styles.sideLink} ${activeTab === key ? styles.sideLinkActive : ""}`} onClick={() => setActiveTab(key)}>
              <span className={styles.navSymbol}>{key === "equipos" ? "◈" : key === "jugadores" ? "♙" : "🏆"}</span>{item.label}
              <span className={styles.navCount}>{data[key]?.length ?? 0}</span>
            </button>
          ))}
        </nav>
        <div className={styles.sidebarBottom}><span className={styles.statusDot} /> API local · Puerto 4000</div>
      </aside>

      <section className={styles.content}>
        <header className={styles.topbar}><div><span className={styles.eyebrow}>PANEL DE CONTROL</span><h1>Administración</h1></div><a className={styles.backLink} href="/">← Volver al sitio</a></header>
        <div className={styles.intro}><div><h2>Gestionar {config.label.toLocaleLowerCase()}</h2><p>Creá, editá y mantené actualizada la información de PioZone.</p></div><div className={styles.total}><span>REGISTROS</span><strong>{data[activeTab]?.length ?? 0}</strong></div></div>

        {error && <div className={styles.alertError} role="alert">{error}</div>}
        {notice && <div className={styles.alertSuccess} role="status">{notice}</div>}

        <section className={styles.formCard}>
          <div className={styles.cardHeading}><div><span className={styles.sectionNumber}>{editingId == null ? "01" : "02"}</span><h3>{editingId == null ? `Agregar ${SINGULAR[activeTab]}` : `Editar registro #${editingId}`}</h3></div>{editingId != null && <button type="button" className={styles.cancelButton} onClick={cancelEdit}>Cancelar edición</button>}</div>
          <form onSubmit={handleSubmit} className={styles.formGrid}>
            {config.fields.map((field) => (
              <label className={styles.field} key={field.name}>
                <span>{field.label}{field.required && <b> *</b>}</span>
                {field.type === "select" ? (
                  <select required={field.required} value={form[field.name] ?? ""} onChange={(event) => setForm((current) => ({ ...current, [field.name]: event.target.value }))}>
                    <option value="">Seleccioná una opción</option>
                    {(data[field.source] || []).map((option) => <option key={option[field.value]} value={option[field.value]}>{option[field.value]} · {option[field.text]}</option>)}
                  </select>
                ) : (
                  <input required={field.required} value={form[field.name] ?? ""} placeholder={field.placeholder || "Ingresá un valor"} onChange={(event) => setForm((current) => ({ ...current, [field.name]: event.target.value }))} />
                )}
              </label>
            ))}
            <div className={styles.formActions}><span className={styles.requiredNote}>* Campos obligatorios</span><button className={styles.submitButton} disabled={saving || loading}>{saving ? "Guardando..." : editingId == null ? "+ Agregar registro" : "Guardar cambios"}</button></div>
          </form>
        </section>

        <section className={styles.tableCard}>
          <div className={styles.tableHeading}><div><span className={styles.sectionNumber}>03</span><h3>Listado de {config.label.toLocaleLowerCase()}</h3></div><button className={styles.refreshButton} onClick={loadData} disabled={loading}>↻ Actualizar</button></div>
          <div className={styles.tableTools}><label className={styles.searchBox}><span>⌕</span><input value={search} onChange={(event) => setSearch(event.target.value)} placeholder={`Buscar ${config.label.toLocaleLowerCase()}...`} /></label><span className={styles.resultCount}>{filteredRows.length} resultado(s)</span></div>
          {loading ? <div className={styles.emptyState}>Cargando datos...</div> : filteredRows.length === 0 ? <div className={styles.emptyState}>No hay registros para mostrar. Podés agregar uno desde el formulario.</div> : (
            <div className={styles.tableWrap}><table><thead><tr>{config.columns.map((column) => <th key={column.key}>{column.label}</th>)}<th className={styles.actionsHeader}>Acciones</th></tr></thead><tbody>
              {filteredRows.map((row) => <tr key={row[config.id]}>{config.columns.map((column) => <td key={column.key}>{getCellValue(row, column.key)}</td>)}<td><div className={styles.rowActions}><button className={styles.editButton} onClick={() => startEdit(row)}>Editar</button><button className={styles.deleteButton} onClick={() => deleteRow(row)}>Eliminar</button></div></td></tr>)}
            </tbody></table></div>
          )}
        </section>
        <p className={styles.footerNote}>PioZone · Panel de administración · Los cambios se guardan en la base de datos conectada al backend.</p>
      </section>
    </main>
  );
}
