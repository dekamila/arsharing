import { Article, Category, QuickLink } from './types';
import { Language } from './translations';

type ArticleCopy = Pick<Article, 'title' | 'excerpt'>;

const categoryCopies: Record<string, Pick<Category, 'name' | 'description' | 'highlights'>> = {
  akademik: {
    name: 'Academics',
    description: 'Official information about teaching and learning, academic calendars, graduation announcements, course registration, and the 15 faculties and study programs.',
    highlights: ['Academic Calendar 2026/2027', 'Graduation Announcements & Requirements', '15 Faculties & Study Programs', 'Online Course Registration Guide'],
  },
  perpustakaan: {
    name: 'Library',
    description: 'Physical and digital library services. Find book catalogs, free international journals, Campus B and C opening hours, and digital literacy workshops.',
    highlights: ['Free E-Journal & E-Book Access', 'Campus B & C Library Hours', 'Literacy & Mendeley Workshops', 'Latest Book Collection Catalog'],
  },
  beasiswa: {
    name: 'Scholarships',
    description: 'Complete information about domestic and international scholarships, including requirements, application schedules, and selection tips.',
    highlights: ['Excellence & LPDP Scholarships 2027', 'Djarum Foundation Plus Scholarship', 'ASEAN Student Exchange Scholarship', 'Essay Writing & Interview Tips'],
  },
  'magang-karir': {
    name: 'Internships & Careers',
    description: 'Prepare for the professional world with internship openings, career events, and practical CV and interview guidance.',
    highlights: ['Google & SOE Internship Openings 2027', 'UNAIR Career Fair 2026', 'ATS-Friendly CV Guide', 'Job Interview Tips'],
  },
  'kampus-sekitar': {
    name: 'Around Campus',
    description: 'A practical guide to daily student needs around UNAIR, including affordable housing, food, public transport, and places to relax.',
    highlights: ['10 Affordable Food Spots Near Campus', 'Housing Around Mulyorejo & Gubeng', 'Public Transport Routes', 'Weekend Destinations & Public Spaces'],
  },
  event: {
    name: 'Events',
    description: 'A schedule of activities around campus and Surabaya, from cultural festivals and national seminars to sports competitions and student markets.',
    highlights: ['Airlangga University 72nd Anniversary', 'Surabaya Cultural Festival 2026', 'National Artificial Intelligence Seminar', 'UNAIR Run 5K & Student Market'],
  },
  'panduan-internasional': {
    name: 'International Guide',
    description: 'A guide for international and exchange students covering student visas, accommodation, administration, and adapting to local culture.',
    highlights: ['Student Visa (VITAS) Guide', 'International Student Accommodation', 'UNAIR International Office Services', 'Adapting to Surabaya Culture & Language'],
  },
};

const articleTitles = [
  'Academic Calendar 2026/2027', 'September 2026 Graduation Announcement', 'Faculty and Study Program Directory', 'Online Course Registration Guide', 'Updated Odd-Semester Class Schedule',
  'Campus B and C Library Hours', 'Free E-Journal and E-Book Access for Students', 'Digital Literacy Workshop: Managing References with Mendeley', 'New Library Collection for September 2026', 'Nusantara Literature Book Fair and Discussion',
  'Kemendikbud Excellence Scholarship 2027', 'LPDP Scholarship: Requirements and Application Guide', 'Djarum Foundation Plus Scholarship 2026', 'ASEAN Student Exchange Scholarship', 'Tips for Writing a Strong Scholarship Essay',
  'Google Indonesia Internship Opening 2027', 'How to Create an ATS-Friendly CV', 'Airlangga University Career Fair 2026', 'Startup Internship: A UNAIR Student Experience', 'Preparing for a Job Interview',
  '10 Affordable and Delicious Food Spots Near Campus C', 'Housing Recommendations Around Mulyorejo', 'Public Transport Routes to UNAIR', 'Favorite Student Hangouts in Surabaya', 'Weekend Destinations Around Surabaya',
  'Airlangga University 72nd Anniversary', 'Surabaya Cultural Festival 2026', 'National Artificial Intelligence Seminar', 'UNAIR Run 5K: Running for Health', 'Student Entrepreneurship Week Market',
  'How to Apply for an Indonesian Student Visa (VITAS)', 'Accommodation Guide for International Students', 'Living in Surabaya: Tips for International Students', 'UNAIR International Student Support Services', 'East Java Culture and Cuisine',
];

const articleExcerpts = [
  'The complete academic activity schedule for the 2026/2027 academic year at Airlangga University.', 'Complete information about the September 2026 graduation ceremony for all faculties.', 'Airlangga University has 15 faculties and more than 60 accredited study programs.', 'Steps for registering courses through UNAIR academic information systems.', 'Important updates to the odd-semester 2026/2027 class schedule for students.',
  'The latest operating hours for Airlangga University Libraries on Campuses B and C.', 'A complete guide to accessing academic journal databases and premium e-books subscribed to by UNAIR.', 'Join a free Mendeley reference-management workshop for academic writing.', 'A list of new printed books and literature added to the UNAIR Library collection.', 'UNAIR Library collaborates with local publishers on a literature exhibition and book discussion.',
  'Registration for the Kemendikbud Excellence Scholarship for high-achieving students is now open.', 'A preparation guide for final-year students planning to apply for an LPDP scholarship.', 'Djarum Beasiswa Plus registration for UNAIR students in their fourth semester.', 'A fully funded one-semester study opportunity at leading Southeast Asian universities.', 'A guide to writing a scholarship motivation letter and essay that stands out.',
  'Applications for the prestigious Google Indonesia internship program for students from various majors.', 'Learn how to make a Curriculum Vitae that works well with Applicant Tracking Systems.', 'UNAIR annual career fair featuring dozens of national and multinational companies.', 'An UNAIR student shares a successful internship experience at leading Indonesian startups.', 'Methods and tips for appearing confident and convincing during a job interview.',
  'Recommended student-friendly food spots around Mulyorejo near UNAIR Campus C.', 'A guide to finding student accommodation around UNAIR Campus C and estimated prices.', 'A guide to Suroboyo Bus, Wara-Wiri, and angkot routes between UNAIR campuses.', 'A list of Instagrammable cafes and coffee shops in East Surabaya for studying or relaxing.', 'Short weekend escape ideas in Surabaya and nearby cities.',
  'The 72nd UNAIR anniversary celebration with academic, social, and entertainment activities.', 'The city’s biggest annual arts and culture festival, worth visiting.', 'An expert discussion about artificial intelligence and its impact on academia and industry.', 'A mini marathon around Campus C, open to students and the public.', 'An exhibition of products and food created by Airlangga student entrepreneurs.',
  'A step-by-step guide for prospective international students applying for a limited stay visa.', 'Safe and comfortable housing options for international students around UNAIR.', 'Practical information about weather, transport, and adapting to life in Surabaya.', 'Administration, counseling, and buddy program services provided by Airlangga Global Engagement.', 'An introduction to East Java customs and traditional food worth trying in Surabaya.',
];

const articleCopies: Record<number, ArticleCopy> = Object.fromEntries(
  articleTitles.map((title, index) => [index + 1, { title, excerpt: articleExcerpts[index] }]),
);

export function localizeCategory(category: Category, language: Language): Category {
  if (language === 'id') return category;
  return { ...category, ...categoryCopies[category.slug] };
}

export function localizeArticle(article: Article, language: Language): Article {
  if (language === 'id') return article;
  const copy = articleCopies[article.id];
  return {
    ...article,
    ...copy,
    content: `<p>${copy.excerpt}</p><p>Read the latest requirements, schedules, and official updates through the relevant UNAIR information channels.</p>`,
    tags: article.tags.map((tag) => tag.replace('jadwal', 'schedule').replace('pengumuman', 'announcement').replace('buku', 'books').replace('layanan', 'services')),
  };
}

export function localizeQuickLink(link: QuickLink, language: Language): QuickLink {
  if (language === 'id') return link;
  const titles: Record<number, string> = { 1: 'UNAIR SSO Platform', 2: 'UNAIR E-Learning', 3: 'UNAIR Library', 5: 'SINTA Portal', 6: 'Tracer Study' };
  return { ...link, title: titles[link.id] ?? link.title };
}