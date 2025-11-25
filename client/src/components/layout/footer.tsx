import { Link } from "wouter";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="text-xl font-display font-bold tracking-tight text-white flex items-center gap-2 mb-4">
                <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-primary" />
                </div>
                LaunchForge
            </Link>
            <p className="text-muted-foreground text-sm max-w-sm">
              Ship production Web2 products, fast. We build, you grow. 
              No vendor lock-in. Just practical product builds.
            </p>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#work" className="hover:text-primary transition-colors">Our Work</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Services</a></li>
              <li><a href="#process" className="hover:text-primary transition-colors">Process</a></li>
              <li><a href="#pricing" className="hover:text-primary transition-colors">Pricing</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            © {currentYear} LaunchForge. Built for builders.
          </p>
          <div className="flex items-center gap-4">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            <span className="text-xs text-muted-foreground">All systems operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
