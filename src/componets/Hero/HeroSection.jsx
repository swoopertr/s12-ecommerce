import HeroItem from "./HeroItem";

function HeroSection() {
  const heroItems = [
    {
      label: "Trending",
      title: "Digital Artistry",
      description: "Explore the new wave of minimalist 3D designs.",
      buttonText: "Explore Now",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBEHm4moZm9WGB9srx7MU1jI5pkyJbgrexdy8tDdyTQofw08hbSsJIyIe7QEYDNRwDUkEGrU_EaeUNFLxYhR4jbjnFVpn7ZQ8PXAyt2kDLVHOLESCuTNPaQbDN0L_kx48arbmS4MVz7A6j6MpxjMxDnZjg_NKSg25re4iXtTfUqDDmD5D6qZUp8JldENNpWL0cXDVt788w85II1ngdDJIKp_eXdxGVKjTg4pEFTfjte2U1QhXal50UuZJIVW-MDLnP4IcAnpKtMN0s",
    },
    {
      label: "Staff Pick",
      title: "Future Tech",
      description: "The tools that will redefine how we work in 2024.",
      buttonText: "Read More",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCTQvA0ixcyWn_usxQzJghdKwTtc-tM_gk4UItFTpoG-pNEv9t4dd5TPPJQOLOeE-3XHrzQI7vyXD23V5_aFCh918jhHHgx5wyEA6HMxLz670c7GS7B1FkF0fFr4iBh5j2GEAZ3YzMYi6q3uxzjZbHQLqe7KTwyt3VmKfs0D_TGDMCQoSR4YzZkoQCSPZZfvmdihEpcdQse3AOcxZUSMZ2dajWiMSb37-nRgRLRT5JLjxXgBzMB4l8JfcnSNBWDOnsiBOUFoq9ZbL8",
    },
    {
      label: "Exclusive",
      title: "Modern Living",
      description: "Finding peace in beautifully curated interiors.",
      buttonText: "View Gallery",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBOr-71jvwh_cLMurSre-AxjpT1zDk4ezbi88Y5yi349nAiXvJcOBeYJ7RjELP6jkUH8djGNIF1EXztlHLMUnEn928L8a3cbJR5PqQ_nCnxU0LVP180BUkxBVT0Mm8uxPVsOoB4rw4PEjJHyxxWnnsBQEd08YM70CfPqUYf_w-OVoWUPbYFH2Mp8M38eexw3xzTC_GpIEhslz7MP_jy3ycz4CK5bLasclfhjRN6yGcvgDkH5d6WbnOG07Uefk1k5_NoBfeofDDQuz4",
    },
  ];
  return (
    <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <section class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {heroItems.map((item, i) => (
            <HeroItem key={i} item={item}/>
        ))}
      </section>
    </main>
  );
}

export default HeroSection;
