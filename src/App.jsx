import profile from "./assets/profile.JPG";
export default function ModernCV() {
	return (
		<div className="min-h-screen bg-gray-100 py-10 px-4 flex justify-center text-gray-900">
			<div className="w-full max-w-4xl bg-white shadow-xl rounded-2xl p-12">
				{/* Header */}
				<header className="border-b border-gray-300 pb-6 mb-8">
					<div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
						<div>
							<h1 className="text-4xl font-bold tracking-tight text-gray-900">PURNA AJI WARDHANA</h1>

							<p className="text-lg text-gray-600 mt-2 font-medium">Front-End Developer</p>

							<div className="flex flex-wrap gap-x-6 gap-y-2 mt-4 text-sm text-gray-700">
								<span>📍 Indonesia</span>
								<span>📞 0812-5035-1230</span>
								<span>📧 wardhanaaji11@gmail.com</span>
								<span>💻 github.com/ajiwardhana</span>
								<span>🔗 linkedin.com/in/purna-aji-wardhana-0609a3407/</span>
							</div>
						</div>

						{/* Profile Photo */}
						<div className="flex justify-center md:justify-end">
							<img src={profile} alt="Profile" className="w-40 h-40 rounded-2xl object-cover object-top border-4 border-gray-200 shadow-md" />
						</div>
					</div>
				</header>

				{/* Professional Summary */}
				<section className="mb-8">
					<h2 className="text-xl font-bold text-gray-900 border-b border-gray-200 pb-2 mb-4 uppercase tracking-wide">Professional Summary</h2>

					<p className="text-gray-700 leading-relaxed text-[15px]">
						Fresh graduate Informatika dari Universitas Islam Indonesia tahun 2026 dengan fokus pada Front-End Development. Memiliki pengalaman membangun website responsif dan user-friendly menggunakan HTML, CSS, JavaScript, dan React.js.
						Terbiasa mengembangkan project web melalui project akademik maupun personal serta memiliki ketertarikan tinggi terhadap UI/UX dan teknologi web modern.
					</p>
				</section>

				{/* Technical Skills */}
				<section className="mb-8">
					<h2 className="text-xl font-bold text-gray-900 border-b border-gray-200 pb-2 mb-4 uppercase tracking-wide">Technical Skills</h2>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700 text-[15px]">
						<div>
							<h3 className="font-semibold mb-2">Front-End</h3>
							<ul className="space-y-1 list-disc list-inside">
								<li>HTML5</li>
								<li>CSS3</li>
								<li>JavaScript (ES6+)</li>
								<li>React.js</li>
								<li>Responsive Web Design</li>
							</ul>
						</div>

						<div>
							<h3 className="font-semibold mb-2">Tools & Technologies</h3>
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
				<section className="mb-8">
					<h2 className="text-xl font-bold text-gray-900 border-b border-gray-200 pb-2 mb-4 uppercase tracking-wide">Projects</h2>

					<div className="space-y-6">
						<div>
							<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1 mb-2">
								<h3 className="text-lg font-semibold text-gray-900">Personal Portfolio Website</h3>
								<span className="text-sm text-gray-500">HTML • CSS • JavaScript</span>
							</div>

							<ul className="list-disc list-inside text-gray-700 space-y-1 text-[15px]">
								<li>Membangun website portofolio modern dan responsif</li>
								<li>Mengoptimalkan tampilan untuk desktop dan mobile</li>
								<li>Menggunakan GitHub untuk version control</li>
							</ul>
						</div>

						<div>
							<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1 mb-2">
								<h3 className="text-lg font-semibold text-gray-900">Academic Web Application</h3>
								<span className="text-sm text-gray-500">PHP • MySQL • Bootstrap</span>
							</div>

							<ul className="list-disc list-inside text-gray-700 space-y-1 text-[15px]">
								<li>Mengembangkan tampilan antarmuka aplikasi web</li>
								<li>Membuat fitur CRUD dan navigasi responsif</li>
								<li>Berkolaborasi dalam pengembangan project akademik</li>
							</ul>
						</div>

						<div>
							<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1 mb-2">
								<h3 className="text-lg font-semibold text-gray-900">UI Landing Page Design</h3>
								<span className="text-sm text-gray-500">Figma • HTML • CSS</span>
							</div>

							<ul className="list-disc list-inside text-gray-700 space-y-1 text-[15px]">
								<li>Mendesain landing page modern dan clean</li>
								<li>Mengimplementasikan desain menjadi website responsive</li>
								<li>Fokus pada user experience dan visual hierarchy</li>
							</ul>
						</div>
					</div>
				</section>

				{/* Education */}
				<section className="mb-8">
					<h2 className="text-xl font-bold text-gray-900 border-b border-gray-200 pb-2 mb-4 uppercase tracking-wide">Education</h2>

					<div>
						<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1">
							<h3 className="text-lg font-semibold text-gray-900">Universitas Islam Indonesia</h3>
							<span className="text-sm text-gray-500">2018 – 2026</span>
						</div>

						<p className="text-gray-700 mt-1 text-[15px]">Bachelor of Informatics</p>

						<p className="text-gray-600 mt-2 text-[15px] leading-relaxed">Fokus pembelajaran pada web development, software engineering, database systems, dan user interface design.</p>
					</div>
				</section>

				{/* Soft Skills */}
				<section>
					<h2 className="text-xl font-bold text-gray-900 border-b border-gray-200 pb-2 mb-4 uppercase tracking-wide">Soft Skills</h2>

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
