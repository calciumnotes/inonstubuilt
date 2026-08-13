const caseStudies = [

// Chapter 1
{
  id: "ARB_CS_1_1",

  chapter: "Introduction",

  caseText: `
    <p><strong>CASE SCENARIO</strong></p>

    <p>
      Nova Traders and Bright Industries entered into a supply contract. A dispute arose
      regarding the quality of goods supplied. Nova wanted a binding determination, while
      Bright preferred to resolve the matter amicably and continue their business relationship.
    </p>

    <p>
      The parties first considered mediation, where a neutral person would facilitate their
      discussions without imposing a decision. They later considered arbitration under their
      contract, where an arbitrator would examine the dispute and give a binding decision.
    </p>
  `,

  questions: [

    {
      question_id: "ARB_CS_1_1_1",
      difficulty: "easy",
      chapter_name: ["Introduction"],
      question: "Which ADR mechanism initially preferred by Bright focuses on facilitating communication without imposing a decision?",
      options: [
        "Mediation",
        "Arbitration",
        "Litigation",
        "Lok Adalat"
      ],
      answer: 0
    },

    {
      question_id: "ARB_CS_1_1_2",
      difficulty: "easy",
      chapter_name: ["Introduction"],
      question: "Who retains control over the final outcome in mediation?",
      options: [
        "The mediator",
        "The court",
        "The parties",
        "The arbitrator"
      ],
      answer: 2
    },

    {
      question_id: "ARB_CS_1_1_3",
      difficulty: "easy",
      chapter_name: ["Introduction"],
      question: "What is the principal feature distinguishing arbitration from mediation in the case?",
      options: [
        "Arbitration involves a decision-maker who gives a binding decision",
        "Arbitration does not involve any third party",
        "Mediation always results in a binding decision",
        "Mediation is conducted only by courts"
      ],
      answer: 0
    },

    {
      question_id: "ARB_CS_1_1_4",
      difficulty: "hard",
      chapter_name: ["Introduction"],
      question: "If Nova and Bright choose mediation, the mediator suggests three possible settlement options. Bright accepts one option but Nova rejects all of them. Which statement is most appropriate?",
      options: [
        "The mediator can impose the option accepted by Bright",
        "The settlement automatically becomes binding because the mediator suggested it",
        "Nova retains the freedom to reject the proposed settlement",
        "The mediator must refer the dispute to arbitration"
      ],
      answer: 2
    },

    {
      question_id: "ARB_CS_1_1_5",
      difficulty: "hard",
      chapter_name: ["Introduction"],
      question: "If the parties proceed with arbitration instead of mediation, which change in the role of the neutral third party would occur?",
      options: [
        "The neutral would facilitate discussions but have no role in deciding the dispute",
        "The neutral would act as a decision-maker and render a binding determination",
        "The neutral would negotiate separately with each party without deciding anything",
        "The neutral would merely record the parties' statements"
      ],
      answer: 1
    },

    {
      question_id: "ARB_CS_1_1_6",
      difficulty: "hard",
      chapter_name: ["Introduction"],
      question: "Bright's primary objective is to preserve the business relationship while allowing both parties to develop a mutually acceptable solution. Which ADR characteristic most strongly supports choosing mediation?",
      options: [
        "Imposition of a binding decision by a neutral",
        "Adversarial presentation of evidence",
        "Collaborative and party-controlled resolution",
        "Mandatory determination by a tribunal"
      ],
      answer: 2
    }

  ]
},

{
  id: "ARB_CS_1_2",

  chapter: "Introduction",

  caseText: `
    <p><strong>CASE SCENARIO</strong></p>

    <p>
      Riya and Karan had a dispute regarding payment for professional services. They agreed
      to mediation. The mediator first explained the voluntary nature of the process and allowed
      both parties to present their views.
    </p>

    <p>
      After a joint discussion, the mediator met each party separately to understand concerns
      that they were unwilling to disclose in front of the other party. The mediator then helped
      them explore possible solutions. Eventually, both parties agreed on revised payment terms
      and a settlement was prepared.
    </p>
  `,

  questions: [

    {
      question_id: "ARB_CS_1_2_1",
      difficulty: "easy",
      chapter_name: ["Introduction"],
      question: "What is the first stage described in the mediation process?",
      options: [
        "Agreement",
        "Introduction and opening statements",
        "Closure",
        "Negotiation and problem-solving"
      ],
      answer: 1
    },

    {
      question_id: "ARB_CS_1_2_2",
      difficulty: "easy",
      chapter_name: ["Introduction"],
      question: "Why did the mediator meet Riya and Karan separately?",
      options: [
        "To impose a decision on them",
        "To conduct a court trial",
        "To allow confidential discussion of individual concerns",
        "To replace the settlement agreement"
      ],
      answer: 2
    },

    {
      question_id: "ARB_CS_1_2_3",
      difficulty: "easy",
      chapter_name: ["Introduction"],
      question: "Which stage followed the joint and private discussions in the case?",
      options: [
        "Negotiation and problem-solving",
        "Litigation",
        "Appeal",
        "Arbitration"
      ],
      answer: 0
    },

    {
      question_id: "ARB_CS_1_2_4",
      difficulty: "hard",
      chapter_name: ["Introduction"],
      question: "During the private discussion, Riya disclosed sensitive personal information and requested that it not be shared with Karan. What principle is most directly relevant?",
      options: [
        "Finality",
        "Confidentiality",
        "Adversarial procedure",
        "Binding decision-making"
      ],
      answer: 1
    },

    {
      question_id: "ARB_CS_1_2_5",
      difficulty: "hard",
      chapter_name: ["Introduction"],
      question: "The mediator identifies a possible solution but does not force Riya and Karan to accept it. What does this demonstrate?",
      options: [
        "The mediator's decision-making authority",
        "Party self-determination",
        "Mandatory arbitration",
        "Judicial determination"
      ],
      answer: 1
    },

    {
      question_id: "ARB_CS_1_2_6",
      difficulty: "hard",
      chapter_name: ["Introduction"],
      question: "Suppose the mediator begins favouring Riya because he believes her claim is stronger. Which fundamental principle of mediation would be compromised?",
      options: [
        "Impartiality and neutrality",
        "Flexibility of negotiation",
        "Finality of arbitration",
        "Jurisdiction of Lok Adalat"
      ],
      answer: 0
    }

  ]
},

{
  id: "ARB_CS_1_3",

  chapter: "Introduction",

  caseText: `
    <p><strong>CASE SCENARIO</strong></p>

    <p>
      A vehicle accident resulted in a compensation dispute between Sameer and Arjun.
      Both parties wanted a quick and economical settlement. They initially discussed the
      matter directly and exchanged proposals and concessions without appointing a neutral
      third party.
    </p>

    <p>
      When the dispute remained unresolved, the matter was referred to a Lok Adalat.
      The parties were encouraged to arrive at a voluntary settlement rather than having
      the forum decide the dispute like an ordinary court.
    </p>
  `,

  questions: [

    {
      question_id: "ARB_CS_1_3_1",
      difficulty: "easy",
      chapter_name: ["Introduction"],
      question: "Which ADR method did Sameer and Arjun initially use?",
      options: [
        "Negotiation",
        "Arbitration",
        "Conciliation",
        "Mediation"
      ],
      answer: 0
    },

    {
      question_id: "ARB_CS_1_3_2",
      difficulty: "easy",
      chapter_name: ["Introduction"],
      question: "Which feature is generally associated with negotiation?",
      options: [
        "A third party always imposes a decision",
        "Direct discussion between the parties",
        "Mandatory judicial determination",
        "An arbitrator decides the dispute"
      ],
      answer: 1
    },

    {
      question_id: "ARB_CS_1_3_3",
      difficulty: "easy",
      chapter_name: ["Introduction"],
      question: "Lok Adalats are commonly associated with which objective?",
      options: [
        "Increasing the length of litigation",
        "Facilitating speedy settlement of disputes",
        "Replacing all courts",
        "Imposing criminal punishment"
      ],
      answer: 1
    },

    {
      question_id: "ARB_CS_1_3_4",
      difficulty: "hard",
      chapter_name: ["Introduction"],
      question: "Sameer offers to reduce his compensation claim while Arjun agrees to make an earlier payment. This exchange primarily illustrates which part of the negotiation process?",
      options: [
        "Preparation",
        "Bargaining and concession",
        "Closure and agreement",
        "Private discussion"
      ],
      answer: 1
    },

    {
      question_id: "ARB_CS_1_3_5",
      difficulty: "hard",
      chapter_name: ["Introduction"],
      question: "Why is the Lok Adalat approach different from arbitration in the circumstances described?",
      options: [
        "Lok Adalat focuses on facilitating voluntary settlement rather than imposing an arbitral decision",
        "Lok Adalat is a form of criminal trial",
        "Lok Adalat always requires an arbitrator to determine liability",
        "Lok Adalat prohibits parties from participating in settlement"
      ],
      answer: 0
    },

    {
      question_id: "ARB_CS_1_3_6",
      difficulty: "hard",
      chapter_name: ["Introduction"],
      question: "If Sameer and Arjun fail to reach a mutually acceptable settlement before the Lok Adalat, which principle best explains the difficulty in treating the process like ordinary arbitration?",
      options: [
        "The objective is settlement through agreement rather than a neutral arbitrator imposing a decision",
        "The Lok Adalat must always decide the dispute on evidence",
        "The parties automatically become bound by every proposal made",
        "Negotiation cannot be used before approaching a Lok Adalat"
      ],
      answer: 0
    }

  ]
},

{
  id: "ARB_CS_1_4",

  chapter: "Introduction",

  caseText: `
    <p><strong>CASE SCENARIO</strong></p>

    <p>
      Zenith Infrastructure Limited entered into a contract with Apex Engineering Services
      for the construction and maintenance of a manufacturing facility. After completion of
      part of the project, a dispute arose regarding delays, additional costs and the quality
      of certain work. Zenith claimed compensation for the delay, while Apex argued that
      several delays were caused by changes requested by Zenith during the project.
    </p>

    <p>
      The contract provided an arbitration clause, but both parties initially wanted to avoid
      a formal dispute process because they expected to continue their business relationship.
      They therefore agreed to attempt mediation. A neutral mediator was appointed after
      both parties gave their consent.
    </p>

    <p>
      During the first meeting, the mediator explained that the process was voluntary and
      that the mediator would not impose a decision. Zenith and Apex were each given an
      opportunity to explain their concerns. The mediator then conducted a joint discussion
      to identify the major areas of disagreement.
    </p>

    <p>
      During separate private meetings, Apex informed the mediator that it was willing to
      waive part of its additional-cost claim if Zenith agreed to extend the maintenance
      contract. Apex specifically requested that this proposal not be disclosed immediately.
      The mediator respected the confidential nature of the discussion and later helped both
      parties explore possible solutions.
    </p>

    <p>
      Eventually, the parties reached an understanding on revised payment terms, completion
      of the remaining work and an extension of the maintenance arrangement. The mediator
      assisted them in recording the agreed terms. Neither the mediator nor either party
      was forced to accept a particular solution by an external decision-maker.
    </p>
  `,

  questions: [

    {
      question_id: "ARB_CS_1_4_1",
      difficulty: "easy",
      chapter_name: ["Introduction"],
      question: "Which ADR mechanism did Zenith and Apex initially choose to attempt to resolve their dispute?",
      options: [
        "Mediation",
        "Arbitration",
        "Litigation",
        "Negotiation through a court"
      ],
      answer: 0
    },

    {
      question_id: "ARB_CS_1_4_2",
      difficulty: "easy",
      chapter_name: ["Introduction"],
      question: "What was the primary role of the mediator in the case?",
      options: [
        "To impose a binding decision on Zenith and Apex",
        "To act as a judge and determine liability",
        "To facilitate communication and help the parties reach a mutually acceptable solution",
        "To represent Zenith against Apex"
      ],
      answer: 2
    },

    {
      question_id: "ARB_CS_1_4_3",
      difficulty: "easy",
      chapter_name: ["Introduction"],
      question: "Which principle is illustrated when the mediator explains that the parties are free to accept or reject a proposed solution?",
      options: [
        "Party self-determination",
        "Mandatory arbitration",
        "Judicial supremacy",
        "Adversarial decision-making"
      ],
      answer: 0
    },

    {
      question_id: "ARB_CS_1_4_4",
      difficulty: "hard",
      chapter_name: ["Introduction"],
      question: "Apex privately informs the mediator about its willingness to waive part of its claim and requests that the information not be immediately disclosed. Which principle is most directly applicable?",
      options: [
        "Confidentiality",
        "Finality of arbitration",
        "Compulsory negotiation",
        "Decision-making authority of the mediator"
      ],
      answer: 0
    },

    {
      question_id: "ARB_CS_1_4_5",
      difficulty: "hard",
      chapter_name: ["Introduction"],
      question: "Suppose the mediator believes Zenith is legally responsible for the entire delay and orders Zenith to pay Apex a specified amount. Why would this approach be inconsistent with the mediation process described in the chapter?",
      options: [
        "A mediator facilitates the process and does not have authority to impose a decision on the parties",
        "A mediator must always favour the party that made the first claim",
        "Mediation can only be conducted after an arbitral award",
        "A mediator is required to decide the dispute according to the law"
      ],
      answer: 0
    },

    {
      question_id: "ARB_CS_1_4_6",
      difficulty: "hard",
      chapter_name: ["Introduction"],
      question: "If the parties had instead proceeded directly to arbitration under the contract, which of the following would most clearly distinguish that process from their mediation?",
      options: [
        "The arbitrator would facilitate discussions but could not determine the dispute",
        "The arbitrator would act as a decision-maker and generally render a final and binding decision",
        "The parties would retain complete control over the outcome without any decision-maker",
        "The arbitrator could only suggest creative solutions without deciding the dispute"
      ],
      answer: 1
    }

  ]
},

{
  id: "ARB_CS_1_5",

  chapter: "Introduction",

  caseText: `
    <p><strong>CASE SCENARIO</strong></p>

    <p>
      Greenfield Foods Limited entered into a long-term supply agreement with Harvest
      Packaging Private Limited for the supply of food-grade packaging material. Over time,
      Greenfield alleged that several consignments had been delivered late and that some
      material did not meet the agreed specifications. Harvest denied that it was entirely
      responsible and stated that changes in Greenfield's purchase schedules and transportation
      difficulties had contributed to the problem.
    </p>

    <p>
      Both parties wanted to preserve their commercial relationship and avoid the cost and
      delay of conventional court proceedings. They first decided to negotiate directly.
      Representatives from both companies identified their respective interests, exchanged
      proposals and discussed possible concessions. Greenfield offered to accept revised
      delivery schedules, while Harvest offered a price adjustment for certain defective
      consignments.
    </p>

    <p>
      The negotiations, however, reached a deadlock because the parties disagreed about
      responsibility for earlier losses. They then agreed to involve a neutral conciliator.
      The conciliator met the representatives, encouraged communication and asked questions
      about the underlying commercial concerns of both parties.
    </p>

    <p>
      Unlike a neutral who merely facilitates communication, the conciliator actively explored
      possible settlement options and suggested that the parties consider a revised supply
      schedule, quality inspection procedure and limited compensation. The conciliator did
      not have authority to force either party to accept these suggestions.
    </p>

    <p>
      After further discussions, Greenfield and Harvest accepted a settlement covering future
      deliveries, quality checks and compensation for certain past losses. Both parties
      understood that the settlement resulted from their agreement and not from an imposed
      decision by the conciliator.
    </p>

    <p>
      The management of both companies considered the process successful because it was
      more flexible and economical than conventional litigation, allowed specialised
      commercial issues to be discussed, helped preserve their relationship and enabled them
      to develop a solution suited to their particular business requirements.
    </p>
  `,

  questions: [

    {
      question_id: "ARB_CS_1_5_1",
      difficulty: "easy",
      chapter_name: ["Introduction"],
      question: "Which ADR method did Greenfield and Harvest initially use without a neutral third party?",
      options: [
        "Negotiation",
        "Arbitration",
        "Conciliation",
        "Lok Adalat"
      ],
      answer: 0
    },

    {
      question_id: "ARB_CS_1_5_2",
      difficulty: "easy",
      chapter_name: ["Introduction"],
      question: "Which activity is specifically associated with the bargaining stage described in the case?",
      options: [
        "Exchange of proposals and concessions",
        "Imposition of an arbitral award",
        "Appointment of a judge",
        "Filing an appeal against a judgment"
      ],
      answer: 0
    },

    {
      question_id: "ARB_CS_1_5_3",
      difficulty: "easy",
      chapter_name: ["Introduction"],
      question: "Why did the parties decide to involve a conciliator?",
      options: [
        "Their direct negotiations had reached a deadlock",
        "They wanted the conciliator to impose a punishment",
        "They were required to abandon all negotiations",
        "They wanted to start a criminal proceeding"
      ],
      answer: 0
    },

    {
      question_id: "ARB_CS_1_5_4",
      difficulty: "hard",
      chapter_name: ["Introduction"],
      question: "The conciliator actively suggested a revised supply schedule, quality inspection procedure and compensation arrangement. What does this best demonstrate about the role of a conciliator compared with a mediator?",
      options: [
        "A conciliator may take a more proactive role and suggest possible solutions",
        "A conciliator has authority to impose a binding decision",
        "A conciliator must decide which party is legally liable",
        "A conciliator acts as a judge throughout the proceedings"
      ],
      answer: 0
    },

    {
      question_id: "ARB_CS_1_5_5",
      difficulty: "hard",
      chapter_name: ["Introduction"],
      question: "Suppose Harvest rejects every settlement suggestion made by the conciliator. Which statement is most appropriate based on the facts of the case?",
      options: [
        "The conciliator can impose the most reasonable suggestion on Harvest",
        "Harvest cannot be forced by the conciliator to accept a proposed solution",
        "The rejection automatically becomes an arbitral award",
        "Greenfield can treat the conciliator's suggestion as a court decree"
      ],
      answer: 1
    },

    {
      question_id: "ARB_CS_1_5_6",
      difficulty: "hard",
      chapter_name: ["Introduction"],
      question: "Which combination of advantages of ADR is most clearly reflected in the final paragraph of the case?",
      options: [
        "Flexibility, cost and time efficiency, preservation of relationships and tailored solutions",
        "Compulsory litigation, strict procedural rules and public hearings",
        "Criminal punishment, judicial appeal and formal evidence procedures",
        "Mandatory decision-making, lengthy proceedings and increased litigation costs"
      ],
      answer: 0
    }

  ]
},
  {
    id: "ARB_ind_1_1",
    difficulty: "easy",
    chapter: "Introduction",
    question: "Which of the following is an Alternative Dispute Resolution (ADR) mechanism?",
    options: [
      "Arbitration",
      "Criminal prosecution",
      "Parliamentary proceedings",
      "Tax assessment"
    ],
    answer: 0
  },

  {
    id: "ARB_ind_1_2",
    difficulty: "easy",
    chapter: "Introduction",
    question: "Arbitration involves a neutral third party who generally acts as a:",
    options: [
      "Decision-maker",
      "Witness",
      "Complainant",
      "Negotiator for one party"
    ],
    answer: 0
  },

  {
    id: "ARB_ind_1_3",
    difficulty: "easy",
    chapter: "Introduction",
    question: "Which ADR mechanism primarily aims to facilitate communication between disputing parties without imposing a decision?",
    options: [
      "Mediation",
      "Arbitration",
      "Litigation",
      "Criminal trial"
    ],
    answer: 0
  },

  {
    id: "ARB_ind_1_4",
    difficulty: "easy",
    chapter: "Introduction",
    question: "Which of the following is a key feature of arbitration?",
    options: [
      "The arbitrator renders a binding decision",
      "The parties must always reach a settlement",
      "No neutral third party is involved",
      "The process can only be conducted in a court"
    ],
    answer: 0
  },

  {
    id: "ARB_ind_1_5",
    difficulty: "easy",
    chapter: "Introduction",
    question: "Which ADR mechanism normally takes place through direct discussions between the disputing parties without the intervention of a third party?",
    options: [
      "Negotiation",
      "Arbitration",
      "Conciliation",
      "Adjudication"
    ],
    answer: 0
  },

  {
    id: "ARB_ind_1_6",
    difficulty: "easy",
    chapter: "Introduction",
    question: "In mediation, the final decision-making power primarily remains with:",
    options: [
      "The parties",
      "The mediator",
      "The court",
      "The conciliator"
    ],
    answer: 0
  },

  {
    id: "ARB_ind_1_7",
    difficulty: "easy",
    chapter: "Introduction",
    question: "Which principle requires a mediator to avoid favouring either party?",
    options: [
      "Impartiality and neutrality",
      "Bargaining",
      "Finality",
      "Adversarial decision-making"
    ],
    answer: 0
  },

  {
    id: "ARB_ind_1_8",
    difficulty: "easy",
    chapter: "Introduction",
    question: "Which principle is considered a foundation of the mediation process?",
    options: [
      "Confidentiality",
      "Punishment",
      "Compulsory adjudication",
      "Public disclosure"
    ],
    answer: 0
  },

  {
    id: "ARB_ind_1_9",
    difficulty: "easy",
    chapter: "Introduction",
    question: "What is the primary purpose of mediation?",
    options: [
      "To help parties reach a mutually acceptable solution",
      "To impose a binding decision on the parties",
      "To punish the party responsible for the dispute",
      "To replace the judicial system completely"
    ],
    answer: 0
  },

  {
    id: "ARB_ind_1_10",
    difficulty: "easy",
    chapter: "Introduction",
    question: "Which of the following is a stage of the mediation process?",
    options: [
      "Private discussion with parties",
      "Criminal sentencing",
      "Appeal against judgment",
      "Execution of punishment"
    ],
    answer: 0
  },

  {
    id: "ARB_ind_1_11",
    difficulty: "easy",
    chapter: "Introduction",
    question: "During which stage of mediation do parties exchange views and identify areas of disagreement and common ground together?",
    options: [
      "Joint discussion",
      "Closure",
      "Agreement",
      "Preparation of appeal"
    ],
    answer: 0
  },

  {
    id: "ARB_ind_1_12",
    difficulty: "easy",
    chapter: "Introduction",
    question: "Which of the following is an important role of a mediator?",
    options: [
      "Facilitating communication",
      "Imposing a judgment",
      "Punishing the defaulting party",
      "Acting as an advocate for one party"
    ],
    answer: 0
  },

  {
    id: "ARB_ind_1_13",
    difficulty: "easy",
    chapter: "Introduction",
    question: "Which of the following is a principle of negotiation?",
    options: [
      "Flexibility",
      "Compulsory adjudication",
      "Judicial punishment",
      "Mandatory third-party decision"
    ],
    answer: 0
  },

  {
    id: "ARB_ind_1_14",
    difficulty: "easy",
    chapter: "Introduction",
    question: "Which is generally the first stage in the negotiation process?",
    options: [
      "Preparation",
      "Closure",
      "Appeal",
      "Arbitral award"
    ],
    answer: 0
  },

  {
    id: "ARB_ind_1_15",
    difficulty: "easy",
    chapter: "Introduction",
    question: "What is the main activity during the bargaining and concession stage of negotiation?",
    options: [
      "Exchanging proposals and making compromises",
      "Issuing a binding judgment",
      "Appointing a judge",
      "Conducting a criminal investigation"
    ],
    answer: 0
  },

  {
    id: "ARB_ind_1_16",
    difficulty: "easy",
    chapter: "Introduction",
    question: "Lok Adalat literally means:",
    options: [
      "People's Court",
      "Local Court",
      "District Court",
      "Commercial Court"
    ],
    answer: 0
  },

  {
    id: "ARB_ind_1_17",
    difficulty: "easy",
    chapter: "Introduction",
    question: "Lok Adalats primarily seek to:",
    options: [
      "Facilitate speedy settlement of disputes",
      "Increase court litigation",
      "Impose criminal punishment",
      "Replace all courts"
    ],
    answer: 0
  },

  {
    id: "ARB_ind_1_18",
    difficulty: "easy",
    chapter: "Introduction",
    question: "Under which legislation do Lok Adalats operate?",
    options: [
      "Legal Services Authorities Act, 1987",
      "Companies Act, 2013",
      "Indian Contract Act, 1872",
      "Companies (Amendment) Act, 2020"
    ],
    answer: 0
  },

  {
    id: "ARB_ind_1_19",
    difficulty: "easy",
    chapter: "Introduction",
    question: "Which of the following is an advantage of ADR?",
    options: [
      "It can save time and costs",
      "It always requires lengthy court proceedings",
      "It increases procedural complexity",
      "It necessarily requires a public trial"
    ],
    answer: 0
  },

  {
    id: "ARB_ind_1_20",
    difficulty: "easy",
    chapter: "Introduction",
    question: "Which ADR mechanism involves a neutral person known as a conciliator who may actively suggest possible solutions?",
    options: [
      "Conciliation",
      "Negotiation",
      "Litigation",
      "Arbitration"
    ],
    answer: 0
  },
  {
    id: "ARB_ind_1_21",
    difficulty: "medium",
    chapter: "Introduction",
    question: "A party wants a dispute to be decided by a neutral third party, with the decision generally being final and binding. Which ADR mechanism is most appropriate?",
    options: [
      "Mediation",
      "Negotiation",
      "Arbitration",
      "Conciliation"
    ],
    answer: 2
  },

  {
    id: "ARB_ind_1_22",
    difficulty: "medium",
    chapter: "Introduction",
    question: "Which statement best distinguishes mediation from arbitration?",
    options: [
      "Mediation always involves a court, whereas arbitration does not",
      "The mediator facilitates resolution, whereas the arbitrator acts as a decision-maker",
      "The mediator gives a binding decision, whereas the arbitrator only suggests solutions",
      "Mediation is compulsory, whereas arbitration is always voluntary"
    ],
    answer: 1
  },

  {
    id: "ARB_ind_1_23",
    difficulty: "medium",
    chapter: "Introduction",
    question: "During mediation, one party asks the mediator to decide which party is legally correct. What should the mediator primarily do?",
    options: [
      "Impose a decision after examining the evidence",
      "Refer the matter directly to a court",
      "Facilitate discussions without assuming the decision-making role",
      "Issue an arbitral award"
    ],
    answer: 2
  },

  {
    id: "ARB_ind_1_24",
    difficulty: "medium",
    chapter: "Introduction",
    question: "A mediator conducts separate private discussions with each party. The main purpose of such discussions is to:",
    options: [
      "Allow confidential communication and explore possible solutions",
      "Issue separate binding decisions against each party",
      "Replace the agreement between the parties",
      "Convert the mediation automatically into arbitration"
    ],
    answer: 0
  },

  {
    id: "ARB_ind_1_25",
    difficulty: "medium",
    chapter: "Introduction",
    question: "Which of the following situations would most directly violate the principle of impartiality and neutrality in mediation?",
    options: [
      "The mediator encourages both parties to communicate",
      "The mediator helps parties identify common interests",
      "The mediator favours one party and attempts to secure an outcome for that party",
      "The mediator conducts separate discussions with both parties"
    ],
    answer: 2
  },

  {
    id: "ARB_ind_1_26",
    difficulty: "medium",
    chapter: "Introduction",
    question: "Which sequence correctly represents the main stages of mediation described in the chapter?",
    options: [
      "Agreement → Introduction → Joint discussion → Closure → Negotiation",
      "Introduction and opening statements → Joint discussion → Private discussion → Negotiation and problem-solving → Agreement → Closure",
      "Private discussion → Arbitration → Agreement → Appeal → Closure",
      "Negotiation → Arbitration → Joint discussion → Agreement → Appeal"
    ],
    answer: 1
  },

  {
    id: "ARB_ind_1_27",
    difficulty: "medium",
    chapter: "Introduction",
    question: "A mediator helps two parties generate several unconventional settlement options that address the interests of both sides. Which role of the mediator is primarily demonstrated?",
    options: [
      "Decision-maker",
      "Creator",
      "Judge",
      "Adjudicator"
    ],
    answer: 1
  },

  {
    id: "ARB_ind_1_28",
    difficulty: "medium",
    chapter: "Introduction",
    question: "Which statement correctly describes negotiation?",
    options: [
      "It necessarily requires intervention by a neutral third party",
      "It is generally a non-binding process involving discussions between the parties to reach a settlement",
      "It always results in a decision enforceable as an arbitral award",
      "It requires a mediator to approve every concession"
    ],
    answer: 1
  },

  {
    id: "ARB_ind_1_29",
    difficulty: "medium",
    chapter: "Introduction",
    question: "A company enters negotiations after analysing its priorities, interests and possible areas of compromise. Which stage of negotiation is being described?",
    options: [
      "Closure and agreement",
      "Bargaining and concession",
      "Preparation",
      "Opening statements"
    ],
    answer: 2
  },

  {
    id: "ARB_ind_1_30",
    difficulty: "medium",
    chapter: "Introduction",
    question: "During negotiation, two parties exchange proposals and gradually modify their demands to reach acceptable terms. This is primarily part of:",
    options: [
      "Preparation",
      "Bargaining and concession",
      "Closure only",
      "Mediation"
    ],
    answer: 1
  },

  {
    id: "ARB_ind_1_31",
    difficulty: "medium",
    chapter: "Introduction",
    question: "Which characteristic of negotiation allows the process to be adapted to the particular nature of a dispute?",
    options: [
      "Flexibility",
      "Finality",
      "Mandatory adjudication",
      "Judicial supervision"
    ],
    answer: 0
  },

  {
    id: "ARB_ind_1_32",
    difficulty: "medium",
    chapter: "Introduction",
    question: "A negotiator remains calm during a highly emotional dispute, understands the concerns of both sides and maintains a constructive atmosphere. Which quality is most directly demonstrated?",
    options: [
      "Legal authority",
      "High emotional intelligence",
      "Arbitral power",
      "Judicial independence"
    ],
    answer: 1
  },

  {
    id: "ARB_ind_1_33",
    difficulty: "medium",
    chapter: "Introduction",
    question: "Which statement best distinguishes conciliation from negotiation?",
    options: [
      "Conciliation may involve a neutral conciliator, whereas negotiation generally involves direct discussions between the parties",
      "Negotiation always results in a binding arbitral award, whereas conciliation does not",
      "Conciliation cannot involve communication between the parties",
      "Negotiation requires a conciliator to suggest every solution"
    ],
    answer: 0
  },

  {
    id: "ARB_ind_1_34",
    difficulty: "medium",
    chapter: "Introduction",
    question: "A conciliator suggests a possible compromise after understanding the interests of both parties. Which statement is most appropriate?",
    options: [
      "The conciliator is acting beyond the scope of conciliation because only parties may speak",
      "The conciliator may take a more proactive role and suggest possible solutions",
      "The suggestion automatically becomes binding on both parties",
      "The conciliator has thereby converted the process into arbitration"
    ],
    answer: 1
  },

  {
    id: "ARB_ind_1_35",
    difficulty: "medium",
    chapter: "Introduction",
    question: "Which statement correctly distinguishes the decision-making authority in conciliation and arbitration?",
    options: [
      "Both conciliator and arbitrator impose binding decisions",
      "Neither conciliator nor arbitrator has any role in the resolution",
      "An arbitrator has decision-making authority, whereas a conciliator assists parties in reaching an agreement",
      "A conciliator decides the dispute, whereas an arbitrator only facilitates communication"
    ],
    answer: 2
  },

  {
    id: "ARB_ind_1_36",
    difficulty: "medium",
    chapter: "Introduction",
    question: "Which of the following is most closely associated with the collaborative nature of mediation?",
    options: [
      "The mediator imposes the final outcome",
      "The parties work toward a mutually acceptable solution while retaining control over the outcome",
      "The arbitrator determines liability based on evidence",
      "The court imposes a settlement on the parties"
    ],
    answer: 1
  },

  {
    id: "ARB_ind_1_37",
    difficulty: "medium",
    chapter: "Introduction",
    question: "Which of the following is an important reason why businesses may prefer ADR over conventional litigation?",
    options: [
      "ADR necessarily eliminates every possibility of disagreement",
      "ADR can provide procedural flexibility and save time and resources",
      "ADR always provides unlimited rights of appeal",
      "ADR requires all disputes to be decided publicly"
    ],
    answer: 1
  },

  {
    id: "ARB_ind_1_38",
    difficulty: "medium",
    chapter: "Introduction",
    question: "A dispute is referred to a Lok Adalat with the objective of achieving a speedy settlement. Which feature of Lok Adalats is most relevant?",
    options: [
      "They focus on facilitating settlement through ADR",
      "They operate exclusively as criminal courts",
      "They require an arbitrator to impose a decision in every matter",
      "They prohibit participation by the disputing parties"
    ],
    answer: 0
  },

  {
    id: "ARB_ind_1_39",
    difficulty: "medium",
    chapter: "Introduction",
    question: "Which of the following is NOT a feature normally associated with arbitration as described in the chapter?",
    options: [
      "Choice of decision-maker by the disputing parties",
      "Privacy and confidentiality",
      "A neutral third party acting as decision-maker",
      "The parties always retain complete control over the final decision"
    ],
    answer: 3
  },

  {
    id: "ARB_ind_1_40",
    difficulty: "medium",
    chapter: "Introduction",
    question: "A dispute resolution process is designed to preserve commercial relationships by allowing parties to develop their own solution rather than having a decision imposed upon them. Which ADR mechanism best reflects this approach?",
    options: [
      "Mediation",
      "Arbitration",
      "Adjudication",
      "Conventional litigation"
    ],
    answer: 0
  },
  {
    id: "ARB_ind_1_41",
    difficulty: "hard",
    chapter: "Introduction",
    question: "A dispute resolution process involves a neutral third party who hears the parties, considers the evidence and arguments, and has authority to render a final and binding decision. Which ADR mechanism is being described?",
    options: [
      "Mediation",
      "Negotiation",
      "Arbitration",
      "Conciliation"
    ],
    answer: 2
  },

  {
    id: "ARB_ind_1_42",
    difficulty: "hard",
    chapter: "Introduction",
    question: "During a mediation, the mediator believes that one party's proposed settlement is clearly better and begins persuading the other party to accept it. Which fundamental principle is most directly affected?",
    options: [
      "Flexibility",
      "Impartiality and neutrality",
      "Bargaining and concession",
      "Finality of arbitration"
    ],
    answer: 1
  },

  {
    id: "ARB_ind_1_43",
    difficulty: "hard",
    chapter: "Introduction",
    question: "X and Y agree to mediation. During a private session, X reveals sensitive information to the mediator and specifically requests that it not be disclosed to Y. The mediator later discloses the information to Y without justification. Which principle has been primarily compromised?",
    options: [
      "Mutual agreement",
      "Confidentiality",
      "Flexibility",
      "Decision-making authority"
    ],
    answer: 1
  },

  {
    id: "ARB_ind_1_44",
    difficulty: "hard",
    chapter: "Introduction",
    question: "A mediator has completed the opening statements and joint discussion. The mediator now meets each party separately to understand concerns that the parties are unwilling to discuss in front of each other. Which stage is most directly involved?",
    options: [
      "Agreement",
      "Closure",
      "Private discussion with parties",
      "Bargaining and concession"
    ],
    answer: 2
  },

  {
    id: "ARB_ind_1_45",
    difficulty: "hard",
    chapter: "Introduction",
    question: "A mediator identifies several possible solutions but leaves it to the disputing parties to decide whether any of them should be accepted. Which combination best describes the mediator's role?",
    options: [
      "Decision-maker and adjudicator",
      "Facilitator and creator of possible solutions",
      "Judge and enforcement officer",
      "Arbitrator and negotiator for one party"
    ],
    answer: 1
  },

  {
    id: "ARB_ind_1_46",
    difficulty: "hard",
    chapter: "Introduction",
    question: "Two parties participate in mediation but cannot agree on any settlement despite several proposals made during the process. Which statement best reflects the nature of mediation?",
    options: [
      "The mediator must impose the most reasonable proposal",
      "The mediator must convert the process into arbitration",
      "The parties retain control over whether to accept a settlement",
      "The party making the first proposal automatically becomes bound by it"
    ],
    answer: 2
  },

  {
    id: "ARB_ind_1_47",
    difficulty: "hard",
    chapter: "Introduction",
    question: "A company chooses arbitration instead of mediation because it wants the dispute to be determined by a neutral third party rather than leaving the final outcome entirely to the parties. Which feature of arbitration supports this choice?",
    options: [
      "The arbitrator facilitates communication but cannot decide the dispute",
      "The arbitrator has authority to render a final and binding decision",
      "The parties must personally negotiate without assistance",
      "The conciliator suggests possible solutions without decision-making authority"
    ],
    answer: 1
  },

  {
    id: "ARB_ind_1_48",
    difficulty: "hard",
    chapter: "Introduction",
    question: "A dispute is being resolved through negotiation. The parties first analyse their interests and priorities, then exchange proposals and concessions, and finally document the terms accepted by both sides. Which sequence correctly identifies the principal stages involved?",
    options: [
      "Preparation → Bargaining and concession → Closure and agreement",
      "Closure → Preparation → Bargaining and concession",
      "Bargaining → Arbitration → Preparation",
      "Private discussion → Arbitration → Closure"
    ],
    answer: 0
  },

  {
    id: "ARB_ind_1_49",
    difficulty: "hard",
    chapter: "Introduction",
    question: "During negotiations, one party makes a concession only after the other party agrees to modify its delivery schedule. Which principle of negotiation is most clearly demonstrated?",
    options: [
      "Mutual agreement through give-and-take",
      "Compulsory adjudication",
      "Impartiality of a neutral third party",
      "Finality of an arbitral award"
    ],
    answer: 0
  },

  {
    id: "ARB_ind_1_50",
    difficulty: "hard",
    chapter: "Introduction",
    question: "A negotiator understands the legal position of the client but repeatedly reacts aggressively to the other party's emotional statements, causing discussions to break down. Which quality identified in the chapter is most lacking?",
    options: [
      "High emotional intelligence",
      "Arbitral authority",
      "Judicial independence",
      "Confidentiality"
    ],
    answer: 0
  },

  {
    id: "ARB_ind_1_51",
    difficulty: "hard",
    chapter: "Introduction",
    question: "Which situation most clearly distinguishes conciliation from mediation as described in the chapter?",
    options: [
      "The neutral merely assists parties in communicating and leaves all solutions to them",
      "The neutral actively participates in the resolution process and may suggest possible solutions",
      "The neutral imposes a binding decision after hearing evidence",
      "The parties negotiate directly without any neutral third party"
    ],
    answer: 1
  },

  {
    id: "ARB_ind_1_52",
    difficulty: "hard",
    chapter: "Introduction",
    question: "A conciliator proposes that two parties consider a revised payment schedule and partial compensation. One party rejects the proposal. Which statement is most consistent with the chapter?",
    options: [
      "The conciliator can impose the proposal because it was professionally suggested",
      "The proposal automatically becomes an arbitral award",
      "The party may reject the proposal because the conciliator does not possess decision-making authority",
      "The conciliator must immediately decide which party is legally liable"
    ],
    answer: 2
  },

  {
    id: "ARB_ind_1_53",
    difficulty: "hard",
    chapter: "Introduction",
    question: "A dispute-resolution process begins with direct discussions between two companies. After the discussions fail, they appoint a neutral who actively facilitates communication and suggests possible solutions, but cannot impose an outcome. Which sequence best describes the processes?",
    options: [
      "Negotiation followed by conciliation",
      "Mediation followed by arbitration",
      "Arbitration followed by negotiation",
      "Conciliation followed by litigation"
    ],
    answer: 0
  },

  {
    id: "ARB_ind_1_54",
    difficulty: "hard",
    chapter: "Introduction",
    question: "Which combination correctly distinguishes arbitration, mediation and negotiation?",
    options: [
      "Arbitration: binding decision by neutral; Mediation: facilitated party-controlled resolution; Negotiation: direct discussions generally without a neutral",
      "Arbitration: direct negotiation; Mediation: binding decision; Negotiation: mandatory third-party determination",
      "Arbitration: non-binding suggestions; Mediation: judicial decision; Negotiation: compulsory settlement",
      "Arbitration: no third party; Mediation: arbitrator decides; Negotiation: court determines outcome"
    ],
    answer: 0
  },

  {
    id: "ARB_ind_1_55",
    difficulty: "hard",
    chapter: "Introduction",
    question: "A company wants to resolve a commercial dispute while preserving its relationship with the other party. It wants the parties themselves to develop a customised solution and does not want a neutral person to impose an outcome. Which ADR mechanism most closely fits these requirements?",
    options: [
      "Arbitration",
      "Mediation",
      "Adjudication",
      "Conventional litigation"
    ],
    answer: 1
  },

  {
    id: "ARB_ind_1_56",
    difficulty: "hard",
    chapter: "Introduction",
    question: "A dispute is referred to an ADR mechanism because the parties want specialised expertise, privacy, procedural flexibility and a resolution without the burden of a conventional trial. Which statement best captures the advantages being relied upon?",
    options: [
      "ADR can provide flexibility, confidentiality, specialised expertise and savings in time and cost",
      "ADR necessarily requires a public trial and strict court procedures",
      "ADR eliminates the need for parties to participate in the resolution",
      "ADR is useful only when the dispute involves criminal liability"
    ],
    answer: 0
  },

  {
    id: "ARB_ind_1_57",
    difficulty: "hard",
    chapter: "Introduction",
    question: "A dispute is referred to a Lok Adalat with the expectation that the parties will participate in reaching a settlement. Which statement best reflects the objective of the Lok Adalat in the context of this chapter?",
    options: [
      "To facilitate an accessible and speedy settlement through ADR",
      "To conduct a conventional criminal trial",
      "To replace every existing court in India",
      "To ensure that every dispute is decided by an arbitrator"
    ],
    answer: 0
  },

  {
    id: "ARB_ind_1_58",
    difficulty: "hard",
    chapter: "Introduction",
    question: "Which situation best illustrates why ADR may help preserve relationships compared with a conventional adversarial process?",
    options: [
      "Parties collaborate to develop a solution addressing their respective interests",
      "One party is declared the winner after a lengthy trial",
      "A neutral third party imposes a solution without consulting either party",
      "The parties are prevented from communicating with each other"
    ],
    answer: 0
  },

  {
    id: "ARB_ind_1_59",
    difficulty: "hard",
    chapter: "Introduction",
    question: "A party argues that mediation should be rejected because the mediator cannot force the opposing party to accept a proposed settlement. Which response is most appropriate based on the nature of mediation?",
    options: [
      "The inability to impose a decision is consistent with mediation because the parties retain control over the outcome",
      "The mediator must always have authority to impose a binding decision",
      "Mediation is valid only when the mediator acts as an arbitrator",
      "The opposing party automatically becomes bound by every proposal made during mediation"
    ],
    answer: 0
  },

  {
    id: "ARB_ind_1_60",
    difficulty: "hard",
    chapter: "Introduction",
    question: "A dispute-resolution mechanism is described as less formal than arbitration, involves a neutral facilitator, allows the neutral to explore and suggest solutions, but does not give the neutral authority to impose a decision. Which mechanism most closely matches this description?",
    options: [
      "Conciliation",
      "Arbitration",
      "Litigation",
      "Adjudication"
    ],
    answer: 0
  }

];