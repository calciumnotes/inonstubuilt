const questions = [
  /* ===========================
   DIFFICULTY 1
=========================== */
  {
    id: 1,
    difficulty: 1,
    subject: "Audit",
    chapter: "SA 200",
    question:
      "The primary responsibility for preparation of financial statements lies with:",
    options: ["Auditor", "Management", "Internal Auditor", "Shareholders"],
    answer: 1,
    explanation:
      "Management is responsible for preparing the financial statements. The auditor only expresses an opinion.",
  },
  {
    id: 2,
    difficulty: 1,
    subject: "GST",
    chapter: "Basics",
    question: "GST is levied on:",
    options: ["Supply of goods and services", "Income", "Property", "Salary"],
    answer: 0,
    explanation: "GST is levied on the supply of goods or services or both.",
  },
  {
    id: 3,
    difficulty: 1,
    subject: "Financial Reporting",
    chapter: "Ind AS 16",
    question: "Ind AS 16 primarily deals with:",
    options: [
      "Inventories",
      "Property, Plant and Equipment",
      "Revenue",
      "Income Taxes",
    ],
    answer: 1,
    explanation:
      "Ind AS 16 prescribes accounting for Property, Plant and Equipment.",
  },
  /* ===========================
   DIFFICULTY 2
=========================== */
  {
    id: 4,
    difficulty: 2,
    subject: "Company Law",
    chapter: "Directors",
    question: "Minimum number of directors required in a Public Company is:",
    options: ["1", "2", "3", "5"],
    answer: 2,
    explanation: "Every Public Company must have at least three directors.",
  },
  {
    id: 5,
    difficulty: 2,
    subject: "Direct Tax",
    chapter: "Residential Status",
    question:
      "Residential status under the Income-tax Act is determined separately for:",
    options: [
      "Each Assessment Year",
      "Each Financial Year",
      "Every five years",
      "Lifetime",
    ],
    answer: 1,
    explanation:
      "Residential status is determined separately for every Previous Year (Financial Year).",
  },
  {
    id: 6,
    difficulty: 2,
    subject: "AFM",
    chapter: "Portfolio",
    question: "Diversification mainly helps in reducing:",
    options: [
      "Systematic Risk",
      "Unsystematic Risk",
      "Interest Rate Risk",
      "Market Risk",
    ],
    answer: 1,
    explanation:
      "Diversification reduces unsystematic (company-specific) risk.",
  },
  /* ===========================
   DIFFICULTY 3
=========================== */
  {
    id: 7,
    difficulty: 3,
    subject: "Audit",
    chapter: "SA 315",
    question: "SA 315 requires the auditor to identify and assess:",
    options: [
      "Tax liability",
      "Material Misstatement Risks",
      "Frauds only",
      "Internal Audit Reports",
    ],
    answer: 1,
    explanation:
      "SA 315 deals with identifying and assessing risks of material misstatement.",
  },
  {
    id: 8,
    difficulty: 3,
    subject: "GST",
    chapter: "Time of Supply",
    question: "Time of Supply determines:",
    options: [
      "Tax liability date",
      "Input Tax Credit",
      "Place of Supply",
      "Registration Requirement",
    ],
    answer: 0,
    explanation: "GST liability arises based on the Time of Supply.",
  },
  {
    id: 9,
    difficulty: 3,
    subject: "Financial Reporting",
    chapter: "Ind AS 115",
    question: "Revenue under Ind AS 115 is recognised when:",
    options: [
      "Invoice is raised",
      "Cash is received",
      "Control is transferred",
      "Purchase order is received",
    ],
    answer: 2,
    explanation:
      "Ind AS 115 recognises revenue when control of goods/services transfers.",
  },
  /* ===========================
   DIFFICULTY 4
=========================== */
  {
    id: 10,
    difficulty: 4,
    subject: "AFM",
    chapter: "Capital Budgeting",
    question: "A project with positive NPV should generally be:",
    options: [
      "Rejected",
      "Accepted",
      "Deferred forever",
      "Accepted only if IRR < Cost of Capital",
    ],
    answer: 1,
    explanation: "A positive NPV indicates value creation.",
  },
  {
    id: 11,
    difficulty: 4,
    subject: "Company Law",
    chapter: "Independent Directors",
    question: "An Independent Director should not have:",
    options: [
      "Relevant expertise",
      "Any pecuniary relationship affecting independence",
      "Professional qualifications",
      "Board meeting attendance",
    ],
    answer: 1,
    explanation:
      "Independence is lost if there is a significant pecuniary relationship.",
  },
  {
    id: 12,
    difficulty: 4,
    subject: "Direct Tax",
    chapter: "Capital Gains",
    question: "Indexation benefit is generally associated with:",
    options: [
      "Salary",
      "Business Income",
      "Long-term Capital Assets",
      "House Property Income",
    ],
    answer: 2,
    explanation:
      "Indexation adjusts the cost for inflation for eligible long-term capital assets.",
  },
  /* ===========================
   DIFFICULTY 5
=========================== */
  {
    id: 13,
    difficulty: 5,
    subject: "Audit",
    chapter: "Audit Report",
    question:
      "Management refuses to correct a material but not pervasive misstatement. The auditor should issue:",
    options: [
      "Unmodified Opinion",
      "Qualified Opinion",
      "Disclaimer",
      "Emphasis of Matter",
    ],
    answer: 1,
    explanation:
      "A material but not pervasive misstatement results in a Qualified Opinion.",
  },
  {
    id: 14,
    difficulty: 5,
    subject: "GST",
    chapter: "Input Tax Credit",
    question: "ITC cannot be claimed if:",
    options: [
      "Tax invoice is available",
      "Goods are received",
      "Supplier has not paid tax to Government as required",
      "Return has been filed",
    ],
    answer: 2,
    explanation:
      "ITC is subject to statutory conditions, including tax compliance requirements.",
  },
  {
    id: 15,
    difficulty: 5,
    subject: "IBS",
    chapter: "Integrated",
    question:
      "A company changed depreciation policy without adequate disclosure. Which reporting area is primarily affected?",
    options: [
      "Presentation and Disclosure",
      "Occurrence",
      "Existence",
      "Rights",
    ],
    answer: 0,
    explanation:
      "A change in accounting policy primarily impacts presentation and disclosure.",
  },
  /* ===========================
   DIFFICULTY 6
=========================== */
  {
    id: 16,
    difficulty: 6,
    subject: "Financial Reporting",
    chapter: "Ind AS 36",
    question: "An impairment loss is recognised when:",
    options: [
      "Fair value exceeds carrying amount",
      "Recoverable amount is lower than carrying amount",
      "Cash flow increases",
      "Useful life increases",
    ],
    answer: 1,
    explanation:
      "Impairment exists when carrying amount exceeds recoverable amount.",
  },
  {
    id: 17,
    difficulty: 6,
    subject: "AFM",
    chapter: "Portfolio",
    question: "Beta greater than 1 indicates:",
    options: [
      "Lower volatility than market",
      "Higher systematic risk than market",
      "Zero risk",
      "Only credit risk",
    ],
    answer: 1,
    explanation: "A beta above 1 indicates higher market sensitivity.",
  },
  {
    id: 18,
    difficulty: 6,
    subject: "Company Law",
    chapter: "Board Meetings",
    question: "Failure to maintain statutory registers may primarily attract:",
    options: [
      "Civil liability only",
      "Penalties under the Companies Act",
      "GST demand",
      "Income-tax reassessment",
    ],
    answer: 1,
    explanation:
      "The Companies Act prescribes penalties for non-maintenance of statutory records.",
  },
  /* ===========================
   DIFFICULTY 7
=========================== */
  {
    id: 19,
    difficulty: 7,
    subject: "Mixed",
    chapter: "Integrated",
    question:
      "Management refuses to recognise impairment despite evidence, does not disclose the matter, and the effect is pervasive. The auditor should issue:",
    options: [
      "Qualified Opinion",
      "Unmodified Opinion",
      "Adverse Opinion",
      "Emphasis of Matter",
    ],
    answer: 2,
    explanation:
      "A material and pervasive misstatement requires an Adverse Opinion.",
  },
  {
    id: 20,
    difficulty: 7,
    subject: "Mixed",
    chapter: "Integrated",
    question:
      "A company capitalises repair expenditure, claims depreciation on it, and GST ITC has also been wrongly claimed. Which professional is most likely to identify all three issues during a statutory audit?",
    options: [
      "Cost Accountant only",
      "Statutory Auditor",
      "Company Secretary",
      "Internal Customer",
    ],
    answer: 1,
    explanation:
      "A statutory auditor evaluates accounting treatment, tax implications and financial statement presentation.",
  },
  {
    id: 21,
    difficulty: 7,
    subject: "IBS",
    chapter: "Integrated Case",
    question:
      "An Integrated Business Solutions case requires application of Ind AS, Companies Act, GST and Standards on Auditing together. Which competency is primarily being tested?",
    options: [
      "Memory",
      "Integrated professional judgement",
      "Arithmetic speed",
      "Typing accuracy",
    ],
    answer: 1,
    explanation:
      "IBS is designed to test integrated professional judgement across multiple subjects.",
  },
  /* ===========================
   DIFFICULTY 1
=========================== */
  {
    id: 22,
    difficulty: 1,
    subject: "Financial Reporting",
    chapter: "Ind AS 2",
    question: "Ind AS 2 deals with:",
    options: ["Inventories", "Revenue", "Leases", "Borrowing Costs"],
    answer: 0,
    explanation: "Ind AS 2 prescribes accounting treatment for inventories.",
  },
  {
    id: 23,
    difficulty: 1,
    subject: "Audit",
    chapter: "SA 700",
    question: "SA 700 deals with:",
    options: ["Audit Evidence", "Audit Report", "Sampling", "Fraud"],
    answer: 1,
    explanation:
      "SA 700 deals with forming an opinion and reporting on financial statements.",
  },
  {
    id: 24,
    difficulty: 1,
    subject: "GST",
    chapter: "Registration",
    question: "GST registration is obtained under:",
    options: ["CGST Act", "Income-tax Act", "Companies Act", "SEBI Act"],
    answer: 0,
    explanation: "GST registration is governed by the CGST Act.",
  },
  /* ===========================
   DIFFICULTY 2
=========================== */
  {
    id: 25,
    difficulty: 2,
    subject: "AFM",
    chapter: "Risk",
    question: "The expected return on a portfolio is:",
    options: [
      "Weighted average of individual returns",
      "Highest return",
      "Lowest return",
      "Risk-free rate",
    ],
    answer: 0,
    explanation:
      "Portfolio return is the weighted average of individual security returns.",
  },
  {
    id: 26,
    difficulty: 2,
    subject: "Company Law",
    chapter: "Meetings",
    question: "Annual General Meeting is compulsory for:",
    options: [
      "Every Company except OPC",
      "Only Listed Companies",
      "Only Public Companies",
      "Only Government Companies",
    ],
    answer: 0,
    explanation: "Every company except OPC is required to hold an AGM.",
  },
  {
    id: 27,
    difficulty: 2,
    subject: "Direct Tax",
    chapter: "Heads of Income",
    question: "Salary income is taxable under:",
    options: [
      "Business Income",
      "Income from Salary",
      "Capital Gains",
      "Other Sources",
    ],
    answer: 1,
    explanation: "Salary is taxable under the head 'Income from Salary'.",
  },
  /* ===========================
   DIFFICULTY 3
=========================== */
  {
    id: 28,
    difficulty: 3,
    subject: "Financial Reporting",
    chapter: "Ind AS 36",
    question: "Recoverable amount is the higher of:",
    options: [
      "Cost and Fair Value",
      "Value in Use and Fair Value Less Costs of Disposal",
      "Book Value and Cost",
      "Market Value and Cost",
    ],
    answer: 1,
    explanation:
      "Recoverable amount is higher of Value in Use and Fair Value Less Costs of Disposal.",
  },
  {
    id: 29,
    difficulty: 3,
    subject: "Audit",
    chapter: "SA 320",
    question: "Materiality is considered during:",
    options: [
      "Planning only",
      "Reporting only",
      "Planning and Performing the Audit",
      "Completion only",
    ],
    answer: 2,
    explanation: "Materiality is applied throughout the audit.",
  },
  {
    id: 30,
    difficulty: 3,
    subject: "GST",
    chapter: "Place of Supply",
    question: "Place of Supply mainly determines:",
    options: [
      "Which tax is payable",
      "Rate of Income Tax",
      "Audit Requirement",
      "Residential Status",
    ],
    answer: 0,
    explanation:
      "Place of Supply determines whether CGST/SGST or IGST is applicable.",
  },
  /* ===========================
   DIFFICULTY 4
=========================== */
  {
    id: 31,
    difficulty: 4,
    subject: "Direct Tax",
    chapter: "House Property",
    question: "Standard deduction under Income from House Property is:",
    options: ["20%", "25%", "30%", "40%"],
    answer: 2,
    explanation: "A standard deduction of 30% is allowed under Section 24(a).",
  },
  {
    id: 32,
    difficulty: 4,
    subject: "AFM",
    chapter: "CAPM",
    question: "Risk-free rate is represented by:",
    options: [
      "Government Securities",
      "Corporate Bonds",
      "Preference Shares",
      "Debentures",
    ],
    answer: 0,
    explanation: "Government Securities are considered risk-free.",
  },
  {
    id: 33,
    difficulty: 4,
    subject: "Company Law",
    chapter: "Auditors",
    question: "The first auditor of a company is generally appointed by:",
    options: ["Members", "Board of Directors", "Registrar", "NCLT"],
    answer: 1,
    explanation: "The Board appoints the first auditor.",
  },
  /* ===========================
   DIFFICULTY 5
=========================== */
  {
    id: 34,
    difficulty: 5,
    subject: "Audit",
    chapter: "SA 570",
    question: "SA 570 primarily deals with:",
    options: ["Going Concern", "Fraud", "Sampling", "Audit Report"],
    answer: 0,
    explanation: "SA 570 deals with Going Concern.",
  },
  {
    id: 35,
    difficulty: 5,
    subject: "Financial Reporting",
    chapter: "Ind AS 115",
    question: "Revenue from sale of goods is recognised when:",
    options: [
      "Invoice is issued",
      "Control transfers to customer",
      "Cash is received",
      "Order is received",
    ],
    answer: 1,
    explanation: "Control transfer is the basis of revenue recognition.",
  },
  {
    id: 36,
    difficulty: 5,
    subject: "GST",
    chapter: "Reverse Charge",
    question: "Under Reverse Charge, tax is generally paid by:",
    options: ["Supplier", "Recipient", "Government", "Transporter"],
    answer: 1,
    explanation: "Under RCM, the recipient is liable to pay GST.",
  },
  /* ===========================
   DIFFICULTY 6
=========================== */
  {
    id: 37,
    difficulty: 6,
    subject: "AFM",
    chapter: "Derivatives",
    question: "A futures contract is primarily used for:",
    options: [
      "Speculation only",
      "Hedging and Risk Management",
      "Accounting",
      "Tax Planning",
    ],
    answer: 1,
    explanation: "Futures are widely used for hedging market risk.",
  },
  {
    id: 38,
    difficulty: 6,
    subject: "Direct Tax",
    chapter: "Business Income",
    question: "Depreciation under the Income-tax Act is generally allowed on:",
    options: [
      "Individual Assets",
      "Block of Assets",
      "Market Value",
      "Replacement Cost",
    ],
    answer: 1,
    explanation: "Depreciation is allowed on the Block of Assets.",
  },
  {
    id: 39,
    difficulty: 6,
    subject: "Company Law",
    chapter: "Board Meetings",
    question: "Quorum for Board Meeting depends upon:",
    options: [
      "Paid-up Capital",
      "Total Strength of Directors",
      "Turnover",
      "Net Profit",
    ],
    answer: 1,
    explanation:
      "Board Meeting quorum is based on the total strength of directors.",
  },
  /* ===========================
   DIFFICULTY 7
=========================== */
  {
    id: 40,
    difficulty: 7,
    subject: "Mixed",
    chapter: "Integrated",
    question:
      "Management intentionally overstates inventory, resulting in overstated profit. The misstatement is material and pervasive. Which audit opinion is appropriate?",
    options: ["Qualified", "Adverse", "Disclaimer", "Unmodified"],
    answer: 1,
    explanation:
      "Material and pervasive misstatements require an Adverse Opinion.",
  },
  {
    id: 41,
    difficulty: 7,
    subject: "Mixed",
    chapter: "Integrated",
    question:
      "A company incorrectly capitalises borrowing costs after the asset is ready for use. Which Ind AS is primarily violated?",
    options: ["Ind AS 2", "Ind AS 23", "Ind AS 38", "Ind AS 115"],
    answer: 1,
    explanation:
      "Borrowing costs cease to be capitalised when the qualifying asset is ready for intended use.",
  },
  {
    id: 42,
    difficulty: 7,
    subject: "IBS",
    chapter: "Integrated Case",
    question:
      "An IBS case requires application of GST, Direct Tax, Ind AS and Audit simultaneously. The examiner is primarily testing:",
    options: [
      "Memory of Sections",
      "Integrated Decision Making",
      "Calculation Speed",
      "Typing Skills",
    ],
    answer: 1,
    explanation:
      "IBS focuses on integrated professional judgement across multiple disciplines.",
  },
  {
    id: 43,
    difficulty: 1,
    subject: "Financial Reporting",
    chapter: "Ind AS 1",
    question: "The primary purpose of financial statements is to:",
    options: [
      "Calculate tax liability",
      "Provide information useful for economic decisions",
      "Determine market price of shares",
      "Detect fraud",
    ],
    answer: 1,
    explanation:
      "Ind AS 1 states that financial statements provide information useful to users for economic decision-making.",
  },
  {
    id: 44,
    difficulty: 1,
    subject: "Audit",
    chapter: "SA 200",
    question:
      "Who is primarily responsible for preventing and detecting fraud?",
    options: ["Statutory Auditor", "Management", "Shareholders", "Government"],
    answer: 1,
    explanation:
      "Management and Those Charged with Governance are primarily responsible for prevention and detection of fraud.",
  },
  {
    id: 45,
    difficulty: 1,
    subject: "GST",
    chapter: "Basics",
    question: "GST is levied on:",
    options: [
      "Supply of goods or services",
      "Income",
      "Agricultural land",
      "Salary",
    ],
    answer: 0,
    explanation: "GST is a tax on the supply of goods or services or both.",
  },
  {
    id: 46,
    difficulty: 1,
    subject: "Direct Tax",
    chapter: "Basic Concepts",
    question: "Income Tax in India is governed by:",
    options: [
      "Companies Act, 2013",
      "Income-tax Act, 1961",
      "CGST Act, 2017",
      "SEBI Act",
    ],
    answer: 1,
    explanation: "Income tax is governed by the Income-tax Act, 1961.",
  },
  {
    id: 47,
    difficulty: 1,
    subject: "Company Law",
    chapter: "Incorporation",
    question: "A Private Company must have a minimum of:",
    options: ["1 Member", "2 Members", "5 Members", "7 Members"],
    answer: 1,
    explanation: "A Private Company must have at least two members.",
  },
  {
    id: 48,
    difficulty: 2,
    subject: "AFM",
    chapter: "Portfolio Management",
    question: "Diversification mainly reduces:",
    options: [
      "Market Risk",
      "Systematic Risk",
      "Unsystematic Risk",
      "Interest Rate Risk",
    ],
    answer: 2,
    explanation:
      "Diversification reduces unsystematic (company-specific) risk.",
  },
  {
    id: 49,
    difficulty: 2,
    subject: "Financial Reporting",
    chapter: "Ind AS 16",
    question: "Land is generally:",
    options: [
      "Depreciated every year",
      "Not depreciated as it usually has an unlimited useful life",
      "Written off immediately",
      "Always treated as inventory",
    ],
    answer: 1,
    explanation:
      "Land is generally not depreciated because it normally has an unlimited useful life.",
  },
  {
    id: 50,
    difficulty: 2,
    subject: "Audit",
    chapter: "SA 500",
    question: "Audit evidence should primarily be:",
    options: [
      "Sufficient and Appropriate",
      "Oral only",
      "Prepared by management only",
      "Obtained after signing the report",
    ],
    answer: 0,
    explanation: "SA 500 requires sufficient appropriate audit evidence.",
  },
  {
    id: 51,
    difficulty: 2,
    subject: "GST",
    chapter: "Input Tax Credit",
    question: "Input Tax Credit can generally be claimed when:",
    options: [
      "Goods or services are used for business",
      "Goods are purchased for personal use",
      "Tax invoice is not available",
      "Supplier is unregistered in every case",
    ],
    answer: 0,
    explanation:
      "ITC is generally available for business purposes subject to prescribed conditions.",
  },
  {
    id: 52,
    difficulty: 2,
    subject: "Direct Tax",
    chapter: "Residential Status",
    question: "Residential status is determined separately for:",
    options: [
      "Each Previous Year",
      "Lifetime",
      "Every Assessment Year only",
      "Every five years",
    ],
    answer: 0,
    explanation:
      "Residential status is determined separately for each Previous Year.",
  },
  {
    id: 53,
    difficulty: 3,
    subject: "Financial Reporting",
    chapter: "Ind AS 16",
    question: "The cost of a machine includes:",
    options: [
      "Purchase price less trade discount plus directly attributable costs",
      "Only purchase price",
      "Future operating losses",
      "General administrative expenses",
    ],
    answer: 0,
    explanation:
      "Cost includes purchase price (net of discounts) and directly attributable costs.",
  },
  {
    id: 54,
    difficulty: 3,
    subject: "Audit",
    chapter: "SA 315",
    question: "Understanding internal control primarily helps the auditor to:",
    options: [
      "Prepare financial statements",
      "Assess the risks of material misstatement",
      "Calculate depreciation",
      "Determine tax liability",
    ],
    answer: 1,
    explanation:
      "SA 315 requires understanding internal control for risk assessment.",
  },
  {
    id: 55,
    difficulty: 3,
    subject: "GST",
    chapter: "Time of Supply",
    question: "The concept of Time of Supply determines:",
    options: [
      "The applicable GST rate",
      "The point when GST liability arises",
      "The place of supply",
      "Eligibility for registration",
    ],
    answer: 1,
    explanation: "Time of Supply determines when GST becomes payable.",
  },
  {
    id: 56,
    difficulty: 3,
    subject: "Direct Tax",
    chapter: "Capital Gains",
    question: "Capital gains arise when a capital asset is:",
    options: ["Purchased", "Transferred", "Insured", "Depreciated"],
    answer: 1,
    explanation:
      "Capital gains are charged on the transfer of a capital asset.",
  },
  {
    id: 57,
    difficulty: 3,
    subject: "Company Law",
    chapter: "Board of Directors",
    question: "The Board of Directors collectively exercises:",
    options: [
      "Management powers of the company",
      "Judicial powers",
      "Tax assessment powers",
      "Legislative powers",
    ],
    answer: 0,
    explanation: "The Board collectively manages the affairs of the company.",
  },
  {
    id: 58,
    difficulty: 4,
    subject: "AFM",
    chapter: "Capital Budgeting",
    question:
      "If two mutually exclusive projects have positive NPVs, the preferred project is generally the one with:",
    options: [
      "Lower initial investment",
      "Higher NPV",
      "Shorter life only",
      "Higher accounting profit",
    ],
    answer: 1,
    explanation:
      "For mutually exclusive projects, the project with the higher NPV generally maximizes shareholder wealth.",
  },
  {
    id: 59,
    difficulty: 4,
    subject: "Financial Reporting",
    chapter: "Ind AS 36",
    question: "An impairment loss is recognised when:",
    options: [
      "Recoverable amount exceeds carrying amount",
      "Carrying amount exceeds recoverable amount",
      "Fair value increases",
      "Useful life is revised upward",
    ],
    answer: 1,
    explanation:
      "Impairment exists when carrying amount exceeds recoverable amount.",
  },
  {
    id: 60,
    difficulty: 4,
    subject: "Audit",
    chapter: "SA 320",
    question: "Materiality is considered by the auditor during:",
    options: [
      "Planning only",
      "Execution only",
      "Planning and throughout the audit",
      "Preparation of financial statements only",
    ],
    answer: 2,
    explanation: "Materiality is considered throughout the audit engagement.",
  },
  {
    id: 61,
    difficulty: 4,
    subject: "GST",
    chapter: "Place of Supply",
    question:
      "Determination of the Place of Supply is mainly required to decide:",
    options: [
      "Whether CGST & SGST or IGST is applicable",
      "Income-tax liability",
      "Corporate tax rate",
      "Whether audit is compulsory",
    ],
    answer: 0,
    explanation: "Place of Supply determines the nature of GST applicable.",
  },
  {
    id: 62,
    difficulty: 4,
    subject: "Direct Tax",
    chapter: "House Property",
    question:
      "The standard deduction under the head 'Income from House Property' is generally allowed at:",
    options: [
      "20% of Net Annual Value",
      "25% of Net Annual Value",
      "30% of Net Annual Value",
      "40% of Net Annual Value",
    ],
    answer: 2,
    explanation:
      "Section 24(a) allows a standard deduction of 30% of the Net Annual Value.",
  },
  {
    id: 63,
    difficulty: 5,
    subject: "Audit",
    chapter: "SA 705",
    question:
      "The auditor concludes that the financial statements contain a material but not pervasive misstatement. Which opinion should be expressed?",
    options: [
      "Unmodified Opinion",
      "Qualified Opinion",
      "Adverse Opinion",
      "Disclaimer of Opinion",
    ],
    answer: 1,
    explanation:
      "A Qualified Opinion is expressed when the misstatement is material but not pervasive.",
  },
  {
    id: 64,
    difficulty: 5,
    subject: "Financial Reporting",
    chapter: "Ind AS 115",
    question:
      "A company receives ₹5,00,000 as an advance from a customer before transferring control of goods. Under Ind AS 115, the amount should initially be recognised as:",
    options: [
      "Revenue",
      "Other Income",
      "Contract Liability",
      "Capital Reserve",
    ],
    answer: 2,
    explanation:
      "Until control is transferred, consideration received is recognised as a Contract Liability.",
  },
  {
    id: 65,
    difficulty: 5,
    subject: "GST",
    chapter: "Input Tax Credit",
    question:
      "Which of the following is an essential condition for availing Input Tax Credit under GST?",
    options: [
      "Goods must be intended for personal use",
      "The recipient must possess a valid tax invoice",
      "Payment to supplier is optional",
      "GST return need not be filed",
    ],
    answer: 1,
    explanation:
      "Possession of a valid tax invoice is one of the mandatory conditions for claiming ITC.",
  },
  {
    id: 66,
    difficulty: 5,
    subject: "Direct Tax",
    chapter: "Business Income",
    question: "Depreciation under the Income-tax Act is generally computed on:",
    options: [
      "Individual Assets",
      "Block of Assets",
      "Market Value of Assets",
      "Replacement Cost",
    ],
    answer: 1,
    explanation:
      "The Income-tax Act allows depreciation on the Block of Assets concept.",
  },
  {
    id: 67,
    difficulty: 5,
    subject: "AFM",
    chapter: "Portfolio Management",
    question:
      "An investor wants to reduce unsystematic risk without reducing the expected market return. The most appropriate strategy is:",
    options: [
      "Invest only in Government Securities",
      "Diversify across securities from different industries",
      "Invest only in one blue-chip company",
      "Increase borrowing",
    ],
    answer: 1,
    explanation:
      "Diversification across different securities reduces unsystematic risk.",
  },
  {
    id: 68,
    difficulty: 6,
    subject: "Financial Reporting",
    chapter: "Ind AS 36",
    question:
      "A Cash Generating Unit has a carrying amount of ₹80 lakh. Its Value in Use is ₹70 lakh and Fair Value less Costs of Disposal is ₹74 lakh. The impairment loss to be recognised is:",
    options: ["₹4 lakh", "₹6 lakh", "₹10 lakh", "Nil"],
    answer: 1,
    explanation:
      "Recoverable amount is ₹74 lakh. Impairment loss = ₹80 lakh − ₹74 lakh = ₹6 lakh.",
  },
  {
    id: 69,
    difficulty: 6,
    subject: "Audit",
    chapter: "SA 570",
    question:
      "Management has prepared financial statements on a going concern basis despite significant uncertainty. Adequate disclosure has been made. The auditor agrees with the use of the going concern basis. The auditor should:",
    options: [
      "Issue an Adverse Opinion",
      "Issue a Qualified Opinion",
      "Include a Material Uncertainty Related to Going Concern section",
      "Issue a Disclaimer of Opinion",
    ],
    answer: 2,
    explanation:
      "Where adequate disclosure exists, a separate Material Uncertainty Related to Going Concern section is included.",
  },
  {
    id: 70,
    difficulty: 6,
    subject: "Company Law",
    chapter: "Independent Directors",
    question:
      "An Independent Director accepts substantial consultancy fees from the company during the financial year. This will primarily affect:",
    options: [
      "His DIN",
      "His Independence",
      "Validity of Board Meetings",
      "Company's Incorporation",
    ],
    answer: 1,
    explanation:
      "A significant pecuniary relationship compromises the independence of an Independent Director.",
  },
  {
    id: 71,
    difficulty: 6,
    subject: "AFM",
    chapter: "CAPM",
    question:
      "A share has a beta of 1.6. Assuming other factors remain constant, this indicates that the share:",
    options: [
      "Is less volatile than the market",
      "Moves approximately 1.6 times the market movement",
      "Has zero systematic risk",
      "Cannot be included in a portfolio",
    ],
    answer: 1,
    explanation:
      "A beta greater than 1 indicates greater sensitivity to market movements.",
  },
  {
    id: 72,
    difficulty: 7,
    subject: "Audit",
    chapter: "SA 705",

    question:
      "The auditor is unable to obtain sufficient appropriate audit evidence regarding inventory, which is material and pervasive to the financial statements. Which opinion should be expressed?",

    options: [
      "Qualified Opinion",
      "Adverse Opinion",
      "Disclaimer of Opinion",
      "Unmodified Opinion",
    ],

    answer: 2,

    explanation:
      "A Disclaimer of Opinion is appropriate where sufficient appropriate audit evidence cannot be obtained and the possible effects are material and pervasive.",
  },

  {
    id: 73,
    difficulty: 7,
    subject: "Financial Reporting",
    chapter: "Ind AS 115",

    question:
      "A contract contains two distinct performance obligations. The customer pays the full contract price upfront. Revenue should be recognised:",

    options: [
      "Immediately on receipt of cash",
      "Only when the entire contract is completed",
      "As each performance obligation is satisfied",
      "When the invoice is raised",
    ],

    answer: 2,

    explanation:
      "Revenue is recognised as each distinct performance obligation is satisfied.",
  },

  {
    id: 74,
    difficulty: 7,
    subject: "GST",
    chapter: "Input Tax Credit",

    question:
      "A registered person purchases goods for business, receives them, possesses a valid tax invoice, but fails to furnish the GST return. Can Input Tax Credit be availed?",

    options: [
      "Yes, because goods have been received",
      "Yes, because a valid tax invoice is available",
      "No, furnishing the return is one of the prescribed conditions",
      "Yes, after one year",
    ],

    answer: 2,

    explanation:
      "Furnishing the prescribed return is one of the statutory conditions for availing ITC.",
  },

  {
    id: 75,
    difficulty: 7,
    subject: "Direct Tax",
    chapter: "Capital Gains",

    question:
      "For computation of long-term capital gains on eligible assets, indexation is primarily intended to:",

    options: [
      "Increase the sale consideration",
      "Reduce the tax rate",
      "Adjust the cost of acquisition for inflation",
      "Increase depreciation",
    ],

    answer: 2,

    explanation:
      "Indexation adjusts the cost of acquisition to account for inflation, wherever applicable.",
  },

  {
    id: 76,
    difficulty: 7,
    subject: "AFM",
    chapter: "CAPM",

    question:
      "According to CAPM, if Beta is zero, the expected return on the security should generally be equal to:",

    options: [
      "Market Return",
      "Risk-free Rate",
      "Twice the Market Return",
      "Zero",
    ],

    answer: 1,

    explanation:
      "Under CAPM, Expected Return = Risk-free Rate + Beta × (Market Return − Risk-free Rate). If Beta is zero, the expected return equals the Risk-free Rate.",
  },
  {
    id: 77,
    difficulty: 4,
    subject: "Financial Reporting",
    chapter: "Ind AS 16",

    question:
      "A machine costing ₹25,00,000 is purchased. Installation cost is ₹1,20,000. Employee training cost is ₹80,000 and trial run revenue earned is ₹30,000. Assuming trial run costs have already been adjusted separately, the initial cost of PPE should be:",

    options: ["₹26,20,000", "₹27,00,000", "₹25,90,000", "₹26,70,000"],

    answer: 0,

    explanation:
      "Training costs are expensed. Installation cost is capitalised. Revenue from trial run is not deducted from the cost of PPE.",
  },

  {
    id: 78,
    difficulty: 4,
    subject: "Audit",
    chapter: "SA 530",

    question:
      "Increasing the sample size in audit sampling generally results in:",

    options: [
      "Higher sampling risk",
      "Lower sampling risk",
      "No effect on sampling risk",
      "Elimination of audit risk",
    ],

    answer: 1,

    explanation:
      "Increasing sample size reduces sampling risk but does not eliminate overall audit risk.",
  },

  {
    id: 79,
    difficulty: 4,
    subject: "AFM",
    chapter: "CAPM",

    question:
      "If the risk-free rate is 6%, market return is 14% and beta is 0.75, the expected return under CAPM is:",

    options: ["10%", "11%", "12%", "14%"],

    answer: 2,

    explanation: "6% + 0.75 × (14% − 6%) = 6% + 6% = 12%.",
  },

  {
    id: 80,
    difficulty: 5,
    subject: "GST",
    chapter: "Input Tax Credit",

    question:
      "A registered person purchases machinery for business. Goods are received on 28 March, invoice dated 30 March, supplier files GSTR-1 in April and recipient files GSTR-3B in May. The earliest month in which ITC can normally be availed is:",

    options: ["March", "April", "May", "June"],

    answer: 2,

    explanation:
      "ITC is generally availed when all prescribed conditions are satisfied, including furnishing the return.",
  },

  {
    id: 81,
    difficulty: 5,
    subject: "Audit",
    chapter: "SA 705",

    question:
      "Inventory is overstated by ₹4 crore. Profit before tax is ₹6 crore. The misstatement is confined only to inventory valuation. The appropriate audit opinion is most likely:",

    options: [
      "Qualified Opinion",
      "Adverse Opinion",
      "Disclaimer of Opinion",
      "Unmodified Opinion",
    ],

    answer: 0,

    explanation:
      "The misstatement is material but not pervasive since it is confined to one element.",
  },

  {
    id: 82,
    difficulty: 5,
    subject: "Financial Reporting",
    chapter: "Ind AS 36",

    question:
      "Carrying Amount = ₹120 lakh, Fair Value less Cost of Disposal = ₹105 lakh, Value in Use = ₹112 lakh. After recognising impairment, the carrying amount should be:",

    options: ["₹120 lakh", "₹112 lakh", "₹105 lakh", "₹108 lakh"],

    answer: 1,

    explanation:
      "Recoverable amount is the higher of FVLCD and VIU i.e. ₹112 lakh.",
  },

  {
    id: 83,
    difficulty: 6,
    subject: "AFM",
    chapter: "Portfolio Theory",

    question:
      "Two securities have identical expected returns and standard deviations. Which additional information is MOST essential for computing portfolio risk?",

    options: [
      "Dividend Yield",
      "Correlation Coefficient",
      "Face Value",
      "Book Value",
    ],

    answer: 1,

    explanation:
      "Portfolio risk depends significantly on the correlation between the securities.",
  },

  {
    id: 84,
    difficulty: 6,
    subject: "Audit",
    chapter: "SA 570",

    question:
      "Management refuses to assess going concern despite recurring losses and loan defaults. The auditor cannot obtain sufficient appropriate evidence. The possible effect is material and pervasive. The auditor should issue:",

    options: [
      "Qualified Opinion",
      "Adverse Opinion",
      "Disclaimer of Opinion",
      "Emphasis of Matter",
    ],

    answer: 2,

    explanation:
      "Lack of sufficient appropriate audit evidence with material and pervasive possible effects leads to a Disclaimer of Opinion.",
  },

  {
    id: 85,
    difficulty: 7,
    subject: "Financial Reporting",
    chapter: "Ind AS 23",

    question:
      "A qualifying asset is substantially complete on 30 September. General borrowings continue until December due to delayed commercial production. Borrowing costs from October to December should:",

    options: [
      "Continue to be capitalised until commercial production starts",
      "Be capitalised until sales commence",
      "Be recognised as finance cost",
      "Be added to the cost of inventory",
    ],

    answer: 2,

    explanation:
      "Capitalisation ceases when substantially all activities necessary to prepare the asset for intended use are complete.",
  },

  {
    id: 86,
    difficulty: 7,
    subject: "Integrated Business Solutions",
    chapter: "Integrated",

    question:
      "A company capitalises routine repairs as PPE, claims depreciation on the amount, recognises full revenue before transfer of control and the auditor concludes that the combined effect is material and pervasive. Which combination is MOST appropriate?",

    options: [
      "Ind AS 16 violated; Ind AS 115 violated; Adverse Opinion",
      "Only Ind AS 16 violated; Qualified Opinion",
      "Only Ind AS 115 violated; Disclaimer of Opinion",
      "No accounting violation; Emphasis of Matter",
    ],

    answer: 0,

    explanation:
      "Both accounting standards are violated, resulting in material and pervasive misstatements that require an Adverse Opinion.",
  },
  {
    id: "FR087",
    difficulty: 6,
    subject: "Financial Reporting",
    chapter: "Ind AS 36 & Ind AS 23",

    question: "ABC Ltd. borrowed ₹80 crore specifically for constructing a qualifying asset. Construction was substantially completed on 31 December 20X1. Commercial production, however, commenced on 1 April 20X2 because regulatory approval was delayed. During January–March 20X2, borrowing costs of ₹2.4 crore were incurred. An impairment review on 31 March 20X2 determined the recoverable amount to be ₹5 crore lower than the carrying amount. Which of the following is MOST appropriate?",

    options: [
        "Continue capitalising borrowing costs until commercial production begins and recognise impairment after commencement.",
        "Stop capitalising borrowing costs on substantial completion and recognise impairment immediately.",
        "Continue capitalisation because regulatory approval is outside management's control.",
        "Capitalise borrowing costs but defer impairment until the asset is put to use."
    ],

    answer: 1,

    explanation: "Capitalisation under Ind AS 23 ceases when substantially all activities are complete. Impairment under Ind AS 36 is recognised immediately when carrying amount exceeds recoverable amount."
},

{
    id: "AUD088",
    difficulty: 6,
    subject: "Audit",
    chapter: "SA 705 & SA 570",

    question: "A company has suffered recurring losses for four consecutive years. Major lenders have recalled loans after the reporting date but before the auditor's report. Management has prepared the financial statements on a going concern basis with adequate disclosure. The auditor agrees that a material uncertainty exists. Which is the MOST appropriate reporting approach?",

    options: [
        "Qualified Opinion because the uncertainty is material.",
        "Adverse Opinion because lenders recalled loans.",
        "Unmodified Opinion with a Material Uncertainty Related to Going Concern section.",
        "Disclaimer because future events are uncertain."
    ],

    answer: 2,

    explanation: "Where going concern basis remains appropriate and adequate disclosure exists, the opinion remains unmodified with a Material Uncertainty Related to Going Concern section."
},

{
    id: "GST089",
    difficulty: 6,
    subject: "GST",
    chapter: "Input Tax Credit",

    question: "A registered person purchased machinery on 28 March. Invoice was received on 29 March, goods on 3 April, payment to supplier after 210 days and GSTR-3B for April was filed in May. Assuming all other statutory conditions are satisfied, identify the MOST appropriate statement.",

    options: [
        "ITC is available in March because the invoice was received.",
        "ITC is available in April since goods were received during April.",
        "ITC is permanently disallowed because payment exceeded 180 days.",
        "ITC is available only after full payment to supplier."
    ],

    answer: 1,

    explanation: "Receipt of goods is essential. Payment beyond the prescribed period affects ITC as per law, but it does not permanently disallow the credit."
},

{
    id: "AFM090",
    difficulty: 6,
    subject: "AFM",
    chapter: "Portfolio Management",

    question: "Security A and Security B each have an expected return of 14% and standard deviation of 18%. The correlation coefficient changes from +0.95 to –0.40 while weights remain equal. Which statement is MOST appropriate?",

    options: [
        "Expected return decreases significantly.",
        "Portfolio risk decreases while expected return remains unchanged.",
        "Both expected return and risk decrease proportionately.",
        "Portfolio beta necessarily becomes zero."
    ],

    answer: 1,

    explanation: "Correlation affects portfolio risk but not expected return."
},

{
    id: "LAW091",
    difficulty: 6,
    subject: "Company Law",
    chapter: "Directors",

    question: "A director failed to disclose his interest in a contract, participated in the meeting and voted. The Board approved the contract unanimously. Subsequently, the company suffered a substantial loss. Which statement is MOST appropriate?",

    options: [
        "The contract automatically becomes valid because it was unanimously approved.",
        "Failure to disclose interest may attract statutory consequences irrespective of unanimous approval.",
        "The transaction is valid because shareholders were unaware.",
        "No consequences arise unless fraud is proved."
    ],

    answer: 1,

    explanation: "Disclosure of interest is mandatory and failure attracts consequences independent of unanimous approval."
},

{
    id: "IBS092",
    difficulty: 7,
    subject: "Integrated Business Solutions",
    chapter: "Integrated Case",

    question: "XYZ Ltd. capitalised routine repairs of ₹12 crore as PPE, recognised revenue before transfer of control, claimed ITC on goods used exclusively for personal consumption of directors and management refused to reverse any adjustment despite audit evidence. The combined impact is material and pervasive. Which combination is MOST appropriate?",

    options: [
        "Ind AS 16 violated, Ind AS 115 violated, GST provisions violated, Adverse Opinion.",
        "Only Ind AS 16 violated, Qualified Opinion.",
        "Only GST provisions violated, Disclaimer.",
        "No reporting modification because management accepted responsibility."
    ],

    answer: 0,

    explanation: "Multiple material and pervasive misstatements require an Adverse Opinion."
},

{
    id: "FR093",
    difficulty: 7,
    subject: "Financial Reporting",
    chapter: "Ind AS 103, 12 & 36",

    question: "During acquisition, goodwill of ₹48 crore is recognised. One year later, recoverable amount of the CGU falls below carrying amount by ₹22 crore. Deferred tax assets recognised at acquisition no longer satisfy recognition criteria. Which adjustment is MOST appropriate under Ind AS?",

    options: [
        "Reverse goodwill first, then adjust deferred tax through OCI.",
        "Recognise impairment in accordance with Ind AS 36 and account for deferred tax separately under Ind AS 12.",
        "Adjust goodwill directly against retained earnings.",
        "Ignore deferred tax because goodwill exists."
    ],

    answer: 1,

    explanation: "Impairment of goodwill and deferred tax accounting are governed independently by their respective standards."
},

{
    id: "AUD094",
    difficulty: 7,
    subject: "Audit",
    chapter: "SA 240, SA 315 & SA 330",

    question: "During finalisation of audit, the auditor discovers journal entries posted late at night by the CFO bypassing automated controls. Management refuses forensic investigation, although evidence indicates possible management override. Which is the BEST audit response?",

    options: [
        "Ignore because journal entries are individually immaterial.",
        "Expand audit procedures, reassess fraud risk, evaluate reporting implications and consider communication with Those Charged with Governance.",
        "Immediately issue an Adverse Opinion.",
        "Resign without completing audit procedures."
    ],

    answer: 1,

    explanation: "Possible management override requires expanded procedures, reassessment of fraud risk and appropriate communication before deciding the opinion."
},

{
    id: "AFM095",
    difficulty: 7,
    subject: "AFM",
    chapter: "Business Valuation",

    question: "Two valuation models produce enterprise values differing by 22%. One assumes perpetual growth exceeding long-term GDP growth while the other uses market multiples from distressed companies. Which valuation should generally receive greater weight?",

    options: [
        "DCF with unrealistic perpetual growth.",
        "Market multiples without adjustment.",
        "Neither automatically; assumptions, comparability and reasonableness must be critically evaluated before assigning weight.",
        "Average both values in every case."
    ],

    answer: 2,

    explanation: "Professional judgement requires evaluating assumptions and comparability rather than mechanically averaging valuation methods."
},

{
    id: "IBS096",
    difficulty: 7,
    subject: "Integrated Business Solutions",
    chapter: "Master Case",

    question: "A listed company enters into a complex sale-and-leaseback transaction near year-end, recognises full revenue immediately, capitalises borrowing costs after the qualifying asset is substantially complete, claims ineligible GST ITC and does not disclose significant going concern uncertainty despite loan covenant breaches. As engagement partner, which is the MOST appropriate conclusion after obtaining sufficient evidence that management refuses all adjustments?",

    options: [
        "Issue a Qualified Opinion because each issue individually affects different balances.",
        "Issue an Adverse Opinion since the financial statements contain multiple material and pervasive misstatements across recognition, measurement, disclosure and compliance.",
        "Issue an Unmodified Opinion with an Emphasis of Matter paragraph.",
        "Issue a Disclaimer because management disagreement always results in disclaimer."
    ],

    answer: 1,

    explanation: "Multiple pervasive misstatements affecting several fundamental areas require an Adverse Opinion under SA 705."
},
{
    id: "FR097",
    difficulty: 7,
    subject: "Financial Reporting",
    chapter: "Ind AS 115, Ind AS 37 & Ind AS 10",

    question: "ABC Ltd. entered into a contract on 1 March 20X5 to supply customized machinery for ₹48 crore. The customer paid ₹12 crore in advance. Delivery, installation and performance testing were completed on 8 April 20X5. On 28 March 20X5, the customer filed a legal claim alleging delay, and management estimated a probable compensation of ₹1.8 crore. On 12 April 20X5, before approval of financial statements, the customer accepted the machinery without any compensation. Which of the following is the MOST appropriate accounting treatment for the year ended 31 March 20X5?",

    options: [
        "Recognise ₹48 crore revenue and ignore the legal claim.",
        "Recognise only the advance as revenue and ignore subsequent events.",
        "Recognise a contract liability for ₹12 crore, recognise a provision for the probable compensation at year-end and reverse it only in the next financial year if appropriate.",
        "Recognise full revenue because the customer eventually accepted the machinery."
    ],

    answer: 2,

    explanation: "Control had not transferred by 31 March, so revenue cannot be recognised. The advance is a contract liability, and the probable obligation existing at year-end requires evaluation under Ind AS 37."
},

{
    id: "AUD098",
    difficulty: 7,
    subject: "Audit",
    chapter: "SA 240, SA 315 & SA 500",

    question: "During audit, the engagement team discovers that all manual journal entries exceeding ₹5 crore were posted by the CFO during the last two days of the financial year. Supporting documentation is incomplete, management refuses further explanations, and internal controls over journal approvals were overridden. Inventory and revenue are both materially affected, but the exact impact cannot be quantified. Which is the BEST audit conclusion?",

    options: [
        "Issue an Adverse Opinion because fraud always results in adverse opinion.",
        "Issue a Qualified Opinion because only year-end entries are affected.",
        "Consider management override as a significant fraud risk, perform expanded audit procedures and, if sufficient appropriate evidence cannot be obtained and possible effects are pervasive, issue a Disclaimer of Opinion.",
        "Ignore the issue because journal entries were approved by the CFO."
    ],

    answer: 2,

    explanation: "Management override is a presumed fraud risk. If evidence cannot be obtained and the possible effects are material and pervasive, a Disclaimer is appropriate."
},

{
    id: "IBS099",
    difficulty: 7,
    subject: "Integrated Business Solutions",
    chapter: "Integrated Case",

    question: "A listed company recognised revenue before transfer of control, capitalised annual maintenance expenditure as PPE, failed to recognise impairment despite a significant fall in recoverable amount, claimed blocked GST input tax credit and did not disclose loan covenant defaults. Management refused all proposed adjustments. Which statement is MOST appropriate?",

    options: [
        "Only revenue recognition is incorrect.",
        "The financial statements contain multiple recognition, measurement and disclosure failures likely requiring an Adverse Opinion.",
        "An Emphasis of Matter paragraph is sufficient.",
        "Only CARO reporting is affected."
    ],

    answer: 1,

    explanation: "Multiple material and pervasive departures from the financial reporting framework require an Adverse Opinion."
},

{
    id: "AFM100",
    difficulty: 7,
    subject: "AFM",
    chapter: "Business Valuation & CAPM",

    question: "An analyst values a company using DCF assuming perpetual growth of 9% while the cost of equity computed under CAPM is 10%. Comparable listed companies show long-term growth of around 4%. Which assumption is MOST likely to overstate valuation?",

    options: [
        "Using CAPM for cost of equity.",
        "Using perpetual growth significantly higher than long-term sustainable economic growth.",
        "Using free cash flow to equity.",
        "Using terminal value."
    ],

    answer: 1,

    explanation: "An unrealistically high perpetual growth assumption significantly inflates terminal value and overall valuation."
},

{
    id: "MST101",
    difficulty: 7,
    subject: "Integrated Business Solutions",
    chapter: "Master Level",

    question: "XYZ Ltd. acquired another entity during the year and recognised goodwill. Subsequently, management capitalised borrowing costs after the qualifying asset was substantially complete, recognised revenue before satisfying the remaining performance obligation, ignored impairment indicators despite declining cash flows, claimed ineligible GST input tax credit on blocked credits and refused to disclose a material uncertainty relating to going concern. The auditor obtained sufficient appropriate evidence supporting all the above findings. Which is the MOST appropriate overall conclusion?",

    options: [
        "Qualified Opinion because each issue individually affects different accounting areas.",
        "Unmodified Opinion with Emphasis of Matter because sufficient evidence was obtained.",
        "Adverse Opinion because the financial statements contain multiple material and pervasive misstatements affecting recognition, measurement and disclosure.",
        "Disclaimer because management refused adjustments."
    ],

    answer: 2,

    explanation: "Where sufficient evidence exists and the financial statements are materially and pervasively misstated due to multiple departures from the reporting framework, an Adverse Opinion is appropriate."
},
{
    id: "MST102",
    difficulty: 7,
    subject: "Integrated Business Solutions",
    chapter: "Integrated Case",

    question: "ABC Ltd. entered into a sale-and-leaseback transaction on 28 March 20X5. The asset had a carrying amount of ₹80 crore and was sold for ₹125 crore, whereas its fair value was independently determined at ₹100 crore. The excess consideration was adjusted through future lease rentals. Management recognised the entire gain of ₹45 crore immediately. The statutory auditor also noted that borrowing costs relating to another qualifying asset were capitalised even after the asset was ready for intended use. Which of the following is the MOST appropriate conclusion?",

    options: [
        "Entire gain is correctly recognised because legal ownership has transferred.",
        "Entire gain should be deferred because leaseback exists.",
        "Gain should be recognised only to the extent permitted under Ind AS 116 after adjusting for off-market consideration, and borrowing costs after readiness should be expensed.",
        "Only borrowing costs require adjustment."
    ],

    answer: 2,

    explanation: "Off-market consideration and sale-and-leaseback accounting require adjustment under Ind AS 116. Borrowing cost capitalisation ceases when the asset is ready for intended use."
},

{
    id: "MST103",
    difficulty: 7,
    subject: "Audit",
    chapter: "SA 240, SA 330 & SA 700",

    question: "During completion of audit, the engagement partner discovers fictitious sales worth ₹65 crore recorded during the last week of March. Management agrees to reverse only ₹10 crore and refuses any further correction. After proposed adjustments, profit before tax would reduce from ₹52 crore to a loss of ₹3 crore. The auditor has sufficient appropriate evidence. Which is the BEST reporting decision?",

    options: [
        "Qualified Opinion because only revenue is affected.",
        "Disclaimer because fraud is involved.",
        "Adverse Opinion because sufficient evidence exists and the remaining misstatement is material and pervasive.",
        "Unmodified Opinion with Emphasis of Matter."
    ],

    answer: 2,

    explanation: "When sufficient evidence exists and management refuses to correct material and pervasive misstatements, an Adverse Opinion is appropriate."
},

{
    id: "MST104",
    difficulty: 7,
    subject: "Financial Reporting",
    chapter: "Ind AS 103, 36 & 12",

    question: "P Ltd. acquired S Ltd. and recognised goodwill of ₹120 crore. At year-end, the recoverable amount of the related CGU was ₹95 crore lower than its carrying amount. Deferred tax liabilities recognised at acquisition were overstated by ₹18 crore due to revised tax estimates. Which sequence of accounting treatment is MOST appropriate?",

    options: [
        "Adjust deferred tax first, then allocate the remaining amount to goodwill impairment.",
        "Recognise goodwill impairment under Ind AS 36 independently and account for deferred tax adjustment separately under Ind AS 12.",
        "Reduce goodwill directly by the deferred tax adjustment.",
        "No adjustment is required until disposal of the CGU."
    ],

    answer: 1,

    explanation: "Goodwill impairment and deferred tax accounting are governed independently under Ind AS 36 and Ind AS 12."
},

{
    id: "MST105",
    difficulty: 7,
    subject: "AFM",
    chapter: "Business Valuation",

    question: "Three valuation methods produce enterprise values of ₹980 crore, ₹1,180 crore and ₹1,760 crore. The highest valuation is based on perpetual growth of 9% despite an expected long-term GDP growth of 5%, while comparable companies trade at substantially lower EV/EBITDA multiples. Which approach is MOST appropriate?",

    options: [
        "Select the highest valuation because shareholders benefit.",
        "Average all three values without evaluating assumptions.",
        "Critically evaluate the assumptions behind each method and assign appropriate weight rather than mechanically averaging or selecting the highest value.",
        "Always rely on market multiples over DCF."
    ],

    answer: 2,

    explanation: "Professional valuation requires assessing assumptions, comparability and reasonableness rather than blindly selecting or averaging results."
},

{
    id: "MST106",
    difficulty: 7,
    subject: "Integrated Business Solutions",
    chapter: "Master Case",

    question: "A listed company recognised revenue before transfer of control, capitalised annual maintenance expenditure, failed to recognise impairment despite a 45% decline in recoverable amount, continued capitalising borrowing costs after substantial completion, availed blocked GST input tax credit, omitted disclosure of loan covenant breaches and management refused all proposed audit adjustments. The auditor obtained sufficient appropriate evidence supporting every finding. Which is the MOST appropriate overall conclusion?",

    options: [
        "Qualified Opinion because each issue individually affects different financial statement elements.",
        "Unmodified Opinion because sufficient audit evidence was obtained.",
        "Adverse Opinion because the financial statements contain multiple material and pervasive departures from the applicable financial reporting framework.",
        "Disclaimer because management refused to pass adjustment entries."
    ],

    answer: 2,

    explanation: "Where sufficient evidence exists and multiple pervasive misstatements remain uncorrected, SA 705 requires an Adverse Opinion."
},
{
    id: "MST107",
    difficulty: 7,
    subject: "Integrated Business Solutions",
    chapter: "Integrated Case",

    question:
      "PQ Ltd. entered into a contract on 1 January 20X5 to construct a specialised manufacturing facility for ₹240 crore. The contract contains (i) design services, (ii) construction and (iii) maintenance for three years. Management recognised the entire contract as a single performance obligation and recognised 92% revenue by 31 March 20X5. During audit, it was observed that the customer had not obtained control over the maintenance services, estimated costs had significantly increased and the CGU containing the project also showed impairment indicators. Which of the following is the MOST appropriate conclusion?",

    options: [
      "Revenue recognition is correct because construction is substantially complete.",
      "Revenue should be reassessed by identifying distinct performance obligations and impairment should also be evaluated independently.",
      "Entire revenue should be deferred until maintenance is completed.",
      "Impairment testing is unnecessary since revenue has already been recognised."
    ],

    answer: 1,

    explanation:
      "Distinct performance obligations under Ind AS 115 must be identified separately, while impairment is assessed independently under Ind AS 36."
},

{
    id: "MST108",
    difficulty: 7,
    subject: "Audit",
    chapter: "SA 315, SA 330 & SA 540",

    question:
      "During the audit of a financial institution, management used internally developed valuation models for Level 3 financial instruments amounting to ₹680 crore. The assumptions used differed significantly from observable market evidence. Management refused to permit engagement of the auditor's valuation expert and alternative procedures could not reduce audit risk to an acceptably low level. The possible effects are material but confined only to investments. Which opinion is MOST appropriate?",

    options: [
      "Disclaimer of Opinion",
      "Qualified Opinion",
      "Adverse Opinion",
      "Unmodified Opinion"
    ],

    answer: 1,

    explanation:
      "Inability to obtain sufficient appropriate evidence with possible material but non-pervasive effects results in a Qualified Opinion."
},

{
    id: "MST109",
    difficulty: 7,
    subject: "Financial Reporting",
    chapter: "Ind AS 109, Ind AS 32 & Ind AS 107",

    question:
      "An entity issued compulsorily redeemable preference shares carrying a fixed dividend. Management classified them as equity because voting rights were absent. Consequently, dividend paid was recognised directly in equity. Which statement is MOST appropriate?",

    options: [
      "Classification is correct because voting rights determine equity.",
      "The instrument is generally a financial liability since redemption is mandatory, and related payments are recognised as finance cost.",
      "The instrument is equity because dividend is discretionary.",
      "Classification depends only upon legal form."
    ],

    answer: 1,

    explanation:
      "Substance prevails over legal form. Mandatory redemption generally creates a financial liability under Ind AS 32."
},

{
    id: "MST110",
    difficulty: 7,
    subject: "Integrated Business Solutions",
    chapter: "GST + FR + Audit",

    question:
      "A company capitalised employee training expenditure as part of PPE, claimed GST ITC on the same expenditure, recognised depreciation on the capitalised amount and management refused to reverse the accounting treatment despite being informed that the expenditure did not satisfy recognition criteria. Which combination is MOST appropriate?",

    options: [
      "Only GST law is violated.",
      "Only Ind AS 16 is violated.",
      "Ind AS 16 accounting treatment is incorrect, depreciation is overstated, GST implications require separate evaluation and the auditor should consider modification if the effect is material.",
      "No accounting adjustment is necessary because the expenditure benefits future periods."
    ],

    answer: 2,

    explanation:
      "Training expenditure is generally expensed under Ind AS 16. Incorrect capitalisation also affects depreciation, and GST eligibility must be evaluated separately."
},

{
    id: "MST111",
    difficulty: 7,
    subject: "Master Level",
    chapter: "Ultimate IBS",

    question:
      "During the statutory audit of XYZ Ltd., the auditor identified the following: (i) revenue recognised before transfer of control under Ind AS 115, (ii) borrowing costs capitalised after substantial completion of a qualifying asset under Ind AS 23, (iii) impairment indicators ignored under Ind AS 36, (iv) compulsory redeemable preference shares classified as equity under Ind AS 32, (v) blocked GST input tax credit availed, and (vi) management refused every proposed adjustment despite sufficient appropriate audit evidence. Which is the BEST overall conclusion?",

    options: [
      "Issue a Qualified Opinion because every issue affects a different accounting standard.",
      "Issue an Adverse Opinion because multiple material and pervasive departures exist across recognition, measurement, presentation and disclosure.",
      "Issue a Disclaimer because management refused adjustments.",
      "Issue an Unmodified Opinion with an Emphasis of Matter paragraph."
    ],

    answer: 1,

    explanation:
      "Where sufficient audit evidence exists but management refuses to correct multiple material and pervasive misstatements, SA 705 requires an Adverse Opinion."
}
];
