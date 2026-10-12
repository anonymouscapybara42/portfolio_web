<script>
	import Navbar from '#lib/components/Navbar.svelte';
	import Hero from '#lib/components/Hero.svelte';
	import About from '#lib/components/About.svelte';
	import Experience from '#lib/components/Experience.svelte';
	import Projects from '#lib/components/Projects.svelte';
	import Skills from '#lib/components/Skills.svelte';
	import Education from '#lib/components/Education.svelte';
	import Contact from '#lib/components/Contact.svelte';
	import Footer from '#lib/components/Footer.svelte';
	import BackToTop from '#lib/components/BackToTop.svelte';
</script>

<Navbar />

<main id="main">
	<Hero />
	<About />
	<Experience />
	<Projects />
	<Skills />
	<Education />
	<Contact />
</main>

<Footer />
<BackToTop />
