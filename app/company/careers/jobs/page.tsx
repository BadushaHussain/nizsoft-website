import Link from 'next/link'
import SectionHeader from '@/components/SectionHeader'
import { HiArrowLeft, HiMapPin, HiClock, HiBriefcase, HiCodeBracket, HiPresentationChartLine } from 'react-icons/hi2'

export const metadata = {
    title: 'Open Positions | NIZSOFT Careers',
    description: 'View all open positions at NIZSOFT. Join our team building the future of insurance technology.',
}

const jobs = [
    {
        id: 'backend-golang',
        title: 'Backend Developer - Golang',
        department: 'Engineering',
        location: 'Abu Dhabi / Remote',
        type: 'Full-time',
        description: 'We are looking for an experienced Backend Developer with strong Golang expertise to build scalable microservices for our insurance platform.',
        responsibilities: [
            'Design and develop high-performance backend services using Golang',
            'Build RESTful APIs and gRPC services for insurance operations',
            'Implement microservices architecture with Docker and Kubernetes',
            'Optimize database queries and improve system performance',
            'Write clean, maintainable, and well-tested code',
            'Collaborate with frontend teams and product managers',
            'Participate in code reviews and technical discussions'
        ],
        requirements: [
            '3+ years of experience with Golang development',
            'Strong understanding of microservices architecture',
            'Experience with PostgreSQL, MongoDB, or similar databases',
            'Familiarity with Docker, Kubernetes, and cloud platforms (AWS/Azure)',
            'Knowledge of message queues (RabbitMQ, Kafka)',
            'Experience with Git and CI/CD pipelines',
            'Excellent problem-solving and communication skills'
        ],
        niceToHave: [
            'Experience in insurance or fintech domain',
            'Knowledge of gRPC and Protocol Buffers',
            'Familiarity with Redis, Elasticsearch',
            'Experience with monitoring tools (Prometheus, Grafana)'
        ]
    },
    {
        id: 'backend-python',
        title: 'Backend Developer - Python',
        department: 'Engineering',
        location: 'Abu Dhabi / Remote',
        type: 'Full-time',
        description: 'Join our team as a Python Backend Developer to build robust APIs and data processing pipelines for our insurance platform.',
        responsibilities: [
            'Develop and maintain backend services using Python (FastAPI/Django)',
            'Build RESTful APIs for insurance policy and claims management',
            'Implement data processing pipelines for analytics',
            'Design and optimize database schemas',
            'Integrate with third-party insurance systems and APIs',
            'Write comprehensive unit and integration tests',
            'Ensure code quality through reviews and best practices'
        ],
        requirements: [
            '3+ years of Python development experience',
            'Strong experience with FastAPI, Django, or Flask',
            'Proficiency in SQL and NoSQL databases',
            'Experience with async programming and task queues (Celery)',
            'Knowledge of Docker and containerization',
            'Understanding of RESTful API design principles',
            'Experience with version control (Git) and agile methodologies'
        ],
        niceToHave: [
            'Insurance domain knowledge',
            'Experience with data science libraries (Pandas, NumPy)',
            'Knowledge of GraphQL',
            'Familiarity with AWS Lambda or Azure Functions'
        ]
    },
    {
        id: 'frontend-nextjs',
        title: 'Frontend Developer - Next.js/React',
        department: 'Engineering',
        location: 'Abu Dhabi / Remote',
        type: 'Full-time',
        description: 'We\'re seeking a talented Frontend Developer to create beautiful, responsive user interfaces for our insurance platform using Next.js and React.',
        responsibilities: [
            'Build responsive web applications using Next.js and React',
            'Develop reusable UI components and design systems',
            'Implement state management with Redux or Context API',
            'Optimize application performance and loading times',
            'Ensure cross-browser compatibility and accessibility',
            'Collaborate with designers and backend developers',
            'Write clean, maintainable TypeScript/JavaScript code'
        ],
        requirements: [
            '3+ years of React development experience',
            'Strong proficiency in Next.js framework',
            'Expert knowledge of TypeScript/JavaScript, HTML5, CSS3',
            'Experience with state management (Redux, Zustand, Context)',
            'Familiarity with modern CSS frameworks (Tailwind, styled-components)',
            'Understanding of responsive design and mobile-first development',
            'Experience with Git and modern development workflows'
        ],
        niceToHave: [
            'Experience with server-side rendering (SSR) and static generation (SSG)',
            'Knowledge of testing frameworks (Jest, React Testing Library)',
            'Familiarity with design tools (Figma, Sketch)',
            'Experience with animation libraries (Framer Motion)'
        ]
    },
    {
        id: 'frontend-java',
        title: 'Frontend Developer - Java/JavaFX',
        department: 'Engineering',
        location: 'Abu Dhabi / Remote',
        type: 'Full-time',
        description: 'Looking for a Frontend Developer with Java expertise to build desktop applications for insurance agents and underwriters.',
        responsibilities: [
            'Develop desktop applications using Java and JavaFX',
            'Create intuitive user interfaces for insurance workflows',
            'Implement client-side business logic and validation',
            'Integrate with backend REST APIs',
            'Optimize application performance and memory usage',
            'Debug and resolve UI/UX issues',
            'Maintain and update existing Java desktop applications'
        ],
        requirements: [
            '3+ years of Java development experience',
            'Strong proficiency in JavaFX or Swing',
            'Experience with FXML and Scene Builder',
            'Knowledge of MVC/MVVM design patterns',
            'Understanding of multithreading and concurrency',
            'Experience with Maven or Gradle',
            'Familiarity with REST API integration'
        ],
        niceToHave: [
            'Experience with Spring Framework',
            'Knowledge of insurance industry workflows',
            'Familiarity with JUnit and TestFX',
            'Experience with Java 11+ features'
        ]
    },
    {
        id: 'business-analyst',
        title: 'Business Analyst',
        department: 'Product',
        location: 'Abu Dhabi / Hybrid',
        type: 'Full-time',
        description: 'We\'re looking for a Business Analyst to bridge the gap between business needs and technical solutions in the insurance domain.',
        responsibilities: [
            'Gather and document business requirements from stakeholders',
            'Analyze insurance workflows and identify improvement opportunities',
            'Create detailed functional specifications and user stories',
            'Collaborate with development teams to ensure requirements are met',
            'Conduct user acceptance testing (UAT) and validation',
            'Prepare business process documentation and flowcharts',
            'Facilitate workshops and requirement gathering sessions'
        ],
        requirements: [
            '3+ years of business analysis experience',
            'Strong understanding of insurance operations (policy, claims, billing)',
            'Experience with requirement gathering and documentation',
            'Proficiency in creating user stories and acceptance criteria',
            'Knowledge of Agile/Scrum methodologies',
            'Excellent communication and stakeholder management skills',
            'Experience with tools like JIRA, Confluence, or similar'
        ],
        niceToHave: [
            'CBAP or similar certification',
            'Experience with insurance core systems',
            'Knowledge of SQL and data analysis',
            'Familiarity with UML and BPMN notation'
        ]
    },
    {
        id: 'cloud-devops',
        title: 'Cloud Engineer - DevOps',
        department: 'Engineering',
        location: 'Abu Dhabi / Remote',
        type: 'Full-time',
        description: 'Join our DevOps team to build and maintain cloud infrastructure for our enterprise insurance platform.',
        responsibilities: [
            'Design and implement cloud infrastructure on AWS/Azure',
            'Build and maintain CI/CD pipelines using Jenkins, GitLab CI, or GitHub Actions',
            'Manage Kubernetes clusters and container orchestration',
            'Implement infrastructure as code using Terraform or CloudFormation',
            'Monitor system performance and implement alerting',
            'Ensure high availability and disaster recovery',
            'Automate deployment and scaling processes'
        ],
        requirements: [
            '3+ years of DevOps/Cloud engineering experience',
            'Strong experience with AWS or Azure cloud platforms',
            'Proficiency in Kubernetes and Docker',
            'Experience with Infrastructure as Code (Terraform, Ansible)',
            'Knowledge of CI/CD tools and practices',
            'Scripting skills (Bash, Python, or similar)',
            'Understanding of networking, security, and compliance'
        ],
        niceToHave: [
            'AWS/Azure certifications',
            'Experience with service mesh (Istio, Linkerd)',
            'Knowledge of GitOps practices (ArgoCD, Flux)',
            'Familiarity with observability tools (Prometheus, Grafana, ELK)'
        ]
    },
    {
        id: 'cloud-secops',
        title: 'Cloud Engineer - SecOps',
        department: 'Engineering',
        location: 'Abu Dhabi / Remote',
        type: 'Full-time',
        description: 'We\'re seeking a SecOps Engineer to ensure the security and compliance of our cloud infrastructure.',
        responsibilities: [
            'Implement security best practices for cloud infrastructure',
            'Conduct security audits and vulnerability assessments',
            'Manage identity and access management (IAM) policies',
            'Implement security monitoring and incident response',
            'Ensure compliance with insurance industry regulations',
            'Automate security scanning and remediation',
            'Develop and maintain security documentation'
        ],
        requirements: [
            '3+ years of security operations experience',
            'Strong knowledge of cloud security (AWS/Azure)',
            'Experience with security tools (SIEM, IDS/IPS, WAF)',
            'Understanding of compliance frameworks (ISO 27001, SOC 2)',
            'Knowledge of container security and Kubernetes',
            'Experience with security automation and scripting',
            'Familiarity with penetration testing and vulnerability management'
        ],
        niceToHave: [
            'Security certifications (CISSP, CEH, AWS Security)',
            'Experience with insurance regulatory compliance',
            'Knowledge of zero-trust architecture',
            'Familiarity with SAST/DAST tools'
        ]
    },
    {
        id: 'scrum-master',
        title: 'Scrum Master',
        department: 'Product',
        location: 'Abu Dhabi / Hybrid',
        type: 'Full-time',
        description: 'We\'re looking for an experienced Scrum Master to facilitate agile practices and drive continuous improvement.',
        responsibilities: [
            'Facilitate Scrum ceremonies (daily standups, sprint planning, retrospectives)',
            'Remove impediments and blockers for the development team',
            'Coach team members on Agile principles and practices',
            'Track and communicate team velocity and sprint progress',
            'Foster collaboration between cross-functional teams',
            'Identify and implement process improvements',
            'Maintain and update project management tools (JIRA, Confluence)'
        ],
        requirements: [
            '3+ years of Scrum Master experience',
            'Certified Scrum Master (CSM) or equivalent certification',
            'Strong understanding of Agile methodologies',
            'Experience with JIRA, Confluence, or similar tools',
            'Excellent facilitation and communication skills',
            'Ability to resolve conflicts and build consensus',
            'Experience working with distributed teams'
        ],
        niceToHave: [
            'Advanced Scrum certifications (A-CSM, CSP)',
            'Experience in insurance or fintech industry',
            'Knowledge of SAFe or other scaling frameworks',
            'Technical background or understanding'
        ]
    },
    {
        id: 'project-manager',
        title: 'Project Manager',
        department: 'Product',
        location: 'Abu Dhabi / Hybrid',
        type: 'Full-time',
        description: 'Join our team as a Project Manager to lead complex insurance platform implementation projects.',
        responsibilities: [
            'Plan, execute, and deliver software implementation projects',
            'Define project scope, goals, and deliverables',
            'Manage project timelines, budgets, and resources',
            'Coordinate with stakeholders and manage expectations',
            'Identify and mitigate project risks',
            'Track project progress and report to leadership',
            'Ensure successful project delivery and customer satisfaction'
        ],
        requirements: [
            '5+ years of project management experience',
            'PMP or PRINCE2 certification preferred',
            'Experience managing software implementation projects',
            'Strong understanding of project management methodologies',
            'Excellent stakeholder management skills',
            'Proficiency in project management tools (MS Project, Smartsheet)',
            'Strong analytical and problem-solving abilities'
        ],
        niceToHave: [
            'Experience in insurance industry',
            'Knowledge of Agile project management',
            'Familiarity with change management practices',
            'Experience with enterprise software implementations'
        ]
    },
    {
        id: 'product-manager',
        title: 'Product Manager',
        department: 'Product',
        location: 'Abu Dhabi / Hybrid',
        type: 'Full-time',
        description: 'We\'re seeking a Product Manager to drive the vision and roadmap for our insurance platform products.',
        responsibilities: [
            'Define product vision, strategy, and roadmap',
            'Gather and prioritize product requirements',
            'Work with engineering teams to deliver features',
            'Conduct market research and competitive analysis',
            'Define and track product metrics and KPIs',
            'Collaborate with customers to understand their needs',
            'Make data-driven product decisions'
        ],
        requirements: [
            '5+ years of product management experience',
            'Strong understanding of insurance domain',
            'Experience with product roadmap and prioritization',
            'Data-driven decision-making skills',
            'Excellent communication and presentation abilities',
            'Experience with product analytics tools',
            'Technical background or strong technical aptitude'
        ],
        niceToHave: [
            'MBA or relevant advanced degree',
            'Experience with B2B SaaS products',
            'Knowledge of insurance regulations',
            'Familiarity with UX/UI design principles'
        ]
    },
    {
        id: 'ux-ui-designer',
        title: 'UX/UI Designer',
        department: 'Design',
        location: 'Abu Dhabi / Remote',
        type: 'Full-time',
        description: 'We\'re looking for a talented UX/UI Designer to create intuitive and beautiful user experiences for our insurance platform.',
        responsibilities: [
            'Design user interfaces for web and mobile applications',
            'Create wireframes, mockups, and interactive prototypes',
            'Conduct user research and usability testing',
            'Develop and maintain design systems and component libraries',
            'Collaborate with product managers and developers',
            'Ensure consistency across all digital touchpoints',
            'Present design concepts and rationale to stakeholders'
        ],
        requirements: [
            '3+ years of UX/UI design experience',
            'Expert proficiency in Figma, Sketch, or Adobe XD',
            'Strong portfolio demonstrating UX/UI design skills',
            'Understanding of user-centered design principles',
            'Experience with responsive and mobile-first design',
            'Knowledge of accessibility standards (WCAG)',
            'Excellent visual design and typography skills'
        ],
        niceToHave: [
            'Experience in insurance or fintech industry',
            'Knowledge of front-end development (HTML, CSS)',
            'Familiarity with design systems (Material Design, Ant Design)',
            'Experience with motion design and micro-interactions'
        ]
    },
    {
        id: 'product-designer',
        title: 'Product Designer',
        department: 'Design',
        location: 'Abu Dhabi / Remote',
        type: 'Full-time',
        description: 'Join our team as a Product Designer to shape the end-to-end experience of our insurance platform products.',
        responsibilities: [
            'Lead product design from concept to launch',
            'Conduct user research and translate insights into design solutions',
            'Create user flows, journey maps, and information architecture',
            'Design high-fidelity mockups and interactive prototypes',
            'Collaborate closely with product and engineering teams',
            'Validate designs through user testing and iteration',
            'Contribute to design strategy and product vision'
        ],
        requirements: [
            '4+ years of product design experience',
            'Strong portfolio showcasing end-to-end product design',
            'Proficiency in design tools (Figma, Sketch, Prototyping tools)',
            'Experience with user research methodologies',
            'Understanding of agile development processes',
            'Excellent communication and presentation skills',
            'Ability to balance user needs with business goals'
        ],
        niceToHave: [
            'Experience designing complex B2B SaaS products',
            'Knowledge of insurance workflows and processes',
            'Familiarity with service design principles',
            'Experience with design thinking workshops'
        ]
    },
    {
        id: 'ux-researcher',
        title: 'UX Researcher',
        department: 'Design',
        location: 'Abu Dhabi / Hybrid',
        type: 'Full-time',
        description: 'We\'re seeking a UX Researcher to uncover user insights and inform product decisions through rigorous research.',
        responsibilities: [
            'Plan and conduct qualitative and quantitative user research',
            'Perform usability testing and user interviews',
            'Analyze research data and synthesize findings',
            'Create user personas, journey maps, and research reports',
            'Present insights and recommendations to stakeholders',
            'Collaborate with designers and product managers',
            'Build and maintain research repositories'
        ],
        requirements: [
            '3+ years of UX research experience',
            'Strong knowledge of research methodologies (interviews, surveys, usability testing)',
            'Experience with research tools (UserTesting, Optimal Workshop, etc.)',
            'Excellent analytical and synthesis skills',
            'Ability to communicate research findings effectively',
            'Experience working in agile environments',
            'Strong stakeholder management skills'
        ],
        niceToHave: [
            'Background in psychology, HCI, or related field',
            'Experience with quantitative analysis and statistics',
            'Knowledge of insurance industry and user needs',
            'Familiarity with analytics tools (Google Analytics, Mixpanel)'
        ]
    },
    {
        id: 'technical-writer',
        title: 'Technical Writer',
        department: 'Product',
        location: 'Abu Dhabi / Remote',
        type: 'Full-time',
        description: 'Join our team as a Technical Writer to create clear, comprehensive documentation for our insurance platform.',
        responsibilities: [
            'Write and maintain product documentation and user guides',
            'Create API documentation and developer guides',
            'Develop training materials and video tutorials',
            'Collaborate with engineers and product managers',
            'Ensure documentation accuracy and consistency',
            'Manage documentation versioning and updates',
            'Improve documentation based on user feedback'
        ],
        requirements: [
            '3+ years of technical writing experience',
            'Excellent writing and editing skills',
            'Ability to understand and explain complex technical concepts',
            'Experience with documentation tools (Confluence, GitBook, etc.)',
            'Knowledge of Markdown and version control (Git)',
            'Strong attention to detail and organization',
            'Ability to work independently and meet deadlines'
        ],
        niceToHave: [
            'Experience documenting APIs and SDKs',
            'Knowledge of insurance domain and terminology',
            'Familiarity with video editing and screen recording tools',
            'Experience with docs-as-code workflows'
        ]
    },
    {
        id: 'insurance-consultant',
        title: 'Insurance Consultant',
        department: 'Insurance Domain',
        location: 'Abu Dhabi / Hybrid',
        type: 'Full-time',
        description: 'We\'re seeking an experienced Insurance Consultant to provide domain expertise and guide product development for our insurance platform.',
        responsibilities: [
            'Provide insurance domain expertise across all product lines',
            'Advise on insurance workflows, regulations, and best practices',
            'Collaborate with product and engineering teams on requirements',
            'Review and validate insurance-related features and processes',
            'Conduct training sessions for internal teams',
            'Support customer implementations and integrations',
            'Stay current with insurance industry trends and regulations'
        ],
        requirements: [
            '7+ years of experience in insurance industry',
            'Deep knowledge of insurance operations (policy, claims, underwriting)',
            'Experience with multiple insurance lines (Life, Health, P&C)',
            'Understanding of insurance regulations and compliance',
            'Strong analytical and problem-solving skills',
            'Excellent communication and presentation abilities',
            'Experience working with technology teams'
        ],
        niceToHave: [
            'Insurance certifications (CPCU, AINS, CLU, ChFC)',
            'Experience with insurance core systems',
            'Knowledge of insurtech and digital transformation',
            'Consulting or advisory experience'
        ]
    },
    {
        id: 'underwriting-expert',
        title: 'Underwriting Expert',
        department: 'Insurance Domain',
        location: 'Abu Dhabi / Hybrid',
        type: 'Full-time',
        description: 'Join our team as an Underwriting Expert to shape underwriting workflows and risk assessment capabilities in our platform.',
        responsibilities: [
            'Define underwriting rules and risk assessment criteria',
            'Design automated underwriting workflows and decision engines',
            'Develop underwriting guidelines and rating algorithms',
            'Review and optimize underwriting processes',
            'Collaborate on integration with third-party data sources',
            'Train teams on underwriting principles and practices',
            'Ensure compliance with underwriting regulations'
        ],
        requirements: [
            '5+ years of underwriting experience',
            'Strong knowledge of risk assessment and rating',
            'Experience with underwriting guidelines and rules engines',
            'Understanding of medical underwriting (for Life/Health)',
            'Knowledge of commercial underwriting (for P&C)',
            'Analytical mindset with attention to detail',
            'Excellent documentation and communication skills'
        ],
        niceToHave: [
            'CPCU, AU, or similar underwriting certifications',
            'Experience with automated underwriting systems',
            'Knowledge of predictive modeling and analytics',
            'Familiarity with reinsurance and treaty structures'
        ]
    },
    {
        id: 'actuary',
        title: 'Actuary',
        department: 'Insurance Domain',
        location: 'Abu Dhabi / Hybrid',
        type: 'Full-time',
        description: 'We\'re looking for an Actuary to develop pricing models, reserving methodologies, and analytics capabilities for our platform.',
        responsibilities: [
            'Develop and implement pricing and rating models',
            'Design reserving methodologies and loss projections',
            'Build actuarial analytics and reporting capabilities',
            'Perform experience studies and trend analysis',
            'Ensure actuarial compliance and regulatory reporting',
            'Collaborate with product teams on feature development',
            'Provide actuarial expertise and guidance'
        ],
        requirements: [
            '5+ years of actuarial experience',
            'Progress toward actuarial credentials (ASA, ACAS, or equivalent)',
            'Strong knowledge of pricing, reserving, and valuation',
            'Proficiency in actuarial software and statistical tools',
            'Experience with SQL, R, Python, or similar',
            'Understanding of insurance regulations (IFRS 17, Solvency II)',
            'Excellent analytical and problem-solving skills'
        ],
        niceToHave: [
            'FSA, FCAS, or equivalent fellowship',
            'Experience with predictive modeling and machine learning',
            'Knowledge of catastrophe modeling',
            'Familiarity with cloud-based analytics platforms'
        ]
    },
    {
        id: 'claims-specialist',
        title: 'Claims Specialist',
        department: 'Insurance Domain',
        location: 'Abu Dhabi / Hybrid',
        type: 'Full-time',
        description: 'Join our team as a Claims Specialist to design efficient claims workflows and fraud detection capabilities.',
        responsibilities: [
            'Design and optimize claims processing workflows',
            'Develop claims adjudication rules and guidelines',
            'Implement fraud detection and prevention strategies',
            'Define claims settlement and payment processes',
            'Collaborate on claims automation and AI capabilities',
            'Ensure compliance with claims regulations',
            'Support customer implementations and training'
        ],
        requirements: [
            '5+ years of claims management experience',
            'Strong knowledge of claims processes and best practices',
            'Experience with claims systems and workflows',
            'Understanding of fraud detection techniques',
            'Knowledge of claims regulations and compliance',
            'Excellent analytical and problem-solving skills',
            'Strong communication and stakeholder management'
        ],
        niceToHave: [
            'Claims certifications (AIC, AINS, or similar)',
            'Experience with claims automation and AI',
            'Knowledge of medical claims and HL7/FHIR',
            'Familiarity with subrogation and recovery processes'
        ]
    },
    {
        id: 'compliance-expert',
        title: 'Compliance Expert',
        department: 'Insurance Domain',
        location: 'Abu Dhabi / Hybrid',
        type: 'Full-time',
        description: 'We\'re seeking a Compliance Expert to ensure our platform meets all insurance regulatory requirements globally.',
        responsibilities: [
            'Monitor and interpret insurance regulations and compliance requirements',
            'Ensure platform compliance with global insurance regulations',
            'Develop compliance frameworks and control procedures',
            'Conduct compliance audits and risk assessments',
            'Collaborate with legal and product teams on regulatory changes',
            'Prepare regulatory reports and submissions',
            'Train teams on compliance requirements and best practices'
        ],
        requirements: [
            '5+ years of insurance compliance experience',
            'Deep knowledge of insurance regulations (NAIC, Solvency II, IFRS 17)',
            'Experience with regulatory reporting and submissions',
            'Understanding of data privacy regulations (GDPR, HIPAA)',
            'Strong analytical and risk assessment skills',
            'Excellent documentation and communication abilities',
            'Experience working with regulators and auditors'
        ],
        niceToHave: [
            'Legal or compliance certifications',
            'Experience in multiple jurisdictions (UAE, US, EU)',
            'Knowledge of AML/KYC regulations',
            'Familiarity with GRC (Governance, Risk, Compliance) tools'
        ]
    }
]

export default function JobsPage() {
    return (
        <div className="animate-fade-in">
            {/* Hero Section */}
            <section className="min-h-[40vh] flex items-center justify-center relative overflow-hidden pt-4 md:pt-6 bg-gradient-to-br from-success/5 to-transparent">
                <div className="max-w-6xl px-6 lg:px-8 text-center relative z-10 py-16">
                    <Link href="/company/careers" className="inline-flex items-center gap-2 text-success hover:underline mb-4">
                        <HiArrowLeft /> Back to Careers
                    </Link>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent leading-tight">
                        Open Positions
                    </h1>

                    <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-4 max-w-3xl mx-auto">
                        {jobs.length} positions available across Engineering, Product, and Operations
                    </p>
                </div>
            </section>

            {/* Job Listings */}
            <section className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20">
                {/* Engineering Section */}
                <div className="mb-16">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="w-12 h-12 bg-success/10 rounded-xl flex items-center justify-center">
                            <HiCodeBracket className="w-6 h-6 text-success" />
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Engineering</h2>
                            <p className="text-gray-600 dark:text-gray-300">Build scalable systems and innovative solutions</p>
                        </div>
                    </div>
                    <div className="space-y-8">
                        {jobs.filter(job => job.department === 'Engineering').map((job) => (
                            <div key={job.id} className="bg-white dark:bg-dark-light p-8 lg:p-10 rounded-2xl border border-gray-200 dark:border-white/10">
                                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                                    <div className="flex-1">
                                        <h3 className="text-2xl lg:text-3xl font-bold mb-3 text-gray-900 dark:text-white">
                                            {job.title}
                                        </h3>
                                        <div className="flex flex-wrap gap-4 text-gray-600 dark:text-gray-300">
                                            <span className="flex items-center gap-2">
                                                <HiMapPin className="w-5 h-5" />
                                                {job.location}
                                            </span>
                                            <span className="flex items-center gap-2">
                                                <HiClock className="w-5 h-5" />
                                                {job.type}
                                            </span>
                                        </div>
                                    </div>
                                    <Link
                                        href="/contact"
                                        className="mt-4 lg:mt-0 px-8 py-3 bg-success hover:bg-success/90 text-white rounded-lg font-semibold transition-all shadow-lg whitespace-nowrap"
                                    >
                                        Apply Now
                                    </Link>
                                </div>

                                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                                    {job.description}
                                </p>

                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                    <div>
                                        <h4 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Responsibilities</h4>
                                        <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                                            {job.responsibilities.map((item, idx) => (
                                                <li key={idx} className="flex items-start">
                                                    <span className="text-success mr-2 mt-1">•</span>
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div>
                                        <h4 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Requirements</h4>
                                        <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                                            {job.requirements.map((item, idx) => (
                                                <li key={idx} className="flex items-start">
                                                    <span className="text-success mr-2 mt-1">•</span>
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>

                                        {job.niceToHave && job.niceToHave.length > 0 && (
                                            <>
                                                <h4 className="text-xl font-bold mb-4 mt-6 text-gray-900 dark:text-white">Nice to Have</h4>
                                                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                                                    {job.niceToHave.map((item, idx) => (
                                                        <li key={idx} className="flex items-start">
                                                            <span className="text-gray-400 mr-2 mt-1">○</span>
                                                            <span>{item}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Product & Design Section */}
                <div className="mb-16">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                            <HiPresentationChartLine className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Product & Design</h2>
                            <p className="text-gray-600 dark:text-gray-300">Shape user experiences and product strategy</p>
                        </div>
                    </div>
                    <div className="space-y-8">
                        {jobs.filter(job => job.department === 'Product' || job.department === 'Design').map((job) => (
                            <div key={job.id} className="bg-white dark:bg-dark-light p-8 lg:p-10 rounded-2xl border border-gray-200 dark:border-white/10">
                                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                                    <div className="flex-1">
                                        <h3 className="text-2xl lg:text-3xl font-bold mb-3 text-gray-900 dark:text-white">
                                            {job.title}
                                        </h3>
                                        <div className="flex flex-wrap gap-4 text-gray-600 dark:text-gray-300">
                                            <span className="flex items-center gap-2">
                                                <HiMapPin className="w-5 h-5" />
                                                {job.location}
                                            </span>
                                            <span className="flex items-center gap-2">
                                                <HiClock className="w-5 h-5" />
                                                {job.type}
                                            </span>
                                        </div>
                                    </div>
                                    <Link
                                        href="/contact"
                                        className="mt-4 lg:mt-0 px-8 py-3 bg-primary hover:bg-primary/90 text-white rounded-lg font-semibold transition-all shadow-lg whitespace-nowrap"
                                    >
                                        Apply Now
                                    </Link>
                                </div>

                                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                                    {job.description}
                                </p>

                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                    <div>
                                        <h4 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Responsibilities</h4>
                                        <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                                            {job.responsibilities.map((item, idx) => (
                                                <li key={idx} className="flex items-start">
                                                    <span className="text-primary mr-2 mt-1">•</span>
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div>
                                        <h4 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Requirements</h4>
                                        <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                                            {job.requirements.map((item, idx) => (
                                                <li key={idx} className="flex items-start">
                                                    <span className="text-primary mr-2 mt-1">•</span>
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>

                                        {job.niceToHave && job.niceToHave.length > 0 && (
                                            <>
                                                <h4 className="text-xl font-bold mb-4 mt-6 text-gray-900 dark:text-white">Nice to Have</h4>
                                                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                                                    {job.niceToHave.map((item, idx) => (
                                                        <li key={idx} className="flex items-start">
                                                            <span className="text-gray-400 mr-2 mt-1">○</span>
                                                            <span>{item}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Insurance Domain Section */}
                <div className="mb-16">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="w-12 h-12 bg-info/10 rounded-xl flex items-center justify-center">
                            <HiBriefcase className="w-6 h-6 text-info" />
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Insurance Domain</h2>
                            <p className="text-gray-600 dark:text-gray-300">Apply insurance expertise to transform the industry</p>
                        </div>
                    </div>
                    <div className="space-y-8">
                        {jobs.filter(job => job.department === 'Insurance Domain').map((job) => (
                            <div key={job.id} className="bg-white dark:bg-dark-light p-8 lg:p-10 rounded-2xl border border-gray-200 dark:border-white/10">
                                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                                    <div className="flex-1">
                                        <h3 className="text-2xl lg:text-3xl font-bold mb-3 text-gray-900 dark:text-white">
                                            {job.title}
                                        </h3>
                                        <div className="flex flex-wrap gap-4 text-gray-600 dark:text-gray-300">
                                            <span className="flex items-center gap-2">
                                                <HiMapPin className="w-5 h-5" />
                                                {job.location}
                                            </span>
                                            <span className="flex items-center gap-2">
                                                <HiClock className="w-5 h-5" />
                                                {job.type}
                                            </span>
                                        </div>
                                    </div>
                                    <Link
                                        href="/contact"
                                        className="mt-4 lg:mt-0 px-8 py-3 bg-info hover:bg-info/90 text-white rounded-lg font-semibold transition-all shadow-lg whitespace-nowrap"
                                    >
                                        Apply Now
                                    </Link>
                                </div>

                                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                                    {job.description}
                                </p>

                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                    <div>
                                        <h4 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Responsibilities</h4>
                                        <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                                            {job.responsibilities.map((item, idx) => (
                                                <li key={idx} className="flex items-start">
                                                    <span className="text-info mr-2 mt-1">•</span>
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div>
                                        <h4 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Requirements</h4>
                                        <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                                            {job.requirements.map((item, idx) => (
                                                <li key={idx} className="flex items-start">
                                                    <span className="text-info mr-2 mt-1">•</span>
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>

                                        {job.niceToHave && job.niceToHave.length > 0 && (
                                            <>
                                                <h4 className="text-xl font-bold mb-4 mt-6 text-gray-900 dark:text-white">Nice to Have</h4>
                                                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                                                    {job.niceToHave.map((item, idx) => (
                                                        <li key={idx} className="flex items-start">
                                                            <span className="text-gray-400 mr-2 mt-1">○</span>
                                                            <span>{item}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20">
                <div className="bg-gradient-to-r from-success to-success/80 rounded-2xl p-12 text-center text-white">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Don't See the Right Role?
                    </h2>
                    <p className="text-xl mb-4 text-white/90 max-w-2xl mx-auto">
                        We're always looking for talented people. Send us your resume and let us know what you're passionate about.
                    </p>
                    <p className="text-lg mb-8 text-white/90">
                        Share your resume with our talent acquisition team at{' '}
                        <a href="mailto:careers@nizsoft.com" className="font-bold underline hover:text-white">
                            careers@nizsoft.com
                        </a>
                    </p>
                    <Link
                        href="/contact"
                        className="inline-block px-8 py-4 bg-white text-success hover:bg-gray-100 rounded-lg font-semibold transition-all shadow-lg"
                    >
                        Contact Us
                    </Link>
                </div>
            </section>
        </div>
    )
}
