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
  },

  // Chapter 2
  {
    id: "ARB_CH2_H_61",
    difficulty: "hard",
    chapter: "Fundamentals of Arbitration",
    question: "A contract between X Ltd. and Y Ltd. contains a clause stating: 'The parties may, if they mutually decide in future, refer any dispute to arbitration.' A dispute subsequently arises, but X wants arbitration while Y refuses. Which is the most appropriate conclusion?",
    options: [
      "A valid arbitration agreement exists because the word 'arbitration' has been expressly used",
      "A valid arbitration agreement exists because every commercial dispute can automatically be arbitrated",
      "There is no arbitration agreement because the clause requires a further agreement between the parties",
      "The court must appoint an arbitrator because one party has expressed its intention to arbitrate"
    ],
    answer: 2
  },

  {
    id: "ARB_CH2_H_62",
    difficulty: "hard",
    chapter: "Fundamentals of Arbitration",
    question: "P Ltd. and Q Ltd. enter into a contract containing a valid arbitration clause. Later, Q alleges that the main contract itself is void due to fraud and argues that the arbitration clause must consequently also be void. Which principle directly addresses Q's argument?",
    options: [
      "Doctrine of waiver",
      "Doctrine of separability",
      "Doctrine of merger",
      "Doctrine of res judicata"
    ],
    answer: 1
  },

  {
    id: "ARB_CH2_H_63",
    difficulty: "hard",
    chapter: "Fundamentals of Arbitration",
    question: "A written purchase order states that all terms and conditions are governed by a separately identified written document containing an arbitration clause. The purchase order and the reference are sufficient to incorporate that document into the contract. Which statement is correct?",
    options: [
      "The arbitration clause can never become part of the contract because it is contained in another document",
      "The reference may constitute an arbitration agreement if it is sufficient to make the arbitration clause part of the contract",
      "A separate arbitration agreement must always be executed after the purchase order",
      "The arbitration clause is invalid unless reproduced word-for-word in the purchase order"
    ],
    answer: 1
  },

  {
    id: "ARB_CH2_H_64",
    difficulty: "hard",
    chapter: "Fundamentals of Arbitration",
    question: "A party knows that the agreed procedure requires objections to be raised within 15 days. It notices a procedural violation but continues participating in the arbitration for three months without raising any objection. It later challenges the procedure on the same ground. Which principle is most relevant?",
    options: [
      "The party has automatically acquired a right to challenge because arbitration cannot be waived",
      "The party may be deemed to have waived its right to object",
      "The arbitral tribunal must ignore the delay because Section 4 applies only to courts",
      "The objection remains valid because participation can never amount to waiver"
    ],
    answer: 1
  },

  {
    id: "ARB_CH2_H_65",
    difficulty: "hard",
    chapter: "Fundamentals of Arbitration",
    question: "An arbitration is seated in India. The parties disagree about the applicable procedural framework, and one party argues that ordinary court procedures under the Code of Civil Procedure, 1908 must mandatorily be followed. Which statement is most accurate?",
    options: [
      "The arbitral tribunal is mandatorily bound by the entire Code of Civil Procedure",
      "The arbitral tribunal is bound by the Indian Evidence Act but not the Code of Civil Procedure",
      "The tribunal is not bound by the Code of Civil Procedure or the Indian Evidence Act and has procedural flexibility subject to the Act",
      "The tribunal must follow both statutes unless the High Court grants an exemption"
    ],
    answer: 2
  },

  {
    id: "ARB_CH2_H_66",
    difficulty: "hard",
    chapter: "Fundamentals of Arbitration",
    question: "A domestic arbitration has three arbitrators. The parties' agreement does not specify how many arbitrators should constitute the tribunal. What is the appropriate position under the Act?",
    options: [
      "The tribunal must consist of three arbitrators because arbitration normally requires an odd number",
      "The tribunal must consist of two arbitrators",
      "The tribunal will consist of a sole arbitrator",
      "The court must immediately appoint a three-member tribunal"
    ],
    answer: 2
  },

  {
    id: "ARB_CH2_H_67",
    difficulty: "hard",
    chapter: "Fundamentals of Arbitration",
    question: "A tribunal consists of three arbitrators. Two arbitrators agree on the liability of the respondent, while the third disagrees and gives a dissenting opinion. Unless otherwise agreed by the parties, what is the effect?",
    options: [
      "The dissenting arbitrator's view prevails because all arbitrators must agree",
      "The matter must automatically be referred to a court",
      "The majority decision prevails",
      "The tribunal must appoint an umpire in every case of disagreement"
    ],
    answer: 2
  },

  {
    id: "ARB_CH2_H_68",
    difficulty: "hard",
    chapter: "Fundamentals of Arbitration",
    question: "A claimant sends a letter demanding payment under a contract but does not request that the dispute be referred to arbitration. No other communication requesting arbitration is made. Can this letter, by itself, ordinarily be treated as commencement of arbitral proceedings under Section 21?",
    options: [
      "Yes, because every monetary claim automatically commences arbitration",
      "Yes, because the existence of a claim is sufficient to commence proceedings",
      "No, because commencement is linked to receipt of a request for the dispute to be referred to arbitration",
      "No, because arbitration proceedings can commence only after an arbitral award is issued"
    ],
    answer: 2
  },

  {
    id: "ARB_CH2_H_69",
    difficulty: "hard",
    chapter: "Fundamentals of Arbitration",
    question: "A respondent receives a valid request to refer a dispute to arbitration. The respondent does not file a statement of defence despite repeated opportunities. What is the correct consequence under Section 25?",
    options: [
      "The claimant's allegations are automatically deemed admitted",
      "The tribunal must terminate the proceedings",
      "The tribunal may continue the proceedings and may treat the respondent's right to file the defence as forfeited, but failure itself is not an admission",
      "The tribunal must refer the matter to the court"
    ],
    answer: 2
  },

  {
    id: "ARB_CH2_H_70",
    difficulty: "hard",
    chapter: "Fundamentals of Arbitration",
    question: "During arbitration, the claimant fails to appear at a scheduled oral hearing without sufficient cause. The respondent is present and evidence is already on record. Which action is the tribunal permitted to take?",
    options: [
      "It must automatically terminate the arbitration",
      "It must automatically rule in favour of the respondent",
      "It may continue the proceedings and make the award on the evidence before it",
      "It must transfer the dispute to a judicial authority"
    ],
    answer: 2
  },

  {
    id: "ARB_CH2_H_71",
    difficulty: "hard",
    chapter: "Fundamentals of Arbitration",
    question: "In a complex construction arbitration, the tribunal appoints an independent structural engineer to provide an expert report. The tribunal then allows both parties to question the expert during an oral hearing. Which statement is correct?",
    options: [
      "The tribunal acted beyond its powers because experts can never be appointed in arbitration",
      "The tribunal may appoint an expert and permit the parties to question the expert",
      "The expert's report automatically becomes binding on the tribunal",
      "The tribunal must delegate the final determination of technical liability to the expert"
    ],
    answer: 1
  },

  {
    id: "ARB_CH2_H_72",
    difficulty: "hard",
    chapter: "Fundamentals of Arbitration",
    question: "An arbitral tribunal requires evidence from a witness who refuses to attend voluntarily. The tribunal wants compulsory assistance to secure the witness's attendance. Which is the most appropriate course?",
    options: [
      "The tribunal can itself impose the same penalties as a civil court",
      "The tribunal may seek court assistance in taking evidence",
      "The tribunal must terminate the proceedings",
      "The claimant can personally issue a judicial summons"
    ],
    answer: 1
  },

  {
    id: "ARB_CH2_H_73",
    difficulty: "hard",
    chapter: "Fundamentals of Arbitration",
    question: "Parties have not agreed on the place of arbitration. The tribunal selects a location solely because it is convenient for the arbitrator, despite being highly inconvenient for both parties and witnesses. Which statement is most appropriate?",
    options: [
      "The tribunal has unlimited power to select any venue for its own convenience",
      "The tribunal should determine the place having regard to the circumstances, including convenience of the parties",
      "The claimant alone has the right to determine the place",
      "The place must automatically be where the arbitrator resides"
    ],
    answer: 1
  },

  {
    id: "ARB_CH2_H_74",
    difficulty: "hard",
    chapter: "Fundamentals of Arbitration",
    question: "A three-member arbitral tribunal issues an award signed by only two arbitrators. The award does not state any reason for the third arbitrator's omitted signature. Which conclusion is most appropriate under Section 31?",
    options: [
      "The award is valid because signatures of two arbitrators are always sufficient",
      "The award is valid because the dissenting arbitrator's signature is never relevant",
      "The majority signatures can be sufficient only if the reason for the omitted signature is stated",
      "The award is valid only if the third arbitrator later orally approves it"
    ],
    answer: 2
  },

  {
    id: "ARB_CH2_H_75",
    difficulty: "hard",
    chapter: "Fundamentals of Arbitration",
    question: "An arbitral tribunal passes an award but accidentally calculates the damages as ₹18,50,000 instead of ₹18,05,000 due to an obvious clerical/computational error. The affected party notices the mistake within the prescribed period. What remedy is most directly available?",
    options: [
      "A fresh arbitration must automatically be initiated",
      "The party may request correction of the computational error under Section 33",
      "The party must file a criminal complaint against the arbitrator",
      "The party can only challenge the entire award under Section 34"
    ],
    answer: 1
  },

  {
    id: "ARB_CH2_H_76",
    difficulty: "hard",
    chapter: "Fundamentals of Arbitration",
    question: "A final arbitral award deals with claims A, B and C but completely omits claim D, which had been submitted during the arbitration. The omission is discovered shortly after receipt of the award. Which remedy is specifically contemplated by the Act?",
    options: [
      "Request for an additional arbitral award",
      "Automatic termination of the arbitration agreement",
      "Mandatory appeal to the Supreme Court",
      "Fresh arbitration without reference to the original tribunal"
    ],
    answer: 0
  },

  {
    id: "ARB_CH2_H_77",
    difficulty: "hard",
    chapter: "Fundamentals of Arbitration",
    question: "During arbitration, both parties reach a settlement and request the tribunal to record the settlement as an award on agreed terms. Which statement is correct?",
    options: [
      "The tribunal can never record a settlement because arbitration must always end with adjudication",
      "The tribunal may record the settlement as an arbitral award on agreed terms if the statutory requirements are satisfied",
      "The settlement automatically becomes a court decree without any arbitral award",
      "The settlement necessarily terminates the arbitration agreement and invalidates all proceedings"
    ],
    answer: 1
  },

  {
    id: "ARB_CH2_H_78",
    difficulty: "hard",
    chapter: "Fundamentals of Arbitration",
    question: "A domestic arbitration is conducted in India. The parties have not agreed on the substantive law applicable to the dispute. Which law should ordinarily govern the tribunal's decision on the substance of the dispute?",
    options: [
      "The law of the country where the arbitrator resides",
      "The substantive law for the time being in force in India",
      "Any law selected unilaterally by the claimant",
      "Only international commercial arbitration rules"
    ],
    answer: 1
  },

  {
    id: "ARB_CH2_H_79",
    difficulty: "hard",
    chapter: "Fundamentals of Arbitration",
    question: "An arbitral award is received by a party on 1 January. The party intends to challenge the award under Section 34. The normal period expires, but the party seeks an extension. Which statement correctly reflects the limitation framework described in the chapter?",
    options: [
      "The court may extend the period indefinitely whenever sufficient cause exists",
      "The initial period is three months, with a possible further extension of up to thirty days, but not beyond that",
      "The party has six months as an automatic limitation period",
      "The challenge can be filed at any time before enforcement"
    ],
    answer: 1
  },

  {
    id: "ARB_CH2_H_80",
    difficulty: "hard",
    chapter: "Fundamentals of Arbitration",
    question: "A party files an application under Section 34 challenging an arbitral award but does not separately seek a stay of the award. What is the correct position regarding enforcement under Section 36?",
    options: [
      "Filing the Section 34 application automatically stays enforcement",
      "The award becomes permanently unenforceable once Section 34 is filed",
      "The filing of the Section 34 application by itself does not make the award unenforceable; a separate stay order is required",
      "The award can never be enforced until the Section 34 application is withdrawn"
    ],
    answer: 2
  },
  {
    id: "ARB_CH2_E_1",
    difficulty: "easy",
    chapter: "Fundamentals of Arbitration",
    question: "Which legislation primarily governs arbitration proceedings in India?",
    options: [
      "Indian Contract Act, 1872",
      "Arbitration and Conciliation Act, 1996",
      "Companies Act, 2013",
      "Code of Civil Procedure, 1908"
    ],
    answer: 1
  },

  {
    id: "ARB_CH2_E_2",
    difficulty: "easy",
    chapter: "Fundamentals of Arbitration",
    question: "Arbitration is generally considered as which type of dispute resolution mechanism?",
    options: [
      "Alternative Dispute Resolution",
      "Criminal procedure",
      "Legislative procedure",
      "Tax assessment procedure"
    ],
    answer: 0
  },

  {
    id: "ARB_CH2_E_3",
    difficulty: "easy",
    chapter: "Fundamentals of Arbitration",
    question: "Which of the following is a basic feature of arbitration?",
    options: [
      "The decision is always non-binding",
      "The parties cannot choose the arbitrator",
      "The proceedings can provide privacy and confidentiality",
      "Only criminal disputes can be referred to arbitration"
    ],
    answer: 2
  },

  {
    id: "ARB_CH2_E_4",
    difficulty: "easy",
    chapter: "Fundamentals of Arbitration",
    question: "Under Section 7, an arbitration agreement must be:",
    options: [
      "Oral only",
      "In writing",
      "Registered compulsorily in every case",
      "Approved by the Supreme Court"
    ],
    answer: 1
  },

  {
    id: "ARB_CH2_E_5",
    difficulty: "easy",
    chapter: "Fundamentals of Arbitration",
    question: "An arbitration agreement may be contained in:",
    options: [
      "Only a separate agreement",
      "Only a court order",
      "An arbitration clause in a contract or a separate agreement",
      "Only an arbitral award"
    ],
    answer: 2
  },

  {
    id: "ARB_CH2_E_6",
    difficulty: "easy",
    chapter: "Fundamentals of Arbitration",
    question: "Who generally decides the dispute submitted to arbitration?",
    options: [
      "Arbitrator or arbitral tribunal",
      "Police officer",
      "Company secretary",
      "Registrar of Companies"
    ],
    answer: 0
  },

  {
    id: "ARB_CH2_E_7",
    difficulty: "easy",
    chapter: "Fundamentals of Arbitration",
    question: "The legal place of arbitration is commonly referred to as the:",
    options: [
      "Forum",
      "Seat",
      "Registry",
      "Bench"
    ],
    answer: 1
  },

  {
    id: "ARB_CH2_E_8",
    difficulty: "easy",
    chapter: "Fundamentals of Arbitration",
    question: "Which principle gives parties flexibility to choose matters such as procedure, language and place of hearings?",
    options: [
      "Party autonomy",
      "Res judicata",
      "Natural justice only",
      "Judicial supremacy"
    ],
    answer: 0
  },

  {
    id: "ARB_CH2_E_9",
    difficulty: "easy",
    chapter: "Fundamentals of Arbitration",
    question: "An arbitral award is generally:",
    options: [
      "A binding decision of the arbitral tribunal",
      "A recommendation with no legal effect",
      "A police report",
      "A tax notice"
    ],
    answer: 0
  },

  {
    id: "ARB_CH2_E_10",
    difficulty: "easy",
    chapter: "Fundamentals of Arbitration",
    question: "Which section deals with waiver of the right to object?",
    options: [
      "Section 3",
      "Section 4",
      "Section 5",
      "Section 6"
    ],
    answer: 1
  },

  {
    id: "ARB_CH2_E_11",
    difficulty: "easy",
    chapter: "Fundamentals of Arbitration",
    question: "Section 5 of the Arbitration and Conciliation Act, 1996 deals with:",
    options: [
      "Extent of judicial intervention",
      "Appointment of experts",
      "Form of arbitral award",
      "Fast-track procedure"
    ],
    answer: 0
  },

  {
    id: "ARB_CH2_E_12",
    difficulty: "easy",
    chapter: "Fundamentals of Arbitration",
    question: "Under Section 18, parties to arbitral proceedings shall be:",
    options: [
      "Treated with equality",
      "Treated differently based on their financial position",
      "Allowed to appoint judges",
      "Required to follow criminal procedure"
    ],
    answer: 0
  },

  {
    id: "ARB_CH2_E_13",
    difficulty: "easy",
    chapter: "Fundamentals of Arbitration",
    question: "Under Section 19, the arbitral tribunal is not bound by:",
    options: [
      "The Arbitration and Conciliation Act, 1996",
      "The Code of Civil Procedure, 1908 and Indian Evidence Act, 1872",
      "The arbitration agreement",
      "The principle of natural justice"
    ],
    answer: 1
  },

  {
    id: "ARB_CH2_E_14",
    difficulty: "easy",
    chapter: "Fundamentals of Arbitration",
    question: "If the parties have not agreed on the language of arbitral proceedings, who determines the language?",
    options: [
      "The claimant",
      "The respondent",
      "The arbitral tribunal",
      "The police"
    ],
    answer: 2
  },

  {
    id: "ARB_CH2_E_15",
    difficulty: "easy",
    chapter: "Fundamentals of Arbitration",
    question: "Under Section 23, the party making a claim is known as the:",
    options: [
      "Respondent",
      "Claimant",
      "Defendant",
      "Appellant"
    ],
    answer: 1
  },

  {
    id: "ARB_CH2_E_16",
    difficulty: "easy",
    chapter: "Fundamentals of Arbitration",
    question: "Under Section 25, if the claimant fails to communicate the statement of claim without sufficient cause, the tribunal may:",
    options: [
      "Terminate the proceedings",
      "Automatically decide in favour of the claimant",
      "Appoint a new claimant",
      "Transfer the matter to the police"
    ],
    answer: 0
  },

  {
    id: "ARB_CH2_E_17",
    difficulty: "easy",
    chapter: "Fundamentals of Arbitration",
    question: "Which type of award deals finally with all issues submitted to arbitration?",
    options: [
      "Interim award",
      "Final award",
      "Temporary notice",
      "Procedural order"
    ],
    answer: 1
  },

  {
    id: "ARB_CH2_E_18",
    difficulty: "easy",
    chapter: "Fundamentals of Arbitration",
    question: "Under Section 31, an arbitral award must generally be:",
    options: [
      "Oral and unsigned",
      "In writing and signed by the members of the arbitral tribunal",
      "Approved by Parliament",
      "Signed only by the claimant"
    ],
    answer: 1
  },

  {
    id: "ARB_CH2_E_19",
    difficulty: "easy",
    chapter: "Fundamentals of Arbitration",
    question: "Which section provides for setting aside an arbitral award?",
    options: [
      "Section 30",
      "Section 31",
      "Section 34",
      "Section 36"
    ],
    answer: 2
  },

  {
    id: "ARB_CH2_E_20",
    difficulty: "easy",
    chapter: "Fundamentals of Arbitration",
    question: "Under Section 35, an arbitral award is generally:",
    options: [
      "Final and binding on the parties",
      "Only advisory",
      "Valid for one month only",
      "Automatically cancelled after being issued"
    ],
    answer: 0
  },
  {
    id: "ARB_CH2_E_21",
    difficulty: "easy",
    chapter: "Fundamentals of Arbitration",
    question: "The Arbitration and Conciliation Act, 1996 extends to:",
    options: [
      "Only Delhi",
      "Only selected States",
      "The whole of India",
      "Only international disputes"
    ],
    answer: 2
  },

  {
    id: "ARB_CH2_E_22",
    difficulty: "easy",
    chapter: "Fundamentals of Arbitration",
    question: "The Arbitration and Conciliation Act, 1996 came into force on:",
    options: [
      "15 August 1947",
      "26 January 1950",
      "22 August 1996",
      "1 April 1997"
    ],
    answer: 2
  },

  {
    id: "ARB_CH2_E_23",
    difficulty: "easy",
    chapter: "Fundamentals of Arbitration",
    question: "Which organisation's Model Law was considered while drafting the Arbitration and Conciliation Act, 1996?",
    options: [
      "WHO",
      "UNCITRAL",
      "WTO",
      "IMF"
    ],
    answer: 1
  },

  {
    id: "ARB_CH2_E_24",
    difficulty: "easy",
    chapter: "Fundamentals of Arbitration",
    question: "Which of the following is NOT normally a feature of arbitration?",
    options: [
      "Flexibility",
      "Confidentiality",
      "Party choice in selecting arbitrators",
      "Unlimited appeals as a matter of right"
    ],
    answer: 3
  },

  {
    id: "ARB_CH2_E_25",
    difficulty: "easy",
    chapter: "Fundamentals of Arbitration",
    question: "Under Section 2(1)(d), an 'Arbitral Tribunal' means:",
    options: [
      "Only a High Court",
      "Only a District Court",
      "A sole arbitrator or a panel of arbitrators",
      "A government department"
    ],
    answer: 2
  },

  {
    id: "ARB_CH2_E_26",
    difficulty: "easy",
    chapter: "Fundamentals of Arbitration",
    question: "An arbitral award includes:",
    options: [
      "Only a final award",
      "An interim award also",
      "Only a settlement agreement",
      "Only a court judgment"
    ],
    answer: 1
  },

  {
    id: "ARB_CH2_E_27",
    difficulty: "easy",
    chapter: "Fundamentals of Arbitration",
    question: "Which section defines 'Court' under the Arbitration and Conciliation Act, 1996?",
    options: [
      "Section 2(1)(e)",
      "Section 3",
      "Section 7",
      "Section 18"
    ],
    answer: 0
  },

  {
    id: "ARB_CH2_E_28",
    difficulty: "easy",
    chapter: "Fundamentals of Arbitration",
    question: "Which of the following can be an international commercial arbitration party under Section 2(1)(f)?",
    options: [
      "A foreign incorporated body corporate",
      "Only an Indian citizen",
      "Only an Indian company",
      "Only a State Government"
    ],
    answer: 0
  },

  {
    id: "ARB_CH2_E_29",
    difficulty: "easy",
    chapter: "Fundamentals of Arbitration",
    question: "Under Section 3, a written communication is generally deemed to have been received when:",
    options: [
      "It is delivered to the addressee",
      "It is drafted by the sender",
      "It is approved by the arbitrator",
      "It is uploaded on a public website"
    ],
    answer: 0
  },

  {
    id: "ARB_CH2_E_30",
    difficulty: "easy",
    chapter: "Fundamentals of Arbitration",
    question: "If the parties know about a procedural non-compliance but proceed without objection within the prescribed time, they may:",
    options: [
      "Lose the right to object",
      "Automatically win the arbitration",
      "Cancel the arbitration agreement",
      "Appoint a new court"
    ],
    answer: 0
  },

  {
    id: "ARB_CH2_E_31",
    difficulty: "easy",
    chapter: "Fundamentals of Arbitration",
    question: "Under Section 6, administrative assistance may be arranged by:",
    options: [
      "The parties or the arbitral tribunal with the consent of the parties",
      "Only the Supreme Court",
      "Only the police",
      "Only the claimant"
    ],
    answer: 0
  },

  {
    id: "ARB_CH2_E_32",
    difficulty: "easy",
    chapter: "Fundamentals of Arbitration",
    question: "An arbitration clause contained within the principal contract generally deals with:",
    options: [
      "Future disputes",
      "Only criminal offences",
      "Only disputes already decided by courts",
      "Tax assessments"
    ],
    answer: 0
  },

  {
    id: "ARB_CH2_E_33",
    difficulty: "easy",
    chapter: "Fundamentals of Arbitration",
    question: "An agreement entered into after a dispute has already arisen to refer that dispute to arbitration is commonly called:",
    options: [
      "Submission agreement",
      "Employment agreement",
      "Lease agreement",
      "Settlement deed only"
    ],
    answer: 0
  },

  {
    id: "ARB_CH2_E_34",
    difficulty: "easy",
    chapter: "Fundamentals of Arbitration",
    question: "Which doctrine treats the arbitration agreement as separate from the main contract?",
    options: [
      "Doctrine of separability",
      "Doctrine of merger",
      "Doctrine of estoppel",
      "Doctrine of frustration"
    ],
    answer: 0
  },

  {
    id: "ARB_CH2_E_35",
    difficulty: "easy",
    chapter: "Fundamentals of Arbitration",
    question: "Under Section 16, the arbitral tribunal can generally rule on:",
    options: [
      "Its own jurisdiction",
      "Parliamentary elections",
      "Criminal punishment",
      "Appointment of judges to courts"
    ],
    answer: 0
  },

  {
    id: "ARB_CH2_E_36",
    difficulty: "easy",
    chapter: "Fundamentals of Arbitration",
    question: "Which of the following is an essential requirement of a valid arbitration agreement?",
    options: [
      "Clear consent of the parties",
      "Approval by every court in India",
      "Registration with the police",
      "Presence of a government officer"
    ],
    answer: 0
  },

  {
    id: "ARB_CH2_E_37",
    difficulty: "easy",
    chapter: "Fundamentals of Arbitration",
    question: "Which of the following is generally NOT arbitrable according to the chapter?",
    options: [
      "Commercial contract dispute",
      "Supply contract dispute",
      "Criminal offence",
      "Construction contract dispute"
    ],
    answer: 2
  },

  {
    id: "ARB_CH2_E_38",
    difficulty: "easy",
    chapter: "Fundamentals of Arbitration",
    question: "Under Section 20, if parties have not agreed on the place of arbitration, the place is determined by:",
    options: [
      "The arbitral tribunal",
      "The claimant alone",
      "The respondent alone",
      "The police"
    ],
    answer: 0
  },

  {
    id: "ARB_CH2_E_39",
    difficulty: "easy",
    chapter: "Fundamentals of Arbitration",
    question: "Under Section 22, if parties do not agree on the language of arbitration, the language is determined by:",
    options: [
      "The arbitral tribunal",
      "The claimant alone",
      "The respondent alone",
      "The local police"
    ],
    answer: 0
  },

  {
    id: "ARB_CH2_E_40",
    difficulty: "easy",
    chapter: "Fundamentals of Arbitration",
    question: "A respondent in arbitration may submit a counter-claim when:",
    options: [
      "It falls within the scope of the arbitration agreement",
      "The claimant gives up the claim",
      "The court permits it in every case",
      "The arbitrator is replaced"
    ],
    answer: 0
  },
  {
    id: "ARB_CH2_M_41",
    difficulty: "medium",
    chapter: "Fundamentals of Arbitration",
    question: "A company and its supplier agree in writing that 'all disputes arising out of or relating to this contract shall be referred to arbitration.' A dispute later arises regarding payment. Which statement is correct?",
    options: [
      "The clause is not an arbitration agreement because the exact dispute was not identified",
      "The clause can constitute a valid arbitration agreement covering future disputes",
      "The clause is valid only if a court separately approves it",
      "The clause becomes valid only after the dispute arises"
    ],
    answer: 1
  },

  {
    id: "ARB_CH2_M_42",
    difficulty: "medium",
    chapter: "Fundamentals of Arbitration",
    question: "A contract states that disputes 'may be referred to arbitration if the parties subsequently agree.' One party later demands arbitration, but the other refuses. What is the main defect in the clause?",
    options: [
      "It does not contain the word 'tribunal'",
      "It does not specify the amount of the dispute",
      "It requires a further agreement before arbitration can take place",
      "It does not specify the arbitrator's qualification"
    ],
    answer: 2
  },

  {
    id: "ARB_CH2_M_43",
    difficulty: "medium",
    chapter: "Fundamentals of Arbitration",
    question: "A valid arbitration clause exists in a contract. The contract is subsequently breached by one party. What is the effect of the breach on the arbitration agreement?",
    options: [
      "The arbitration agreement automatically becomes invalid",
      "The arbitration agreement generally survives because of separability",
      "The arbitration agreement becomes void only if damages are claimed",
      "The arbitration agreement ends immediately upon breach"
    ],
    answer: 1
  },

  {
    id: "ARB_CH2_M_44",
    difficulty: "medium",
    chapter: "Fundamentals of Arbitration",
    question: "A principal contract containing an arbitration clause is replaced by a completely new contract between the same parties, and the new contract contains no arbitration clause. What is the likely effect if the original contract is novated?",
    options: [
      "The original arbitration clause necessarily continues forever",
      "The arbitration clause in the original contract generally stands extinguished with the novation",
      "The arbitration clause automatically becomes a court jurisdiction clause",
      "The arbitration clause becomes applicable to every future contract between the parties"
    ],
    answer: 1
  },

  {
    id: "ARB_CH2_M_45",
    difficulty: "medium",
    chapter: "Fundamentals of Arbitration",
    question: "A party receives a request to refer a particular dispute to arbitration on 10 August. The parties have not agreed on another commencement date. Under Section 21, the arbitral proceedings ordinarily commence on:",
    options: [
      "The date on which the original contract was signed",
      "The date on which the dispute first arose",
      "10 August, when the request was received by the respondent",
      "The date on which the arbitrator gives the first hearing notice"
    ],
    answer: 2
  },

  {
    id: "ARB_CH2_M_46",
    difficulty: "medium",
    chapter: "Fundamentals of Arbitration",
    question: "A claimant sends only a demand for payment to the respondent but does not request reference of the dispute to arbitration. Can this communication ordinarily be treated as the commencement of arbitral proceedings under Section 21?",
    options: [
      "Yes, every demand automatically commences arbitration",
      "Yes, if the amount demanded exceeds ₹1 lakh",
      "No, because a request for reference of the dispute to arbitration is required",
      "No, because arbitration can commence only after appointment of an arbitrator"
    ],
    answer: 2
  },

  {
    id: "ARB_CH2_M_47",
    difficulty: "medium",
    chapter: "Fundamentals of Arbitration",
    question: "Three arbitrators are appointed in a domestic arbitration. Two arbitrators support the claimant while the third supports the respondent. Unless otherwise agreed, whose decision will generally prevail?",
    options: [
      "The respondent's arbitrator because he represents the respondent",
      "The claimant's arbitrators because they form the majority",
      "The third arbitrator because he is presumed to be neutral",
      "The matter must automatically be decided by the court"
    ],
    answer: 1
  },

  {
    id: "ARB_CH2_M_48",
    difficulty: "medium",
    chapter: "Fundamentals of Arbitration",
    question: "During arbitration, an arbitrator privately obtains information from a third person concerning one party's business reputation and does not disclose this to the parties. Which principle is most directly affected?",
    options: [
      "Confidentiality and impartiality/natural justice",
      "Limitation only",
      "Fast-track procedure",
      "Enforcement of foreign awards"
    ],
    answer: 0
  },

  {
    id: "ARB_CH2_M_49",
    difficulty: "medium",
    chapter: "Fundamentals of Arbitration",
    question: "The parties have not agreed on the procedure to be followed in arbitration. Which statement is correct under Section 19?",
    options: [
      "The tribunal must strictly follow the Code of Civil Procedure",
      "The tribunal must strictly follow the Indian Evidence Act",
      "The tribunal may conduct the proceedings in the manner it considers appropriate, subject to the Act",
      "The proceedings automatically become invalid"
    ],
    answer: 2
  },

  {
    id: "ARB_CH2_M_50",
    difficulty: "medium",
    chapter: "Fundamentals of Arbitration",
    question: "Parties have not agreed upon the place of arbitration. The tribunal is required to determine the place. Which factor should it particularly consider?",
    options: [
      "Only the arbitrator's residence",
      "The convenience of the parties and circumstances of the case",
      "Only the claimant's preference",
      "Only the location of the court"
    ],
    answer: 1
  },

  {
    id: "ARB_CH2_M_51",
    difficulty: "medium",
    chapter: "Fundamentals of Arbitration",
    question: "The parties disagree about the language of arbitral proceedings. The tribunal determines that English will be used. Which of the following can ordinarily be covered by that determination?",
    options: [
      "Only oral arguments",
      "Only the final award",
      "Written statements, hearings, awards and other tribunal communications",
      "Only documents submitted by the claimant"
    ],
    answer: 2
  },

  {
    id: "ARB_CH2_M_52",
    difficulty: "medium",
    chapter: "Fundamentals of Arbitration",
    question: "A respondent fails to file its statement of defence without sufficient cause. What should the arbitral tribunal NOT do merely because of that failure?",
    options: [
      "Continue the proceedings",
      "Consider forfeiting the respondent's right to file the defence",
      "Treat the claimant's allegations as automatically admitted",
      "Proceed on the basis of available material"
    ],
    answer: 2
  },

  {
    id: "ARB_CH2_M_53",
    difficulty: "medium",
    chapter: "Fundamentals of Arbitration",
    question: "A claimant fails to submit its statement of claim within the prescribed time but establishes sufficient cause for the delay. Which statement is most appropriate?",
    options: [
      "The tribunal must terminate the proceedings in every case",
      "The existence of sufficient cause may prevent termination under Section 25(a)",
      "The respondent automatically wins",
      "The arbitration agreement becomes void"
    ],
    answer: 1
  },

  {
    id: "ARB_CH2_M_54",
    difficulty: "medium",
    chapter: "Fundamentals of Arbitration",
    question: "During an arbitration concerning structural defects, the tribunal appoints an expert to provide a technical report. The tribunal asks the expert to decide whether the respondent is legally liable. Is this appropriate?",
    options: [
      "Yes, because an expert can always decide the dispute",
      "Yes, provided the expert is technically qualified",
      "No, the tribunal may obtain expert assistance but cannot delegate its adjudicatory duty",
      "No, because experts cannot be appointed in arbitration"
    ],
    answer: 2
  },

  {
    id: "ARB_CH2_M_55",
    difficulty: "medium",
    chapter: "Fundamentals of Arbitration",
    question: "A party wants to compel the attendance of a witness who refuses to appear before the arbitral tribunal. Which provision provides a mechanism for court assistance in taking evidence?",
    options: [
      "Section 18",
      "Section 23",
      "Section 27",
      "Section 35"
    ],
    answer: 2
  },

  {
    id: "ARB_CH2_M_56",
    difficulty: "medium",
    chapter: "Fundamentals of Arbitration",
    question: "A three-member tribunal issues an award signed by two arbitrators. The award expressly states why the third arbitrator did not sign it. Which statement is correct?",
    options: [
      "The award can be valid because majority signatures may be sufficient when the reason for the omitted signature is stated",
      "The award is automatically invalid because all arbitrators must sign",
      "The award is invalid unless the court signs it",
      "The award becomes an interim award automatically"
    ],
    answer: 0
  },

  {
    id: "ARB_CH2_M_57",
    difficulty: "medium",
    chapter: "Fundamentals of Arbitration",
    question: "During arbitral proceedings, the parties reach a settlement and request the tribunal to record it as an award on agreed terms. What is the effect of such an award?",
    options: [
      "It has no legal effect",
      "It has the same status and effect as an arbitral award on the substance of the dispute",
      "It is merely a private contract with no arbitral status",
      "It automatically becomes a criminal order"
    ],
    answer: 1
  },

  {
    id: "ARB_CH2_M_58",
    difficulty: "medium",
    chapter: "Fundamentals of Arbitration",
    question: "An arbitral award contains an obvious typographical error. The party discovers it within 30 days of receiving the award. What may the party do under Section 33?",
    options: [
      "Request the arbitral tribunal to correct the error",
      "Only file a fresh suit",
      "Only approach the Supreme Court",
      "Automatically cancel the award"
    ],
    answer: 0
  },

  {
    id: "ARB_CH2_M_59",
    difficulty: "medium",
    chapter: "Fundamentals of Arbitration",
    question: "An award has omitted a claim that was actually presented during the arbitral proceedings. The party makes a proper request within 30 days of receiving the award. What remedy is specifically available?",
    options: [
      "Request for an additional arbitral award",
      "Automatic enforcement of the omitted claim",
      "Fresh appointment of the entire tribunal",
      "Automatic setting aside of the entire award"
    ],
    answer: 0
  },

  // CASE SCENARIO 1

  {
    case_id: "ARB_CH2_CS_01",

    caseText: `
      <p><b>Case Scenario:</b></p>

      <p>
      Zenith Components Limited entered into a five-year supply agreement with
      Orion Motors Private Limited for the supply of specialised automobile
      components. The agreement contained a clause stating that all disputes
      arising out of or relating to the agreement would be referred to arbitration.
      However, the agreement did not specify the place of arbitration.
      </p>

      <p>
      After two years, a dispute arose regarding the quality of certain components.
      Zenith claimed that Orion had rejected the components without sufficient
      justification and demanded compensation. Orion alleged that the components
      failed to meet the specifications agreed upon in the contract.
      </p>

      <p>
      Zenith sent a written communication to Orion requesting that the dispute be
      referred to arbitration. The communication was received by Orion on
      15 July 2026. The parties subsequently agreed to appoint three arbitrators,
      but could not agree on the place of arbitration.
      </p>

      <p>
      During the proceedings, Orion failed to submit its statement of defence within
      the prescribed period. Orion argued that this failure should automatically mean
      that Zenith's allegations were admitted. The tribunal rejected this argument
      and continued the proceedings.
      </p>

      <p>
      Later, the tribunal appointed an independent technical expert to examine
      whether the components supplied by Zenith met the contractual specifications.
      The expert submitted a report to the tribunal. Orion requested an opportunity
      to question the expert and examine the material relied upon by him.
      </p>
    `,

    questions: [

      {
        question_id: "ARB_CH2_CS01_Q1",
        difficulty: "easy",
        question: "When did the arbitral proceedings ordinarily commence, assuming there was no agreement between the parties regarding the commencement date?",
        options: [
          "When the original supply agreement was executed",
          "When the dispute regarding quality first arose",
          "15 July 2026, when Orion received the request to refer the dispute to arbitration",
          "When the three arbitrators were appointed"
        ],
        answer: 2
      },

      {
        question_id: "ARB_CH2_CS01_Q2",
        difficulty: "easy",
        question: "Since the parties could not agree on the place of arbitration, who should determine the place?",
        options: [
          "The claimant alone",
          "The respondent alone",
          "The arbitral tribunal, having regard to the circumstances including convenience of the parties",
          "The arbitrator's personal office"
        ],
        answer: 2
      },

      {
        question_id: "ARB_CH2_CS01_Q3",
        difficulty: "hard",
        question: "Orion fails to submit its statement of defence without sufficient cause. Which of the following correctly describes the tribunal's power?",
        options: [
          "Zenith's allegations automatically become admitted",
          "The tribunal must terminate the proceedings",
          "The tribunal may continue the proceedings and may forfeit Orion's right to file the defence, but the failure itself does not amount to admission",
          "The tribunal must issue an award entirely in favour of Zenith"
        ],
        answer: 2
      },

      {
        question_id: "ARB_CH2_CS01_Q4",
        difficulty: "hard",
        question: "The tribunal appoints an independent technical expert to examine whether the components complied with contractual specifications. Which statement is most appropriate?",
        options: [
          "The expert can finally determine liability between Zenith and Orion",
          "The expert can decide the dispute if both parties provide documents",
          "The expert may report on specific technical issues, but the tribunal retains the power to adjudicate the dispute",
          "The expert automatically becomes a member of the arbitral tribunal"
        ],
        answer: 2
      },

      {
        question_id: "ARB_CH2_CS01_Q5",
        difficulty: "hard",
        question: "Orion requests an opportunity to question the expert and examine the material provided to the expert. Which principle supports Orion's request?",
        options: [
          "An expert's report is always conclusive and cannot be questioned",
          "The parties may be given an opportunity to question the expert and examine relevant material relied upon for the report",
          "Only Zenith can question the expert because it initiated arbitration",
          "The request can be considered only after the final award"
        ],
        answer: 1
      }

    ]
  },


  // CASE SCENARIO 2

  {
    case_id: "ARB_CH2_CS_02",

    caseText: `
      <p><b>Case Scenario:</b></p>

      <p>
      Apex Infrastructure Limited entered into a construction contract with
      Bharat Developers Limited. The contract contained a written arbitration
      clause providing that disputes arising from the contract would be resolved
      through arbitration. The parties agreed to appoint a three-member arbitral
      tribunal.
      </p>

      <p>
      During the arbitration, both parties were given equal opportunity to submit
      documents and present their arguments. However, during the proceedings,
      one of the arbitrators privately contacted an engineer who had previously
      worked with Apex Infrastructure. The arbitrator obtained information about
      Apex's construction practices but did not disclose this communication to
      Bharat Developers.
      </p>

      <p>
      The tribunal subsequently appointed an expert to examine certain structural
      issues. Bharat Developers requested an oral hearing to question the expert,
      but the tribunal initially proposed deciding the matter entirely on the basis
      of documents.
      </p>

      <p>
      After completion of the pleadings, the tribunal proceeded with the matter.
      Two arbitrators agreed that Bharat Developers was liable for certain losses,
      while the third arbitrator disagreed. The majority subsequently issued a
      written award signed by the two majority arbitrators. The award also stated
      the reason for the third arbitrator's non-signature.
      </p>

      <p>
      After receiving the award, Bharat Developers discovered that one of its
      claims had not been adjudicated. It also noticed a typographical error in the
      amount mentioned in one paragraph of the award. Bharat Developers therefore
      considered approaching the arbitral tribunal for appropriate relief.
      </p>
    `,

    questions: [

      {
        question_id: "ARB_CH2_CS02_Q1",
        difficulty: "easy",
        question: "The decision of two out of three arbitrators will generally prevail because:",
        options: [
          "All decisions of an arbitral tribunal require unanimity",
          "A multi-member arbitral tribunal generally decides by majority",
          "The presiding arbitrator always has the final vote",
          "The court automatically supports the majority"
        ],
        answer: 1
      },

      {
        question_id: "ARB_CH2_CS02_Q2",
        difficulty: "easy",
        question: "A written arbitral award signed by two of three arbitrators can satisfy the signature requirement when:",
        options: [
          "The third arbitrator refuses to sign for any reason and no explanation is given",
          "The reason for the omitted signature is stated",
          "The parties subsequently sign the award",
          "The court signs the award"
        ],
        answer: 1
      },

      {
        question_id: "ARB_CH2_CS02_Q3",
        difficulty: "hard",
        question: "The arbitrator privately obtains information from an engineer connected with Apex without disclosing the communication to Bharat. Which fundamental principle is most directly affected?",
        options: [
          "Party autonomy regarding language",
          "Principles of equality, impartiality and natural justice",
          "Fast-track procedure",
          "Doctrine of separability",
        ],
        answer: 1
      },

      {
        question_id: "ARB_CH2_CS02_Q4",
        difficulty: "hard",
        question: "Bharat discovers that a claim submitted during the arbitration was completely omitted from the final award. What is the most appropriate remedy under Section 33, subject to its conditions?",
        options: [
          "Request the tribunal to make an additional arbitral award",
          "Request automatic cancellation of the arbitration agreement",
          "Treat the omitted claim as automatically rejected",
          "File a criminal complaint against the tribunal"
        ],
        answer: 0
      },

      {
        question_id: "ARB_CH2_CS02_Q5",
        difficulty: "hard",
        question: "Suppose Bharat also discovers a typographical error in the monetary amount stated in the award. Which remedy is specifically contemplated by Section 33?",
        options: [
          "Challenge the entire award under Section 34 immediately in every case",
          "Request the arbitral tribunal to correct the typographical or clerical error within the prescribed period",
          "Ask the opposing party to issue a corrected award",
          "The error can never be corrected once the award is signed"
        ],
        answer: 1
      }

    ]
  },

  // =========================================================
  // CASE SCENARIO 3
  // =========================================================

  {
    case_id: "ARB_CH2_CS_03",

    caseText: `
      <p><b>Case Scenario:</b></p>

      <p>
      Nova Engineering Limited entered into a written contract with Prime
      Industrial Solutions Limited for installation and maintenance of specialised
      machinery. The contract contained an arbitration clause stating that disputes
      arising out of the contract would be referred to a sole arbitrator mutually
      appointed by the parties.
      </p>

      <p>
      After installation of the machinery, Prime alleged that several machines were
      defective and withheld a portion of the payment. Nova denied the allegations
      and claimed that the machines had been damaged because Prime's employees
      had not followed the operating instructions.
      </p>

      <p>
      Nova sent a written notice to Prime requesting that the dispute be referred to
      arbitration. Prime received the notice but did not respond within the period
      specified in the agreement. Nova subsequently proposed the name of an
      arbitrator. Prime objected to the proposed arbitrator and stated that the
      arbitrator had previously provided consultancy services to Nova.
      </p>

      <p>
      Meanwhile, Prime argued that the arbitration clause had become invalid because
      the main contract had been terminated by Nova due to Prime's alleged failure
      to make payment. Nova argued that termination of the main contract did not
      prevent the arbitration clause from operating for disputes arising from the
      contract.
      </p>

      <p>
      During the proceedings, Prime also argued that the tribunal had no jurisdiction
      to determine whether the termination of the main contract was valid.
      The tribunal decided that it was competent to examine its own jurisdiction,
      including questions relating to the validity of the main contract.
      </p>
    `,

    questions: [

      {
        question_id: "ARB_CH2_CS03_Q1",
        difficulty: "easy",
        question: "What is the basic form of arbitration agreement contained in Nova and Prime's contract?",
        options: [
          "Submission agreement",
          "Arbitration clause",
          "Settlement award",
          "Additional award"
        ],
        answer: 1
      },

      {
        question_id: "ARB_CH2_CS03_Q2",
        difficulty: "easy",
        question: "Which party initially requested that the dispute be referred to arbitration?",
        options: [
          "Prime",
          "Nova",
          "The proposed arbitrator",
          "The court"
        ],
        answer: 1
      },

      {
        question_id: "ARB_CH2_CS03_Q3",
        difficulty: "hard",
        question: "Prime argues that termination of the main contract automatically destroys the arbitration clause. Which principle is most relevant?",
        options: [
          "Doctrine of separability generally treats the arbitration agreement as independent of the main contract",
          "Doctrine of waiver automatically terminates arbitration",
          "Section 18 requires termination of arbitration whenever the contract is terminated",
          "An arbitration clause can never survive any termination of a contract"
        ],
        answer: 0
      },

      {
        question_id: "ARB_CH2_CS03_Q4",
        difficulty: "hard",
        question: "The tribunal decides that it can determine its own jurisdiction, including issues concerning the validity of the main contract. Which principle supports this?",
        options: [
          "Party equality under Section 18",
          "Competence-competence under Section 16",
          "Confidentiality under Section 42",
          "Fast-track procedure under Section 29B"
        ],
        answer: 1
      },

      {
        question_id: "ARB_CH2_CS03_Q5",
        difficulty: "hard",
        question: "Prime objects to the proposed arbitrator because the arbitrator previously provided consultancy services to Nova. The objection primarily concerns:",
        options: [
          "The language of arbitration",
          "The independence and impartiality of the arbitrator",
          "The limitation period",
          "The place of arbitration"
        ],
        answer: 1
      }

    ]
  },


  // =========================================================
  // CASE SCENARIO 4
  // =========================================================

  {
    case_id: "ARB_CH2_CS_04",

    caseText: `
      <p><b>Case Scenario:</b></p>

      <p>
      Sunrise Pharmaceuticals Limited entered into a distribution agreement with
      Global Medico Private Limited. The agreement contained an arbitration clause
      and provided that the arbitration would be conducted in English. The parties
      did not specify whether the proceedings would be conducted through oral
      hearings or entirely on documents.
      </p>

      <p>
      A dispute arose when Global Medico alleged that Sunrise had failed to supply
      medicines according to the agreed delivery schedule. Sunrise denied the
      allegation and claimed that Global Medico had failed to provide the required
      purchase forecasts.
      </p>

      <p>
      The arbitral tribunal directed both parties to submit their statements of claim
      and defence. Global Medico submitted its statement within the prescribed
      period. Sunrise, however, failed to file its defence and did not provide any
      sufficient explanation for the delay.
      </p>

      <p>
      Global Medico then requested an oral hearing because it wanted to explain
      technical matters relating to the distribution chain. The tribunal initially
      proposed deciding the matter solely on the documents already submitted.
      Global Medico insisted that it should be allowed to present oral arguments.
      </p>

      <p>
      During the proceedings, Sunrise later submitted a counter-claim for damages.
      Global Medico objected, arguing that the counter-claim was outside the scope
      of the arbitration agreement. The tribunal examined the arbitration clause
      before deciding whether the counter-claim could be adjudicated.
      </p>
    `,

    questions: [

      {
        question_id: "ARB_CH2_CS04_Q1",
        difficulty: "easy",
        question: "What language was agreed upon for the arbitral proceedings?",
        options: [
          "Hindi",
          "English",
          "Any language selected by the claimant",
          "The language selected by the tribunal after the award"
        ],
        answer: 1
      },

      {
        question_id: "ARB_CH2_CS04_Q2",
        difficulty: "easy",
        question: "Which party filed the statement of claim within the prescribed period?",
        options: [
          "Sunrise Pharmaceuticals",
          "Global Medico",
          "Both parties",
          "Neither party"
        ],
        answer: 1
      },

      {
        question_id: "ARB_CH2_CS04_Q3",
        difficulty: "hard",
        question: "Sunrise fails to submit its statement of defence without sufficient cause. Which is the correct position?",
        options: [
          "The tribunal must automatically accept Global Medico's allegations as admitted",
          "The tribunal must terminate the proceedings",
          "The tribunal may continue the proceedings without treating Sunrise's failure as an admission",
          "The tribunal must refer the dispute to a civil court"
        ],
        answer: 2
      },

      {
        question_id: "ARB_CH2_CS04_Q4",
        difficulty: "hard",
        question: "Global Medico requests an oral hearing in ordinary arbitral proceedings. Which statement is correct?",
        options: [
          "The tribunal can never hold an oral hearing once documents have been submitted",
          "The tribunal should hold an oral hearing at an appropriate stage when requested by a party, unless the parties agreed that no oral hearing would be held",
          "An oral hearing requires approval from the High Court",
          "Only the respondent can request an oral hearing"
        ],
        answer: 1
      },

      {
        question_id: "ARB_CH2_CS04_Q5",
        difficulty: "hard",
        question: "Sunrise's counter-claim can be adjudicated by the tribunal only if:",
        options: [
          "The counter-claim is larger than the original claim",
          "The claimant gives unconditional consent",
          "The counter-claim falls within the scope of the arbitration agreement",
          "The counter-claim is filed after the final award"
        ],
        answer: 2
      }

    ]
  },


  // =========================================================
  // CASE SCENARIO 5
  // =========================================================

  {
    case_id: "ARB_CH2_CS_05",

    caseText: `
      <p><b>Case Scenario:</b></p>

      <p>
      Metro Construction Limited entered into an infrastructure development
      agreement with Eastern State Projects Limited. The agreement contained a
      valid arbitration clause. A three-member arbitral tribunal was constituted
      and the parties completed their pleadings.
      </p>

      <p>
      The dispute involved several issues, including delay in construction,
      additional expenditure and responsibility for certain design changes. After
      considering the evidence, the tribunal issued an interim award determining
      responsibility for the delay but left the question of the amount of damages
      to be decided later.
      </p>

      <p>
      Before the final award could be issued, the parties entered into negotiations
      and eventually settled all remaining disputes. They jointly requested the
      tribunal to record their settlement as an arbitral award on agreed terms.
      The tribunal examined the settlement and found no reason to reject it.
      </p>

      <p>
      The tribunal subsequently issued a written award containing the terms of the
      settlement. The award was signed by the required members of the tribunal and
      delivered to both parties.
      </p>

      <p>
      After receiving the award, Eastern State Projects noticed a calculation error
      in one of the figures stated in the award. It also realised that one claim
      submitted during the arbitration had not been dealt with in the award.
      Eastern State Projects wanted to approach the tribunal rather than immediately
      challenge the award before the court.
      </p>
    `,

    questions: [

      {
        question_id: "ARB_CH2_CS05_Q1",
        difficulty: "easy",
        question: "The first award determining responsibility for delay but leaving damages for later determination is best described as:",
        options: [
          "Final award",
          "Interim award",
          "Additional award",
          "Settlement award"
        ],
        answer: 1
      },

      {
        question_id: "ARB_CH2_CS05_Q2",
        difficulty: "easy",
        question: "When the parties settle the dispute during arbitration and request the tribunal to record the settlement as an award, the resulting award is generally called:",
        options: [
          "Interim award",
          "Foreign award",
          "Settlement award on agreed terms",
          "Additional award"
        ],
        answer: 2
      },

      {
        question_id: "ARB_CH2_CS05_Q3",
        difficulty: "hard",
        question: "Eastern State Projects discovers a calculation error in the award. Which remedy is generally available under Section 33?",
        options: [
          "Request correction of the computational error by the arbitral tribunal within the prescribed period",
          "The award automatically becomes void",
          "Only the Supreme Court can correct the error",
          "The party must necessarily commence a fresh arbitration"
        ],
        answer: 0
      },

      {
        question_id: "ARB_CH2_CS05_Q4",
        difficulty: "hard",
        question: "One claim presented during the arbitration was omitted from the award. What may Eastern State Projects request, subject to the statutory requirements?",
        options: [
          "An additional arbitral award",
          "Automatic cancellation of the arbitration agreement",
          "A new arbitration without reference to the existing proceedings",
          "A criminal investigation against the arbitrators"
        ],
        answer: 0
      },

      {
        question_id: "ARB_CH2_CS05_Q5",
        difficulty: "hard",
        question: "The tribunal records the settlement as an arbitral award on agreed terms. Which statement is correct?",
        options: [
          "Such an award has no legal effect because the dispute was settled",
          "It has the same status and effect as an arbitral award on the substance of the dispute",
          "It is merely a private memorandum between the parties",
          "It can be enforced only after a fresh arbitration"
        ],
        answer: 1
      }

    ]
  }

];