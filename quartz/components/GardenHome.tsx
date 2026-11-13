import { QuartzComponentConstructor, QuartzComponentProps } from "./types"

export default (() => {
  function GardenHome({ allFiles }: QuartzComponentProps) {
    const ensayos = allFiles
      .filter((f) => f.slug?.startsWith("ensayos/") && f.slug !== "ensayos/index")
      .sort((a, b) => (b.dates?.created?.getTime() ?? 0) - (a.dates?.created?.getTime() ?? 0))
      .slice(0, 5)

    const notas = allFiles
      .filter((f) => f.slug?.startsWith("notas/") && f.slug !== "notas/index")
      .sort((a, b) => (b.dates?.created?.getTime() ?? 0) - (a.dates?.created?.getTime() ?? 0))
      .slice(0, 5)

    return (
      <div class="garden-home">
        <div class="garden-intro">
          <h2 class="garden-titulo">El jardín</h2>
          <p class="garden-descripcion">
            Un jardín digital (¿o un huerto?) es una colección de notas, ideas y ensayos
            inacabados que van creciendo con el tiempo, dentro de la filosofía del{" "}
            <em>Aprender en público</em>.
          </p>
        </div>

        <div class="garden-columnas">
          <div class="garden-col">
            <a href="/ensayos" class="garden-col-titulo">Ensayos →</a>
            <ul class="garden-lista">
              {ensayos.length === 0 && <li class="garden-vacio">Próximamente</li>}
              {ensayos.map((f) => (
                <li>
                  <a href={`/${f.slug}`}>{f.frontmatter?.title ?? f.slug}</a>
                </li>
              ))}
            </ul>
          </div>

          <div class="garden-col">
            <a href="/notas" class="garden-col-titulo">Notas →</a>
            <ul class="garden-lista">
              {notas.length === 0 && <li class="garden-vacio">Próximamente</li>}
              {notas.map((f) => (
                <li>
                  <a href={`/${f.slug}`}>{f.frontmatter?.title ?? f.slug}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }

  return GardenHome
}) satisfies QuartzComponentConstructor