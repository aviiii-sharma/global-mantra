import Link from "next/link";
import { Globe, Mail, Phone, MapPin, Linkedin, Facebook, Instagram, MessageCircle } from "lucide-react";

const footerLinks = {
    company: [
        { label: "About Us", href: "/about" },
        { label: "Our Products", href: "/products" },
        { label: "Global Markets", href: "/markets" },
        { label: "Quality Assurance", href: "/quality" },
        { label: "Logistics", href: "/logistics" },
    ],
    products: [
        { label: "Agro Products", href: "/products/agro" },
        { label: "Ready-to-Eat Food", href: "/products/rte" },
        { label: "Packaging Materials", href: "/products/packaging" },
    ],
};

const certifications = ["IEC", "FSSAI", "APEDA", "SBR", "ISO 22000", "HACCP", "COA", "MSDS"];

export default function Footer() {
    return (
        <footer className="bg-navy-dark text-gray-400 py-10 sm:py-15">
            {/* Main Footer */}
            <div className="container-custom">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                    {/* Brand */}
                    <div className="lg:col-span-1">
                        <Link href="/" className="flex items-center gap-2 mb-4">
                            <div>
                                <span className="text-white font-poppins font-bold text-lg leading-tight block">
                                    Global<span className="text-gold">Mantra</span>
                                </span>
                                
                            </div>
                        </Link>
                        <p className="text-sm leading-relaxed mb-6">
                            Connecting global markets through reliable B2B export solutions. Your trusted partner for Indian agro exports, food products, and industrial packaging.
                        </p>
                        <div className="flex gap-3">
                            {[
                                { Icon: Linkedin, link: "https://www.linkedin.com/in/global-mantra-6b3654375" },
                                { Icon: Instagram, link: "https://www.instagram.com/globalmantraexim" },
                                { Icon: Facebook, link: "https://www.facebook.com/61578348220965/" },
                                { Icon: MessageCircle, link: "https://wa.me/+919104334361" }
                            ].map(({ Icon, link }, i) => (
                                <a
                                    key={i}
                                    href={link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-9 h-9 rounded-lg bg-navy-800 border border-gray-700 flex items-center justify-center hover:border-teal hover:text-teal transition-colors"
                                >
                                    <Icon className="w-4 h-4" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Company Links */}
                    <div>
                        <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">
                            Company
                        </h4>
                        <ul className="space-y-3">
                            {footerLinks.company.map((l) => (
                                <li key={l.href}>
                                    <Link
                                        href={l.href}
                                        className="text-sm hover:text-teal transition-colors hover:pl-1 inline-block"
                                    >
                                        {l.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Products */}
                    <div>
                        <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">
                            Export Products
                        </h4>
                        <ul className="space-y-3">
                            {footerLinks.products.map((l) => (
                                <li key={l.href}>
                                    <Link
                                        href={l.href}
                                        className="text-sm hover:text-teal transition-colors hover:pl-1 inline-block"
                                    >
                                        {l.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        <h4 className="text-white font-semibold mt-8 mb-4 text-sm uppercase tracking-wider">
                            Certifications
                        </h4>
                        <div className="flex flex-wrap gap-2">
                            {certifications.map((cert) => (
                                <span
                                    key={cert}
                                    className="px-2.5 py-1 bg-navy-800 border border-teal/30 text-teal text-xs rounded font-medium"
                                >
                                    {cert}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">
                            Contact Us
                        </h4>
                        <ul className="space-y-4">
                            <li className="flex gap-3">
                                <MapPin className="w-4 h-4 text-teal mt-0.5 flex-shrink-0" />
                                <span className="text-sm leading-relaxed">
                                    Global Mantra Group Ltd.<br />
                                    Anand, Gujarat, India
                                </span>
                            </li>
                            <li className="flex gap-3">
                                <Phone className="w-4 h-4 text-teal flex-shrink-0" />
                                <a href="tel:+919104334361" className="text-sm hover:text-teal transition-colors">
                                    +91 91043 34361
                                </a>
                            </li>
                            <li className="flex gap-3">
                                <Mail className="w-4 h-4 text-teal flex-shrink-0" />
                                <a href="mailto:work@globalmantragroupltd.com" className="text-sm hover:text-teal transition-colors">
                                    work@globalmantragroupltd.com
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-800 mt-2 sm:mt-5">
                <div className="container-custom py-1 sm:py-2 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-600">
                    <span>© {new Date().getFullYear()} Global Mantra Group Ltd. All rights reserved.</span>
                    <span>
                        FOB | CIF | CFR Export Terms &nbsp;·&nbsp; APEDA Registered &nbsp;·&nbsp; IEC Code: AAACG1234Z
                    </span>
                </div>
            </div>
        </footer>
    );
}
