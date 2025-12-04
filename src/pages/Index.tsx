import { useEffect, useRef, useState } from "react";

const Index = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      setMousePos({ x: x * 20, y: y * 10 });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <main 
      ref={containerRef}
      className="relative w-full min-h-screen lg:h-screen lg:max-h-screen overflow-x-hidden lg:overflow-hidden bg-background"
    >
      {/* Red Sun - Core */}
      <div 
        className="fixed lg:absolute right-[-10%] top-[5%] lg:top-[10%] w-[70vw] lg:w-[45vw] h-[70vw] lg:h-[45vw] pointer-events-none z-0"
        style={{ 
          transform: `translate(${mousePos.x * 0.3}px, ${mousePos.y * 0.3}px)`,
          transition: 'transform 0.3s ease-out'
        }}
      >
        {/* Solid core */}
        <div className="absolute inset-[15%] rounded-full bg-primary animate-sun-core" />
        {/* Blurred glow */}
        <div className="absolute inset-0 rounded-full bg-sun-glow animate-sun-breathe" />
      </div>

      {/* Main Content Grid */}
      <div 
        className="relative z-10 grid lg:grid-cols-[1fr_380px] gap-6 lg:gap-0 h-full p-4 sm:p-6 lg:p-8"
        style={{ 
          transform: `translate(${mousePos.x * 0.1}px, ${mousePos.y * 0.05}px)`,
          transition: 'transform 0.4s ease-out'
        }}
      >
        {/* Left Column */}
        <div className="flex flex-col justify-between lg:max-w-[520px] space-y-6 lg:space-y-0">
          
          {/* Hero */}
          <header className="animate-fade-up">
            <h1 className="text-display print-offset mb-2">
              Mike Goncharov
            </h1>
            <p className="text-title text-muted-foreground mb-4">
              Senior Product & UX Designer
            </p>
            <div className="space-y-1 text-body text-muted-foreground max-w-[380px]">
              <p>Turning vague ideas into usable products.</p>
              <p>Product & UX designer who speaks user, business and code.</p>
            </div>
          </header>

          {/* Main Sections */}
          <div className="space-y-5 lg:space-y-4 animate-fade-up animation-delay-200">
            
            {/* What I do */}
            <section>
              <h2 className="section-title text-section font-semibold mb-2 uppercase tracking-wider">What I do</h2>
              <ul className="space-y-0.5 text-body text-muted-foreground">
                <li>Product & UX design for web apps, tools and internal systems</li>
                <li>Translating between business, design and engineering</li>
                <li>User flows, prototypes and UI ready for dev handoff</li>
                <li>Designing with real technical and business constraints in mind</li>
                <li>Comfortable with code — can read and write front-end when it helps</li>
                <li>Helping teams shape a story for users, stakeholders and investors</li>
              </ul>
            </section>

            {/* Best fit for */}
            <section>
              <h2 className="section-title text-section font-semibold mb-2 uppercase tracking-wider">Best fit for</h2>
              <ul className="space-y-0.5 text-body text-muted-foreground">
                <li>B2B / SaaS tools, dashboards and internal systems</li>
                <li>Early-stage products that need structure, clarity and realistic scope</li>
                <li>Product teams where design, engineering and business sit at the same table</li>
                <li>Companies that hire for thinking, not just pretty shots</li>
                <li>Teams building their own hardware + software, where UI must respect the physical product</li>
              </ul>
            </section>

            {/* Not the right match */}
            <section>
              <h2 className="section-title text-section font-semibold mb-2 uppercase tracking-wider">Not the right match if you need</h2>
              <ul className="space-y-0.5 text-body text-muted-foreground">
                <li>Pure visual / marketing-only design without product thinking</li>
                <li>Heavy motion design and complex micro-animations as a core focus</li>
                <li>Huge design-system libraries as a full-time job</li>
                <li>"Just make it pretty" with no problem, context or measurable outcome</li>
              </ul>
            </section>
          </div>

          {/* Meta + Tags */}
          <footer className="space-y-4 animate-fade-up animation-delay-400">
            {/* Meta */}
            <div className="flex flex-wrap gap-x-4 gap-y-1 text-meta text-muted-foreground font-mono">
              <span>Based in Warsaw, Poland</span>
              <span>Working with EU · UK · US</span>
              <a href="mailto:m@garno.pro" className="hover:text-foreground transition-colors">m@garno.pro</a>
              <a href="https://linkedin.com/in/mike-goncharov" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">linkedin.com/in/mike-goncharov</a>
            </div>

            {/* Tag Cloud */}
            <div className="flex flex-wrap gap-1.5 max-w-[480px]">
              {[
                "product & ux", "b2b / saas / tools", "design × engineering", "complex flows",
                "systems thinking", "research-minded", "ecommerce & dtc", "workshops & facilitation",
                "remote-friendly", "english · polish · russian",
                "low ego, high ownership", "psychological safety", "direct communication",
                "evidence-based decisions", "user > idea ego", "long-term thinking", "builder mindset",
                "warsaw-based", "runner & cyclist", "coffee geek",
                "neurodiversity-aware", "hardware & iot curious", "curious about people"
              ].map((tag) => (
                <span key={tag} className="tag">{tag}</span>
              ))}
            </div>
          </footer>
        </div>

        {/* Right Column - Glass Panel */}
        <div className="relative lg:pl-6 animate-fade-up animation-delay-300">
          <div className="glass-panel p-5 lg:p-6 lg:ml-auto lg:max-w-[340px] lg:mt-[15vh] space-y-5">
            
            {/* How I work */}
            <section>
              <h2 className="section-title text-section font-semibold mb-2 uppercase tracking-wider">How I work</h2>
              <ul className="space-y-0.5 text-body text-muted-foreground">
                <li>Start from the real problem, not from the Dribbble shot</li>
                <li>Prefer small, testable iterations over big-bang redesigns</li>
                <li>Direct, low-drama communication</li>
                <li>Comfortable with uncertainty, but not with zero decisions</li>
                <li>Collaborative with devs and business, not "design in a silo"</li>
                <li>Comfortable jumping into code or technical details to move faster</li>
                <li>Strong IC by default — capable of leading, but prefer hands-on product work</li>
              </ul>
            </section>

            {/* Past ventures */}
            <section>
              <h2 className="section-title text-section font-semibold mb-2 uppercase tracking-wider">Past ventures</h2>
              <ul className="space-y-0.5 text-body text-muted-foreground">
                <li>Launched a furniture startup — shut down, but taught me about operations, pricing and risk</li>
                <li>Co-created an online apparel brand (design, production, ecommerce) — later handed over to a partner</li>
              </ul>
            </section>

            {/* Currently open to */}
            <section>
              <h2 className="section-title text-section font-semibold mb-2 uppercase tracking-wider">Currently open to</h2>
              <ul className="space-y-0.5 text-body text-muted-foreground">
                <li>Senior IC Product / UX roles (not primarily people-management)</li>
                <li>Contract / freelance work on meaningful, long-term products</li>
                <li>Joining or supporting teams building hardware + software stacks</li>
                <li>Design partnerships with founders and small, product-minded teams</li>
              </ul>
            </section>
          </div>
        </div>
      </div>

      {/* Subtle texture overlay */}
      <div 
        className="fixed inset-0 pointer-events-none z-20 opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />
    </main>
  );
};

export default Index;
