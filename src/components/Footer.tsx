import Logo from '../assets/logo-text.png'
const Footer = () => {
    return (
        <footer className="bg-white border-t border-gray-100 pt-8 pb-8">
            <div className="container mx-auto md:px-7 px-4 grid grid-cols-1 md:grid-cols-5 gap-12 mb-16">
                {/* Brand & Description (Occupies 2 columns on medium screens) */}
                <div className="md:col-span-2 space-y-4">
                    <div className="flex items-center gap-2.5">
                        <img src={Logo} alt="" />
                    </div>
                    <p className="text-gray-500 text-sm max-w-sm leading-relaxed">
                        Curated tools, technologies, and resources for developers building modern software.
                    </p>
                    <div className="flex gap-6 pt-2 text-sm font-medium text-gray-600">
                        <a href="#github" className="hover:text-gray-900 transition">GitHub</a>
                        <a href="#twitter" className="hover:text-gray-900 transition">Twitter</a>
                        <a href="#linkedin" className="hover:text-gray-900 transition">LinkedIn</a>
                    </div>
                </div>
                {/* Product Links */}
                <div className="space-y-4">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-gray-900">Product</h4>
                    <ul className="space-y-3 text-sm text-gray-500">
                        <li><a href="#home" className="hover:text-gray-900 transition">Home</a></li>
                        <li><a href="#technologies" className="hover:text-gray-900 transition">Technologies</a></li>
                        <li><a href="#projects" className="hover:text-gray-900 transition">Projects</a></li>
                    </ul>
                </div>
                {/* Company Links */}
                <div className="space-y-4">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-gray-900">Company</h4>
                    <ul className="space-y-3 text-sm text-gray-500">
                        <li><a href="#about" className="hover:text-gray-900 transition">About</a></li>
                        <li><a href="#contact" className="hover:text-gray-900 transition">Contact</a></li>
                        <li><a href="#careers" className="hover:text-gray-900 transition">Careers</a></li>
                    </ul>
                </div>
                {/* Legal Links */}
                <div className="space-y-4">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-gray-900">Legal</h4>
                    <ul className="space-y-3 text-sm text-gray-500">
                        <li><a href="#privacy" className="hover:text-gray-900 transition">Privacy Policy</a></li>
                        <li><a href="#terms" className="hover:text-gray-900 transition">Terms of Service</a></li>
                    </ul>
                </div>
            </div>
            {/* Bottom Copyright Bar */}
                <div className=" container mx-auto px-6 pt-8 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-400 gap-4">
                    <p>© 2026 Dev Stack. All rights reserved.</p>
                    <div className="flex gap-6">
                        <a href="#privacy" className="hover:text-gray-600 transition">Privacy</a>
                        <a href="#terms" className="hover:text-gray-600 transition">Terms</a>
                    </div>
                </div>
        </footer>
    );
};

export default Footer;