import { EditableText } from '../components/EditableText'

export type FooterLink = { label: string; href: string }
export type FooterProps = { links?: FooterLink[]; copyright?: string }

export default function Footer({ links = [], copyright = '© 2025' }: FooterProps) {
  return (
    <footer className="py-10 bg-gray-900 text-gray-300">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
        <nav className="flex gap-4 flex-wrap">
          {links.map((l, i) => (
            <a key={i} href={l.href} className="hover:text-white">
              <EditableText 
                path={`footer.links.${i}.label`}
                value={l.label}
                as="span"
              />
            </a>
          ))}
        </nav>
        <EditableText 
          path="footer.copyright"
          value={copyright}
          as="div"
          className="text-sm"
        />
      </div>
    </footer>
  )
}
