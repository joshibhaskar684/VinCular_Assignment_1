
"use client"
import {
  ShieldCheck,
  BadgeCheck,
  Globe,
  FileCheck2,
  ArrowRight,
  CheckCircle2,
  Phone,
  Mail,
  Building2,
} from "lucide-react";

const services = [
  {
    title: "BIS Certification",
    desc: "End-to-end assistance for BIS approvals and product compliance in India.",
  },
  {
    title: "TEC & MTCTE",
    desc: "Telecom equipment testing and certification support for market access.",
  },
  {
    title: "WPC Approval",
    desc: "Wireless planning and coordination approvals for RF-enabled devices.",
  },
  {
    title: "E-Waste Compliance",
    desc: "Environmental and sustainability compliance solutions for businesses.",
  },
];

const stats = [
  { label: "Projects Delivered", value: "2500+" },
  { label: "Global Clients", value: "400+" },
  { label: "Industry Experts", value: "50+" },
  { label: "Years Experience", value: "12+" },
];

const features = [
  "Fast Certification Process",
  "Dedicated Compliance Experts",
  "Pan India Regulatory Support",
  "Global Testing Assistance",
  "Startup Friendly Solutions",
  "24/7 Consultation Support",
];

export default function HomePage() {
  return (

    <main className="bg-background text-foreground overflow-hidden">
     
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-500/10 to-transparent blur-3xl" />

        <div className="container mx-auto px-6 py-20 lg:py-28 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-600 dark:text-blue-400 mb-6">
                <BadgeCheck className="h-4 w-4" />
                Trusted Compliance Partner
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Simplifying
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {" "}
                  Product Certification{" "}
                </span>
                & Regulatory Compliance
              </h1>

              <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
                We help brands and manufacturers achieve faster approvals,
                testing, and certifications for seamless market entry across
                India and global markets.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <button className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 text-white font-medium shadow-lg hover:scale-105 transition">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>

                <button className="rounded-xl border border-border px-6 py-3 font-medium hover:bg-muted transition">
                  Explore Services
                </button>
              </div>

              <div className="mt-10 grid grid-cols-2 gap-4">
                {features.slice(0, 4).map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-purple-500" />
                    <span className="text-sm text-muted-foreground">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="rounded-3xl border border-border bg-card/70 backdrop-blur-xl p-8 shadow-2xl">
                <div className="grid gap-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">
                        Certification Success
                      </p>
                      <h3 className="text-3xl font-bold">98%</h3>
                    </div>

                    <div className="h-16 w-16 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center">
                      <ShieldCheck className="text-white h-8 w-8" />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    {stats.map((stat) => (
                      <div
                        key={stat.label}
                        className="rounded-2xl border border-border p-5 bg-background/50"
                      >
                        <h4 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                          {stat.value}
                        </h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          {stat.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-8 -left-8 h-40 w-40 bg-purple-500/20 rounded-full blur-3xl" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold">
              Our Compliance Services
            </h2>
            <p className="mt-4 text-muted-foreground">
              Comprehensive certification and regulatory services for businesses
              entering Indian and international markets.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 mt-14">
            {services.map((service, index) => (
              <div
                key={index}
                className="group rounded-3xl border border-border bg-card p-6 hover:border-purple-500/40 hover:shadow-xl transition-all"
              >
                <div className="h-14 w-14 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center mb-6">
                  <FileCheck2 className="text-white h-7 w-7" />
                </div>

                <h3 className="text-xl font-semibold">{service.title}</h3>

                <p className="mt-3 text-muted-foreground leading-relaxed">
                  {service.desc}
                </p>

                <button className="mt-6 inline-flex items-center text-blue-600 dark:text-blue-400 font-medium">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <div className="inline-flex rounded-full bg-purple-500/10 px-4 py-2 text-sm text-purple-600 dark:text-purple-400">
                Why Choose Us
              </div>

              <h2 className="mt-6 text-3xl md:text-4xl font-bold leading-tight">
                Trusted Regulatory Experts For Modern Businesses
              </h2>

              <p className="mt-6 text-muted-foreground leading-relaxed">
                From startups to enterprise brands, we provide strategic
                certification guidance, documentation support, and testing
                coordination for faster market launch.
              </p>

              <div className="mt-8 grid sm:grid-cols-2 gap-4">
                {features.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-2xl border border-border bg-background p-4"
                  >
                    <CheckCircle2 className="text-blue-600 h-5 w-5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="rounded-3xl bg-gradient-to-br from-blue-600 to-purple-600 p-[1px]">
                <div className="rounded-3xl bg-background p-8">
                  <div className="space-y-6">
                    <div className="rounded-2xl bg-blue-500/10 p-5 flex gap-4">
                      <Globe className="h-10 w-10 text-blue-600" />
                      <div>
                        <h4 className="font-semibold text-lg">
                          Global Certifications
                        </h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          CE, FCC, BIS, TEC and international approval support.
                        </p>
                      </div>
                    </div>

                    <div className="rounded-2xl bg-purple-500/10 p-5 flex gap-4">
                      <Building2 className="h-10 w-10 text-purple-600" />
                      <div>
                        <h4 className="font-semibold text-lg">
                          Enterprise Solutions
                        </h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          Tailored compliance management for manufacturers.
                        </p>
                      </div>
                    </div>

                    <div className="rounded-2xl bg-blue-500/10 p-5 flex gap-4">
                      <ShieldCheck className="h-10 w-10 text-blue-600" />
                      <div>
                        <h4 className="font-semibold text-lg">
                          Reliable Documentation
                        </h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          Complete audit-ready certification documentation.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="rounded-3xl overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 p-10 md:p-14 text-white relative">
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,white,transparent_40%)]" />

            <div className="relative flex flex-col lg:flex-row gap-10 items-center justify-between">
              <div className="max-w-2xl">
                <h2 className="text-3xl md:text-4xl font-bold">
                  Ready to Launch Your Certified Products?
                </h2>

                <p className="mt-4 text-white/80 text-lg">
                  Connect with our compliance experts today and accelerate your
                  certification journey.
                </p>
              </div>

              <button className="rounded-2xl bg-white text-black px-8 py-4 font-semibold hover:scale-105 transition">
                Book Consultation
              </button>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-border">
        <div className="container mx-auto px-6 py-12">
          <div className="grid md:grid-cols-4 gap-10">
            <div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Vincular
              </h3>

              <p className="mt-4 text-muted-foreground">
                Regulatory compliance and certification solutions for modern
                businesses.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Services</h4>

              <ul className="space-y-3 text-muted-foreground">
                <li>BIS Certification</li>
                <li>TEC Approval</li>
                <li>WPC Certification</li>
                <li>Global Testing</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Company</h4>

              <ul className="space-y-3 text-muted-foreground">
                <li>About Us</li>
                <li>Careers</li>
                <li>Case Studies</li>
                <li>Contact</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact</h4>

              <div className="space-y-4 text-muted-foreground">
                <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4" />
                  +91 98765 43210
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4" />
                  info@vincular.in
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 border-t border-border pt-6 text-sm text-muted-foreground flex flex-col md:flex-row justify-between gap-4">
            <p>© 2026 Vincular. All rights reserved.</p>
            <p>Designed By Bhaskar Joshi.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}