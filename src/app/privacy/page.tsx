import type { Metadata } from 'next';
import PageTransition from '@/components/PageTransition';

export const metadata: Metadata = {
  title: 'Privacy Policy — Qualisense',
  description:
    'How Qualisense handles personal data relating to website visitors, customer account users and research respondents.',
};

const SECTIONS = [
  {
    title: '1. Who we are and scope',
    content: (
      <>
        <p>
          Qualisense is a qualitative-research software platform operated by Graphiti Research Technologies Private Limited, with its registered office at 814, Galleria Office Tower, DLF Phase 4, Gurgaon, Haryana, India, 122009 ("Qualisense", "we", "us" or "our"). This Policy applies to quali-sense.ai, the Qualisense platform, related applications, sales and support interactions, and other services that link to this Policy.
        </p>
        <p>
          This Policy does not govern the independent privacy practices of our Customers, respondent-recruitment providers, research agencies or other third parties. Their own notices may also apply.
        </p>
      </>
    ),
  },
  {
    title: '2. Our roles',
    content: (
      <>
        <p>Qualisense may have different legal roles depending on the data and context:</p>
        <ul>
          <li><strong>Controller / Data Fiduciary:</strong> We determine why and how we process website, account, billing, sales, security and support data for our own business purposes.</li>
          <li><strong>Processor / Data Processor / Service Provider:</strong> For Customer Content, including Respondent recordings, transcripts and research data, the Customer generally determines the research purpose and means. We process that data on the Customer's documented instructions under our agreement and DPA.</li>
          <li><strong>Independent third parties:</strong> Fieldwork, respondent-recruitment, payment, integration and other providers may act under their own privacy notices where they determine their own purposes.</li>
        </ul>
        <p>
          Research Respondents should normally direct requests about a study to the organisation that invited them or conducted the research. We will assist our Customer as required by contract and applicable law.
        </p>
      </>
    ),
  },
  {
    title: '3. Personal data we collect',
    content: (
      <>
        <h3 className="privacy-subheading">3.1 Website, sales and account information</h3>
        <ul>
          <li>Name, business email address, telephone number, job title, company and country</li>
          <li>Account credentials, authentication records, workspace membership and permissions</li>
          <li>Sales enquiries, demo requests, contracts, communications and support correspondence</li>
          <li>Billing contact details, transaction information and subscription records</li>
          <li>Preferences for communications, events, product updates and marketing</li>
        </ul>
        <h3 className="privacy-subheading">3.2 Technical and usage information</h3>
        <ul>
          <li>IP address, browser, device, operating system, language, approximate location and referral source</li>
          <li>Login times, pages viewed, features used, actions taken, error logs and performance data</li>
          <li>Security events, audit logs and information used to detect misuse</li>
          <li>Cookie, local-storage and similar technology identifiers</li>
        </ul>
        <h3 className="privacy-subheading">3.3 Customer Content and research data</h3>
        <ul>
          <li>Audio and video recordings, voice, image and spoken responses</li>
          <li>Transcripts, translations, discussion guides, interview questions and notes</li>
          <li>Respondent identifiers, demographic information, segmentation variables and incentive details where supplied</li>
          <li>Opinions, behaviours, preferences, experiences and other information disclosed during research</li>
          <li>Analysis matrices, reports, summaries, themes, chat prompts and generated outputs</li>
          <li>Project metadata, workspace selections and cross-project query history</li>
        </ul>
        <p>
          Customer Content may contain sensitive or special-category information depending on the study. Customers must minimise such collection and ensure that appropriate notices, permissions and safeguards are in place.
        </p>
        <h3 className="privacy-subheading">3.4 Live interviewing data</h3>
        <p>
          When a Customer uses the live interviewing agent, the Service may process Respondent audio, text responses, language, interaction timing and contextual signals needed to conduct and transcribe the interview. The Service is not intended to identify individuals using biometric templates, and Qualisense does not use voice recordings for biometric identification.
        </p>
      </>
    ),
  },
  {
    title: '4. How we obtain personal data',
    content: (
      <ul>
        <li>Directly from website visitors, Customers, Users and Respondents</li>
        <li>From Customer uploads, integrations and instructions</li>
        <li>Automatically through the website and platform</li>
        <li>From authorised research agencies, respondent-recruitment or fieldwork partners</li>
        <li>From payment, communications, identity, security and analytics providers</li>
        <li>From publicly available business sources where permitted</li>
      </ul>
    ),
  },
  {
    title: '5. How and why we use personal data',
    content: (
      <ul>
        <li><strong>Provide the Service:</strong> Create accounts, conduct configured interviews, transcribe and translate recordings, generate matrices and reports, enable project and cross-project chat, provide support and fulfil contracts.</li>
        <li><strong>Secure the Service:</strong> Authenticate Users, manage permissions, detect abuse, investigate incidents, maintain logs and protect systems, Customers and Respondents.</li>
        <li><strong>Operate the business:</strong> Manage billing, contracts, suppliers, records, audits, corporate transactions and legal obligations.</li>
        <li><strong>Improve Qualisense:</strong> Diagnose errors, measure feature performance and improve workflows using permitted service data. Customer Content is handled as stated in the agreement and DPA.</li>
        <li><strong>Communicate:</strong> Respond to enquiries, provide service notices, send requested information and, where permitted, send marketing communications.</li>
        <li><strong>Comply and protect:</strong> Respond to lawful requests, enforce agreements, establish or defend legal claims, and prevent fraud or harm.</li>
      </ul>
    ),
  },
  {
    title: '6. Legal bases and permitted grounds',
    content: (
      <>
        <p>Depending on the jurisdiction and context, we rely on one or more of the following:</p>
        <ul>
          <li>Performance of a contract or steps requested before entering a contract</li>
          <li>Legitimate interests in operating, securing, supporting and improving a business service, balanced against individual rights</li>
          <li>Consent, including for optional marketing or non-essential cookies where required</li>
          <li>Compliance with legal obligations and lawful requests</li>
          <li>Establishment, exercise or defence of legal claims</li>
          <li>Other permitted uses or lawful grounds available under applicable data-protection law</li>
        </ul>
        <p>
          For Customer Content, our Customer is responsible for identifying and documenting the lawful basis for the underlying research. We process the data under the Customer's instructions and the DPA.
        </p>
      </>
    ),
  },
  {
    title: '7. AI systems and use of Customer Content',
    content: (
      <>
        <p>
          Qualisense uses automated systems and may use approved AI and machine-learning providers to deliver transcription, translation, interviewing, analysis, reporting and chat features. Depending on the feature, Customer Content may be transmitted to these providers under contractual and security controls.
        </p>
        <p>
          Qualisense does not use Customer Content to train general-purpose AI models unless the Customer expressly opts in or the parties agree in writing. We may use aggregated and de-identified telemetry that does not identify a Customer, User or Respondent to operate, secure and improve the Service.
        </p>
        <p>
          The Service is intended to assist human research and business teams. It is not intended to make solely automated decisions that produce legal or similarly significant effects on individuals. Customers must independently review Outputs and must not use them as the sole basis for high-impact decisions.
        </p>
      </>
    ),
  },
  {
    title: '8. How we disclose personal data',
    content: (
      <>
        <p>We may disclose personal data to:</p>
        <ul>
          <li>Authorised Customer administrators and Users within the relevant workspace</li>
          <li>Hosting, storage, security, communications, AI, transcription, translation, analytics, support and payment subprocessors</li>
          <li>Professional advisers, auditors, insurers, banks and corporate service providers</li>
          <li>Respondent-recruitment and fieldwork providers where requested or authorised by the Customer</li>
          <li>Government authorities, courts or other parties where required by law or necessary to protect rights and safety</li>
          <li>An acquirer, investor or successor in connection with a merger, financing, reorganisation or sale, subject to appropriate confidentiality</li>
          <li>Other parties with the individual's or Customer's direction or consent</li>
        </ul>
        <p>We do not disclose Customer Content to other customers.</p>
      </>
    ),
  },
  {
    title: '9. Sale and targeted advertising',
    content: (
      <>
        <p>
          Qualisense does not sell personal data or personal information. Qualisense does not share personal information for cross-context behavioural advertising. If this changes, we will update this Policy and provide legally required opt-out mechanisms.
        </p>
        <p>
          Our website may use analytics and marketing technologies only as described in our cookie settings. Non-essential technologies should be activated only after consent where required.
        </p>
      </>
    ),
  },
  {
    title: '10. International transfers',
    content: (
      <>
        <p>
          Qualisense, its Customers and service providers may operate in different countries. Personal data may therefore be processed outside the country where it was collected. Where required, we use recognised safeguards such as adequacy decisions, standard contractual clauses, the UK International Data Transfer Agreement or Addendum, contractual data-protection terms and supplementary security measures.
        </p>
        <p>
          Customers should review the DPA and subprocessor list for information relevant to Customer Content and transfer locations.
        </p>
      </>
    ),
  },
  {
    title: '11. Data retention and deletion',
    content: (
      <>
        <p>We retain personal data only for as long as reasonably necessary for the purposes described in this Policy, including contractual, security, accounting, dispute and legal requirements.</p>
        <ul>
          <li><strong>Account and contract records:</strong> for the customer relationship plus 3 years.</li>
          <li><strong>Website enquiries and sales records:</strong> for 3 years after the last meaningful interaction, unless a longer period is required.</li>
          <li><strong>Security and audit logs:</strong> generally for 3 years, subject to incident and legal needs.</li>
          <li><strong>Customer Content:</strong> for the subscription term and the deletion/export period in the Order Form or DPA.</li>
          <li><strong>Marketing records:</strong> until opt-out, plus a suppression record so we can respect the request.</li>
        </ul>
        <p>We may retain de-identified or aggregated information that cannot reasonably be linked to an individual or Customer.</p>
      </>
    ),
  },
  {
    title: '12. Security',
    content: (
      <>
        <p>
          We use technical and organisational measures designed to protect personal data against accidental or unlawful destruction, loss, alteration, unauthorised disclosure or access. Measures may include access controls, authentication, encryption where appropriate, logging, backups, vulnerability management, personnel confidentiality and vendor oversight.
        </p>
        <p>
          No method of transmission or storage is completely secure. Customers are responsible for configuring permissions, limiting uploads to necessary data, protecting credentials and handling exported data securely.
        </p>
        <p>
          If we confirm a personal-data breach affecting Customer Content, we will notify the affected Customer without undue delay as required by the DPA and applicable law. Customer remains responsible for notices to Respondents and authorities where Customer is the responsible controller or Data Fiduciary.
        </p>
      </>
    ),
  },
  {
    title: '13. Cookies and similar technologies',
    content: (
      <>
        <p>The website and platform may use:</p>
        <ul>
          <li><strong>Strictly necessary technologies</strong> for login, security, load balancing and core functions</li>
          <li><strong>Preference technologies</strong> that remember settings</li>
          <li><strong>Analytics technologies</strong> that help us understand usage and performance</li>
          <li><strong>Marketing technologies</strong>, if used, to measure campaigns or personalise outreach</li>
        </ul>
        <p>
          A cookie banner or settings tool identifies current cookies, providers, purposes and durations and allows Users to manage non-essential choices. Browser controls may also limit cookies, although some functions may be affected.
        </p>
      </>
    ),
  },
  {
    title: '14. Your privacy rights',
    content: (
      <>
        <p>Depending on location and applicable law, individuals may have rights to:</p>
        <ul>
          <li>Receive information about processing and obtain access to personal data</li>
          <li>Correct inaccurate or incomplete data</li>
          <li>Request deletion or erasure</li>
          <li>Withdraw consent, without affecting earlier lawful processing</li>
          <li>Object to or restrict certain processing</li>
          <li>Receive portable data where applicable</li>
          <li>Opt out of certain sale, sharing, targeted advertising or profiling where applicable</li>
          <li>Limit use or disclosure of certain sensitive personal information where applicable</li>
          <li>Nominate another person or use an authorised agent where recognised by law</li>
          <li>Receive non-discriminatory treatment for exercising privacy rights</li>
          <li>Complain to a data-protection or privacy authority</li>
        </ul>
        <p>
          To exercise rights regarding Qualisense account, website or marketing data, contact{' '}
          <a href="mailto:contact@quali-sense.ai" className="privacy-link">contact@quali-sense.ai</a>.
          We may verify identity and authority before acting. We will respond within the period required by applicable law.
        </p>
        <p>
          For personal data in a Customer's research project, contact the Customer or research sponsor identified in the study notice. If you contact us, we may refer the request to that Customer and assist them as required.
        </p>
      </>
    ),
  },
  {
    title: '15. Additional information for California residents',
    content: (
      <>
        <p>
          If the California Consumer Privacy Act, as amended, applies, California residents may have rights to know, access, correct and delete personal information; opt out of sale or sharing; limit certain uses of sensitive personal information; and receive non-discriminatory treatment. Requests may be submitted through{' '}
          <a href="mailto:contact@quali-sense.ai" className="privacy-link">contact@quali-sense.ai</a>.
        </p>
        <p>
          During the preceding 12 months, the categories of personal information we may have collected correspond to the information described in Section 3, including identifiers, customer records, commercial information, internet or electronic activity, audio/visual information, professional information, inferences and sensitive personal information where included in authorised research data. We use and disclose these categories for the purposes and to the recipients described in this Policy.
        </p>
        <p>We do not knowingly sell or share personal information of individuals under 16.</p>
      </>
    ),
  },
  {
    title: '16. Additional information for EEA, UK and Swiss individuals',
    content: (
      <p>
        Individuals in these regions may contact{' '}
        <a href="mailto:contact@quali-sense.ai" className="privacy-link">contact@quali-sense.ai</a>{' '}
        regarding access, correction, erasure, restriction, objection, portability or withdrawal of consent. Where processing is based on legitimate interests, further information about the balancing assessment may be requested. Where data is transferred internationally, information about the relevant safeguards may also be requested, subject to confidentiality restrictions.
      </p>
    ),
  },
  {
    title: '17. Additional information for individuals in India',
    content: (
      <>
        <p>
          Where India's Digital Personal Data Protection framework applies, individuals may have rights to access information about processing, correction, completion, updating and erasure, grievance redressal and nomination, subject to applicable commencement dates, rules and exemptions. Requests and grievances may be sent to{' '}
          <a href="mailto:contact@quali-sense.ai" className="privacy-link">contact@quali-sense.ai</a>.
        </p>
        <p>
          Customers conducting research in India are responsible for providing compliant notice, establishing a lawful ground, enabling withdrawal where applicable, and meeting duties relating to children, security safeguards, breach response and Respondent rights.
        </p>
      </>
    ),
  },
  {
    title: '18. Children and vulnerable participants',
    content: (
      <>
        <p>
          The website and platform are not directed to children under 18. We do not knowingly create platform accounts for children. Customers must not use the Service to interview or process information about children or vulnerable individuals unless the study is lawful, ethically appropriate, covered by required parental or guardian consent, and agreed with Qualisense where additional safeguards are needed.
        </p>
        <p>
          If you believe a child's data has been submitted unlawfully, contact{' '}
          <a href="mailto:contact@quali-sense.ai" className="privacy-link">contact@quali-sense.ai</a>{' '}
          and identify the relevant Customer or study where possible.
        </p>
      </>
    ),
  },
  {
    title: '19. Third-party links and integrations',
    content: (
      <p>
        Our website or Service may link to or integrate with third-party services. Their privacy practices are governed by their own notices, and we are not responsible for independent third-party processing. Customers should review third-party terms before enabling an integration.
      </p>
    ),
  },
  {
    title: '20. Changes to this Policy',
    content: (
      <p>
        We may update this Policy to reflect changes in the Service, law, technology or business operations. We will post the updated version with a revised date and provide additional notice where required or where changes are material. Archived versions may be requested at{' '}
        <a href="mailto:contact@quali-sense.ai" className="privacy-link">contact@quali-sense.ai</a>.
      </p>
    ),
  },
  {
    title: '21. Contact and grievance redressal',
    content: (
      <>
        <p>For privacy questions, requests or complaints, contact:</p>
        <ul>
          <li>Graphiti Research Technologies Pvt. Ltd.</li>
          <li>814 Galleria Office Towers, DLF Phase 4, Gurgaon, Haryana, India, 122009</li>
          <li>Privacy email: <a href="mailto:contact@quali-sense.ai" className="privacy-link">contact@quali-sense.ai</a></li>
          <li>Grievance Officer / Data Protection Contact: Abhishek Chaubey</li>
          <li>Website: <a href="https://graphitirt.com" className="privacy-link" target="_blank" rel="noopener noreferrer">graphitirt.com</a></li>
        </ul>
        <p>
          We will acknowledge and address complaints within the time required by applicable law. Individuals may also contact the competent privacy or data-protection authority in their jurisdiction.
        </p>
      </>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <PageTransition>
      <div className="page-hero" style={{ paddingBottom: 0 }}>
        <div className="container">
          <div className="eyebrow">Legal</div>
          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', marginBottom: 12 }}>
            Privacy Policy
          </h1>
          <p className="lede" style={{ maxWidth: 640 }}>
            How Qualisense collects, uses and protects personal data across our website and platform.
          </p>
          <p style={{ color: 'var(--muted)', fontSize: '.9rem', marginTop: 12 }}>
            Last updated: 16 June 2026
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="privacy-body">
            {SECTIONS.map((section) => (
              <div key={section.title} className="privacy-section">
                <h3 className="privacy-heading">{section.title}</h3>
                <div className="privacy-content">{section.content}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
