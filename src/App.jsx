import { useState } from "react";
import profile from "./assets/profile.jpg";

export default function ModernCV() {
	const [lang, setLang] = useState("id");

	const content = {
		id: {
			role: "Front-End Developer",
			summaryTitle: "Professional Summary",
			summary:
				"Fresh graduate Informatika dari Universitas Islam Indonesia tahun 2026 dengan fokus pada Front-End Development. Memiliki pengalaman membangun website responsif dan user-friendly menggunakan HTML, CSS, JavaScript, dan React.js. Terbiasa mengembangkan project web melalui project akademik maupun personal serta memiliki ketertarikan tinggi terhadap UI/UX dan teknologi web modern.",

			skillsTitle: "Technical Skills",
			frontend: "Front-End",
			tools: "Tools & Technologies",

			download: "Download CV",
			portfolio: "Portfolio",
			github: "GitHub",
			linkedin: "LinkedIn",

			projectsTitle: "Projects",

			portfolioDesc: ["Membangun website portofolio modern dan responsif", "Mengoptimalkan tampilan untuk desktop dan mobile", "Menggunakan GitHub untuk version control"],

			academicDesc: ["Mengembangkan tampilan antarmuka aplikasi web", "Membuat fitur CRUD dan navigasi responsif", "Berkolaborasi dalam pengembangan project akademik"],

			landingDesc: ["Mendesain landing page modern dan clean", "Mengimplementasikan desain menjadi website responsive", "Fokus pada user experience dan visual hierarchy"],

			educationTitle: "Education",
			degree: "Bachelor of Informatics",
			educationDesc: "Fokus pembelajaran pada web development, software engineering, database systems, dan user interface design.",

			softSkillsTitle: "Soft Skills",

			button: "EN",
		},

		en: {
			role: "Front-End Developer",
			summaryTitle: "Professional Summary",
			summary:
				"Informatics fresh graduate from Universitas Islam Indonesia in 2026 with a focus on Front-End Development. Experienced in building responsive and user-friendly websites using HTML, CSS, JavaScript, and React.js. Skilled in developing web projects through both academic and personal projects, with a strong interest in UI/UX and modern web technologies.",

			skillsTitle: "Technical Skills",
			frontend: "Front-End",
			tools: "Tools & Technologies",

			download: "Download Resume",
			portfolio: "Portfolio",
			github: "GitHub",
			linkedin: "LinkedIn",

			projectsTitle: "Projects",

			portfolioDesc: ["Built a modern and responsive portfolio website", "Optimized layouts for desktop and mobile devices", "Used GitHub for version control"],

			academicDesc: ["Developed user interfaces for web applications", "Implemented CRUD features and responsive navigation", "Collaborated in academic project development"],

			landingDesc: ["Designed a modern and clean landing page", "Implemented designs into responsive websites", "Focused on user experience and visual hierarchy"],

			educationTitle: "Education",
			degree: "Bachelor of Informatics",
			educationDesc: "Focused on web development, software engineering, database systems, and user interface design.",

			softSkillsTitle: "Soft Skills",

			button: "ID",
		},
	};

	const t = content[lang];

	return (
		<div className="relative min-h-screen bg-gray-100 py-6 px-4 flex justify-center text-gray-900 print:bg-white print:py-0 print:px-0">
			{/* Language Toggle */}
			<button onClick={() => setLang(lang === "id" ? "en" : "id")} className="fixed top-4 right-4 z-50 px-4 py-2 rounded-lg bg-gray-900 text-white text-sm font-semibold shadow hover:bg-gray-700 transition print:hidden">
				{t.button}
			</button>

			<div className="w-full max-w-4xl bg-white shadow-xl rounded-2xl p-6 print:shadow-none print:rounded-none print:p-5">
				{/* Header */}
				<header className="border-b border-gray-300 pb-4 mb-4">
					<div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
						<div>
							<h1 className="text-3xl font-bold tracking-tight text-gray-900">PURNA AJI WARDHANA</h1>

							<p className="text-base text-gray-600 mt-1 font-medium">{t.role}</p>

							<div className="flex flex-wrap gap-x-4 gap-y-1 mt-3 text-xs text-gray-700">
								<span>📍 Indonesia</span>
								<span>📞 0812-5035-1230</span>
								<span>📧 wardhanaaji11@gmail.com</span>
								{/* <span>💻 github.com/ajiwardhana</span>
								<span>🔗 linkedin.com/in/purna-aji-wardhana-0609a3407/</span> */}
							</div>
							<div className="flex flex-wrap gap-2 mt-4 print:hidden">
								<button onClick={() => window.print()} className="px-3 py-2 rounded-lg bg-gray-900 text-white text-xs font-medium hover:bg-gray-700 transition print:hidden">
									📄 {t.download}
								</button>

								<a href="https://portfolio-kamu.vercel.app" target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-lg border border-gray-300 text-sm font-medium hover:bg-gray-100 transition">
									🌐 {t.portfolio}
								</a>

								<a href="https://github.com/ajiwardhana" target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-lg border border-gray-300 text-sm font-medium hover:bg-gray-100 transition">
									💻 {t.github}
								</a>
								<a href="https://www.linkedin.com/in/purna-aji-wardhana-0609a3407/" target="_blank" rel="noopener noreferrer" className="px-3 py-2 rounded-lg border border-gray-300 text-xs font-medium hover:bg-gray-100 transition">
									🔗 {t.linkedin}
								</a>
							</div>
						</div>

						<div className="flex justify-center md:justify-end">
							<img src={profile} alt="Profile" className="w-28 h-32 rounded-2xl object-cover object-top border-4 border-gray-200 shadow-md" />
						</div>
					</div>
				</header>

				{/* Summary */}
				<section className="mb-4">
					<h2 className="text-lg font-bold text-gray-900 border-b border-gray-200 pb-1 mb-3 uppercase tracking-wide">{t.summaryTitle}</h2>

					<p className="text-gray-700 leading-relaxed text-sm">{t.summary}</p>
				</section>

				{/* Skills */}
				<section className="mb-4">
					<h2 className="text-lg font-bold text-gray-900 border-b border-gray-200 pb-1 mb-3 uppercase tracking-wide">{t.skillsTitle}</h2>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700 text-sm">
						<div>
							<h3 className="font-semibold mb-2">{t.frontend}</h3>

							<ul className="space-y-1 list-disc list-inside">
								<li>HTML5</li>
								<li>CSS3</li>
								<li>JavaScript (ES6+)</li>
								<li>React.js</li>
								<li>Responsive Web Design</li>
							</ul>
						</div>

						<div>
							<h3 className="font-semibold mb-2">{t.tools}</h3>

							<ul className="space-y-1 list-disc list-inside">
								<li>Tailwind CSS</li>
								<li>Bootstrap</li>
								<li>Git & GitHub</li>
								<li>Figma</li>
								<li>PHP & MySQL</li>
							</ul>
						</div>
					</div>
				</section>

				{/* Projects */}
				<section className="mb-4">
					<h2 className="text-lg font-bold text-gray-900 border-b border-gray-200 pb-1 mb-3 uppercase tracking-wide">{t.projectsTitle}</h2>

					<div className="space-y-4">
						<div>
							<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1 mb-2">
								<h3 className="text-lg font-semibold">Personal Portfolio Website</h3>
								<span className="text-sm text-gray-500">HTML • CSS • JavaScript</span>
							</div>

							<ul className="list-disc list-inside text-sm space-y-1">
								{t.portfolioDesc.map((item) => (
									<li key={item}>{item}</li>
								))}
							</ul>
						</div>

						<div>
							<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1 mb-2">
								<h3 className="text-lg font-semibold">Academic Web Application</h3>
								<span className="text-sm text-gray-500">PHP • MySQL • Bootstrap</span>
							</div>

							<ul className="list-disc list-inside text-sm space-y-1">
								{t.academicDesc.map((item) => (
									<li key={item}>{item}</li>
								))}
							</ul>
						</div>

						<div>
							<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1 mb-2">
								<h3 className="text-lg font-semibold">UI Landing Page Design</h3>
								<span className="text-sm text-gray-500">Figma • HTML • CSS</span>
							</div>

							<ul className="list-disc list-inside text-sm space-y-1">
								{t.landingDesc.map((item) => (
									<li key={item}>{item}</li>
								))}
							</ul>
						</div>
					</div>
				</section>

				{/* Education */}
				<section className="mb-4">
					<h2 className="text-lg font-bold text-gray-900 border-b border-gray-200 pb-1 mb-3 uppercase tracking-wide">{t.educationTitle}</h2>

					<div>
						<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1">
							<h3 className="text-lg font-semibold">Universitas Islam Indonesia</h3>
							<span className="text-sm text-gray-500">2018 – 2026</span>
						</div>

						<p className="text-gray-700 mt-1 text-sm">{t.degree}</p>

						<p className="text-gray-600 mt-2 text-sm leading-relaxed">{t.educationDesc}</p>
					</div>
				</section>

				{/* Soft Skills */}
				<section>
					<h2 className="text-lg font-bold text-gray-900 border-b border-gray-200 pb-1 mb-3 uppercase tracking-wide">{t.softSkillsTitle}</h2>

					<div className="flex flex-wrap gap-3 text-sm">
						{["Problem Solving", "Communication", "Teamwork", "Adaptability", "Time Management"].map((skill) => (
							<span key={skill} className="px-4 py-2 rounded-full bg-gray-100 text-gray-700 border border-gray-200">
								{skill}
							</span>
						))}
					</div>
				</section>
			</div>
		</div>
	);
}
