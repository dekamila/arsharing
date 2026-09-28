import { Article, Category, QuickLink, Place } from './types';
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
  'jelajah-kota': {
    name: 'Explore the City',
    description: 'A guide to exploring Surabaya, from legendary culinary destinations and popular hangouts to cultural spaces, historical museums, and public libraries.',
    highlights: ['Legendary Food Spots & Trendy Cafes', 'Historical & Cultural Destinations', 'Art Museums & Galleries in Surabaya', 'Public Libraries & Study Spaces'],
  },
  'kebutuhan-harian': {
    name: 'Daily Needs',
    description: 'Complete information on daily student life in Surabaya, including student boarding houses, public transport routes, laundry services, and grocery shopping.',
    highlights: ['Boarding Houses & Rentals Around Mulyorejo & Gubeng', 'Campus Bus & Public Transport Route Guide', 'Fast & Clean Laundry Service Recommendations', 'Grocery Stores & Daily Essentials Shopping'],
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

const articleTagCopies: Record<number, string[]> = {
  1: ['academic calendar', 'schedule'],
  2: ['graduation', 'announcement'],
  3: ['faculties', 'study programs'],
  4: ['course registration', 'SIA'],
  5: ['schedule', 'classes'],
  6: ['library services', 'schedule'],
  7: ['journals', 'research'],
  8: ['workshop', 'literacy'],
  9: ['collection', 'books'],
  10: ['event', 'book fair'],
  11: ['national', 'education ministry'],
  12: ['LPDP', 'postgraduate'],
  13: ['Djarum', 'soft skills'],
  14: ['exchange', 'international'],
  15: ['tips', 'essay'],
  16: ['internship', 'technology'],
  17: ['tips', 'CV'],
  18: ['career fair', 'job openings'],
  19: ['startup', 'experience'],
  20: ['interview', 'tips'],
  21: ['food', 'Mulyorejo'],
  22: ['housing', 'accommodation'],
  23: ['transportation', 'bus'],
  24: ['hangout', 'cafes'],
  25: ['travel', 'leisure'],
  26: ['anniversary', 'celebration'],
  27: ['culture', 'Surabaya'],
  28: ['seminar', 'technology'],
  29: ['sports', 'running'],
  30: ['business fair', 'entrepreneurship'],
  31: ['visa', 'international'],
  32: ['housing', 'international'],
  33: ['tips', 'living'],
  34: ['support', 'services'],
  35: ['culture', 'food'],
};

const articleContentCopies: Record<number, string> = {
  1: `<p>Universitas Airlangga has officially released its academic calendar for the 2026/2027 academic year. It is an important guide for the academic community, especially students, as they plan their activities across the next two semesters.</p>
    <h2>Odd Semester Schedule</h2>
    <p>Re-registration and academic advising for the odd semester will take place in early August 2026. Classes are scheduled to begin in mid-August and run through late November. Midterm examinations (UTS) will take place in the second week of October, while final examinations (UAS) are scheduled for early December 2026.</p>
    <ul><li>Re-registration: August 1-10, 2026</li><li>Classes: August 16-November 30, 2026</li><li>Midterm exams: October 12-16, 2026</li><li>Final exams: December 7-18, 2026</li></ul>
    <h2>Even Semester Schedule</h2>
    <p>Even-semester classes will begin in February 2027. Students should keep these key dates in mind for course registration and other important deadlines. More details are available through the SIA portal.</p>`,
  2: `<p>The Directorate of Education at Universitas Airlangga is pleased to announce the September 2026 graduation ceremony. The event will be held fully in person at the Airlangga Convention Center (ACC), UNAIR Campus C, in accordance with applicable health protocols.</p>
    <h2>Registration Requirements</h2>
    <p>Graduating students must complete all academic and financial administration before registering through the Cybercampus portal. Registration is open from August 15 to August 30, 2026. Required documents include proof of library clearance, proof of thesis or dissertation submission, and a recent photograph.</p>
    <h2>Ceremony Schedule</h2>
    <p>Because of the number of graduates, the ceremony will be held over two days:</p>
    <ul><li>Day 1 (Saturday, September 19, 2026): Faculties of Medicine, Dentistry, Law, and Economics and Business.</li><li>Day 2 (Sunday, September 20, 2026): Faculties of Pharmacy, Public Health, Science and Technology, and others.</li></ul>
    <p>The rehearsal will take place on Thursday, September 17, 2026. All graduating students must attend so the ceremony can run smoothly.</p>`,
  3: `<p>Universitas Airlangga (UNAIR) consistently ranks among Indonesia's leading universities. It currently comprises 15 faculties offering programs from diploma and bachelor's degrees through master's and doctoral levels.</p>
    <h2>Health Sciences and Science</h2>
    <p>Health-related faculties include Medicine, Dentistry, Pharmacy, Public Health, and Nursing. Science is represented by the Faculty of Science and Technology and the Faculty of Veterinary Medicine. These programs are supported by modern laboratories and teaching hospitals.</p>
    <h2>Social Sciences and Humanities</h2>
    <p>The social sciences and humanities include the Faculties of Law, Economics and Business, Social and Political Sciences, Psychology, and Humanities. UNAIR also has the School of Health and Natural Sciences (SIKIA) in Banyuwangi, as well as a graduate school and vocational faculty.</p>
    <p>Nearly all UNAIR programs have received an A or Excellent accreditation from BAN-PT, and many hold international accreditations such as AUN-QA, FIBAA, and ASIIN.</p>`,
  4: `<p>At the start of each semester, all students must register for courses by completing their online Study Plan Card (KRS). The process can be completed through Universitas Airlangga's Academic Information System (SIA).</p>
    <h2>How to Complete Your KRS</h2>
    <p>First, make sure your tuition (UKT) for the upcoming semester has been paid. Sign in to Cybercampus with your registered student number and password. Open the Academic menu and select Course Registration to view the courses, classes, and schedules offered that semester.</p>
    <p>Select courses according to your curriculum or your academic advisor's guidance. Check class capacity, as popular classes may fill quickly. If a class is full, choose an alternative or contact your faculty's academic office.</p>
    <h2>Academic Advisor Approval</h2>
    <p>When you have finished selecting courses, choose Save and Submit for Approval. Your KRS must be approved in the system by your academic advisor. Students are encouraged to consult their advisor before approval. If a course is not approved, revise your plan during the KRS change period (KPRS).</p>`,
  5: `<p>The Directorate of Education has announced schedule adjustments for several university-required and faculty courses in the 2026/2027 odd semester. The changes are intended to optimize classroom use and support hybrid classes in several faculties.</p>
    <h2>University Required Courses</h2>
    <p>Most university-required courses, including Religion, Pancasila, and Civics, have moved to afternoon sessions starting at 15:00 WIB to avoid conflicts with faculty courses. Some sections will be held fully online through AULA (Airlangga University e-Learning Application).</p>
    <h2>Check the Latest Schedule</h2>
    <p>Students are advised to check their schedules again through the SIA portal. If a change creates a conflict with another course, students may switch classes during next week's KPRS period.</p>
    <p>Faculties will also share program-specific schedules through official student communication groups and faculty notice boards. Keep checking for updates so you do not miss the first classes.</p>`,
  6: `<p>Universitas Airlangga Library has updated its service hours to better support students, especially those working on final projects or research. The policy takes effect at the beginning of the 2026/2027 odd semester.</p>
    <h2>Regular Opening Hours</h2>
    <p>The Campus B Library on Jl. Dharmawangsa Dalam and the Campus C Library in Mulyorejo are open Monday through Friday from 08:00 to 20:00 WIB. The extended evening hours are intended to accommodate students with busy daytime schedules.</p>
    <h2>Weekend Services</h2>
    <p>The libraries also serve visitors on weekends. On Saturdays, they are open from 09:00 to 15:00 WIB; they are closed on Sundays and national holidays. Circulation services, including borrowing and returns, close 30 minutes before the library closes.</p>
    <p>Visitors must bring their Student ID Card (KTM) or scan the library app's barcode to enter. Reading rooms, discussion rooms, and journal-search computers are available throughout opening hours.</p>`,
  7: `<p>Each year, Universitas Airlangga subscribes to international journal and e-book databases worth billions of rupiah. These resources are free for all students to support research and learning. Subscribed databases include ScienceDirect, Scopus, SpringerLink, IEEE Xplore, and ProQuest.</p>
    <h2>Access on Campus</h2>
    <p>When connected to UNAIR Wi-Fi (UNAIR-Login or eduroam) on campus, you can access the databases without an additional login. Visit the UNAIR Digital Library website, choose E-Resources, and select the publisher you need.</p>
    <h2>Remote Access</h2>
    <p>Students off campus can use Remote Access through UNAIR SSO (Single Sign-On) or VPN. OpenAthens is another option; register with your official student email address ending in @mhs.unair.ac.id.</p>
    <p>Do not download articles in bulk using bots or share access with people outside the university. Such activity may cause providers to block the university's access.</p>`,
  8: `<p>Academic writing, including papers, theses, and dissertations, requires good reference management. To help students develop this skill, the UNAIR Library is holding a digital-literacy workshop series. The first session covers smart reference management with Mendeley.</p>
    <h2>Workshop Topics</h2>
    <p>Participants will learn how to install the application, add references manually or from journal databases, organize documents, cite sources, and automatically create bibliographies in Microsoft Word using styles such as APA or IEEE.</p>
    <h2>Registration and Schedule</h2>
    <p>The hybrid workshop will be held on Wednesday, September 16, 2026, from 13:00 to 15:00 WIB, in the Campus B Library Training Room and via Zoom. It is free and open to all students, with priority for final-year students.</p>
    <p>Register using the link in the official UNAIR Library Instagram bio. In-person participants should bring a laptop with an internet connection.</p>`,
  9: `<p>The Universitas Airlangga Library continues to update its collection to meet visitors' information needs. In September 2026, it added more than 500 new printed books across fields including medicine, business, and literature.</p>
    <h2>New Collection Highlights</h2>
    <p>This month's acquisitions focus on materials supporting new study programs and the latest editions of core textbooks recommended by lecturers. The Airlangga Corner reading area has also received a significant number of fiction and self-development titles.</p>
    <h2>Find New Books</h2>
    <p>The full list is available through the UNAIR Library online catalog (OPAC) under New Arrivals. The books are displayed on a dedicated New Collection shelf in the main lobbies of the Campus B and C libraries for one month before being moved to the general circulation shelves.</p>
    <p>Students may borrow the books under the library's usual lending rules. Take the opportunity to be among the first to read these new titles.</p>`,
  10: `<p>For Library Visitor Month, the UNAIR Library is partnering with the Faculty of Humanities (FIB) and independent Surabaya publishers to present the Nusantara Literature Book Fair and Discussion. The event aims to encourage reading and appreciation of local literary works.</p>
    <h2>Affordable Book Fair</h2>
    <p>The week-long fair runs from September 21 to 27, 2026, in the first-floor corridor of the Campus B Library. Thousands of fiction, poetry, history, and humanities titles will be offered, with discounts of up to 50% for UNAIR students.</p>
    <h2>Discussion and Book Review</h2>
    <p>The main program is a discussion of a novel by an East Java writer whose work recently received a national award. The panel will include the author, an FIB literary critic, and a student representative. The session is scheduled for Friday, September 25, 2026, at 14:00 WIB.</p>
    <p>The program also includes poetry set to music by the student arts group and short-story readings. Attendees will receive an e-certificate and have a chance to win free books.</p>`,
  11: `<p>The Ministry of Education, Culture, Research, and Technology (Kemendikbudristek) has reopened applications for the 2027 Excellence Scholarship. The program is for high-achieving bachelor's, master's, and doctoral students with academic or non-academic accomplishments at national or international level.</p>
    <h2>Scholarship Benefits</h2>
    <p>Recipients receive full tuition support (UKT), a monthly living allowance adjusted to their study location, and book assistance. Master's and doctoral students may also receive research funding.</p>
    <h2>Eligibility and Application</h2>
    <p>Key requirements include a minimum GPA of 3.25 for bachelor's students or 3.50 for master's and doctoral students, a certificate of achievement at least at national level, a study-plan essay, and proof of English proficiency (TOEFL/IELTS). New students and continuing students up to their third semester may apply.</p>
    <p>Online applications are accepted through the official Excellence Scholarship portal from September 15 to October 15, 2026. Interested UNAIR students may request a recommendation letter from their dean or the Directorate of Student Affairs.</p>`,
  12: `<p>The Indonesia Endowment Fund for Education (LPDP), under the Ministry of Finance, is one of the country's largest and most sought-after scholarship providers. Final-year UNAIR students planning to pursue postgraduate study in Indonesia or abroad can benefit from preparing early.</p>
    <h2>LPDP Program Tracks</h2>
    <p>Tracks include the Regular Scholarship, World-Class University Scholarship (PTUD), Targeted Scholarships for civil servants, military and police personnel, or entrepreneurs, and Affirmative Scholarships for underrepresented regions, low-income applicants, and people with disabilities. Choose the track that best fits your background because requirements differ.</p>
    <h2>Main Requirements</h2>
    <p>Applicants generally need a diploma and academic transcript, language test results meeting the minimum score (TOEFL iBT/IELTS for overseas study or TOEFL ITP for domestic study), and an unconditional Letter of Acceptance from the destination university. Applicants must also prepare an essay about their contribution to Indonesia and a personal statement.</p>
    <p>The selection process includes administrative screening, a scholastic aptitude test for applicants without an LoA, and a substantive interview. UNAIR regularly offers LPDP mentoring through Airlangga Global Engagement (AGE).</p>`,
  13: `<p>Djarum Foundation has reopened Djarum Beasiswa Plus for high-achieving bachelor's and applied bachelor's students across Indonesia, including at Universitas Airlangga. In addition to financial support, the program offers comprehensive soft-skills training.</p>
    <h2>Program Benefits</h2>
    <p>Scholars receive a monthly allowance of Rp1,000,000 for one year. They also take part in Nation Building, Character Building, Leadership Development, Competition Challenges, and International Exposure. The program aims to develop resilient, globally minded future leaders.</p>
    <h2>Eligibility and Application</h2>
    <p>The program is for students currently in semester 4 (class of 2024). Applicants need a minimum GPA of 3.20 through semester 3, active involvement in campus or community organizations, and must not hold another scholarship. Applicants must pass written tests and an interview.</p>
    <p>The deadline to submit documents to the UNAIR Directorate of Student Affairs is May 20, 2026. Prepare an academic transcript, organization or committee certificates, and proof of active enrollment.</p>
    <h2>Official Information and Application</h2>
    <p>See <a href="https://djarumbeasiswaplus.org/home" target="_blank" rel="noopener noreferrer">Djarum Beasiswa Plus</a> for official details.</p>
    <p>Visit the <a href="https://djarumbeasiswaplus.org/our-program/regulation-djarum-beasiswa-plus" target="_blank" rel="noopener noreferrer">Djarum Beasiswa Plus requirements page</a> to review eligibility and apply.</p>`,
  14: `<p>Airlangga Global Engagement (AGE) has opened applications for the ASEAN University Network-ASEAN Credit Transfer System (AUN-ACTS) exchange program for the 2026/2027 even semester. The program gives UNAIR students the opportunity to study for one semester at a partner university in the ASEAN University Network.</p>
    <h2>Partner Universities</h2>
    <p>Available choices include the National University of Singapore (NUS), Universiti Malaya (UM), Chulalongkorn University, and the University of the Philippines. This year, funding from university partners has increased the quota to 15 students.</p>
    <h2>Funding and Eligibility</h2>
    <p>The scholarship covers round-trip airfare, tuition at the host university, a monthly allowance, health insurance, and accommodation assistance. Applicants must be in semesters 3 to 5, have a minimum GPA of 3.30, and a TOEFL ITP score of at least 550 or equivalent.</p>
    <p>Along with academic credit transfer, participants gain valuable cross-cultural experience. Applications are open through the end of September, followed by a focus group discussion (FGD) and an interview in English.</p>`,
  15: `<p>A scholarship essay or motivation letter is often one of the most important parts of a selection process, especially for overseas or highly competitive programs. When many applicants have strong grades, the essay is your opportunity to show the selection panel your character, vision, and distinctive experiences.</p>
    <h2>Build a Strong Essay Structure</h2>
    <p>A good scholarship essay should do more than repeat your CV. Begin with an engaging personal story or a turning point. Connect it to your academic interests, explain why you chose the program or university, and show how the scholarship will help you reach your long-term goals.</p>
    <h2>Show, Don't Tell</h2>
    <p>Instead of simply claiming to be a dedicated leader, describe a concrete experience: a project you led through a difficult moment, the steps you took, and the result. Selection panels look for evidence that supports the qualities you describe.</p>
    <p>Allow enough time to edit and proofread. Ask a lecturer, senior student, or capable peer to review your essay. Grammar errors can make an otherwise strong application seem careless.</p>`,
  16: `<p>Good news for students aspiring to work in the technology industry: Google Indonesia has opened applications for its 2027 Student Training in Engineering Program (STEP) and Business Internship. The 10-to-12-week internships will take place during the next even-semester break, from May to August 2027.</p>
    <h2>Available Positions</h2>
    <p>The internships are not limited to IT students. Google has two main tracks:</p>
    <ul><li><strong>Engineering &amp; Tech:</strong> Software Engineering Intern and Cloud Engineering Intern. Applicants need programming skills in Java, C++, Python, or Go and a strong understanding of algorithms.</li><li><strong>Business &amp; Non-Tech:</strong> Marketing, Sales, Human Resources, and Public Policy Intern. Open to students in economics, communications, law, and other social sciences.</li></ul>
    <h2>Recruitment Process</h2>
    <p>Google's selection process is competitive. Technical candidates complete an online coding assessment and several technical interviews. Non-technical interviews focus on business cases, problem-solving, and cultural fit. Apply online through Google's careers site by October 30, 2026. UNAIR's Directorate of Career Development will offer mock interviews to students who pass document screening.</p>`,
  17: `<p>Many large and multinational companies use Applicant Tracking Systems (ATS) to screen thousands of CVs before recruiters read them. If your CV is not ATS-friendly, it may be rejected automatically even when you meet the qualifications.</p>
    <h2>What Is an ATS-Friendly CV?</h2>
    <p>An ATS-friendly CV uses a simple, structured layout that parsing software can read. ATS tools may struggle with complex graphics, columns, tables, and unusual fonts. Avoid overly artistic designs unless you are applying for a creative or design role.</p>
    <h2>How to Create an ATS CV</h2>
    <p>Use a standard left-to-right text format and a conventional font such as Arial, Calibri, or Times New Roman. Avoid profile photos, logos, and skill-rating graphics such as progress bars. Save the file as a PDF unless another format is requested, and make sure the PDF text can be selected and copied.</p>
    <p>Most importantly, include keywords relevant to the job description. ATS software scores how naturally those terms appear in your experience and profile.</p>`,
  18: `<p>The UNAIR Directorate of Career Development, Entrepreneurship Incubation, and Alumni (DPKKA) will hold the 2026 Airlangga Career Fair (ACF). The annual campus job fair connects UNAIR graduates with employers seeking skilled talent.</p>
    <h2>Program Schedule</h2>
    <p>ACF will run for three days, October 15-17, 2026, at the Airlangga Convention Center (ACC), Campus C. Along with job exhibitions, the program includes company presentations, walk-in interviews, and career seminars led by HR professionals.</p>
    <h2>Participating Employers</h2>
    <p>More than 60 companies have confirmed their participation, from banking (BCA, Mandiri, BNI) and fast-moving consumer goods (Unilever, Danone, Wings Group) to state-owned enterprises (Pertamina, Telkom), technology startups, and business consultancies. Roles include management trainee programs, entry-level positions, and internships for current students.</p>
    <p>Participants must register online through the DPKKA portal and print their QR-coded entry ticket. Update your digital CV in the system before the event, as some employers use paperless recruitment.</p>`,
  19: `<p>The dynamic, fast-paced, and innovative culture of startups appeals to many members of Generation Z. Many UNAIR students spend their semester break or join the Merdeka Campus program by interning in Indonesia's startup ecosystem.</p>
    <h2>Challenges and Learning</h2>
    <p>Budi, a 2023 Information Systems student who recently interned as a Data Analyst at GoTo, shares his experience: “At a startup, the hierarchy is very flat. As an intern, I was trusted to present data insights directly to senior managers. The challenge is that you have to be proactive rather than wait for instructions. You need to identify problems and offer solutions.”</p>
    <h2>Flexibility and Extra Hours</h2>
    <p>Rina, a Communications student who interned on Tokopedia's Social Media team, highlights the flexibility: “You can dress casually, work from a cafe, and the atmosphere is fun. On the other hand, because the team has to respond quickly to trends, sometimes you need to work late or on weekends for a major campaign. It builds strong time-management and resilience.”</p>
    <p>Both agree that startup internships offer a steep learning curve. Mistakes are acceptable when you learn and improve quickly. For students who enjoy challenges and want an alternative to bureaucratic routines, a startup career can be an exciting option.</p>`,
  20: `<p>A job interview is a decisive opportunity for a company to assess whether you are the right candidate. Applicants with excellent CVs may still struggle because they did not prepare, felt overwhelmed by nerves, or could not express their ideas clearly.</p>
    <h2>Use the STAR Method</h2>
    <p>For behavioral questions such as “Tell me about a time you handled conflict,” use STAR: Situation, Task, Action, and Result. Briefly explain the context, what you needed to accomplish, the specific steps you took, and the measurable positive outcome.</p>
    <h2>Research the Company</h2>
    <p>Recruiters value candidates who show genuine interest. Before the interview, research the company's products or services, workplace culture, competitors, and recent news. If asked whether you have questions, use what you learned to ask thoughtful questions that demonstrate your interest.</p>
    <p>Pay attention to non-verbal communication as well. Maintain eye contact, smile, sit with good posture, and wear neat formal or smart-casual clothing. Remember to thank the interviewer when the session ends.</p>`,
  26: `<p>Universitas Airlangga will celebrate its 72nd anniversary this November. This year's theme is “Airlangga Serves, Contributing to an Innovative and Independent Nation.” Events will run throughout the month and involve lecturers, staff, alumni, and students.</p>
    <h2>Academic and Community Programs</h2>
    <p>The program begins with an open university session featuring a keynote address by a national figure. Other activities include a research innovation exhibition, international conferences across several faculties, and coordinated community outreach in 10 partner villages in East Java, including free health checks and community-economy education.</p>
    <h2>Competitions and Closing Celebration</h2>
    <p>Students are especially looking forward to the interfaculty sports and arts week (PORSENI), featuring competitions across many disciplines. The celebrations will conclude with a large music festival in the Campus C rectorate grounds, expected to feature a leading Indonesian band.</p>
    <p>Students are encouraged to join the events and help maintain order. The anniversary is an opportunity to celebrate the pride and solidarity of the Universitas Airlangga community.</p>`,
  27: `<p>The Surabaya City Government, arts universities, and cultural communities across East Java are once again presenting the Surabaya Cultural Festival 2026. The festival is one of the Ministry of Tourism and Creative Economy's Kharisma Event Nusantara (KEN) programs, which promote local culture to younger generations and visitors.</p>
    <h2>Arts Parade and Street Performances</h2>
    <p>Held October 10-12, 2026, the festival will be centered at Balai Pemuda (Surabaya Town Square) and along Jalan Tunjungan. Highlights include a flower parade, a mass Remo dance with 1,000 performers, and traditional arts such as Ludruk, Reog Ponorogo, and contemporary Jaranan.</p>
    <h2>Student Participation</h2>
    <p>UNAIR's student dance and gamelan groups will perform a musical dance drama based on the Majapahit epic. The UNAIR Student Executive Board (BEM) will also host food and handicraft stalls featuring products by campus-supported student entrepreneurs.</p>
    <p>The festival is free and open to the public. Visitors must register online for performances inside Balai Budaya. Traffic around Jalan Pemuda will be diverted during the event, so public transport is recommended.</p>`,
  28: `<p>The Faculty of Science and Technology (FST), in partnership with the Indonesian Data Scientists Association, is holding a national seminar titled “Navigating the AI Revolution: Opportunities and Ethics in Higher Education and Industry.” The seminar responds to the rapid growth of generative AI and its impact on many professions.</p>
    <h2>Speakers and Topics</h2>
    <p>Three keynote speakers will join the event: a research and technology director from the Ministry of Communication and Informatics, a lead data scientist from an Indonesian decacorn, and a UNAIR professor of computing. Topics include AI for business efficiency, regulatory challenges, and the ethics of using AI in student academic writing.</p>
    <h2>Call for Papers and Schedule</h2>
    <p>Alongside the main seminar, parallel sessions will let researchers and postgraduate students present recent work on machine learning and computer vision. Selected papers will be published in a reputable international journal.</p>
    <p>The hybrid seminar will be held on Saturday, October 24, 2026. Presale tickets for bachelor's, master's, and doctoral students are available through the official FST UNAIR website. Participants receive a seminar kit, an electronic certificate with professional development credits, and refreshments.</p>`,
  29: `<p>Running has become increasingly popular among urban residents seeking a healthy lifestyle. To meet this interest, the Directorate of Student Affairs and the Athletics Student Club are organizing the “UNAIR Green Run 5K,” which also promotes environmental awareness and reduced single-use plastic on campus.</p>
    <h2>Route and Race Categories</h2>
    <p>The 5-kilometer route starts and finishes at the Airlangga Convention Center (ACC), loops through shaded roads on Campus C, passes the Rectorate lake, and continues to the Universitas Airlangga Hospital facilities. Categories include men's and women's students, lecturers and staff, and the general public.</p>
    <h2>Race Pack</h2>
    <p>The registration fee is Rp150,000, discounted to Rp75,000 for UNAIR students who show their Student ID Card. Participants receive a dry-fit running jersey, a bib with timing chip, a finisher medal for completing the course within the cutoff time, and a door-prize coupon for a chance to win an electric bicycle.</p>
    <p>The event is scheduled for Sunday morning, November 15, 2026, with a 05:30 WIB start. The field is limited to 2,000 runners to keep the route comfortable.</p>`,
  30: `<p>As part of its vision to develop entrepreneurial graduates, the Directorate of Innovation and Educational Development (DIPP) is holding Airlangga Entrepreneurship Week 2026. The main event is a student small-business fair in the corridor connecting faculties on Campus B.</p>
    <h2>A Showcase for Student Businesses</h2>
    <p>The fair gives hundreds of student teams supported by the Student Entrepreneurship Program (PMW) and entrepreneurship courses a chance to sell directly to customers. More than 80 stalls will offer innovative products, from food and drinks to sustainable fashion, crafts, and digital services.</p>
    <h2>Supporting Local Businesses</h2>
    <p>Visitors can shop, try new foods, network, or even invest in promising startup ideas. Transactions are encouraged to be cashless through QRIS in partnership with university banking partners.</p>
    <p>The event runs Tuesday through Thursday, November 17-19, 2026, from 09:00 to 16:00 WIB. Come support student-made products and help them grow into sustainable businesses that create future jobs.</p>`,
  31: `<p>Welcome to Universitas Airlangga! For international students accepted to a degree, exchange, or other study program, arranging a visa is an essential step before traveling to Indonesia. You need a Student Visa, technically a Limited Stay Visa (VITAS) for study, which will later be converted to a Limited Stay Permit (ITAS) after arrival.</p>
    <h2>Study Permit Requirements</h2>
    <p>Before you apply for a visa, Universitas Airlangga will help you obtain a Study Permit from the Ministry of Education and Culture in Jakarta. Submit documents to the Airlangga Global Engagement (AGE) office, including a passport valid for at least 18 months, a health certificate, proof of financial support, and a statement that you will not work while studying.</p>
    <h2>Online Visa Application</h2>
    <p>Once the Study Permit is issued, the university will apply online for your E-Visa through the Directorate General of Immigration portal. After approval, the PDF visa will be sent by email. Print it and show it to immigration officers when entering Indonesia. Do not enter on a tourist visa or Visa on Arrival (VoA), as these cannot be converted to a Student Visa.</p>
    <p>Within seven days of arriving in Surabaya, visit the local Immigration Office with AGE staff for biometrics and a photo for your physical ITAS card. The permit must be renewed each year during your studies.</p>`,
  32: `<p>Finding safe, comfortable housing is an important part of studying abroad. Universitas Airlangga offers international students several options, from on-campus dormitories to off-campus apartments and boarding houses.</p>
    <h2>On-Campus Dormitory</h2>
    <p>UNAIR has a dormitory on Campus C. It is one of the most affordable and practical options, especially for newly arrived students. Rooms for international students usually accommodate two people and include basic furniture and air conditioning, with shared bathrooms. Dorm life offers a way to meet local students, but capacity is limited, so book well in advance through AGE.</p>
    <h2>Off-Campus Options: Boarding Houses and Apartments</h2>
    <p>Students seeking more privacy often choose an upscale boarding house near Campuses B or C. These usually offer single rooms with air conditioning, Wi-Fi, laundry, and 24-hour security. Monthly rent ranges from Rp1,500,000 to Rp3,000,000, depending on amenities. Apartments such as Puncak Dharmahusada and Educity are also nearby. A studio offers privacy plus access to a pool and gym, with rent around Rp3,000,000 to Rp5,000,000 per month.</p>
    <p>The AGE International Student Support team can help with housing recommendations, translating rental agreements, and communicating with landlords so you can find a place that feels like home.</p>`,
  33: `<p>Surabaya is Indonesia's second-largest city, a busy and dynamic center of economic activity in the eastern part of the country. Adjusting to life in a new city can be challenging, but a few practical tips can help you settle into the local rhythm.</p>
    <h2>Weather and Clothing</h2>
    <p>Surabaya is hot and humid throughout the year, with daytime temperatures averaging around 32-35°C. Lightweight cotton clothing is recommended. When on campus, dress respectfully and follow university rules. During the rainy season, usually November through April, carry an umbrella or raincoat because heavy showers can arrive suddenly.</p>
    <h2>Getting Around the City</h2>
    <p>Although public transport continues to grow, ride-hailing apps such as Gojek and Grab remain a reliable way to get around. You can order a motorbike for short solo trips, a car for groups, or meals through GoFood or GrabFood. Download an app and connect it to a local digital wallet such as GoPay or OVO soon after arrival.</p>
    <p>Surabaya residents are warm, direct, and friendly. Simple Indonesian phrases such as “Terima kasih” (thank you) and “Permisi” (excuse me) are useful. A smile and polite manner go a long way at markets and local food stalls.</p>`,
  34: `<p>Adapting to a new academic system and cultural environment can be challenging. Airlangga Global Engagement (AGE) provides a support system to help international students study successfully and enjoy a richer experience at Universitas Airlangga.</p>
    <h2>International Student Buddy Program</h2>
    <p>After confirming admission, students are paired with an Indonesian student buddy. The volunteer contacts them before arrival, meets them at Juanda International Airport, helps arrange housing and a SIM card, and guides them through orientation and course registration. Buddies often become students' first friends and informal guides in Surabaya.</p>
    <h2>Administrative and Wellbeing Support</h2>
    <p>The AGE International Office is a one-stop center for visa extensions, study-permit updates, and official university letters. For culture shock, academic stress, or personal difficulties, the university also offers free, confidential psychological counseling with English-speaking psychologists at the Help Center on Campus C.</p>
    <p>AGE regularly organizes cultural trips, international food festivals, and language exchanges to strengthen the international community and encourage interaction between local and international students.</p>`,
  35: `<p>Your study-abroad experience is not complete without exploring the rich culture and cuisine of East Java. As the province's capital, Surabaya brings together Javanese, Madurese, Arab, Chinese, and other influences, creating distinctive traditions and iconic flavors.</p>
    <h2>East Java Dishes to Try</h2>
    <p>Surabaya cuisine is rich, savory, and often spicy. Try <strong>rawon</strong>, a dark beef soup flavored with keluak and usually served with salted egg and bean sprouts. Another must-try is <strong>rujak cingur</strong>, a unique salad of vegetables, fruit, and boiled beef snout dressed with sweet, spicy, aromatic shrimp-paste sauce. For dinner, stop at a street stall for <strong>sego sambal</strong>: rice, spicy sambal, and fried side dishes.</p>
    <h2>Social Etiquette</h2>
    <p>Indonesian culture places great value on respect for elders and courteous interaction. Use your right hand when eating or giving and receiving items, as the left hand is considered impolite for these activities. Address lecturers and staff formally as “Bapak” or “Ibu” followed by their name. Understanding local customs will help you connect with the community and enrich your cross-cultural experience.</p>
    <p>Universities also offer cultural workshops where international students can learn gamelan, batik-making, or traditional Javanese dance. Joining these activities is highly recommended.</p>`,
};

const menuItemNames: Record<string, Record<string, string>> = {
  'depot-tanjung-api': {
    'Es Pisang Ijo': 'Iced Green Banana Dessert',
    'Es Susu Klepon': 'Klepon Milk Drink',
    'Es Susu Ketan Hitam': 'Black Glutinous Rice Milk',
    'Es Susu Kacang Hijau': 'Mung Bean Milk',
    'Kopi Tubruk': 'Indonesian-Style Coffee',
    'Kopi Saring': 'Filtered Coffee',
    'Kopi Susu Panas': 'Hot Milk Coffee',
    'Kopi Butter': 'Butter Coffee',
    'Es Kopi Susu': 'Iced Milk Coffee',
    'Es Cokelat': 'Iced Chocolate',
    'Hot Cokelat': 'Hot Chocolate',
    'Air Mineral': 'Mineral Water',
    'Es Teh Peach': 'Iced Peach Tea',
    'Es Teh Leci': 'Iced Lychee Tea',
    'Es Teh Strawberry': 'Iced Strawberry Tea',
    'Es Lemon Tea': 'Iced Lemon Tea',
    'Es Markisa': 'Iced Passion Fruit',
    'Es Teh Tarik': 'Iced Pulled Tea',
    'Es Susu Cincau': 'Grass Jelly Milk',
    'Es Cendol': 'Iced Cendol',
    'Es Kopi Susu Gula Aren': 'Palm Sugar Iced Milk Coffee',
    'Refresh Juice': 'Refreshing Juice',
    'Tekwan Palembang': 'Palembang Fish Soup',
    'Pempek': 'Indonesian Fish Cake',
    'Otak-otak': 'Grilled Fish Cake',
    'Pempek Kriuk': 'Crispy Pempek',
    'Tahu Walik': 'Crispy Fried Tofu',
    'Bakso Goreng': 'Fried Meatballs',
    'Udang Keju': 'Cheese Shrimp',
    'Lumpia Kulit Tahu': 'Tofu-Skin Spring Rolls',
    'Kaya Toast Gandum': 'Whole Wheat Kaya Toast',
    'Kaloci': 'Glutinous Rice Cake',
    'Tape Roll': 'Fermented Cassava Roll',
    'Cakwe Udang': 'Shrimp Cruller',
    'Cireng': 'Tapioca Fritters',
    'Nasi Goreng Szechuan': 'Szechuan Fried Rice',
    'Nasi Goreng Tanjung Api': 'Tanjung Api Fried Rice',
    'Nasi Goreng Cumi': 'Squid Fried Rice',
    'Nasi Goreng Cakalang Pete': 'Skipjack Tuna and Bitter Bean Fried Rice',
    'Bakmie Goreng': 'Fried Noodles',
    'Kwetiauw Kuah Sapi': 'Beef Flat Rice Noodle Soup',
    'Kwetiauw Goreng': 'Fried Flat Rice Noodles',
    'Mie Garlic Spesial': 'Special Garlic Noodles',
    'Mie Garlic': 'Garlic Noodles',
    'Mie Garlic Charsiu': 'Garlic Noodles with Char Siu',
    'Mie Garlic Sapi': 'Garlic Beef Noodles',
    'Mie Szechuan Sapi': 'Szechuan Beef Noodles',
    'Mie Szechuan Spesial': 'Special Szechuan Noodles',
    'Mie Szechuan Charsiu': 'Szechuan Noodles with Char Siu',
    'Mie Szechuan': 'Szechuan Noodles',
    'Mie Kuah Kari': 'Curry Noodle Soup',
    'Misoa Kuah Ayam Bawang': 'Chicken and Garlic Misoa Soup',
    'Nasi Daging Sambal Bawang': 'Beef Rice with Shallot Chili Sauce',
    'Nasi Daging Sambal Ijo': 'Beef Rice with Green Chili Sauce',
    'Nasi Cakalang Sambal Bawang': 'Skipjack Tuna Rice with Shallot Chili Sauce',
    'Nasi Cakalang Sambal Ijo': 'Skipjack Tuna Rice with Green Chili Sauce',
    'Nasi Cumi Sambal Bawang': 'Squid Rice with Shallot Chili Sauce',
    'Nasi Cumi Sambal Ijo': 'Squid Rice with Green Chili Sauce',
    'Nasi Udang Sambal Bawang': 'Shrimp Rice with Shallot Chili Sauce',
    'Nasi Udang Sambal Ijo': 'Shrimp Rice with Green Chili Sauce',
    'Nasi Ayam Ngohiong': 'Ngohiong Chicken Rice',
  },
  karbs: {
    'Mie Ayam Jakarta': 'Jakarta Chicken Noodles',
    'Nasi Goreng Sate': 'Satay Fried Rice',
  },
};

function localizeMenuItem(placeSlug: string, item: string): string {
  const priceSeparator = item.indexOf(' - Rp');
  if (priceSeparator === -1) return item;

  const name = item.slice(0, priceSeparator);
  const translatedName = menuItemNames[placeSlug]?.[name];
  return translatedName ? `${translatedName}${item.slice(priceSeparator)}` : item;
}

export function localizeCategory(category: Category, language: Language): Category {
  if (language === 'id') return category;
  const copy = categoryCopies[category.slug];
  if (!copy) return category;
  return { ...category, ...copy };
}

export function localizePlace(place: Place, language: Language): Place {
  if (language === 'id') return place;
  
  const name = place.nameEn || place.name;
  let imageUrl = place.imageUrl;
  if (imageUrl && imageUrl.includes('placehold.co')) {
    imageUrl = imageUrl.replace(/text=([^&]+)/, `text=${encodeURIComponent(name)}`);
  }

  return {
    ...place,
    name,
    description: place.descriptionEn || place.description,
    priceRange: place.priceRangeEn || place.priceRange,
    hours: place.hoursEn || place.hours,
    menuSections: place.menuSections?.map((section) => ({
      ...section,
      title: section.titleEn || section.title,
      items: section.itemsEn || section.items.map((item) => localizeMenuItem(place.slug, item)),
    })),
    menuHighlights: place.menuHighlightsEn || place.menuHighlights,
    infoSections: place.infoSections?.map((section) => ({
      ...section,
      title: section.titleEn || section.title,
      items: section.itemsEn || section.items,
    })),
    infoTables: place.infoTables?.map((table) => ({
      ...table,
      title: table.titleEn || table.title,
      headers: table.headersEn || table.headers,
    })),
    tags: place.tagsEn || (place.tags ?? []).map((tag: string) => 
      tag.replace('nasi campur', 'mixed rice')
         .replace('pedas', 'spicy')
         .replace('porsi besar', 'large portion')
         .replace('nugas', 'study friendly')
         .replace('wifi kencang', 'fast wifi')
         .replace('cozy', 'cozy')
         .replace('western food', 'western food')
         .replace('rice bowl', 'rice bowl')
         .replace('nongkrong', 'hangout')
    ),
    imageUrl,
  };
}

function translateContentFallback(html: string): string {
  return html
    .replace(/<h2>Jadwal Semester Ganjil<\/h2>/g, '<h2>Odd Semester Schedule</h2>')
    .replace(/<h2>Jadwal Semester Genap<\/h2>/g, '<h2>Even Semester Schedule</h2>')
    .replace(/<h2>Ketentuan Pendaftaran<\/h2>/g, '<h2>Registration Requirements</h2>')
    .replace(/<h2>Jadwal Pelaksanaan<\/h2>/g, '<h2>Event Schedule</h2>')
    .replace(/<h2>Rumpun Ilmu Kesehatan dan Sains<\/h2>/g, '<h2>Health and Science Clusters</h2>')
    .replace(/<h2>Rumpun Ilmu Sosial dan Humaniora<\/h2>/g, '<h2>Social Sciences and Humanities Clusters</h2>')
    .replace(/<h2>Langkah-Langkah Pengisian KRS<\/h2>/g, '<h2>Course Registration Steps</h2>')
    .replace(/<h2>Persetujuan Dosen Wali<\/h2>/g, '<h2>Academic Advisor Approval</h2>')
    .replace(/<h2>Jam Layanan Reguler dan Khusus<\/h2>/g, '<h2>Regular and Special Service Hours</h2>')
    .replace(/<h2>Akses Fasilitas Ruang Baca dan Diskusi<\/h2>/g, '<h2>Reading and Discussion Room Access</h2>')
    .replace(/<h2>Akses Database Scopus, ScienceDirect, dan SpringerLink<\/h2>/g, '<h2>Accessing Scopus, ScienceDirect, and SpringerLink</h2>')
    .replace(/<h2>Panduan Login Single Sign-On \(SSO\)<\/h2>/g, '<h2>Single Sign-On (SSO) Login Guide</h2>')
    .replace(/<h2>Materi dan Jadwal Pelatihan<\/h2>/g, '<h2>Training Schedule and Materials</h2>')
    .replace(/<h2>Sertifikat dan Manfaat Akademik<\/h2>/g, '<h2>Certificates and Academic Benefits</h2>')
    .replace(/<h2>Daftar Koleksi Terbaru<\/h2>/g, '<h2>Latest Collection Catalog</h2>')
    .replace(/<h2>Prosedur Peminjaman dan Reservasi<\/h2>/g, '<h2>Borrowing and Reservation Procedures</h2>')
    .replace(/<h2>Rangkaian Kegiatan dan Diskusi Penulis<\/h2>/g, '<h2>Event Highlights and Author Discussions</h2>')
    .replace(/<h2>Diskon Buku dan Stan Pameran<\/h2>/g, '<h2>Book Discounts and Exhibition Booths</h2>')
    .replace(/<h2>Komponen Beasiswa dan Fasilitas<\/h2>/g, '<h2>Scholarship Coverage and Benefits</h2>')
    .replace(/<h2>Tahapan Seleksi dan Tips Wawancara<\/h2>/g, '<h2>Selection Stages and Interview Tips</h2>')
    .replace(/<h2>Persyaratan Akademik dan Dokumen<\/h2>/g, '<h2>Academic and Document Requirements</h2>')
    .replace(/<h2>Strategi Menulis Proposal Riset<\/h2>/g, '<h2>Research Proposal Writing Strategy</h2>')
    .replace(/<h2>Program Pelatihan Kepemimpinan<\/h2>/g, '<h2>Leadership Training Program</h2>')
    .replace(/<h2>Syarat Pendaftaran dan Waktu Pelaksanaan<\/h2>/g, '<h2>Eligibility and Application Timeline</h2>')
    .replace(/<h2>Universitas Mitra dan Skema Pembiayaan<\/h2>/g, '<h2>Partner Universities and Funding Scheme</h2>')
    .replace(/<h2>Tips Persiapan Bahasa dan Wawancara<\/h2>/g, '<h2>Language Preparation and Interview Tips</h2>')
    .replace(/<h2>Struktur Esai yang Menarik<\/h2>/g, '<h2>Crafting an Engaging Essay Structure</h2>')
    .replace(/<h2>Kesalahan Umum yang Harus Dihindari<\/h2>/g, '<h2>Common Pitfalls to Avoid</h2>')
    .replace(/<h2>Posisi yang Dibuka dan Kualifikasi<\/h2>/g, '<h2>Open Roles and Qualifications</h2>')
    .replace(/<h2>Benefit dan Pengalaman Magang<\/h2>/g, '<h2>Benefits and Internship Experience</h2>')
    .replace(/<h2>Prinsip Dasar Format ATS<\/h2>/g, '<h2>Core Principles of ATS Formatting</h2>')
    .replace(/<h2>Kata Kunci dan Pengukuran Dampak<\/h2>/g, '<h2>Keywords and Impact Measurement</h2>')
    .replace(/<h2>Rangkaian Acara dan Jadwal Company Talk<\/h2>/g, '<h2>Event Schedule and Company Talks</h2>')
    .replace(/<h2>Tips Menghadiri Career Fair<\/h2>/g, '<h2>Tips for Attending Career Fairs</h2>')
    .replace(/<h2>Budaya Kerja dan Dinamika Startup<\/h2>/g, '<h2>Workplace Culture and Startup Dynamics</h2>')
    .replace(/<h2>Tips Menembus Magang Startup<\/h2>/g, '<h2>Tips for Securing a Startup Internship</h2>')
    .replace(/<h2>Riset Perusahaan dan Posisi<\/h2>/g, '<h2>Company and Role Research</h2>')
    .replace(/<h2>Metode STAR dalam Menjawab Pertanyaan<\/h2>/g, '<h2>Using the STAR Method for Answers</h2>')
    .replace(/<h2>Kawasan Wisata Kuliner \(Wiskul\) Dharmahusada dan Mulyorejo<\/h2>/g, '<h2>Dharmahusada and Mulyorejo Culinary Tourism Area</h2>')
    .replace(/<h2>Kantin Kampus dan Sekitarnya<\/h2>/g, '<h2>Campus Canteens and Surrounding Stalls</h2>')
    .replace(/<h2>Tipe dan Harga Indekos<\/h2>/g, '<h2>Boarding House Types and Estimated Rates</h2>')
    .replace(/<h2>Opsi Rumah Kontrakan Bersama<\/h2>/g, '<h2>Shared House Rental Options</h2>')
    .replace(/<h2>Bus Internal Kampus \(Flash UNAIR\)<\/h2>/g, '<h2>Internal Campus Shuttle Bus (UNAIR Flash)</h2>')
    .replace(/<h2>Suroboyo Bus dan Trans Semanggi<\/h2>/g, '<h2>Suroboyo Bus and Trans Semanggi Transit</h2>')
    .replace(/<h2>Coffee Shop Area Dharmawangsa dan Gubeng<\/h2>/g, '<h2>Dharmawangsa and Gubeng Coffee Shops</h2>')
    .replace(/<h2>Pusat Nongkrong Area Kertajaya dan Merr<\/h2>/g, '<h2>Kertajaya and MERR Hangout Centers</h2>')
    .replace(/<h2>Wisata Dalam Kota Surabaya<\/h2>/g, '<h2>Surabaya City Destinations</h2>')
    .replace(/<h2>Short Escape ke Luar Kota \(Aglomerasi Gerbangkertosusila\)<\/h2>/g, '<h2>Short Escapes Outside the City</h2>')
    .replace(/<h2>Kegiatan Akademik dan Pengabdian<\/h2>/g, '<h2>Academic and Community Service Programs</h2>')
    .replace(/<h2>Perlombaan dan Puncak Hiburan<\/h2>/g, '<h2>Competitions and Festival Highlights</h2>')
    .replace(/<h2>Pertunjukan Seni Tradisional dan Modern<\/h2>/g, '<h2>Traditional and Modern Art Performances</h2>')
    .replace(/<h2>Bazar Kuliner dan Produk Kreatif<\/h2>/g, '<h2>Culinary Bazaar and Creative Products</h2>')
    .replace(/<h2>Topik Utama dan Pembicara Kunci<\/h2>/g, '<h2>Keynote Speakers and Focus Topics</h2>')
    .replace(/<h2>Call for Papers dan Publikasi Ilmiah<\/h2>/g, '<h2>Call for Papers and Scientific Publications</h2>')
    .replace(/<h2>Rute Lari dan Kategori Lomba<\/h2>/g, '<h2>Running Routes and Race Categories</h2>')
    .replace(/<h2>Fasilitas Peserta dan Doorprize Menarik<\/h2>/g, '<h2>Participant Amenities and Door Prizes</h2>')
    .replace(/<h2>Tenant Kuliner dan Produk Mahasiswa<\/h2>/g, '<h2>Culinary and Student Product Tenants</h2>')
    .replace(/<h2>Kompetisi Pitching Bisnis<\/h2>/g, '<h2>Business Pitching Competition</h2>')
    .replace(/<h2>Persyaratan Dokumen Visa Pelajar<\/h2>/g, '<h2>Student Visa Document Requirements</h2>')
    .replace(/<h2>Prosedur Pengajuan Online<\/h2>/g, '<h2>Online Application Procedure</h2>')
    .replace(/<h2>Pilihan Akomodasi Mahasiswa Asing<\/h2>/g, '<h2>International Student Housing Options</h2>')
    .replace(/<h2>Tips Kontrak dan Fasilitas Kos<\/h2>/g, '<h2>Rental Contracts and Facility Tips</h2>')
    .replace(/<h2>Menghadapi Cuaca Tropis Surabaya<\/h2>/g, '<h2>Navigating Surabaya Tropical Climate</h2>')
    .replace(/<h2>Norma Sosial dan Komunikasi Sehari-hari<\/h2>/g, '<h2>Social Norms and Daily Etiquette</h2>')
    .replace(/<h2>Layanan Orientasi dan Buddy Program<\/h2>/g, '<h2>Orientation and Buddy Programs</h2>')
    .replace(/<h2>Konseling dan Bantuan Darurat<\/h2>/g, '<h2>Counseling and Emergency Assistance</h2>');
}

export function localizeArticle(article: Article, language: Language): Article {
  if (language === 'id') return article;

  const copy = articleCopies[article.id];
  const title = article.titleEn || copy?.title || article.title;
  const excerpt = article.excerptEn || copy?.excerpt || article.excerpt;

  // Use explicit contentEn if provided, otherwise preserve full structure via translateContentFallback
    const content = article.contentEn || articleContentCopies[article.id] || (article.content ? translateContentFallback(article.content) : article.content);

  let imageUrl = article.imageUrl;
  if (imageUrl && imageUrl.includes('placehold.co')) {
    imageUrl = imageUrl.replace(/text=([^&]+)/, `text=${encodeURIComponent(title)}`);
  }

  const tags = article.tagsEn || articleTagCopies[article.id] || (article.tags ?? []).map((tag) =>
    tag
      .replace('jadwal', 'schedule')
      .replace('pengumuman', 'announcement')
      .replace('buku', 'books')
      .replace('layanan', 'services')
      .replace('kuliner', 'culinary')
      .replace('mulyorejo', 'mulyorejo')
      .replace('kos', 'housing')
      .replace('akomodasi', 'accommodation')
      .replace('transportasi', 'transportation')
      .replace('bus', 'bus')
      .replace('nongkrong', 'hangout')
      .replace('cafe', 'cafe')
      .replace('wisata', 'tourism')
      .replace('hiburan', 'leisure')
      .replace('diesnatalis', 'anniversary')
      .replace('perayaan', 'celebration')
      .replace('culture', 'culture')
      .replace('food', 'food')
  );

  return {
    ...article,
    title,
    excerpt,
    content,
    deadline: article.deadlineEn || article.deadline,
    requirements: article.requirementsEn || article.requirements,
    stages: article.stagesEn || article.stages,
    tags,
    imageUrl,
  };
}

export function localizeQuickLink(link: QuickLink, language: Language): QuickLink {
  if (language === 'id') return link;
  const titles: Record<number, string> = { 1: 'UNAIR SSO Platform', 2: 'UNAIR E-Learning', 3: 'UNAIR Library', 5: 'SINTA Portal', 6: 'Tracer Study' };
  return { ...link, title: titles[link.id] ?? link.title };
}