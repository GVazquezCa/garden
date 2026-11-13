import { QuartzComponentConstructor, QuartzComponentProps } from "./types"

export default (() => {
  function NoteFechas({ fileData }: QuartzComponentProps) {
    const fecha = fileData.dates?.created
    const podado = fileData.dates?.modified

    if (!fecha && !podado) return null

    const formatDate = (d: Date) =>
      d.toLocaleDateString("es-ES", { day: "numeric", month: "long", year: "numeric" })

    return (
      <div class="note-fechas-bar">
        {fecha && <span>Plantado el {formatDate(fecha)}</span>}
        {podado && <span>Podado por última vez el {formatDate(podado)}</span>}
      </div>
    )
  }

  return NoteFechas
}) satisfies QuartzComponentConstructor