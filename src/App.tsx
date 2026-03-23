import { motion } from "motion/react";
import { Cpu, ShieldCheck, Gauge, Globe, ChevronRight, Terminal } from "lucide-react";

const services = [
  {
    title: "Technical Porting",
    description: "Native Unity and C# optimization for the Nintendo Switch™ hardware. Full support for Joy-Con™ features, HD Rumble, and System Dialogue management.",
    icon: <Cpu className="w-6 h-6 text-[#e60012]" />,
    tech: ["Unity", "C#", "Joy-Con API", "HD Rumble"]
  },
  {
    title: "Certification (LotCheck)",
    description: "Comprehensive pre-submission testing to ensure 100% compliance with Nintendo Technical Standards and Guidelines.",
    icon: <ShieldCheck className="w-6 h-6 text-[#e60012]" />,
    tech: ["Compliance", "LotCheck", "QA"]
  },
  {
    title: "Performance Tuning",
    description: "Advanced GPU/CPU profiling to guarantee stable framerates in both Handheld (720p) and Docked (1080p) modes.",
    icon: <Gauge className="w-6 h-6 text-[#e60012]" />,
    tech: ["Profiling", "720p/1080p", "Optimization"]
  },
  {
    title: "Publishing Support",
    description: "Operational management under FOP [Фамилия Мамы], providing a legal and financial framework for global eShop distribution.",
    icon: <Globe className="w-6 h-6 text-[#e60012]" />,
    tech: ["eShop", "Global Distro", "Legal"]
  }
];

export default function App() {
  return (
    <div className="min-h-screen bg-[#09090b] text-zinc-100 selection:bg-[#e60012] selection:text-white overflow-x-hidden">
      {/* Scanline Overlay */}
      <div className="fixed inset-0 pointer-events-none scanline opacity-20 z-50"></div>

      {/* Background Glow */}
      <div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#e60012] rounded-full blur-[120px] opacity-10 pointer-events-none"></div>
      <div className="fixed bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#e60012] rounded-full blur-[120px] opacity-5 pointer-events-none"></div>

      <main className="relative max-w-5xl mx-auto px-6 py-12 md:py-24">
        {/* Header Section */}
        <header className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="w-12 h-1 bg-[#e60012]"></div>
            <span className="font-mono text-xs tracking-widest uppercase text-zinc-500">
              Technical Excellence // Switch Development
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold tracking-tighter mb-4"
          >
            ApexPorting <span className="text-[#e60012]">Studio</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-zinc-400 font-light max-w-2xl leading-relaxed"
          >
            Official Console Development & Technical Optimization for the Nintendo Switch™ Ecosystem.
          </motion.p>
        </header>

        {/* Mission Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-32 relative"
        >
          <div className="absolute -left-4 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#e60012] to-transparent"></div>
          <div className="pl-8">
            <h2 className="font-mono text-sm uppercase tracking-[0.2em] text-[#e60012] mb-6 flex items-center gap-2">
              <Terminal size={14} /> Mission_Statement
            </h2>
            <blockquote className="text-2xl md:text-4xl font-medium italic text-zinc-200 leading-tight max-w-4xl">
              "To bridge the gap between ambitious independent developers and the premium Nintendo Switch™ ecosystem through technical precision and operational stability."
            </blockquote>
          </div>
        </motion.section>

        {/* Services Grid */}
        <section className="mb-32">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="font-mono text-sm uppercase tracking-[0.2em] text-[#e60012] mb-2">
                Core_Services
              </h2>
              <p className="text-zinc-500 text-sm">Comprehensive technical solutions for console deployment.</p>
            </div>
            <div className="hidden md:block font-mono text-[10px] text-zinc-700">
              SYS_REV: 2026.03.23 // BUILD_ID: APX_SW_01
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group p-8 bg-[#18181b] border border-white/5 rounded-2xl hardware-border transition-all hover:border-[#e60012]/30"
              >
                <div className="mb-6 p-3 bg-zinc-900 w-fit rounded-xl group-hover:red-glow transition-all">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  {service.title}
                  <ChevronRight size={16} className="text-zinc-700 group-hover:text-[#e60012] transition-colors" />
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.tech.map(t => (
                    <span key={t} className="font-mono text-[10px] px-2 py-1 bg-zinc-900 border border-white/5 rounded text-zinc-500 uppercase tracking-wider">
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-white/5 pt-12 pb-24 text-center md:text-left">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="space-y-2">
              <p className="font-bold text-zinc-200">ApexPorting Studio</p>
              <p className="text-xs text-zinc-500 max-w-xs leading-relaxed">
                Partnering with independent creators worldwide to bring high-performance experiences to Nintendo Switch™.
              </p>
            </div>
            <div className="text-right space-y-2">
              <p className="text-xs text-zinc-500">
                &copy; 2026 ApexPorting Studio. Registered in Ukraine.
              </p>
              <div className="flex justify-center md:justify-end gap-4 text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
                <span>Privacy</span>
                <span>Terms</span>
                <span>Contact</span>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
