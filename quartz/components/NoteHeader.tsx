import { QuartzComponentConstructor, QuartzComponentProps } from "./types"

const estados: Record<string, string> = {
  semilla: "🌱 Semilla",
  brote: "🌿 Brote",
  perenne: "🌳 Perenne",
  caduca: "🍂 Caduca",
  compost: "🪱 Compost",
}

const tipos: Record<string, string> = {
  ensayo: "Ensayo",
  nota: "Nota",
  reflexion: "Reflexión",
}

export default (() => {
  function NoteHeader({ fileData }: QuartzComponentProps) {
    const fm = fileData.frontmatter as Record<string, string> | undefined
    if (!fm) return null

    const estado = fm.estado ? estados[fm.estado.toLowerCase()] : null
    const tipo = fm.tipo ? (tipos[fm.tipo.toLowerCase()] ?? fm.tipo) : null
    const fecha = fileData.dates?.created
    const podado = fileData.dates?.modified

    const formatDate = (d: Date) =>
      d.toLocaleDateString("es-ES", { day: "numeric", month: "long", year: "numeric" })

    return (
      <div class="note-header">
        {(tipo || estado) && (
          <div class="note-meta-top">
            {tipo && <span class="note-tipo">{tipo}</span>}
            {estado && <span class="note-estado">{estado}</span>}
          </div>
        )}
        {(fecha || podado) && (
          <div class="note-fechas">
            {fecha && <span>Plantado el {formatDate(fecha)}</span>}
            {podado && <span>Podado por última vez el {formatDate(podado)}</span>}
          </div>
        )}
      </div>
    )
  }

  return NoteHeader
}) satisfies QuartzComponentConstructor