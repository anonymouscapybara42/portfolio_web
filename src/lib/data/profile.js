// Personal details, navigation, and copy used across the site.
// Edit this file to update contact info, headline text, and links.

export const profile = {
	name: 'Ashley G. Glaraga',
	shortName: 'Ashley',
	headline: 'Computer Engineering Graduate | Web Developer | Software Developer',
	intro:
		"I'm a Computer Engineering graduate who builds practical digital solutions through web development, application development, and technology-driven problem-solving. I enjoy turning ideas into functional products, from initial planning and development to deployment.",
	// Career-interest indicator. Wording is intentionally non-committal:
	// it does NOT claim immediate availability.
	interest: 'Open to software and web development opportunities',
	site: {
		title: 'Ashley G. Glaraga | Web Developer & Computer Engineering Graduate',
		description:
			'Explore the portfolio of Ashley G. Glaraga, a Computer Engineering graduate with experience in web development, mobile applications, IoT systems, and AI-powered projects.',
		// Set this to your deployed URL (no trailing slash) for correct Open Graph links.
		url: ''
	},
	resume: {
		// File lives at static/resume.pdf and is served from /resume.pdf
		href: '/resume.pdf',
		downloadName: 'Ashley-Glaraga-Resume.pdf'
	}
};

export const contact = {
	email: 'ashleyglaraga@gmail.com',
	phone: '+63-961-456-1579',
	linkedin: 'https://linkedin.com/in/ashley-glaraga',
	github: 'https://github.com/anonymouscapybara42',
	heading: "Let's Build Something Useful",
	paragraph:
		"I'm interested in opportunities where I can apply my technical skills, contribute to meaningful projects, and continue growing as a developer. If you're hiring, working on an interesting project, or looking for a developer who enjoys solving problems, I'd be happy to connect.",
	// Contact form delivery. Leave empty to use the mailto fallback (opens the
	// visitor's email app with the message pre-filled). To send for real, paste a
	// Formspree / Getform / Web3Forms endpoint URL here. See README.
	formEndpoint: ''
};

export const navLinks = [
	{ label: 'Home', href: '#home' },
	{ label: 'About', href: '#about' },
	{ label: 'Experience', href: '#experience' },
	{ label: 'Projects', href: '#projects' },
	{ label: 'Skills', href: '#skills' },
	{ label: 'Contact', href: '#contact' }
];

export const about = {
	heading: 'Building Ideas Into Functional Solutions',
	paragraphs: [
		"I'm a Computer Engineering graduate from the University of Saint La Salle with hands-on experience in web development, application development, IoT systems, and digital design. My work includes building responsive websites, developing applications that solve practical problems, and integrating hardware and software into connected systems.",
		'I approach development with curiosity, resourcefulness, and a problem-solving mindset. I use documentation, research, and AI-assisted tools to investigate problems, learn unfamiliar technologies, and identify practical solutions. I enjoy taking an idea from initial requirements through implementation and deployment while communicating clearly and continuously improving my skills.'
	],
	values: [
		{
			icon: 'search',
			title: 'Problem Solver',
			text: 'Research and troubleshoot technical challenges using documentation, experimentation, and appropriate tools.'
		},
		{
			icon: 'rocket',
			title: 'End-to-End Development',
			text: 'Translate requirements into functional applications, from planning and implementation to deployment.'
		},
		{
			icon: 'users',
			title: 'Adaptable Collaborator',
			text: 'Communicate clearly, learn unfamiliar technologies, and work toward practical solutions.'
		}
	]
};

export const education = {
	university: 'University of Saint La Salle',
	degree: 'Bachelor of Science in Computer Engineering',
	location: 'Bacolod City, Philippines',
	period: '2022–2026'
};
