// ================================
// CERTIFICATIONS DATA
// Array of Objects to hold certification details
// ================================
const certData = [
                    {
                        icon: '🏆',
                        title: 'SAP Certified Associate',
                        subtitle: 'Back-End Developer - ABAP Cloud',
                        category: 'certifications',
                        tag: 'Certification'
                    },
                    {
                        icon: '✅',
                        title: 'Managing Clean Core',
                        subtitle: 'SAP S/4HANA Cloud — Record of Achievement',
                        category: 'achievements',
                        tag: 'Achievement'
                    },
                    {
                        icon: '✅',
                        title: 'ABAP Environment on SAP BTP',
                        subtitle: 'Setting Up — Record of Achievement',
                        category: 'achievements',
                        tag: 'Achievement'
                    },
                    {
                        icon: '✅',
                        title: 'ABAP Programming on SAP BTP',
                        subtitle: 'Learning the Basics — Record of Achievement',
                        category: 'achievements',
                        tag: 'Achievement'
                    },
                    {
                        icon: '✅',
                        title: 'Data Migration to SAP S/4HANA',
                        subtitle: 'Record of Achievement',
                        category: 'achievements',
                        tag: 'Achievement'
                    },
                    {
                        icon: '📚',
                        title: 'SAP Fiori Application Developer',
                        subtitle: 'Certification — In Progress',
                        category: 'learning',
                        tag: 'Learning'
                    },
                    {
                        icon: '📚',
                        title: 'SAP BTP Application Developer',
                        subtitle: 'Certification — Planned',
                        category: 'learning',
                        tag: 'Learning'
                    }

    ];

// ================================
// EXPERIENCE DATA
// Array of Objects to hold experience details
// ================================
const experienceData = [
                        {
                            company: 'Savancys',
                            title: 'Senior Software Engineer',
                            period: 'Dec 2025 - Present',
                            clients: [
                                {
                                    name: 'Kiewit - S/4HANA Implementation',
                                    period: 'Dec 2025 - Present | Alpharetta, GA / Omaha, NE',
                                    points: [
                                        'Continuing S/4HANA engagement delivering RAP ABAP, SAP BTP, and Clean Core compliant solutions with technical leadership for ongoing enhancements.'
                                    ]
                                }
                            ]
                        },
                        {
                            company: 'Techwaukee Solutions LLC (US)',
                            title: 'Software Engineer',
                            period: 'Jun 2023 - Dec 2025',
                            clients: [
                                {
                                    name: 'Kiewit — S/4HANA Implementation',
                                    period: 'Mar 2025 — Nov 2025 | Alpharetta, GA / Omaha, NE',
                                    points: [
                                        'Designed and deployed RAP-based OData V4 APIs for Equipment Management, Measurement Points, and Pricing Conditions enabling integration with BearingPoint.',
                                        'Built Fiori Elements apps for Financial Lease Price Calculation with Excel mass upload extensions supporting high-volume data processing.',
                                        'Developed RAP Custom Entity reports with background job scheduling for scalable execution.',
                                        'Created optimized CDS Views to extract CRM opportunity and activity metrics supporting data migration and analytics.',
                                        'Implemented certificate lifecycle automation — fetching PKCS#12 files, converting to PSE via SXPG_COMMAND_EXECUTE and uploading to STRUST.',
                                        'Developed and enhanced EWM RF screens for packing and repacking processes using the SAP RF Framework.',
                                        'Led S/4HANA code remediation refactoring legacy ABAP to RAP standards and Clean Core principles.',
                                        'Enforced development standards through ATC and SCI checks improving performance and upgrade readiness.'
                                    ]
                                },
                                {
                                    name: 'Bloomberg US — S/4HANA Support',
                                    period: 'Dec 2023 — Jan 2025 | Remote (US)',
                                    points: [
                                        'Led the development and support of critical OTC processes.',
                                        'Created reusable OO classes to streamline OTC workflows and developed custom reports using OO ABAP to enhance data visibility and analysis.',
                                        'Integrated SAP with Bloomberg Terminals through API development.',
                                        'Implemented and troubleshooted workflow solutions for inquiry, quote, and customer processes.',
                                        'Leveraged CDS Views, Table Functions, and AMDP to optimize OTC data management.',
                                        'Designed and implemented RESTful APIs for efficient data handling and integration.'
                                    ]
                                },
                                {
                                    name: 'Swatch Group US — S/4HANA Implementation & ECC Support',
                                    period: 'Jul 2023 — Dec 2023 | Weehawken, NJ',
                                    points: [
                                        'Developed custom reports using OO ABAP and CL_SALV for several reports.',
                                        'Successfully migrated customer data using data migration cockpit.',
                                        'Led the design and development of interface objects for customer service notification creation and integrated SAP with external systems using SOAP and RESTful APIs.',
                                        'Created CDS Views, Table Functions and AMDP for reports and analytics view for RAP ABAP.',
                                        'Implemented Fiori applications using RAP-based BTP BAS for reports, analytics, and KPI dashboards.'
                                    ]
                                },
                                {
                                    name: 'Clemens Food Group — S/4HANA Support',
                                    period: 'Apr 2023 — Jun 2023 | Remote (US)',
                                    points: [
                                        'Developed reusable global classes for efficient code reuse and created custom reports using OO ABAP and CL_SALV.',
                                        'Led the design and development of interface objects using IDOCs and REST APIs for purchase order details.',
                                        'Implemented custom solutions for EWM RF and PPF processes for warehouse operations and physical inventory.',
                                        'Enhanced FICO functionality with BTEs, substitutions, validations, BADIs, User Exits, Customer Exits, and VOFM Routines.',
                                        'Integrated SAP with external systems using RESTful APIs and successfully migrated using SPAU and SPDD.',
                                        'Worked on CDS Views, AMDP procedures, CDS VDM, and Fiori Elements.',
                                        'Worked on SOAP, OData, and REST based APIs for third party applications across MM and SD modules.'
                                    ]
                                }
                            ]
                        },
                        {
                            company: 'PwC India',
                            title: 'Principal Consultant',
                            period: 'Mar 2020 — Apr 2023',
                            clients: [
                                {
                                    name: 'MEIL — Megha Engineering & Infrastructure',
                                    period: 'S/4HANA Implementation | Hyderabad',
                                    points: [
                                        'Led the technical team and served as solution architect.',
                                        'Developed OO ABAP solutions for MM Store Cockpit and SD Dashboard and its related OData services for Fiori Apps.',
                                        'Integrated EWM with Warehouse Control Systems and customized standard RF screens for business requirements.',
                                        'Created Fiori Elements-based list reports using CDS Views and CDS VDM.',
                                        'Worked on several enhancements including screen modifications, custom field additions using BADIs, User Exits, BTEs, FI substitutions, and VOFM Routines.',
                                        'Developed reusable global classes for SD, FI, MM, PS, HR, PP, QM, ETM, TRM, EWM modules.',
                                        'Modified user exits for equipment reservation, rental, and maintenance with custom fields in ETM screens (J1B3N, J1B1N).',
                                        'Developed ALV reports for equipment utilization, rental status, and cost tracking in ETM.',
                                        'Created CDS Views and AMDP for real-time analytics and OData services for SAP ETM Fiori integration.',
                                        'Implemented RFCs, BAPIs, and IDocs for external system integration in ETM.',
                                        'Implemented Fiori applications using BTP BAS and worked on BTP objects for Fiori and RAP development.',
                                        'Integrated SAP with banking systems using REST APIs for invoicing and receipts posting.',
                                        'Managed project discussions, budgeting, and team resizing.',
                                        'Developed SOAP, RFC, IDOC and proxy classes for third-party integration.'
                                    ]
                                },
                                {
                                    name: 'THCM — S/4HANA Implementation & Support',
                                    period: 'Bengaluru',
                                    points: [
                                        'Developed and customized EWM RF screens for Inbound Putaway and Bin-to-Bin Transfer processes.',
                                        'Developed a custom TCode for HU Label Printing automating the printing process for handling units.',
                                        'Developed and customized changes to /SAPAPO/PE_RUN for SPP.',
                                        'Worked on safety stock calculation report for combined EOQ and SFT calculation.',
                                        'Worked on BADI for stability rule assignment in BOD and DRP.',
                                        'Created Object-Oriented Global Class methods to retrieve and post EWM transactions.',
                                        'Actively involved in interface design using RESTful APIs for external system communication.',
                                        'Developed SOAP services to fetch production, process order, and stock details from SAP.',
                                        'Designed and implemented multiple OData services for SAP Fiori reports and dashboards.',
                                        'Identified enhancement changes for upgrade objects using SPAU and SPDD.',
                                        'Led a team of developers providing technical guidance for timely delivery.'
                                    ]
                                },
                                {
                                    name: 'Indo Nissin — S/4HANA Brownfield & Support',
                                    period: 'Bengaluru',
                                    points: [
                                        'Developed custom OO ABAP reports for planned independent requirements and stock movement.',
                                        'Implemented OData services for P2P dashboard integration for Fiori Apps.',
                                        'Created custom RF transactions to improve performance.',
                                        'Led the development and adoption of global EWM templates.',
                                        'Provided post-go-live support for EWM implementations.',
                                        'Defined the roadmap for implementing advanced EWM functionalities.',
                                        'Configured and optimized handling unit (HU) processes.'
                                    ]
                                },
                                {
                                    name: 'Katerra India — S/4HANA Implementation',
                                    period: 'Bengaluru',
                                    points: [
                                        'Developed and supported a Purchase Requisition Dashboard using OO ABAP.',
                                        'Designed and implemented a Vendor Quotation Ranking system using ABAP Excel with OO ABAP.',
                                        'Created a SOAP service to fetch the Purchase Quotation List based on various selection criteria.'
                                    ]
                                }
                            ]
                        },
                        {
                            company: 'Rhein Brücke IT Consulting',
                            title: 'Senior ABAP Consultant',
                            period: 'Feb 2019 — Mar 2020',
                            clients: [
                                {
                                    name: 'BCS (ZF Group, Germany) — ECC Support',
                                    period: 'Chennai',
                                    points: [
                                        'Performance analysis of objects identifying unnecessary database executions and handling data conversion for high volumes.',
                                        'Provided data analysis, data migration, interface support, and technical support.',
                                        'Developed MRP Waterfall report and Solmon changes with mail forms custom enhancements.',
                                        'Built invoice approval workflow (BUS2081-MIRO) covering parking, clarification, GR request, release, and price block removal.',
                                        'Created workflow reports including status dashboard, invoice accruals, deadline monitoring, and vendor spend analysis.',
                                        'Daily workflow administration — resolving errors, fixing missing agents, and managing assignments.',
                                        'Worked on SOAP and REST APIs across FI, MM, SD, PP, and PM modules.'
                                    ]
                                }
                            ]
                        },
                        {
                            company: 'Techwaukee Solutions (India)',
                            title: 'Senior ABAP Consultant',
                            period: 'Sep 2016 — Jan 2019',
                            clients: [
                                {
                                    name: 'KIMS — Kerala Institute of Medical Science',
                                    period: 'S/4HANA Implementation | Chennai',
                                    points: [
                                        'Developed Smartforms for inventory warehouse labels enhancing material traceability.',
                                        'Created CDS Views for data modelling in SD, MM, and FI and consumed in OO ALV reports.',
                                        'Integrated SAP with external systems using outbound and inbound proxies.',
                                        'Implemented custom HR processes using SOAP services.'
                                    ]
                                },
                                {
                                    name: 'Tenshi Life Sciences — S/4HANA Brownfield & Support',
                                    period: 'Bengaluru',
                                    points: [
                                        'Enhanced PP, QM, and WM modules with custom developments.',
                                        'Created custom gate pass scenarios in module pool.',
                                        'Developed Smartforms for SD module.',
                                        'Integrated SAP with external systems using SOAP services.',
                                        'Developed OData services for Fiori applications.',
                                        'Identified obsolete code and replaced deprecated FMs and BAPIs during upgrade.',
                                        'Fixed codes and bugs as per upgrade objects.'
                                    ]
                                },
                                {
                                    name: 'Arvind Lifestyle Brands — ECC GST Implementation',
                                    period: 'Bengaluru',
                                    points: [
                                        'Developed Smartforms for customer invoices, credit memos, and AR statements.',
                                        'Created OO ALV reports for MM, SD, and FI modules.',
                                        'Integrated SAP with external systems using OData and SOAP services for PO creation, GR Process, and Service Order creation.'
                                    ]
                                },
                                {
                                    name: 'Ashok Leyland — ECC CR & Support',
                                    period: 'Chennai',
                                    points: [
                                        'Developed a comprehensive DSMI report for dealer sales incentive management.',
                                        'Automated data upload and processing using BAPI.',
                                        'Created a dynamic AR matrix report using OO ABAP.',
                                        'Designed and implemented a vendor payment dashboard with email notifications.',
                                        'Enhanced MIGO transaction with custom vendor and employee details.'
                                    ]
                                }
                            ]
                        },
                        {
                            company: 'Verge Systems',
                            title: 'SAP ABAP Consultant',
                            period: 'Jun 2011 — Aug 2016',
                            clients: [
                                {
                                    name: 'Coromandel International & EID Parry (Murugappa Group)',
                                    period: 'ECC CR & Support | Chennai',
                                    points: [
                                        'Developed reports for vendor and customer master data download.',
                                        'Automated document posting and reversal processes.',
                                        'Implemented email notifications for vendor changes.',
                                        'Integrated SAP with external systems using RFCs.',
                                        'Created custom solutions for STO and sales order processing.',
                                        'Designed and implemented a customer complaint management process using MPP.',
                                        'Enhanced SAP functionality using BADIs and user exits.'
                                    ]
                                },
                                {
                                    name: 'TVS Infotech — ECC Support',
                                    period: 'Chennai',
                                    points: [
                                        'Developed custom OO ALV reports for inventory analysis, sales quotations, and AR/AP data.',
                                        'Optimized slow-running reports for improved performance.',
                                        'Created BDC programs for data migration and automation.',
                                        'Enhanced SAP functionality with custom fields, BADIs, and user exits.',
                                        'Developed custom programs for claims management via Module pool programming.',
                                        'Created Smartforms for quotation and credit notes.'
                                    ]
                                }
                            ]
                        }
                    ];

// ================================
// DECLARATIONS - all at top
// ================================
const navLinks = document.querySelectorAll('a[href^="#"]');
const sections = document.querySelectorAll('.section');
const revealElements = document.querySelectorAll('.reveal');
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-links');

// ================================
// SMOOTH SCROLLING
// ================================
navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            // Reveal all sections first before scrolling
            revealElements.forEach(el => el.classList.add('visible'));
            
            // Close hamburger menu if open
            hamburger.classList.remove('open');
            navMenu.classList.remove('open');

            // Then scroll
            setTimeout(() => {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }, 50);
        }
    });
});

// ================================
// ACTIVE NAV HIGHLIGHT ON SCROLL
// ================================
window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 200;
        if (window.scrollY >= sectionTop) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }
    });
});

// ================================
// TYPING ANIMATION
// ================================
const typingElement = document.querySelector('#typing-text');

const titles = [
    'SAP BTP & RAP Full Stack Developer',
    'S/4HANA & Clean Core Specialist',
    'Fiori & UI5 & CAPM Developer',
    'SAP AI Integration Explorer'
];

let titleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
    const currentTitle = titles[titleIndex];

    if (isDeleting) {
        typingElement.textContent = currentTitle.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingElement.textContent = currentTitle.substring(0, charIndex + 1);
        charIndex++;
    }

    if (!isDeleting && charIndex === currentTitle.length) {
        isDeleting = true;
        setTimeout(type, 2000);
        return;
    }

    if (isDeleting && charIndex === 0) {
        isDeleting = false;
        titleIndex = (titleIndex + 1) % titles.length;
        setTimeout(type, 500);
        return;
    }

    const speed = isDeleting ? 40 : 80;
    setTimeout(type, speed);
}

type();

// ================================
// HAMBURGER MENU
// ================================
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    navMenu.classList.toggle('open');
});

// ================================
// SCROLL REVEAL
// ================================
// Reveal all sections immediately on load
window.addEventListener('load', () => {
    revealElements.forEach(el => el.classList.add('visible'));
});

// Also observe for animation effect
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.05 });

revealElements.forEach(el => observer.observe(el));

// ================================
// CERTIFICATIONS FILTER
// ================================
function filterCards(category, clickedBtn) {
    
    // Step 1: Get all cards and filter buttons
    const allCards = document.querySelectorAll('.cert-card');
    const allButtons = document.querySelectorAll('.filter-btn');

    // Step 2: Remove active class from all buttons and add to the clicked one
    allButtons.forEach(btn => {
        btn.classList.remove('active');
    });

    // Step 3: Add active class to the clicked button
    clickedBtn.classList.add('active');

    // Step 4: Loop through every card and decide show or hide
    allCards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');

        if (category === 'all' ) { 
            card.classList.remove('hidden');
        } else if (cardCategory === category) {
            card.classList.remove('hidden');
        } else {
            card.classList.add('hidden');
        }
    });
}   

// ================================
// BUILD EXPERIENCE SECTION
// Reads data array and creaes HTML dynamically
// ================================
function buildExperience() {
    const container = document.querySelector('#experience-container');
    container.innerHTML = ''; // Clear existing content

    // loop through each employer 
    experienceData.forEach(employer => {
        const { company, title, period, clients } = employer;

        // Build client engagements HTML first
        let clientsHTML = '';

        // Loop through each client engagement for the employer
        //employer.clients.forEach(client => {
        clients.forEach(client => {
            
            // Build bullet points HTML for the client
            let pointsHTML = '';
            client.points.forEach(point => {
                pointsHTML += `<li>${point}</li>`;
            });

            // Build on Client card
            clientsHTML += `
                <div class="client-engagement">
                    <div class="client-header">
                        <span class="client-name">${client.name}</span>
                        <span class="client-date">${client.period}</span>
                    </div>
                    <ul class="job-points">
                        ${pointsHTML}
                    </ul>
                </div>
            `;
        });

            // Build one employer card with all its clients
            container.innerHTML += `
                <div class="employer">
                    <div class="employer-header">
                        <div>
                            <h3 class="employer-name">${company}</h3>
                            <span class="employer-title">${title}</span>
                        </div>
                        <span class="employer-date">${period}</span>
                    </div>
                    ${clientsHTML}
                </div>
            `;
        });
}

// call the function when page loads
buildExperience();

// ================================
// BUILD CERTIFICATIONS SECTION
// Reads data array and creaes HTML dynamically
// ================================
function buildCertifications() {
    const grid = document.querySelector('#cert-grid');
    grid.innerHTML = '';

    certData.forEach(cert => {
        const { icon, title, subtitle, category, tag } = cert;
        grid.innerHTML += `
            <div class="cert-card" data-category="${category}">
                <div class="cert-icon">${icon}</div>
                <h3 class="cert-title">${title}</h3>
                <p class="cert-sub">${subtitle}</p>
                <span class="cert-tag">${tag}</span>
            </div>
        `;
    });
}

// call the function when page loads
buildCertifications();  