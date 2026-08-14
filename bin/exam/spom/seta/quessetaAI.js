const AICaseStudies = [

// Chapter 1

  // =========================================================
  // CASE SCENARIO 001 — EASY
  // =========================================================

  {
    case_id: "seta_AI_cs_001",
    difficulty: "Easy",
    caseText: `
      <p>Sunrise Engineering Limited is a newly incorporated public company.
      Its Articles of Association do not contain any provision regarding the
      appointment of its first directors. The Memorandum of Association has
      been subscribed to by six individuals and one private limited company.
      The company proposes to constitute its Board and commence business
      operations.</p>

      <p>During the initial compliance review, the Company Secretary explains
      that the Companies Act, 2013 prescribes a minimum number of directors
      for different types of companies and also specifies the maximum number
      of directors. The Board is considering appointing 16 directors immediately
      because the promoters believe that a larger Board would provide better
      representation.</p>

      <p>The Company Secretary also points out that a person cannot be appointed
      as a director unless the applicable Director Identification Number
      requirements are satisfied. Further, a person appointed as a director
      cannot act in that capacity unless the required written consent has been
      furnished.</p>
    `,
    questions: [

      {
        question_id: "seta_AI_cs_001_1",
        question: "Since the Articles of Sunrise Engineering Limited are silent regarding the first directors, who among the subscribers to the Memorandum can be deemed to be the first directors?",
        options: [
          "All subscribers including the private limited company",
          "Only the individual subscribers",
          "Only the private limited company",
          "The Chartered Accountant who signed the Memorandum"
        ],
        answer: 2,
        reason: "Where no provision is made in the Articles for appointment of first directors, the individual subscribers to the Memorandum are deemed to be the first directors. A body corporate cannot become a director."
      },

      {
        question_id: "seta_AI_cs_001_2",
        question: "What is the minimum number of directors required for Sunrise Engineering Limited as a public company?",
        options: [
          "1",
          "2",
          "3",
          "5"
        ],
        answer: 3,
        reason: "Under Section 149(1), a public company must have a minimum of 3 directors."
      },

      {
        question_id: "seta_AI_cs_001_3",
        question: "What is the general maximum number of directors that Sunrise Engineering Limited may have without passing a special resolution?",
        options: [
          "10",
          "12",
          "15",
          "20"
        ],
        answer: 3,
        reason: "The maximum number of directors is 15. A company may appoint more than 15 directors only after passing a special resolution."
      },

      {
        question_id: "seta_AI_cs_001_4",
        question: "If Sunrise Engineering Limited wishes to appoint 16 directors, which of the following is required under Section 149(1)?",
        options: [
          "Only approval of the Board of Directors",
          "Only approval of the Registrar",
          "Passing of a special resolution",
          "Approval of the Central Government in every case"
        ],
        answer: 3,
        reason: "A company can appoint more than 15 directors after passing a special resolution."
      },

      {
        question_id: "seta_AI_cs_001_5",
        question: "Which statement correctly describes the requirement relating to a person proposed to be appointed as a director?",
        options: [
          "DIN is required only after appointment",
          "A person may act as director even without giving written consent",
          "A person cannot be appointed as director unless the required DIN has been allotted",
          "Written consent is required only from an independent director"
        ],
        answer: 3,
        reason: "Section 152(3) requires the person to have a DIN before appointment. Further, under Section 152(5), a person appointed as director cannot act unless written consent to hold office has been furnished."
      }

    ]
  },


  // =========================================================
  // CASE SCENARIO 002 — MEDIUM
  // =========================================================

  {
    case_id: "seta_AI_cs_002",
    difficulty: "Medium",
    caseText: `
      <p>Alpha Manufacturing Limited is a public company having 12 directors.
      Out of these, 2 are independent directors and 1 is a nominee director
      appointed pursuant to an agreement with a financial institution. The
      remaining directors are ordinary directors who are subject to retirement
      by rotation.</p>

      <p>The company is preparing for its forthcoming Annual General Meeting.
      The Company Secretary is required to determine the number of directors
      liable to retire by rotation and the number of directors who must actually
      retire at the AGM.</p>

      <p>Two of the directors liable to retire by rotation were appointed on
      different dates. One of them has held office continuously since an earlier
      appointment, whereas the other was appointed more recently. The Board
      also wants to know whether the independent directors and nominee director
      should be included while calculating the total number of directors for
      this purpose.</p>
    `,
    questions: [

      {
        question_id: "seta_AI_cs_002_1",
        question: "For determining the number of directors liable to retire by rotation, which directors are excluded from the total number of directors in the above case?",
        options: [
          "Only nominee directors",
          "Only independent directors",
          "Both independent directors and nominee directors",
          "All non-executive directors"
        ],
        answer: 3,
        reason: "Independent directors are excluded from the total number of directors for retirement by rotation. A nominee director nominated by an institution in pursuance of law or agreement is also not considered liable to retire by rotation."
      },

      {
        question_id: "seta_AI_cs_002_2",
        question: "What is the number of directors to be considered for calculating the rotational directors in Alpha Manufacturing Limited?",
        options: [
          "12",
          "11",
          "10",
          "9"
        ],
        answer: 4,
        reason: "There are 12 directors in total. The 2 independent directors and 1 nominee director are excluded. Therefore, 12 − 3 = 9 directors are considered."
      },

      {
        question_id: "seta_AI_cs_002_3",
        question: "What is the minimum number of directors liable to retire by rotation out of the 9 directors considered for this purpose?",
        options: [
          "3",
          "5",
          "6",
          "9"
        ],
        answer: 3,
        reason: "Not less than two-thirds of the relevant total number of directors must be liable to retire by rotation. Two-thirds of 9 is 6."
      },

      {
        question_id: "seta_AI_cs_002_4",
        question: "How many of the rotational directors will actually retire at the forthcoming AGM?",
        options: [
          "1",
          "2",
          "3",
          "4"
        ],
        answer: 2,
        reason: "Once 6 directors are identified as liable to retire by rotation, one-third of those directors retire at the AGM. One-third of 6 is 2."
      },

      {
        question_id: "seta_AI_cs_002_5",
        question: "Assuming no two directors were appointed on the same day, which directors should ordinarily be selected for retirement at the AGM?",
        options: [
          "Those most recently appointed",
          "Those selected by the Board",
          "Those who have been longest in office since their last appointment",
          "The independent directors"
        ],
        answer: 3,
        reason: "Among directors liable to retire by rotation, those who have been longest in office since their last appointment retire first. Independent directors are not liable to retire by rotation."
      }

    ]
  },


  // =========================================================
  // CASE SCENARIO 003 — MEDIUM
  // =========================================================

  {
    case_id: "seta_AI_cs_003",
    difficulty: "Medium",
    caseText: `
      <p>Vertex Technologies Limited has authorised its Board under its
      Articles of Association to appoint additional directors. During the
      financial year, the Board decides that an additional director is
      urgently required because of expansion of the company's operations.
      It proposes the appointment of Mr. Arjun, who possesses the required
      DIN and has not previously been rejected by the shareholders.</p>

      <p>Separately, one of the company's directors, Mr. Ravi, leaves India
      for a business assignment expected to last four months. The Articles
      of the company authorise the Board to appoint alternate directors.
      Mr. Ravi suggests that his personal nominee should automatically
      become his alternate director.</p>

      <p>At the same time, a director who had originally been appointed by
      the company in general meeting dies before completion of his term.
      The Board is considering filling the resulting vacancy.</p>
    `,
    questions: [

      {
        question_id: "seta_AI_cs_003_1",
        question: "Who has the power to appoint an additional director where the Articles confer such power?",
        options: [
          "The shareholders only",
          "The Board of Directors",
          "The Registrar",
          "The Central Government"
        ],
        answer: 2,
        reason: "Under Section 161(1), where the Articles confer the power, the Board may appoint an additional director."
      },

      {
        question_id: "seta_AI_cs_003_2",
        question: "Up to what point can Mr. Arjun ordinarily continue as an additional director?",
        options: [
          "For five years",
          "Until he resigns",
          "Until the next AGM or the last date on which the AGM should have been held, whichever is earlier",
          "Until the next Board meeting"
        ],
        answer: 3,
        reason: "An additional director holds office up to the date of the next AGM or the last date on which the AGM should have been held, whichever is earlier."
      },

      {
        question_id: "seta_AI_cs_003_3",
        question: "Can Mr. Ravi himself appoint his preferred person as an alternate director merely because he is going to be absent from India for four months?",
        options: [
          "Yes, because the absence exceeds three months",
          "Yes, because the Articles give the original director the power",
          "No, because the power of appointment rests with the Board, subject to the required authorisation",
          "No, because an alternate director can only be appointed for six months' absence"
        ],
        answer: 3,
        reason: "The Board has the authority to appoint an alternate director, provided the Articles or a general meeting resolution authorises it. The original director cannot appoint his own alternate."
      },

      {
        question_id: "seta_AI_cs_003_4",
        question: "Is the four-month absence of Mr. Ravi sufficient to permit appointment of an alternate director?",
        options: [
          "No, because the minimum period is six months",
          "No, because only foreign residence qualifies",
          "Yes, because the absence from India is for not less than three months",
          "Yes, but only if the absence is for one year"
        ],
        answer: 3,
        reason: "An alternate director may be appointed where the original director is absent from India for a period of not less than three months."
      },

      {
        question_id: "seta_AI_cs_003_5",
        question: "The director appointed in the general meeting dies before completion of his term. Subject to the Articles, what is the normal mechanism for filling the resulting casual vacancy?",
        options: [
          "The Board may fill it at a Board meeting, subject to approval by members at the immediate next general meeting",
          "The original director's legal representative automatically becomes director",
          "The vacancy must remain unfilled until the next AGM",
          "The Registrar must appoint the replacement"
        ],
        answer: 1,
        reason: "Under Section 161(4), a casual vacancy arising from the premature vacation of office by a director appointed in general meeting may be filled by the Board at a Board meeting, subject to approval by members at the immediate next general meeting."
      }

    ]
  },


  // =========================================================
  // CASE SCENARIO 004 — HARD
  // =========================================================

  {
    case_id: "seta_AI_cs_004",
    difficulty: "Hard",
    caseText: `
      <p>Orion Infrastructure Limited is an unlisted public company. As on
      the last date of its latest audited financial statements, its paid-up
      share capital is ₹18 crore and its turnover is ₹140 crore. It has
      13 directors on its Board.</p>

      <p>The company is reviewing its independent director requirements.
      One of the proposed candidates, Mr. Sameer, has significant professional
      experience but is also being examined against the statutory independence
      conditions. His relative has outstanding indebtedness to the company
      of ₹48 lakh. Mr. Sameer himself has never been an employee of the
      company or its holding, subsidiary or associate company during the
      relevant period.</p>

      <p>The company is also considering the appointment of another candidate,
      Ms. Kavya. She was employed by the company's subsidiary two financial
      years immediately preceding the financial year in which her appointment
      is proposed. The Board believes that her extensive industry experience
      should override any technical restriction.</p>

      <p>The Company Secretary must determine both the number of independent
      directors required and whether the proposed candidates satisfy the
      relevant independence conditions.</p>
    `,
    questions: [

      {
        question_id: "seta_AI_cs_004_1",
        question: "Based on the company's paid-up share capital and turnover, what is the minimum number of independent directors required for Orion Infrastructure Limited?",
        options: [
          "One",
          "Two",
          "Three",
          "Four"
        ],
        answer: 2,
        reason: "An unlisted public company having paid-up share capital of ₹10 crore or more, or turnover of ₹100 crore or more, is required to have at least two independent directors."
      },

      {
        question_id: "seta_AI_cs_004_2",
        question: "If Orion Infrastructure Limited were a listed public company with 13 directors, what would be the minimum number of independent directors required?",
        options: [
          "3",
          "4",
          "5",
          "6"
        ],
        answer: 3,
        reason: "A listed public company must have at least one-third of its total number of directors as independent directors. One-third of 13 is 4.33, and any fraction is rounded off as one. Therefore, 5 independent directors are required."
      },

      {
        question_id: "seta_AI_cs_004_3",
        question: "Mr. Sameer's relative is indebted to Orion Infrastructure Limited for ₹48 lakh during the relevant period. Based solely on this fact, which statement is most appropriate?",
        options: [
          "Mr. Sameer automatically fails the independence condition because any indebtedness of a relative is prohibited",
          "Mr. Sameer fails because the threshold is ₹25 lakh",
          "The indebtedness does not cross the ₹50 lakh threshold specified under the relevant rule",
          "The threshold applies only to indebtedness of the proposed independent director himself"
        ],
        answer: 3,
        reason: "For the relevant independence condition, a relative's indebtedness to the company, its holding, subsidiary or associate company, or their promoters/directors, exceeding ₹50 lakh during the specified period is restricted. ₹48 lakh does not cross that stated threshold."
      },

      {
        question_id: "seta_AI_cs_004_4",
        question: "Ms. Kavya was an employee of the company's subsidiary two financial years immediately preceding the financial year in which her appointment is proposed. Which provision is most directly relevant to her eligibility?",
        options: [
          "An independent director cannot have been an employee of the company or its holding, subsidiary or associate company during any of the three financial years immediately preceding the relevant financial year",
          "Only employment in the immediately preceding financial year is prohibited",
          "Employment in a subsidiary is irrelevant if the person has sufficient professional experience",
          "Only employment of a relative creates a disqualification"
        ],
        answer: 1,
        reason: "Section 149(6) provides that neither the proposed independent director nor, subject to the stated exception, the relevant persons covered by the provision should have held employment/KMP positions in the company or its holding, subsidiary or associate company during the three financial years immediately preceding the financial year of proposed appointment."
      },

      {
        question_id: "seta_AI_cs_004_5",
        question: "Orion Infrastructure Limited ceases to satisfy all three prescribed thresholds relating to paid-up share capital, turnover and aggregate outstanding loans, debentures and deposits. For how long must the company cease to satisfy the relevant conditions before the mandatory appointment requirement under Rule 4 ceases to apply?",
        options: [
          "One consecutive year",
          "Two consecutive years",
          "Three consecutive years",
          "Five consecutive years"
        ],
        answer: 3,
        reason: "A company that was required to appoint independent directors is not required to make such appointment if it ceases to fulfill any of the prescribed conditions for three consecutive years. It becomes required again if it starts meeting any such condition."
      }

    ]
  },


  // =========================================================
  // CASE SCENARIO 005 — HARD
  // =========================================================

  {
    case_id: "seta_AI_cs_005",
    difficulty: "Hard",
    caseText: `
      <p>Delta Consumer Products Limited has been facing several compliance
      issues relating to its directors. Mr. Vikram is a director of Delta
      Consumer Products Limited and another company, Nova Retail Limited.
      Delta has failed to file its financial statements for three continuous
      financial years. In addition, Delta failed to repay certain deposits
      and the related interest, and the default has continued for more than
      one year.</p>

      <p>Mr. Vikram is due to retire by rotation from Nova Retail Limited.
      The company is considering reappointing him. At the same time, another
      company, Zenith Industries Limited, proposes to appoint Mr. Vikram as
      an additional director.</p>

      <p>Mr. Vikram also holds directorships in several other companies.
      His existing positions include 10 public companies, 9 ordinary private
      companies, one dormant company and one Section 8 company. One of the
      private companies subsequently becomes a subsidiary of a public company.</p>

      <p>The Board of Zenith Industries Limited argues that because some of
      the defaults occurred in Delta, the resulting disqualification should
      not affect Mr. Vikram's appointment in another company. The Company
      Secretary has been asked to determine the legality of the proposed
      appointments and the effect of the changing nature of his existing
      directorships.</p>
    `,
    questions: [

      {
        question_id: "seta_AI_cs_005_1",
        question: "Delta has failed to file financial statements for three continuous financial years. Which provision is primarily attracted against Mr. Vikram?",
        options: [
          "Section 149(1)",
          "Section 152(5)",
          "Section 164(2)",
          "Section 171"
        ],
        answer: 3,
        reason: "Section 164(2) provides disqualification where a company has not filed financial statements or annual returns for any continuous period of three financial years."
      },

      {
        question_id: "seta_AI_cs_005_2",
        question: "The default in repayment of deposits and interest has continued for more than one year. What is the consequence under Section 164(2)?",
        options: [
          "There is no disqualification because only filing defaults are covered",
          "The director becomes disqualified for appointment or reappointment for the prescribed five-year period from the date of default",
          "The director is disqualified permanently",
          "Only the company becomes disqualified from appointing directors"
        ],
        answer: 2,
        reason: "Section 164(2)(b) covers failure to repay deposits or interest, among other specified defaults, where the failure continues for one year or more. The director becomes ineligible for appointment or reappointment for five years from the date on which the company committed the default."
      },

      {
        question_id: "seta_AI_cs_005_3",
        question: "Mr. Vikram incurs disqualification under Section 164(2) because of Delta's defaults. Which statement correctly describes the effect on his existing offices?",
        options: [
          "He must vacate his office in every company, including Delta",
          "He may continue as director in Delta, but his office becomes vacant in other companies",
          "He must vacate Delta immediately but can continue in all other companies",
          "The disqualification has no effect on his existing directorships"
        ],
        answer: 2,
        reason: "Under the proviso to Section 167(1)(a), where a director incurs disqualification under Section 164(2), his office becomes vacant in all companies other than the company which is in default."
      },

      {
        question_id: "seta_AI_cs_005_4",
        question: "After incurring the Section 164(2) disqualification, can Mr. Vikram be appointed as an additional director of Zenith Industries Limited during the disqualification period?",
        options: [
          "Yes, because an additional director is appointed by the Board rather than the members",
          "Yes, because Section 164(2) applies only to ordinary directors",
          "No, because he is not eligible to be appointed as a director in another company during the prescribed period",
          "Yes, provided Zenith passes an ordinary resolution"
        ],
        answer: 3,
        reason: "Section 164(2) makes the person ineligible for appointment as a director of another company for five years from the date of the relevant default. The fact that the proposed appointment is as an additional director does not override the disqualification."
      },

      {
        question_id: "seta_AI_cs_005_5",
        question: "Before the private company becomes a subsidiary of a public company, Mr. Vikram holds 10 public companies, 9 ordinary private companies, one dormant company and one Section 8 company. Assuming the Section 8 company satisfies the applicable exemption conditions, which statement is correct for the 20-company limit?",
        options: [
          "All 21 companies are counted",
          "The dormant company and Section 8 company are excluded, resulting in 19 counted companies",
          "Only the 10 public companies are counted",
          "Only private companies are counted"
        ],
        answer: 2,
        reason: "For the 20-company limit, directorship in a dormant company is excluded. A directorship in a Section 8 company is also excluded where the applicable exemption conditions are satisfied. Thus, 10 public + 9 ordinary private = 19 counted companies."
      }

    ]
  },

  /* =========================================================
     CASE SCENARIO 1
     APPOINTMENT OF FIRST DIRECTORS / CONSENT / DIN
  ========================================================= */
  {
    case_id: "dir_mcq_cs1",
    case_chapter: ["Appointment of Directors", "Section 152", "DIN"],
    caseText: `
      <p>Zenith Innovations Private Limited was incorporated by three individual
      subscribers, namely Mr. Arjun, Mr. Bharat and Mr. Chetan. The Articles of
      Association of the company did not contain any provision regarding the
      appointment of first directors.</p>

      <p>At the time of incorporation, the subscribers assumed that the Board would
      subsequently appoint the first directors. Mr. Arjun was allotted a DIN before
      incorporation, whereas Mr. Bharat and Mr. Chetan did not possess DINs.</p>

      <p>After incorporation, the promoters decided that Mr. Arjun and Mr. Bharat
      would continue as directors. Mr. Bharat argued that since he was already
      deemed to be a first director, he could continue without obtaining a DIN or
      giving written consent.</p>

      <p>The company also appointed Ms. Kavya as another director at a general
      meeting. She furnished her DIN and declaration that she was not disqualified,
      but she submitted her written consent in Form DIR-2 two days after the general
      meeting.</p>
    `,
    questions: [

      {
        question_id: "dir_mcq_cs1_1",
        chapter_name: ["Appointment of Directors", "Section 152"],
        question: "In the absence of a provision in the Articles regarding first directors, who would be deemed to be the first directors of Zenith Innovations?",
        options: [
          "Only Mr. Arjun",
          "All three individual subscribers",
          "The person nominated by the promoters",
          "The directors appointed by the Registrar"
        ],
        answer: 1,
        solution_html: `
          <p><strong>Correct Answer: All three individual subscribers.</strong></p>
          <p>Where the Articles make no provision regarding first directors,
          the individual subscribers to the memorandum are deemed to be the
          first directors until directors are duly appointed.</p>
        `
      },

      {
        question_id: "dir_mcq_cs1_2",
        chapter_name: ["Section 152", "DIN"],
        question: "Which of the following is correct regarding Mr. Bharat's appointment as a director?",
        options: [
          "He can act as director without DIN because he is a first director",
          "DIN is required only for directors appointed at an AGM",
          "A person cannot be appointed as director unless he has been allotted DIN or such other prescribed number",
          "DIN is required only for public companies"
        ],
        answer: 2,
        solution_html: `
          <p><strong>Correct Answer: A person cannot be appointed as director unless he has been allotted DIN or such other prescribed number.</strong></p>
          <p>Section 152(3) requires a person to have DIN or such other prescribed
          identification number before being appointed as a director.</p>
        `
      },

      {
        question_id: "dir_mcq_cs1_3",
        chapter_name: ["Section 152"],
        question: "Ms. Kavya furnished her written consent two days after her appointment. Which statement is most appropriate?",
        options: [
          "Consent can be furnished at any time within 30 days",
          "Consent must be furnished to the company on or before appointment",
          "Consent is required only after filing DIR-12",
          "Consent is not required if DIN is furnished"
        ],
        answer: 1,
        solution_html: `
          <p><strong>Correct Answer: Consent must be furnished to the company on or before appointment.</strong></p>
          <p>A person appointed as director shall not act as director unless
          written consent to hold office is furnished to the company on or
          before the appointment.</p>
        `
      },

      {
        question_id: "dir_mcq_cs1_4",
        chapter_name: ["Section 152"],
        question: "The company is required to file the consent of Ms. Kavya with the Registrar within:",
        options: [
          "7 days",
          "15 days",
          "30 days",
          "60 days"
        ],
        answer: 2,
        solution_html: `
          <p><strong>Correct Answer: 30 days.</strong></p>
          <p>The company shall file the consent of the director with the
          Registrar within 30 days of appointment in Form DIR-12.</p>
        `
      },

      {
        question_id: "dir_mcq_cs1_5",
        chapter_name: ["Section 152"],
        question: "Subject to the conditions specified under the Act and relevant notifications, which requirement may not apply to an eligible Government company where the director is appointed by the Central or State Government?",
        options: [
          "Requirement of DIN",
          "Requirement of written consent under Section 152(5)",
          "Requirement of declaration of non-disqualification",
          "Requirement relating to the minimum number of directors"
        ],
        answer: 1,
        solution_html: `
          <p><strong>Correct Answer: Requirement of written consent under Section 152(5).</strong></p>
          <p>The specified exemption relates to Section 152(5), concerning
          furnishing of consent to act as director, subject to the conditions
          prescribed under the relevant notification.</p>
        `
      }
    ]
  },


  /* =========================================================
     CASE SCENARIO 2
     RETIREMENT BY ROTATION
  ========================================================= */
  {
    case_id: "dir_mcq_cs2",
    case_chapter: ["Appointment of Directors", "Section 152", "Retirement by Rotation"],
    caseText: `
      <p>Orion Manufacturing Limited is a public company having 12 directors.
      Out of these, 2 are independent directors and 1 is a nominee director
      appointed pursuant to an agreement with a financial institution.</p>

      <p>The Articles of the company do not provide that all directors shall retire
      at every AGM. The remaining directors have been appointed by the shareholders
      at different general meetings.</p>

      <p>The Company Secretary informed the Board that independent directors and
      nominee directors should not be included while determining the total number
      of directors for the purpose of retirement by rotation.</p>

      <p>Among the rotational directors, some directors were appointed on different
      dates, while two directors were appointed on the same date.</p>
    `,
    questions: [

      {
        question_id: "dir_mcq_cs2_1",
        chapter_name: ["Section 152", "Retirement by Rotation"],
        question: "For determining the total number of directors for retirement by rotation, how many directors will be considered?",
        options: [
          "12",
          "11",
          "10",
          "9"
        ],
        answer: 3,
        solution_html: `
          <p><strong>Correct Answer: 9.</strong></p>
          <p>Independent directors and nominee directors are excluded.</p>
          <p>12 − 2 independent directors − 1 nominee director = <strong>9 directors</strong>.</p>
        `
      },

      {
        question_id: "dir_mcq_cs2_2",
        chapter_name: ["Section 152"],
        question: "What is the minimum number of directors liable to retirement by rotation?",
        options: [
          "5",
          "6",
          "7",
          "9"
        ],
        answer: 1,
        solution_html: `
          <p><strong>Correct Answer: 6.</strong></p>
          <p>Two-thirds of 9 = 6.</p>
          <p>Therefore, 6 directors shall be liable to retire by rotation.</p>
        `
      },

      {
        question_id: "dir_mcq_cs2_3",
        chapter_name: ["Section 152"],
        question: "How many of the rotational directors will actually retire at the AGM?",
        options: [
          "1",
          "2",
          "3",
          "6"
        ],
        answer: 1,
        solution_html: `
          <p><strong>Correct Answer: 2.</strong></p>
          <p>One-third of the 6 directors liable to retire by rotation
          = 2 directors.</p>
        `
      },

      {
        question_id: "dir_mcq_cs2_4",
        chapter_name: ["Section 152"],
        question: "Which directors should ordinarily retire first at the AGM?",
        options: [
          "Directors appointed most recently",
          "Independent directors",
          "Directors who have been longest in office since their last appointment",
          "Nominee directors"
        ],
        answer: 2,
        solution_html: `
          <p><strong>Correct Answer: Directors who have been longest in office since their last appointment.</strong></p>
          <p>The directors who have been longest in office since their last
          appointment shall retire first.</p>
        `
      },

      {
        question_id: "dir_mcq_cs2_5",
        chapter_name: ["Section 152"],
        question: "Two rotational directors were appointed on the same day. There is no mutual agreement between them regarding retirement. How should the director retiring at the AGM be determined?",
        options: [
          "By the Chairman",
          "By the Board of Directors",
          "By the Registrar",
          "By lot"
        ],
        answer: 3,
        solution_html: `
          <p><strong>Correct Answer: By lot.</strong></p>
          <p>Where two or more directors were appointed on the same day,
          retirement is determined by mutual agreement among them or,
          failing such agreement, by lot.</p>
        `
      }
    ]
  },


  /* =========================================================
     CASE SCENARIO 3
     DEEMED RE-APPOINTMENT
  ========================================================= */
  {
    case_id: "dir_mcq_cs3",
    case_chapter: ["Section 152", "Retirement of Directors", "Deemed Re-appointment"],
    caseText: `
      <p>Nova Textiles Limited held its AGM at which Mr. Rohan, a director liable
      to retire by rotation, retired from office. The company did not fill the vacancy
      and the meeting did not expressly resolve that the vacancy should remain
      unfilled.</p>

      <p>The meeting was therefore adjourned to the same day in the following week.
      At the adjourned meeting also, no person was appointed in place of Mr. Rohan
      and the members did not pass any resolution stating that the vacancy should
      not be filled.</p>

      <p>However, during the original AGM, a resolution for the re-appointment of
      Mr. Rohan had been put to vote and was defeated. Mr. Rohan had also not
      expressed any unwillingness to continue.</p>
    `,
    questions: [

      {
        question_id: "dir_mcq_cs3_1",
        chapter_name: ["Section 152"],
        question: "Since the vacancy was not filled and the meeting did not expressly resolve not to fill it, what happens to the meeting?",
        options: [
          "It automatically stands dissolved",
          "It stands adjourned to the same day in the next week",
          "The Board takes over the meeting",
          "The Registrar appoints a director"
        ],
        answer: 1,
        solution_html: `
          <p><strong>Correct Answer: It stands adjourned to the same day in the next week.</strong></p>
          <p>Where the vacancy of a retiring director is not filled and the
          meeting has not expressly resolved not to fill it, the meeting stands
          adjourned as prescribed under Section 152(7).</p>
        `
      },

      {
        question_id: "dir_mcq_cs3_2",
        chapter_name: ["Section 152"],
        question: "At the adjourned meeting, the vacancy is again not filled and no resolution is passed not to fill it. What is the normal consequence?",
        options: [
          "Mr. Rohan is deemed to be re-appointed",
          "Mr. Rohan is permanently disqualified",
          "The Registrar appoints Mr. Rohan",
          "The Board must appoint another director"
        ],
        answer: 0,
        solution_html: `
          <p><strong>Correct Answer: Mr. Rohan is deemed to be re-appointed.</strong></p>
          <p>If at the adjourned meeting also the vacancy is not filled and
          the meeting has not expressly resolved not to fill the vacancy,
          the retiring director is deemed to have been re-appointed.</p>
        `
      },

      {
        question_id: "dir_mcq_cs3_3",
        chapter_name: ["Section 152"],
        question: "Does Mr. Rohan get deemed re-appointment in the present case?",
        options: [
          "Yes, because he was willing to continue",
          "Yes, because he was a retiring director",
          "No, because his re-appointment resolution had already been put and lost",
          "No, because every retiring director must vacate office permanently"
        ],
        answer: 2,
        solution_html: `
          <p><strong>Correct Answer: No, because his re-appointment resolution had already been put and lost.</strong></p>
          <p>One of the specific exceptions to deemed re-appointment is where
          a resolution for re-appointment of the retiring director has been
          put to the meeting and lost.</p>
        `
      },

      {
        question_id: "dir_mcq_cs3_4",
        chapter_name: ["Section 152"],
        question: "Which of the following would independently prevent deemed re-appointment?",
        options: [
          "The director is willing to continue",
          "The director has submitted written unwillingness to be re-appointed",
          "The company has sufficient directors",
          "The director attended the AGM"
        ],
        answer: 1,
        solution_html: `
          <p><strong>Correct Answer: The director has submitted written unwillingness to be re-appointed.</strong></p>
          <p>A retiring director who has expressed unwillingness in writing
          to be re-appointed is excluded from deemed re-appointment.</p>
        `
      },

      {
        question_id: "dir_mcq_cs3_5",
        chapter_name: ["Section 152", "Section 162"],
        question: "Deemed re-appointment will also not apply where Section 162 is applicable and:",
        options: [
          "The director is an independent director",
          "Two or more persons were improperly appointed through a single resolution",
          "The director has a DIN",
          "The director attended the previous Board meeting"
        ],
        answer: 1,
        solution_html: `
          <p><strong>Correct Answer: Two or more persons were improperly appointed through a single resolution.</strong></p>
          <p>Where Section 162 is applicable and the appointment through a
          single resolution contravenes its requirements, the appointments
          are void and deemed re-appointment does not operate.</p>
        `
      }
    ]
  },


  /* =========================================================
     CASE SCENARIO 4
     DIN ALLOTMENT AND DUPLICATE DIN
  ========================================================= */
  {
    case_id: "dir_mcq_cs4",
    case_chapter: ["DIN", "Sections 153 to 159"],
    caseText: `
      <p>Mr. Sameer intends to become a director in an existing company. He does
      not possess a DIN and therefore submits Form DIR-3 electronically along with
      the prescribed fee and required documents.</p>

      <p>The application is processed and the system generates an application
      number. Subsequently, the Central Government identifies certain defects in
      the application and places an intimation on the website and sends an email
      to Mr. Sameer directing him to rectify the defects.</p>

      <p>Mr. Sameer partially rectifies the defects but some information continues
      to be incorrect. In another case, Mr. Ajay already possesses a DIN but
      inadvertently applies for another DIN because he is being appointed as a
      director in a second company.</p>
    `,
    questions: [

      {
        question_id: "dir_mcq_cs4_1",
        chapter_name: ["Section 153", "DIN"],
        question: "For appointment as director in an existing company, an individual who does not possess DIN generally applies through:",
        options: [
          "DIR-2",
          "DIR-3",
          "DIR-5",
          "DIR-12"
        ],
        answer: 1,
        solution_html: `
          <p><strong>Correct Answer: DIR-3.</strong></p>
          <p>An individual intending to be appointed as director of an existing
          company applies electronically in Form DIR-3 for allotment of DIN.</p>
        `
      },

      {
        question_id: "dir_mcq_cs4_2",
        chapter_name: ["Section 154"],
        question: "Within what period is the Central Government required to allot DIN from receipt of the application, subject to the prescribed procedure?",
        options: [
          "7 days",
          "15 days",
          "One month",
          "Three months"
        ],
        answer: 2,
        solution_html: `
          <p><strong>Correct Answer: One month.</strong></p>
          <p>Section 154 provides for allotment of DIN within one month
          from receipt of the application.</p>
        `
      },

      {
        question_id: "dir_mcq_cs4_3",
        chapter_name: ["DIN"],
        question: "Where an application is found defective or incomplete, the applicant is generally directed to rectify and resubmit it within:",
        options: [
          "7 days",
          "15 days",
          "30 days",
          "45 days"
        ],
        answer: 1,
        solution_html: `
          <p><strong>Correct Answer: 15 days.</strong></p>
          <p>The applicant is directed to rectify the defects or incompleteness
          and resubmit the application within 15 days of the intimation.</p>
        `
      },

      {
        question_id: "dir_mcq_cs4_4",
        chapter_name: ["Section 155", "DIN"],
        question: "What is the position where Mr. Ajay already possesses a valid DIN and wants to become director in another company?",
        options: [
          "He must obtain a new DIN",
          "He may obtain one DIN for each company",
          "He must use his existing DIN",
          "He can choose whether to use the old or new DIN"
        ],
        answer: 2,
        solution_html: `
          <p><strong>Correct Answer: He must use his existing DIN.</strong></p>
          <p>Section 155 prohibits an individual who has already been allotted
          a DIN from applying for, obtaining or possessing another DIN.</p>
        `
      },

      {
        question_id: "dir_mcq_cs4_5",
        chapter_name: ["DIN"],
        question: "If a defective DIN application is not rectified within the prescribed period, the application may be:",
        options: [
          "Automatically approved",
          "Treated and labelled as invalid in the electronic record",
          "Transferred to the Registrar",
          "Converted into DIR-2"
        ],
        answer: 1,
        solution_html: `
          <p><strong>Correct Answer: Treated and labelled as invalid in the electronic record.</strong></p>
          <p>If the defects are not removed within the prescribed period,
          the application is treated and labelled as invalid in the electronic
          record. The fee is not refunded or adjusted.</p>
        `
      }
    ]
  },


  /* =========================================================
     CASE SCENARIO 5
     DIN INTIMATION / CHANGES / DEACTIVATION
  ========================================================= */
  {
    case_id: "dir_mcq_cs5",
    case_chapter: ["DIN", "Sections 156 to 159"],
    caseText: `
      <p>Mr. Vikram is an existing director of three companies. He recently received
      his DIN from the Central Government. He is required to intimate the DIN to
      each company in which he is a director.</p>

      <p>After some time, Mr. Vikram changes his residential address. He submits
      the prescribed form for change in DIN particulars after the stipulated period.
      One of the companies receives his updated DIN information but fails to furnish
      the DIN of its directors to the Registrar within the prescribed time.</p>

      <p>The company argues that since the director himself is responsible for his DIN,
      no liability can arise against the company.</p>
    `,
    questions: [

      {
        question_id: "dir_mcq_cs5_1",
        chapter_name: ["Section 156"],
        question: "Within what period must an existing director intimate his DIN to the company or companies in which he is a director?",
        options: [
          "7 days",
          "15 days",
          "One month",
          "Three months"
        ],
        answer: 2,
        solution_html: `
          <p><strong>Correct Answer: One month.</strong></p>
          <p>An existing director shall intimate his DIN to the company or
          companies within one month of receipt of DIN from the Central Government.</p>
        `
      },

      {
        question_id: "dir_mcq_cs5_2",
        chapter_name: ["Section 157"],
        question: "Within what period must the company furnish the DIN of its directors to the Registrar after receiving the intimation from the director?",
        options: [
          "7 days",
          "15 days",
          "30 days",
          "60 days"
        ],
        answer: 1,
        solution_html: `
          <p><strong>Correct Answer: 15 days.</strong></p>
          <p>Under Section 157, the company shall furnish the DIN to the
          Registrar within 15 days of receiving the intimation from the director.</p>
        `
      },

      {
        question_id: "dir_mcq_cs5_3",
        chapter_name: ["DIN", "Rule 12"],
        question: "A change in particulars stated in the DIN application is required to be intimated to the Central Government within:",
        options: [
          "7 days",
          "15 days",
          "30 days",
          "90 days"
        ],
        answer: 2,
        solution_html: `
          <p><strong>Correct Answer: 30 days.</strong></p>
          <p>The DIN holder shall intimate changes in particulars to the
          Central Government within 30 days of such change in Form DIR-6.</p>
        `
      },

      {
        question_id: "dir_mcq_cs5_4",
        chapter_name: ["DIN", "Rule 12"],
        question: "After the change in particulars, within what period should the individual intimate the change to the company or companies in which he is a director?",
        options: [
          "7 days",
          "15 days",
          "30 days",
          "45 days"
        ],
        answer: 1,
        solution_html: `
          <p><strong>Correct Answer: 15 days.</strong></p>
          <p>The concerned individual shall intimate the change in particulars
          to the company or companies within 15 days of such change.</p>
        `
      },

      {
        question_id: "dir_mcq_cs5_5",
        chapter_name: ["Section 157"],
        question: "Which statement is correct regarding failure by the company to furnish DIN to the Registrar?",
        options: [
          "Only the director is liable",
          "Only the company secretary is liable",
          "The company and every defaulting officer may be liable to penalty",
          "There is no penalty"
        ],
        answer: 2,
        solution_html: `
          <p><strong>Correct Answer: The company and every defaulting officer may be liable to penalty.</strong></p>
          <p>Section 157(2) provides penalty for failure by the company to
          furnish DIN to the Registrar, and the defaulting officer is also
          liable as prescribed.</p>
        `
      }
    ]
  },


  /* =========================================================
     CASE SCENARIO 6
     SECTION 160 - RIGHT TO STAND FOR DIRECTORSHIP
  ========================================================= */
  {
    case_id: "dir_mcq_cs6",
    case_chapter: ["Section 160", "Appointment of Directors"],
    caseText: `
      <p>Alpha Infrastructure Limited is preparing for an Extraordinary General
      Meeting. Mr. Nitin, who is not a retiring director, wishes to stand for
      appointment as a director.</p>

      <p>He submits a written notice of his candidature at the registered office
      14 days before the meeting and deposits the prescribed amount of ₹1,00,000.</p>

      <p>The company publishes information regarding his candidature on its website
      and sends notices to members in the prescribed manner.</p>

      <p>At the meeting, Mr. Nitin is not appointed. However, he receives 28% of the
      total valid votes cast. Another proposed candidate receives only 18% of the
      valid votes.</p>
    `,
    questions: [

      {
        question_id: "dir_mcq_cs6_1",
        chapter_name: ["Section 160"],
        question: "How many days before the general meeting should the written notice of candidature generally be given?",
        options: [
          "7 days",
          "10 days",
          "14 days",
          "21 days"
        ],
        answer: 2,
        solution_html: `
          <p><strong>Correct Answer: 14 days.</strong></p>
          <p>A person other than a retiring director must give the required
          written notice at least 14 days before the meeting.</p>
        `
      },

      {
        question_id: "dir_mcq_cs6_2",
        chapter_name: ["Section 160"],
        question: "What is the prescribed deposit mentioned in the case for candidature under Section 160?",
        options: [
          "₹10,000",
          "₹50,000",
          "₹1,00,000",
          "₹2,00,000"
        ],
        answer: 2,
        solution_html: `
          <p><strong>Correct Answer: ₹1,00,000.</strong></p>
          <p>The written notice is generally required to be accompanied by
          a deposit of ₹1,00,000 or such higher amount as prescribed.</p>
        `
      },

      {
        question_id: "dir_mcq_cs6_3",
        chapter_name: ["Section 160"],
        question: "Mr. Nitin was not appointed but received 28% of the total valid votes. What happens to his deposit?",
        options: [
          "It is automatically forfeited",
          "It is refunded because he obtained more than 25% of valid votes",
          "It is transferred to the Registrar",
          "It is retained for the next AGM"
        ],
        answer: 1,
        solution_html: `
          <p><strong>Correct Answer: It is refunded because he obtained more than 25% of valid votes.</strong></p>
          <p>The deposit is refunded if the person proposed is selected as
          director or gets more than 25% of the total valid votes cast.</p>
        `
      },

      {
        question_id: "dir_mcq_cs6_4",
        chapter_name: ["Section 160"],
        question: "Which of the following is an exception to the requirement of deposit under Section 160?",
        options: [
          "Any shareholder nominee",
          "Independent Director",
          "Every additional director",
          "Every nominee director"
        ],
        answer: 1,
        solution_html: `
          <p><strong>Correct Answer: Independent Director.</strong></p>
          <p>The deposit requirement does not apply to appointment of an
          independent director, among the specified exceptions.</p>
        `
      },

      {
        question_id: "dir_mcq_cs6_5",
        chapter_name: ["Section 160"],
        question: "If the person proposed as a director is not appointed and receives only 18% of the total valid votes, what is the general consequence regarding the deposit?",
        options: [
          "Deposit must be refunded",
          "Deposit is not refunded",
          "Deposit is doubled",
          "Deposit is transferred to the proposed director"
        ],
        answer: 1,
        solution_html: `
          <p><strong>Correct Answer: Deposit is not refunded.</strong></p>
          <p>If the candidate is neither appointed nor receives more than
          25% of the total valid votes, the deposit is not refunded.</p>
        `
      }
    ]
  },


  /* =========================================================
     CASE SCENARIO 7
     SMALL SHAREHOLDERS' DIRECTOR
  ========================================================= */
  {
    case_id: "dir_mcq_cs7",
    case_chapter: ["Section 151", "Small Shareholders' Director"],
    caseText: `
      <p>Beta Technologies Limited is a listed company having a large number of
      small shareholders. The small shareholders want to exercise their right to
      have a representative on the Board.</p>

      <p>The company has 8,000 small shareholders. A group of small shareholders
      proposes Ms. Meera as a candidate for small shareholders' director and submits
      the required notice before the general meeting.</p>

      <p>Ms. Meera provides her DIN, declaration of non-disqualification and consent
      to act as director. She satisfies the independence requirements applicable to
      such director.</p>

      <p>After appointment, Ms. Meera wants to continue as small shareholders'
      director beyond three consecutive years and also wishes to become a director
      in a third company.</p>
    `,
    questions: [

      {
        question_id: "dir_mcq_cs7_1",
        chapter_name: ["Section 151"],
        question: "The small shareholders' director provision is applicable to:",
        options: [
          "Every private company",
          "Every partnership firm",
          "A listed company",
          "Only Government companies"
        ],
        answer: 2,
        solution_html: `
          <p><strong>Correct Answer: A listed company.</strong></p>
          <p>Section 151 provides that a listed company may have one director
          elected by small shareholders.</p>
        `
      },

      {
        question_id: "dir_mcq_cs7_2",
        chapter_name: ["Section 151"],
        question: "Where there are 8,000 small shareholders, what is the lower threshold based on the number of shareholders?",
        options: [
          "800",
          "1,000",
          "1,500",
          "2,000"
        ],
        answer: 1,
        solution_html: `
          <p><strong>Correct Answer: 1,000.</strong></p>
          <p>The prescribed threshold is 1,000 small shareholders or
          one-tenth of the total number of such shareholders, whichever is lower.</p>

          <p>One-tenth of 8,000 = 800.</p>
          <p>Therefore, the lower threshold is actually <strong>800</strong>.</p>
        `
      },

      {
        question_id: "dir_mcq_cs7_3",
        chapter_name: ["Section 151"],
        question: "For how long can a small shareholders' director hold office under the stated provision?",
        options: [
          "One consecutive year",
          "Two consecutive years",
          "Three consecutive years",
          "Five consecutive years"
        ],
        answer: 2,
        solution_html: `
          <p><strong>Correct Answer: Three consecutive years.</strong></p>
          <p>The tenure of a small shareholders' director shall not exceed
          three consecutive years.</p>
        `
      },

      {
        question_id: "dir_mcq_cs7_4",
        chapter_name: ["Section 151"],
        question: "After expiry of the tenure, can Ms. Meera be re-appointed as small shareholders' director?",
        options: [
          "Yes, indefinitely",
          "Yes, for one additional year",
          "Yes, if shareholders approve by special resolution",
          "No, she is not eligible for re-appointment"
        ],
        answer: 3,
        solution_html: `
          <p><strong>Correct Answer: No, she is not eligible for re-appointment.</strong></p>
          <p>On expiry of the prescribed tenure, the small shareholders'
          director shall not be eligible for re-appointment.</p>
        `
      },

      {
        question_id: "dir_mcq_cs7_5",
        chapter_name: ["Section 151"],
        question: "What is the maximum number of companies in which one person may simultaneously hold the position of small shareholders' director?",
        options: [
          "One",
          "Two",
          "Three",
          "Four"
        ],
        answer: 1,
        solution_html: `
          <p><strong>Correct Answer: Two.</strong></p>
          <p>No person shall hold the position of small shareholders' director
          in more than two companies at the same time, subject to the specified
          restriction regarding competing or conflicting businesses.</p>
        `
      }
    ]
  },


  /* =========================================================
     CASE SCENARIO 8
     ADDITIONAL DIRECTOR / ALTERNATE DIRECTOR
  ========================================================= */
  {
    case_id: "dir_mcq_cs8",
    case_chapter: ["Section 161", "Additional Director", "Alternate Director"],
    caseText: `
      <p>Gamma Finance Limited has an Article authorising its Board to appoint
      additional directors. The Board appoints Mr. Raj as an additional director.
      Mr. Raj had earlier failed to obtain appointment as a director at a general
      meeting of the company.</p>

      <p>Separately, Mr. Suresh, a director of the company, leaves India for a period
      of four months. The Articles authorise the Board to appoint an alternate
      director. The Board proposes Mr. Amit, who is not a director of the company,
      as an alternate director.</p>

      <p>Mr. Suresh argues that he himself has the authority to nominate Mr. Amit
      as his alternate because the Articles contain a provision relating to alternate
      directors.</p>
    `,
    questions: [

      {
        question_id: "dir_mcq_cs8_1",
        chapter_name: ["Section 161"],
        question: "The power of the Board to appoint an additional director must be conferred by:",
        options: [
          "The Registrar",
          "The Articles of Association",
          "The auditor",
          "The Central Government in every case"
        ],
        answer: 1,
        solution_html: `
          <p><strong>Correct Answer: The Articles of Association.</strong></p>
          <p>The Articles may confer on the Board the power to appoint
          an additional director.</p>
        `
      },

      {
        question_id: "dir_mcq_cs8_2",
        chapter_name: ["Section 161"],
        question: "Can Mr. Raj, who failed to get appointed as a director in a general meeting, be appointed as an additional director?",
        options: [
          "Yes, automatically",
          "Yes, with Registrar approval",
          "No",
          "Yes, if he has DIN"
        ],
        answer: 2,
        solution_html: `
          <p><strong>Correct Answer: No.</strong></p>
          <p>A person who failed to get appointed as a director in a general
          meeting cannot be appointed as an additional director.</p>
        `
      },

      {
        question_id: "dir_mcq_cs8_3",
        chapter_name: ["Section 161"],
        question: "Mr. Suresh will be absent from India for four months. Is the minimum period of absence required for appointment of an alternate director satisfied?",
        options: [
          "Yes",
          "No, absence must be six months",
          "No, absence must be one year",
          "No, alternate directors are prohibited"
        ],
        answer: 0,
        solution_html: `
          <p><strong>Correct Answer: Yes.</strong></p>
          <p>An alternate director may be appointed where the original director
          is absent from India for a period of not less than three months.</p>
        `
      },

      {
        question_id: "dir_mcq_cs8_4",
        chapter_name: ["Section 161"],
        question: "Who has the authority to appoint an alternate director where the Articles or general meeting has authorised such appointment?",
        options: [
          "The original director",
          "The Board of Directors",
          "Any shareholder",
          "The Registrar"
        ],
        answer: 1,
        solution_html: `
          <p><strong>Correct Answer: The Board of Directors.</strong></p>
          <p>The authority to make the appointment rests with the Board,
          subject to authorisation by the Articles or resolution passed by
          the company in general meeting.</p>
        `
      },

      {
        question_id: "dir_mcq_cs8_5",
        chapter_name: ["Section 161"],
        question: "If Mr. Suresh returns to India before the end of his permissible term, what happens to Mr. Amit as alternate director?",
        options: [
          "He automatically becomes a permanent director",
          "He continues until the next AGM",
          "He vacates office",
          "He becomes an additional director"
        ],
        answer: 2,
        solution_html: `
          <p><strong>Correct Answer: He vacates office.</strong></p>
          <p>An alternate director shall vacate office when the original
          director returns to India.</p>
        `
      }
    ]
  },


  /* =========================================================
     CASE SCENARIO 9
     NOMINEE DIRECTOR / CASUAL VACANCY
  ========================================================= */
  {
    case_id: "dir_mcq_cs9",
    case_chapter: ["Section 161", "Nominee Director", "Casual Vacancy"],
    caseText: `
      <p>Delta Engineering Limited obtained substantial financial assistance from
      a financial institution. Under the financing agreement, the institution was
      entitled to nominate a director on the Board of Delta Engineering Limited.</p>

      <p>The financial institution nominated Mr. Karan. The Articles of the company
      permit appointment of nominee directors by the Board in accordance with the
      financing agreement.</p>

      <p>Separately, one of the directors appointed by the shareholders in the general
      meeting resigned before completion of his normal term. The Board decided to
      fill the resulting vacancy at a Board meeting. The company proposed to place
      the appointment before members at the immediate next general meeting.</p>

      <p>Later, the newly appointed director also vacated office before the end of the
      term for which the original director would have continued.</p>
    `,
    questions: [

      {
        question_id: "dir_mcq_cs9_1",
        chapter_name: ["Section 161"],
        question: "Who can nominate a director under Section 161(3), subject to the prescribed conditions?",
        options: [
          "Only ordinary shareholders",
          "An institution pursuant to law or agreement, or Central/State Government by virtue of shareholding in a Government company",
          "Only the statutory auditor",
          "Only the Registrar"
        ],
        answer: 1,
        solution_html: `
          <p><strong>Correct Answer: An institution pursuant to law or agreement, or Central/State Government by virtue of shareholding in a Government company.</strong></p>
          <p>Section 161(3) permits appointment of nominee directors in the
          specified circumstances.</p>
        `
      },

      {
        question_id: "dir_mcq_cs9_2",
        chapter_name: ["Section 161"],
        question: "The director nominated by the financial institution primarily represents:",
        options: [
          "The statutory auditor",
          "The Registrar",
          "The nominating institution",
          "The minority shareholders only"
        ],
        answer: 2,
        solution_html: `
          <p><strong>Correct Answer: The nominating institution.</strong></p>
          <p>A nominee director represents the institution or body that
          nominates the person, subject to the applicable law or agreement.</p>
        `
      },

      {
        question_id: "dir_mcq_cs9_3",
        chapter_name: ["Section 161"],
        question: "The resignation of a director appointed by shareholders before expiry of his normal term results in:",
        options: [
          "Retirement by rotation",
          "Casual vacancy",
          "Automatic dissolution of the Board",
          "Additional directorship"
        ],
        answer: 1,
        solution_html: `
          <p><strong>Correct Answer: Casual vacancy.</strong></p>
          <p>A casual vacancy arises when the office of a director appointed
          by the company in general meeting is vacated before expiry of his
          term in the normal course.</p>
        `
      },

      {
        question_id: "dir_mcq_cs9_4",
        chapter_name: ["Section 161"],
        question: "Who may fill the casual vacancy, subject to the Articles?",
        options: [
          "Board of Directors at a Board meeting",
          "Only the Registrar",
          "Only the statutory auditor",
          "Only the Central Government"
        ],
        answer: 0,
        solution_html: `
          <p><strong>Correct Answer: Board of Directors at a Board meeting.</strong></p>
          <p>The Board may fill the casual vacancy at a meeting of the Board,
          subject to the Articles and subsequent approval by members at the
          immediate next general meeting.</p>
        `
      },

      {
        question_id: "dir_mcq_cs9_5",
        chapter_name: ["Section 161"],
        question: "The person appointed to fill the casual vacancy holds office:",
        options: [
          "For a fresh full term",
          "Until the next AGM irrespective of the original term",
          "Only up to the date up to which the original director would have held office",
          "For three years compulsorily"
        ],
        answer: 2,
        solution_html: `
          <p><strong>Correct Answer: Only up to the date up to which the original director would have held office.</strong></p>
          <p>The appointee holds office only for the unexpired portion of
          the term of the director whose vacancy was filled.</p>
        `
      }
    ]
  },


  /* =========================================================
     CASE SCENARIO 10
     SECTION 162 - INDIVIDUAL VOTING
  ========================================================= */
  {
    case_id: "dir_mcq_cs10",
    case_chapter: ["Section 162", "Appointment of Directors"],
    caseText: `
      <p>Omega Retail Limited convened a general meeting for appointment of three
      directors, namely Mr. A, Mr. B and Mr. C. The Chairman proposed a single
      resolution for appointment of all three persons.</p>

      <p>Before moving the final resolution, a separate proposal was placed before
      the meeting asking whether the members agreed to appoint the three persons
      through a single resolution. Twenty members voted in favour of this proposal,
      while five members abstained and none voted against it.</p>

      <p>The Chairman then proceeded with the single resolution appointing Mr. A,
      Mr. B and Mr. C. In a separate situation, another company attempted to appoint
      two directors through a single resolution without first obtaining approval of
      the members for such procedure.</p>
    `,
    questions: [

      {
        question_id: "dir_mcq_cs10_1",
        chapter_name: ["Section 162"],
        question: "What is the general rule under Section 162 regarding appointment of two or more directors?",
        options: [
          "They may always be appointed through a single resolution",
          "They must generally be voted upon individually",
          "They must always be appointed through a special resolution",
          "The Board must appoint all directors"
        ],
        answer: 1,
        solution_html: `
          <p><strong>Correct Answer: They must generally be voted upon individually.</strong></p>
          <p>Section 162 requires each individual person to be voted upon
          separately for appointment as director, subject to the specified exception.</p>
        `
      },

      {
        question_id: "dir_mcq_cs10_2",
        chapter_name: ["Section 162"],
        question: "Can Mr. A, Mr. B and Mr. C be appointed by a single resolution in the given situation?",
        options: [
          "Yes, because no member voted against the preliminary proposal",
          "No, because all appointments must always be separate",
          "No, because five members abstained",
          "Only with Registrar approval"
        ],
        answer: 0,
        solution_html: `
          <p><strong>Correct Answer: Yes, because no member voted against the preliminary proposal.</strong></p>
          <p>An exception permits two or more persons to be appointed through
          a single resolution if a proposal to move such resolution has first
          been agreed to at the general meeting without any vote being cast
          against it.</p>
        `
      },

      {
        question_id: "dir_mcq_cs10_3",
        chapter_name: ["Section 162"],
        question: "What is the nature of the resolution appointing the three directors after the preliminary proposal has been validly approved?",
        options: [
          "Ordinary resolution",
          "Special resolution",
          "Board resolution only",
          "Resolution of the Registrar"
        ],
        answer: 0,
        solution_html: `
          <p><strong>Correct Answer: Ordinary resolution.</strong></p>
          <p>The single resolution for appointment can be passed by simple
          majority where the preliminary proposal has first been agreed to
          without any vote being cast against it.</p>
        `
      },

      {
        question_id: "dir_mcq_cs10_4",
        chapter_name: ["Section 162"],
        question: "In the second company, two directors were appointed through a single resolution without first obtaining approval for the proposal. What is the consequence?",
        options: [
          "The appointment is automatically valid",
          "The resolution is void",
          "The appointment becomes valid after 30 days",
          "Only the Chairman is penalised"
        ],
        answer: 1,
        solution_html: `
          <p><strong>Correct Answer: The resolution is void.</strong></p>
          <p>A resolution moved in contravention of the requirements of
          Section 162 is void, whether or not an objection was raised at the
          time when it was moved.</p>
        `
      },

      {
        question_id: "dir_mcq_cs10_5",
        chapter_name: ["Section 162"],
        question: "The primary purpose behind requiring individual voting for directors is to:",
        options: [
          "Increase the remuneration of directors",
          "Prevent shareholders from rejecting a particular candidate",
          "Enable shareholders to exercise their choice regarding each candidate",
          "Reduce the number of Board meetings"
        ],
        answer: 2,
        solution_html: `
          <p><strong>Correct Answer: Enable shareholders to exercise their choice regarding each candidate.</strong></p>
          <p>Individual voting prevents a situation where shareholders must
          accept or reject all proposed directors together and enables them
          to exercise their choice regarding each individual candidate.</p>
        `
      }
    ]
  },

  /* =========================================================
     CASE SCENARIO 1 - SECTION 163
     PROPORTIONAL REPRESENTATION
  ========================================================= */

  {
    case_id: "seta_AI_cs_001",
    difficulty: "Easy",
    caseText: `
      <p><strong>Zenith Engineering Limited</strong> is a public company having
      12 directors on its Board. The shareholders of the company are divided into
      two broad groups. A group holding approximately 60% of the voting rights
      regularly succeeds in appointing most of the directors through the ordinary
      voting mechanism. The remaining shareholders, despite holding about 40% of
      the voting rights, have repeatedly failed to get even one of their nominees
      appointed to the Board.</p>

      <p>To provide a fair opportunity to the minority shareholders, the company
      proposes to amend its Articles of Association. The proposed Articles contain
      a provision that directors may be appointed according to the principle of
      proportional representation. The company proposes to use the system of
      single transferable vote for such appointments.</p>

      <p>The Articles further provide that at least two-thirds of the total number
      of directors shall be appointed according to the principle of proportional
      representation. The company also proposes that such appointments may be
      made once every three years.</p>

      <p>During the same period, one director appointed under the proportional
      representation system vacates office before completion of his term. The
      Articles of the company do not contain any special procedure for filling
      such casual vacancy.</p>
    `,

    questions: [

      {
        question_id: "seta_AI_cs_1_16",
        question: "What is the minimum proportion of the total number of directors that the Articles of Zenith Engineering Limited must provide for appointment by proportional representation?",
        options: [
          "One-third of the total number of directors",
          "One-half of the total number of directors",
          "Two-thirds of the total number of directors",
          "Three-fourths of the total number of directors"
        ],
        answer: 2,
        reason: "Section 163 requires the Articles to provide for appointment of not less than two-thirds of the total number of directors according to the principle of proportional representation."
      },

      {
        question_id: "seta_AI_cs_1_17",
        question: "Which of the following voting methods may be adopted for appointment of directors under the principle of proportional representation?",
        options: [
          "Only ordinary voting",
          "Single transferable vote",
          "Only postal ballot",
          "Only secret ballot"
        ],
        answer: 1,
        reason: "Section 163 permits proportional representation through methods such as single transferable vote, cumulative voting or another transparent and effective method."
      },

      {
        question_id: "seta_AI_cs_1_18",
        question: "How frequently may appointments under Section 163 be made?",
        options: [
          "Once every year",
          "Once every two years",
          "Once every three years",
          "Once every five years"
        ],
        answer: 2,
        reason: "Appointments under the principle of proportional representation may be made once in every three years."
      },

      {
        question_id: "seta_AI_cs_1_19",
        question: "What is the appropriate method for filling the casual vacancy where a director appointed under proportional representation vacates office and the Articles contain no specific provision?",
        options: [
          "The Central Government must appoint the director",
          "The shareholders must immediately elect the director",
          "The Board may fill the vacancy by a Board resolution, subject to subsequent regularisation",
          "The vacancy must remain unfilled until the next three-year cycle"
        ],
        answer: 2,
        reason: "Casual vacancies of directors appointed under Section 163 are dealt with under Section 161(4). If the Articles contain no provision, the Board may fill the vacancy by Board resolution, subject to regularisation by shareholders at the immediately held general meeting."
      },

      {
        question_id: "seta_AI_cs_1_20",
        question: "What is the principal objective behind Section 163?",
        options: [
          "To ensure that only majority shareholders appoint directors",
          "To provide proportionate representation to minority shareholders",
          "To eliminate voting rights of shareholders",
          "To increase the number of independent directors"
        ],
        answer: 1,
        reason: "Section 163 provides a mechanism for proportional representation so that shareholders holding substantial minority voting rights can obtain fair representation on the Board."
      }
    ]
  },


  /* =========================================================
     CASE SCENARIO 2 - SECTION 164
     DISQUALIFICATION OF DIRECTORS
  ========================================================= */

  {
    case_id: "seta_AI_cs_002",
    difficulty: "Medium",
    caseText: `
      <p><strong>Prime Consumer Products Limited</strong> has been facing several
      compliance difficulties. Mr. Rahul, one of its proposed directors, has been
      declared to be of unsound mind by a competent court. He has nevertheless
      expressed his intention to become a director of the company.</p>

      <p>Another proposed candidate, Mr. Sameer, has been convicted by a court for
      an offence and sentenced to imprisonment for eight months. He completed his
      sentence only three years ago. A third candidate, Mr. Vikram, has applied to
      be adjudicated as an insolvent and his application is still pending before
      the competent authority.</p>

      <p>Separately, Prime Consumer Products Limited has failed to file its financial
      statements and annual returns continuously for three financial years. One of
      its directors, Mr. Arjun, was a director during the period of default and now
      wants to accept a directorship in another company.</p>

      <p>The company has also failed to repay certain deposits accepted from the
      public and the interest payable thereon. The default has continued for more
      than one year. The Board is considering appointing a person as director
      despite the company's continuing defaults.</p>
    `,

    questions: [

      {
        question_id: "seta_AI_cs_2_21",
        question: "Can Mr. Rahul, who has been declared of unsound mind by a competent court, be appointed as a director?",
        options: [
          "Yes, if shareholders approve by special resolution",
          "Yes, if he possesses a DIN",
          "No, he is disqualified under Section 164(1)",
          "Yes, if he is appointed as an independent director"
        ],
        answer: 2,
        reason: "A person who is of unsound mind and stands so declared by a competent court is disqualified from appointment as a director under Section 164(1)."
      },

      {
        question_id: "seta_AI_cs_2_22",
        question: "Mr. Sameer was sentenced to imprisonment for eight months and completed his sentence three years ago. Which statement is correct?",
        options: [
          "He is eligible because the imprisonment was less than one year",
          "He is disqualified because five years have not elapsed from expiry of the sentence",
          "He is eligible because only offences involving moral turpitude result in disqualification",
          "He is permanently disqualified from every company"
        ],
        answer: 1,
        reason: "A person convicted of an offence and sentenced to imprisonment for not less than six months is disqualified where five years have not elapsed from the date of expiry of the sentence."
      },

      {
        question_id: "seta_AI_cs_2_23",
        question: "What is the position of Mr. Vikram whose application for adjudication as an insolvent is pending?",
        options: [
          "He is eligible until he is actually declared insolvent",
          "He is disqualified because his application for adjudication as an insolvent is pending",
          "He is eligible only as an independent director",
          "He is eligible if the Board approves his appointment"
        ],
        answer: 1,
        reason: "A person who has applied to be adjudicated as an insolvent and whose application is pending is disqualified under Section 164(1)."
      },

      {
        question_id: "seta_AI_cs_2_24",
        question: "What disqualification may arise for Mr. Arjun because Prime Consumer Products Limited has not filed its financial statements or annual returns for a continuous period of three financial years?",
        options: [
          "He may be disqualified for five years",
          "He is permanently disqualified",
          "He is disqualified only for one year",
          "He is disqualified only from being an independent director"
        ],
        answer: 0,
        reason: "Under Section 164(2), where a company has not filed financial statements or annual returns for any continuous period of three financial years, the concerned director is disqualified for a period of five years."
      },

      {
        question_id: "seta_AI_cs_2_25",
        question: "The company has failed to repay deposits and interest thereon for more than one year. What consequence may arise for its directors under Section 164(2)?",
        options: [
          "No consequence arises because deposits are not covered",
          "The concerned directors may be disqualified for five years",
          "The directors are disqualified permanently",
          "Only the company secretary is disqualified"
        ],
        answer: 1,
        reason: "Failure to repay deposits accepted by the company or interest thereon, or to redeem debentures or pay interest thereon, or to pay dividend declared, where the failure continues for one year or more, attracts disqualification under Section 164(2) for five years."
      }
    ]
  },


  /* =========================================================
     CASE SCENARIO 3 - SECTION 165
     MAXIMUM NUMBER OF DIRECTORSHIPS
  ========================================================= */

  {
    case_id: "seta_AI_cs_003",
    difficulty: "Medium",
    caseText: `
      <p><strong>Mr. Karan</strong> is a professional director who sits on the
      Boards of several companies. As on the current date, he is a director in
      18 companies, including 8 public companies. He is now approached by three
      additional companies for appointment as a director.</p>

      <p>Two of the companies are public companies and one is a private company.
      One of the private companies is a subsidiary of a public company. Mr. Karan
      also serves as a director of a dormant company and a Section 8 company.</p>

      <p>While considering the appointments, Mr. Karan argues that the 20-company
      ceiling does not apply to his directorship in a dormant company and that his
      directorship in the Section 8 company should also be ignored, provided the
      conditions applicable to the exemption are satisfied.</p>

      <p>The shareholders of one of the companies in which Mr. Karan is already a
      director have also passed a special resolution restricting directors of that
      company from holding directorship in more than a specified lower number of
      companies.</p>

      <p>The Board is concerned about the consequences if Mr. Karan accepts
      appointments beyond the statutory limits.</p>
    `,

    questions: [

      {
        question_id: "seta_AI_cs_3_26",
        question: "What is the maximum number of companies in which a person may generally hold office as director at the same time under Section 165?",
        options: [
          "10 companies",
          "15 companies",
          "20 companies",
          "25 companies"
        ],
        answer: 2,
        reason: "Section 165(1) provides that a person shall not hold office as director, including alternate directorship, in more than 20 companies at the same time."
      },

      {
        question_id: "seta_AI_cs_3_27",
        question: "Out of the maximum limit of 20 companies, what is the maximum number of public companies in which a person can generally be a director?",
        options: [
          "5",
          "10",
          "15",
          "20"
        ],
        answer: 1,
        reason: "The maximum number of public companies in which a person can be appointed as director is 10."
      },

      {
        question_id: "seta_AI_cs_3_28",
        question: "For calculating the limit of 10 public companies, which of the following is also included?",
        options: [
          "Every dormant company",
          "Every Section 8 company",
          "Private companies that are holding or subsidiary companies of a public company",
          "Only foreign companies"
        ],
        answer: 2,
        reason: "The limit of 10 public companies includes directorship in private companies that are either holding or subsidiary companies of a public company."
      },

      {
        question_id: "seta_AI_cs_3_29",
        question: "Which directorship is excluded while calculating the maximum limit of 20 companies, subject to the applicable conditions?",
        options: [
          "Directorship in a dormant company",
          "Directorship in every listed company",
          "Directorship in every public company",
          "Directorship in every private company"
        ],
        answer: 0,
        reason: "Directorship in a dormant company is not included in determining the maximum permissible limit of 20 directorships."
      },

      {
        question_id: "seta_AI_cs_3_30",
        question: "Can the members of a company prescribe a number lower than the statutory maximum number of directorships?",
        options: [
          "No, the statutory limit can never be reduced",
          "Yes, by passing a special resolution",
          "Yes, only by an ordinary resolution",
          "Yes, only with approval of the Central Government"
        ],
        answer: 1,
        reason: "Under Section 165(2), members of a company may, by special resolution, specify a lesser number of companies in which a director of that company may act as director."
      }
    ]
  },


  /* =========================================================
     CASE SCENARIO 4 - INDEPENDENT DIRECTOR
     SECTIONS 149 AND 150
  ========================================================= */

  {
    case_id: "seta_AI_cs_004",
    difficulty: "Hard",
    caseText: `
      <p><strong>Galaxy Financial Services Limited</strong> is a listed public
      company having 9 directors. The company is required to maintain the prescribed
      number of independent directors. The Board proposes to appoint Ms. Neha as an
      independent director.</p>

      <p>Ms. Neha is not a promoter of the company or its holding, subsidiary or
      associate company. She is also not related to any promoter or director of the
      company. However, her relative holds securities in the company having a face
      value of ₹45 lakh. The relative does not hold any other significant interest
      in the company.</p>

      <p>Ms. Neha has not been an employee or key managerial personnel of the company
      during the prescribed preceding period. She has also not been a partner or
      employee of the company's statutory auditor during the relevant period.</p>

      <p>The Board intends to select Ms. Neha from the databank of persons willing
      to act as independent directors. The company plans to approve her appointment
      in the general meeting. After appointment, Ms. Neha will give her declaration
      of independence at the first Board meeting in which she participates.</p>

      <p>The Board also proposes to grant her stock options as part of her remuneration.
      Ms. Neha objects to the proposal and states that an independent director cannot
      receive stock options under Section 149.</p>
    `,

    questions: [

      {
        question_id: "seta_AI_cs_4_31",
        question: "Galaxy Financial Services Limited has 9 directors. What is the minimum number of independent directors required for a listed public company?",
        options: [
          "1",
          "2",
          "3",
          "4"
        ],
        answer: 2,
        reason: "A listed public company must have at least one-third of the total number of directors as independent directors. One-third of 9 is 3."
      },

      {
        question_id: "seta_AI_cs_4_32",
        question: "Is Ms. Neha's relative holding securities having a face value of ₹45 lakh by itself within the prescribed limit mentioned in the case material?",
        options: [
          "No, because any holding by a relative is prohibited",
          "Yes, because the prescribed threshold is ₹50 lakh or 2% of paid-up capital, as applicable",
          "No, because the threshold is ₹25 lakh",
          "Yes, but only if she is a nominee director"
        ],
        answer: 1,
        reason: "The relative may hold security or interest of face value not exceeding ₹50 lakh or 2% of the paid-up capital of the company, its holding, subsidiary or associate company, subject to the prescribed provisions."
      },

      {
        question_id: "seta_AI_cs_4_33",
        question: "When must Ms. Neha give her declaration that she meets the criteria of independence?",
        options: [
          "Only at the time of appointment",
          "At the first Board meeting in which she participates and thereafter at the first Board meeting of every financial year and whenever circumstances change",
          "Only once every five years",
          "Only when demanded by shareholders"
        ],
        answer: 1,
        reason: "Section 149(7) requires an independent director to give the declaration at the first Board meeting in which he or she participates, thereafter at the first Board meeting in every financial year, and whenever circumstances change affecting independence."
      },

      {
        question_id: "seta_AI_cs_4_34",
        question: "Which statement is correct regarding stock options for Ms. Neha as an independent director?",
        options: [
          "She may receive unlimited stock options",
          "She may receive stock options if approved by the Board",
          "She is not entitled to any stock option",
          "She may receive stock options only with Central Government approval"
        ],
        answer: 2,
        reason: "Section 149(9) specifically provides that an independent director shall not be entitled to any stock option."
      },

      {
        question_id: "seta_AI_cs_4_35",
        question: "Who is responsible for exercising due diligence before selecting an independent director from the databank?",
        options: [
          "The Central Government",
          "The institute maintaining the databank",
          "The company making the appointment",
          "The Registrar of Companies"
        ],
        answer: 2,
        reason: "The responsibility for exercising due diligence before selecting a person as an independent director from the databank lies with the company making the appointment."
      }
    ]
  },


  /* =========================================================
     CASE SCENARIO 5 - SECTIONS 166 AND 167
     DUTIES AND VACATION OF OFFICE
  ========================================================= */

  {
    case_id: "seta_AI_cs_005",
    difficulty: "Hard",
    caseText: `
      <p><strong>Nova Infrastructure Limited</strong> has been facing a number of
      governance issues. Mr. Dev, one of its directors, identifies a profitable
      business opportunity that falls within the objects and business activities
      of Nova Infrastructure Limited. Instead of presenting the opportunity to the
      company, he uses his position to undertake the transaction personally and
      earns an undue gain.</p>

      <p>Another director, Mr. Rishi, has a direct interest in a contract proposed
      to be entered into by the company. However, he fails to disclose his interest
      as required. He also remains absent from every Board meeting held during a
      continuous period of twelve months.</p>

      <p>Meanwhile, Ms. Tanya, another director, incurs a disqualification under
      Section 164(2) because of the company's statutory defaults. She argues that
      because she continues to be a director of the defaulting company, her office
      should also automatically become vacant in every other company in which she
      is a director.</p>

      <p>In another matter, Mr. Sameer, a director of the company, is convicted by
      a court and sentenced to imprisonment for six months. He intends to challenge
      the conviction by filing an appeal within the prescribed period.</p>

      <p>The company is also considering what should happen if all its directors
      simultaneously vacate office due to disqualification.</p>
    `,

    questions: [

      {
        question_id: "seta_AI_cs_5_36",
        question: "Which duty of a director is violated when Mr. Dev personally exploits a business opportunity falling within the company's objects for his own benefit?",
        options: [
          "Duty to assign his office",
          "Duty to avoid situations involving conflict of interest and undue gain",
          "Duty to appoint the auditor",
          "Duty to hold general meetings"
        ],
        answer: 1,
        reason: "Section 166 requires directors to avoid situations where their direct or indirect interest conflicts with the company's interest and prohibits them from achieving undue gain or advantage for themselves or their relatives, partners or associates."
      },

      {
        question_id: "seta_AI_cs_5_37",
        question: "What is the consequence of Mr. Dev being found guilty of making an undue gain?",
        options: [
          "He may retain the gain if shareholders approve it",
          "He is required to pay an amount equal to the undue gain to the company",
          "The gain is divided among the directors",
          "The gain is transferred to the Registrar"
        ],
        answer: 1,
        reason: "Under Section 166, where a director is found guilty of making an undue gain, he is liable to pay an amount equal to that gain to the company."
      },

      {
        question_id: "seta_AI_cs_5_38",
        question: "Mr. Rishi has remained absent from all Board meetings during a period of twelve months. What is the consequence under Section 167?",
        options: [
          "His office becomes vacant",
          "He automatically becomes an independent director",
          "He is suspended for one month only",
          "No consequence arises if he had not taken leave"
        ],
        answer: 0,
        reason: "The office of a director becomes vacant if he absents himself from all meetings of the Board held during a period of twelve months, whether or not he has sought leave of absence."
      },

      {
        question_id: "seta_AI_cs_5_39",
        question: "Ms. Tanya incurs disqualification under Section 164(2). In which company does her office generally become vacant under the special rule?",
        options: [
          "In every company in which she is a director",
          "Only in the company which committed the default",
          "Only in companies having independent directors",
          "Only in private companies"
        ],
        answer: 1,
        reason: "Where a director incurs disqualification under Section 164(2), the office becomes vacant in all companies other than the company which is in default under that sub-section."
      },

      {
        question_id: "seta_AI_cs_5_40",
        question: "Mr. Sameer is convicted and sentenced to imprisonment for six months. He files an appeal within 30 days. What is the effect on vacation of his office?",
        options: [
          "His office immediately becomes vacant and cannot be restored",
          "His office is not vacated during the period specified while the appeal is pending, subject to the statutory conditions",
          "He automatically becomes an independent director",
          "The Board must immediately appoint a replacement"
        ],
        answer: 1,
        reason: "For vacation arising from conviction or an order of disqualification, Section 167 provides statutory periods during which the office is not vacated, including where an appeal or petition is preferred within the prescribed period."
      },

      {
        question_id: "seta_AI_cs_5_41",
        question: "If all the directors of a company vacate their offices under Section 167(1), who shall appoint the required number of directors until directors are appointed by the company in general meeting?",
        options: [
          "Only the Registrar",
          "The promoter or, in his absence, the Central Government",
          "Only the statutory auditor",
          "The shareholders individually"
        ],
        answer: 1,
        reason: "Under Section 167(3), where all directors vacate their offices, the promoter or, in his absence, the Central Government shall appoint the required number of directors who hold office until directors are appointed by the company in general meeting."
      }
    ]
  }
];