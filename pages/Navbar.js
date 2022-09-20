import Link from "next/link";

export default function Navbar(nav_desc) {
    return (
        <nav className={"navbar navbar-expand-lg navbar-dark bg-dark fixed-top"}>
            <div className="container-fluid">
                <Link href={"/"}>
                    <a className="navbar-brand">Ashish Kumar Bhoi</a>
                </Link>
                <button className={"navbar-toggler"} type={"button"} data-bs-toggle={"collapse"}
                        data-bs-target={"#navbarSupportedContent"} aria-controls={"navbarSupportedContent"}
                        aria-expanded={"false"} aria-label={"Toggle navigation"}>
                    <span className={"navbar-toggler-icon"}></span>
                </button>
                <div className={"collapse navbar-collapse"} id={"navbarSupportedContent"}>
                    <ul className={"navbar-nav ms-auto"}>
                        {home_link(nav_desc)}
                        {projects_link(nav_desc)}
                        {about_link(nav_desc)}
                        {contact_link(nav_desc)}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

function home_link(nav_desc) {
    if (nav_desc === "Home") return (
        <li className={"nav-item"}>
            <Link href={"/"}>
                <a className={"nav-link active"} aria-current={"page"}>Home</a>
            </Link>
        </li>
    )
    else return (
        <li className={"nav-item"}>
            <Link href={"/"}>
                <a className={"nav-link"} aria-current={"page"}>Home</a>
            </Link>
        </li>
    )
}
function projects_link(nav_desc) {
    if (nav_desc === "Projects") return (
        <li className={"nav-item"}>
            <Link href={"/projects"}>
                <a className={"nav-link active"} aria-current={"page"}>Projects</a>
            </Link>
        </li>
    )
    else return (
        <li className={"nav-item"}>
            <Link href={"/projects"}>
                <a className={"nav-link"} aria-current={"page"}>Projects</a>
            </Link>
        </li>
    )
}
function about_link(nav_desc) {
    if (nav_desc === "About") return (
        <li className={"nav-item"}>
            <Link href={"/about"}>
                <a className={"nav-link active"} aria-current={"page"}>About</a>
            </Link>
        </li>
    )
    else return (
        <li className={"nav-item"}>
            <Link href={"/about"}>
                <a className={"nav-link"} aria-current={"page"}>About</a>
            </Link>
        </li>
    )
}
function contact_link(nav_desc) {
    if (nav_desc === "Contact") return (
        <li className={"nav-item"}>
            <Link href={"/contact"}>
                <a className={"nav-link active"} aria-current={"page"}>Contact</a>
            </Link>
        </li>
    )
    else return (
        <li className={"nav-item"}>
            <Link href={"/contact"}>
                <a className={"nav-link"} aria-current={"page"}>Contact</a>
            </Link>
        </li>
    )
}