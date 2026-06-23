<script>
  import { meta } from '$lib/data/site.js';
  import Nav          from '$lib/components/Nav.svelte';
  import Hero         from '$lib/components/Hero.svelte';
  import Services     from '$lib/components/Services.svelte';
  import Pricing      from '$lib/components/Pricing.svelte';
  import Testimonials from '$lib/components/Testimonials.svelte';
  import CTA          from '$lib/components/CTA.svelte';
  import Footer       from '$lib/components/Footer.svelte';

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: meta.name,
    description: meta.description,
    url: meta.url,
    serviceType: 'Web Design and Development',
  };
</script>

<svelte:head>
  <title>{meta.name} — {meta.tagline}</title>
  {@html `<script type="application/ld+json">${JSON.stringify(schema)}<\/script>`}
</svelte:head>

<Nav />

<main id="main-content">
  <Hero />
  <Services />
  <Pricing />
  <Testimonials />
  <CTA />
</main>

<Footer />