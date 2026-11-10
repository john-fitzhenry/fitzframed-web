import { site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-row">
        <div>
          <p className="wordmark">John Fitzhenry</p>
          <p className="footer-note">
            Photo, video and web. Syracuse, NY and Franklin, MA.
            <br />
            Production work runs through my company, <a href={site.links.fitzframed}>FitzFramed</a>.
          </p>
        </div>
        <ul className="footer-links">
          <li><a href={`mailto:${site.email}`}>{site.email}</a></li>
          <li><a href={site.links.instagram} rel="noopener">Instagram</a></li>
          <li><a href={site.links.youtube} rel="noopener">YouTube</a></li>
          <li><a href={site.links.linkedin} rel="noopener">LinkedIn</a></li>
          <li><a href={site.links.github} rel="noopener">GitHub</a></li>
        </ul>
      </div>
      <div className="wrap">
        <p className="copyright">© {new Date().getFullYear()} John Fitzhenry</p>
      </div>
    </footer>
  );
}
