//#region src/lib/config.ts
var siteConfig = {
	name: "Farms Empire",
	tagline: "Communities Grow Empires",
	description: "Africa's leading United Nations SDG 2 intervention organization against hunger and food insecurity.",
	url: "https://farmsempire.africa",
	contact: {
		phone: "+234 (0) 912 080 0107",
		email: {
			general: "info@farmsempire.africa",
			partnerships: "partnerships@farmsempire.africa",
			media: "media@farmsempire.africa"
		},
		address: {
			offices: [
				"Nigeria",
				"Kenya",
				"Uganda",
				"Ghana",
				"South Africa"
			],
			farms: [
				"Chidi Akaya Compound, by Old Police Station, Beside Anglican Church, Okoloma Afam, Rivers State",
				"7 David Lane, Poultry Road, Oyigbo West, Oyigbo, Rivers State",
				"Well 8 Close, off Shell Location Road, Rumuepirikom, Port Harcourt, Rivers State",
				"Federal Government Girls' College Road, Abuloma, Port Harcourt, Rivers State",
				"Lagos State Farm Estate, Odogunyan, Ikorodu, Lagos State",
				"Arigbawo Road, Off Mowe-Ofada Road, Mowe, Ogun State"
			]
		}
	},
	social: {
		instagram: "https://instagram.com/farmsempire",
		facebook: "https://facebook.com/farmsempire",
		linkedin: "https://linkedin.com/company/farmsempire",
		twitter: "https://x.com/farmsempire",
		youtube: "https://youtube.com/@farmsempire"
	},
	stats: {
		hectaresManaged: 500,
		activePartners: 180,
		farmingFamilies: 500,
		tonnesYearly: 400
	},
	partners: [
		"Agri-business Facility for Africa",
		"Tricycle Gardens",
		"Laurydon",
		"Chudills Farms",
		"Ehis Farms Atingi",
		"IYF",
		"GIZ",
		"ACP"
	],
	projects: [
		{
			title: "The Pioneer Community Farm Initiative",
			image: "/images/comm.jpg",
			location: "Ogun State, Nigeria",
			farmSize: "50 Hectares",
			communityPartners: "3 rural communities, 120 farming families",
			crops: "Cassava, Maize, Vegetables",
			status: "Active and Operational",
			description: "Farms Empire's flagship communal farming project, a living demonstration of what becomes possible when land, community, and expert management come together. Launched in partnership with local landowners and three neighboring communities, this project has transformed formerly idle agricultural land into a fully operational, commercially productive farm enterprise.",
			impact: [
				"120 farming families earning consistent agricultural income",
				"50 hectares of previously idle land fully activated",
				"Over 200 tonnes of food produced annually",
				"3 communities with improved access to locally grown food"
			]
		},
		{
			title: "Women's Agricultural Cooperative Development Programme",
			image: "/images/coop.jpg",
			location: "Oyo State, Nigeria",
			participants: "85 women farmers",
			focus: "Vegetable farming, cooperative economics, market access",
			status: "Active",
			description: "Women constitute over 60% of Africa's smallholder farmers yet receive disproportionately less support, resources, and income from agriculture. This programme provides land access, full farm setup, cooperative governance training, and direct market linkages to institutional buyers.",
			impact: [
				"85 women farmers with structured income from agriculture",
				"Cooperative formally registered and fully self-governing",
				"Average household income increased by 40% among participants",
				"3 institutional offtakers contracted for consistent market access"
			]
		},
		{
			title: "Absentee Landowner Partnership Programme",
			image: "/images/absentee.jpg",
			location: "Multiple States, Nigeria",
			partners: "18 landowners",
			totalLand: "200 Hectares",
			status: "Ongoing",
			description: "Many of Nigeria's most productive agricultural lands are owned by urban professionals and investors who neither live near their land nor have the time or expertise to develop it. A fully managed agricultural partnership that activates idle land, generates returns, and requires zero operational effort from the landowner.",
			impact: [
				"120 hectares of idle land activated across multiple states",
				"18 landowners earning regular income from previously dormant assets",
				"Over 300 community farmers engaged and earning from the farms",
				"Structured legal agreements in place protecting all parties"
			]
		},
		{
			title: "School Farm & Youth Agripreneur Initiative",
			image: "/images/school.jpg",
			location: "Lagos State, Nigeria",
			participants: "500 secondary school students + 40 youth agripreneurs",
			ageRange: "14-30 years",
			focus: "Agricultural education, youth entrepreneurship, food production",
			status: "Active",
			description: "The future of African agriculture depends on the next generation. This initiative embeds practical agricultural education in secondary schools and runs structured agripreneurship training for young people, equipping them to launch and manage their first commercial farming enterprises.",
			impact: [
				"200 students actively engaged in practical agricultural education",
				"40 youth agripreneurs launched their first commercial farm ventures",
				"8 schools with active school farm partnerships",
				"Agricultural career pathways opened for youth in partner communities"
			]
		}
	],
	testimonials: [
		{
			quote: "Before partnering with Farms Empire, my 30 hectares of land sat idle for years. Within the first season, I was earning consistent returns from communal rice farming. It changed my family's financial future.",
			name: "Chief Adewale Ogunleye",
			role: "Landowner, Ogun State",
			img: "/images/team/a-4.png"
		},
		{
			quote: "The community mobilization was unlike anything we experienced before. Farms Empire trained 45 of our farmers in modern techniques, and our yield tripled in just two seasons. This is real empowerment.",
			name: "Mrs. Fatima Bello",
			role: "Community Leader, Kaduna",
			img: "/images/team/a-1.png"
		},
		{
			quote: "As an investor, I wanted sustainable returns without the operational headache. Farms Empire handles everything, from farm setup to market access. My investment has generated 35% annual returns.",
			name: "Engr. Chukwuemeka Nwosu",
			role: "Agricultural Investor, Lagos",
			img: "/images/team/a-2.png"
		}
	],
	services: [
		{
			num: "01",
			title: "Agricultural Consultancy",
			desc: "Expert advisory services for individual farmers, cooperatives, agribusinesses, and government agencies seeking to optimize agricultural productivity and enterprise sustainability.",
			image: "/images/consultancy.jpg"
		},
		{
			num: "02",
			title: "Farm Design and Setup",
			desc: "End-to-end farm establishment, from soil testing and crop selection to infrastructure setup, irrigation design, and operational planning.",
			image: "/images/design.jpg"
		},
		{
			num: "03",
			title: "Communal Farm Management",
			desc: "We actively manage farms on behalf of our landowner and community partners: handling all operational, technical, and commercial activities while delivering agreed returns.",
			image: "/images/management.jpg"
		},
		{
			num: "04",
			title: "Community Mobilization",
			desc: "We identify, train, and organize farming communities into productive cooperative units with clear governance, defined roles, and shared accountability structures.",
			image: "/images/mobilise.jpg"
		},
		{
			num: "05",
			title: "Agricultural Training",
			desc: "We equip community farmers with practical skills in modern farming techniques, post-harvest handling, cooperative management, and agricultural business fundamentals.",
			image: "/images/train.jpg"
		},
		{
			num: "06",
			title: "Investor Engagement",
			desc: "For landowners and property investors, we provide structured agricultural partnerships that generate consistent income from land awaiting development.",
			image: "/images/invest.jpg"
		}
	]
};
//#endregion
export { siteConfig as t };
