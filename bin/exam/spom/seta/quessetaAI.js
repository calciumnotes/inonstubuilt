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
  },

  /* =========================================================
     HARD CASE SCENARIO 6
     SECTION 163 + GOVERNMENT COMPANY EXEMPTION
  ========================================================= */

  {
    case_id: "seta_AI_cs_006",
    difficulty: "Hard",
    caseText: `
      <p><strong>National Industrial Projects Limited (NIPL)</strong> is a
      Government company whose entire paid-up share capital is held by the
      Central Government. The company has 15 directors on its Board. A group of
      minority institutional shareholders has requested that the Articles of the
      company contain provisions for appointment of directors through proportional
      representation so that minority interests can receive representation on the
      Board.</p>

      <p>The legal department of NIPL examines Section 163 and observes that,
      ordinarily, the Articles should provide for appointment of not less than
      two-thirds of the total number of directors through proportional
      representation. The proposed Articles contemplate appointment of 10
      directors through proportional representation using the single transferable
      vote system.</p>

      <p>However, NIPL has not committed any default in filing its financial
      statements under Section 137 or its annual return under Section 92 with the
      Registrar. The company therefore claims the exemption applicable to a
      Government company.</p>

      <p>Separately, NIPL has a wholly-owned subsidiary, <strong>National
      Infrastructure Services Limited</strong>, whose entire paid-up share capital
      is held by NIPL. The subsidiary also wishes to know whether Section 163
      applies to it. The legal adviser is required to determine the position by
      considering the statutory exemption and the minimum proportion applicable
      in cases where Section 163 does apply.</p>
    `,

    questions: [

      {
        question_id: "seta_AI_cs_6_42",
        question: "If Section 163 were applicable to NIPL, what is the minimum number of directors out of 15 whose appointment would have to be provided for by proportional representation?",
        options: [
          "5 directors",
          "8 directors",
          "10 directors",
          "12 directors"
        ],
        answer: 2,
        reason: "Section 163 requires the Articles to provide for appointment of not less than two-thirds of the total number of directors through proportional representation. Two-thirds of 15 is 10 directors."
      },

      {
        question_id: "seta_AI_cs_6_43",
        question: "Which of the following is the most appropriate conclusion regarding the applicability of Section 163 to NIPL?",
        options: [
          "Section 163 necessarily applies because NIPL is a public company",
          "Section 163 does not apply because NIPL is a Government company wholly owned by the Central Government and has not committed the specified filing defaults",
          "Section 163 applies because minority shareholders have demanded proportional representation",
          "Section 163 applies unless the Articles specifically exclude it"
        ],
        answer: 1,
        reason: "Section 163 does not apply to a Government company in which the entire paid-up share capital is held by the Central Government, State Government(s), or combination of Central and State Governments, subject to the condition that the Government company has not committed the specified filing defaults."
      },

      {
        question_id: "seta_AI_cs_6_44",
        question: "NIPL's subsidiary is wholly owned by NIPL. Assuming NIPL satisfies the conditions of the exemption, which statement is correct regarding the subsidiary?",
        options: [
          "The subsidiary is automatically subject to Section 163 because it is not itself a Government company",
          "The subsidiary may also fall within the exemption where its entire paid-up share capital is held by the qualifying Government company",
          "The subsidiary is exempt only if it has more than 20 directors",
          "The subsidiary can claim exemption only with approval of the Registrar"
        ],
        answer: 1,
        reason: "The exemption also extends to a subsidiary of the qualifying Government company where the entire paid-up share capital of the subsidiary is held by that Government company, subject to the prescribed condition regarding filing defaults."
      },

      {
        question_id: "seta_AI_cs_6_45",
        question: "NIPL proposes to use the single transferable vote system for proportional representation. Which statement correctly describes the permitted voting methods under Section 163?",
        options: [
          "Only single transferable vote is permitted",
          "Only cumulative voting is permitted",
          "Single transferable vote, cumulative voting or another transparent and effective method ensuring fair minority representation may be used",
          "Only ordinary majority voting may be used"
        ],
        answer: 2,
        reason: "Section 163 permits single transferable vote, cumulative voting, or otherwise another transparent and effective method of voting that ensures fair representation of minority interests."
      },

      {
        question_id: "seta_AI_cs_6_46",
        question: "A director appointed through proportional representation subsequently vacates office. The Articles are silent regarding the casual vacancy. Which procedure is applicable?",
        options: [
          "The vacancy must be filled only by proportional representation at the next general meeting",
          "The Central Government must appoint the replacement",
          "The Board may fill the vacancy by Board resolution, subject to subsequent regularisation by shareholders at the immediately held general meeting",
          "The vacancy cannot be filled until the next three-year cycle"
        ],
        answer: 2,
        reason: "Section 163 provides that casual vacancies of such directors are filled in accordance with Section 161(4). Where the Articles contain no provision, the Board may fill the vacancy by Board resolution, subject to regularisation by shareholders at the immediately held general meeting."
      }
    ]
  },


  /* =========================================================
     HARD CASE SCENARIO 7
     SECTION 164 - MULTIPLE DISQUALIFICATIONS
  ========================================================= */

  {
    case_id: "seta_AI_cs_007",
    difficulty: "Hard",
    caseText: `
      <p><strong>Orion Technologies Limited</strong> is evaluating three
      candidates for appointment as directors.</p>

      <p><strong>Mr. A</strong> was convicted of an offence and sentenced to
      imprisonment for eight months. His sentence expired three years ago. He has
      filed an appeal against the conviction, arguing that the conviction should
      not operate as a disqualification while the appeal is pending.</p>

      <p><strong>Mr. B</strong> was convicted of an offence and sentenced to
      imprisonment for seven years. He completed his sentence several years ago.
      He contends that since more than five years have elapsed from the expiry of
      his sentence, he is now eligible for appointment.</p>

      <p><strong>Mr. C</strong> was a director of another company which failed to
      file its financial statements and annual returns for a continuous period of
      three financial years. He was appointed as a director of the defaulting
      company only one month before the disqualification consequences were being
      considered. The Board argues that he should immediately suffer the same
      disqualification as directors who had been associated with the company for
      the entire period.</p>

      <p>The company also discovers that another proposed director has failed to
      obtain a DIN and that one candidate has not paid calls on shares held jointly
      with another shareholder, with more than six months having elapsed from the
      last date fixed for payment.</p>
    `,

    questions: [

      {
        question_id: "seta_AI_cs_7_47",
        question: "Mr. A was sentenced to imprisonment for eight months and only three years have elapsed from expiry of his sentence. Is he disqualified despite filing an appeal?",
        options: [
          "No, because an appeal automatically removes the disqualification",
          "Yes, because imprisonment was not less than six months and five years have not elapsed; the specified disqualification continues despite an appeal or petition",
          "No, because only imprisonment of seven years or more causes disqualification",
          "Yes, but only if the shareholders pass a resolution"
        ],
        answer: 1,
        reason: "A person convicted and sentenced to imprisonment for not less than six months is disqualified if five years have not elapsed from expiry of the sentence. Under the proviso to Section 164(3), the disqualifications under clauses (d), (e) and (g) continue even where an appeal or petition has been filed."
      },

      {
        question_id: "seta_AI_cs_7_48",
        question: "Mr. B was sentenced to imprisonment for seven years. More than five years have elapsed since completion of his sentence. Can he be appointed as a director?",
        options: [
          "Yes, because the five-year period has expired",
          "Yes, if the Board approves his appointment",
          "No, because a person sentenced to imprisonment for seven years or more is not eligible to be appointed as a director in any company",
          "Yes, but only in a private company"
        ],
        answer: 2,
        reason: "Where a person has been convicted and sentenced to imprisonment for seven years or more, he shall not be eligible to be appointed as a director in any company. The general five-year rule does not make him eligible."
      },

      {
        question_id: "seta_AI_cs_7_49",
        question: "Mr. C was appointed as a director of a company that had already committed a Section 164(2) default. For how long from the date of his appointment does the special six-month provision operate?",
        options: [
          "Three months",
          "Six months",
          "One year",
          "Five years"
        ],
        answer: 1,
        reason: "Where a person is appointed as a director of a company which has committed a default under Section 164(2), he shall not incur the disqualification for a period of six months from the date of his appointment."
      },

      {
        question_id: "seta_AI_cs_7_50",
        question: "A proposed director has failed to obtain a Director Identification Number. Which provision makes this a disqualification?",
        options: [
          "Section 149(6)",
          "Section 152(3)",
          "Section 164(1)(h)",
          "Section 165(6)"
        ],
        answer: 2,
        reason: "Section 164(1)(h) provides disqualification where the person has not complied with Section 152(3), which requires a director to have a DIN."
      },

      {
        question_id: "seta_AI_cs_7_51",
        question: "A person has failed to pay calls on shares held jointly with another person, and six months have elapsed from the last day fixed for payment. Which statement is correct?",
        options: [
          "The disqualification does not apply because the shares are jointly held",
          "The disqualification applies because Section 164(1)(f) covers shares held individually or jointly",
          "The disqualification applies only if the shares are listed",
          "The disqualification applies only after one year"
        ],
        answer: 1,
        reason: "Section 164(1)(f) applies where calls in respect of shares held by the person have not been paid and six months have elapsed from the last day fixed for payment. It is immaterial whether the shares are held individually or jointly."
      }
    ]
  },


  /* =========================================================
     HARD CASE SCENARIO 8
     SECTION 165 - COMPUTATION OF DIRECTORSHIPS
  ========================================================= */

  {
    case_id: "seta_AI_cs_008",
    difficulty: "Hard",
    caseText: `
      <p><strong>Mr. Arvind</strong> is currently a director in 19 companies.
      His portfolio consists of 9 public companies, 8 ordinary private companies,
      1 private company which is a subsidiary of a public company, and 1 dormant
      company.</p>

      <p>He has now received an offer to become a director of one additional
      public company. He argues that his dormant company directorship should not
      be counted while determining the ceiling of 20 companies. He also argues
      that because the new company is public, the only question is whether his
      total public-company directorships exceed 10.</p>

      <p>During the same period, the members of one of the companies in which
      Arvind is a director have passed a special resolution stating that a director
      of that company shall not act as a director in more than 12 companies.</p>

      <p>Arvind nevertheless accepts the new appointment. The company later
      discovers that his appointment may have resulted in contravention of both the
      overall limit and the public-company limit.</p>
    `,

    questions: [

      {
        question_id: "seta_AI_cs_8_52",
        question: "For determining the statutory limit of 20 companies, which of Arvind's existing directorships is excluded?",
        options: [
          "The directorship in the private subsidiary of a public company",
          "The directorship in the dormant company",
          "One of the ordinary private companies",
          "One of the public companies"
        ],
        answer: 1,
        reason: "Directorship in a dormant company is excluded from the calculation of the maximum limit of 20 companies."
      },

      {
        question_id: "seta_AI_cs_8_53",
        question: "Ignoring the dormant company, how many counted companies is Arvind already a director of?",
        options: [
          "18",
          "19",
          "20",
          "21"
        ],
        answer: 0,
        reason: "Arvind has 19 stated directorships, including one dormant company. Since the dormant company is excluded, 18 directorships are counted."
      },

      {
        question_id: "seta_AI_cs_8_54",
        question: "For the purpose of the 10-public-company limit, which of the following must be considered?",
        options: [
          "Only the 9 companies legally classified as public companies",
          "The 9 public companies plus the private company that is a subsidiary of a public company",
          "Only private companies",
          "The dormant company and the ordinary private companies"
        ],
        answer: 1,
        reason: "The 10-company public-company limit includes directorships in private companies that are holding or subsidiary companies of a public company."
      },

      {
        question_id: "seta_AI_cs_8_55",
        question: "If Arvind accepts the additional public-company directorship, what is the number of counted public-company directorships for the purpose of the statutory limit?",
        options: [
          "9",
          "10",
          "11",
          "12"
        ],
        answer: 2,
        reason: "Arvind already has 9 public companies plus 1 private company that is a subsidiary of a public company, making 10 for the public-company limit. The additional public company takes the total to 11."
      },

      {
        question_id: "seta_AI_cs_8_56",
        question: "What is the effect of the special resolution passed by the members restricting a director to not more than 12 companies?",
        options: [
          "It is invalid because only the Central Government can reduce the limit",
          "It is valid because members may specify a lesser number by special resolution",
          "It is valid only if approved by the Registrar",
          "It automatically changes the statutory maximum for every company"
        ],
        answer: 1,
        reason: "Section 165(2) permits members of a company, by special resolution, to specify a lesser number of companies in which a director of that company may act as director."
      }
    ]
  },


  /* =========================================================
     HARD CASE SCENARIO 9
     INDEPENDENT DIRECTOR - SECTION 149
  ========================================================= */

  {
    case_id: "seta_AI_cs_009",
    difficulty: "Hard",
    caseText: `
      <p><strong>Vertex Healthcare Limited</strong> is a listed public company
      having 11 directors. The Board proposes to appoint Mr. Rohit as an
      independent director.</p>

      <p>Rohit is not a promoter and is not related to any promoter or director.
      However, his relative has outstanding indebtedness to the company of
      ₹48 lakh. The relative has also provided a guarantee in connection with the
      indebtedness of another person to the company for ₹49 lakh.</p>

      <p>Rohit himself was an employee of the company's associate company two
      financial years immediately preceding the financial year in which he is
      proposed to be appointed. He resigned from that employment before the
      proposed appointment.</p>

      <p>His professional firm had also provided consulting services to the company
      during the preceding three financial years. The transactions constituted
      12% of the gross turnover of that professional firm.</p>

      <p>Rohit has together with his relatives 1.8% of the total voting power of the
      company. The Board nevertheless believes that he satisfies the independence
      requirements. Rohit is also proposed to be appointed for a three-year term
      and, after completion, the company proposes another three-year term followed
      immediately by a fresh appointment in a different capacity.</p>
    `,

    questions: [

      {
        question_id: "seta_AI_cs_9_57",
        question: "Vertex Healthcare Limited has 11 directors. What is the minimum number of independent directors required?",
        options: [
          "2",
          "3",
          "4",
          "5"
        ],
        answer: 2,
        reason: "A listed public company must have at least one-third of its total number of directors as independent directors. One-third of 11 is 3.67, and any fraction is rounded off as one, resulting in 4 independent directors."
      },

      {
        question_id: "seta_AI_cs_9_58",
        question: "Does Rohit's relative being indebted to the company for ₹48 lakh necessarily violate the prescribed ₹50 lakh threshold stated in the case material?",
        options: [
          "Yes, because any indebtedness of a relative is prohibited",
          "No, because the amount is below ₹50 lakh",
          "Yes, because the threshold is ₹25 lakh",
          "No, because relatives are completely ignored"
        ],
        answer: 1,
        reason: "The prescribed amount referred to in Rule 5 is ₹50 lakh. Indebtedness exceeding that amount creates the specified restriction. ₹48 lakh is below the stated threshold."
      },

      {
        question_id: "seta_AI_cs_9_59",
        question: "Does Rohit's previous employment with the associate company two financial years immediately preceding the proposed appointment affect his eligibility?",
        options: [
          "Yes, because the restriction covers employment in the company, its holding, subsidiary or associate company during any of the three immediately preceding financial years",
          "No, because only employment with the company itself matters",
          "No, because the employment ended before appointment",
          "Yes, but only if he was a promoter"
        ],
        answer: 0,
        reason: "Section 149(6) restricts a person who is or has been an employee of the company or its holding, subsidiary or associate company during any of the three financial years immediately preceding the financial year in which he is proposed to be appointed."
      },

      {
        question_id: "seta_AI_cs_9_60",
        question: "Rohit's professional firm had transactions with the company amounting to 12% of the firm's gross turnover. What is the consequence?",
        options: [
          "There is no restriction because the transaction is below 25%",
          "It may disqualify Rohit because the prescribed threshold for such legal or consulting firm transactions is 10% or more of the firm's gross turnover",
          "It is permissible because only transactions exceeding 50% are prohibited",
          "It is permissible if the Board approves the appointment"
        ],
        answer: 1,
        reason: "Section 149(6) restricts a person who has been an employee, proprietor or partner of a legal or consulting firm which has or had transactions with the company or specified group companies amounting to 10% or more of the gross turnover of that firm during the relevant three-year period."
      },

      {
        question_id: "seta_AI_cs_9_61",
        question: "If Rohit completes two consecutive three-year terms as an independent director, can he immediately be appointed by the same company in another capacity?",
        options: [
          "Yes, because his total tenure is only six years",
          "Yes, provided shareholders pass an ordinary resolution",
          "No, he must observe a cooling period of three years and during that period cannot be appointed or associated with the company in any other capacity, directly or indirectly",
          "Yes, because the cooling period applies only after two five-year terms"
        ],
        answer: 2,
        reason: "An independent director cannot hold office for more than two consecutive terms. After ceasing to be an independent director, he may be appointed only after a cooling period of three years, and during that period he cannot be appointed or associated with the company in any other capacity, directly or indirectly."
      }
    ]
  },


  /* =========================================================
     HARD CASE SCENARIO 10
     SECTIONS 150, 166 AND 167
  ========================================================= */

  {
    case_id: "seta_AI_cs_010",
    difficulty: "Hard",
    caseText: `
      <p><strong>Summit Renewable Energy Limited</strong> proposes to appoint
      Ms. Kavya as an independent director. Kavya's name is included in the
      databank maintained by the Indian Institute of Corporate Affairs. Her
      inclusion was initially for one year, but she failed to apply for renewal
      within thirty days from expiry of the period. Consequently, her name was
      removed from the databank.</p>

      <p>Kavya subsequently applies for restoration and pays the prescribed
      restoration fee. Her name is placed in the restored category for one year.
      During this period, she does not pass the online proficiency self-assessment
      test.</p>

      <p>Separately, one existing independent director of Summit Renewable Energy
      Limited resigns. The Board postpones filling the vacancy indefinitely,
      arguing that the company can wait until the next annual general meeting.</p>

      <p>Another director, Mr. Varun, knowingly continues to act as director even
      after his office has become vacant due to a statutory disqualification.
      The Board ignores the issue.</p>

      <p>Finally, all directors of a different company in the same group vacate
      their offices. The company has no functioning Board and no director remains
      in office. The promoters are available and are considering the appropriate
      statutory course.</p>
    `,

    questions: [

      {
        question_id: "seta_AI_cs_10_62",
        question: "What happens when an individual's name is not renewed in the databank within 30 days from expiry of the period for which it was included?",
        options: [
          "The name remains permanently active",
          "The name stands removed from the databank",
          "The name is automatically converted into lifetime registration",
          "The Central Government renews it automatically"
        ],
        answer: 1,
        reason: "Under Rule 6, an individual must apply for renewal within 30 days from expiry of the inclusion period. Failing this, the individual's name stands removed from the databank."
      },

      {
        question_id: "seta_AI_cs_10_63",
        question: "After restoration, what must Kavya generally do within the one-year restored category to have her name included in the databank again?",
        options: [
          "Obtain approval from the Registrar",
          "Pass the online proficiency self-assessment test",
          "Obtain approval from the Central Government",
          "Serve as a director for one year"
        ],
        answer: 1,
        reason: "After restoration on payment of the prescribed fee, the individual's name is placed in a separate restored category for one year, during which she is required to pass the online proficiency self-assessment test for restoration to the databank."
      },

      {
        question_id: "seta_AI_cs_10_64",
        question: "The independent director of Summit Renewable Energy Limited resigns. By when should the intermittent vacancy generally be filled by the Board?",
        options: [
          "Only at the next AGM",
          "Within six months",
          "At the earliest but not later than the immediate next Board meeting or three months from the date of vacancy, whichever is later",
          "Within thirty days in every case"
        ],
        answer: 2,
        reason: "An intermittent vacancy of an independent director is to be filled by the Board at the earliest but not later than the immediate next Board meeting or three months from the date of vacancy, whichever is later."
      },

      {
        question_id: "seta_AI_cs_10_65",
        question: "Mr. Varun knowingly continues to act as a director after his office has become vacant under Section 167(1). What is the maximum fine prescribed under Section 167(2)?",
        options: [
          "₹50,000",
          "₹1,00,000",
          "₹5,00,000",
          "₹10,00,000"
        ],
        answer: 2,
        reason: "A person who functions as a director knowing that his office has become vacant under Section 167(1) is punishable with fine of not less than ₹1,00,000, which may extend to ₹5,00,000."
      },

      {
        question_id: "seta_AI_cs_10_66",
        question: "Where all directors of a company have vacated their offices under Section 167(1), who is responsible for appointing the required number of directors until the company appoints directors in general meeting?",
        options: [
          "The Registrar alone",
          "The promoter, or in his absence, the Central Government",
          "The statutory auditor",
          "The independent directors of the group company"
        ],
        answer: 1,
        reason: "Section 167(3) provides that where all directors vacate their offices, the promoter or, in his absence, the Central Government shall appoint the required number of directors, who hold office until directors are appointed by the company in general meeting."
      }
    ]
  },

  /* =========================================================
     MEDIUM CASE SCENARIO 11
     SECTION 168 - RESIGNATION OF DIRECTOR
  ========================================================= */

  {
    case_id: "seta_AI_cs_011",
    difficulty: "Medium",
    caseText: `
      <p><strong>Alpha Manufacturing Limited</strong> has five directors on its
      Board. Mr. Raj, one of the directors, decides to resign from office.
      He sends a written resignation notice to the company on 10th August,
      stating that his resignation shall take effect from 20th August.</p>

      <p>The company actually receives the resignation notice on 12th August.
      The Board takes note of the resignation on 14th August.</p>

      <p>Raj is concerned about the statutory filings and asks the Company
      Secretary whether the company is required to intimate the Registrar about
      his resignation. He also wants to know whether he remains responsible for
      offences committed by the company during the period in which he was a
      director.</p>

      <p>Separately, another director, Mr. David, who is a foreign national,
      resigns from the company. The company has already filed Form DIR-12 with
      the Registrar. David is unable to personally complete the filing
      requirements in India.</p>
    `,

    questions: [

      {
        question_id: "seta_AI_cs_11_67",
        question: "From which date will Raj's resignation take effect?",
        options: [
          "10th August",
          "12th August",
          "14th August",
          "20th August"
        ],
        answer: 3,
        reason: "A director's resignation takes effect from the date on which the notice is received by the company or from the date specified by the director in the notice, whichever is later. Here, receipt is on 12th August and the specified date is 20th August. Therefore, resignation takes effect from 20th August."
      },

      {
        question_id: "seta_AI_cs_11_68",
        question: "By when should Alpha Manufacturing Limited intimate the Registrar about Raj's resignation?",
        options: [
          "Within 7 days from the resignation",
          "Within 15 days from the resignation",
          "Within 30 days from receipt of the resignation notice",
          "Within 60 days from the resignation"
        ],
        answer: 2,
        reason: "The company is required to intimate the Registrar regarding the resignation of a director within 30 days of receipt of the notice of resignation, through Form DIR-12."
      },

      {
        question_id: "seta_AI_cs_11_69",
        question: "Does Raj cease to be liable for offences committed by the company during his tenure merely because he has resigned?",
        options: [
          "Yes, resignation completely removes his liability",
          "Yes, once the Board takes note of the resignation",
          "No, he remains liable for offences which occurred during his tenure",
          "No, but only for offences committed after resignation"
        ],
        answer: 2,
        reason: "Section 168 specifically provides that a director who has resigned shall remain liable for offences which occurred during his tenure."
      },

      {
        question_id: "seta_AI_cs_11_70",
        question: "David, the foreign director, may authorise which of the following persons to sign and file Form DIR-11 on his behalf, where the company has already filed Form DIR-12?",
        options: [
          "Only the Registrar",
          "A practising CA, practising Cost Accountant, practising Company Secretary or another resident director of the company",
          "Only the Managing Director",
          "Any shareholder of the company"
        ],
        answer: 1,
        reason: "In the specified situation, a foreign director may authorise in writing a practising Chartered Accountant, Cost Accountant in practice, Company Secretary in practice or any other resident director of the company to sign and file Form DIR-11 on his behalf."
      },

      {
        question_id: "seta_AI_cs_11_71",
        question: "If all directors of Alpha Manufacturing Limited resign simultaneously, who shall appoint the required number of directors until directors are appointed by the company in general meeting?",
        options: [
          "The Registrar of Companies",
          "The statutory auditor",
          "The promoter, or in his absence, the Central Government",
          "The outgoing directors"
        ],
        answer: 2,
        reason: "Where all directors resign or vacate their offices, the promoter, or in his absence the Central Government, shall appoint the required number of directors until directors are appointed by the company in general meeting."
      }
    ]
  },


  /* =========================================================
     MEDIUM CASE SCENARIO 12
     SECTION 169 - REMOVAL OF DIRECTOR
  ========================================================= */

  {
    case_id: "seta_AI_cs_012",
    difficulty: "Medium",
    caseText: `
      <p><strong>Bright Star Limited</strong> has nine directors. The shareholders
      propose to remove Mr. Karan, a director appointed in the general meeting,
      before completion of his term.</p>

      <p>A group of members holding 1.5% of the total voting power submits a
      special notice proposing the removal. The company sends a copy of the
      notice to Karan. Karan submits a written representation explaining why he
      should not be removed and requests that the representation be circulated
      to the members.</p>

      <p>The company has sufficient time before sending the meeting notice.
      However, the Board proposes not to circulate Karan's representation,
      arguing that shareholders should decide the matter without being influenced
      by his explanation.</p>

      <p>At the same time, the company is considering removal of Ms. Priya, an
      independent director who has been re-appointed for her second consecutive
      term.</p>
    `,

    questions: [

      {
        question_id: "seta_AI_cs_12_72",
        question: "Is the special notice submitted by members holding 1.5% of total voting power sufficient for proposing removal of Karan?",
        options: [
          "No, members must hold at least 5% voting power",
          "Yes, because members holding not less than 1% of total voting power can give special notice",
          "No, members must hold at least 10% voting power",
          "Yes, but only if all members consent"
        ],
        answer: 1,
        reason: "Special notice under Section 115 may be given by members holding not less than 1% of the total voting power or holding shares on which an aggregate sum of at least ₹5 lakh has been paid."
      },

      {
        question_id: "seta_AI_cs_12_73",
        question: "Karan has submitted a written representation and requested circulation to members. The company has sufficient time. What should the company generally do?",
        options: [
          "Ignore the representation",
          "Circulate the representation to members along with the notice",
          "Send it only to the Registrar",
          "Send it only to the Board members"
        ],
        answer: 1,
        reason: "Where the director makes a written representation and requests its notification to members, and time permits, the company shall state the fact of the representation in the notice and send the representation to every member to whom the meeting notice is sent."
      },

      {
        question_id: "seta_AI_cs_12_74",
        question: "Which resolution is ordinarily required for removal of Karan, assuming he is not covered by an exception under Section 169?",
        options: [
          "Board resolution",
          "Ordinary resolution",
          "Special resolution in every case",
          "Resolution of the Tribunal"
        ],
        answer: 1,
        reason: "A company may remove a director before expiry of his term by passing an ordinary resolution, subject to the exceptions and procedural requirements under Section 169."
      },

      {
        question_id: "seta_AI_cs_12_75",
        question: "Priya is an independent director re-appointed for her second term. What type of resolution is required for her removal?",
        options: [
          "Board resolution",
          "Ordinary resolution",
          "Special resolution",
          "No resolution is required"
        ],
        answer: 2,
        reason: "An independent director re-appointed for a second term under Section 149(10) can be removed only by passing a special resolution."
      },

      {
        question_id: "seta_AI_cs_12_76",
        question: "If Karan is removed and the vacancy is filled at the same meeting, what condition applies regarding the proposed replacement?",
        options: [
          "No prior notice is required",
          "Special notice of the proposed appointment must have been given",
          "Only Board approval is required",
          "The Registrar must nominate the replacement"
        ],
        answer: 1,
        reason: "Where the vacancy resulting from removal is filled at the same meeting, the appointment of another director can be made provided special notice of the proposed appointment has been given."
      }
    ]
  },


  /* =========================================================
     MEDIUM CASE SCENARIO 13
     SECTION 169 - PROPORTIONAL REPRESENTATION + TRIBUNAL
  ========================================================= */

  {
    case_id: "seta_AI_cs_013",
    difficulty: "Medium",
    caseText: `
      <p><strong>Unity Infrastructure Limited</strong> has twelve directors.
      Eight of them were appointed according to the principle of proportional
      representation under Section 163, while four directors were appointed
      through the ordinary procedure.</p>

      <p>A group of shareholders wants to remove three directors. Two of the
      proposed directors for removal were appointed through proportional
      representation, while one was appointed through the ordinary procedure.</p>

      <p>The shareholders also initiate proceedings before the Tribunal under
      Section 241 alleging oppression and mismanagement and seek removal of
      another director.</p>

      <p>The director who is the subject of the Tribunal proceedings argues that
      even if the Tribunal removes him, he should be entitled to compensation
      for the premature termination of his office and should be free to become
      a director in another company immediately.</p>
    `,

    questions: [

      {
        question_id: "seta_AI_cs_13_77",
        question: "How many of Unity Infrastructure Limited's directors were appointed through proportional representation?",
        options: [
          "4",
          "6",
          "8",
          "10"
        ],
        answer: 2,
        reason: "The case specifically states that 8 of the 12 directors were appointed according to proportional representation."
      },

      {
        question_id: "seta_AI_cs_13_78",
        question: "Which of the following directors can ordinarily be removed by shareholders under Section 169?",
        options: [
          "All eight proportional representation directors",
          "Only the four directors not appointed through proportional representation",
          "Only directors appointed for less than three years",
          "None of the directors"
        ],
        answer: 1,
        reason: "Where two-thirds or more of the total number of directors are appointed according to proportional representation, such directors cannot be removed under Section 169. Here, 8 out of 12 equals two-thirds, so the four directors not appointed through proportional representation can ordinarily be removed."
      },

      {
        question_id: "seta_AI_cs_13_79",
        question: "Can the Tribunal remove a director under Section 242 where an application has been made under Section 241 for prevention of oppression and mismanagement?",
        options: [
          "No, only shareholders can remove directors",
          "Yes, the Tribunal has such power",
          "Only the Registrar can remove the director",
          "Only the auditor can recommend removal"
        ],
        answer: 1,
        reason: "Under Section 242, the Tribunal may remove a director where an application has been made under Section 241 for prevention of oppression and mismanagement."
      },

      {
        question_id: "seta_AI_cs_13_80",
        question: "If the Tribunal removes the director, is he entitled to compensation for loss of office under Section 243?",
        options: [
          "Yes, automatically",
          "Yes, if he has completed more than half his term",
          "No, he shall not be entitled to claim compensation for loss of office",
          "Yes, but only from the Tribunal"
        ],
        answer: 2,
        reason: "Section 243 provides that a director removed pursuant to an order of the Tribunal shall not be entitled to claim compensation for loss of office."
      },

      {
        question_id: "seta_AI_cs_13_81",
        question: "For how long is a director removed by the Tribunal generally restricted from being offered appointment as a director without leave of the Tribunal?",
        options: [
          "One year",
          "Three years",
          "Five years",
          "Ten years"
        ],
        answer: 2,
        reason: "A director removed by an order of the Tribunal shall not be appointed or offered appointment as a director for five years from the date of the Tribunal's order without first obtaining the leave of the Tribunal."
      }
    ]
  },


  /* =========================================================
     MEDIUM CASE SCENARIO 14
     SECTION 170 + SECTION 171
     ========================================================= */

  {
    case_id: "seta_AI_cs_014",
    difficulty: "Medium",
    caseText: `
      <p><strong>Greenfield Industries Limited</strong> maintains a register
      containing particulars of its directors and key managerial personnel at
      its registered office.</p>

      <p>Mr. Arjun, a shareholder of the company, wants to inspect the register
      during business hours. He also requests copies of certain entries. The
      company refuses to provide the copies, stating that only the Registrar is
      entitled to inspect the register.</p>

      <p>Arjun submits a written request for copies. Thirty-five days pass and
      the company has still not provided the copies.</p>

      <p>Separately, Greenfield appoints a new director. The Company Secretary
      plans to file Form DIR-12 six weeks after the appointment because the
      company is busy preparing for its annual general meeting.</p>

      <p>The compliance officer is asked to determine the statutory position.</p>
    `,

    questions: [

      {
        question_id: "seta_AI_cs_14_82",
        question: "Can a member inspect the register of directors and KMP during business hours?",
        options: [
          "No, only directors can inspect it",
          "No, only the Registrar can inspect it",
          "Yes, members have a right to inspect it during business hours",
          "Yes, but only with Tribunal permission"
        ],
        answer: 2,
        reason: "Section 171 gives members the right to inspect the register of directors and key managerial personnel during business hours."
      },

      {
        question_id: "seta_AI_cs_14_83",
        question: "Within what period should copies requested by a member generally be provided?",
        options: [
          "7 days",
          "15 days",
          "30 days",
          "60 days"
        ],
        answer: 2,
        reason: "Copies/extracts requested by members are to be provided within 30 days from the date of the request, free of cost."
      },

      {
        question_id: "seta_AI_cs_14_84",
        question: "Since the company has failed to provide the requested copies within 30 days, what remedy is available to Arjun?",
        options: [
          "He can apply to the Registrar, who may order immediate inspection and supply of copies",
          "He can only approach the statutory auditor",
          "He has no remedy",
          "He must wait until the next AGM"
        ],
        answer: 0,
        reason: "Where inspection is refused or copies are not supplied within 30 days, the Registrar may, on an application, order immediate inspection and supply of copies."
      },

      {
        question_id: "seta_AI_cs_14_85",
        question: "Within what period should Greenfield file Form DIR-12 regarding the appointment of the new director?",
        options: [
          "Within 7 days",
          "Within 15 days",
          "Within 30 days",
          "Within 90 days"
        ],
        answer: 2,
        reason: "Under Section 170(2) read with Rule 18, Form DIR-12 is required to be filed with the Registrar within 30 days from the appointment of a director or KMP."
      },

      {
        question_id: "seta_AI_cs_14_86",
        question: "Which of the following is included among the prescribed particulars relating to a director in the register?",
        options: [
          "Only the director's name",
          "Only the director's DIN",
          "Date of appointment, date of cessation and reasons for cessation, among other prescribed particulars",
          "Only the director's remuneration"
        ],
        answer: 2,
        reason: "The register contains several prescribed particulars, including DIN, name, address, date of appointment/reappointment, date of cessation and reasons for cessation, offices held elsewhere and other specified details."
      }
    ]
  },


  /* =========================================================
     MEDIUM CASE SCENARIO 15
     SECTION 172 + MIXED PROVISIONS
  ========================================================= */

  {
    case_id: "seta_AI_cs_015",
    difficulty: "Medium",
    caseText: `
      <p><strong>Nova Consumer Products Limited</strong> has recently undergone
      several changes in its Board. One director resigned, another director was
      appointed, and certain statutory particulars relating to directors and
      key managerial personnel were not updated within the prescribed period.</p>

      <p>The company also failed to comply with a requirement under Chapter XI
      of the Companies Act, 2013 for which no specific penalty or punishment is
      provided in that particular provision.</p>

      <p>The Registrar issues a notice to the company and the officers in default.
      The company argues that the violation should not attract a continuing
      penalty because the original contravention occurred only once.</p>

      <p>The compliance officer explains that Section 172 provides a general
      punishment for contraventions of Sections 149 to 171 where no specific
      penalty or punishment is prescribed.</p>
    `,

    questions: [

      {
        question_id: "seta_AI_cs_15_87",
        question: "Section 172 applies generally to contraventions of which range of provisions?",
        options: [
          "Sections 1 to 50",
          "Sections 100 to 120",
          "Sections 149 to 171",
          "Sections 200 to 250"
        ],
        answer: 2,
        reason: "Section 172 provides punishment for contravention of provisions contained in Chapter XI, namely Sections 149 to 171, where no specific penalty or punishment is provided."
      },

      {
        question_id: "seta_AI_cs_15_88",
        question: "What is the initial penalty prescribed under Section 172 for the company and every officer in default?",
        options: [
          "₹10,000",
          "₹25,000",
          "₹50,000",
          "₹1,00,000"
        ],
        answer: 2,
        reason: "The company and every officer of the company who is in default are liable to a penalty of ₹50,000 where Section 172 applies."
      },

      {
        question_id: "seta_AI_cs_15_89",
        question: "If the default continues, what further penalty is prescribed for each day during which the failure continues?",
        options: [
          "₹100 per day",
          "₹500 per day",
          "₹1,000 per day",
          "₹5,000 per day"
        ],
        answer: 1,
        reason: "In case of continuing failure, Section 172 provides a further penalty of ₹500 for each day during which the failure continues."
      },

      {
        question_id: "seta_AI_cs_15_90",
        question: "What is the maximum aggregate penalty that may be imposed on the company under Section 172?",
        options: [
          "₹1 lakh",
          "₹2 lakh",
          "₹3 lakh",
          "₹5 lakh"
        ],
        answer: 2,
        reason: "The maximum penalty under Section 172 is ₹3 lakh in the case of the company."
      },

      {
        question_id: "seta_AI_cs_15_91",
        question: "What is the maximum aggregate penalty that may be imposed on an officer in default under Section 172?",
        options: [
          "₹50,000",
          "₹1 lakh",
          "₹2 lakh",
          "₹3 lakh"
        ],
        answer: 1,
        reason: "For an officer in default, the maximum aggregate penalty under Section 172 is ₹1 lakh."
      }
    ]
  },

  // Chapter 2

  /* =========================================================
     CASE SCENARIO 1
     TOPIC: APPOINTMENT OF MD / WTD / MANAGER - SECTION 196
  ========================================================= */

  {
    case_id: "CEL_CH2_EASY_CS01",
    case_chapter: [
      "Appointment of Managing Director",
      "Whole-time Director",
      "Manager",
      "Section 196"
    ],

    caseText: `
      <p>
        Bright Star Limited is a public company engaged in the manufacturing
        business. The Board of Directors proposes to appoint Mr. Arjun as its
        Managing Director. Mr. Arjun is already a director of the company and
        possesses substantial experience in managing business affairs.
      </p>

      <p>
        The company proposes to appoint him for a period of six years. The Board
        also proposes that Mr. Arjun may be re-appointed immediately after the
        expiry of his first term without waiting for any prescribed period.
      </p>

      <p>
        The Board seeks advice regarding the maximum permissible tenure and the
        timing of re-appointment of a Managing Director under the Companies Act,
        2013.
      </p>
    `,

    questions: [

      {
        question_id: "CEL_CH2_EASY_CS01_Q01",
        question: "What is the maximum period for which a Managing Director can be appointed at one time?",
        options: [
          "3 years",
          "5 years",
          "7 years",
          "10 years"
        ],
        answer: 1
      },

      {
        question_id: "CEL_CH2_EASY_CS01_Q02",
        question: "Can Bright Star Limited appoint Mr. Arjun as Managing Director for six years at one time?",
        options: [
          "Yes, because he is a director",
          "Yes, if approved by the Board",
          "No, the term cannot exceed five years at a time",
          "Yes, if approved by the Central Government"
        ],
        answer: 2
      },

      {
        question_id: "CEL_CH2_EASY_CS01_Q03",
        question: "Under Section 196, re-appointment of a Managing Director cannot be made earlier than:",
        options: [
          "Six months before expiry of the term",
          "One year before expiry of the term",
          "Two years before expiry of the term",
          "Three years before expiry of the term"
        ],
        answer: 1
      },

      {
        question_id: "CEL_CH2_EASY_CS01_Q04",
        question: "A Managing Director must first be:",
        options: [
          "A shareholder of the company",
          "An employee of another company",
          "A director of the company",
          "A member of the Nomination and Remuneration Committee"
        ],
        answer: 2
      },

      {
        question_id: "CEL_CH2_EASY_CS01_Q05",
        question: "Which statement is correct regarding appointment of a Managing Director and Manager at the same time?",
        options: [
          "Both can always be appointed together",
          "Both can be appointed only with Central Government approval",
          "A company cannot appoint a Managing Director and Manager at the same time",
          "Both can be appointed if approved by the Board"
        ],
        answer: 2
      }

    ]
  },


  /* =========================================================
     CASE SCENARIO 2
     TOPIC: AGE ELIGIBILITY OF MD / WTD / MANAGER
  ========================================================= */

  {
    case_id: "CEL_CH2_EASY_CS02",
    case_chapter: [
      "Section 196",
      "Age Eligibility",
      "Managing Director",
      "Whole-time Director",
      "Manager"
    ],

    caseText: `
      <p>
        Sunrise Industries Limited wants to appoint managerial personnel for
        strengthening its management team. The company considers three
        candidates.
      </p>

      <p>
        Mr. Ravi is 25 years old, Mr. Mohan is 68 years old and Mr. Suresh is
        72 years old. The Board is considering appointing one of them as
        Managing Director.
      </p>

      <p>
        The Board understands that the Companies Act, 2013 prescribes age-related
        conditions for appointment of a Managing Director, Whole-time Director
        or Manager. The Board wants to know whether a person who has attained
        70 years can still be appointed.
      </p>
    `,

    questions: [

      {
        question_id: "CEL_CH2_EASY_CS02_Q01",
        question: "What is the minimum age prescribed for appointment as Managing Director, Whole-time Director or Manager?",
        options: [
          "18 years",
          "21 years",
          "25 years",
          "30 years"
        ],
        answer: 1
      },

      {
        question_id: "CEL_CH2_EASY_CS02_Q02",
        question: "What is the normal maximum age for appointment as Managing Director, Whole-time Director or Manager?",
        options: [
          "65 years",
          "68 years",
          "70 years",
          "75 years"
        ],
        answer: 2
      },

      {
        question_id: "CEL_CH2_EASY_CS02_Q03",
        question: "Can a person who has attained 70 years be appointed as Managing Director?",
        options: [
          "Never",
          "Yes, subject to passing a special resolution",
          "Yes, automatically by Board resolution",
          "Only if he is a shareholder"
        ],
        answer: 1
      },

      {
        question_id: "CEL_CH2_EASY_CS02_Q04",
        question: "Where a person above 70 years is proposed to be appointed through a special resolution, the explanatory statement should indicate:",
        options: [
          "His family details",
          "His educational marks",
          "The justification for appointing such person",
          "His bank account details"
        ],
        answer: 2
      },

      {
        question_id: "CEL_CH2_EASY_CS02_Q05",
        question: "Which of the following candidates satisfies the normal age requirement without requiring the special resolution applicable to persons above 70 years?",
        options: [
          "Mr. Suresh aged 72 years",
          "Mr. Ravi aged 25 years",
          "A person aged 75 years",
          "A person aged 80 years"
        ],
        answer: 1
      }

    ]
  },


  /* =========================================================
     CASE SCENARIO 3
     TOPIC: KEY MANAGERIAL PERSONNEL - SECTION 203
  ========================================================= */

  {
    case_id: "CEL_CH2_EASY_CS03",
    case_chapter: [
      "Key Managerial Personnel",
      "Section 203",
      "Whole-time KMP",
      "Company Secretary",
      "Chief Financial Officer"
    ],

    caseText: `
      <p>
        Apex Technologies Limited is a listed company having substantial
        operations in India. The company is reviewing its organisational
        structure and the appointment of Key Managerial Personnel (KMP).
      </p>

      <p>
        The company currently has a Managing Director but has not appointed a
        whole-time Company Secretary or Chief Financial Officer. The Board is
        also considering appointing a person as CFO who is already serving as a
        whole-time KMP in another company.
      </p>

      <p>
        The Board wants to understand the basic requirements relating to
        whole-time KMP under Section 203 of the Companies Act, 2013.
      </p>
    `,

    questions: [

      {
        question_id: "CEL_CH2_EASY_CS03_Q01",
        question: "Which of the following is a Key Managerial Personnel?",
        options: [
          "Office attendant",
          "Chief Financial Officer",
          "Security guard",
          "Sales executive"
        ],
        answer: 1
      },

      {
        question_id: "CEL_CH2_EASY_CS03_Q02",
        question: "Which company is required to have whole-time KMP under Rule 8?",
        options: [
          "Every small private company",
          "Every listed company",
          "Every partnership firm",
          "Every sole proprietorship"
        ],
        answer: 1
      },

      {
        question_id: "CEL_CH2_EASY_CS03_Q03",
        question: "Every other public company having paid-up share capital of ₹10 crore or more is required to have:",
        options: [
          "Only an auditor",
          "Whole-time KMP",
          "Only an independent director",
          "Only a legal advisor"
        ],
        answer: 1
      },

      {
        question_id: "CEL_CH2_EASY_CS03_Q04",
        question: "Who appoints whole-time KMP under Section 203?",
        options: [
          "Only the shareholders",
          "Only the Central Government",
          "The Board of Directors by resolution",
          "The statutory auditor"
        ],
        answer: 2
      },

      {
        question_id: "CEL_CH2_EASY_CS03_Q05",
        question: "As a general rule, a whole-time KMP shall not hold office in more than one company at the same time except:",
        options: [
          "Any unrelated company",
          "Its subsidiary company",
          "Any partnership firm",
          "Any foreign company"
        ],
        answer: 1
      }

    ]
  },


  /* =========================================================
     CASE SCENARIO 4
     TOPIC: MAXIMUM MANAGERIAL REMUNERATION - SECTION 197
  ========================================================= */

  {
    case_id: "CEL_CH2_EASY_CS04",
    case_chapter: [
      "Section 197",
      "Maximum Managerial Remuneration",
      "Net Profits",
      "Managing Director",
      "Whole-time Director"
    ],

    caseText: `
      <p>
        Greenfield Limited is a public company having sufficient profits during
        the financial year. The company has one Managing Director and one
        Whole-time Director. The Board is considering the remuneration payable
        to its managerial personnel.
      </p>

      <p>
        The company also has directors who are neither Managing Directors nor
        Whole-time Directors. The Board wants to ensure that the proposed
        remuneration remains within the limits prescribed under Section 197 of
        the Companies Act, 2013.
      </p>

      <p>
        The Board is also considering whether the overall limit can be exceeded
        by obtaining approval from the shareholders.
      </p>
    `,

    questions: [

      {
        question_id: "CEL_CH2_EASY_CS04_Q01",
        question: "What is the overall maximum managerial remuneration payable by a public company to its directors, including MD, WTD and Manager?",
        options: [
          "5% of net profits",
          "10% of net profits",
          "11% of net profits",
          "15% of net profits"
        ],
        answer: 2
      },

      {
        question_id: "CEL_CH2_EASY_CS04_Q02",
        question: "Where there is more than one Managing Director/Whole-time Director/Manager, the remuneration payable to all such persons taken together is normally limited to:",
        options: [
          "5% of net profits",
          "10% of net profits",
          "11% of net profits",
          "3% of net profits"
        ],
        answer: 1
      },

      {
        question_id: "CEL_CH2_EASY_CS04_Q03",
        question: "Where there is one Managing Director, Whole-time Director or Manager, the normal maximum remuneration payable to such person is:",
        options: [
          "1% of net profits",
          "3% of net profits",
          "5% of net profits",
          "10% of net profits"
        ],
        answer: 2
      },

      {
        question_id: "CEL_CH2_EASY_CS04_Q04",
        question: "Where a company has a Managing Director, the normal maximum remuneration payable to directors who are neither MD nor WTD is:",
        options: [
          "1% of net profits",
          "3% of net profits",
          "5% of net profits",
          "10% of net profits"
        ],
        answer: 0
      },

      {
        question_id: "CEL_CH2_EASY_CS04_Q05",
        question: "The overall 11% limit can be exceeded with:",
        options: [
          "Approval of the statutory auditor",
          "Approval of the Central Government in every case",
          "Approval of the company in general meeting by special resolution",
          "Approval of the Company Secretary"
        ],
        answer: 2
      }

    ]
  },


  /* =========================================================
     CASE SCENARIO 5
     TOPIC: SECRETARIAL AUDIT - SECTION 204
  ========================================================= */

  {
    case_id: "CEL_CH2_EASY_CS05",
    case_chapter: [
      "Secretarial Audit",
      "Section 204",
      "Section 205",
      "Company Secretary in Practice",
      "MR-3"
    ],

    caseText: `
      <p>
        National Manufacturing Limited is a public company. Its paid-up share
        capital is ₹55 crore, annual turnover is ₹220 crore and its outstanding
        loans and borrowings from banks and public financial institutions are
        ₹80 crore.
      </p>

      <p>
        The Board wants to determine whether the company is required to conduct
        a secretarial audit under Section 204 of the Companies Act, 2013.
      </p>

      <p>
        The company also wants to know who is authorised to conduct the
        secretarial audit, the form in which the report is prepared and the
        manner in which the report is dealt with in the Board's Report.
      </p>
    `,

    questions: [

      {
        question_id: "CEL_CH2_EASY_CS05_Q01",
        question: "Which of the following companies is mandatorily required to conduct secretarial audit?",
        options: [
          "Every sole proprietorship",
          "Every listed company",
          "Every partnership firm",
          "Every small private company"
        ],
        answer: 1
      },

      {
        question_id: "CEL_CH2_EASY_CS05_Q02",
        question: "A public company having paid-up share capital of ₹50 crore or more is covered under the prescribed class for secretarial audit.",
        options: [
          "True",
          "False",
          "Only if turnover exceeds ₹500 crore",
          "Only if it is a private company"
        ],
        answer: 0
      },

      {
        question_id: "CEL_CH2_EASY_CS05_Q03",
        question: "In the given case, National Manufacturing Limited has paid-up share capital of ₹55 crore. Therefore, it is:",
        options: [
          "Required to conduct secretarial audit",
          "Not required to conduct secretarial audit",
          "Required only if shareholders approve",
          "Required only if turnover exceeds ₹1,000 crore"
        ],
        answer: 0
      },

      {
        question_id: "CEL_CH2_EASY_CS05_Q04",
        question: "Who is authorised to give the Secretarial Audit Report?",
        options: [
          "Statutory auditor",
          "Company Secretary in practice",
          "Chief Financial Officer",
          "Managing Director"
        ],
        answer: 1
      },

      {
        question_id: "CEL_CH2_EASY_CS05_Q05",
        question: "The Secretarial Audit Report is prepared in:",
        options: [
          "Form MR-1",
          "Form MR-2",
          "Form MR-3",
          "Form DIR-12"
        ],
        answer: 2
      }

    ]
  },

  /* =========================================================
     CASE SCENARIO 6
     TOPIC: FUNCTIONS OF COMPANY SECRETARY - SECTION 205
  ========================================================= */

  {
    case_id: "CEL_CH2_EASY_CS06",
    case_chapter: [
      "Functions of Company Secretary",
      "Section 205",
      "Secretarial Standards",
      "Corporate Governance"
    ],

    caseText: `
      <p>
        Horizon Limited has recently appointed Ms. Neha as its Company Secretary.
        The Board wants her to assist the company in complying with the Companies
        Act, 2013 and other applicable laws.
      </p>

      <p>
        The Board also expects Ms. Neha to guide the directors regarding their
        duties, responsibilities and powers. She is also asked to facilitate
        Board and general meetings, attend the meetings and maintain their
        minutes.
      </p>

      <p>
        Ms. Neha informs the Board that ensuring compliance with applicable
        secretarial standards and assisting the Board in maintaining good
        corporate governance are also among her functions.
      </p>
    `,

    questions: [

      {
        question_id: "CEL_CH2_EASY_CS06_Q01",
        question: "Under Section 205, the Company Secretary is required to report to the Board about compliance with:",
        options: [
          "Only tax laws",
          "Only labour laws",
          "The Companies Act, rules and other applicable laws",
          "Only securities laws"
        ],
        answer: 2
      },

      {
        question_id: "CEL_CH2_EASY_CS06_Q02",
        question: "The Company Secretary should provide guidance to directors regarding their:",
        options: [
          "Personal investments only",
          "Duties, responsibilities and powers",
          "Personal tax returns",
          "Family businesses"
        ],
        answer: 1
      },

      {
        question_id: "CEL_CH2_EASY_CS06_Q03",
        question: "Which of the following is a function of the Company Secretary?",
        options: [
          "Conducting statutory audit",
          "Maintaining minutes of meetings",
          "Determining income tax rates",
          "Appointing all employees"
        ],
        answer: 1
      },

      {
        question_id: "CEL_CH2_EASY_CS06_Q04",
        question: "The Company Secretary assists the Board in ensuring:",
        options: [
          "Good corporate governance",
          "Higher share prices",
          "Minimum taxation in every case",
          "Personal benefits to directors"
        ],
        answer: 0
      },

      {
        question_id: "CEL_CH2_EASY_CS06_Q05",
        question: "Which of the following Secretarial Standards has been approved by the Central Government?",
        options: [
          "SS-1 and SS-2",
          "SS-3 and SS-4",
          "SS-5 and SS-6",
          "SS-7 and SS-8"
        ],
        answer: 0
      }

    ]
  },


  /* =========================================================
     CASE SCENARIO 7
     TOPIC: SITTING FEES AND MODE OF REMUNERATION
  ========================================================= */

  {
    case_id: "CEL_CH2_EASY_CS07",
    case_chapter: [
      "Section 197",
      "Sitting Fees",
      "Mode of Remuneration",
      "Rule 4"
    ],

    caseText: `
      <p>
        Sunrise Healthcare Limited is a public company. Its Board of Directors
        is considering the remuneration payable to its directors. Apart from
        their regular remuneration, the directors are paid sitting fees for
        attending meetings of the Board and its committees.
      </p>

      <p>
        The Board proposes to fix the sitting fee at ₹80,000 for every Board
        meeting. The company also has independent directors and women directors.
      </p>

      <p>
        The Board is also considering whether managerial remuneration can be
        paid through a monthly payment, as a percentage of net profits, or by
        combining both methods.
      </p>
    `,

    questions: [

      {
        question_id: "CEL_CH2_EASY_CS07_Q01",
        question: "What is the maximum sitting fee prescribed per meeting of the Board or committee thereof?",
        options: [
          "₹25,000",
          "₹50,000",
          "₹1,00,000",
          "₹2,00,000"
        ],
        answer: 2
      },

      {
        question_id: "CEL_CH2_EASY_CS07_Q02",
        question: "The proposed sitting fee of ₹80,000 per meeting is:",
        options: [
          "Within the prescribed limit",
          "Above the prescribed limit",
          "Valid only with Central Government approval",
          "Valid only with Tribunal approval"
        ],
        answer: 0
      },

      {
        question_id: "CEL_CH2_EASY_CS07_Q03",
        question: "The sitting fee payable to an Independent Director shall:",
        options: [
          "Always be zero",
          "Be less than that payable to other directors",
          "Not be less than that payable to other directors",
          "Be fixed only by the Central Government"
        ],
        answer: 2
      },

      {
        question_id: "CEL_CH2_EASY_CS07_Q04",
        question: "Remuneration to a director or manager may be paid:",
        options: [
          "Only as monthly payment",
          "Only as a percentage of net profits",
          "Only through stock options",
          "By monthly payment, percentage of net profits, or partly by both"
        ],
        answer: 3
      },

      {
        question_id: "CEL_CH2_EASY_CS07_Q05",
        question: "The percentages specified under Section 197(1) are:",
        options: [
          "Inclusive of sitting fees",
          "Exclusive of sitting fees",
          "Applicable only to sitting fees",
          "Applicable only to independent directors"
        ],
        answer: 1
      }

    ]
  },


  /* =========================================================
     CASE SCENARIO 8
     TOPIC: RECOVERY OF EXCESS REMUNERATION - SECTION 197
  ========================================================= */

  {
    case_id: "CEL_CH2_EASY_CS08",
    case_chapter: [
      "Section 197",
      "Excess Remuneration",
      "Refund of Remuneration",
      "Waiver"
    ],

    caseText: `
      <p>
        Zenith Limited discovered that its Managing Director, Mr. Karan, had
        received remuneration in excess of the limit prescribed under Section
        197. The excess amount received by Mr. Karan is ₹8 lakh.
      </p>

      <p>
        The company asks Mr. Karan to refund the excess amount. Mr. Karan wants
        to know the period within which the excess remuneration has to be
        refunded and whether he can simply retain the amount until the matter
        is resolved.
      </p>

      <p>
        The Board also wants to know whether the company can waive the recovery
        of the excess remuneration.
      </p>
    `,

    questions: [

      {
        question_id: "CEL_CH2_EASY_CS08_Q01",
        question: "Where a director receives excess remuneration under Section 197, he is required to:",
        options: [
          "Retain the amount permanently",
          "Refund the excess amount to the company",
          "Pay the amount to the Central Government",
          "Transfer the amount to shareholders"
        ],
        answer: 1
      },

      {
        question_id: "CEL_CH2_EASY_CS08_Q02",
        question: "The excess remuneration should generally be refunded within:",
        options: [
          "Six months",
          "One year",
          "Two years",
          "Five years"
        ],
        answer: 2
      },

      {
        question_id: "CEL_CH2_EASY_CS08_Q03",
        question: "Until the excess remuneration is refunded, the director shall hold the amount:",
        options: [
          "As his personal property",
          "In trust for the company",
          "On behalf of the shareholders personally",
          "With the statutory auditor"
        ],
        answer: 1
      },

      {
        question_id: "CEL_CH2_EASY_CS08_Q04",
        question: "Can the company waive recovery of excess remuneration?",
        options: [
          "Never under any circumstances",
          "Yes, through a special resolution subject to the prescribed conditions",
          "Yes, automatically by Board resolution",
          "Only through an NCLT order"
        ],
        answer: 1
      },

      {
        question_id: "CEL_CH2_EASY_CS08_Q05",
        question: "The special resolution for waiver of recovery should generally be passed within:",
        options: [
          "Three months from payment",
          "One year from payment",
          "Two years from the date the sum becomes refundable",
          "Five years from payment"
        ],
        answer: 2
      }

    ]
  },


  /* =========================================================
     CASE SCENARIO 9
     TOPIC: INSURANCE PREMIUM AND HOLDING/SUBSIDIARY
  ========================================================= */

  {
    case_id: "CEL_CH2_EASY_CS09",
    case_chapter: [
      "Section 197",
      "Insurance Premium",
      "Indemnification",
      "Holding Company",
      "Subsidiary Company"
    ],

    caseText: `
      <p>
        Reliable Industries Limited has taken an insurance policy for its
        Managing Director, Mr. Amit, to indemnify him against liability arising
        from negligence, default, misfeasance, breach of duty or breach of trust
        in relation to the company.
      </p>

      <p>
        The company also has a subsidiary company from which Mr. Amit receives
        commission in addition to the remuneration received from Reliable
        Industries Limited.
      </p>

      <p>
        The Board wants to determine whether the insurance premium will always
        form part of Mr. Amit's remuneration and whether receipt of commission
        from the subsidiary company is prohibited.
      </p>
    `,

    questions: [

      {
        question_id: "CEL_CH2_EASY_CS09_Q01",
        question: "If a company takes insurance for its MD against specified liabilities, the premium is generally:",
        options: [
          "Always treated as remuneration",
          "Not treated as remuneration",
          "Always treated as dividend",
          "Always treated as sitting fees"
        ],
        answer: 1
      },

      {
        question_id: "CEL_CH2_EASY_CS09_Q02",
        question: "If the managerial personnel is proved guilty in relation to the liability covered by such insurance, the premium paid shall be:",
        options: [
          "Ignored completely",
          "Treated as part of remuneration",
          "Treated as share capital",
          "Refunded to shareholders"
        ],
        answer: 1
      },

      {
        question_id: "CEL_CH2_EASY_CS09_Q03",
        question: "A Managing Director may receive remuneration or commission from a holding or subsidiary company subject to:",
        options: [
          "Section 197",
          "Section 123 only",
          "Section 92 only",
          "Section 135 only"
        ],
        answer: 0
      },

      {
        question_id: "CEL_CH2_EASY_CS09_Q04",
        question: "Receipt of commission by the MD from a holding or subsidiary company is:",
        options: [
          "Absolutely prohibited",
          "Permitted subject to the provisions of Section 197",
          "Permitted without any conditions",
          "Permitted only if he resigns as MD"
        ],
        answer: 1
      },

      {
        question_id: "CEL_CH2_EASY_CS09_Q05",
        question: "The fact of receiving such remuneration or commission from the holding or subsidiary company must be disclosed in:",
        options: [
          "The Board's Report",
          "The attendance register",
          "The share certificate",
          "The prospectus in every case"
        ],
        answer: 0
      }

    ]
  },


  /* =========================================================
     CASE SCENARIO 10
     TOPIC: COMPENSATION FOR LOSS OF OFFICE - SECTION 202
  ========================================================= */

  {
    case_id: "CEL_CH2_EASY_CS10",
    case_chapter: [
      "Section 202",
      "Compensation for Loss of Office",
      "Managing Director",
      "Whole-time Director",
      "Manager"
    ],

    caseText: `
      <p>
        Metro Engineering Limited has a Managing Director, Mr. Raj, whose term
        of office is five years. Due to certain circumstances, the company is
        considering termination of his office before the expiry of his term.
      </p>

      <p>
        Mr. Raj claims compensation for loss of office. The company examines
        the provisions of Section 202 relating to the maximum amount of
        compensation and the circumstances in which compensation cannot be
        paid.
      </p>

      <p>
        Mr. Raj has not been found guilty of fraud, breach of trust, gross
        negligence or gross mismanagement. The remaining period of his term is
        two years.
      </p>
    `,

    questions: [

      {
        question_id: "CEL_CH2_EASY_CS10_Q01",
        question: "Compensation for loss of office under Section 202 may be paid to:",
        options: [
          "Any shareholder",
          "Any employee",
          "Managing Director, Whole-time Director or Manager",
          "Only an independent director"
        ],
        answer: 2
      },

      {
        question_id: "CEL_CH2_EASY_CS10_Q02",
        question: "The maximum compensation is generally limited to remuneration for:",
        options: [
          "One year or remaining term, whichever is longer",
          "Three years or remaining term, whichever is shorter",
          "Five years in every case",
          "Ten years in every case"
        ],
        answer: 1
      },

      {
        question_id: "CEL_CH2_EASY_CS10_Q03",
        question: "If the remaining term of Mr. Raj is two years, the maximum period for calculating compensation would generally be:",
        options: [
          "One year",
          "Two years",
          "Three years",
          "Five years"
        ],
        answer: 1
      },

      {
        question_id: "CEL_CH2_EASY_CS10_Q04",
        question: "Compensation cannot be paid where the director has been guilty of:",
        options: [
          "Good performance",
          "Fraud or breach of trust",
          "Completing his term",
          "Attending Board meetings"
        ],
        answer: 1
      },

      {
        question_id: "CEL_CH2_EASY_CS10_Q05",
        question: "Compensation under Section 202 is calculated based on the average remuneration earned during:",
        options: [
          "The immediately preceding three years",
          "The immediately preceding ten years",
          "Only the last month",
          "Only the first year of appointment"
        ],
        answer: 0
      }

    ]
  },



  /* =========================================================
     CASE SCENARIO 11
     TOPIC: CALCULATION OF PROFITS - SECTION 198
  ========================================================= */

  {
    case_id: "CEL_CH2_EASY_CS11",
    case_chapter: [
      "Section 198",
      "Calculation of Profits",
      "Managerial Remuneration"
    ],

    caseText: `
      <p>
        Bright Industries Limited is calculating its net profits for determining
        the managerial remuneration payable under Section 197 of the Companies
        Act, 2013. The company has earned a subsidy from the Government during
        the financial year.
      </p>

      <p>
        The company has also recorded certain profits arising from the sale of
        its fixed assets. The management wants to determine which amounts should
        be considered while calculating profits under Section 198.
      </p>
    `,

    questions: [

      {
        question_id: "CEL_CH2_EASY_CS11_Q01",
        question: "For calculating net profits under Section 198, credit shall be given for:",
        options: [
          "All capital profits",
          "Government bounties and subsidies, subject to the provisions of Section 198",
          "Profits on sale of forfeited shares",
          "Unrealised gains"
        ],
        answer: 1
      },

      {
        question_id: "CEL_CH2_EASY_CS11_Q02",
        question: "Profit from sale of fixed assets of a capital nature is generally:",
        options: [
          "Included without any condition",
          "Not given credit, subject to the specified exception",
          "Always treated as revenue profit",
          "Added twice"
        ],
        answer: 1
      },

      {
        question_id: "CEL_CH2_EASY_CS11_Q03",
        question: "Which of the following is generally not given credit under Section 198?",
        options: [
          "Government subsidy",
          "Usual business income",
          "Profit on sale of forfeited shares",
          "Eligible operating profit"
        ],
        answer: 2
      },

      {
        question_id: "CEL_CH2_EASY_CS11_Q04",
        question: "Unrealised or notional gains are:",
        options: [
          "Added while calculating profits",
          "Included as managerial profit automatically",
          "Not given credit under Section 198",
          "Always treated as cash profits"
        ],
        answer: 2
      },

      {
        question_id: "CEL_CH2_EASY_CS11_Q05",
        question: "The net profits for managerial remuneration are calculated primarily in accordance with:",
        options: [
          "Section 123",
          "Section 148",
          "Section 198",
          "Section 204"
        ],
        answer: 2
      }

    ]
  },


  /* =========================================================
     CASE SCENARIO 12
     TOPIC: EFFECTIVE CAPITAL - SCHEDULE V
  ========================================================= */

  {
    case_id: "CEL_CH2_EASY_CS12",
    case_chapter: [
      "Schedule V",
      "Effective Capital",
      "Inadequate Profits",
      "Managerial Remuneration"
    ],

    caseText: `
      <p>
        ABC Manufacturing Limited has no profits during the current financial
        year. The company therefore wants to determine the maximum managerial
        remuneration payable under Section II of Part II of Schedule V.
      </p>

      <p>
        The company has paid-up share capital of ₹4 crore, share premium of
        ₹50 lakh, eligible reserves of ₹1 crore and a long-term loan of
        ₹2 crore. It also has investments and accumulated losses which have to
        be considered while calculating effective capital.
      </p>

      <p>
        The Board explains that effective capital is not simply the amount of
        paid-up share capital and must be calculated according to the formula
        prescribed under Schedule V.
      </p>
    `,

    questions: [

      {
        question_id: "CEL_CH2_EASY_CS12_Q01",
        question: "Effective capital is relevant for determining managerial remuneration particularly when:",
        options: [
          "The company has no profits or inadequate profits",
          "The company has unlimited profits",
          "The company is being incorporated only",
          "The company pays dividend"
        ],
        answer: 0
      },

      {
        question_id: "CEL_CH2_EASY_CS12_Q02",
        question: "Which of the following is included in effective capital?",
        options: [
          "Share premium account",
          "Revaluation reserve",
          "Accumulated losses",
          "Preliminary expenses not written off as a deduction"
        ],
        answer: 0
      },

      {
        question_id: "CEL_CH2_EASY_CS12_Q03",
        question: "Revaluation reserve is:",
        options: [
          "Added to effective capital",
          "Excluded from reserves and surplus for effective capital",
          "Always treated as a long-term loan",
          "Deducted twice"
        ],
        answer: 1
      },

      {
        question_id: "CEL_CH2_EASY_CS12_Q04",
        question: "Accumulated losses are:",
        options: [
          "Added to effective capital",
          "Ignored completely",
          "Deducted while calculating effective capital",
          "Treated as share premium"
        ],
        answer: 2
      },

      {
        question_id: "CEL_CH2_EASY_CS12_Q05",
        question: "Working capital loans are generally:",
        options: [
          "Included as long-term loans in effective capital",
          "Excluded from the long-term loan component",
          "Added to share capital",
          "Treated as reserves"
        ],
        answer: 1
      }

    ]
  },


  /* =========================================================
     CASE SCENARIO 13
     TOPIC: KMP - SECTION 203
  ========================================================= */

  {
    case_id: "CEL_CH2_EASY_CS13",
    case_chapter: [
      "Section 203",
      "Key Managerial Personnel",
      "Appointment of KMP",
      "Whole-time KMP"
    ],

    caseText: `
      <p>
        Sunrise Public Limited is a listed company. The Board is reviewing the
        appointment of its whole-time Key Managerial Personnel (KMP). The
        company already has a Managing Director, a Company Secretary and a
        Chief Financial Officer.
      </p>

      <p>
        The Board is informed that whole-time KMP must be appointed through a
        Board resolution containing the terms and conditions of appointment,
        including remuneration.
      </p>

      <p>
        The Company Secretary also explains that a whole-time KMP cannot normally
        hold office in more than one company at the same time, except in the
        permitted case involving its subsidiary company.
      </p>
    `,

    questions: [

      {
        question_id: "CEL_CH2_EASY_CS13_Q01",
        question: "Which of the following is included within Key Managerial Personnel?",
        options: [
          "Chief Financial Officer",
          "External auditor",
          "Tax consultant only",
          "Bank manager"
        ],
        answer: 0
      },

      {
        question_id: "CEL_CH2_EASY_CS13_Q02",
        question: "A whole-time KMP is appointed by:",
        options: [
          "The external auditor",
          "A resolution of the Board",
          "The Registrar of Companies",
          "The Central Government in every case"
        ],
        answer: 1
      },

      {
        question_id: "CEL_CH2_EASY_CS13_Q03",
        question: "The Board resolution appointing whole-time KMP should contain:",
        options: [
          "Only the name of the KMP",
          "Only the date of joining",
          "Terms and conditions including remuneration",
          "Only educational qualifications"
        ],
        answer: 2
      },

      {
        question_id: "CEL_CH2_EASY_CS13_Q04",
        question: "A whole-time KMP shall generally not hold office in more than:",
        options: [
          "One company at the same time",
          "Two companies without restriction",
          "Five companies",
          "Ten companies"
        ],
        answer: 0
      },

      {
        question_id: "CEL_CH2_EASY_CS13_Q05",
        question: "A whole-time KMP may hold office in another company at the same time in the permitted case of:",
        options: [
          "Any unrelated company",
          "Its subsidiary company",
          "Any competitor",
          "Any foreign company without restriction"
        ],
        answer: 1
      }

    ]
  },


  /* =========================================================
     CASE SCENARIO 14
     TOPIC: VACANCY AND PENALTY OF KMP
  ========================================================= */

  {
    case_id: "CEL_CH2_EASY_CS14",
    case_chapter: [
      "Section 203",
      "Vacancy of KMP",
      "Penalty",
      "Key Managerial Personnel"
    ],

    caseText: `
      <p>
        Global Technologies Limited is required to have whole-time Key
        Managerial Personnel. During the financial year, the office of its Chief
        Financial Officer became vacant.
      </p>

      <p>
        The Board discussed the vacancy and decided to appoint a new CFO. The
        Company Secretary informed the Board that the resulting vacancy in the
        office of a whole-time KMP must be filled within the prescribed period.
      </p>

      <p>
        The Board also reviewed the consequences of non-compliance with Section
        203 and the penalties applicable to the company and defaulting officers.
      </p>
    `,

    questions: [

      {
        question_id: "CEL_CH2_EASY_CS14_Q01",
        question: "A vacancy in the office of a whole-time KMP must be filled by:",
        options: [
          "The shareholders alone",
          "The Board at a Board meeting",
          "The statutory auditor",
          "The Registrar"
        ],
        answer: 1
      },

      {
        question_id: "CEL_CH2_EASY_CS14_Q02",
        question: "The vacancy of whole-time KMP should be filled within:",
        options: [
          "30 days",
          "3 months",
          "6 months",
          "2 years"
        ],
        answer: 2
      },

      {
        question_id: "CEL_CH2_EASY_CS14_Q03",
        question: "The penalty on the company for default under Section 203 is:",
        options: [
          "₹50,000",
          "₹1 lakh",
          "₹5 lakh",
          "₹10 lakh"
        ],
        answer: 2
      },

      {
        question_id: "CEL_CH2_EASY_CS14_Q04",
        question: "The defaulting director or KMP is liable to an initial penalty of:",
        options: [
          "₹10,000",
          "₹25,000",
          "₹50,000",
          "₹5 lakh"
        ],
        answer: 2
      },

      {
        question_id: "CEL_CH2_EASY_CS14_Q05",
        question: "For a continuing default, the additional penalty on the defaulting director or KMP is:",
        options: [
          "₹100 per day",
          "₹500 per day",
          "₹1,000 per day, subject to the prescribed maximum",
          "₹10,000 per day without any maximum"
        ],
        answer: 2
      }

    ]
  },


  /* =========================================================
     CASE SCENARIO 15
     TOPIC: SECRETARIAL AUDIT - SECTION 204
  ========================================================= */

  {
    case_id: "CEL_CH2_EASY_CS15",
    case_chapter: [
      "Section 204",
      "Secretarial Audit",
      "Secretarial Audit Report",
      "Form MR-3"
    ],

    caseText: `
      <p>
        Prime Infrastructure Limited is a public company. Its paid-up share
        capital is ₹55 crore and its turnover is ₹200 crore. The company also
        has outstanding borrowings from banks of ₹80 crore.
      </p>

      <p>
        The Board is examining whether the company is required to obtain a
        Secretarial Audit Report under Section 204. The Company Secretary in
        practice explains that certain prescribed classes of companies are
        required to obtain a secretarial audit report.
      </p>

      <p>
        The Board also wants to know who is authorised to issue the report and
        whether the report has to be attached to the Board's Report.
      </p>
    `,

    questions: [

      {
        question_id: "CEL_CH2_EASY_CS15_Q01",
        question: "Secretarial audit under Section 204 is mandatory for:",
        options: [
          "Every small private company",
          "Every listed company",
          "Every partnership firm",
          "Every sole proprietorship"
        ],
        answer: 1
      },

      {
        question_id: "CEL_CH2_EASY_CS15_Q02",
        question: "A public company having paid-up share capital of ₹50 crore or more is covered for secretarial audit.",
        options: [
          "True",
          "False",
          "Only if turnover exceeds ₹1,000 crore",
          "Only if it is a private company"
        ],
        answer: 0
      },

      {
        question_id: "CEL_CH2_EASY_CS15_Q03",
        question: "Secretarial Audit Report is issued by:",
        options: [
          "Chartered Accountant in practice",
          "Cost Accountant in practice",
          "Company Secretary in practice",
          "Statutory auditor only"
        ],
        answer: 2
      },

      {
        question_id: "CEL_CH2_EASY_CS15_Q04",
        question: "The Secretarial Audit Report is prepared in:",
        options: [
          "Form MR-1",
          "Form MR-2",
          "Form MR-3",
          "Form AOC-4"
        ],
        answer: 2
      },

      {
        question_id: "CEL_CH2_EASY_CS15_Q05",
        question: "The Secretarial Audit Report obtained by the company is annexed with:",
        options: [
          "The Board's Report",
          "The auditor's appointment letter",
          "The share certificate",
          "The memorandum of association"
        ],
        answer: 0
      }

    ]
  },

  /* =========================================================
     CASE SCENARIO 16
     TOPIC: APPOINTMENT OF MD / WTD / MANAGER - SECTION 196
  ========================================================= */

  {
    case_id: "CEL_CH2_EASY_CS16",
    case_chapter: [
      "Section 196",
      "Appointment of MD",
      "Appointment of WTD",
      "Appointment of Manager"
    ],

    caseText: `
      <p>
        Zenith Industries Limited is considering the appointment of Mr. Arjun
        as its Managing Director. The Board is examining the statutory
        requirements relating to the appointment and tenure of managerial
        personnel under Section 196 of the Companies Act, 2013.
      </p>

      <p>
        The Board proposes to appoint Mr. Arjun for a term of six years. The
        Company Secretary points out that the Companies Act, 2013 prescribes a
        maximum period for which a Managing Director, Whole-time Director or
        Manager may be appointed or re-appointed at a time.
      </p>
    `,

    questions: [

      {
        question_id: "CEL_CH2_EASY_CS16_Q01",
        question: "A company can appoint a Managing Director for a term not exceeding:",
        options: [
          "2 years",
          "3 years",
          "5 years",
          "10 years"
        ],
        answer: 2
      },

      {
        question_id: "CEL_CH2_EASY_CS16_Q02",
        question: "The maximum term of five years under Section 196 applies to:",
        options: [
          "Only Managing Director",
          "Only Whole-time Director",
          "Only Manager",
          "Managing Director, Whole-time Director or Manager"
        ],
        answer: 3
      },

      {
        question_id: "CEL_CH2_EASY_CS16_Q03",
        question: "Can a company appoint a Managing Director and a Manager at the same time?",
        options: [
          "Yes, always",
          "Yes, if approved by the auditor",
          "No",
          "Yes, if both are relatives"
        ],
        answer: 2
      },

      {
        question_id: "CEL_CH2_EASY_CS16_Q04",
        question: "Re-appointment of a Managing Director cannot be made earlier than:",
        options: [
          "One month before expiry of the term",
          "Six months before expiry of the term",
          "One year before expiry of the term",
          "Two years before expiry of the term"
        ],
        answer: 2
      },

      {
        question_id: "CEL_CH2_EASY_CS16_Q05",
        question: "Mr. Arjun proposed to be appointed as Managing Director for six years would be:",
        options: [
          "Valid because the Board can decide any tenure",
          "Valid if approved by the auditor",
          "Invalid because the term cannot exceed five years at a time",
          "Valid only for a private company"
        ],
        answer: 2
      }

    ]
  },


  /* =========================================================
     CASE SCENARIO 17
     TOPIC: AGE AND ELIGIBILITY OF MANAGERIAL PERSONNEL
  ========================================================= */

  {
    case_id: "CEL_CH2_EASY_CS17",
    case_chapter: [
      "Section 196",
      "Eligibility Conditions",
      "Age of MD/WTD/Manager",
      "Schedule V"
    ],

    caseText: `
      <p>
        Sunrise Textiles Limited proposes to appoint Mr. Dev as its Managing
        Director. Mr. Dev is 72 years old and has extensive experience in the
        textile industry.
      </p>

      <p>
        The Board is aware that Section 196 prescribes an age limit for
        appointment as Managing Director, Whole-time Director or Manager.
        However, the Board also learns that a person who has attained the age
        of 70 years may be appointed if the prescribed special resolution is
        passed by the company.
      </p>
    `,

    questions: [

      {
        question_id: "CEL_CH2_EASY_CS17_Q01",
        question: "A person appointed as Managing Director should ordinarily have completed at least:",
        options: [
          "18 years",
          "21 years",
          "25 years",
          "30 years"
        ],
        answer: 1
      },

      {
        question_id: "CEL_CH2_EASY_CS17_Q02",
        question: "The normal upper age limit for appointment as MD, WTD or Manager is:",
        options: [
          "60 years",
          "65 years",
          "70 years",
          "75 years"
        ],
        answer: 2
      },

      {
        question_id: "CEL_CH2_EASY_CS17_Q03",
        question: "A person who has attained 70 years may be appointed as MD if:",
        options: [
          "The auditor approves the appointment",
          "A special resolution is passed",
          "Only the Company Secretary approves it",
          "The Registrar gives automatic approval"
        ],
        answer: 1
      },

      {
        question_id: "CEL_CH2_EASY_CS17_Q04",
        question: "For appointment of a person above 70 years, the explanatory statement should indicate:",
        options: [
          "His personal assets",
          "The justification for appointing such person",
          "His income-tax return",
          "The company's dividend history"
        ],
        answer: 1
      },

      {
        question_id: "CEL_CH2_EASY_CS17_Q05",
        question: "Mr. Dev, aged 72, can be appointed as Managing Director if the company:",
        options: [
          "Passes the required special resolution",
          "Gets approval from its statutory auditor",
          "Obtains approval from every employee",
          "Appoints him only as a Manager"
        ],
        answer: 0
      }

    ]
  },


  /* =========================================================
     CASE SCENARIO 18
     TOPIC: FUNCTIONS OF COMPANY SECRETARY - SECTION 205
  ========================================================= */

  {
    case_id: "CEL_CH2_EASY_CS18",
    case_chapter: [
      "Section 205",
      "Functions of Company Secretary",
      "Secretarial Standards",
      "Corporate Governance"
    ],

    caseText: `
      <p>
        Reliable Motors Limited has appointed Ms. Neha as its Company Secretary.
        The Board asks her to assist the company in complying with the Companies
        Act, applicable rules and secretarial standards.
      </p>

      <p>
        Ms. Neha also assists the Board in convening meetings, maintaining
        minutes and obtaining necessary approvals from the Board, shareholders
        and government authorities. She also advises the Board on corporate
        governance matters.
      </p>
    `,

    questions: [

      {
        question_id: "CEL_CH2_EASY_CS18_Q01",
        question: "The Company Secretary has a duty to report to the Board regarding:",
        options: [
          "Compliance with applicable laws",
          "Personal matters of shareholders",
          "Competitors' salaries",
          "Bank interest rates only"
        ],
        answer: 0
      },

      {
        question_id: "CEL_CH2_EASY_CS18_Q02",
        question: "The Company Secretary should ensure compliance with applicable:",
        options: [
          "Secretarial standards",
          "Foreign laws only",
          "Accounting standards only",
          "Banking regulations only"
        ],
        answer: 0
      },

      {
        question_id: "CEL_CH2_EASY_CS18_Q03",
        question: "The Company Secretary facilitates the convening of:",
        options: [
          "Only shareholder meetings",
          "Only Board meetings",
          "Board, committee and general meetings",
          "Only meetings of employees"
        ],
        answer: 2
      },

      {
        question_id: "CEL_CH2_EASY_CS18_Q04",
        question: "The Company Secretary may assist the Board in ensuring:",
        options: [
          "Good corporate governance",
          "Higher tax liability",
          "Reduction of share capital in every case",
          "Personal investments of directors"
        ],
        answer: 0
      },

      {
        question_id: "CEL_CH2_EASY_CS18_Q05",
        question: "The Company Secretary may represent the company before:",
        options: [
          "Various regulators and authorities under the Companies Act",
          "Only private banks",
          "Only employees",
          "Only shareholders"
        ],
        answer: 0
      }

    ]
  },


  /* =========================================================
     CASE SCENARIO 19
     TOPIC: SITTING FEES - SECTION 197(5)
  ========================================================= */

  {
    case_id: "CEL_CH2_EASY_CS19",
    case_chapter: [
      "Section 197",
      "Sitting Fees",
      "Directors",
      "Rule 4"
    ],

    caseText: `
      <p>
        Apex Pharma Limited wants to revise the sitting fees payable to its
        directors for attending meetings of the Board and its committees.
        The Board proposes to pay ₹75,000 to each director for every meeting
        attended.
      </p>

      <p>
        The Company Secretary informs the Board that the Companies Act permits
        payment of sitting fees subject to the prescribed ceiling. The Board
        also considers the position of Independent Directors and Women Directors.
      </p>
    `,

    questions: [

      {
        question_id: "CEL_CH2_EASY_CS19_Q01",
        question: "Sitting fees may be paid to directors for attending:",
        options: [
          "Board or committee meetings",
          "Only annual general meetings",
          "Only employee meetings",
          "Only meetings with auditors"
        ],
        answer: 0
      },

      {
        question_id: "CEL_CH2_EASY_CS19_Q02",
        question: "The maximum sitting fee prescribed per Board or committee meeting is:",
        options: [
          "₹25,000",
          "₹50,000",
          "₹1 lakh",
          "₹2 lakh"
        ],
        answer: 2
      },

      {
        question_id: "CEL_CH2_EASY_CS19_Q03",
        question: "A sitting fee of ₹75,000 per meeting would be:",
        options: [
          "Within the prescribed ceiling",
          "Above the prescribed ceiling",
          "Invalid in every case",
          "Payable only to the Managing Director"
        ],
        answer: 0
      },

      {
        question_id: "CEL_CH2_EASY_CS19_Q04",
        question: "The sitting fee payable to an Independent Director shall:",
        options: [
          "Always be zero",
          "Not be less than that payable to other directors",
          "Always be double that payable to other directors",
          "Be decided by the statutory auditor"
        ],
        answer: 1
      },

      {
        question_id: "CEL_CH2_EASY_CS19_Q05",
        question: "The sitting fee payable to Women Directors shall:",
        options: [
          "Not be less than that payable to other directors",
          "Always be less than other directors",
          "Not be paid",
          "Be fixed only by the Central Government"
        ],
        answer: 0
      }

    ]
  },


  /* =========================================================
     CASE SCENARIO 20
     TOPIC: REFUND OF EXCESS REMUNERATION - SECTION 197(9)
  ========================================================= */

  {
    case_id: "CEL_CH2_EASY_CS20",
    case_chapter: [
      "Section 197",
      "Excess Remuneration",
      "Refund",
      "Managerial Remuneration"
    ],

    caseText: `
      <p>
        Pioneer Limited discovers that its Managing Director, Mr. Karan, has
        received remuneration in excess of the limit prescribed under Section
        197 without obtaining the required approval.
      </p>

      <p>
        The company asks Mr. Karan to refund the excess amount. Mr. Karan argues
        that since the amount has already been paid to him, he should be allowed
        to retain it.
      </p>

      <p>
        The Board explains that the Companies Act contains specific provisions
        requiring refund of excess remuneration and also provides a mechanism
        for waiver subject to prescribed conditions.
      </p>
    `,

    questions: [

      {
        question_id: "CEL_CH2_EASY_CS20_Q01",
        question: "Excess remuneration received by a director in violation of Section 197 is required to be:",
        options: [
          "Retained permanently",
          "Refunded to the company",
          "Paid to the shareholders",
          "Transferred to the Central Government"
        ],
        answer: 1
      },

      {
        question_id: "CEL_CH2_EASY_CS20_Q02",
        question: "The excess remuneration should generally be refunded within:",
        options: [
          "Six months",
          "One year",
          "Two years",
          "Five years"
        ],
        answer: 2
      },

      {
        question_id: "CEL_CH2_EASY_CS20_Q03",
        question: "Until the excess remuneration is refunded, the director holds the amount:",
        options: [
          "As his personal property",
          "As trustee for employees",
          "In trust for the company",
          "On behalf of the auditor"
        ],
        answer: 2
      },

      {
        question_id: "CEL_CH2_EASY_CS20_Q04",
        question: "Can the company waive recovery of excess remuneration?",
        options: [
          "Yes, automatically",
          "Yes, subject to approval by special resolution within the prescribed period",
          "No, under any circumstances",
          "Yes, only through an ordinary Board circular"
        ],
        answer: 1
      },

      {
        question_id: "CEL_CH2_EASY_CS20_Q05",
        question: "Where the company has defaulted in payment of specified secured dues, before obtaining approval for waiver it may need prior approval of:",
        options: [
          "The concerned creditor",
          "Every employee",
          "The Registrar only",
          "The statutory auditor only"
        ],
        answer: 0
      }

    ]
  },

  /* =========================================================
     CASE SCENARIO 26
     TOPIC: MANAGER - SECTION 2(53)
  ========================================================= */

  {
    case_id: "CEL_CH2_EASY_CS26",
    case_chapter: [
      "Section 2(53)",
      "Manager",
      "Managerial Personnel"
    ],

    caseText: `
      <p>
        Excellent Foods Limited has appointed Mr. Rahul to supervise and control
        the marketing department of the company. Mr. Rahul is responsible only
        for the marketing activities and does not have control over the whole or
        substantially the whole affairs of the company.
      </p>

      <p>
        The Board wants to determine whether Mr. Rahul can be regarded as a
        "Manager" within the meaning of Section 2(53) of the Companies Act,
        2013.
      </p>

      <p>
        The Company Secretary explains that a manager must have the management
        of the whole, or substantially the whole, of the affairs of the company,
        subject to the superintendence, control and direction of the Board.
      </p>
    `,

    questions: [

      {
        question_id: "CEL_CH2_EASY_CS26_Q01",
        question: "A Manager under Section 2(53) must have management of:",
        options: [
          "Only one department",
          "The whole or substantially the whole affairs of the company",
          "Only the finance department",
          "Only the marketing department"
        ],
        answer: 1
      },

      {
        question_id: "CEL_CH2_EASY_CS26_Q02",
        question: "A person heading only the marketing department is generally:",
        options: [
          "A Manager under Section 2(53)",
          "Not a Manager under Section 2(53)",
          "Automatically a Managing Director",
          "Automatically a Whole-time Director"
        ],
        answer: 1
      },

      {
        question_id: "CEL_CH2_EASY_CS26_Q03",
        question: "A Manager functions subject to the:",
        options: [
          "Control of shareholders alone",
          "Superintendence, control and direction of the Board",
          "Directions of the statutory auditor",
          "Directions of the Registrar"
        ],
        answer: 1
      },

      {
        question_id: "CEL_CH2_EASY_CS26_Q04",
        question: "A Manager under Section 2(53) is:",
        options: [
          "Always required to be a director",
          "An individual",
          "Always a company",
          "Always a shareholder"
        ],
        answer: 1
      },

      {
        question_id: "CEL_CH2_EASY_CS26_Q05",
        question: "Mr. Rahul, who manages only the marketing department, would generally be:",
        options: [
          "A Manager under Section 2(53)",
          "Not a Manager under Section 2(53)",
          "A KMP automatically",
          "A Managing Director automatically"
        ],
        answer: 1
      }

    ]
  },


  /* =========================================================
     CASE SCENARIO 27
     TOPIC: MANAGING DIRECTOR - SECTION 2(54)
  ========================================================= */

  {
    case_id: "CEL_CH2_EASY_CS27",
    case_chapter: [
      "Section 2(54)",
      "Managing Director",
      "Substantial Powers of Management"
    ],

    caseText: `
      <p>
        Horizon Industries Limited has appointed Mr. Sameer as a director.
        Under an agreement with the company, he has been entrusted with
        substantial powers of management of the affairs of the company.
      </p>

      <p>
        The Board also authorises Mr. Sameer to perform certain routine
        administrative functions, such as signing certificates and drawing
        cheques. Mr. Sameer argues that these routine powers alone make him a
        Managing Director.
      </p>

      <p>
        The Company Secretary explains that routine administrative acts do not
        by themselves constitute substantial powers of management for the
        purpose of the definition of Managing Director.
      </p>
    `,

    questions: [

      {
        question_id: "CEL_CH2_EASY_CS27_Q01",
        question: "A Managing Director must first be:",
        options: [
          "A shareholder",
          "A director",
          "A statutory auditor",
          "A Company Secretary"
        ],
        answer: 1
      },

      {
        question_id: "CEL_CH2_EASY_CS27_Q02",
        question: "A Managing Director is entrusted with:",
        options: [
          "Substantial powers of management",
          "Only clerical duties",
          "Only accounting duties",
          "Only secretarial duties"
        ],
        answer: 0
      },

      {
        question_id: "CEL_CH2_EASY_CS27_Q03",
        question: "Substantial powers of management may be entrusted through:",
        options: [
          "An agreement with the company",
          "Only an oral statement by an employee",
          "Only an auditor's report",
          "Only a bank letter"
        ],
        answer: 0
      },

      {
        question_id: "CEL_CH2_EASY_CS27_Q04",
        question: "Routine administrative acts authorised by the Board are:",
        options: [
          "Automatically substantial powers of management",
          "Not treated as substantial powers merely because they are authorised",
          "Always prohibited for an MD",
          "Allowed only to shareholders"
        ],
        answer: 1
      },

      {
        question_id: "CEL_CH2_EASY_CS27_Q05",
        question: "If Mr. Sameer ceases to be a director, he would:",
        options: [
          "Continue automatically as Managing Director",
          "Cease to be Managing Director",
          "Become Company Secretary",
          "Become an Independent Director automatically"
        ],
        answer: 1
      }

    ]
  },


  /* =========================================================
     CASE SCENARIO 28
     TOPIC: WHOLE-TIME DIRECTOR - SECTION 2(94)
  ========================================================= */

  {
    case_id: "CEL_CH2_EASY_CS28",
    case_chapter: [
      "Section 2(94)",
      "Whole-time Director",
      "WTD"
    ],

    caseText: `
      <p>
        Silverline Limited wants to appoint Mr. Karan as its Whole-time
        Director. Mr. Karan is currently a full-time employee of the company
        but is not a director.
      </p>

      <p>
        The Board proposes to designate him as a Whole-time Director because he
        spends all his working time managing the affairs of the company.
      </p>

      <p>
        The Company Secretary explains that being in whole-time employment is
        not sufficient by itself. A Whole-time Director must also be a director
        of the company.
      </p>
    `,

    questions: [

      {
        question_id: "CEL_CH2_EASY_CS28_Q01",
        question: "A Whole-time Director is a:",
        options: [
          "Director in the whole-time employment of the company",
          "Part-time employee only",
          "Shareholder only",
          "Statutory auditor"
        ],
        answer: 0
      },

      {
        question_id: "CEL_CH2_EASY_CS28_Q02",
        question: "A person who is not a director can be appointed as Whole-time Director.",
        options: [
          "True",
          "False",
          "Only with auditor approval",
          "Only in a private company"
        ],
        answer: 1
      },

      {
        question_id: "CEL_CH2_EASY_CS28_Q03",
        question: "A Whole-time Director is expected to devote:",
        options: [
          "Only one hour a week",
          "His time in totality for the management of the company",
          "No time to the company",
          "Only time during AGM"
        ],
        answer: 1
      },

      {
        question_id: "CEL_CH2_EASY_CS28_Q04",
        question: "Mr. Karan, being only a full-time employee and not a director, can be designated as WTD immediately.",
        options: [
          "Yes",
          "No",
          "Yes, if employees approve",
          "Yes, if the auditor agrees"
        ],
        answer: 1
      },

      {
        question_id: "CEL_CH2_EASY_CS28_Q05",
        question: "The key requirement distinguishing a WTD is that he is:",
        options: [
          "A director in whole-time employment",
          "Only a shareholder",
          "Only an executive employee",
          "Only a consultant"
        ],
        answer: 0
      }

    ]
  },


  /* =========================================================
     CASE SCENARIO 29
     TOPIC: REMUNERATION - SECTION 197
  ========================================================= */

  {
    case_id: "CEL_CH2_EASY_CS29",
    case_chapter: [
      "Section 197",
      "Maximum Managerial Remuneration",
      "Public Company"
    ],

    caseText: `
      <p>
        Prosperity Limited is a public company having profits for the financial
        year. The company is considering the remuneration payable to its
        directors, including its Managing Director and other directors.
      </p>

      <p>
        The Board is informed that the overall managerial remuneration payable
        by a public company to its directors, including the Managing Director,
        Whole-time Director and Manager, is subject to an overall statutory
        ceiling based on the net profits calculated under Section 198.
      </p>
    `,

    questions: [

      {
        question_id: "CEL_CH2_EASY_CS29_Q01",
        question: "The overall maximum managerial remuneration under Section 197 for a public company is generally:",
        options: [
          "5% of net profits",
          "10% of net profits",
          "11% of net profits",
          "20% of net profits"
        ],
        answer: 2
      },

      {
        question_id: "CEL_CH2_EASY_CS29_Q02",
        question: "The 11% overall limit is calculated with reference to:",
        options: [
          "Gross turnover",
          "Net profits calculated under Section 198",
          "Paid-up capital",
          "Share premium"
        ],
        answer: 1
      },

      {
        question_id: "CEL_CH2_EASY_CS29_Q03",
        question: "The overall 11% limit may be exceeded with approval by:",
        options: [
          "The company's general meeting through special resolution",
          "The statutory auditor alone",
          "The Registrar alone",
          "Any employee"
        ],
        answer: 0
      },

      {
        question_id: "CEL_CH2_EASY_CS29_Q04",
        question: "The 11% overall limit relates to remuneration payable to:",
        options: [
          "Only the Managing Director",
          "Only independent directors",
          "Directors including MD, WTD and Manager",
          "Only the Company Secretary"
        ],
        answer: 2
      },

      {
        question_id: "CEL_CH2_EASY_CS29_Q05",
        question: "Section 197's provisions regarding overall managerial remuneration apply to:",
        options: [
          "Public companies",
          "Only sole proprietorships",
          "Only partnership firms",
          "Every private company without exception"
        ],
        answer: 0
      }

    ]
  },


  /* =========================================================
     CASE SCENARIO 30
     TOPIC: MD / WTD / MANAGER - AGE DISQUALIFICATION
  ========================================================= */

  {
    case_id: "CEL_CH2_EASY_CS30",
    case_chapter: [
      "Section 196",
      "Eligibility",
      "Disqualification",
      "Managerial Personnel"
    ],

    caseText: `
      <p>
        Blue Star Limited is considering the appointment of Mr. Mohan as its
        Whole-time Director. During the due diligence process, the company
        discovers that Mr. Mohan has been adjudged an undischarged insolvent.
      </p>

      <p>
        The Board also examines other statutory eligibility conditions applicable
        to persons appointed as Managing Director, Whole-time Director or
        Manager under Section 196.
      </p>

      <p>
        The Company Secretary explains that certain circumstances, including
        being an undischarged insolvent, can disqualify a person from such
        appointment.
      </p>
    `,

    questions: [

      {
        question_id: "CEL_CH2_EASY_CS30_Q01",
        question: "An undischarged insolvent can ordinarily be appointed as MD, WTD or Manager.",
        options: [
          "True",
          "False",
          "Only with shareholder approval",
          "Only in a public company"
        ],
        answer: 1
      },

      {
        question_id: "CEL_CH2_EASY_CS30_Q02",
        question: "Being an undischarged insolvent is relevant to the eligibility conditions under:",
        options: [
          "Section 196",
          "Section 123",
          "Section 205 only",
          "Section 204 only"
        ],
        answer: 0
      },

      {
        question_id: "CEL_CH2_EASY_CS30_Q03",
        question: "A person who has been adjudged an insolvent and remains undischarged is:",
        options: [
          "Eligible automatically",
          "Disqualified from appointment under the specified provision",
          "Automatically appointed as Manager",
          "Eligible only if he is a shareholder"
        ],
        answer: 1
      },

      {
        question_id: "CEL_CH2_EASY_CS30_Q04",
        question: "Which of the following is another specified disqualification under Section 196?",
        options: [
          "Suspending payment to creditors or making composition with them",
          "Attending Board meetings",
          "Holding a professional qualification",
          "Receiving sitting fees"
        ],
        answer: 0
      },

      {
        question_id: "CEL_CH2_EASY_CS30_Q05",
        question: "The eligibility conditions under Section 196 apply to appointment as:",
        options: [
          "Only Managing Director",
          "Only Whole-time Director",
          "Only Manager",
          "Managing Director, Whole-time Director or Manager"
        ],
        answer: 3
      }

    ]
  },

  /* =========================================================
     CASE SCENARIO 31
     DIFFICULTY: MEDIUM
     TOPIC: APPOINTMENT OF MD/WTD/MANAGER - SECTION 196
  ========================================================= */

  {
    case_id: "CEL_CH2_MEDIUM_CS31",
    difficulty: "Medium",
    case_chapter: [
      "Section 196",
      "Appointment of MD/WTD/Manager",
      "Tenure",
      "Re-appointment"
    ],

    caseText: `
      <p>
        Apex Engineering Limited appointed Mr. Arvind as its Managing Director
        for a period of five years commencing from 1 April 2024. His term is
        therefore scheduled to expire on 31 March 2029.
      </p>

      <p>
        The Board, being satisfied with his performance, proposes to re-appoint
        him for another term of five years. The proposal is placed before the
        shareholders on 15 March 2028.
      </p>

      <p>
        One of the directors argues that the company cannot consider the
        re-appointment before the expiry of the existing term. The Company
        Secretary points out that the Companies Act, 2013 permits re-appointment
        before expiry, but restricts how early such re-appointment can be made.
      </p>
    `,

    questions: [

      {
        question_id: "CEL_CH2_MEDIUM_CS31_Q01",
        difficulty: "Medium",
        question: "When can the re-appointment of Mr. Arvind validly be considered under Section 196(2)?",
        options: [
          "Only after expiry of the existing term",
          "At any time during the existing term",
          "Not earlier than one year before expiry of the existing term",
          "Only during the last one month of the existing term"
        ],
        answer: 2
      },

      {
        question_id: "CEL_CH2_MEDIUM_CS31_Q02",
        difficulty: "Medium",
        question: "The maximum term for which Mr. Arvind can be re-appointed at one time is:",
        options: [
          "Three years",
          "Five years",
          "Seven years",
          "Ten years"
        ],
        answer: 1
      },

      {
        question_id: "CEL_CH2_MEDIUM_CS31_Q03",
        difficulty: "Medium",
        question: "If the company proposes the re-appointment on 15 March 2028, when the existing term expires on 31 March 2029, the proposal is:",
        options: [
          "Valid because it is within one year before expiry",
          "Invalid because re-appointment can only occur after expiry",
          "Invalid because the existing term has not expired",
          "Valid only if approved by the Central Government"
        ],
        answer: 0
      },

      {
        question_id: "CEL_CH2_MEDIUM_CS31_Q04",
        difficulty: "Medium",
        question: "Which statement correctly describes the tenure restriction under Section 196(2)?",
        options: [
          "Appointment can be for any period if shareholders agree",
          "Appointment or re-appointment cannot exceed five years at a time",
          "Appointment can be for life in a private company",
          "Appointment can exceed five years with Board approval alone"
        ],
        answer: 1
      },

      {
        question_id: "CEL_CH2_MEDIUM_CS31_Q05",
        difficulty: "Medium",
        question: "If the Articles of Apex Engineering Limited provide that an MD may be appointed for life, the provision would be:",
        options: [
          "Valid because Articles override Section 196",
          "Valid if approved by the Board",
          "Invalid because the statutory maximum tenure is five years",
          "Valid only for private companies"
        ],
        answer: 2
      }

    ]
  },


  /* =========================================================
     CASE SCENARIO 32
     DIFFICULTY: MEDIUM
     TOPIC: AGE OF MD/WTD/MANAGER
  ========================================================= */

  {
    case_id: "CEL_CH2_MEDIUM_CS32",
    difficulty: "Medium",
    case_chapter: [
      "Section 196(3)",
      "Age Limit",
      "Special Resolution",
      "Central Government Approval"
    ],

    caseText: `
      <p>
        Zenith Textiles Limited proposes to appoint Mr. Ramesh as its Managing
        Director. Mr. Ramesh is 72 years old and has considerable experience in
        the textile industry.
      </p>

      <p>
        The Board proposes to place the appointment before the members in general
        meeting. Some shareholders are concerned that a person who has attained
        the age of 70 years cannot be appointed as Managing Director.
      </p>

      <p>
        The Company Secretary explains that although the normal age limit is
        70 years, the Act permits appointment of a person who has attained
        70 years if the required special resolution is passed. The explanatory
        statement must also contain justification for appointing such person.
      </p>
    `,

    questions: [

      {
        question_id: "CEL_CH2_MEDIUM_CS32_Q01",
        difficulty: "Medium",
        question: "The normal maximum age for appointment as MD, WTD or Manager is:",
        options: [
          "60 years",
          "65 years",
          "70 years",
          "75 years"
        ],
        answer: 2
      },

      {
        question_id: "CEL_CH2_MEDIUM_CS32_Q02",
        difficulty: "Medium",
        question: "Mr. Ramesh, aged 72 years, may be appointed as MD if:",
        options: [
          "The Board alone approves the appointment",
          "A special resolution is passed by the company",
          "The auditor approves the appointment",
          "All shareholders individually consent"
        ],
        answer: 1
      },

      {
        question_id: "CEL_CH2_MEDIUM_CS32_Q03",
        difficulty: "Medium",
        question: "The explanatory statement accompanying the notice for appointment of a person above 70 years should indicate:",
        options: [
          "His personal wealth",
          "The justification for appointing such person",
          "His shareholding only",
          "The auditor's opinion"
        ],
        answer: 1
      },

      {
        question_id: "CEL_CH2_MEDIUM_CS32_Q04",
        difficulty: "Medium",
        question: "If the special resolution is not passed but votes in favour exceed votes against, the appointment may still be regularised if:",
        options: [
          "The Board requests the Central Government and it is satisfied that the appointment is most beneficial to the company",
          "The auditor approves it",
          "The Registrar automatically approves it",
          "The Company Secretary approves it"
        ],
        answer: 0
      },

      {
        question_id: "CEL_CH2_MEDIUM_CS32_Q05",
        difficulty: "Medium",
        question: "Who is required to be satisfied regarding the benefit of appointing the person above 70 years when the special resolution is not passed?",
        options: [
          "Board of Directors",
          "Central Government",
          "Statutory Auditor",
          "Nomination and Remuneration Committee"
        ],
        answer: 1
      }

    ]
  },


  /* =========================================================
     CASE SCENARIO 33
     DIFFICULTY: MEDIUM
     TOPIC: KMP - MULTIPLE APPOINTMENTS
  ========================================================= */

  {
    case_id: "CEL_CH2_MEDIUM_CS33",
    difficulty: "Medium",
    case_chapter: [
      "Section 203",
      "Key Managerial Personnel",
      "Multiple Appointments",
      "Subsidiary Company"
    ],

    caseText: `
      <p>
        Global Finance Limited is a listed company. Ms. Priya is its whole-time
        Chief Financial Officer (CFO). A subsidiary company, Global Finance
        Services Private Limited, proposes to appoint Ms. Priya as its whole-time
        CFO as well.
      </p>

      <p>
        The Board of the parent company is considering whether such appointment
        would violate the restriction on holding office as whole-time KMP in more
        than one company.
      </p>

      <p>
        The Company Secretary explains that a whole-time KMP cannot ordinarily
        hold office in more than one company at the same time, except in its
        subsidiary company. A whole-time KMP may also become a director in any
        company with the permission of the Board.
      </p>
    `,

    questions: [

      {
        question_id: "CEL_CH2_MEDIUM_CS33_Q01",
        difficulty: "Medium",
        question: "As a general rule, a whole-time KMP cannot hold office in:",
        options: [
          "More than one company at the same time",
          "Any company",
          "A subsidiary company only",
          "The company appointing him"
        ],
        answer: 0
      },

      {
        question_id: "CEL_CH2_MEDIUM_CS33_Q02",
        difficulty: "Medium",
        question: "The restriction contains an exception for:",
        options: [
          "Any unrelated company",
          "Its subsidiary company",
          "Any partnership firm",
          "Any foreign company"
        ],
        answer: 1
      },

      {
        question_id: "CEL_CH2_MEDIUM_CS33_Q03",
        difficulty: "Medium",
        question: "Ms. Priya can hold the office of whole-time KMP in Global Finance Limited and its subsidiary:",
        options: [
          "Never",
          "Yes, subject to the applicable provisions",
          "Only if the auditor permits",
          "Only if the Registrar permits"
        ],
        answer: 1
      },

      {
        question_id: "CEL_CH2_MEDIUM_CS33_Q04",
        difficulty: "Medium",
        question: "A whole-time KMP may also be a director in another company:",
        options: [
          "Only without Board permission",
          "With the permission of the Board",
          "Only with Central Government approval",
          "Never"
        ],
        answer: 1
      },

      {
        question_id: "CEL_CH2_MEDIUM_CS33_Q05",
        difficulty: "Medium",
        question: "If Ms. Priya is appointed as whole-time CFO of an unrelated company simultaneously, the appointment would generally:",
        options: [
          "Be permitted automatically",
          "Be prohibited under the multiple-office restriction",
          "Require only auditor approval",
          "Require only shareholder approval"
        ],
        answer: 1
      }

    ]
  },


  /* =========================================================
     CASE SCENARIO 34
     DIFFICULTY: MEDIUM
     TOPIC: KMP VACANCY
  ========================================================= */

  {
    case_id: "CEL_CH2_MEDIUM_CS34",
    difficulty: "Medium",
    case_chapter: [
      "Section 203(4)",
      "KMP Vacancy",
      "Board Meeting"
    ],

    caseText: `
      <p>
        Sunrise Industries Limited is a listed company. Its whole-time Company
        Secretary resigns from office on 10 January 2026. The Board acknowledges
        the resignation but decides to wait until the next Annual General Meeting
        in September 2026 before appointing a replacement.
      </p>

      <p>
        The compliance officer informs the Board that the vacancy of whole-time
        KMP cannot simply be left vacant until the next general meeting. The
        resulting vacancy must be filled by the Board within the prescribed
        period.
      </p>
    `,

    questions: [

      {
        question_id: "CEL_CH2_MEDIUM_CS34_Q01",
        difficulty: "Medium",
        question: "A vacancy in the office of a whole-time KMP must be filled by:",
        options: [
          "The shareholders only",
          "The Board of Directors",
          "The statutory auditor",
          "The Registrar"
        ],
        answer: 1
      },

      {
        question_id: "CEL_CH2_MEDIUM_CS34_Q02",
        difficulty: "Medium",
        question: "The vacancy must be filled within:",
        options: [
          "30 days",
          "90 days",
          "Six months",
          "One year"
        ],
        answer: 2
      },

      {
        question_id: "CEL_CH2_MEDIUM_CS34_Q03",
        difficulty: "Medium",
        question: "The Board should fill the vacancy:",
        options: [
          "At a meeting of the Board",
          "Only at the AGM",
          "Only through postal ballot",
          "Only through a court order"
        ],
        answer: 0
      },

      {
        question_id: "CEL_CH2_MEDIUM_CS34_Q04",
        difficulty: "Medium",
        question: "If the vacancy occurred on 10 January 2026, the statutory six-month period would generally run from:",
        options: [
          "The next AGM",
          "10 January 2026",
          "The end of the financial year",
          "The date of the next Board meeting only"
        ],
        answer: 1
      },

      {
        question_id: "CEL_CH2_MEDIUM_CS34_Q05",
        difficulty: "Medium",
        question: "Waiting until September 2026 merely because the AGM is scheduled then would be:",
        options: [
          "Automatically compliant",
          "Potentially contrary to Section 203(4), if the six-month period is exceeded",
          "Mandatory",
          "Required by Schedule V"
        ],
        answer: 1
      }

    ]
  },


  /* =========================================================
     CASE SCENARIO 35
     DIFFICULTY: MEDIUM
     TOPIC: SECRETARIAL AUDIT
  ========================================================= */

  {
    case_id: "CEL_CH2_MEDIUM_CS35",
    difficulty: "Medium",
    case_chapter: [
      "Section 204",
      "Secretarial Audit",
      "Rule 9",
      "Applicability"
    ],

    caseText: `
      <p>
        Green Pharma Limited is a public company. As per its latest audited
        financial statements, its paid-up share capital is ₹42 crore, annual
        turnover is ₹210 crore and outstanding loans from banks and public
        financial institutions amount to ₹105 crore.
      </p>

      <p>
        The management argues that secretarial audit is not applicable because
        the company's paid-up share capital is below ₹50 crore and its turnover
        is below ₹250 crore.
      </p>

      <p>
        The Company Secretary points out that the rules prescribe separate
        thresholds and that crossing any one of the prescribed thresholds may
        make the company subject to secretarial audit.
      </p>
    `,

    questions: [

      {
        question_id: "CEL_CH2_MEDIUM_CS35_Q01",
        difficulty: "Medium",
        question: "Secretarial audit is applicable to every listed company.",
        options: [
          "True",
          "False",
          "Only if turnover exceeds ₹250 crore",
          "Only if loans exceed ₹200 crore"
        ],
        answer: 0
      },

      {
        question_id: "CEL_CH2_MEDIUM_CS35_Q02",
        difficulty: "Medium",
        question: "A prescribed public company threshold for secretarial audit based on paid-up share capital is:",
        options: [
          "₹10 crore or more",
          "₹25 crore or more",
          "₹50 crore or more",
          "₹100 crore or more"
        ],
        answer: 2
      },

      {
        question_id: "CEL_CH2_MEDIUM_CS35_Q03",
        difficulty: "Medium",
        question: "The prescribed turnover threshold is:",
        options: [
          "₹100 crore or more",
          "₹150 crore or more",
          "₹200 crore or more",
          "₹250 crore or more"
        ],
        answer: 3
      },

      {
        question_id: "CEL_CH2_MEDIUM_CS35_Q04",
        difficulty: "Medium",
        question: "Green Pharma Limited has outstanding loans of ₹105 crore. Does this threshold trigger secretarial audit?",
        options: [
          "No, because the company has less than ₹50 crore capital",
          "No, because turnover is below ₹250 crore",
          "Yes, because outstanding loans/borrowings are ₹100 crore or more",
          "Only if shareholders pass a special resolution"
        ],
        answer: 2
      },

      {
        question_id: "CEL_CH2_MEDIUM_CS35_Q05",
        difficulty: "Medium",
        question: "The Secretarial Audit Report is issued by:",
        options: [
          "Statutory auditor",
          "Company Secretary in Practice",
          "Chief Financial Officer",
          "Registrar of Companies"
        ],
        answer: 1
      }

    ]
  },

  /* =========================================================
   CASE SCENARIO 36
   DIFFICULTY: MEDIUM
   TOPIC: OVERALL MANAGERIAL REMUNERATION - SECTION 197
========================================================= */

{
  case_id: "CEL_CH2_MEDIUM_CS36",
  difficulty: "Medium",
  case_chapter: [
    "Section 197",
    "Overall Managerial Remuneration",
    "Net Profits",
    "Special Resolution"
  ],

  caseText: `
    <p>
      Bright Industries Limited is a public company having sufficient profits
      during the financial year. The company has appointed one Managing Director,
      Mr. Aman, and two Whole-time Directors, Mr. Bharat and Mr. Chetan.
    </p>

    <p>
      The Board proposes to pay remuneration to all three managerial persons
      aggregating to 10% of the net profits of the company for the financial year.
      The Board also proposes to pay remuneration to the other non-executive
      directors at 1% of the net profits.
    </p>

    <p>
      One director suggests that since the company has adequate profits, there is
      no restriction on managerial remuneration. The Company Secretary explains
      that Section 197 prescribes an overall ceiling as well as separate ceilings
      for managerial and other directors.
    </p>
  `,

  questions: [

    {
      question_id: "CEL_CH2_MEDIUM_CS36_Q01",
      difficulty: "Medium",
      question: "What is the overall maximum managerial remuneration generally payable by a public company to its directors, including MD, WTD and Manager?",
      options: [
        "5% of net profits",
        "10% of net profits",
        "11% of net profits",
        "15% of net profits"
      ],
      answer: 2
    },

    {
      question_id: "CEL_CH2_MEDIUM_CS36_Q02",
      difficulty: "Medium",
      question: "Where there is more than one MD/WTD/Manager, the remuneration payable to all such persons taken together is generally limited to:",
      options: [
        "5% of net profits",
        "10% of net profits",
        "11% of net profits",
        "15% of net profits"
      ],
      answer: 1
    },

    {
      question_id: "CEL_CH2_MEDIUM_CS36_Q03",
      difficulty: "Medium",
      question: "The remuneration of directors who are neither MD nor WTD, where a managerial person exists, is generally limited to:",
      options: [
        "0.5% of net profits",
        "1% of net profits",
        "3% of net profits",
        "5% of net profits"
      ],
      answer: 1
    },

    {
      question_id: "CEL_CH2_MEDIUM_CS36_Q04",
      difficulty: "Medium",
      question: "Can the 10% limit applicable to multiple MDs/WTDs/Managers be exceeded?",
      options: [
        "Never",
        "Yes, with approval by special resolution in general meeting",
        "Yes, by Board resolution alone",
        "Yes, automatically if profits are high"
      ],
      answer: 1
    },

    {
      question_id: "CEL_CH2_MEDIUM_CS36_Q05",
      difficulty: "Medium",
      question: "The percentages prescribed under Section 197(1) are:",
      options: [
        "Inclusive of sitting fees",
        "Exclusive of sitting fees",
        "Applicable only to sitting fees",
        "Applicable only to independent directors"
      ],
      answer: 1
    }

  ]
},


/* =========================================================
   CASE SCENARIO 37
   DIFFICULTY: MEDIUM
   TOPIC: REMUNERATION IN ABSENCE/INADEQUACY OF PROFITS
========================================================= */

{
  case_id: "CEL_CH2_MEDIUM_CS37",
  difficulty: "Medium",
  case_chapter: [
    "Section 197(3)",
    "Schedule V",
    "No Profit/Inadequate Profit",
    "Effective Capital"
  ],

  caseText: `
    <p>
      Sunrise Manufacturing Limited has suffered inadequate profits during the
      financial year. The company has an effective capital of ₹7 crore. Its
      Managing Director, Mr. Raj, is proposed to be paid remuneration of
      ₹75 lakh for the year.
    </p>

    <p>
      The Board examines Schedule V and notes that where the effective capital is
      ₹5 crore and above but less than ₹100 crore, the prescribed annual limit for
      managerial remuneration in case of no profit or inadequate profit is
      ₹84 lakh.
    </p>

    <p>
      The company has also complied with the applicable approval requirements
      under Schedule V.
    </p>
  `,

  questions: [

    {
      question_id: "CEL_CH2_MEDIUM_CS37_Q01",
      difficulty: "Medium",
      question: "Where a company has no profits or inadequate profits, managerial remuneration is primarily governed by:",
      options: [
        "Schedule V",
        "Schedule I",
        "Section 92 only",
        "CARO"
      ],
      answer: 0
    },

    {
      question_id: "CEL_CH2_MEDIUM_CS37_Q02",
      difficulty: "Medium",
      question: "The effective capital of Sunrise Manufacturing Limited falls in which category?",
      options: [
        "Negative or less than ₹5 crore",
        "₹5 crore and above but less than ₹100 crore",
        "₹100 crore and above but less than ₹250 crore",
        "₹250 crore and above"
      ],
      answer: 1
    },

    {
      question_id: "CEL_CH2_MEDIUM_CS37_Q03",
      difficulty: "Medium",
      question: "The prescribed annual managerial remuneration limit for the relevant effective-capital category is:",
      options: [
        "₹60 lakh",
        "₹84 lakh",
        "₹120 lakh",
        "₹24 lakh"
      ],
      answer: 1
    },

    {
      question_id: "CEL_CH2_MEDIUM_CS37_Q04",
      difficulty: "Medium",
      question: "The proposed remuneration of ₹75 lakh is:",
      options: [
        "Within the prescribed ₹84 lakh limit",
        "Above the prescribed limit",
        "Automatically prohibited because there are inadequate profits",
        "Payable only after Central Government approval"
      ],
      answer: 0
    },

    {
      question_id: "CEL_CH2_MEDIUM_CS37_Q05",
      difficulty: "Medium",
      question: "If remuneration is proposed in excess of the prescribed limit, it may be paid subject to:",
      options: [
        "A special resolution by shareholders, subject to applicable conditions",
        "Approval of the statutory auditor only",
        "Approval of the CFO only",
        "No approval"
      ],
      answer: 0
    }

  ]
},


/* =========================================================
   CASE SCENARIO 38
   DIFFICULTY: MEDIUM
   TOPIC: EFFECTIVE CAPITAL
========================================================= */

{
  case_id: "CEL_CH2_MEDIUM_CS38",
  difficulty: "Medium",
  case_chapter: [
    "Schedule V",
    "Effective Capital",
    "Managerial Remuneration"
  ],

  caseText: `
    <p>
      Nova Technologies Limited has no profits for the financial year. For the
      purpose of determining managerial remuneration under Schedule V, the
      following figures are available:
    </p>

    <table>
      <tr>
        <th>Particulars</th>
        <th>Amount</th>
      </tr>
      <tr>
        <td>Paid-up share capital</td>
        <td>₹6 crore</td>
      </tr>
      <tr>
        <td>Share premium</td>
        <td>₹50 lakh</td>
      </tr>
      <tr>
        <td>Reserves excluding revaluation reserve</td>
        <td>₹40 lakh</td>
      </tr>
      <tr>
        <td>Long-term loan repayable after one year</td>
        <td>₹2 crore</td>
      </tr>
      <tr>
        <td>Working capital loan</td>
        <td>₹1 crore</td>
      </tr>
      <tr>
        <td>Investments</td>
        <td>₹50 lakh</td>
      </tr>
      <tr>
        <td>Accumulated losses</td>
        <td>₹20 lakh</td>
      </tr>
    </table>

    <p>
      The finance team is required to determine the effective capital for
      applying the appropriate Schedule V remuneration limit.
    </p>
  `,

  questions: [

    {
      question_id: "CEL_CH2_MEDIUM_CS38_Q01",
      difficulty: "Medium",
      question: "Which of the following is included in effective capital?",
      options: [
        "Working capital loan",
        "Share premium",
        "Revaluation reserve",
        "Accumulated losses"
      ],
      answer: 1
    },

    {
      question_id: "CEL_CH2_MEDIUM_CS38_Q02",
      difficulty: "Medium",
      question: "The working capital loan of ₹1 crore should generally be:",
      options: [
        "Added to effective capital",
        "Excluded from the long-term loan component",
        "Deducted from share capital",
        "Added twice"
      ],
      answer: 1
    },

    {
      question_id: "CEL_CH2_MEDIUM_CS38_Q03",
      difficulty: "Medium",
      question: "Revaluation reserve is:",
      options: [
        "Included in reserves for effective capital",
        "Excluded from reserves for effective capital",
        "Added as a long-term loan",
        "Deducted as investment"
      ],
      answer: 1
    },

    {
      question_id: "CEL_CH2_MEDIUM_CS38_Q04",
      difficulty: "Medium",
      question: "Accumulated losses are:",
      options: [
        "Added to effective capital",
        "Ignored completely",
        "Deducted while computing effective capital",
        "Treated as share premium"
      ],
      answer: 2
    },

    {
      question_id: "CEL_CH2_MEDIUM_CS38_Q05",
      difficulty: "Medium",
      question: "Based on the figures given, the effective capital is:",
      options: [
        "₹7.00 crore",
        "₹7.20 crore",
        "₹7.50 crore",
        "₹8.20 crore"
      ],
      answer: 1
    }

  ]
},


/* =========================================================
   CASE SCENARIO 39
   DIFFICULTY: MEDIUM
   TOPIC: REFUND OF EXCESS REMUNERATION
========================================================= */

{
  case_id: "CEL_CH2_MEDIUM_CS39",
  difficulty: "Medium",
  case_chapter: [
    "Section 197(9)",
    "Section 197(10)",
    "Refund of Excess Remuneration",
    "Special Resolution"
  ],

  caseText: `
    <p>
      Metro Infrastructure Limited paid remuneration of ₹18 lakh to its Managing
      Director, Mr. Dev, during the financial year. Subsequently, it was determined
      that only ₹12 lakh was permissible under the applicable provisions of the
      Companies Act, 2013.
    </p>

    <p>
      The excess remuneration of ₹6 lakh therefore became refundable to the
      company. Mr. Dev argues that since the payment had already been made and
      he had spent the money, he should not be required to refund it.
    </p>

    <p>
      The Company Secretary informs him that excess remuneration has to be
      refunded within the prescribed period and, until refunded, the amount is
      held by the director in trust for the company.
    </p>
  `,

  questions: [

    {
      question_id: "CEL_CH2_MEDIUM_CS39_Q01",
      difficulty: "Medium",
      question: "What amount is excess remuneration in the case?",
      options: [
        "₹4 lakh",
        "₹5 lakh",
        "₹6 lakh",
        "₹8 lakh"
      ],
      answer: 2
    },

    {
      question_id: "CEL_CH2_MEDIUM_CS39_Q02",
      difficulty: "Medium",
      question: "The director is required to:",
      options: [
        "Retain the excess amount permanently",
        "Refund the excess remuneration to the company",
        "Pay it to the Registrar",
        "Donate it to the Investor Education Fund"
      ],
      answer: 1
    },

    {
      question_id: "CEL_CH2_MEDIUM_CS39_Q03",
      difficulty: "Medium",
      question: "The excess remuneration is required to be refunded within:",
      options: [
        "Six months",
        "One year",
        "Two years or such lesser period as may be allowed by the company",
        "Five years"
      ],
      answer: 2
    },

    {
      question_id: "CEL_CH2_MEDIUM_CS39_Q04",
      difficulty: "Medium",
      question: "Until the excess remuneration is refunded, the director holds the amount:",
      options: [
        "As absolute owner",
        "As trustee for the company",
        "On behalf of the Registrar",
        "As a secured creditor"
      ],
      answer: 1
    },

    {
      question_id: "CEL_CH2_MEDIUM_CS39_Q05",
      difficulty: "Medium",
      question: "Can the company waive recovery of excess remuneration?",
      options: [
        "Never under any circumstances",
        "Yes, with approval by special resolution within the prescribed period and subject to applicable conditions",
        "Yes, by oral approval of the Board",
        "Yes, automatically after one year"
      ],
      answer: 1
    }

  ]
},


/* =========================================================
   CASE SCENARIO 40
   DIFFICULTY: MEDIUM
   TOPIC: COMPENSATION FOR LOSS OF OFFICE
========================================================= */

{
  case_id: "CEL_CH2_MEDIUM_CS40",
  difficulty: "Medium",
  case_chapter: [
    "Section 202",
    "Compensation for Loss of Office",
    "MD/WTD/Manager",
    "Prohibition on Compensation"
  ],

  caseText: `
    <p>
      Pioneer Electronics Limited appointed Mr. Sameer as its Managing Director
      for a five-year term. After three years, the company decides to terminate
      his office.
    </p>

    <p>
      Mr. Sameer claims compensation for loss of office. At the time of his
      removal, he has two years remaining in his term. His average remuneration
      during the immediately preceding three years was ₹20 lakh per year.
    </p>

    <p>
      During discussions, it is also discovered that Mr. Sameer had been guilty
      of gross negligence in the conduct of the company's affairs. The Board is
      therefore examining whether compensation is payable and, if payable, how
      much can be paid.
    </p>
  `,

  questions: [

    {
      question_id: "CEL_CH2_MEDIUM_CS40_Q01",
      difficulty: "Medium",
      question: "Compensation for loss of office under Section 202 may be paid to:",
      options: [
        "Any shareholder",
        "Any employee",
        "MD, WTD or Manager",
        "Only an independent director"
      ],
      answer: 2
    },

    {
      question_id: "CEL_CH2_MEDIUM_CS40_Q02",
      difficulty: "Medium",
      question: "The maximum compensation is generally restricted to remuneration for:",
      options: [
        "One year or remaining term, whichever is shorter",
        "Two years or remaining term, whichever is shorter",
        "Three years or remaining term, whichever is shorter",
        "Five years in every case"
      ],
      answer: 2
    },

    {
      question_id: "CEL_CH2_MEDIUM_CS40_Q03",
      difficulty: "Medium",
      question: "Mr. Sameer has two years remaining in his term. His average remuneration is ₹20 lakh per year. Subject to eligibility, the maximum compensation based on the remaining term would be:",
      options: [
        "₹20 lakh",
        "₹30 lakh",
        "₹40 lakh",
        "₹60 lakh"
      ],
      answer: 2
    },

    {
      question_id: "CEL_CH2_MEDIUM_CS40_Q04",
      difficulty: "Medium",
      question: "If Mr. Sameer has been guilty of gross negligence in relation to the conduct of the company's affairs, compensation for loss of office:",
      options: [
        "Must always be paid",
        "Cannot be paid under Section 202",
        "Can be doubled",
        "Can be paid only by the auditor"
      ],
      answer: 1
    },

    {
      question_id: "CEL_CH2_MEDIUM_CS40_Q05",
      difficulty: "Medium",
      question: "Which of the following is also a ground for prohibition of compensation under Section 202?",
      options: [
        "The director receives sitting fees",
        "The director has been guilty of fraud or breach of trust",
        "The director has served for five years",
        "The company has adequate profits"
      ],
      answer: 1
    }

  ]
},

/* =========================================================
   CASE SCENARIO 41
   DIFFICULTY: MEDIUM
   TOPIC: SITTING FEES - SECTION 197(5)
========================================================= */

{
  case_id: "CEL_CH2_MEDIUM_CS41",
  difficulty: "Medium",
  case_chapter: [
    "Section 197(5)",
    "Sitting Fees",
    "Independent Directors",
    "Women Directors"
  ],

  caseText: `
    <p>
      Vertex Machines Limited is a public company. The Board of Directors is
      reviewing the sitting fees payable to directors for attending meetings of
      the Board and its committees.
    </p>

    <p>
      At present, the company pays ₹60,000 per meeting to its executive and
      non-executive directors. Considering the additional responsibilities of
      certain directors, the Board proposes to pay ₹90,000 per meeting to its
      independent directors and ₹75,000 per meeting to its woman director.
    </p>

    <p>
      Another proposal is placed before the Board to pay ₹1,20,000 per meeting
      to the Chairman of the Board because of his extensive experience and
      responsibilities.
    </p>

    <p>
      The Company Secretary advises the Board to examine Section 197(5) read
      with Rule 4 of the Companies (Appointment and Remuneration of Managerial
      Personnel) Rules, 2014 before approving the proposals.
    </p>
  `,

  questions: [

    {
      question_id: "CEL_CH2_MEDIUM_CS41_Q01",
      difficulty: "Medium",
      question: "The maximum sitting fee that may be paid to a director for each meeting of the Board or committee thereof is:",
      options: [
        "₹50,000",
        "₹75,000",
        "₹1,00,000",
        "₹2,00,000"
      ],
      answer: 2
    },

    {
      question_id: "CEL_CH2_MEDIUM_CS41_Q02",
      difficulty: "Medium",
      question: "The proposed sitting fee of ₹90,000 per meeting to independent directors is:",
      options: [
        "Invalid because independent directors cannot receive sitting fees",
        "Valid since it does not exceed ₹1,00,000 per meeting",
        "Invalid because all directors must receive exactly equal sitting fees",
        "Valid only with Central Government approval"
      ],
      answer: 1
    },

    {
      question_id: "CEL_CH2_MEDIUM_CS41_Q03",
      difficulty: "Medium",
      question: "The sitting fee payable to independent directors and women directors shall:",
      options: [
        "Always be exactly twice that of other directors",
        "Not be less than the sitting fee payable to other directors",
        "Not exceed 50% of that payable to executive directors",
        "Always be ₹1,00,000"
      ],
      answer: 1
    },

    {
      question_id: "CEL_CH2_MEDIUM_CS41_Q04",
      difficulty: "Medium",
      question: "The proposal to pay ₹1,20,000 per meeting to the Chairman is:",
      options: [
        "Valid because he is Chairman",
        "Valid if approved unanimously by the Board",
        "Invalid because the prescribed ceiling is ₹1,00,000 per meeting",
        "Valid if disclosed in the Board's Report"
      ],
      answer: 2
    },

    {
      question_id: "CEL_CH2_MEDIUM_CS41_Q05",
      difficulty: "Medium",
      question: "For computing the percentage limits of managerial remuneration under Section 197(1), sitting fees are:",
      options: [
        "Included within those percentage limits",
        "Exclusive of those percentage limits",
        "Treated as capital expenditure",
        "Prohibited for all directors receiving remuneration"
      ],
      answer: 1
    }

  ]
},


/* =========================================================
   CASE SCENARIO 42
   DIFFICULTY: MEDIUM
   TOPIC: PROFESSIONAL SERVICES BY DIRECTOR - SECTION 197(4)
========================================================= */

{
  case_id: "CEL_CH2_MEDIUM_CS42",
  difficulty: "Medium",
  case_chapter: [
    "Section 197(4)",
    "Professional Services",
    "Director Remuneration",
    "Nomination and Remuneration Committee"
  ],

  caseText: `
    <p>
      MediCare Hospitals Limited operates a chain of specialised hospitals.
      Dr. Aryan, a renowned cardiac surgeon, is also a director of the company.
      Apart from performing his duties as a director, Dr. Aryan regularly
      performs complicated cardiac surgeries for patients of the hospitals.
    </p>

    <p>
      The company pays him remuneration for his services as director. It now
      proposes to pay him a separate professional fee of ₹3,00,000 for each
      complicated cardiac surgery performed by him.
    </p>

    <p>
      The finance department argues that every payment made to a director must
      necessarily be included while computing his managerial remuneration.
      However, the Company Secretary points out that Section 197(4) contains
      an exception where services rendered in another capacity are of a
      professional nature and the director possesses the requisite professional
      qualification.
    </p>
  `,

  questions: [

    {
      question_id: "CEL_CH2_MEDIUM_CS42_Q01",
      difficulty: "Medium",
      question: "As a general rule, remuneration payable to a director includes remuneration for services rendered by him:",
      options: [
        "Only as director",
        "In any other capacity also",
        "Only as an employee",
        "Only as a consultant"
      ],
      answer: 1
    },

    {
      question_id: "CEL_CH2_MEDIUM_CS42_Q02",
      difficulty: "Medium",
      question: "Professional fees paid to Dr. Aryan may be excluded from managerial remuneration if:",
      options: [
        "The services are professional in nature and he possesses the requisite qualification",
        "He owns at least 10% shares",
        "The company has inadequate profits",
        "He is also the Managing Director"
      ],
      answer: 0
    },

    {
      question_id: "CEL_CH2_MEDIUM_CS42_Q03",
      difficulty: "Medium",
      question: "Where the company is covered under Section 178(1), who should form the opinion that the director possesses the requisite qualification for practice of the profession?",
      options: [
        "Statutory Auditor",
        "Nomination and Remuneration Committee",
        "Registrar of Companies",
        "Central Government"
      ],
      answer: 1
    },

    {
      question_id: "CEL_CH2_MEDIUM_CS42_Q04",
      difficulty: "Medium",
      question: "If the company is not covered under Section 178(1), the requisite opinion regarding professional qualification may be formed by:",
      options: [
        "The Board of Directors",
        "Any shareholder",
        "The CFO alone",
        "The Registrar"
      ],
      answer: 0
    },

    {
      question_id: "CEL_CH2_MEDIUM_CS42_Q05",
      difficulty: "Medium",
      question: "Assuming all statutory conditions are fulfilled, the ₹3,00,000 professional fee per surgery:",
      options: [
        "Must necessarily form part of managerial remuneration",
        "Need not be included in managerial remuneration",
        "Is prohibited because Dr. Aryan is a director",
        "Can be paid only after Central Government approval"
      ],
      answer: 1
    }

  ]
},


/* =========================================================
   CASE SCENARIO 43
   DIFFICULTY: MEDIUM
   TOPIC: D&O INSURANCE PREMIUM - SECTION 197(13)
========================================================= */

{
  case_id: "CEL_CH2_MEDIUM_CS43",
  difficulty: "Medium",
  case_chapter: [
    "Section 197(13)",
    "Insurance",
    "Managerial Personnel",
    "Remuneration"
  ],

  caseText: `
    <p>
      Secure Finance Limited has taken an insurance policy on behalf of its
      Managing Director, Chief Executive Officer, Chief Financial Officer and
      Company Secretary. The policy indemnifies them against liabilities arising
      from negligence, default, misfeasance, breach of duty or breach of trust
      in relation to the company.
    </p>

    <p>
      The company pays the entire insurance premium. At the time the policy is
      taken, the accounts department does not treat the premium as part of the
      remuneration of the concerned managerial personnel.
    </p>

    <p>
      Subsequently, proceedings are initiated against the CFO, and he is
      ultimately proved guilty of breach of duty in relation to the company.
      The Board wants to determine the treatment of the insurance premium under
      Section 197(13).
    </p>
  `,

  questions: [

    {
      question_id: "CEL_CH2_MEDIUM_CS43_Q01",
      difficulty: "Medium",
      question: "At the time the insurance is taken, the premium paid for indemnification against specified liabilities is generally:",
      options: [
        "Treated as remuneration immediately",
        "Not treated as part of remuneration",
        "Treated as dividend",
        "Treated as sitting fees"
      ],
      answer: 1
    },

    {
      question_id: "CEL_CH2_MEDIUM_CS43_Q02",
      difficulty: "Medium",
      question: "Section 197(13) specifically covers insurance taken on behalf of persons including:",
      options: [
        "MD, WTD, Manager, CEO, CFO or CS",
        "Only shareholders",
        "Only independent directors",
        "Only auditors"
      ],
      answer: 0
    },

    {
      question_id: "CEL_CH2_MEDIUM_CS43_Q03",
      difficulty: "Medium",
      question: "If the CFO is subsequently proved guilty, the premium paid on the insurance relating to him shall be:",
      options: [
        "Ignored permanently",
        "Treated as part of his remuneration",
        "Treated as dividend",
        "Recovered only from shareholders"
      ],
      answer: 1
    },

    {
      question_id: "CEL_CH2_MEDIUM_CS43_Q04",
      difficulty: "Medium",
      question: "If the insured managerial personnel is not proved guilty, the insurance premium:",
      options: [
        "Must always be treated as remuneration",
        "Shall not be treated as part of remuneration",
        "Must be treated as commission",
        "Must be refunded to the insurer"
      ],
      answer: 1
    },

    {
      question_id: "CEL_CH2_MEDIUM_CS43_Q05",
      difficulty: "Medium",
      question: "Which of the following liabilities is specifically contemplated under Section 197(13)?",
      options: [
        "Negligence or breach of duty",
        "Personal home loan liability",
        "Personal income-tax liability unrelated to the company",
        "Personal credit-card liability"
      ],
      answer: 0
    }

  ]
},


/* =========================================================
   CASE SCENARIO 44
   DIFFICULTY: MEDIUM
   TOPIC: RECOVERY OF MANAGERIAL REMUNERATION - SECTION 199
========================================================= */

{
  case_id: "CEL_CH2_MEDIUM_CS44",
  difficulty: "Medium",
  case_chapter: [
    "Section 199",
    "Restatement of Financial Statements",
    "Recovery of Remuneration",
    "Past Managerial Personnel"
  ],

  caseText: `
    <p>
      Alpha Retail Limited discovered a material non-compliance with the
      requirements of the Companies Act, 2013 relating to its financial
      statements for the financial year 2023-24. The company is consequently
      required to restate those financial statements.
    </p>

    <p>
      After restatement, it is found that the remuneration that should have been
      payable to the then Managing Director, Mr. Rohan, was ₹45 lakh. However,
      based on the original financial statements, he had actually received
      ₹58 lakh, including benefits covered by the relevant provisions.
    </p>

    <p>
      Mr. Rohan retired from the company before the restatement. He argues that
      since he is no longer associated with Alpha Retail Limited and no fraud
      has personally been established against him, the company cannot recover
      anything from him.
    </p>
  `,

  questions: [

    {
      question_id: "CEL_CH2_MEDIUM_CS44_Q01",
      difficulty: "Medium",
      question: "Section 199 may apply where financial statements are required to be restated due to:",
      options: [
        "Fraud only",
        "Fraud or non-compliance with requirements under the Companies Act, 2013 and rules thereunder",
        "Change of auditor only",
        "Change in registered office"
      ],
      answer: 1
    },

    {
      question_id: "CEL_CH2_MEDIUM_CS44_Q02",
      difficulty: "Medium",
      question: "The amount recoverable from Mr. Rohan is:",
      options: [
        "₹45 lakh",
        "₹58 lakh",
        "₹13 lakh",
        "Nil because he has retired"
      ],
      answer: 2
    },

    {
      question_id: "CEL_CH2_MEDIUM_CS44_Q03",
      difficulty: "Medium",
      question: "Does Mr. Rohan's retirement by itself prevent recovery under Section 199?",
      options: [
        "Yes, because Section 199 applies only to existing officers",
        "No, because recovery can be made from specified past or present managerial personnel",
        "Yes, unless shareholders unanimously approve recovery",
        "Yes, if retirement occurred before restatement"
      ],
      answer: 1
    },

    {
      question_id: "CEL_CH2_MEDIUM_CS44_Q04",
      difficulty: "Medium",
      question: "The excess remuneration recoverable under Section 199 is generally:",
      options: [
        "The entire remuneration originally received",
        "50% of remuneration received",
        "The difference between remuneration actually received and remuneration payable on the basis of restated financial statements",
        "An amount determined solely by the auditor"
      ],
      answer: 2
    },

    {
      question_id: "CEL_CH2_MEDIUM_CS44_Q05",
      difficulty: "Medium",
      question: "Recovery of excess remuneration under Section 199:",
      options: [
        "Automatically removes every other liability of the defaulting person",
        "Does not prejudice any other liability under the Companies Act or other applicable law",
        "Prevents prosecution under every other law",
        "Can be made only when the person admits fraud"
      ],
      answer: 1
    }

  ]
},


/* =========================================================
   CASE SCENARIO 45
   DIFFICULTY: MEDIUM
   TOPIC: FUNCTIONS OF COMPANY SECRETARY - SECTION 205
========================================================= */

{
  case_id: "CEL_CH2_MEDIUM_CS45",
  difficulty: "Medium",
  case_chapter: [
    "Section 205",
    "Functions of Company Secretary",
    "Secretarial Standards",
    "Corporate Governance"
  ],

  caseText: `
    <p>
      Horizon Industries Limited has appointed Ms. Nisha as its whole-time
      Company Secretary. The Managing Director tells her that her role is
      restricted to maintaining statutory registers and filing forms with the
      Registrar of Companies.
    </p>

    <p>
      Ms. Nisha explains that the Companies Act, 2013 assigns wider functions
      to a Company Secretary. These include reporting to the Board regarding
      compliance, ensuring compliance with applicable secretarial standards,
      providing guidance to directors regarding their duties and powers,
      facilitating meetings and maintaining minutes.
    </p>

    <p>
      She further states that she may assist and advise the Board on corporate
      governance matters and represent the company before regulators and other
      authorities in connection with discharge of duties under the Act.
    </p>
  `,

  questions: [

    {
      question_id: "CEL_CH2_MEDIUM_CS45_Q01",
      difficulty: "Medium",
      question: "A Company Secretary is required to report to the Board about compliance with:",
      options: [
        "Only the Income-tax Act",
        "The Companies Act, rules made thereunder and other laws applicable to the company",
        "Only Secretarial Standard-1",
        "Only directions issued by shareholders"
      ],
      answer: 1
    },

    {
      question_id: "CEL_CH2_MEDIUM_CS45_Q02",
      difficulty: "Medium",
      question: "Which of the following is a function of the Company Secretary?",
      options: [
        "Ensuring compliance with applicable secretarial standards",
        "Determining the company's income tax independently",
        "Replacing the Board of Directors",
        "Acting as statutory auditor"
      ],
      answer: 0
    },

    {
      question_id: "CEL_CH2_MEDIUM_CS45_Q03",
      difficulty: "Medium",
      question: "The Company Secretary may provide directors with guidance regarding:",
      options: [
        "Only their remuneration",
        "Their duties, responsibilities and powers",
        "Their personal investments",
        "Their personal tax returns"
      ],
      answer: 1
    },

    {
      question_id: "CEL_CH2_MEDIUM_CS45_Q04",
      difficulty: "Medium",
      question: "Which Secretarial Standards are specifically stated in the chapter as approved by the Central Government under Section 118(10)?",
      options: [
        "SS-1 and SS-2",
        "SS-2 and SS-3",
        "SS-3 and SS-4",
        "Only SS-5"
      ],
      answer: 0
    },

    {
      question_id: "CEL_CH2_MEDIUM_CS45_Q05",
      difficulty: "Medium",
      question: "Assignment of functions to the Company Secretary under Section 205:",
      options: [
        "Completely absolves the Board and MD from their statutory duties",
        "Reduces the Board's responsibility by 50%",
        "Does not affect the duties and functions of the Board, Chairperson, MD or WTD under applicable law",
        "Transfers all statutory responsibility to the Company Secretary"
      ],
      answer: 2
    }

  ]
},
/* =========================================================
   CASE SCENARIO 41
   DIFFICULTY: MEDIUM
   TOPIC: MANAGING DIRECTOR VS MANAGER - SECTIONS 2(53), 2(54), 196
========================================================= */

{
  case_id: "CEL_CH2_MEDIUM_CS41",
  difficulty: "Medium",
  case_chapter: [
    "Section 2(53)",
    "Section 2(54)",
    "Section 196(1)",
    "Managing Director",
    "Manager"
  ],

  caseText: `
    <p>
      Royal Consumer Products Limited has appointed Mr. Karan as its Managing
      Director and entrusted him with substantial powers of management of the
      affairs of the company. He continues to function under the overall
      supervision and control of the Board of Directors.
    </p>

    <p>
      The company now proposes to appoint Mr. Raghav as "Manager – Operations".
      Under the proposed arrangement, Mr. Raghav will be responsible only for
      the company's manufacturing and logistics division. He will have no
      authority over the finance, marketing, human resources or other major
      functions of the company.
    </p>

    <p>
      One director objects to the proposal on the ground that Section 196(1)
      prohibits a company from appointing a Managing Director and a Manager at
      the same time. The Company Secretary states that it is first necessary to
      determine whether Mr. Raghav is a "manager" within the statutory meaning
      of Section 2(53).
    </p>
  `,

  questions: [

    {
      question_id: "CEL_CH2_MEDIUM_CS41_Q01",
      difficulty: "Medium",
      question: "A 'manager' under Section 2(53) must have management of:",
      options: [
        "Any one department of the company",
        "The whole or substantially the whole of the affairs of the company",
        "Only the finance department",
        "Only the day-to-day administrative functions"
      ],
      answer: 1
    },

    {
      question_id: "CEL_CH2_MEDIUM_CS41_Q02",
      difficulty: "Medium",
      question: "Mr. Raghav, who is proposed to manage only manufacturing and logistics, would:",
      options: [
        "Necessarily be a statutory manager under Section 2(53)",
        "Not be a manager under Section 2(53) merely because his designation contains the word 'Manager'",
        "Automatically become a Managing Director",
        "Become a statutory manager only because an MD already exists"
      ],
      answer: 1
    },

    {
      question_id: "CEL_CH2_MEDIUM_CS41_Q03",
      difficulty: "Medium",
      question: "Can Royal Consumer Products Limited simultaneously have Mr. Karan as MD and Mr. Raghav as departmental Manager – Operations in the circumstances given?",
      options: [
        "No, because the word 'Manager' can never be used when an MD exists",
        "Yes, because Mr. Raghav does not manage the whole or substantially the whole of the company's affairs",
        "No, unless Central Government approval is obtained",
        "Yes, but only if Mr. Raghav is also made a director"
      ],
      answer: 1
    },

    {
      question_id: "CEL_CH2_MEDIUM_CS41_Q04",
      difficulty: "Medium",
      question: "If instead Mr. Raghav were entrusted with management of substantially the whole of the company's affairs, while Mr. Karan continued as MD, the arrangement would:",
      options: [
        "Be permitted under Section 196(1)",
        "Contravene Section 196(1)",
        "Be permitted if both are directors",
        "Be permitted if the company is public"
      ],
      answer: 1
    },

    {
      question_id: "CEL_CH2_MEDIUM_CS41_Q05",
      difficulty: "Medium",
      question: "Which combination is permissible under Section 196(1)?",
      options: [
        "Managing Director and statutory Manager",
        "Managing Director and Whole-time Director",
        "Two statutory Managers but no MD",
        "Managing Director and statutory Manager with Board approval"
      ],
      answer: 1
    }

  ]
},


/* =========================================================
   CASE SCENARIO 42
   DIFFICULTY: MEDIUM
   TOPIC: SITTING FEES - SECTION 197(5)
========================================================= */

{
  case_id: "CEL_CH2_MEDIUM_CS42",
  difficulty: "Medium",
  case_chapter: [
    "Section 197(5)",
    "Rule 4",
    "Sitting Fees",
    "Independent Directors",
    "Women Directors"
  ],

  caseText: `
    <p>
      Stellar Motors Limited proposes to revise the sitting fees payable to its
      directors for attending meetings of the Board and its committees. The Board
      proposes ₹90,000 per meeting for ordinary non-executive directors and
      ₹75,000 per meeting for independent directors.
    </p>

    <p>
      The company also has Ms. Kavya as its Woman Director. The Board proposes
      to pay her ₹70,000 per meeting on the ground that she recently joined the
      company and has less experience than the other directors.
    </p>

    <p>
      The Company Secretary advises the Board to examine Section 197(5) read with
      Rule 4 of the Companies (Appointment and Remuneration of Managerial
      Personnel) Rules, 2014 before implementing the proposed fee structure.
    </p>
  `,

  questions: [

    {
      question_id: "CEL_CH2_MEDIUM_CS42_Q01",
      difficulty: "Medium",
      question: "The maximum sitting fee that may be paid to a director for each meeting of the Board or committee thereof is:",
      options: [
        "₹50,000",
        "₹75,000",
        "₹1,00,000",
        "₹2,00,000"
      ],
      answer: 2
    },

    {
      question_id: "CEL_CH2_MEDIUM_CS42_Q02",
      difficulty: "Medium",
      question: "The proposed sitting fee of ₹90,000 per meeting for ordinary non-executive directors is:",
      options: [
        "Within the prescribed ceiling",
        "Invalid because sitting fees cannot exceed ₹50,000",
        "Invalid unless Central Government approval is obtained",
        "Valid only for private companies"
      ],
      answer: 0
    },

    {
      question_id: "CEL_CH2_MEDIUM_CS42_Q03",
      difficulty: "Medium",
      question: "Can independent directors be paid ₹75,000 when other directors are paid ₹90,000 per meeting?",
      options: [
        "Yes, because independent directors need not receive equal sitting fees",
        "No, because sitting fees payable to independent directors cannot be less than those payable to other directors",
        "Yes, if approved by the Managing Director",
        "Yes, if the difference does not exceed ₹25,000"
      ],
      answer: 1
    },

    {
      question_id: "CEL_CH2_MEDIUM_CS42_Q04",
      difficulty: "Medium",
      question: "Can Ms. Kavya, the Woman Director, be paid ₹70,000 when other directors receive ₹90,000 per meeting?",
      options: [
        "Yes, because experience can determine sitting fees",
        "No, because sitting fees payable to Women Directors shall not be less than those payable to other directors",
        "Yes, if she consents",
        "Yes, because the restriction applies only to independent directors"
      ],
      answer: 1
    },

    {
      question_id: "CEL_CH2_MEDIUM_CS42_Q05",
      difficulty: "Medium",
      question: "For the purpose of the percentage ceilings under Section 197(1), sitting fees payable under Section 197(5) are:",
      options: [
        "Included in the prescribed percentage limits",
        "Exclusive of the prescribed percentage limits",
        "Treated as dividends",
        "Treated as loans to directors"
      ],
      answer: 1
    }

  ]
},


/* =========================================================
   CASE SCENARIO 43
   DIFFICULTY: MEDIUM
   TOPIC: PROFESSIONAL REMUNERATION TO DIRECTOR - SECTION 197(4)
========================================================= */

{
  case_id: "CEL_CH2_MEDIUM_CS43",
  difficulty: "Medium",
  case_chapter: [
    "Section 197(4)",
    "Professional Services",
    "Additional Remuneration",
    "Nomination and Remuneration Committee"
  ],

  caseText: `
    <p>
      Medistar Hospitals Limited operates a chain of multi-speciality hospitals.
      Dr. Aryan, a renowned cardiac surgeon, has recently been appointed as a
      non-executive director of the company.
    </p>

    <p>
      Apart from attending Board meetings, Dr. Aryan continues to perform complex
      cardiac surgeries at hospitals operated by the company. The company proposes
      to pay him professional fees of ₹3 lakh for each surgery in addition to the
      remuneration payable to him as a director.
    </p>

    <p>
      Medistar Hospitals Limited is required to constitute a Nomination and
      Remuneration Committee under Section 178(1). The committee is satisfied
      that Dr. Aryan possesses the requisite professional qualifications for
      practising as a cardiac surgeon.
    </p>
  `,

  questions: [

    {
      question_id: "CEL_CH2_MEDIUM_CS43_Q01",
      difficulty: "Medium",
      question: "As a general rule, remuneration payable to a director for services rendered in another capacity is:",
      options: [
        "Always ignored",
        "Included in the remuneration payable to him as director",
        "Always treated as sitting fees",
        "Always prohibited"
      ],
      answer: 1
    },

    {
      question_id: "CEL_CH2_MEDIUM_CS43_Q02",
      difficulty: "Medium",
      question: "Professional fees paid to Dr. Aryan may be excluded from managerial remuneration if:",
      options: [
        "The services are professional in nature and he possesses the requisite qualification",
        "He is a shareholder of the company",
        "He attends every Board meeting",
        "The fees are below ₹5 lakh"
      ],
      answer: 0
    },

    {
      question_id: "CEL_CH2_MEDIUM_CS43_Q03",
      difficulty: "Medium",
      question: "Since Medistar Hospitals Limited is covered under Section 178(1), who should form the opinion regarding Dr. Aryan's requisite professional qualification?",
      options: [
        "Statutory Auditor",
        "Managing Director",
        "Nomination and Remuneration Committee",
        "Registrar of Companies"
      ],
      answer: 2
    },

    {
      question_id: "CEL_CH2_MEDIUM_CS43_Q04",
      difficulty: "Medium",
      question: "If the professional-services exception is satisfied, the ₹3 lakh fee per surgery:",
      options: [
        "Must necessarily be included in the managerial remuneration ceiling",
        "Need not be included in managerial remuneration",
        "Cannot legally be paid",
        "Must be treated as sitting fees"
      ],
      answer: 1
    },

    {
      question_id: "CEL_CH2_MEDIUM_CS43_Q05",
      difficulty: "Medium",
      question: "If the company were not covered under Section 178(1), the opinion regarding requisite professional qualification would be formed by:",
      options: [
        "Board of Directors",
        "Registrar of Companies",
        "Central Government",
        "Debenture holders"
      ],
      answer: 0
    }

  ]
},


/* =========================================================
   CASE SCENARIO 44
   DIFFICULTY: MEDIUM
   TOPIC: D&O INSURANCE PREMIUM - SECTION 197(13)
========================================================= */

{
  case_id: "CEL_CH2_MEDIUM_CS44",
  difficulty: "Medium",
  case_chapter: [
    "Section 197(13)",
    "Insurance Premium",
    "Indemnification",
    "Managerial Remuneration"
  ],

  caseText: `
    <p>
      Quantum Energy Limited takes an insurance policy on behalf of its Managing
      Director, Whole-time Director, Chief Financial Officer and Company Secretary.
      The policy indemnifies them against liabilities arising from negligence,
      default, misfeasance, breach of duty or breach of trust in relation to the
      company.
    </p>

    <p>
      The company pays the entire insurance premium. At the time the policy is
      taken, none of the covered managerial personnel has been proved guilty of
      any misconduct.
    </p>

    <p>
      Two years later, proceedings against the Chief Financial Officer conclude,
      and he is proved guilty of breach of duty. The finance department seeks
      advice on the treatment of the premium paid by the company.
    </p>
  `,

  questions: [

    {
      question_id: "CEL_CH2_MEDIUM_CS44_Q01",
      difficulty: "Medium",
      question: "When insurance is initially taken for indemnifying managerial personnel and they have not been proved guilty, the premium paid is:",
      options: [
        "Treated as remuneration in every case",
        "Not treated as part of remuneration",
        "Treated as sitting fees",
        "Treated as dividend"
      ],
      answer: 1
    },

    {
      question_id: "CEL_CH2_MEDIUM_CS44_Q02",
      difficulty: "Medium",
      question: "Section 197(13) specifically covers insurance taken on behalf of persons including:",
      options: [
        "Only shareholders",
        "MD, WTD, Manager, CEO, CFO or CS",
        "Only independent directors",
        "Only auditors"
      ],
      answer: 1
    },

    {
      question_id: "CEL_CH2_MEDIUM_CS44_Q03",
      difficulty: "Medium",
      question: "After the CFO is proved guilty of breach of duty, the premium paid on such insurance in relation to him shall be:",
      options: [
        "Ignored permanently",
        "Treated as part of his remuneration",
        "Treated as a dividend",
        "Recovered from shareholders"
      ],
      answer: 1
    },

    {
      question_id: "CEL_CH2_MEDIUM_CS44_Q04",
      difficulty: "Medium",
      question: "Which of the following liabilities is contemplated by Section 197(13)?",
      options: [
        "Negligence",
        "Breach of trust",
        "Misfeasance",
        "All of the above"
      ],
      answer: 3
    },

    {
      question_id: "CEL_CH2_MEDIUM_CS44_Q05",
      difficulty: "Medium",
      question: "The decisive event which changes the treatment of the insurance premium into remuneration is:",
      options: [
        "Taking the insurance policy",
        "Payment of the premium",
        "The personnel being proved guilty",
        "Appointment of the personnel"
      ],
      answer: 2
    }

  ]
},


/* =========================================================
   CASE SCENARIO 45
   DIFFICULTY: MEDIUM
   TOPIC: RECOVERY OF REMUNERATION - SECTION 199
========================================================= */

{
  case_id: "CEL_CH2_MEDIUM_CS45",
  difficulty: "Medium",
  case_chapter: [
    "Section 199",
    "Restatement of Financial Statements",
    "Recovery of Managerial Remuneration",
    "Past and Present Managerial Personnel"
  ],

  caseText: `
    <p>
      Galaxy Retail Limited discovers material non-compliance with requirements
      of the Companies Act, 2013 in its financial statements for the financial
      year 2024-25. Consequently, the company is required to restate those
      financial statements.
    </p>

    <p>
      Mr. Vishal was the Managing Director during 2024-25 but retired from the
      company in 2026. Based on the original financial statements, he had received
      remuneration of ₹72 lakh, including benefits covered by the relevant
      provisions.
    </p>

    <p>
      After restatement, it is determined that the remuneration which would
      actually have been payable to him was only ₹60 lakh. Mr. Vishal argues that
      the company cannot recover anything because he has already retired and the
      restatement arose from non-compliance rather than fraud.
    </p>
  `,

  questions: [

    {
      question_id: "CEL_CH2_MEDIUM_CS45_Q01",
      difficulty: "Medium",
      question: "Section 199 may apply where financial statements are required to be restated because of:",
      options: [
        "Fraud only",
        "Non-compliance only",
        "Fraud or non-compliance with requirements under the Act and Rules",
        "A change in directors only"
      ],
      answer: 2
    },

    {
      question_id: "CEL_CH2_MEDIUM_CS45_Q02",
      difficulty: "Medium",
      question: "Can recovery under Section 199 be made from a past Managing Director?",
      options: [
        "No, only present managerial personnel are covered",
        "Yes, past as well as present specified managerial personnel may be covered",
        "Only if he remains a shareholder",
        "Only with his consent"
      ],
      answer: 1
    },

    {
      question_id: "CEL_CH2_MEDIUM_CS45_Q03",
      difficulty: "Medium",
      question: "Based on the figures given, the excess remuneration recoverable from Mr. Vishal is:",
      options: [
        "₹6 lakh",
        "₹10 lakh",
        "₹12 lakh",
        "₹72 lakh"
      ],
      answer: 2
    },

    {
      question_id: "CEL_CH2_MEDIUM_CS45_Q04",
      difficulty: "Medium",
      question: "The amount recoverable under Section 199 is essentially:",
      options: [
        "The entire remuneration originally paid",
        "50% of remuneration originally paid",
        "The difference between remuneration actually received and remuneration payable based on the restated financial statements",
        "An amount determined solely by the Board"
      ],
      answer: 2
    },

    {
      question_id: "CEL_CH2_MEDIUM_CS45_Q05",
      difficulty: "Medium",
      question: "Recovery of excess remuneration under Section 199:",
      options: [
        "Automatically eliminates every other liability under law",
        "Does not prejudice any other liability under the Companies Act, 2013 or any other law",
        "Prevents criminal proceedings in every case",
        "Makes the restated financial statements unnecessary"
      ],
      answer: 1
    }

  ]
},

/* =========================================================
   CASE SCENARIO 46
   DIFFICULTY: MEDIUM
   TOPIC: SECTION 203 - KMP APPOINTMENT
========================================================= */

{
  case_id: "CEL_CH2_MEDIUM_CS46",
  difficulty: "Medium",
  case_chapter: [
    "Section 203",
    "Key Managerial Personnel",
    "Rule 8",
    "Whole-time KMP"
  ],

  caseText: `
    <p>
      Prime Infrastructure Limited is a listed public company. The company has
      a Managing Director but has not appointed a whole-time Company Secretary
      or Chief Financial Officer. The Board argues that since the company already
      has a Managing Director, appointment of other whole-time KMPs is optional.
    </p>

    <p>
      The Company Secretary in practice advising the company points out that
      every company belonging to the prescribed class is required to have the
      prescribed whole-time Key Managerial Personnel.
    </p>

    <p>
      The Board also proposes to appoint a whole-time CFO through an informal
      understanding with the Managing Director instead of passing a formal
      Board resolution.
    </p>
  `,

  questions: [

    {
      question_id: "CEL_CH2_MEDIUM_CS46_Q01",
      difficulty: "Medium",
      question: "Which of the following companies is specifically required to have whole-time KMP under Rule 8?",
      options: [
        "Every private company irrespective of capital",
        "Every listed company",
        "Every partnership firm",
        "Every small company"
      ],
      answer: 1
    },

    {
      question_id: "CEL_CH2_MEDIUM_CS46_Q02",
      difficulty: "Medium",
      question: "A prescribed company is required to have which combination of whole-time KMP?",
      options: [
        "MD/CEO/Manager or, in their absence, WTD, along with CS and CFO",
        "Only MD",
        "Only CFO",
        "Only Company Secretary"
      ],
      answer: 0
    },

    {
      question_id: "CEL_CH2_MEDIUM_CS46_Q03",
      difficulty: "Medium",
      question: "The appointment of whole-time KMP should be made by:",
      options: [
        "An informal understanding between directors",
        "A resolution of the Board",
        "The statutory auditor",
        "The Registrar of Companies"
      ],
      answer: 1
    },

    {
      question_id: "CEL_CH2_MEDIUM_CS46_Q04",
      difficulty: "Medium",
      question: "The Board resolution appointing a whole-time KMP should contain:",
      options: [
        "Only the name of the appointee",
        "Terms and conditions of appointment including remuneration",
        "Only the employee's qualification",
        "Only the tenure"
      ],
      answer: 1
    },

    {
      question_id: "CEL_CH2_MEDIUM_CS46_Q05",
      difficulty: "Medium",
      question: "The Board's argument that appointment of CFO and CS is optional merely because an MD exists is:",
      options: [
        "Correct",
        "Incorrect because prescribed companies must comply with the KMP requirements",
        "Correct only for listed companies",
        "Correct only where profits are inadequate"
      ],
      answer: 1
    }
  ]
},


/* =========================================================
   CASE SCENARIO 47
   DIFFICULTY: MEDIUM
   TOPIC: CHAIRPERSON + MD/CEO
========================================================= */

{
  case_id: "CEL_CH2_MEDIUM_CS47",
  difficulty: "Medium",
  case_chapter: [
    "Section 203(1)",
    "Chairperson",
    "Managing Director",
    "CEO",
    "Multiple Businesses"
  ],

  caseText: `
    <p>
      Diversified Industries Limited is a public company engaged in several
      independent businesses. Its Articles provide that the Chairperson may also
      hold the office of Managing Director.
    </p>

    <p>
      The Board proposes to appoint Mr. Karan as Chairperson as well as Managing
      Director. One shareholder objects to the proposal on the ground that an
      individual cannot simultaneously be Chairperson and Managing Director.
    </p>

    <p>
      The Company Secretary explains that Section 203 contains a restriction on
      such simultaneous appointment, but also provides exceptions. The Articles
      may permit such combination. Further, certain prescribed companies engaged
      in multiple businesses and having CEOs for each business are covered by a
      specific exemption.
    </p>
  `,

  questions: [

    {
      question_id: "CEL_CH2_MEDIUM_CS47_Q01",
      difficulty: "Medium",
      question: "As a general rule, an individual cannot be appointed as Chairperson and:",
      options: [
        "Director",
        "Managing Director or CEO",
        "Company Secretary",
        "CFO"
      ],
      answer: 1
    },

    {
      question_id: "CEL_CH2_MEDIUM_CS47_Q02",
      difficulty: "Medium",
      question: "One exception to the prohibition exists where:",
      options: [
        "The Articles of the company provide otherwise",
        "The statutory auditor agrees",
        "The CFO approves",
        "The Registrar permits it orally"
      ],
      answer: 0
    },

    {
      question_id: "CEL_CH2_MEDIUM_CS47_Q03",
      difficulty: "Medium",
      question: "The special class of companies covered by the second proviso relates to companies which:",
      options: [
        "Have only one business",
        "Are engaged in multiple businesses and have appointed one or more CEOs for each business",
        "Have no CEO",
        "Have only private shareholders"
      ],
      answer: 1
    },

    {
      question_id: "CEL_CH2_MEDIUM_CS47_Q04",
      difficulty: "Medium",
      question: "For the notified class referred to in the chapter, the paid-up share capital threshold is:",
      options: [
        "₹50 crore or more",
        "₹75 crore or more",
        "₹100 crore or more",
        "₹500 crore or more"
      ],
      answer: 2
    },

    {
      question_id: "CEL_CH2_MEDIUM_CS47_Q05",
      difficulty: "Medium",
      question: "For the same notified class, the annual turnover threshold is:",
      options: [
        "₹100 crore or more",
        "₹500 crore or more",
        "₹1,000 crore or more",
        "₹5,000 crore or more"
      ],
      answer: 2
    }
  ]
},


/* =========================================================
   CASE SCENARIO 48
   DIFFICULTY: MEDIUM
   TOPIC: MD IN MORE THAN ONE COMPANY
========================================================= */

{
  case_id: "CEL_CH2_MEDIUM_CS48",
  difficulty: "Medium",
  case_chapter: [
    "Section 203(3)",
    "MD/Manager in More Than One Company",
    "Board Resolution",
    "Consent of Directors"
  ],

  caseText: `
    <p>
      Stellar Holdings Limited proposes to appoint Mr. Vikram as its Managing
      Director. Mr. Vikram is already the Managing Director of another company.
      He is therefore potentially holding the position of MD in two companies.
    </p>

    <p>
      The Board of Stellar Holdings Limited gives a specific notice of the Board
      meeting to all directors in India. At the meeting, eight directors are
      present. Six directors vote in favour of Mr. Vikram's appointment while two
      directors abstain.
    </p>

    <p>
      The Company Secretary advises that merely obtaining a majority of votes is
      insufficient in this particular situation because the law requires the
      resolution to be passed with the consent of all directors present at the
      meeting.
    </p>
  `,

  questions: [

    {
      question_id: "CEL_CH2_MEDIUM_CS48_Q01",
      difficulty: "Medium",
      question: "A person may, subject to the prescribed conditions, be MD/Manager in:",
      options: [
        "Unlimited companies simultaneously",
        "One company and not more than one other company",
        "Only one company in all circumstances",
        "Three unrelated companies automatically"
      ],
      answer: 1
    },

    {
      question_id: "CEL_CH2_MEDIUM_CS48_Q02",
      difficulty: "Medium",
      question: "For appointment of Mr. Vikram in the second company, the resolution should be passed with:",
      options: [
        "Simple majority of directors present",
        "Consent of all directors present at the meeting",
        "Consent of shareholders only",
        "Consent of the statutory auditor"
      ],
      answer: 1
    },

    {
      question_id: "CEL_CH2_MEDIUM_CS48_Q03",
      difficulty: "Medium",
      question: "In the given case, eight directors are present and only six consent. The appointment is:",
      options: [
        "Valid because six is a majority",
        "Valid because two directors abstained",
        "Not valid because consent of all directors present is required",
        "Valid after AGM approval automatically"
      ],
      answer: 2
    },

    {
      question_id: "CEL_CH2_MEDIUM_CS48_Q04",
      difficulty: "Medium",
      question: "Specific notice of the Board meeting and proposed resolution should be given to:",
      options: [
        "Only the Managing Director",
        "All directors then in India",
        "Only independent directors",
        "Only shareholders"
      ],
      answer: 1
    },

    {
      question_id: "CEL_CH2_MEDIUM_CS48_Q05",
      difficulty: "Medium",
      question: "The special requirement in this situation primarily concerns:",
      options: [
        "Payment of sitting fees",
        "Appointment of a person as MD/Manager in another company",
        "Secretarial audit",
        "Calculation of effective capital"
      ],
      answer: 1
    }
  ]
},


/* =========================================================
   CASE SCENARIO 49
   DIFFICULTY: MEDIUM
   TOPIC: SECTION 196(4) - APPROVAL & FILING
========================================================= */

{
  case_id: "CEL_CH2_MEDIUM_CS49",
  difficulty: "Medium",
  case_chapter: [
    "Section 196(4)",
    "Appointment Procedure",
    "MR-1",
    "Central Government Approval",
    "Registrar Filing"
  ],

  caseText: `
    <p>
      Eastern Motors Limited appoints Mr. Sameer as its Whole-time Director.
      The Board approves the appointment and its terms and conditions at a Board
      meeting. The shareholders subsequently approve the appointment at the next
      general meeting.
    </p>

    <p>
      The terms of appointment are at variance with the conditions specified in
      Part I of Schedule V. The Company Secretary therefore informs the Board
      that an application for approval of the Central Government is required.
    </p>

    <p>
      The Board also wants to ensure that all statutory filings are completed
      within the prescribed time. The Company Secretary prepares the relevant
      form and plans to file the return with the Registrar.
    </p>
  `,

  questions: [

    {
      question_id: "CEL_CH2_MEDIUM_CS49_Q01",
      difficulty: "Medium",
      question: "The appointment and terms of a Managing Director/WTD/Manager must first be approved by:",
      options: [
        "The Board at a meeting",
        "The statutory auditor",
        "The Registrar",
        "Only the Central Government"
      ],
      answer: 0
    },

    {
      question_id: "CEL_CH2_MEDIUM_CS49_Q02",
      difficulty: "Medium",
      question: "The appointment and terms are also required to be approved by shareholders:",
      options: [
        "At the next general meeting",
        "Only after five years",
        "Only through postal ballot in every case",
        "Never"
      ],
      answer: 0
    },

    {
      question_id: "CEL_CH2_MEDIUM_CS49_Q03",
      difficulty: "Medium",
      question: "Where the appointment is at variance with Part I of Schedule V, approval is required from:",
      options: [
        "Central Government",
        "Registrar of Companies",
        "Stock Exchange only",
        "Statutory Auditor"
      ],
      answer: 0
    },

    {
      question_id: "CEL_CH2_MEDIUM_CS49_Q04",
      difficulty: "Medium",
      question: "The application to the Central Government for such approval is made in:",
      options: [
        "Form AOC-4",
        "Form MGT-7",
        "Form MR-2",
        "Form DIR-3"
      ],
      answer: 2
    },

    {
      question_id: "CEL_CH2_MEDIUM_CS49_Q05",
      difficulty: "Medium",
      question: "The prescribed return relating to appointment is required to be filed with the Registrar within:",
      options: [
        "30 days",
        "60 days",
        "90 days",
        "180 days"
      ],
      answer: 1
    }
  ]
},


/* =========================================================
   CASE SCENARIO 50
   DIFFICULTY: MEDIUM
   TOPIC: SECRETARIAL AUDIT - APPLICABILITY & REPORT
========================================================= */

{
  case_id: "CEL_CH2_MEDIUM_CS50",
  difficulty: "Medium",
  case_chapter: [
    "Section 204",
    "Secretarial Audit",
    "Rule 9",
    "MR-3",
    "Board's Report"
  ],

  caseText: `
    <p>
      National Chemicals Limited is a public company. Based on its latest
      audited financial statements, its paid-up share capital is ₹55 crore,
      turnover is ₹180 crore and outstanding borrowings from banks and public
      financial institutions are ₹80 crore.
    </p>

    <p>
      The management initially believes that secretarial audit is not necessary
      because the turnover is below ₹250 crore and outstanding borrowings are
      below ₹100 crore.
    </p>

    <p>
      The Company Secretary points out that the company crosses the prescribed
      paid-up share capital threshold of ₹50 crore. Accordingly, secretarial
      audit is applicable.
    </p>

    <p>
      The company appoints a Company Secretary in Practice to conduct the
      secretarial audit. The auditor makes certain observations in the report.
      The Board is required to consider how those observations should be dealt
      with in its Board's Report.
    </p>
  `,

  questions: [

    {
      question_id: "CEL_CH2_MEDIUM_CS50_Q01",
      difficulty: "Medium",
      question: "Is secretarial audit applicable to National Chemicals Limited?",
      options: [
        "No, because turnover is below ₹250 crore",
        "No, because borrowings are below ₹100 crore",
        "Yes, because paid-up share capital is ₹50 crore or more",
        "Only if shareholders pass a special resolution"
      ],
      answer: 2
    },

    {
      question_id: "CEL_CH2_MEDIUM_CS50_Q02",
      difficulty: "Medium",
      question: "Who is authorised to conduct/give the Secretarial Audit Report?",
      options: [
        "Statutory auditor",
        "Company Secretary in Practice",
        "CFO",
        "Internal auditor"
      ],
      answer: 1
    },

    {
      question_id: "CEL_CH2_MEDIUM_CS50_Q03",
      difficulty: "Medium",
      question: "The Secretarial Audit Report is required to be given in:",
      options: [
        "Form MR-1",
        "Form MR-2",
        "Form MR-3",
        "Form AOC-4"
      ],
      answer: 2
    },

    {
      question_id: "CEL_CH2_MEDIUM_CS50_Q04",
      difficulty: "Medium",
      question: "The company is required to annex the Secretarial Audit Report with:",
      options: [
        "Notice of AGM",
        "Board's Report",
        "Auditor's Report only",
        "Annual Return only"
      ],
      answer: 1
    },

    {
      question_id: "CEL_CH2_MEDIUM_CS50_Q05",
      difficulty: "Medium",
      question: "If the Company Secretary in Practice makes a qualification or observation in the Secretarial Audit Report, the Board should:",
      options: [
        "Ignore it",
        "Explain it in full in the Board's Report",
        "Remove the Company Secretary",
        "Seek approval from shareholders before mentioning it"
      ],
      answer: 1
    }
  ]
},

// ============================================================
// CASE SCENARIO 51
// DIFFICULTY: HARD
// CHAPTER 2 - APPOINTMENT AND REMUNERATION OF MANAGERIAL PERSONNEL
// ============================================================

{
    case_id: "CEL_CH2_CS51",
    difficulty: "Hard",
    case_chapter: [
        "Appointment of Managing Director",
        "Whole-time Director",
        "Manager",
        "Section 196"
    ],

    caseText: `
        <p>
            <strong>Pragati Engineering Limited</strong> is a public company engaged in
            the manufacture of industrial machinery. The company presently has a
            Managing Director, Mr. Arjun Mehta, whose five-year tenure is due to expire
            on 30 June 2027.
        </p>

        <p>
            The Board is considering the future managerial structure of the company.
            One proposal is to re-appoint Mr. Arjun Mehta for another five-year term.
            The Board proposes to approve his re-appointment in its meeting scheduled
            for 15 August 2026 and place the matter before the shareholders at the next
            general meeting.
        </p>

        <p>
            Another proposal is to appoint Mr. Bharat Rao as Manager for a period of
            five years from 1 July 2027. Some directors believe that since Mr. Arjun
            Mehta's tenure as Managing Director would have expired before Mr. Bharat
            Rao's appointment takes effect, both appointments can coexist during the
            transition period.
        </p>

        <p>
            During its discussion, the Board also identifies Ms. Charu Sharma, aged
            72 years, as a possible candidate for Managing Director. The Board is
            informed that a person who has attained the age of 70 years may be
            appointed if the required special resolution is passed by the company in
            general meeting and the explanatory statement contains the justification
            for such appointment.
        </p>

        <p>
            The company also considers appointing Mr. Dev as Manager of its Finance
            Department. Mr. Dev would be responsible only for the finance department
            and would work under the overall supervision of the Managing Director and
            the Board. Some directors argue that appointing Mr. Dev as Manager would
            violate the prohibition against appointing a Managing Director and Manager
            simultaneously.
        </p>

        <p>
            The Board seeks advice on the correct application of the provisions relating
            to appointment and re-appointment of managerial personnel.
        </p>
    `,

    questions: [

        {
            question_id: "CEL_CH2_CS51_Q1",
            difficulty: "Hard",
            question: `
                Mr. Arjun Mehta's existing tenure as Managing Director expires on
                30 June 2027. The Board proposes to re-appoint him on 15 August
                2026. Is the proposed re-appointment permissible under Section 196?
            `,
            options: [
                "Yes, because re-appointment may be made at any time before expiry of the existing term.",
                "Yes, because re-appointment can be made more than one year before expiry if approved by the Board.",
                "No, because re-appointment cannot be made earlier than one year before expiry of the existing term.",
                "No, because re-appointment is possible only after expiry of the existing term."
            ],
            answer: 2,
            reason: `
                Section 196(2) provides that no re-appointment shall be made earlier
                than one year before the expiry of the existing term. Since the existing
                term expires on 30 June 2027, re-appointment cannot be made before
                1 July 2026. Therefore, the proposed re-appointment on 15 August 2026
                is permissible.
            `
        },

        {
            question_id: "CEL_CH2_CS51_Q2",
            difficulty: "Hard",
            question: `
                The Board proposes to appoint Mr. Bharat Rao as Manager for five years
                commencing from 1 July 2027. Assuming Mr. Arjun Mehta continues as
                Managing Director up to 30 June 2027 and Mr. Bharat's appointment
                starts only thereafter, which statement is correct?
            `,
            options: [
                "The appointment is prohibited because a company can never appoint a Manager after having appointed an MD.",
                "The appointment is permissible provided Mr. Arjun's tenure as MD has actually ended before Mr. Bharat's appointment as Manager begins.",
                "The appointment is prohibited because an MD and Manager can never exist in the same company under any circumstances.",
                "The appointment is automatically valid even if Mr. Arjun continues as MD."
            ],
            answer: 1,
            reason: `
                Section 196(1) prohibits a company from appointing or employing a
                Managing Director and a Manager at the same time. If Mr. Arjun ceases
                to be MD before Mr. Bharat's appointment as Manager takes effect,
                the simultaneous holding of the two offices does not arise.
            `
        },

        {
            question_id: "CEL_CH2_CS51_Q3",
            difficulty: "Hard",
            question: `
                Ms. Charu Sharma is aged 72 years. Which of the following would
                ordinarily permit her appointment as Managing Director?
            `,
            options: [
                "Approval by the Board alone.",
                "Recommendation by an existing Whole-time Director.",
                "Special resolution passed by the company in general meeting, with justification stated in the explanatory statement.",
                "Ordinary resolution passed by the shareholders without any further requirement."
            ],
            answer: 2,
            reason: `
                Section 196(3)(a) prohibits appointment of a person who has attained
                70 years, but permits such appointment where a special resolution is
                passed by the company in general meeting. The explanatory statement
                annexed to the notice must indicate the justification for appointing
                such person.
            `
        },

        {
            question_id: "CEL_CH2_CS51_Q4",
            difficulty: "Medium",
            question: `
                Mr. Dev is proposed to be appointed as "Manager" only for the Finance
                Department. He will not have management of the whole or substantially
                the whole affairs of Pragati Engineering Limited. Does Section 196(1)
                prohibit his appointment merely because the company already has an MD?
            `,
            options: [
                "Yes, because every departmental head is treated as a Manager under Section 2(53).",
                "Yes, because no employee can be appointed as Manager when an MD exists.",
                "No, because a departmental head who does not manage the whole or substantially the whole affairs of the company is not a Manager within Section 2(53).",
                "No, but only if Mr. Dev is appointed as an independent director."
            ],
            answer: 2,
            reason: `
                Section 2(53) defines Manager as an individual having management of
                the whole, or substantially the whole, of the affairs of the company.
                A person heading only a particular department does not fall within
                this definition. Therefore, Section 196(1)'s prohibition against
                simultaneous appointment of MD and Manager does not apply merely
                because the designation used is "Manager".
            `
        },

        {
            question_id: "CEL_CH2_CS51_Q5",
            difficulty: "Hard",
            question: `
                Suppose Pragati Engineering Limited appoints Ms. Charu Sharma,
                aged 72 years, as Managing Director without passing the required
                special resolution. However, at the general meeting, the votes in
                favour of the appointment exceed the votes against it. Which is the
                most appropriate course available under the provisions discussed?
            `,
            options: [
                "The appointment is permanently void and cannot be regularised.",
                "The Board may itself regularise the appointment without shareholder involvement.",
                "The company may apply to the Central Government, which may approve the appointment if satisfied that it is most beneficial to the company.",
                "The company must approach the NCLT for approval in every such case."
            ],
            answer: 2,
            reason: `
                Where the special resolution is not passed but the votes cast in
                favour exceed the votes cast against, the Central Government may,
                on an application made by the Board, approve the appointment if it
                is satisfied that such appointment is most beneficial to the company.
            `
        }

    ]
},

// ============================================================
// CASE SCENARIO 52
// DIFFICULTY: HARD
// CHAPTER 2 - APPOINTMENT AND REMUNERATION OF MANAGERIAL PERSONNEL
// ============================================================

{
    case_id: "CEL_CH2_CS52",
    difficulty: "Hard",
    case_chapter: [
        "Key Managerial Personnel",
        "Section 203",
        "Multiple Company Appointments",
        "Vacancy of KMP"
    ],

    caseText: `
        <p>
            <strong>Vertex Consumer Products Limited</strong> is a listed public
            company. The company has a Managing Director, a Company Secretary and
            a Chief Financial Officer as its whole-time Key Managerial Personnel.
        </p>

        <p>
            Mr. Rohan Kapoor, who is the Chief Financial Officer of Vertex Consumer
            Products Limited, has been approached by its wholly-owned subsidiary,
            Vertex Consumer Products Manufacturing Private Limited, to become a
            whole-time director. Mr. Rohan wishes to continue as CFO of the holding
            company while accepting the proposed office in the subsidiary.
        </p>

        <p>
            At the same time, the company proposes to appoint Ms. Neha as Company
            Secretary. The Board plans to pass the resolution through circulation
            because the directors consider the appointment routine and do not wish
            to convene a Board meeting.
        </p>

        <p>
            Shortly afterwards, the existing CFO resigns from Vertex Consumer Products
            Limited. The Board decides to appoint a replacement after eight months,
            stating that the company needs sufficient time to identify a suitable
            candidate.
        </p>

        <p>
            The Board also considers appointing Mr. Sameer, who is already the
            Managing Director of another company, as the Managing Director of Vertex.
            The directors intend to pass the resolution by a simple majority of the
            directors present at the meeting.
        </p>

        <p>
            The company seeks advice regarding the restrictions and procedural
            requirements applicable to whole-time KMPs and managerial personnel.
        </p>
    `,

    questions: [

        {
            question_id: "CEL_CH2_CS52_Q1",
            difficulty: "Hard",
            question: `
                Can Mr. Rohan Kapoor continue as CFO of Vertex Consumer Products
                Limited while becoming a whole-time director of its subsidiary?
            `,
            options: [
                "No, because a whole-time KMP can never hold office in another company.",
                "Yes, because a whole-time KMP may hold office in more than one company where the other company is its subsidiary.",
                "Yes, but only if the Central Government gives approval.",
                "No, unless the shareholders of both companies pass special resolutions."
            ],
            answer: 1,
            reason: `
                Section 203(3) provides that a whole-time KMP shall not hold office
                in more than one company at the same time except in its subsidiary
                company. Therefore, the appointment in the subsidiary is permitted.
            `
        },

        {
            question_id: "CEL_CH2_CS52_Q2",
            difficulty: "Medium",
            question: `
                The Board proposes to appoint Ms. Neha as Company Secretary through
                a resolution by circulation. Which is the correct position?
            `,
            options: [
                "The appointment can be made by circulation because KMP appointments are routine matters.",
                "The appointment must be made by means of a Board resolution passed at a Board meeting.",
                "The appointment requires only an ordinary resolution of shareholders.",
                "The appointment requires approval of the Central Government."
            ],
            answer: 1,
            reason: `
                Under Section 203(2), every whole-time KMP shall be appointed by
                means of a resolution of the Board containing the terms and
                conditions of appointment, including remuneration. Rule 8 of the
                Companies (Meetings of Board and its Powers) Rules requires the
                appointment or removal of KMP to be made through a Board resolution
                at a meeting of the Board.
            `
        },

        {
            question_id: "CEL_CH2_CS52_Q3",
            difficulty: "Hard",
            question: `
                The existing CFO resigns and the Board plans to fill the vacancy
                after eight months. Is this permissible?
            `,
            options: [
                "Yes, because there is no statutory time limit for filling a KMP vacancy.",
                "Yes, provided shareholders approve the delay.",
                "No, the resulting vacancy of whole-time KMP must be filled by the Board at a meeting within six months from the date of vacancy.",
                "No, the vacancy must be filled within thirty days."
            ],
            answer: 2,
            reason: `
                Section 203(4) requires that if the office of any whole-time KMP is
                vacated, the resulting vacancy shall be filled by the Board at a
                meeting within six months from the date of such vacancy.
            `
        },

        {
            question_id: "CEL_CH2_CS52_Q4",
            difficulty: "Hard",
            question: `
                Mr. Sameer is already Managing Director of another company. Vertex
                proposes to appoint him as its Managing Director. Which additional
                requirement is relevant for such appointment?
            `,
            options: [
                "The appointment is prohibited in all circumstances.",
                "The appointment can be made only if Mr. Sameer resigns from the other company.",
                "He may be MD/Manager in one company and another company, subject to a Board resolution passed with the consent of all directors present and specific notice being given to all directors then in India.",
                "The appointment can be made by ordinary majority of directors without any special notice."
            ],
            answer: 2,
            reason: `
                Section 203(3) permits a person to be MD/Manager in one company and
                another company subject to the prescribed conditions. The relevant
                Board resolution must be passed with the consent of all directors
                present at the meeting, and specific notice of the meeting and the
                proposed resolution must be given to all directors then in India.
            `
        },

        {
            question_id: "CEL_CH2_CS52_Q5",
            difficulty: "Hard",
            question: `
                In the Board meeting for Mr. Sameer's appointment, 8 directors are
                present. Six vote in favour and two abstain. Specific notice had been
                properly given. Is the resolution valid?
            `,
            options: [
                "Yes, because six out of eight directors voted in favour.",
                "Yes, because abstention is treated as consent.",
                "No, because the resolution requires the consent of all directors present at the meeting.",
                "No, because unanimous approval of all shareholders is required."
            ],
            answer: 2,
            reason: `
                Where a person is already MD/Manager in another company and is
                proposed to be appointed as MD/Manager in another company, the
                relevant Board resolution must be passed with the consent of all
                directors present at the meeting. Since two directors did not give
                consent, the requirement is not satisfied.
            `
        }

    ]
},

// ============================================================
// CASE SCENARIO 53
// DIFFICULTY: HARD
// CHAPTER 2 - APPOINTMENT AND REMUNERATION OF MANAGERIAL PERSONNEL
// ============================================================

{
    case_id: "CEL_CH2_CS53",
    difficulty: "Hard",
    case_chapter: [
        "Functions of Company Secretary",
        "Section 205",
        "Secretarial Standards",
        "Board Responsibilities"
    ],

    caseText: `
        <p>
            <strong>Zenith Infrastructure Limited</strong> is a listed company
            having a whole-time Company Secretary, Ms. Priya Menon. During the
            financial year, the Board of Directors assigns her several responsibilities
            relating to corporate compliance and governance.
        </p>

        <p>
            Ms. Priya is required to report to the Board regarding compliance with
            the Companies Act, 2013, the rules made thereunder and other applicable
            laws. She is also asked to ensure compliance with applicable secretarial
            standards and to provide guidance to directors regarding their duties,
            responsibilities and powers.
        </p>

        <p>
            The company is preparing for its forthcoming Board and general meetings.
            Ms. Priya is responsible for facilitating the convening of the meetings,
            attending them and maintaining the minutes. She is also asked to obtain
            necessary approvals from the Board, general meeting, Government and
            other authorities wherever required.
        </p>

        <p>
            During an internal review, some directors argue that since the Company
            Secretary is responsible for compliance, the Board and Managing Director
            should no longer be personally responsible for compliance failures.
            Another director suggests that the Company Secretary should represent
            the company before regulators and assist the Board in maintaining good
            corporate governance.
        </p>

        <p>
            The Board seeks advice regarding the precise scope of the Company
            Secretary's statutory functions and whether assigning these duties
            reduces the responsibilities of other key functionaries.
        </p>
    `,

    questions: [

        {
            question_id: "CEL_CH2_CS53_Q1",
            difficulty: "Medium",
            question: `
                Which of the following is a statutory function of the Company
                Secretary under Section 205?
            `,
            options: [
                "To determine the company's annual profit.",
                "To report to the Board about compliance with applicable laws.",
                "To approve the company's financial statements independently.",
                "To appoint all directors without Board approval."
            ],
            answer: 1,
            reason: `
                Section 205 requires the Company Secretary to report to the Board
                about compliance with the Companies Act, rules made thereunder and
                other applicable laws.
            `
        },

        {
            question_id: "CEL_CH2_CS53_Q2",
            difficulty: "Medium",
            question: `
                Ms. Priya is required to ensure compliance with applicable
                secretarial standards. Which statement correctly describes
                "secretarial standards" for this purpose?
            `,
            options: [
                "Standards issued by the Ministry of Finance without approval.",
                "Standards issued by ICAI and approved by the Central Government.",
                "Standards issued by the Institute of Company Secretaries of India and approved by the Central Government.",
                "Internal standards framed by the company's Board."
            ],
            answer: 2,
            reason: `
                Secretarial standards refer to standards issued by the Institute of
                Company Secretaries of India under the Company Secretaries Act,
                1980 and approved by the Central Government.
            `
        },

        {
            question_id: "CEL_CH2_CS53_Q3",
            difficulty: "Hard",
            question: `
                Ms. Priya is asked to facilitate meetings, attend Board, committee
                and general meetings and maintain their minutes. Which statement
                is correct?
            `,
            options: [
                "These functions fall within the statutory functions of the Company Secretary.",
                "Only the Managing Director can perform these functions.",
                "The Company Secretary may facilitate meetings but cannot maintain minutes.",
                "These functions can be performed only by an independent director."
            ],
            answer: 0,
            reason: `
                Section 205 and Rule 10 specifically include facilitating the
                convening of meetings, attending Board, committee and general
                meetings and maintaining the minutes of such meetings among the
                functions of the Company Secretary.
            `
        },

        {
            question_id: "CEL_CH2_CS53_Q4",
            difficulty: "Hard",
            question: `
                The Company Secretary obtains approvals from the Board, general
                meeting, Government and other authorities wherever required.
                Is this within her statutory functions?
            `,
            options: [
                "No, a Company Secretary can obtain only Board approvals.",
                "No, Government approvals can be obtained only by the Managing Director.",
                "Yes, obtaining required approvals from the Board, general meeting, Government and other authorities is a statutory function.",
                "Yes, but only when specifically authorised by shareholders through a special resolution."
            ],
            answer: 2,
            reason: `
                One of the functions prescribed under Section 205 read with
                Rule 10 is to obtain approvals from the Board, general meeting,
                Government and such other authorities as required under the
                Companies Act, 2013.
            `
        },

        {
            question_id: "CEL_CH2_CS53_Q5",
            difficulty: "Hard",
            question: `
                The Board argues that because Ms. Priya is responsible for
                compliance and corporate governance, the Board and Managing
                Director are relieved of their statutory duties. Which is correct?
            `,
            options: [
                "Correct, because Section 205 transfers the Board's responsibilities to the CS.",
                "Correct, but only in relation to secretarial matters.",
                "Incorrect, because Section 205 does not affect the duties and functions of the Board, Chairperson, MD or WTD.",
                "Incorrect only where the company is listed."
            ],
            answer: 2,
            reason: `
                Section 205(2) specifically provides that the provisions relating
                to secretarial audit and functions of the Company Secretary do not
                affect the duties and functions of the Board of Directors,
                Chairperson, Managing Director or Whole-time Director. Their
                statutory responsibilities continue notwithstanding the functions
                performed by the Company Secretary.
            `
        }

    ]
},

// ============================================================
// CASE SCENARIO 54
// DIFFICULTY: HARD
// CHAPTER 2 - APPOINTMENT AND REMUNERATION OF MANAGERIAL PERSONNEL
// ============================================================

{
    case_id: "CEL_CH2_CS54",
    difficulty: "Hard",
    case_chapter: [
        "Overall Maximum Managerial Remuneration",
        "Section 197",
        "Managerial Remuneration Limits",
        "Special Resolution"
    ],

    caseText: `
        <p>
            <strong>Alpha Technologies Limited</strong> is a public company having
            adequate profits during the financial year 2026-27. The company has
            one Managing Director, Mr. Karan, and two Whole-time Directors,
            Ms. Riya and Mr. Sameer. It also has four directors who are neither
            Managing Directors nor Whole-time Directors.
        </p>

        <p>
            The Board proposes to determine the remuneration payable to its
            managerial personnel and other directors by reference to the net
            profits of the company computed in accordance with Section 198.
            The Board is aware that the overall managerial remuneration payable
            to directors, including the Managing Director, Whole-time Directors
            and Manager, is subject to a statutory ceiling.
        </p>

        <p>
            The company proposes to pay Mr. Karan, the Managing Director, 5% of
            the net profits. The two Whole-time Directors together are proposed
            to receive another 5% of the net profits. The four other directors
            are proposed to receive remuneration aggregating to 2% of the net
            profits.
        </p>

        <p>
            Some directors argue that each category can be considered separately
            and therefore the company can pay all the proposed amounts without
            any further approval. Others believe that the aggregate remuneration
            has to be examined against the overall ceiling and that certain
            individual limits can be exceeded only through shareholder approval.
        </p>

        <p>
            The company has also defaulted in repayment of certain dues to a
            public financial institution. The Board therefore wants to understand
            whether the approval of the financial institution is relevant before
            seeking shareholder approval for remuneration exceeding the prescribed
            limits.
        </p>
    `,

    questions: [

        {
            question_id: "CEL_CH2_CS54_Q1",
            difficulty: "Medium",
            question: `
                What is the overall maximum managerial remuneration payable by a
                public company to its directors, including MD, WTD and Manager,
                in respect of a financial year, subject to the statutory provisions?
            `,
            options: [
                "5% of net profits",
                "10% of net profits",
                "11% of net profits",
                "15% of net profits"
            ],
            answer: 2,
            reason: `
                Under Section 197(1), the overall managerial remuneration payable
                by a public company to its directors, including managing director,
                whole-time director and manager, shall not exceed 11% of the net
                profits of the company for that financial year, subject to the
                provisions of the Act and Schedule V.
            `
        },

        {
            question_id: "CEL_CH2_CS54_Q2",
            difficulty: "Hard",
            question: `
                Since Alpha Technologies Limited has one Managing Director,
                what is the normal maximum remuneration payable to Mr. Karan
                as Managing Director without approval by special resolution?
            `,
            options: [
                "1% of net profits",
                "3% of net profits",
                "5% of net profits",
                "10% of net profits"
            ],
            answer: 2,
            reason: `
                Where there is one Managing Director, Whole-time Director or
                Manager, the remuneration payable to that individual is ordinarily
                limited to 5% of the net profits. The limit may be exceeded with
                approval of the company in general meeting by special resolution.
            `
        },

        {
            question_id: "CEL_CH2_CS54_Q3",
            difficulty: "Hard",
            question: `
                The company has more than one Managing Director/Whole-time
                Director/Manager. What is the prescribed combined limit for all
                such managerial personnel before special resolution approval?
            `,
            options: [
                "5% of net profits",
                "8% of net profits",
                "10% of net profits",
                "11% of net profits"
            ],
            answer: 2,
            reason: `
                Where there is more than one Managing Director, Whole-time
                Director or Manager, the remuneration payable to all such
                managerial personnel taken together shall not exceed 10% of the
                net profits, subject to the provisions of Section 197.
            `
        },

        {
            question_id: "CEL_CH2_CS54_Q4",
            difficulty: "Hard",
            question: `
                The four directors who are neither Managing Directors nor
                Whole-time Directors are proposed to receive remuneration
                aggregating to 2% of net profits. Since the company has a
                Managing Director, what approval is ordinarily required to
                exceed the prescribed 1% limit?
            `,
            options: [
                "No approval is required because the overall 11% limit is not relevant.",
                "Approval of the Board alone is sufficient.",
                "Approval of the company in general meeting by passing a special resolution is required.",
                "Approval of the Central Government is mandatory."
            ],
            answer: 2,
            reason: `
                Where there is a Managing Director, Whole-time Director or Manager,
                remuneration payable to directors who are neither MD nor WTD is
                ordinarily limited to 1% of net profits. The limit may be exceeded
                with approval of the company in general meeting by special
                resolution.
            `
        },

        {
            question_id: "CEL_CH2_CS54_Q5",
            difficulty: "Hard",
            question: `
                Alpha Technologies Limited has defaulted in payment of dues to a
                public financial institution. It proposes to seek shareholder
                approval for remuneration exceeding the prescribed limit. What
                additional requirement applies before obtaining such approval?
            `,
            options: [
                "Prior approval of the public financial institution must be obtained.",
                "Only approval of the Central Government is required.",
                "No additional approval is necessary once the shareholders approve.",
                "Prior approval of the Registrar of Companies must be obtained."
            ],
            answer: 0,
            reason: `
                Where the company has defaulted in payment of dues to a bank,
                public financial institution, non-convertible debenture holders or
                other secured creditors, the company must obtain the prior approval
                of the relevant creditor before obtaining approval in the general
                meeting for remuneration where such prior approval is prescribed.
            `
        }

    ]
},

// ============================================================
// CASE SCENARIO 55
// DIFFICULTY: HARD
// CHAPTER 2 - APPOINTMENT AND REMUNERATION OF MANAGERIAL PERSONNEL
// ============================================================

{
    case_id: "CEL_CH2_CS55",
    difficulty: "Hard",
    case_chapter: [
        "Managerial Remuneration",
        "Absence or Inadequacy of Profits",
        "Schedule V",
        "Effective Capital"
    ],

    caseText: `
        <p>
            <strong>Nova Industrial Systems Limited</strong> is a public company
            which has suffered inadequate profits during the financial year
            2026-27. The company has a Managing Director, Mr. Aditya, and a
            Whole-time Director, Ms. Kavya. Their appointment terms provide that
            where the company has no profits or inadequate profits, remuneration
            shall be governed by Schedule V to the Companies Act, 2013.
        </p>

        <p>
            The company's effective capital, determined in accordance with
            Schedule V, is <strong>₹80 crore</strong>. The Board proposes to pay
            Mr. Aditya managerial remuneration of ₹84 lakh for the year and
            Ms. Kavya remuneration of ₹84 lakh for the year.
        </p>

        <p>
            The finance team points out that the company has also incurred certain
            accumulated losses and holds investments which have to be considered
            while determining effective capital. The Board therefore decides to
            verify the calculation before approving the remuneration.
        </p>

        <p>
            The Board further proposes to pay remuneration above the prescribed
            Schedule V limit if the shareholders approve it. One director argues
            that an ordinary resolution is sufficient for any excess remuneration,
            while another director believes that a special resolution is required.
        </p>

        <p>
            The company also considers appointing a managerial person for only
            six months during the financial year and seeks clarification on whether
            the annual remuneration ceiling should be applied in full or adjusted
            for the shorter period.
        </p>
    `,

    questions: [

        {
            question_id: "CEL_CH2_CS55_Q1",
            difficulty: "Medium",
            question: `
                Nova Industrial Systems Limited has effective capital of ₹80 crore
                and inadequate profits. What is the maximum yearly remuneration
                ordinarily payable to a managerial person under Section II of
                Part II of Schedule V?
            `,
            options: [
                "₹60 lakh",
                "₹84 lakh",
                "₹120 lakh",
                "₹17 lakh"
            ],
            answer: 1,
            reason: `
                Where effective capital is ₹5 crore and above but less than
                ₹100 crore, the prescribed annual remuneration limit for a
                managerial person is ₹84 lakh.
            `
        },

        {
            question_id: "CEL_CH2_CS55_Q2",
            difficulty: "Hard",
            question: `
                Nova proposes to pay both Mr. Aditya and Ms. Kavya ₹84 lakh each.
                Assuming both are managerial persons and all other Schedule V
                conditions are satisfied, what is the maximum aggregate amount
                ordinarily payable to them under the individual Schedule V limits?
            `,
            options: [
                "₹84 lakh",
                "₹1.20 crore",
                "₹1.68 crore",
                "₹2.40 crore"
            ],
            answer: 2,
            reason: `
                The Schedule V ceiling of ₹84 lakh applies to each managerial
                person separately. Therefore, for two managerial persons, the
                aggregate amount within their respective individual limits would
                be ₹84 lakh + ₹84 lakh = ₹1.68 crore, assuming all applicable
                conditions are satisfied.
            `
        },

        {
            question_id: "CEL_CH2_CS55_Q3",
            difficulty: "Hard",
            question: `
                The company wishes to pay remuneration exceeding the prescribed
                Schedule V limits applicable to the managerial persons. What type
                of shareholder approval is generally required for such excess?
            `,
            options: [
                "No shareholder approval is required.",
                "Ordinary resolution.",
                "Special resolution.",
                "Approval of the Central Government alone."
            ],
            answer: 2,
            reason: `
                Under Section II of Part II of Schedule V, remuneration in excess
                of the prescribed limits may be paid if the resolution passed by
                the shareholders is a special resolution, subject to the other
                applicable conditions of Schedule V.
            `
        },

        {
            question_id: "CEL_CH2_CS55_Q4",
            difficulty: "Hard",
            question: `
                Suppose Mr. Aditya is appointed only for six months during the
                financial year. How should the annual Schedule V remuneration
                limit generally be applied?
            `,
            options: [
                "The full annual limit is always available regardless of tenure.",
                "The limit must be reduced by exactly 50% in every case.",
                "The applicable limit is to be pro-rated for the period of appointment.",
                "No remuneration can be paid for a period shorter than one year."
            ],
            answer: 2,
            reason: `
                Explanation 3 to Section II of Part II of Schedule V clarifies that
                where the period is less than one year, the prescribed limits are
                to be pro-rated. Therefore, remuneration for a six-month period
                would ordinarily be calculated proportionately.
            `
        },

        {
            question_id: "CEL_CH2_CS55_Q5",
            difficulty: "Very Hard",
            question: `
                During verification of effective capital, the company discovers that
                it had included revaluation reserve in "Reserves and Surplus".
                It also included a working capital cash-credit facility as a
                long-term loan. How should these items be treated while computing
                effective capital?
            `,
            options: [
                "Both items are included in effective capital.",
                "Revaluation reserve is included, but working capital loans are excluded.",
                "Both revaluation reserve and working capital loans are excluded from the calculation of effective capital.",
                "Revaluation reserve is excluded, but working capital loans are included as long-term capital."
            ],
            answer: 2,
            reason: `
                Effective capital includes reserves and surplus excluding
                revaluation reserve. It also includes long-term loans and deposits
                repayable after one year, but specifically excludes working capital
                loans and similar short-term arrangements. Therefore, both the
                revaluation reserve and working-capital borrowing are excluded.
            `
        }

    ]
},

// ============================================================
// CASE SCENARIO 56
// DIFFICULTY: HARD
// CHAPTER 2 - APPOINTMENT AND REMUNERATION OF MANAGERIAL PERSONNEL
// ============================================================

{
    case_id: "CEL_CH2_CS56",
    difficulty: "Hard",
    case_chapter: [
        "Effective Capital",
        "Schedule V",
        "No Profit or Inadequate Profit",
        "Managerial Remuneration"
    ],

    caseText: `
        <p>
            <strong>Orion Manufacturing Limited</strong> is a public company engaged
            in the manufacture of electrical equipment. During the financial year
            2026-27, the company has inadequate profits and therefore proposes to
            determine the remuneration payable to its Managing Director, Mr. Arvind,
            under Section II of Part II of Schedule V.
        </p>

        <p>
            The finance department has prepared the following information as at
            31 March 2027:
        </p>

        <table>
            <thead>
                <tr>
                    <th>Particulars</th>
                    <th>Amount (₹ lakh)</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Paid-up share capital</td>
                    <td>600</td>
                </tr>
                <tr>
                    <td>Share premium</td>
                    <td>80</td>
                </tr>
                <tr>
                    <td>Reserves and surplus</td>
                    <td>120</td>
                </tr>
                <tr>
                    <td>Revaluation reserve included in reserves</td>
                    <td>30</td>
                </tr>
                <tr>
                    <td>Long-term loan repayable after one year</td>
                    <td>100</td>
                </tr>
                <tr>
                    <td>Working capital cash-credit facility</td>
                    <td>60</td>
                </tr>
                <tr>
                    <td>Investments</td>
                    <td>50</td>
                </tr>
                <tr>
                    <td>Accumulated losses</td>
                    <td>40</td>
                </tr>
                <tr>
                    <td>Preliminary expenses not written off</td>
                    <td>10</td>
                </tr>
            </tbody>
        </table>

        <p>
            The company proposes to treat the entire reserves and surplus of
            ₹120 lakh as part of effective capital. It also proposes to include
            the working capital cash-credit facility on the ground that it is
            secured against the company's assets.
        </p>

        <p>
            Mr. Arvind argues that because the company has inadequate profits,
            the remuneration ceiling should be determined on the basis of the
            paid-up capital alone. The finance director, however, states that
            Schedule V requires a specific computation of effective capital.
        </p>

        <p>
            The Board asks its legal adviser to determine the correct effective
            capital and identify the applicable annual remuneration ceiling.
        </p>
    `,

    questions: [

        {
            question_id: "CEL_CH2_CS56_Q1",
            difficulty: "Medium",
            question: `
                While computing effective capital under Schedule V, which amount
                of reserves and surplus should be considered from the given data?
            `,
            options: [
                "₹120 lakh",
                "₹90 lakh",
                "₹30 lakh",
                "Nil"
            ],
            answer: 1,
            reason: `
                Revaluation reserve is specifically excluded from reserves and
                surplus for the purpose of effective capital. Therefore:
                ₹120 lakh - ₹30 lakh = ₹90 lakh.
            `
        },

        {
            question_id: "CEL_CH2_CS56_Q2",
            difficulty: "Hard",
            question: `
                Should the working capital cash-credit facility of ₹60 lakh be
                included while computing effective capital?
            `,
            options: [
                "Yes, because it is secured against assets.",
                "Yes, because every bank borrowing is treated as long-term capital.",
                "No, because working capital loans are specifically excluded.",
                "No, but only if the loan is unsecured."
            ],
            answer: 2,
            reason: `
                Effective capital includes long-term loans and deposits repayable
                after one year, but excludes working capital loans, overdrafts and
                other short-term arrangements. Hence the ₹60 lakh cash-credit
                facility is excluded.
            `
        },

        {
            question_id: "CEL_CH2_CS56_Q3",
            difficulty: "Hard",
            question: `
                Based on the information given, what is the effective capital of
                Orion Manufacturing Limited?
            `,
            options: [
                "₹770 lakh",
                "₹770 lakh after including working capital borrowing",
                "₹770 lakh after excluding investments and losses",
                "₹770 lakh is incorrect; the effective capital is ₹770 lakh only if preliminary expenses are ignored."
            ],
            answer: 0,
            reason: `
                Effective capital is calculated as follows:

                Paid-up share capital = ₹600 lakh
                Add: Share premium = ₹80 lakh
                Add: Reserves excluding revaluation reserve = ₹90 lakh
                Add: Long-term loan = ₹100 lakh
                Less: Investments = ₹50 lakh
                Less: Accumulated losses = ₹40 lakh
                Less: Preliminary expenses = ₹10 lakh

                Effective capital = ₹600 + ₹80 + ₹90 + ₹100
                - ₹50 - ₹40 - ₹10 = ₹770 lakh.
            `
        },

        {
            question_id: "CEL_CH2_CS56_Q4",
            difficulty: "Hard",
            question: `
                Mr. Arvind argues that the remuneration ceiling should be based
                only on paid-up share capital. Which statement is correct?
            `,
            options: [
                "He is correct because Schedule V considers only paid-up capital.",
                "He is correct only where the company has inadequate profits.",
                "He is incorrect because Schedule V determines the applicable remuneration limit with reference to effective capital.",
                "He is incorrect because remuneration is always based on turnover."
            ],
            answer: 2,
            reason: `
                In cases of no profit or inadequate profit, Section II of Part II
                of Schedule V links the permissible remuneration to the effective
                capital of the company. Effective capital includes specified
                capital, reserves, long-term loans and specified deductions.
            `
        },

        {
            question_id: "CEL_CH2_CS56_Q5",
            difficulty: "Very Hard",
            question: `
                If the effective capital is ₹7.70 crore, which Schedule V slab
                applies for determining the annual remuneration limit of the
                managerial person?
            `,
            options: [
                "Negative or less than ₹5 crore",
                "₹5 crore and above but less than ₹100 crore",
                "₹100 crore and above but less than ₹250 crore",
                "₹250 crore and above"
            ],
            answer: 1,
            reason: `
                The effective capital of ₹7.70 crore falls within the slab of
                ₹5 crore and above but less than ₹100 crore. Accordingly, the
                prescribed annual remuneration ceiling for a managerial person
                under this slab is ₹84 lakh, subject to the other conditions
                specified in Schedule V.
            `
        }

    ]
},

// ============================================================
// CASE SCENARIO 57
// DIFFICULTY: HARD
// CHAPTER 2 - APPOINTMENT AND REMUNERATION OF MANAGERIAL PERSONNEL
// ============================================================

{
    case_id: "CEL_CH2_CS57",
    difficulty: "Hard",
    case_chapter: [
        "Section 197",
        "Professional Services by Directors",
        "Sitting Fees",
        "Mode of Payment of Remuneration"
    ],

    caseText: `
        <p>
            <strong>Meditech Hospitals Limited</strong> is a listed public company
            operating a chain of specialised hospitals. Dr. Nikhil Rao is a director
            of the company and is also a highly qualified practising cardiac surgeon.
            The company proposes to pay him a fixed monthly remuneration for his
            services as a director.
        </p>

        <p>
            In addition, whenever Dr. Nikhil performs specialised cardiac surgeries
            for patients of the hospital, the company proposes to pay him professional
            fees separately on a case-to-case basis. The Nomination and Remuneration
            Committee is satisfied that Dr. Nikhil possesses the requisite professional
            qualifications for rendering such services.
        </p>

        <p>
            The Board also proposes to pay all directors a sitting fee of ₹1,20,000
            for every Board meeting. The independent directors object to the proposal,
            stating that the statutory ceiling on sitting fees is lower.
        </p>

        <p>
            One director suggests that sitting fees should be included while calculating
            the overall 11% ceiling on managerial remuneration. Another director
            argues that sitting fees are outside that percentage limit.
        </p>

        <p>
            The company is also considering whether Dr. Nikhil's remuneration may be
            paid partly through a monthly payment and partly as a percentage of the
            company's net profits.
    `,

    questions: [

        {
            question_id: "CEL_CH2_CS57_Q1",
            difficulty: "Medium",
            question: `
                Can Meditech Hospitals Limited pay Dr. Nikhil separate professional
                fees for surgeries performed by him if he possesses the requisite
                professional qualifications?
            `,
            options: [
                "No, because every payment to a director is automatically managerial remuneration.",
                "Yes, where the services are of a professional nature and the requisite qualification is established.",
                "Yes, but only after Central Government approval.",
                "No, unless the services are performed outside the hospital."
            ],
            answer: 1,
            reason: `
                Under Section 197(4), remuneration for services rendered by a director
                in another capacity is not included where the services are of a
                professional nature and the director possesses the requisite
                qualification for practising that profession, as determined by the
                Nomination and Remuneration Committee where applicable or the Board
                in other cases.
            `
        },

        {
            question_id: "CEL_CH2_CS57_Q2",
            difficulty: "Hard",
            question: `
                The company proposes to pay ₹1,20,000 as sitting fee for each Board
                meeting. Is the proposed amount permissible under Rule 4?
            `,
            options: [
                "Yes, because the Board may freely determine any sitting fee.",
                "Yes, because listed companies are exempt from the sitting fee ceiling.",
                "No, because the sitting fee shall not exceed ₹1 lakh per meeting.",
                "No, because directors cannot receive sitting fees."
            ],
            answer: 2,
            reason: `
                Rule 4 of the Companies (Appointment and Remuneration of Managerial
                Personnel) Rules, 2014 provides that sitting fees shall not exceed
                ₹1 lakh per meeting of the Board or committee thereof.
            `
        },

        {
            question_id: "CEL_CH2_CS57_Q3",
            difficulty: "Hard",
            question: `
                If the company pays sitting fees to its directors, should such fees
                be included within the percentage limits prescribed under Section 197(1)?
            `,
            options: [
                "Yes, sitting fees form part of the 11% ceiling.",
                "Yes, but only for independent directors.",
                "No, sitting fees are excluded from the percentage limits.",
                "Yes, but only where the company has inadequate profits."
            ],
            answer: 2,
            reason: `
                Section 197(2) specifically provides that the percentage limits
                prescribed under Section 197(1) are exclusive of fees payable to
                directors for attending Board or committee meetings or for other
                purposes as decided by the Board.
            `
        },

        {
            question_id: "CEL_CH2_CS57_Q4",
            difficulty: "Hard",
            question: `
                The company proposes to pay independent directors a sitting fee
                lower than that payable to other directors. Is this permissible?
            `,
            options: [
                "Yes, because independent directors can always receive a lower fee.",
                "Yes, if approved by the Nomination and Remuneration Committee.",
                "No, the sitting fee payable to independent directors and women directors shall not be less than that payable to other directors.",
                "No, because independent directors cannot receive sitting fees at all."
            ],
            answer: 2,
            reason: `
                The proviso to Rule 4 states that the sitting fee payable to
                independent directors and women directors shall not be less than
                the sitting fee payable to other directors.
            `
        },

        {
            question_id: "CEL_CH2_CS57_Q5",
            difficulty: "Hard",
            question: `
                Meditech proposes to pay Dr. Nikhil remuneration partly by monthly
                payment and partly by reference to a specified percentage of net
                profits. Is this mode of payment permitted?
            `,
            options: [
                "No, remuneration must always be paid entirely as a monthly salary.",
                "No, remuneration can only be paid as a percentage of net profits.",
                "Yes, remuneration may be paid by monthly payment, at a specified percentage of net profits, or partly by one method and partly by the other.",
                "Yes, but only if the Central Government approves the arrangement."
            ],
            answer: 2,
            reason: `
                Section 197(6) permits remuneration to a director or manager to be
                paid by way of monthly payment, at a specified percentage of the
                net profits, or partly by one method and partly by the other.
            `
        }

    ]
},
];