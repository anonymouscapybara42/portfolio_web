// Featured projects.
//
// Links: only add `live` or `source` when a real URL exists. Cards render a
// button only for links that are set, so nothing is ever faked.

export const projects = [
	{
		id: 'templatedepot',
		category: 'Web Development / E-commerce',
		title: 'TemplateDepot',
		visual: 'storefront',
		tech: ['Astro', 'Tailwind CSS', 'JavaScript', 'Node.js', 'Nodemailer'],
		description:
			'Developed and deployed a production website for a digital product business, featuring responsive product grids, interactive product detail modals, and customer ordering workflows. Implemented payment instructions for GCash and Maya, configured hosting, and developed email-based customer inquiry handling.',
		features: [
			'Responsive product browsing',
			'Interactive product detail modals',
			'Customer ordering workflow',
			'Payment instructions',
			'Email-based customer inquiry handling',
			'Website deployment and hosting configuration'
		],
		highlight: null,
		live: 'https://templatedepot.shop',
		source: null
	},
	{
		id: 'colab-logbook',
		category: 'Mobile Application Development',
		title: 'Co-Lab Logbook App',
		visual: 'mobile',
		tech: ['React Native', 'Expo', 'Firebase', 'Tailwind CSS'],
		description:
			'Designed and developed a laboratory logbook application to digitize recordkeeping during laboratory rental sessions. The application helps track equipment borrowed by students and document equipment usage, with Firebase supporting application data storage and management.',
		features: [
			'Digital laboratory recordkeeping',
			'Equipment borrowing records',
			'Equipment usage tracking',
			'Firebase integration',
			'Mobile application interface'
		],
		highlight: null,
		live: null,
		source: null
	},
	{
		id: 'vertiapp',
		category: 'IoT / AI / Full-Stack Development',
		title: 'VertiApp',
		visual: 'iot',
		tech: [
			'React',
			'Vite',
			'Node.js',
			'Express',
			'Socket.IO',
			'MySQL',
			'Raspberry Pi',
			'Raspberry Pi Pico',
			'YOLOv11'
		],
		description:
			'Co-developed an IoT-based vertical farming management system that combines environmental monitoring, plant identification, and plant disease detection. The system integrates physical sensors, water-management hardware, live camera feeds, and an AI-based detection pipeline into a real-time monitoring dashboard.',
		features: [
			'Environmental sensor monitoring',
			'Live camera feeds',
			'Plant health status monitoring',
			'Alerts for abnormal growing conditions',
			'Water-flow and water-level monitoring',
			'Relay-controlled water pumps',
			'AI-based plant disease detection',
			'Real-time updates through Socket.IO'
		],
		// Statistic is quoted verbatim from the resume: do not relabel as accuracy/precision.
		highlight:
			'The plant disease detection pipeline used YOLOv11 and was trained on 1,978 labeled images across seven categories, achieving 84.6% overall model performance.',
		live: null,
		source: null
	}
];
