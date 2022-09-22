import Link from "next/link";

export default function Navbar(nav_desc) {
    return (
        <nav className={"navbar navbar-expand-lg navbar-dark bg-dark fixed-top"}>
            <div className="container-fluid">
                <Link href={"/"}>
                    <a className="navbar-brand"><i className={"fa-solid fa-code"}/></a>
                </Link>
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
                        {social_link()}
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

function social_link() {
    return (
        <div className={"d-flex"}>
            <li className={"nav-item"}>
                <Link href={"https://www.facebook.com/ashish.bhoi.2016"}>
                    <a className={"nav-link active mx-1"} aria-label={"facebook"}>
                        <i className={"fa-brands fa-facebook-f fa-lg mx-1"}/>
                    </a>
                </Link>
            </li>
            <li className={"nav-item"}>
                <Link href={"https://www.instagram.com/ashishkumar_04"}>
                    <a className={"nav-link active mx-1"} aria-label={"instagram"}>
                        <i className={"fa-brands fa-instagram fa-lg mx-1"}/>
                    </a>
                </Link>
            </li>
            <li className={"nav-item"}>
                <Link href={"https://twitter.com/Ashishbhoi8"}>
                    <a className={"nav-link active mx-1"} aria-label={"twitter"}>
                        <i className={"fa-brands fa-twitter fa-lg mx-1"}/>
                    </a>
                </Link>
            </li>
            <li className={"nav-item"}>
                <Link href={"https://github.com/AshishBhoi"}>
                    <a className={"nav-link active mx-1"} aria-label={"github"}>
                        <i className={"fa-brands fa-github fa-lg mx-1"}/>
                    </a>
                </Link>
            </li>
            <li className={"nav-item"}>
                <Link href={"https://www.linkedin.com/in/ashish-k-b03914136"}>
                    <a className={"nav-link active mx-1"} aria-label={"linkedin"}>
                        <i className={"fa-brands fa-linkedin-in fa-lg mx-1"}/>
                    </a>
                </Link>
            </li>
        </div>
    )
}