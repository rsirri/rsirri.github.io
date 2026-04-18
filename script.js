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
                                    name: 'Kiewit — Brown Field S/4HANA Implementation',
                                    period: 'Dec 2025 - Present | Alpharetta, GA / Omaha, NE (Hybrid)',
                                    points: [
                                        'Retained on the Kiewit S/4HANA engagement through employer transition (Techwaukee → Savancys), continuing as the lead technical resource for RAP ABAP and BTP delivery — reflecting client confidence in delivery quality and technical leadership.',
                                        'Designed and deployed a custom Fiori UI5 TypeScript application (OData Service Explorer) to the Kiewit Fiori Launchpad, enabling real-time browsing of 700+ V2 and 84 V4 OData services; implemented metadata XML parsing to display Entity Sets per service; developed in VS Code with source on GitHub, ported to Pinnacle S/4HANA 2023 with full FLP integration.',
                                        'Built an ORS Financial Dashboard (BSP: ZORS_ACT_BUDGET) using SAP Fiori Elements with OData V2 (ZRS_ORS_QUERY_CDS), featuring an AnalyticalTable with verified budget vs. actuals totals, DataPoint-based variance coloring, KPI tiles (Total Plan, Total Actual, Total Variance), and a bar chart comparing plan vs. cost YTD by account category; developed in SAP BAS with version control via GitHub.',
                                        'Replaced a legacy Function Module-based data retrieval with a parameterized CDS View (ZRS_ORS_QUERY_CDS), eliminating data redundancy and enabling HANA push-down; this CDS View serves as the OData query source for the ORS ACT Budget dashboard (ZORS_ACT_BUDGET).',
                                        'Built a purpose-built Purchase Requisition (PR) application on SAP BTP ABAP Cloud (BSP: ZPRAPP) using Unmanaged RAP over standard BAPI for PR creation, with custom fields, Notes & Justification facets, and multi-line text — deliberately architected on BTP rather than S/4 standard extensibility, as the requirement demanded a fully owned UX beyond what Custom Fields & Logic allows; leveraged RAP Business Events (RAISE ENTITY EVENT) for async event-driven processing, a BTP ABAP Cloud-exclusive capability unavailable in Private Cloud RAP; deployed via SAP Work Zone (OAuth2UserTokenExchange) achieving zero footprint in the S/4 core; developed entirely in SAP BAS with source managed in GitHub.',
                                        'Architecting an ORS Financial Dashboard rebuild using RAP, CDS Analytical Models (DIMENSION → BASE → CUBE → QUERY layer), OData V4, and Fiori Elements Analytical List Page sourcing from ACDOCA, PRPS, PROJ, and COSP; leveraging SAP standard VDM views (I_JournalEntryItem, I_WBSElement, I_FiscalCalendarDate) and service binding ZSB_OR_Dashboard under package Z_OR_DASHBOARD.',
                                        'Activated and configured ~25 OData APIs across Procurement, AP, Finance, Supply Chain, PM, and EWM domains on Pinnacle S/4HANA; EWM APIs include inbound/outbound delivery, physical inventory, and warehouse storage bin services; identified Azure AD SAML SSO with Basic Auth exception as the correct integration pattern for technical service users.',
                                        'Implemented end-to-end secure OData service integration between SAP and Microsoft Excel using SAML-based Principal Propagation via Microsoft Entra ID — enabling identity federation so the authenticated Microsoft 365 users identity flows directly into SAP without storing credentials; coordinated with the security team to activate SAML on SAP side and configure the Entra ID enterprise application for trust establishment.'
                                    ]
                                }
                            ]
                        },
                        {
                            company: 'Techwaukee Solutions LLC (US)',
                            title: 'Senior Software Engineer',
                            period: 'Apr 2023 - Nov 2025',
                            clients: [
                                {
                                    name: 'Kiewit — Brown Field S/4HANA Implementation',
                                    period: 'Mar 2025 — Nov 2025 | Alpharetta, GA / Omaha, NE (Hybrid)',
                                    points: [
                                        'Designed, developed, and deployed RAP-based OData V4 APIs for Equipment Management, Measurement Points, and Pricing Condition records via SAP Gateway, enabling seamless integration with external partners including BearingPoint.',
                                        'Built RAP-based Fiori Elements applications for Financial Lease Price Calculation (FLPC), including List Report and Object Page, with Excel-based mass upload extensions using SAP BAS to support high-volume data processing.',
                                        'Implemented advanced Fiori Elements UI customizations including suppression of standard RAP action buttons via manifest-registered controller extensions using onAfterBinding and DOM-level targeting — demonstrating ability to work around framework limitations cleanly without modifying standard code or violating Clean Core principles.',
                                        'Developed RAP Custom Entity-based reports for high-volume condition record processing, incorporating background job scheduling for scalable execution.',
                                        'Created optimized CDS Views to extract CRM opportunity and activity metrics supporting data migration and analytics.',
                                        'Implemented certificate lifecycle automation by fetching PKCS#12 files from external APIs, converting them to PSE using SXPG_COMMAND_EXECUTE and SM69, and securely uploading certificates to STRUST via custom ABAP programs.',
                                        'Developed and enhanced EWM RF screens for packing and repacking processes using the SAP RF Framework to improve warehouse efficiency.',
                                        'Led S/4HANA code remediation initiatives, refactoring legacy ABAP objects to align with RAP standards and Clean Core principles.',
                                        'Enforced development standards and code quality through ATC and SCI checks, improving performance, maintainability, and upgrade readiness across the landscape.',
                                        'Redesigned ORDRSP pricing logic using OO ABAP Strategy and Factory patterns (ZCL_ORDRSP_PRICE_HANDLER), replacing monolithic condition handling with dedicated handler classes per pricing condition type; introduced a TVARVC-based feature toggle for controlled activation and a custom fallback table with customer hierarchy and factory calendar logic for pricing resolution.'
                                    ]
                                },
                                {
                                    name: 'Bloomberg US — S/4HANA Support',
                                    period: 'Dec 2023 — Jan 2025 | Remote (US)',
                                    points: [
                                        'Led the development and support of critical OTC processes.',
                                        'Created reusable OO classes to streamline OTC workflows and developed custom reports using OO ABAP to enhance data visibility and analysis.',
                                        'Integrated SAP with Bloomberg Terminals through API development.',
                                        'Implemented and troubleshot workflow solutions for inquiry, quote, and customer processes.',
                                        'Leveraged CDS Views, Table Functions, and AMDP to optimize OTC data management.',
                                        'Designed and implemented RESTful APIs for efficient data handling and integration.'
                                    ]
                                },
                                {
                                    name: 'Swatch Group US — S/4HANA Implementation & Code Remediation',
                                    period: 'Jul 2023 — Dec 2023 | Weehawken, NJ',
                                    points: [
                                        'Developed custom reports using OO ABAP and CL_SALV.',
                                        'Successfully migrated customer data using Data Migration Cockpit.',
                                        'Led the design and development of interface objects for customer service notification creation and integrated SAP with external systems using SOAP and RESTful APIs.',
                                        'Created CDS Views, Table Functions and AMDP for reports and analytics views for RAP ABAP.',
                                        'Implemented Fiori applications using RAP-based BTP BAS for reports, analytics, and KPI dashboards.',
                                        'Extended standard SAP Fiori applications using Adaptation Projects (UI5 Flexibility) and custom XML fragments, adding custom fields, actions, and sections; implemented BAdI-based backend extensions to complement frontend enhancements.',
                                        'Built freestyle SAPUI5 applications using MVC pattern with OData service consumption via SAP Gateway, developed using SAP BAS and Fiori Tools.'
                                    ]
                                },
                                {
                                    name: 'Clemens Food Group — S/4HANA Support',
                                    period: 'Apr 2023 — Jun 2023 | Remote (US)',
                                    points: [
                                        'Developed reusable global classes for efficient code reuse and created custom reports using OO ABAP and CL_SALV.',
                                        'Led the design and development of interface objects using IDocs and REST APIs for purchase order details.',
                                        'Implemented custom solutions for EWM RF and PPF processes for warehouse operations and physical inventory.',
                                        'Enhanced FICO functionality with BTEs, substitutions, validations, BADIs, User Exits, Customer Exits, and VOFM Routines.',
                                        'Integrated SAP with external systems using RESTful APIs; successfully migrated using SPAU and SPDD.',
                                        'Worked on CDS Views, AMDP procedures, CDS VDM, and Fiori Elements.',
                                        'Worked on SOAP, OData, and REST-based APIs across MM and SD modules.'
                                    ]
                                }
                            ]
                        },
                        {
                            company: 'PricewaterhouseCoopers (PwC) India',
                            title: 'Principal Consultant',
                            period: 'Mar 2020 — Apr 2023',
                            clients: [
                                {
                                    name: 'MEIL — Megha Engineering & Infrastructures Ltd',
                                    period: 'S/4HANA Implementation | Jan 2022 — Mar 2023 | Hyderabad',
                                    points: [
                                        'Led the technical team and served as solution architect.',
                                        'Developed OO ABAP solutions for MM Store Cockpit and SD Dashboard and its related OData services for Fiori Apps.',
                                        'Integrated EWM with Warehouse Control Systems; customized standard RF screens for business requirements.',
                                        'Created Fiori Elements-based list reports using CDS Views and CDS VDM.',
                                        'Worked on several enhancements: screen modifications, custom field additions, custom validations using BADIs, User Exits, Screen Exits, Customer Exits, BTEs, FI substitutions, validations, VOFM Routines.',
                                        'Developed reusable global classes for multiple modules — SD, FI, MM, PS, HR, PP, QM, ETM, TRM, EWM.',
                                        'Modified user exits and enhancements for equipment reservation, rental, and maintenance; custom fields in ETM screens (J1B3N, J1B1N).',
                                        'Developed ALV reports for equipment utilization, rental status, and cost tracking in ETM.',
                                        'Created CDS Views and AMDP for real-time analytics on equipment lifecycle; developed OData Services to integrate SAP ETM with Fiori/UI5 applications.',
                                        'Implemented RFCs, BAPIs, and IDocs for external system integration (contract management, finance, and logistics).',
                                        'Implemented Fiori applications using BTP BAS; worked on BTP objects for Fiori and RAP development.',
                                        'Integrated SAP with banking systems using REST APIs for invoicing and receipts posting.',
                                        'Managed project discussions, budgeting, and team resizing.',
                                        'Developed SOAP, RFC, IDoc and proxy classes for third-party integration; implemented production order and process order creation, confirmation, and PP shop floor execution including MRP-driven workflows.'
                                    ]
                                },
                                {
                                    name: 'THCM — S/4HANA Implementation & Code Remediation',
                                    period: 'Bengaluru',
                                    points: [
                                        'Developed and customized EWM RF screens for Inbound Putaway and Internal Bin-to-Bin Transfer processes.',
                                        'Developed a custom TCode for HU Label Printing, automating the printing process for handling units.',
                                        'Developed/customized changes to /SAPAPO/PE_RUN for SPP; worked on mass forecast reports and safety stock calculation (EOQ and SFT).',
                                        'Worked on BADI for stability rule assignment in BOD and DRP.',
                                        'Created Object-Oriented Global Class methods to retrieve and post EWM transactions.',
                                        'Actively involved in interface design and implementation using RESTful APIs; worked on SOAP services to fetch production and process order details.',
                                        'Designed and implemented multiple OData services for SAP Fiori reports and dashboard applications.',
                                        'Identified enhancement changes for upgrade objects using SPAU and SPDD.',
                                        'Led a team of developers, providing technical guidance and monitoring progress to ensure timely delivery.'
                                    ]
                                },
                                {
                                    name: 'Indo Nissin — S/4HANA Brownfield & Code Remediation',
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
                                        'Developed and supported a Purchase Requisition (PR) Dashboard using OO ABAP, streamlining procurement processes and enhancing visibility into requisition statuses.',
                                        'Designed and implemented a Vendor Quotation Ranking system using ABAP Excel with OO ABAP, enabling automated ranking of vendor quotations.',
                                        'Created a SOAP service to fetch the Purchase Quotation List based on various selection criteria.'
                                    ]
                                }
                            ]
                        },
                        {
                            company: 'Rhein Brücke IT Consulting India',
                            title: 'Senior ABAP Consultant',
                            period: 'Feb 2019 — Mar 2020',
                            clients: [
                                {
                                    name: 'BCS / ZF Group — ECC Support',
                                    period: 'Chennai',
                                    points: [
                                        'Performance analysis of objects, finding unnecessary database executions and data conversion process for handling high volumes of data.',
                                        'Provided data analysis, data migration, interface support, and technical support.',
                                        'Built invoice approval workflow (BUS2081 - MIRO) including invoice parking, Invoice Clarification, GR Request, Invoice Release, and Invoice price block removal.',
                                        'Created and supported reports for invoice approval workflow: Workflow Status Report Dashboard, Invoice Accruals, Custom Deadline Monitoring Report, Vendor Dashboard Report (Vendor Spend Analysis).',
                                        'Daily workflow administration: check and solve workflow errors, resolve missing agents, manage agent assignments.',
                                        'Worked on SOAP and REST APIs for FI, MM, SD, PP, PM modules; developed MRP Waterfall report.'
                                    ]
                                }
                            ]
                        },
                        {
                            company: 'Techwaukee Solutions India',
                            title: 'Senior ABAP Consultant',
                            period: 'Sep 2016 — Jan 2019',
                            clients: [
                                {
                                    name: 'KIMS — Kerala Institute of Medical Science',
                                    period: 'S/4HANA Implementation | Chennai',
                                    points: [
                                        'Developed Smartforms for inventory warehouse labels, enhancing material traceability.',
                                        'Created CDS Views for data modelling and analysis in SD, MM, and FI modules; consumed CDS Views in ABAP OO ALV reports including purchase register report.',
                                        'Integrated SAP with external systems using outbound and inbound proxies.',
                                        'Implemented custom HR processes using SOAP services.'
                                    ]
                                },
                                {
                                    name: 'Tenshi Life Sciences — S/4HANA Brownfield & Support',
                                    period: 'Bengaluru',
                                    points: [
                                        'Enhanced PP, QM, and WM modules with custom developments.',
                                        'Created custom gate pass scenarios in module pool; developed Smartforms for SD module.',
                                        'Integrated SAP with external systems using SOAP services; developed OData services for Fiori applications.',
                                        'Performed upgrade activities: identified obsolete code and replaced deprecated FMs/BAPIs; fixed code and bugs for upgrade objects.',
                                        'Provided technical leadership and coordination.'
                                    ]
                                },
                                {
                                    name: 'Arvind Lifestyle Brand Limited — ECC GST Implementation',
                                    period: 'Bengaluru',
                                    points: [
                                        'Developed Smartforms for customer invoices, credit memos, and Accounts Receivable Customer statements.',
                                        'Created OO ALV reports for MM, SD, and FI modules.',
                                        'Integrated SAP with external systems using OData and SOAP services for Purchase Order creation, GR Process, and Service Order creation.'
                                    ]
                                },
                                {
                                    name: 'Ashok Leyland — ECC CR & Support',
                                    period: 'Chennai',
                                    points: [
                                        'Developed a comprehensive DSMI report for dealer sales incentive management.',
                                        'Automated data upload and processing using BAPI; created a dynamic AR matrix report using OO ABAP.',
                                        'Designed and implemented a vendor payment dashboard with email notifications.',
                                        'Enhanced MIGO transaction with custom vendor and employee details; created custom forms for email notifications.'
                                    ]
                                }
                            ]
                        },
                        {
                            company: 'Verge Systems India',
                            title: 'SAP ABAP Consultant',
                            period: 'Jun 2011 — Aug 2016',
                            clients: [
                                {
                                    name: 'Coromandel International & EID Parry — Murugappa Group',
                                    period: 'ECC CR & Support | Chennai',
                                    points: [
                                        'Developed reports for vendor and customer master data download.',
                                        'Automated document posting and reversal processes; implemented email notifications for vendor changes.',
                                        'Integrated SAP with external systems using RFCs; created custom solutions for STO and sales order processing.',
                                        'Designed and implemented a customer complaint management process using MPP.',
                                        'Enhanced SAP functionality using BADIs and user exits.'
                                    ]
                                },
                                {
                                    name: 'TVS Infotech — ECC Support',
                                    period: 'Chennai',
                                    points: [
                                        'Developed custom OO ALV reports for inventory analysis, sales quotation details, and AR/AP data.',
                                        'Optimized slow-running reports for improved performance.',
                                        'Created BDC programs for data migration and automation.',
                                        'Enhanced SAP functionality with custom fields, BADIs, and user exits.',
                                        'Developed custom programs for claims management and reporting via Module pool programming.',
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
    'SAP Technical Architect',
    'S/4HANA & Clean Core Specialist',
    'RAP · BTP ABAP Cloud · Fiori UI5',
    'AI-Assisted SAP Developer'
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
// Reads data array and creates HTML dynamically
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
        clients.forEach(client => {
            
            // Build bullet points HTML for the client
            let pointsHTML = '';
            client.points.forEach(point => {
                pointsHTML += `<li>${point}</li>`;
            });

            // Build one Client card
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
// Reads data array and creates HTML dynamically
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