/**
 * Portfolio Website Interactive Engine
 * Author: Srirat Intalai
 * Features: Mobile Nav Toggle, Scroll Animations, Parallax Effects,
 *           Auto Typing, Certificate Modal, and Form Validation.
 */

/* ==========================================================================
   0. Internationalization (EN / TH) Dictionary & Engine
   ========================================================================== */
const i18n = {
    en: {
        "nav.home": "Home", "nav.about": "About", "nav.education": "Education",
        "nav.skills": "Skills", "nav.projects": "Projects", "nav.certificates": "Certificates",
        "nav.activities": "Activities", "nav.contact": "Contact",

        "hero.badge": "HELLO EVERYONE",
        "hero.title": 'I\'m <span class="text-gradient">Srirat Intalai</span>',
        "hero.subtitle": "Computer Science student interested in Software Development, QA, Data, and UI/UX, with a focus on Mobile App Development, Software Testing, and Data Analysis. I enjoy learning new technologies and am currently seeking an internship to gain hands-on experience and develop my skills.",
        "hero.cta1": "View Projects", "hero.cta2": "Contact Me",
        "hero.badge1title": "Mobile Dev", "hero.badge2title": "CS Student", "hero.badge2sub": "Bangkok University",

        "about.tag": "GET TO KNOW ME", "about.title": "About Me",
        "about.heading": "School of Information Technology and Innovation, Computer Science.",
        "about.text": '“How can I make an app easy to use, visually appealing, and bug-free?” This question motivates me to keep learning and improving my software development skills through coding, UI/UX design, and QA testing. I’m also interested in Data, using SQL, Python, and Power BI to turn data into useful insights. As a Computer Science student at Bangkok University, I enjoy learning new things and am currently looking for an internship opportunity in Mobile Development, QA, Data, or UI/UX to apply my skills to real-world projects.',
        "about.label.fullname": "Full Name", "about.value.fullname": "Srirat Intalai (Yok)",
        "about.label.email": "Email", "about.label.phone": "Phone",
        "about.label.university": "University", "about.value.university": "Bangkok University",
        "about.label.location": "Location", "about.value.location": "Bangkok, Thailand",
        "about.label.languages": "Languages", "about.value.languages": "Thai (Native), English (Elementary)",

        "edu.tag": "ACADEMIC JOURNEY", "edu.title": "Education Timeline",
        "edu.item1.title": "Bachelor's Degree in Computer Science", 
        "edu.item1.inst": "Bangkok University",
        "edu.item1.date": "Year 1 (2023) — Year 4 (2027)",
        "edu.item1.desc": "Currently maintaining a cumulative GPA of 3.26, with 115 credits completed.",

        "edu.item2.title": "Vocational Certificate (Equivalent to High School)",
        "edu.item2.inst": "Kusoom Technology Vocational College",
        "edu.item2.date": "Academic year 2020 - 2023",
        "edu.item2.desc": "Vocational Certificate in Business Computer with a GPAX of 3.98.",

        "skills.tag": "MY TOOLBOX", "skills.title": "Technical Skills",
        "skills.cat1": "Programming Languages", "skills.cat2": "Mobile Development",
        "skills.cat3": "Software Testing (QA)", "skills.cat4": "UI/UX Design",
        "skills.cat5": "Databases & APIs", "skills.cat6": "Tools & Technologies",
        "skills.cat7": "Data Analysis", "skills.cat8": "Data Engineering",
        "skills.cat9": "System Analysis", "skills.cat10": "Cloud & DevOps",

        "proj.tag": "PORTFOLIO WORK", "proj.title": "Featured Projects",
        "proj.pawhaus.desc": "Pet Care & Smart Home Mobile Application Role: Main Developer,An all-in-one mobile application designed for pet owners and smart home management. Developed cross-platform using Flutter, taking full responsibility for the primary codebase and core features. Integrated with Home Assistant for smart device simulation, managed real-time user data, and implemented clean state management using Provider.",
        "proj.synapse.desc": "Smart Home Assistant (CS Project I) Roles: Product Owner | Scrum Master | UX/UI Designer | QA Tester | Lead Researcher Managed the product and helped coordinate the team’s workflow. Designed user experiences and intuitive UX/UI flows to make controlling and interacting with smart home devices simple and seamless. Conducted research on relevant studies and data architecture, and mapped out data flows. Planned and carried out comprehensive system testing to ensure the application’s quality, stability, and overall performance.",
        "proj.btn.dark": "Dark Mode UI", "proj.btn.light": "Light Mode UI",

        "cert.tag": "VERIFIED CREDENTIALS", "cert.title": "Certificates",
        "cert.filter.all": "All", "cert.filter.cyber": "Cybersecurity",
        "cert1.issuer": "AWS Training & Certification — May 2026",
        "cert2.issuer": "Microsoft via Coursera — Jul 2026",
        "cert3.issuer": "NCSA e-Learning — 21 hrs · 12 Nov 2025 (2568)",
        "cert.ai.issuer": "Chiang Mai University — AI Skills Training Program",
        "cert.mhesi.issuer": "Ministry of Higher Education, Science, Research and Innovation — 15 hrs · Jun 2026",

        "act.tag": "ENGAGEMENT", "act.title": "Activities",
        "act1.badge": "Hackathon",
        "act1.desc": "Reached the final round (top 10 teams) of Bangkok University's cybersecurity hackathon, solving a cybersecurity challenge and pitching in front of 4 national cybersecurity experts who served as judges.",
        "act2.badge": "Industry Visit",
        "act2.desc": "Took part in the Industry-driven Innovation Project, visiting True Digital Group to learn how a real company structures its technology operations, see how digital and AI technologies are applied in business, and gather requirements directly from the team behind the project brief.",
        "act3.badge": "Seminar",
        "act3.desc": "Selected by company representatives and faculty to showcase the Computer Science Project I coursework (Synapse Home) at this annual technology and AI event hosted by the Faculty of Information Technology and Innovation, Bangkok University.",
        "act4.badge": "Workshop",
        "act4.desc": "Attended a hands-on Agile/Scrum training session led by the SVP of Information Technology Management at Ngern Tid Lor PCL, covering how Scrum and IT practices are applied to real business problems.",
        "act5.badge": "Workshop & Mini Hackathon",
        "act5.desc": "Took part in a Python data-analysis workshop and mini-hackathon organized with speakers from Huawei Thailand and PyCon Thailand, then worked in a team to analyze a dataset and present data insights.",

        "contact.tag": "LET'S CONNECT", "contact.title": "Contact Me", "contact.heading": "Get in Touch",
        "contact.subtext": "I am currently seeking an internship or cooperative education opportunity to gain hands-on experience in Mobile Application Development, Software Testing (QA), Data Analysis, and UI/UX Design. I am open to learning new things and eager to apply my knowledge, develop my skills, and contribute to a team in creating practical, real-world solutions.",
        "contact.label.email": "Email", "contact.label.phone": "Phone",
        "contact.label.github": "GitHub", "contact.label.linkedin": "LinkedIn",
        "contact.form.name": "Your Name", "contact.form.namePh": "Sam Smith",
        "contact.form.nameErr": "Please enter your name",
        "contact.form.email": "Your Email", "contact.form.emailErr": "Please enter a valid email address",
        "contact.form.subject": "Subject", "contact.form.subjectPh": "Internship Opportunity",
        "contact.form.subjectErr": "Please enter a subject",
        "contact.form.message": "Message", "contact.form.messagePh": "Hi Srirat, we'd love to invite you for an interview...",
        "contact.form.messageErr": "Please enter your message",
        "contact.form.submit": "Send Message",
        "contact.form.success": "Thank you! Your message has been sent successfully.",

        "footer.rights": "© 2026 Srirat Intalai. All rights reserved."
    },
    th: {
        "nav.home": "หน้าหลัก", "nav.about": "ทำความรู้จัก", "nav.education": "การศึกษา",
        "nav.skills": "ทักษะ", "nav.projects": "ผลงาน", "nav.certificates": "ใบรับรอง",
        "nav.activities": "กิจกรรม", "nav.contact": "ติดต่อ",

        "hero.badge": "สวัสดีค่ะ",
        "hero.title": '<span class="text-gradient">ศรีรัตน์ อินทลัย</span>',
        "hero.subtitle": "นักศึกษาวิทยาการคอมพิวเตอร์ที่สนใจด้าน Software Development, QA, Data และ UI/UX โดยเน้นการพัฒนาแอปพลิเคชันมือถือ การทดสอบซอฟต์แวร์ และการวิเคราะห์ข้อมูล ชอบเรียนรู้เทคโนโลยีใหม่ ๆ และกำลังมองหาโอกาสฝึกงานเพื่อเพิ่มประสบการณ์จากการทำงานจริงและพัฒนาทักษะของตัวเอง",
        "hero.cta1": "ดูผลงาน", "hero.cta2": "ช่องทางติดต่อ",
        "hero.badge1title": "นักพัฒนาแอปมือถือ", "hero.badge2title": "นักศึกษา วท.บ.", "hero.badge2sub": "มหาวิทยาลัยกรุงเทพ",

        "about.tag": "GET TO KNOW ME", "about.title": "ทำความรู้จักกันมากขึ้น",
        "about.heading": "นักศึกษาคณะเทคโนโลยีสารสนเทศและนวัตกรรม สาขาวิทยาการคอมพิวเตอร์",
        "about.text": '“ทำยังไงให้แอปใช้งานง่าย สวย และไม่มี Bug?” เป็นคำถามที่ทำให้อยากเรียนรู้และพัฒนาซอฟต์แวร์ให้ดีขึ้น ทั้งการเขียนโค้ด ออกแบบ UI/UX และทดสอบ QA รวมถึงสนใจด้าน Data โดยใช้ SQL, Python และ Power BI เพื่อเปลี่ยนข้อมูลให้เป็น Insight ในฐานะนักศึกษาวิทยาการคอมพิวเตอร์ มหาวิทยาลัยกรุงเทพ ที่ชอบเรียนรู้สิ่งใหม่ ๆ และกำลังมองหาโอกาสฝึกงานด้าน Mobile Development, QA, Data หรือ UI/UX เพื่อได้ใช้ความรู้กับงานจริงค่ะ',
        "about.label.fullname": "ชื่อ-นามสกุล", "about.value.fullname": "ศรีรัตน์ อินทลัย (หยก)",
        "about.label.email": "อีเมล", "about.label.phone": "เบอร์โทรศัพท์",
        "about.label.university": "มหาวิทยาลัย", "about.value.university": "มหาวิทยาลัยกรุงเทพ",
        "about.label.location": "ที่อยู่", "about.value.location": "กรุงเทพมหานคร ประเทศไทย",
        "about.label.languages": "ภาษา", "about.value.languages": "ไทย (เจ้าของภาษา), อังกฤษ (ระดับพื้นฐาน)",

        "edu.tag": "EDUCATION", "edu.title": "ไทม์ไลน์การศึกษา",
        "edu.item1.title": "ปริญญาตรี สาขาวิทยาการคอมพิวเตอร์", 
        "edu.item1.inst": "มหาวิทยาลัยกรุงเทพ",
        "edu.item1.date": "ปี 1 (2566) — ปี 4 (2570)",
        "edu.item1.desc": "ปัจจุบันมีเกรดเฉลี่ยสะสม (Cum GPA.) 3.26 หน่วยกิตสะสมรวม 115 หน่วยกิต",

        "edu.item2.title": "ประกาศนียบัตรวิชาชีพ (ปวช.) เทียบเท่ามัธยมศึกษาตอนปลาย",
        "edu.item2.inst": "วิทยาลัยอาชีวศึกษากุสุมภ์เทคโนโลยี",
        "edu.item2.date": "ปีการศึกษา 2563 - 2566",
        "edu.item2.desc": "ประกาศนียบัตรวิชาชีพด้านคอมพิวเตอร์ธุรกิจ คะแนนเฉลี่ยสะสม 3.98",

        "skills.tag": "MY TOOLBOX", "skills.title": "ทักษะทางเทคนิค",
        "skills.cat1": "ภาษาโปรแกรม", "skills.cat2": "การพัฒนาแอปพลิเคชันมือถือ",
        "skills.cat3": "การทดสอบซอฟต์แวร์ (QA)", "skills.cat4": "การออกแบบ UI/UX",
        "skills.cat5": "ฐานข้อมูลและ API", "skills.cat6": "เครื่องมือและเทคโนโลยี",
        "skills.cat7": "การวิเคราะห์ข้อมูล (Data Analysis)", "skills.cat8": "วิศวกรรมข้อมูล (Data Engineering)",
        "skills.cat9": "การวิเคราะห์ระบบ (System Analysis)", "skills.cat10": "Cloud & DevOps",

        "proj.tag": "PORTFOLIO WORK", "proj.title": "ผลงานเด่น",
        "proj.pawhaus.desc": "Pet Care & Smart Home Mobile Application ตำแหน่ง: นักพัฒนาหลัก (Main Developer) แอปพลิเคชันมือถือแบบ All-in-One สำหรับคนรักสัตว์เลี้ยงและดูแลบ้านครบจบในแอปเดียว พัฒนาขึ้นด้วย Flutter โดยรับผิดชอบการเขียนโค้ดและพัฒนาฟีเจอร์หลักทั้งหมดของโปรเจกต์ โดดเด่นด้วยการเชื่อมต่อระบบจำลองอุปกรณ์ Smart Home ผ่าน Home Assistant ควบคู่กับการจัดการข้อมูลผู้ใช้แบบ Real-time และบริหารจัดการ State ของแอปพลิเคชันอย่างมีประสิทธิภาพด้วย Provider",
        "proj.synapse.desc": "ผู้ช่วยบ้านอัจฉริยะ โปรเจกต์วิชาโครงงานวิทยาการคอมพิวเตอร์ 1 (CS Project I) บทบาท: Product Owner | Scrum Master | UX/UI Designer | QA Tester | Lead Researcher บริหารจัดการโปรดักต์และขับเคลื่อนการทำงานของทีม ออกแบบประสบการณ์ผู้ใช้ ออกแบบ UX/UI Flow ที่ใช้งานง่ายและเป็นธรรมชาติ เพื่อให้ผู้ใช้สั่งการและควบคุมอุปกรณ์ Smart Home ได้อย่างราบรื่น ค้นงานวิจัยและสถาปัตยกรรมข้อมูล และวางผังการไหลของข้อมูล การประกันคุณภาพระบบ วางแผนและทำการทดสอบระบบอย่างครอบคลุม เพื่อสร้างความมั่นใจในด้านคุณภาพ ความเสถียร และประสิทธิภาพงาน",
        "proj.btn.dark": "ธีมมืด (Dark Mode)", "proj.btn.light": "ธีมสว่าง (Light Mode)",

        "cert.tag": "CERTIFICATES", "cert.title": "ใบรับรอง",
        "cert.filter.all": "ทั้งหมด", "cert.filter.cyber": "ไซเบอร์ซีเคียวริตี้",
        "cert1.issuer": "AWS Training & Certification — พฤษภาคม 2569",
        "cert2.issuer": "Microsoft ผ่าน Coursera — กรกฎาคม 2569",
        "cert3.issuer": "ผ่านระบบ NCSA e-Learning จำนวน 21 ชั่วโมง — 12 พฤศจิกายน 2568",
        "cert.ai.issuer": "BASIC TO INTERMEDIATE Al: PRACTICAL AL SKILLS FOR LEARNING, WORKING, AND EARNING — โครงการอบรมทักษะ AI",
        "cert.mhesi.issuer": "กระทรวงการอุดมศึกษา วิทยาศาสตร์ วิจัยและนวัตกรรม BASIC TO INTERMEDIATE Al: PRACTICAL AL SKILLS FOR LEARNING, WORKING, AND EARNING — 15 ชั่วโมง · มิถุนายน 2569",

        "act.tag": "ACTIVITIES", "act.title": "กิจกรรมที่เคยเข้าร่วม",
        "act1.badge": "แฮกกาธอน",
        "act1.desc": "ผ่านเข้ารอบชิงชนะเลิศ (10 ทีมสุดท้าย) ในการแข่งขัน BU Cyber Mini Hackathon ของมหาวิทยาลัยกรุงเทพ แก้โจทย์ด้านความมั่นคงปลอดภัยไซเบอร์ และนำเสนอผลงานต่อหน้ากูรูไซเบอร์ระดับประเทศ 4 ท่านที่ทำหน้าที่กรรมการ",
        "act2.badge": "ศึกษาดูงาน",
        "act2.desc": "เข้าร่วมโครงการ Industry-driven Innovation Project โดยไปศึกษาดูงานที่ True Digital Group เพื่อเรียนรู้โครงสร้างการดำเนินงานด้านเทคโนโลยีขององค์กรจริง เห็นการประยุกต์ใช้เทคโนโลยีดิจิทัลและ AI ในธุรกิจ และเก็บข้อมูลความต้องการโดยตรงจากทีมงานเจ้าของโจทย์",
        "act3.badge": "งานสัมมนา",
        "act3.desc": "ได้รับคัดเลือกจากตัวแทนบริษัทและอาจารย์ให้นำผลงานรายวิชา Computer Science Project I (Synapse Home) มาจัดแสดงในงานเทคโนโลยีและ AI ประจำปีนี้ จัดโดยคณะเทคโนโลยีสารสนเทศและนวัตกรรม มหาวิทยาลัยกรุงเทพ",
        "act4.badge": "เวิร์กชอป",
        "act4.desc": "เข้าร่วมอบรมเชิงปฏิบัติการด้าน Agile/Scrum ภายใต้โครงการ NEXTGEN AGILITY: IT & Scrum for Business Era โดยวิทยากรคือ SVP Information Technology Management บริษัท เงินติดล้อ จำกัด (มหาชน) เรียนรู้การนำแนวคิด Scrum และ IT มาประยุกต์ใช้แก้ปัญหาทางธุรกิจจริง",
        "act5.badge": "เวิร์กชอป & Mini Hackathon",
        "act5.desc": "เข้าร่วมกิจกรรม Python Developer Pathway (The First Chapter: Be Inspired) เวิร์กชอปวิเคราะห์ข้อมูลด้วยภาษา Python และ Mini Hackathon ร่วมกับวิทยากรจาก Huawei Thailand และ PyCon Thailand โดยทำงานเป็นทีมเพื่อวิเคราะห์ข้อมูลและนำเสนอ Insight",

        "filter.all": "ทั้งหมด", "filter.cyber": "ไซเบอร์ซีเคียวริตี้",
        
        "contact.tag": "มาติดต่อกัน", "contact.title": "ช่องทางติดต่อ", "contact.heading": "ติดต่อได้เลย",
        "contact.subtext": "ปัจจุบันกำลังมองหาโอกาสฝึกงานหรือสหกิจศึกษา เพื่อได้เรียนรู้และสั่งสมประสบการณ์จากการทำงานจริง ทั้งด้านการพัฒนาแอปพลิเคชันมือถือ การทดสอบซอฟต์แวร์ (QA) การวิเคราะห์ข้อมูล และการออกแบบ UI/UX พร้อมเปิดรับสิ่งใหม่ ๆ และอยากนำความรู้ที่มีไปต่อยอด พัฒนาทักษะ และมีส่วนร่วมกับทีมในการสร้างผลงานที่ใช้งานได้จริง",
        "contact.label.email": "อีเมล", "contact.label.phone": "เบอร์โทรศัพท์",
        "contact.label.github": "GitHub", "contact.label.linkedin": "LinkedIn",
        "contact.form.name": "ชื่อของคุณ", "contact.form.namePh": "สมชาย มีสุข",
        "contact.form.nameErr": "กรุณากรอกชื่อของคุณ",
        "contact.form.email": "อีเมลของคุณ", "contact.form.emailErr": "กรุณากรอกอีเมลให้ถูกต้อง",
        "contact.form.subject": "หัวข้อ", "contact.form.subjectPh": "โอกาสฝึกงาน",
        "contact.form.subjectErr": "กรุณากรอกหัวข้อ",
        "contact.form.message": "ข้อความ", "contact.form.messagePh": "สวัสดีค่ะคุณศรีรัตน์ เราอยากเชิญคุณมาสัมภาษณ์งาน...",
        "contact.form.messageErr": "กรุณากรอกข้อความ",
        "contact.form.submit": "ส่งข้อความ",
        "contact.form.success": "ขอบคุณค่ะ! ข้อความของคุณถูกส่งเรียบร้อยแล้ว",
        

        "footer.rights": "© 2569 ศรีรัตน์ อินทลัย สงวนลิขสิทธิ์"
    }
};

const typingPhrases = {
    en: ["Computer Science Student", "Mobile App Developer", "Product Design Intern", "UI/UX Designer"],
    th: ["นักศึกษาวิทยาการคอมพิวเตอร์", "พัฒนาแอปมือถือ", "ออกแบบผลิตภัณฑ์", "ออกแบบ UI/UX"]
};

function getCurrentLang() {
    return document.documentElement.getAttribute('lang') === 'th' ? 'th' : 'en';
}

function applyLanguage(lang) {
    document.documentElement.setAttribute('lang', lang);

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const val = i18n[lang][key];
        if (val !== undefined) el.innerHTML = val;
    });

    document.querySelectorAll('[data-i18n-ph]').forEach(el => {
        const key = el.getAttribute('data-i18n-ph');
        const val = i18n[lang][key];
        if (val !== undefined) el.setAttribute('placeholder', val);
    });

    const langLabel = document.getElementById('lang-toggle-label');
    if (langLabel) langLabel.textContent = lang === 'en' ? 'TH' : 'EN';

    localStorage.setItem('portfolio-lang', lang);
}

function initLanguage() {
    const saved = localStorage.getItem('portfolio-lang');
    const browserLang = navigator.language && navigator.language.startsWith('th') ? 'th' : 'en';
    const lang = saved || browserLang;
    applyLanguage(lang);
}

function initTheme() {
    const saved = localStorage.getItem('portfolio-theme');
    const theme = saved || 'dark';
    if (theme === 'light') {
        document.documentElement.classList.add('light-theme');
    } else {
        document.documentElement.classList.remove('light-theme');
    }
}

initTheme();
initLanguage();

document.addEventListener('DOMContentLoaded', () => {

    /* ------------------------------------------------------------------------
       0b. Theme & Language Toggle Buttons
       ------------------------------------------------------------------------ */
    const themeToggleBtn = document.getElementById('theme-toggle');
    const langToggleBtn = document.getElementById('lang-toggle');

    themeToggleBtn?.addEventListener('click', () => {
        const isLight = document.documentElement.classList.toggle('light-theme');
        localStorage.setItem('portfolio-theme', isLight ? 'light' : 'dark');
    });

    langToggleBtn?.addEventListener('click', () => {
        const newLang = getCurrentLang() === 'en' ? 'th' : 'en';
        applyLanguage(newLang);
    });

    /* ------------------------------------------------------------------------
       1. Mobile Menu Navigation Toggle
       ------------------------------------------------------------------------ */
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            const isExpanded = hamburger.getAttribute('aria-expanded') === 'true';
            hamburger.setAttribute('aria-expanded', !isExpanded);
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
                hamburger.setAttribute('aria-expanded', 'false');
            });
        });
    }

    /* ------------------------------------------------------------------------
       2. Sticky Navigation Header & Back-to-Top Button
       ------------------------------------------------------------------------ */
    const header = document.getElementById('header');
    const backToTopBtn = document.getElementById('back-to-top');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header?.classList.add('scrolled');
        } else {
            header?.classList.remove('scrolled');
        }

        if (window.scrollY > 500) {
            backToTopBtn?.classList.add('visible');
        } else {
            backToTopBtn?.classList.remove('visible');
        }

        highlightActiveNavLink();
    });

    /* ------------------------------------------------------------------------
       3. Scroll Active Menu Highlight
       ------------------------------------------------------------------------ */
    const sections = document.querySelectorAll('section[id]');

    function highlightActiveNavLink() {
        const scrollY = window.pageYOffset;

        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 100;
            const sectionId = current.getAttribute('id');
            const correspondingLink = document.querySelector(`.nav-link[href*="#${sectionId}"]`);

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                correspondingLink?.classList.add('active');
            } else {
                correspondingLink?.classList.remove('active');
            }
        });
    }

    /* ------------------------------------------------------------------------
       4. Hero Section Typing Animation Effect
       ------------------------------------------------------------------------ */
    const typingTextElement = document.getElementById('typing-text');
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typingSpeed = 100;
    const deletingSpeed = 50;
    const delayBetweenPhrases = 2000;

    function typeEffect() {
        if (!typingTextElement) return;

        const phrases = typingPhrases[getCurrentLang()];
        phraseIndex = phraseIndex % phrases.length;
        const currentPhrase = phrases[phraseIndex];

        if (isDeleting) {
            typingTextElement.textContent = currentPhrase.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typingTextElement.textContent = currentPhrase.substring(0, charIndex + 1);
            charIndex++;
        }

        let currentSpeed = isDeleting ? deletingSpeed : typingSpeed;

        if (!isDeleting && charIndex === currentPhrase.length) {
            currentSpeed = delayBetweenPhrases;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            currentSpeed = 500;
        }

        setTimeout(typeEffect, currentSpeed);
    }

    typeEffect();

    /* ------------------------------------------------------------------------
       5. Mouse Parallax Effect on Hero Image
       ------------------------------------------------------------------------ */
    const heroVisual = document.querySelector('.hero-visual');
    const heroImageWrapper = document.getElementById('hero-image-wrapper');

    if (heroVisual && heroImageWrapper) {
        heroVisual.addEventListener('mousemove', (e) => {
            const rect = heroVisual.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;

            heroImageWrapper.style.transform = `translate(${x * 0.05}px, ${y * 0.05}px) rotateY(${x * 0.03}deg) rotateX(${-y * 0.03}deg)`;
        });

        heroVisual.addEventListener('mouseleave', () => {
            heroImageWrapper.style.transform = 'translate(0px, 0px) rotateY(0deg) rotateX(0deg)';
        });
    }

    /* ------------------------------------------------------------------------
       6. Scroll Reveal Observer
       ------------------------------------------------------------------------ */
    const revealElements = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right');

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal-active');
                observer.unobserve(entry.target);
            }
        });
    }, {
        root: null,
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(element => revealObserver.observe(element));

    /* ------------------------------------------------------------------------
       7. Certificate Lightbox Modal
       ------------------------------------------------------------------------ */
    const certCards = document.querySelectorAll('.cert-card');
    const modal = document.getElementById('cert-modal');
    const modalImage = document.getElementById('modal-image');
    const modalOverlay = document.getElementById('modal-overlay');
    const modalClose = document.getElementById('modal-close');

    function openModal(imageSrc) {
        if (!modal || !modalImage) return;
        modalImage.src = imageSrc;
        modal.removeAttribute('hidden');
        setTimeout(() => modal.classList.add('active'), 10);
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        if (!modal) return;
        modal.classList.remove('active');
        setTimeout(() => {
            modal.setAttribute('hidden', 'true');
            if (modalImage) modalImage.src = '';
            document.body.style.overflow = '';
        }, 300);
    }

    certCards.forEach(card => {
        card.addEventListener('click', () => {
            const imgSrc = card.getAttribute('data-cert-src');
            if (imgSrc) openModal(imgSrc);
        });
    });

    modalOverlay?.addEventListener('click', closeModal);
    modalClose?.addEventListener('click', closeModal);

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal?.classList.contains('active')) {
            closeModal();
        }
    });

    /* ------------------------------------------------------------------------
       7.1 Certificate Filter Tabs
       ------------------------------------------------------------------------ */
    const filterBtns = document.querySelectorAll('.cert-filter-btn');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // switch active button
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.getAttribute('data-filter');

            certCards.forEach(card => {
                const category = card.getAttribute('data-category');
                if (filter === 'all' || category === filter) {
                    card.classList.remove('cert-hidden');
                } else {
                    card.classList.add('cert-hidden');
                }
            });
        });
    });

    /* ------------------------------------------------------------------------
       8. Contact Form Client-Side Validation
       ------------------------------------------------------------------------ */
    const contactForm = document.getElementById('contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            let isValid = true;

            const nameInput = document.getElementById('name');
            const emailInput = document.getElementById('email');
            const subjectInput = document.getElementById('subject');
            const messageInput = document.getElementById('message');
            const formStatus = document.getElementById('form-status');

            // Simple validation helper
            const validateField = (input, condition) => {
                const group = input?.parentElement;
                if (!condition) {
                    group?.classList.add('error');
                    isValid = false;
                } else {
                    group?.classList.remove('error');
                }
            };

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            validateField(nameInput, nameInput.value.trim().length > 0);
            validateField(emailInput, emailRegex.test(emailInput.value.trim()));
            validateField(subjectInput, subjectInput.value.trim().length > 0);
            validateField(messageInput, messageInput.value.trim().length > 0);

            if (isValid) {
                const submitBtn = document.getElementById('submit-btn');
                if (submitBtn) submitBtn.disabled = true;

                if (formStatus) {
                    formStatus.className = 'form-status success';
                    formStatus.textContent = i18n[getCurrentLang()]['contact.form.success'];
                }

                contactForm.reset();

                setTimeout(() => {
                    if (submitBtn) submitBtn.disabled = false;
                    if (formStatus) formStatus.textContent = '';
                }, 5000);
            }
        });
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const card = document.querySelector(".auto-carousel-card");
    if (!card) return;

    const slides = card.querySelectorAll(".carousel-slide");
    const prevBtn = card.querySelector(".prev-btn");
    const nextBtn = card.querySelector(".next-btn");
    const dotsContainer = card.querySelector(".carousel-dots");

    let currentIndex = 0;
    let timer = null;
    const slideInterval = 3500; 

    slides.forEach((_, index) => {
        const dot = document.createElement("div");
        dot.classList.add("dot");
        if (index === 0) dot.classList.add("active");
        dot.addEventListener("click", () => goToSlide(index));
        dotsContainer.appendChild(dot);
    });

    const dots = dotsContainer.querySelectorAll(".dot");

    function goToSlide(index) {
        slides[currentIndex].classList.remove("active");
        dots[currentIndex].classList.remove("active");

        currentIndex = (index + slides.length) % slides.length;

        slides[currentIndex].classList.add("active");
        dots[currentIndex].classList.add("active");

        resetTimer(); 
    }

    function startTimer() {
        timer = setInterval(() => {
            goToSlide(currentIndex + 1);
        }, slideInterval);
    }

    function resetTimer() {
        clearInterval(timer);
        startTimer();
    }

    if (nextBtn) nextBtn.addEventListener("click", () => goToSlide(currentIndex + 1));
    if (prevBtn) prevBtn.addEventListener("click", () => goToSlide(currentIndex - 1));

    card.addEventListener("mouseenter", () => clearInterval(timer));
    card.addEventListener("mouseleave", startTimer);

    startTimer();
});
