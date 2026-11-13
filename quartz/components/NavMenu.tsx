import { QuartzComponentConstructor, QuartzComponentProps } from "./types"

export default (() => {
  function NavMenu({ fileData }: QuartzComponentProps) {
    const currentSlug = fileData.slug ?? ""

    const links = [
      { name: "Jardín", url: "/" },
      { name: "Ahora", url: "/ahora" },
      { name: "Sobre mí", url: "/sobre-mi" },
    ]

    return (
      <div class="nav-menu">
        {links.map(({ name, url }) => (
          <a href={url} class={currentSlug === url.replace(/^\//, "") ? "nav-active" : ""}>
            {name}
          </a>
        ))}
      </div>
    )
  }

  return NavMenu
}) satisfies QuartzComponentConstructor