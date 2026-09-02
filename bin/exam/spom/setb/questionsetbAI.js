const AICaseStudies = [
// Chapter 1
{
  case_id: "SCM_c12_cs_001",
  difficulty: "Medium",
  case_topic: ["Strategic Cost Management", "Traditional Cost Management", "Cost Drivers"],
  case_chapter: "Chapter12",
  caseText: `
    <p>Vertex Appliances Limited is a manufacturer of household appliances operating in a highly competitive market. For several years, the company followed a traditional cost management approach. The management primarily concentrated on reducing manufacturing expenditure and achieving the annual budgeted cost targets. Departmental managers were rewarded largely on the basis of their ability to keep actual expenditure below the amounts approved in the annual budget.</p>

    <p>During the current year, the production department proposed postponing certain preventive maintenance activities relating to its automated production equipment. The proposal was supported on the ground that maintenance expenditure could be reduced substantially during the year. Although the maintenance manager warned that postponement could increase the probability of machine breakdowns, the proposal was accepted because the immediate objective of the management was to reduce reported costs.</p>

    <p>Six months later, one of the critical machines suffered a major breakdown. Production was interrupted for several days, resulting in emergency repair expenditure, overtime payments, delayed customer deliveries and loss of certain orders. The finance team observed that although the maintenance department had achieved its cost reduction target, the company as a whole had suffered a decline in profitability.</p>

    <p>At the same time, Vertex noticed that competitors had introduced products with better features and faster after-sales support. The company's marketing department reported that customers were increasingly considering product quality, service responsiveness and product features while making purchasing decisions. The management realised that focusing exclusively on internal cost reduction was no longer sufficient.</p>

    <p>The Chief Financial Officer therefore proposed moving towards Strategic Cost Management. He explained that costs should be analysed in the context of the company's strategy, customer expectations, competitors and the activities that create value. He also suggested that the company should identify appropriate cost drivers instead of allocating all supporting costs merely on the basis of production volume.</p>
  `,
  questions: [
    {
      question_id: "SCM_c12_cs_001_1",
      question: "Which limitation of traditional cost management is most clearly demonstrated by Vertex's decision to postpone preventive maintenance?",
      options: [
        "It focuses excessively on qualitative information",
        "It assumes that every cost reduction necessarily improves profitability",
        "It gives excessive importance to product differentiation",
        "It focuses primarily on external environmental factors"
      ],
      answer: 2,
      reason: "Traditional cost management places excessive emphasis on cost reduction. The case demonstrates that reducing preventive maintenance cost resulted in higher corrective costs, disruption and lower profitability."
    },
    {
      question_id: "SCM_c12_cs_001_2",
      question: "Which approach would best reflect Strategic Cost Management in the circumstances?",
      options: [
        "Reduce every department's expenditure by an identical percentage",
        "Focus only on achieving the annual budget",
        "Align cost management decisions with business strategy and customer value",
        "Ignore competitors because cost information is internally generated"
      ],
      answer: 3,
      reason: "Strategic Cost Management involves measuring and managing costs while aligning them with business strategy. It considers both quantitative and qualitative information and the broader business environment."
    },
    {
      question_id: "SCM_c12_cs_001_3",
      question: "Under Strategic Cost Management, the allocation of supporting costs should generally be based on:",
      options: [
        "Only units produced",
        "Only sales revenue",
        "Relevant cost drivers associated with activities",
        "Only direct labour hours in every situation"
      ],
      answer: 3,
      reason: "Strategic Cost Management recognises that appropriate cost drivers should be identified according to the nature of the supporting cost and activity rather than relying exclusively on production volume."
    },
    {
      question_id: "SCM_c12_cs_001_4",
      question: "Which of the following best explains why Vertex's earlier cost reduction did not necessarily create competitive advantage?",
      options: [
        "Cost reduction is always irrelevant to profitability",
        "Competitive advantage can arise only from increasing costs",
        "Cost reduction must be considered together with customer value, quality and strategic position",
        "Traditional costing automatically measures customer satisfaction"
      ],
      answer: 3,
      reason: "Strategic Cost Management recognises that cost reduction alone may damage quality or customer value. Competitive advantage may arise through cost leadership or differentiation."
    },
    {
      question_id: "SCM_c12_cs_001_5",
      question: "Which combination represents the three underlying pillars of Strategic Cost Management?",
      options: [
        "Budgeting, standard costing and variance analysis",
        "Strategic positioning, cost driver analysis and value chain analysis",
        "Financial accounting, auditing and taxation",
        "Pricing, advertising and distribution"
      ],
      answer: 2,
      reason: "The three important pillars of Strategic Cost Management are strategic positioning analysis, cost driver analysis and value chain analysis."
    }
  ]
},

{
  case_id: "SCM_c12_cs_002",
  difficulty: "Medium",
  case_topic: ["Value Chain Analysis", "Primary Activities", "Support Activities"],
  case_chapter: "Chapter12",
  caseText: `
    <p>Nova Foods Limited manufactures packaged ready-to-eat food products and distributes them through supermarkets, online platforms and independent retailers. The company has recently experienced pressure on margins despite maintaining a strong market position. The Board therefore appointed a strategic management team to examine how value was created across the company's activities.</p>

    <p>The team first mapped the activities involved in receiving raw materials, storing ingredients, processing and packaging food, storing finished products, distributing them to retailers, marketing the products and providing customer support. It also examined activities relating to human resources, technology development, procurement and the firm's administrative infrastructure.</p>

    <p>The review showed that Nova maintained large raw-material storage facilities because procurement managers traditionally purchased materials in large quantities. However, certain ingredients had relatively short shelf lives, resulting in wastage and additional storage costs. The team also discovered that the company's distribution centres were located far away from several important markets, increasing transportation costs and delivery time.</p>

    <p>Further investigation showed that the company's technology team had developed an automated inventory monitoring system, but the production department had not fully implemented it. The human resource department was also conducting specialised training programmes for production supervisors, resulting in improvements in production quality.</p>

    <p>The strategic management team concluded that certain activities created significant customer value while others were either inefficient or provided limited additional value. It recommended that management analyse the cost and value of individual activities and identify opportunities for cost leadership and differentiation rather than simply reducing expenditure across all departments.</p>
  `,
  questions: [
    {
      question_id: "SCM_c12_cs_002_1",
      question: "Which activity of Nova primarily relates to inbound logistics?",
      options: [
        "Advertising finished food products",
        "Receiving and storing raw materials",
        "Delivering finished products to retailers",
        "Training production supervisors"
      ],
      answer: 2,
      reason: "Inbound logistics cover receiving, storing and handling raw material inputs."
    },
    {
      question_id: "SCM_c12_cs_002_2",
      question: "The transportation and delivery of finished food products to retailers would fall under:",
      options: [
        "Inbound logistics",
        "Operations",
        "Outbound logistics",
        "Firm infrastructure"
      ],
      answer: 3,
      reason: "Outbound logistics cover storing, distributing and delivering finished goods to customers."
    },
    {
      question_id: "SCM_c12_cs_002_3",
      question: "Specialised training programmes conducted by Nova's HR department represent which type of activity?",
      options: [
        "Primary activity",
        "Support activity",
        "Outbound logistics",
        "Marketing activity"
      ],
      answer: 2,
      reason: "Human resource management is a support activity in Porter's Value Chain."
    },
    {
      question_id: "SCM_c12_cs_002_4",
      question: "What should Nova primarily do after identifying the costs and value associated with individual activities?",
      options: [
        "Eliminate all activities having any cost",
        "Identify opportunities for competitive advantage",
        "Increase every activity's budget",
        "Ignore activities that do not directly generate revenue"
      ],
      answer: 2,
      reason: "The three broad steps of Value Chain Analysis are identifying activities, determining their cost and value, and identifying opportunities for competitive advantage."
    },
    {
      question_id: "SCM_c12_cs_002_5",
      question: "If Nova deploys its technology system to improve inventory efficiency and reduce wastage, this illustrates the strategic importance of:",
      options: [
        "Technology development as a support activity",
        "Outbound logistics as the only value-creating activity",
        "Customer segmentation only",
        "Revenue stream analysis"
      ],
      answer: 1,
      reason: "Technology development is a support activity and can improve the effectiveness of primary activities such as inventory management and operations."
    }
  ]
},

{
  case_id: "SCM_c12_cs_003",
  difficulty: "Medium",
  case_topic: ["Business Model Canvas", "Value Proposition", "Customer Segments"],
  case_chapter: "Chapter12",
  caseText: `
    <p>EduSphere Technologies operates an online learning platform designed primarily for professional students. The company initially developed its platform based on the capabilities of its technology team. It offered several advanced features, including artificial intelligence-based dashboards, extensive analytics and multiple customisation options. However, despite considerable expenditure on technology development, customer retention remained below expectations.</p>

    <p>The management commissioned a strategic review to understand why customers were not perceiving sufficient value. Interviews with users revealed that many students were less concerned about sophisticated analytics and more concerned about affordable access, chapter-wise practice, realistic examination questions, progress tracking and easy navigation.</p>

    <p>The strategy team decided to map the company's business using Osterwalder's Business Model Canvas. It identified professional students as the major customer segment. The company intended to offer affordable examination preparation, chapter-wise practice and performance tracking as its value proposition.</p>

    <p>The company also reviewed its channels and decided to distribute its services through its website and mobile application. Customer relationships would be developed through progress notifications, personalised recommendations and support services. Revenue would arise primarily through subscriptions and selected premium services.</p>

    <p>On the infrastructure side, EduSphere identified software developers, its learning platform, question database and analytics capability as important resources. Technology development and content creation were considered key activities. The company also identified payment gateways, content partners and technology providers as key partners. Finally, the finance team analysed software development costs, hosting costs, content creation costs and customer acquisition expenses as major elements of the cost structure.</p>
  `,
  questions: [
    {
      question_id: "SCM_c12_cs_003_1",
      question: "In the Business Model Canvas, professional students identified as the primary users represent:",
      options: [
        "Key Resources",
        "Customer Segments",
        "Key Partners",
        "Revenue Streams"
      ],
      answer: 2,
      reason: "Customer Segments describe who the customers of the business are and why they buy from it."
    },
    {
      question_id: "SCM_c12_cs_003_2",
      question: "EduSphere's affordable examination preparation and progress tracking primarily represent its:",
      options: [
        "Value Proposition",
        "Cost Structure",
        "Key Activities",
        "Channels"
      ],
      answer: 1,
      reason: "Value Proposition deals with the products or services offered to a target customer segment to solve their problems or satisfy their needs."
    },
    {
      question_id: "SCM_c12_cs_003_3",
      question: "The website and mobile application through which EduSphere delivers its service are examples of:",
      options: [
        "Channels",
        "Customer Segments",
        "Key Resources only",
        "Revenue Streams"
      ],
      answer: 1,
      reason: "Channels deal with the distribution mechanisms through which products or services are promoted, sold and delivered to customers."
    },
    {
      question_id: "SCM_c12_cs_003_4",
      question: "Which of the following would most appropriately fall under Revenue Streams for EduSphere?",
      options: [
        "Software developers",
        "Subscription income",
        "Question database",
        "Payment gateway"
      ],
      answer: 2,
      reason: "Revenue Streams describe how the business earns money from its value propositions. Subscription is specifically recognised as a revenue model."
    },
    {
      question_id: "SCM_c12_cs_003_5",
      question: "The initial approach of developing advanced features without adequately considering student requirements primarily conflicts with which principle?",
      options: [
        "Value proposition should be oriented to customer needs and problems",
        "Cost structure must always be minimised",
        "All customers must be treated as one segment",
        "Key partners must determine the value proposition"
      ],
      answer: 1,
      reason: "A business's value proposition should be oriented to customers' needs and problems rather than merely reflecting the capabilities of the business."
    }
  ]
},

{
  case_id: "SCM_c12_cs_004",
  difficulty: "Medium",
  case_topic: ["Value Proposition Canvas", "Customer Jobs", "Pains", "Gains"],
  case_chapter: "Chapter12",
  caseText: `
    <p>QuickCare Diagnostics operates a chain of diagnostic centres in several cities. Although the company has modern diagnostic equipment and qualified professionals, customer feedback indicated dissatisfaction with the overall service experience. Management initially believed that the problem could be solved by purchasing newer machines and expanding technical capabilities.</p>

    <p>A strategic consultant suggested that the company should instead prepare a Value Proposition Canvas. The company interviewed patients and identified several customer jobs. Patients wanted to schedule diagnostic tests easily, complete tests quickly, receive reliable reports and access reports without repeatedly visiting the diagnostic centre.</p>

    <p>The interviews also revealed several customer pains. Patients disliked long waiting periods, uncertainty regarding report availability, repeated visits to collect reports and unexpected charges. Some customers also experienced anxiety when reports were delayed.</p>

    <p>At the same time, customers identified several gains that they valued. These included quick appointments, predictable pricing, timely reports, digital access to reports and convenient communication regarding the status of their tests.</p>

    <p>QuickCare therefore redesigned its value proposition. It introduced online appointments, transparent pricing, digital reports and automated status notifications. Management also introduced a system to monitor turnaround time for different diagnostic tests.</p>

    <p>The company expected that matching the value proposition with the customer profile would improve customer satisfaction and strengthen its competitive position.</p>
  `,
  questions: [
    {
      question_id: "SCM_c12_cs_004_1",
      question: "In the Value Proposition Canvas, scheduling a diagnostic test easily represents a:",
      options: [
        "Customer Job",
        "Customer Gain",
        "Pain Reliever",
        "Revenue Stream"
      ],
      answer: 1,
      reason: "Customer Jobs describe the important tasks, needs or problems customers are trying to get done or resolve."
    },
    {
      question_id: "SCM_c12_cs_004_2",
      question: "Long waiting periods experienced by QuickCare customers represent:",
      options: [
        "Gain",
        "Pain",
        "Key Resource",
        "Channel"
      ],
      answer: 2,
      reason: "Pains describe anything that annoys customers before, during or after getting a job done, including unwanted costs, situations, negative emotions or risks."
    },
    {
      question_id: "SCM_c12_cs_004_3",
      question: "Digital access to reports is primarily an example of:",
      options: [
        "Customer Gain",
        "Customer Pain",
        "Key Partner",
        "Cost Driver"
      ],
      answer: 1,
      reason: "Gains describe outcomes or benefits that customers require, expect or desire."
    },
    {
      question_id: "SCM_c12_cs_004_4",
      question: "QuickCare's automated status notifications primarily act as:",
      options: [
        "Pain Relievers",
        "Customer Segments",
        "Key Partners",
        "Structural Cost Drivers"
      ],
      answer: 1,
      reason: "Pain relievers explain how products and services alleviate specific customer pains."
    },
    {
      question_id: "SCM_c12_cs_004_5",
      question: "If QuickCare's value proposition map matches the characteristics of its customer segment profile, the business has achieved:",
      options: [
        "Problem-solution fit",
        "Economies of scale",
        "Cost leadership automatically",
        "Industry equilibrium"
      ],
      answer: 1,
      reason: "A business achieves problem-solution fit when the features of its value proposition map perfectly match the characteristics of the customer segment profile."
    }
  ]
},

{
  case_id: "SCM_c12_cs_005",
  difficulty: "Medium",
  case_topic: ["Porter's Five Forces", "Industry Profitability", "Competition"],
  case_chapter: "Chapter12",
  caseText: `
    <p>UrbanRide operates an app-based urban transportation service. The industry has attracted several competitors offering similar services. Customers can compare fares through mobile applications and can switch between competing platforms with minimal effort. Most customers are highly price sensitive and frequently select the service offering the lowest fare combined with acceptable availability.</p>

    <p>UrbanRide's management noticed that several vehicle owners were registered with multiple platforms. Drivers could therefore choose the platform offering better incentives. At the same time, customers could easily shift to competitors. In addition to direct competitors, public transport, metro rail, taxis and other mobility options provided alternatives for urban commuters.</p>

    <p>The company also observed that technology platforms could be launched by new players if they could obtain sufficient funding, attract drivers and establish customer awareness. However, building a large network and achieving sufficient scale required substantial expenditure.</p>

    <p>Competition among existing platforms was intense. Competitors frequently offered discounts, promotional incentives and referral schemes. Since customers could switch easily, one company's promotional action often resulted in a response from competitors.</p>

    <p>The strategy team was asked to analyse the industry using Porter's Five Forces and determine whether the industry structure was likely to support high profitability. The team was specifically instructed not to examine only the company's internal costs but also the external competitive forces affecting industry profitability.</p>
  `,
  questions: [
    {
      question_id: "SCM_c12_cs_005_1",
      question: "The ability of UrbanRide customers to easily switch between platforms indicates:",
      options: [
        "High bargaining power of buyers",
        "Low bargaining power of buyers",
        "Low threat of substitutes",
        "Low rivalry"
      ],
      answer: 1,
      reason: "Low switching costs strengthen the bargaining power of buyers because customers can move easily between suppliers."
    },
    {
      question_id: "SCM_c12_cs_005_2",
      question: "Public transport and metro rail in this case primarily represent:",
      options: [
        "Suppliers",
        "Substitute products or services",
        "Existing employees",
        "Key resources"
      ],
      answer: 2,
      reason: "Alternatives satisfying the same underlying customer need, even when coming from another segment or industry, are substitutes."
    },
    {
      question_id: "SCM_c12_cs_005_3",
      question: "The possibility of technology platforms being launched by new competitors represents:",
      options: [
        "Bargaining power of suppliers",
        "Threat of new entrants",
        "Bargaining power of buyers",
        "Internal differentiation"
      ],
      answer: 2,
      reason: "Potential competitors entering an industry constitute the threat of new entrants."
    },
    {
      question_id: "SCM_c12_cs_005_4",
      question: "Frequent discounts and promotional responses among existing platforms primarily indicate:",
      options: [
        "Rivalry among existing firms",
        "Low buyer power",
        "Low substitution threat",
        "High supplier concentration"
      ],
      answer: 1,
      reason: "Competitive moves and countermoves among existing firms indicate rivalry. Greater rivalry generally reduces industry profitability."
    },
    {
      question_id: "SCM_c12_cs_005_5",
      question: "If all five forces become highly intense, the likely effect on industry profitability would be:",
      options: [
        "Industry profitability potential generally decreases",
        "Industry profitability must increase",
        "Competition disappears",
        "Switching costs automatically increase"
      ],
      answer: 1,
      reason: "Higher intensity of the five competitive forces generally results in lower potential industry profitability."
    }
  ]
},
{
  case_id: "SCM_c12_cs_006",
  difficulty: "Hard",
  case_topic: ["Strategic Positioning", "Cost Leadership", "Differentiation", "Value Chain"],
  case_chapter: "Chapter12",
  caseText: `
    <p>Orion Mobility Limited manufactures electric vehicles and operates in a rapidly evolving automobile industry. The company initially positioned itself as a low-cost manufacturer. Its strategy was based on reducing manufacturing costs, standardising components, increasing production volumes and negotiating aggressively with suppliers. Management believed that offering vehicles at a lower price than competitors would automatically provide sustainable competitive advantage.</p>

    <p>For several years, the strategy appeared successful. Orion achieved economies of scale and increased its market share among price-sensitive customers. However, the industry gradually changed. Customers began attaching greater importance to battery range, software capabilities, charging convenience, safety features, after-sales service and overall ownership experience. Several competitors began offering technologically advanced vehicles at premium prices.</p>

    <p>Orion's management faced a strategic dilemma. Some directors proposed further reduction of costs by reducing expenditure on research and development, customer support and dealer service facilities. Others argued that such reductions could weaken the company's long-term position because the activities being considered for reduction were becoming important sources of customer value.</p>

    <p>The Chief Strategy Officer therefore initiated a detailed Value Chain Analysis. The team identified inbound logistics, manufacturing operations, outbound logistics, marketing and sales, and after-sales service as primary activities. Technology development, human resource management, procurement and firm infrastructure were identified as support activities.</p>

    <p>The analysis revealed that Orion had a strong procurement system and efficient manufacturing processes. However, its software development capability and after-sales service network were weaker than those of its major competitors. Customers particularly complained about delays in service and software-related issues.</p>

    <p>The management concluded that cost leadership remained a possible strategic position, but blindly reducing expenditure in every activity could destroy customer value. The company therefore considered a hybrid approach in which efficiency would be retained in activities that supported cost leadership while additional resources would be deployed in strategically important activities capable of creating differentiation.</p>

    <p>The management also decided that its strategic position should be evaluated against relevant competitors operating in the same market segment rather than against every company in the broader automobile industry.</p>
  `,
  questions: [
    {
      question_id: "SCM_c12_cs_006_1",
      question: "Which statement best describes Orion's strategic positioning dilemma?",
      options: [
        "Strategic positioning requires choosing the kind of value to create and how to create it differently from rivals",
        "Strategic positioning means reducing every possible cost regardless of customer impact",
        "Strategic positioning is limited to analysing historical financial statements",
        "Strategic positioning requires charging the highest possible price in every market"
      ],
      answer: 1,
      reason: "Strategic positioning reflects choices regarding the kind of value a company creates and how that value is created differently from rivals. It should translate into differentiation or lower cost."
    },
    {
      question_id: "SCM_c12_cs_006_2",
      question: "If Orion continues to be the lowest-cost producer while maintaining acceptable quality, its strategy most closely represents:",
      options: [
        "Product differentiation",
        "Cost leadership",
        "Market segmentation only",
        "Vertical linkage"
      ],
      answer: 2,
      reason: "Cost leadership involves driving down costs while balancing price with acceptable quality and becoming the lowest-cost producer in the industry."
    },
    {
      question_id: "SCM_c12_cs_006_3",
      question: "If Orion invests in superior software, after-sales service and distinctive customer experience to command a premium price, it would primarily pursue:",
      options: [
        "Differentiation",
        "Cost containment",
        "Traditional cost management",
        "Backward integration only"
      ],
      answer: 1,
      reason: "Differentiation involves delivering distinctive value that customers perceive and are willing to pay for, with sources including innovation, quality and customer response."
    },
    {
      question_id: "SCM_c12_cs_006_4",
      question: "Which of the following represents a strategically dangerous decision for Orion?",
      options: [
        "Reducing waste in non-value-added activities",
        "Improving procurement efficiency",
        "Cutting strategically important after-sales activities merely to meet short-term cost targets",
        "Analysing the cost drivers of manufacturing"
      ],
      answer: 3,
      reason: "Strategic Cost Management does not advocate indiscriminate cost reduction. Cutting strategically important activities can reduce customer value and damage long-term competitive advantage."
    },
    {
      question_id: "SCM_c12_cs_006_5",
      question: "Orion's decision to compare its strategic position with relevant competitors operating in the same segment reflects the idea that:",
      options: [
        "Strategic positioning should be analysed relative to the strategic segment of the industry that matters",
        "All companies in the economy must be treated as direct competitors",
        "Only international competitors are relevant",
        "Internal cost data is sufficient for strategic positioning"
      ],
      answer: 1,
      reason: "Strategic Positioning Analysis examines the company's relative position within the strategic segment of the industry that matters for setting performance targets and attaining competitive advantage."
    }
  ]
},

{
  case_id: "SCM_c12_cs_007",
  difficulty: "Hard",
  case_topic: ["Cost Driver Analysis", "Structural Cost Drivers", "Executional Cost Drivers"],
  case_chapter: "Chapter12",
  caseText: `
    <p>Precision Components Limited manufactures specialised engineering components for industrial customers. The company historically allocated all factory overhead to products using machine hours. Management assumed that products consuming more machine hours should bear proportionately higher overhead costs.</p>

    <p>As the product portfolio expanded, however, significant differences emerged among products. Some products were manufactured in large batches with relatively simple designs, whereas others were produced in small batches requiring frequent design changes, quality inspections, engineering support and supplier coordination.</p>

    <p>The finance team observed that two products using approximately the same number of machine hours generated significantly different levels of supporting activities. One product required frequent production set-ups and design modifications, while another could be produced continuously with minimal intervention.</p>

    <p>The Chief Management Accountant argued that machine hours alone could no longer explain the company's long-term supporting costs. He proposed analysing the underlying cost drivers associated with the company's organisational and operational activities.</p>

    <p>The strategic review identified several structural characteristics affecting cost. These included the scale of production, the scope of products manufactured, the level of technology employed and the complexity of the product portfolio. The review also identified execution-related factors such as employee involvement, quality management, product design, manufacturing practices and relationships with suppliers and customers.</p>

    <p>Management realised that some structural decisions could create long-term cost consequences and that merely attempting to reduce the frequency of individual transactions would not necessarily address the underlying strategic cause of cost.</p>

    <p>The company therefore decided to redesign its cost analysis system so that relevant cost drivers could be identified according to the nature of the supporting costs and the activities causing them.</p>
  `,
  questions: [
    {
      question_id: "SCM_c12_cs_007_1",
      question: "Why is allocation based solely on machine hours potentially inappropriate for Precision Components?",
      options: [
        "Machine hours can never be a cost driver",
        "Different products may consume supporting activities differently even when machine hours are similar",
        "Machine hours are always qualitative",
        "Strategic Cost Management does not analyse overhead costs"
      ],
      answer: 2,
      reason: "Strategic Cost Management recognises that relevant cost drivers should reflect the activities causing supporting costs. Products with similar machine hours may consume other supporting activities very differently."
    },
    {
      question_id: "SCM_c12_cs_007_2",
      question: "Which of the following is most clearly a structural cost driver in the case?",
      options: [
        "Employee involvement",
        "Quality service",
        "Scale of operations",
        "Supplier relationship management"
      ],
      answer: 3,
      reason: "Structural cost drivers arise from strategic choices concerning the underlying economic structure, such as scale, scope, technology and product complexity."
    },
    {
      question_id: "SCM_c12_cs_007_3",
      question: "Which factor is most appropriately classified as an executional cost driver?",
      options: [
        "Scope of operations",
        "Scale of operations",
        "Product complexity",
        "Employee involvement"
      ],
      answer: 4,
      reason: "Executional cost drivers relate to how business activities are executed and include employee involvement, quality service, product design and manufacturing, and links with suppliers and clients."
    },
    {
      question_id: "SCM_c12_cs_007_4",
      question: "A product becoming increasingly complex due to the strategic decision to offer many variants is primarily associated with:",
      options: [
        "A structural cost driver",
        "Only a revenue stream",
        "A customer gain",
        "A channel decision"
      ],
      answer: 1,
      reason: "Complexity of products is specifically identified as a structural cost driver."
    },
    {
      question_id: "SCM_c12_cs_007_5",
      question: "The fundamental objective of Cost Driver Analysis is to:",
      options: [
        "Eliminate every activity that incurs cost",
        "Examine, quantify and explain the monetary effects of cost drivers associated with activities",
        "Allocate every cost equally among products",
        "Replace strategic positioning analysis"
      ],
      answer: 2,
      reason: "Cost Driver Analysis involves examination, quantification and explanation of the monetary effects of cost drivers associated with an activity."
    }
  ]
},

{
  case_id: "SCM_c12_cs_008",
  difficulty: "Hard",
  case_topic: ["Porter's Five Forces", "Industry Structure", "Industry Profitability", "Strategic Analysis"],
  case_chapter: "Chapter12",
  caseText: `
    <p>MedNova Devices Limited manufactures specialised medical devices used by hospitals. The company has historically enjoyed attractive margins because its products require regulatory approvals, specialised technical knowledge and significant investment in research and development. However, the management recently observed several changes in the competitive environment.</p>

    <p>Large hospital groups had begun consolidating their procurement activities. Instead of individual hospitals purchasing small quantities, hospital networks were negotiating centralised contracts involving substantial volumes. These hospital groups had access to detailed information about competing products and were increasingly demanding discounts and service commitments.</p>

    <p>On the supplier side, MedNova depended on a limited number of specialised component manufacturers. Certain components were technically critical and could not easily be replaced without redesigning the medical device and obtaining additional approvals. The suppliers therefore possessed considerable negotiating strength.</p>

    <p>Meanwhile, technological developments had created alternative treatment methods that could reduce the need for some of MedNova's devices. These alternatives were not identical products but could satisfy the underlying medical requirement in certain circumstances.</p>

    <p>The industry continued to have significant entry barriers because new entrants needed capital, regulatory approvals, specialised technology, trained personnel and access to established distribution channels. Nevertheless, several technology companies had expressed interest in entering the market.</p>

    <p>Finally, competition among established medical-device manufacturers was increasing. Companies were introducing new features, reducing prices and investing heavily in research and development. Some competitors had substantially larger scale and stronger brands.</p>

    <p>The strategy team was asked to determine which competitive force was most strategically important and whether the combined industry structure continued to justify the company's historical profitability.</p>
  `,
  questions: [
    {
      question_id: "SCM_c12_cs_008_1",
      question: "Centralised purchasing by large hospital groups is most likely to increase:",
      options: [
        "Bargaining power of buyers",
        "Bargaining power of suppliers",
        "Threat of substitutes only",
        "Exit barriers"
      ],
      answer: 1,
      reason: "Buyers purchasing large volumes relative to seller sales can possess significant bargaining power, particularly when they are concentrated and have access to information."
    },
    {
      question_id: "SCM_c12_cs_008_2",
      question: "The inability to easily replace specialised components strengthens:",
      options: [
        "Buyer power",
        "Supplier power",
        "Rivalry among buyers",
        "Threat of new entrants only"
      ],
      answer: 2,
      reason: "Supplier bargaining power is higher when replacement or alternate suppliers are not readily available and the supplier's product is an important input."
    },
    {
      question_id: "SCM_c12_cs_008_3",
      question: "Alternative treatment methods that satisfy the same underlying medical requirement illustrate:",
      options: [
        "Substitute products or services",
        "Key resources",
        "Customer relationships",
        "Executional cost drivers"
      ],
      answer: 1,
      reason: "Substitutes may come from different segments or industries if they satisfy the underlying customer need. They can put pressure on revenue or increase retention costs."
    },
    {
      question_id: "SCM_c12_cs_008_4",
      question: "Which factor would most directly reduce the immediate threat posed by new entrants?",
      options: [
        "Low switching costs for customers",
        "High capital requirements and regulatory barriers",
        "Availability of substitute treatments",
        "Large number of existing competitors"
      ],
      answer: 2,
      reason: "Capital requirements, government policy, access to distribution channels, switching costs, economies of scale and other barriers can restrict entry."
    },
    {
      question_id: "SCM_c12_cs_008_5",
      question: "If one of the five forces is substantially stronger than the others, its strategic significance is that:",
      options: [
        "The strongest force may govern and become crucial from the standpoint of strategy formulation",
        "The other four forces can always be ignored",
        "Industry profitability automatically becomes zero",
        "Only internal cost analysis is required"
      ],
      answer: 1,
      reason: "Porter's model recognises that all five forces jointly determine industry competition and profitability, but the strongest force or forces can govern and become crucial for strategy formulation."
    }
  ]
},

{
  case_id: "SCM_c12_cs_009",
  difficulty: "Hard",
  case_topic: ["Market Segmentation", "Basis of Competition", "Key Success Factors"],
  case_chapter: "Chapter12",
  caseText: `
    <p>EliteStay Hotels operates in the hospitality industry and historically attempted to serve almost every category of traveller. Its properties attracted business travellers, families, budget-conscious tourists, luxury travellers and customers seeking extended stays. Management believed that serving a broad market would maximise revenue and reduce dependence on any individual customer group.</p>

    <p>However, a strategic review showed that different customer groups had substantially different expectations. Business travellers valued reliable internet connectivity, location, quick check-in and efficient services. Families valued room configuration, safety, convenience and recreational facilities. Luxury travellers placed greater importance on personalised service, exclusivity and premium experiences. Budget travellers were primarily concerned with affordability and basic service reliability.</p>

    <p>The management concluded that treating all customers as one homogeneous market resulted in inefficient resource deployment. Marketing campaigns were not sufficiently targeted and certain facilities were valued highly by one customer group but were largely irrelevant to another.</p>

    <p>The company therefore conducted segmentation analysis. It examined demographic characteristics, lifestyles and values, purchasing behaviour and geographic factors. Management also considered the possibility of focusing on selected segments where the company possessed stronger capabilities.</p>

    <p>Further analysis revealed that in the premium business-travel segment, customers were particularly influenced by location, service reliability, check-in speed and digital convenience. The strategy team considered these factors to be potential Key Success Factors for that segment.</p>

    <p>The management then developed Key Performance Indicators to measure performance against these factors. For example, check-in time was selected as a KPI associated with service speed, while customer ratings and complaint-resolution time were used to evaluate service reliability.</p>

    <p>The management recognised that Key Success Factors were not permanent. Changes in technology, customer expectations and competitor strategies could alter the factors that determine success in the future.</p>
  `,
  questions: [
    {
      question_id: "SCM_c12_cs_009_1",
      question: "Business travellers, families, luxury travellers and budget travellers can be treated as different market segments because:",
      options: [
        "All customers necessarily have identical needs",
        "They have materially different characteristics and expectations",
        "Segmentation requires only geographic differences",
        "Segments must always have equal sizes"
      ],
      answer: 2,
      reason: "A market segment is a category of customers with similar likes and dislikes internally and which is different from other segments."
    },
    {
      question_id: "SCM_c12_cs_009_2",
      question: "Grouping customers based on lifestyle, values and attitudes is known as:",
      options: [
        "Demographic segmentation",
        "Psychographic segmentation",
        "Geographic segmentation",
        "Product segmentation"
      ],
      answer: 2,
      reason: "Psychographic segmentation is based on personality traits, values, attitudes, interests, lifestyles, beliefs, motivations and priorities."
    },
    {
      question_id: "SCM_c12_cs_009_3",
      question: "The factors that are critical to EliteStay's success in the premium business segment are best described as:",
      options: [
        "Key Success Factors",
        "Revenue Streams",
        "Customer Pains",
        "Structural Cost Drivers"
      ],
      answer: 1,
      reason: "Key Success Factors are factors critical to the success of an organisation in generating and sustaining competitive advantage in an industry or segment."
    },
    {
      question_id: "SCM_c12_cs_009_4",
      question: "If check-in time is a Key Success Factor and average time taken for check-in is measured, the average check-in time represents:",
      options: [
        "A Key Performance Indicator",
        "A customer segment",
        "A substitute",
        "A value proposition"
      ],
      answer: 1,
      reason: "KPIs are attached to Key Success Factors to measure the performance of the business organisation regarding the relevant CSF."
    },
    {
      question_id: "SCM_c12_cs_009_5",
      question: "Why should EliteStay periodically reassess its Key Success Factors?",
      options: [
        "Key Success Factors remain permanently unchanged",
        "Dynamic business environments can change customer expectations and industry conditions",
        "KPIs cannot be changed",
        "Segmentation becomes unnecessary after the first analysis"
      ],
      answer: 2,
      reason: "Under a dynamic business environment, Key Success Factors may change over time as industry conditions, technology, customer behaviour and competitive dynamics change."
    }
  ]
},

{
  case_id: "SCM_c12_cs_010",
  difficulty: "Hard",
  case_topic: ["Core Competencies", "Competitive Advantage", "Value Chain", "Strategic Cost Management"],
  case_chapter: "Chapter12",
  caseText: `
    <p>TechForge Systems began as a small engineering company specialising in precision sensors. Over time, it developed a sophisticated capability to design highly reliable sensing systems for harsh industrial environments. The company's engineers accumulated extensive knowledge regarding sensor design, calibration, software integration and performance testing.</p>

    <p>Several competitors attempted to replicate TechForge's products. Although they could purchase similar machinery and hire engineers with comparable qualifications, they found it difficult to reproduce the combination of technical knowledge, design experience, testing procedures and organisational learning that TechForge had developed over many years.</p>

    <p>TechForge's management initially regarded its specialised sensor technology as useful only within its existing industrial automation business. During a strategic review, however, the management realised that the same capability could potentially be applied to medical equipment, autonomous vehicles, environmental monitoring systems and specialised aerospace applications.</p>

    <p>The Chief Strategy Officer proposed that the company should conduct a Core Competencies Analysis. The analysis would determine whether the company's capabilities genuinely constituted core competencies and whether they could be leveraged across other value chains.</p>

    <p>The management assessed the capabilities against three parameters. First, the capability had to provide customer value that strongly influenced purchasing decisions. Second, competitors should find the capability difficult to imitate quickly enough to eliminate its competitive impact. Third, the capability should have sufficient breadth of application to open several potential markets rather than remaining restricted to a small niche.</p>

    <p>The review concluded that TechForge's sensing capability strongly influenced customers because reliability in harsh environments was critical. Competitors also faced considerable difficulty in reproducing the company's accumulated knowledge. Finally, the capability had potential applications across several industries.</p>

    <p>The Board therefore considered several strategic alternatives. It could further exploit the competency in its existing business, leverage it in other existing segments, use it to reconfigure existing value chains or develop entirely new value chains around the competency.</p>

    <p>The management accountant was asked to support the analysis by assessing the cost implications of these alternatives and determining whether investment in new applications could create sustainable competitive advantage rather than merely increasing expenditure.</p>
  `,
  questions: [
    {
      question_id: "SCM_c12_cs_010_1",
      question: "Which characteristic most strongly indicates that TechForge's sensing capability may be a core competency?",
      options: [
        "It is expensive to maintain",
        "It provides significant customer value and is difficult for competitors to imitate",
        "It is used by every company in the industry",
        "It requires a large administrative department"
      ],
      answer: 2,
      reason: "Core competency should provide meaningful customer value and be difficult to imitate, allowing the organisation to sustain its competitive position."
    },
    {
      question_id: "SCM_c12_cs_010_2",
      question: "The fact that TechForge's sensing capability can be applied in medical equipment, autonomous vehicles and aerospace demonstrates which test of core competency?",
      options: [
        "Relevance",
        "Difficulty of imitation",
        "Breadth of application",
        "Cost containment"
      ],
      answer: 3,
      reason: "Breadth of application means the competence should open up a good number of potential markets rather than being restricted to a small niche."
    },
    {
      question_id: "SCM_c12_cs_010_3",
      question: "If customers consider TechForge's reliability capability highly important while selecting suppliers, this satisfies the:",
      options: [
        "Relevance test",
        "Breadth test only",
        "Cost driver test",
        "Supplier power test"
      ],
      answer: 1,
      reason: "Relevance requires that the competence give customers something that strongly influences their choice of the product or service."
    },
    {
      question_id: "SCM_c12_cs_010_4",
      question: "Which of the following would NOT by itself establish that a capability is a core competency?",
      options: [
        "Customers strongly value it",
        "Competitors find it difficult to imitate",
        "It can be applied across several potential markets",
        "The company spends a large amount of money maintaining it"
      ],
      answer: 4,
      reason: "The three tests of core competency are relevance, difficulty of imitation and breadth of application. High expenditure alone does not establish core competency."
    },
    {
      question_id: "SCM_c12_cs_010_5",
      question: "Using the sensing capability to create entirely new value chains would represent which method of exploiting core competencies?",
      options: [
        "Only validating the competency in the current business",
        "Using core competencies to create new value chains",
        "Eliminating the competency from the current business",
        "Reducing all research expenditure"
      ],
      answer: 2,
      reason: "Core competencies can be exploited by validating them in the current business, leveraging them in other segments, reconfiguring existing value chains or using them to create new value chains."
    }
  ]
},
{
  case_id: "SCM_c12_cs_011",
  difficulty: "Medium",
  case_topic: ["Strategic Cost Management", "Cost Leadership", "Differentiation", "Cost Reduction"],
  case_chapter: "Chapter12",
  caseText: `
    <p>GreenBrew Beverages Limited manufactures packaged beverages and has operated successfully for more than a decade. The company originally competed mainly on the basis of price. Its management continuously reviewed manufacturing expenses, negotiated lower prices with suppliers and attempted to improve production efficiency. The finance department considered reduction in the cost per unit as the principal indicator of improvement.</p>

    <p>Over the last three years, however, the beverage market changed considerably. Customers became increasingly conscious of ingredients, packaging, convenience, brand image and environmental impact. Several competitors introduced premium products using recyclable packaging and differentiated flavours. Although these products were priced higher, they attracted customers who were willing to pay a premium for perceived additional value.</p>

    <p>GreenBrew initially responded by reducing prices further. The strategy generated additional sales volume but significantly reduced the contribution per unit. The marketing department warned that the company's low-price positioning was weakening its brand image. The research and development department proposed introducing healthier formulations and recyclable packaging, but the finance team was concerned that these changes would increase product cost.</p>

    <p>The Chief Executive Officer asked the management accountant to evaluate the situation from a strategic cost management perspective. The management accountant explained that increasing expenditure is not necessarily inconsistent with strategic cost management if the additional expenditure creates sufficient customer value and improves the strategic position of the organisation.</p>

    <p>The team therefore began analysing individual activities in the company's value chain. It examined procurement, production, packaging, distribution, marketing, customer service, technology development and human resource activities. It also examined whether certain costs could be eliminated without reducing customer value and whether additional expenditure on selected activities could support differentiation.</p>

    <p>The Board concluded that GreenBrew should not blindly pursue either the lowest cost or the highest product features. Instead, the company needed to understand the basis on which customers were choosing competing products and then align its cost structure with the chosen strategy.</p>
  `,
  questions: [
    {
      question_id: "SCM_c12_cs_011_1",
      question: "GreenBrew's earlier emphasis on reducing cost per unit primarily reflects which competitive strategy?",
      options: [
        "Differentiation",
        "Cost leadership",
        "Market segmentation",
        "Value shop strategy"
      ],
      answer: 2,
      reason: "Cost leadership involves driving down costs and becoming the lowest-cost producer while maintaining acceptable quality."
    },
    {
      question_id: "SCM_c12_cs_011_2",
      question: "If customers are willing to pay a premium for recyclable packaging and healthier formulations, GreenBrew may obtain competitive advantage through:",
      options: [
        "Differentiation",
        "Cost allocation only",
        "Short-term cost containment",
        "Reduction of customer value"
      ],
      answer: 1,
      reason: "Differentiation allows a company to command a premium price by providing distinctive value to customers."
    },
    {
      question_id: "SCM_c12_cs_011_3",
      question: "Why would additional expenditure on recyclable packaging potentially be consistent with Strategic Cost Management?",
      options: [
        "All additional expenditure automatically creates value",
        "Strategic Cost Management requires every cost to be eliminated",
        "Additional cost may be justified if it creates customer value and strengthens strategic position",
        "Strategic Cost Management ignores customer preferences"
      ],
      answer: 3,
      reason: "Strategic Cost Management does not mean simply reducing expenditure. Costs must be aligned with strategy, and additional expenditure may be justified where it creates sufficient customer value."
    },
    {
      question_id: "SCM_c12_cs_011_4",
      question: "Which activity would NOT be classified as a primary activity in Porter's Value Chain?",
      options: [
        "Marketing and sales",
        "Outbound logistics",
        "Human resource management",
        "Operations"
      ],
      answer: 3,
      reason: "Human resource management is a support activity. Primary activities include inbound logistics, operations, outbound logistics, marketing and sales, and after-sales service."
    },
    {
      question_id: "SCM_c12_cs_011_5",
      question: "The Board's decision to identify what actually influences customer choice is primarily relevant to determining:",
      options: [
        "The basis of competition",
        "The firm's accounting policy",
        "Historical cost",
        "Financial reporting standards"
      ],
      answer: 1,
      reason: "The basis of competition refers to the reason customers choose one business over its competitors and may involve price, features, quality, availability, style and other factors."
    }
  ]
},

{
  case_id: "SCM_c12_cs_012",
  difficulty: "Medium",
  case_topic: ["Value Chain Analysis", "Internal Cost Analysis", "Vertical Linkage"],
  case_chapter: "Chapter12",
  caseText: `
    <p>MetroCycle Limited manufactures electric bicycles and sells them through a network of dealers and online channels. The company had grown rapidly but its profitability had not increased in proportion to sales. The Board therefore commissioned a detailed analysis of the activities involved in creating and delivering the product.</p>

    <p>The management accountant first identified the major value-creating processes. These included receiving batteries and other components, assembling bicycles, testing finished products, storing them, distributing them to dealers, marketing the products and providing warranty and after-sales support.</p>

    <p>The review revealed that some suppliers delivered components in small and irregular batches. This resulted in additional inspection and handling requirements. At the manufacturing stage, frequent changes in product specifications caused repeated machine adjustments and additional testing. In distribution, several dealers maintained high levels of inventory because delivery schedules were unpredictable.</p>

    <p>The company also noticed that customers were increasingly concerned about battery reliability and after-sales support. Management therefore considered whether improving supplier relationships and coordinating activities across the supply chain could reduce cost while simultaneously improving customer value.</p>

    <p>The management accountant proposed identifying the cost associated with each value-creating process and identifying the cost driver for each process. The company also examined the links between procurement, production, distribution and after-sales service.</p>

    <p>Finally, the management considered extending its value chain analysis beyond the company's own boundaries. It proposed working more closely with suppliers and dealers so that improvements could be coordinated across the wider chain rather than being restricted to MetroCycle's internal operations.</p>
  `,
  questions: [
    {
      question_id: "SCM_c12_cs_012_1",
      question: "The first step in MetroCycle's Value Chain Analysis should be to:",
      options: [
        "Immediately eliminate all suppliers",
        "Identify the value chain activities",
        "Increase selling price",
        "Calculate only total profit"
      ],
      answer: 2,
      reason: "The first step in Value Chain Analysis is to identify the primary and support activities involved in creating the product or service."
    },
    {
      question_id: "SCM_c12_cs_012_2",
      question: "Identifying the portion of total product cost attributable to each value-creating process is part of:",
      options: [
        "Internal Cost Analysis",
        "Market segmentation",
        "STEEPLE analysis",
        "Core competency testing"
      ],
      answer: 1,
      reason: "Internal Cost Analysis includes determining the portion of total product cost attributed to each value-creating process."
    },
    {
      question_id: "SCM_c12_cs_012_3",
      question: "Studying the links between procurement, production and distribution helps the company:",
      options: [
        "Ignore suppliers",
        "Identify relationships between value chain activities",
        "Eliminate all support activities",
        "Avoid customer analysis"
      ],
      answer: 2,
      reason: "Internal Cost Analysis includes identifying links between processes, while value chain analysis considers how activities interact to create cost and value."
    },
    {
      question_id: "SCM_c12_cs_012_4",
      question: "Extending the value chain analysis to suppliers and dealers is an example of:",
      options: [
        "Vertical Linkage Analysis",
        "Demographic segmentation",
        "Psychographic segmentation",
        "Revenue stream analysis"
      ],
      answer: 1,
      reason: "Vertical Linkage Analysis creates an extendable organisation by extending the value chain across suppliers and users."
    },
    {
      question_id: "SCM_c12_cs_012_5",
      question: "If MetroCycle identifies battery inspection frequency as a major cause of supporting cost, it should examine it as:",
      options: [
        "A customer segment",
        "A cost driver",
        "A revenue stream",
        "A stakeholder group"
      ],
      answer: 2,
      reason: "A cost driver is the unit of an activity that causes costs to be incurred and acts as a trigger for changes in cost."
    }
  ]
},

{
  case_id: "SCM_c12_cs_013",
  difficulty: "Medium",
  case_topic: ["STEEPLE", "External Environment", "Strategic Positioning"],
  case_chapter: "Chapter12",
  caseText: `
    <p>SolarGrid Energy Limited manufactures equipment used in renewable energy projects. The company operates in a rapidly changing environment in which government policy, technology, economic conditions, environmental concerns and customer expectations frequently change.</p>

    <p>During the current year, the government introduced new incentives for renewable energy installations. At the same time, changes in import regulations affected the cost of certain components sourced from overseas suppliers. Interest rates also increased, raising the financing cost of large infrastructure projects.</p>

    <p>Technological developments resulted in more efficient solar panels and energy-storage systems. Some technologies reduced the demand for older products manufactured by SolarGrid, while other developments created new opportunities for the company.</p>

    <p>Environmental awareness among customers also increased. Large corporate customers began considering the environmental impact of their suppliers and demanded greater transparency regarding sourcing and manufacturing practices.</p>

    <p>Management recognised that many of these factors were beyond the company's direct control. Nevertheless, they could materially affect the company's opportunities, threats, costs and strategic position.</p>

    <p>The strategy team therefore decided to conduct a systematic external environment analysis. It also planned to combine the external analysis with internal analysis of the company's resources, capabilities and core competencies before finalising the strategic plan.</p>
  `,
  questions: [
    {
      question_id: "SCM_c12_cs_013_1",
      question: "Government incentives for renewable energy are primarily an element of:",
      options: [
        "Remote external environment",
        "Internal environment",
        "Customer relationship",
        "Key resources"
      ],
      answer: 1,
      reason: "Political and government-related factors form part of the remote external environment and may create opportunities or threats."
    },
    {
      question_id: "SCM_c12_cs_013_2",
      question: "The systematic framework that includes Social, Technological, Economic, Environmental, Political, Legal and Ethical factors is:",
      options: [
        "SWOT",
        "STEEPLE",
        "VRIO",
        "BCG Matrix"
      ],
      answer: 2,
      reason: "STEEPLE includes Social, Technological, Economic, Environmental, Political, Legal and Ethical factors."
    },
    {
      question_id: "SCM_c12_cs_013_3",
      question: "A new technology that makes SolarGrid's existing products obsolete represents primarily:",
      options: [
        "An opportunity only",
        "A threat",
        "A key resource",
        "A customer gain"
      ],
      answer: 2,
      reason: "External factors can create opportunities or threats. Technology can threaten an existing product if the firm fails to adapt."
    },
    {
      question_id: "SCM_c12_cs_013_4",
      question: "Why should SolarGrid combine external environment analysis with internal analysis?",
      options: [
        "Strategic position depends only on external factors",
        "Strategic position considers external environment along with resources, capabilities and stakeholder expectations",
        "Internal analysis is relevant only for accounting purposes",
        "External analysis eliminates the need for strategy"
      ],
      answer: 2,
      reason: "Strategic position is understood through the impact of the external environment, internal resources and competences, and stakeholder expectations."
    },
    {
      question_id: "SCM_c12_cs_013_5",
      question: "Changes in import regulations affecting component costs are best viewed as:",
      options: [
        "An external factor that may create opportunities, threats or constraints",
        "A direct internal cost driver only",
        "A customer gain",
        "A support activity"
      ],
      answer: 1,
      reason: "External environmental factors are beyond the control of an individual organisation but can influence its performance and strategic position."
    }
  ]
},

{
  case_id: "SCM_c12_cs_014",
  difficulty: "Medium",
  case_topic: ["Market Segmentation", "Demographic", "Behavioural", "Geographic Segmentation"],
  case_chapter: "Chapter12",
  caseText: `
    <p>StyleNest Apparel Limited sells clothing through physical stores and an online platform. Initially, the company treated its entire customer base as one market and launched similar advertising campaigns for all customers. Although sales were reasonable, management noticed that customer responses differed significantly across locations and customer groups.</p>

    <p>The marketing team collected customer information and found that younger customers preferred casual and trend-oriented clothing, while older customers showed greater interest in traditional and formal clothing. Families with children frequently purchased bundled clothing products, whereas individual customers purchased smaller quantities but more frequently.</p>

    <p>The company also found significant geographical differences. Customers in metropolitan cities showed stronger demand for premium products, while customers in smaller towns were more price sensitive. Climate differences also influenced demand for certain categories of clothing.</p>

    <p>Customer purchasing behaviour also varied. Some customers made frequent purchases and responded strongly to loyalty programmes, while others purchased only during seasonal discounts. The company considered creating separate marketing strategies for these groups.</p>

    <p>Management recognised that a market segment should not merely be a random group of customers. The segment should be internally homogeneous, externally heterogeneous, clearly identifiable, of reasonable size and responsive to marketing offerings.</p>

    <p>The company therefore planned to redesign its marketing strategy based on a combination of segmentation bases and then select the segments that were strategically attractive and consistent with the company's capabilities.</p>
  `,
  questions: [
    {
      question_id: "SCM_c12_cs_014_1",
      question: "Grouping customers according to age and family situation is primarily:",
      options: [
        "Demographic segmentation",
        "Behavioural segmentation",
        "Geographic segmentation",
        "Psychographic segmentation"
      ],
      answer: 1,
      reason: "Demographic segmentation uses characteristics such as age, gender, family situation and education."
    },
    {
      question_id: "SCM_c12_cs_014_2",
      question: "Differences in demand between metropolitan cities and smaller towns illustrate:",
      options: [
        "Geographic segmentation",
        "Product segmentation",
        "Behavioural segmentation",
        "Psychographic segmentation"
      ],
      answer: 1,
      reason: "Geographic segmentation is based on factors such as city, country, climate, ZIP code and urban/rural characteristics."
    },
    {
      question_id: "SCM_c12_cs_014_3",
      question: "Customers who frequently purchase products and respond strongly to loyalty programmes may be grouped using:",
      options: [
        "Behavioural segmentation",
        "Geographic segmentation",
        "Product segmentation",
        "Demographic segmentation"
      ],
      answer: 1,
      reason: "Behavioural segmentation considers purchasing habits, spending habits, status and brand interactions."
    },
    {
      question_id: "SCM_c12_cs_014_4",
      question: "Which characteristic requires members within a segment to have similar relevant characteristics?",
      options: [
        "Internal homogeneity",
        "External homogeneity",
        "Unlimited size",
        "Non-responsiveness"
      ],
      answer: 1,
      reason: "A segment should be homogeneous internally in terms of its relevant characteristics."
    },
    {
      question_id: "SCM_c12_cs_014_5",
      question: "Why must a market segment be responsive to marketing offerings?",
      options: [
        "Because segmentation is useful only if identified groups respond to targeted marketing efforts",
        "Because all customers must respond identically",
        "Because responsiveness eliminates the need for targeting",
        "Because every segment must have the same profitability"
      ],
      answer: 1,
      reason: "A segment must be responsive, meaning it should react to marketing offerings, so that specific marketing efforts can be meaningfully directed toward it."
    }
  ]
},

{
  case_id: "SCM_c12_cs_015",
  difficulty: "Medium",
  case_topic: ["Business Model Canvas", "Key Activities", "Key Resources", "Cost Structure"],
  case_chapter: "Chapter12",
  caseText: `
    <p>FreshBox operates an online grocery delivery platform serving customers in several cities. The business model was initially developed around a simple proposition of delivering groceries to customers' homes. As competition increased, management realised that merely having an online ordering facility was insufficient to maintain its position.</p>

    <p>The company mapped its business model using Osterwalder's Business Model Canvas. It identified customers living in urban areas as its principal customer segment and convenience, reliable delivery and access to a wide range of products as major elements of its value proposition.</p>

    <p>FreshBox relied on warehouses, delivery personnel, software systems and inventory management technology as important resources. Its key activities included order processing, inventory management, supplier coordination, technology development and delivery operations.</p>

    <p>The company also depended on several external parties. Farmers, distributors, payment providers and logistics partners supplied resources or performed activities necessary for the business model to operate.</p>

    <p>Revenue was generated through product sales and selected delivery-related charges. Major costs included warehouse expenses, delivery personnel, technology infrastructure, product handling and customer acquisition.</p>

    <p>The management accountant was asked to examine whether the company's cost structure was aligned with its value proposition and whether some key activities could be redesigned without damaging customer value.</p>
  `,
  questions: [
    {
      question_id: "SCM_c12_cs_015_1",
      question: "Warehouses and delivery personnel identified as critical assets are examples of:",
      options: [
        "Key Resources",
        "Customer Segments",
        "Revenue Streams",
        "Channels only"
      ],
      answer: 1,
      reason: "Key Resources describe the most important assets required for the business model, including man, material, machine, method and money."
    },
    {
      question_id: "SCM_c12_cs_015_2",
      question: "Supplier coordination and order processing primarily fall under:",
      options: [
        "Key Activities",
        "Customer Gains",
        "Revenue Streams",
        "Customer Segments"
      ],
      answer: 1,
      reason: "Key Activities describe the most important things a business must do to deliver its value proposition and operate its business model."
    },
    {
      question_id: "SCM_c12_cs_015_3",
      question: "Farmers, distributors and payment providers would generally be included under:",
      options: [
        "Key Partners",
        "Customer Relationships",
        "Value Proposition",
        "Cost Drivers only"
      ],
      answer: 1,
      reason: "Key Partners include suppliers and channel partners who make the business model work."
    },
    {
      question_id: "SCM_c12_cs_015_4",
      question: "Warehouse expenses and delivery personnel costs are primarily relevant to which Business Model Canvas element?",
      options: [
        "Cost Structure",
        "Customer Segment",
        "Value Proposition",
        "Channel"
      ],
      answer: 1,
      reason: "Cost Structure includes the expenses required to operate the business, perform activities, host partners and own resources."
    },
    {
      question_id: "SCM_c12_cs_015_5",
      question: "The management accountant's review of whether costs support the value proposition demonstrates that the Business Model Canvas:",
      options: [
        "Connects cost-related elements with revenue and value proposition elements",
        "Deals only with marketing",
        "Deals only with accounting records",
        "Eliminates the need for strategic analysis"
      ],
      answer: 1,
      reason: "The Business Model Canvas connects cost-related elements such as key partners, activities, resources and cost structure with revenue-related elements through the value proposition."
    }
  ]
},
{
  case_id: "SCM_c12_cs_016",
  difficulty: "Hard",
  case_topic: ["Value Proposition Canvas", "Problem-Solution Fit", "Product-Market Fit"],
  case_chapter: "Chapter12",
  caseText: `
    <p>MedAssist Technologies developed a digital platform intended to help patients manage their healthcare appointments and medical records. The founders initially believed that customers would value the platform primarily because of its sophisticated artificial intelligence engine. Considerable resources were therefore invested in developing predictive analytics, complex dashboards and multiple technical features.</p>

    <p>After launching the platform, however, customer adoption was significantly below expectations. Users downloaded the application but many stopped using it after a short period. Management initially concluded that additional technical features were required and planned another major investment in artificial intelligence capabilities.</p>

    <p>A strategic consultant recommended that the company stop adding features temporarily and conduct detailed customer interviews. The interviews revealed that patients were facing several practical difficulties. They wanted to find available appointments quickly, avoid repeated phone calls, receive reminders, obtain medical records without visiting hospitals repeatedly and understand the status of their appointments.</p>

    <p>Customers also identified several pains. They disliked waiting for appointments, losing track of medical documents, receiving unclear communication from hospitals and paying unexpected administrative charges. Some customers experienced anxiety when appointments were cancelled without timely information.</p>

    <p>The customers identified several desired gains, including convenience, predictable costs, quick confirmation, easy access to records and reliable communication.</p>

    <p>MedAssist therefore redesigned its Value Proposition Canvas. It classified appointment scheduling and record management as customer jobs. It identified waiting, uncertainty and repeated hospital visits as pains. It identified convenience, time savings and reliable communication as gains.</p>

    <p>The company then mapped its products and services against these customer characteristics. Automated reminders and appointment tracking were designed as pain relievers, while instant digital access and simplified scheduling were designed as gain creators.</p>

    <p>After several iterations, customer feedback indicated that the redesigned offering closely matched the problems identified during interviews. However, the management recognised that achieving a good conceptual match was not by itself sufficient. The market would have to validate the proposition through actual customer adoption and traction.</p>
  `,
  questions: [
    {
      question_id: "SCM_c12_cs_016_1",
      question: "MedAssist's initial mistake of focusing heavily on AI capabilities rather than customer problems demonstrates that:",
      options: [
        "Value propositions should be oriented to customer needs and problems rather than merely business capabilities",
        "Technology can never form part of a value proposition",
        "Customers never value convenience",
        "A business should always minimise technology expenditure"
      ],
      answer: 1,
      reason: "The Value Proposition should be oriented to customers' needs and problems rather than merely reflecting what the business is capable of producing."
    },
    {
      question_id: "SCM_c12_cs_016_2",
      question: "The customer's need to obtain medical records without repeatedly visiting hospitals represents:",
      options: [
        "Customer Job",
        "Customer Pain",
        "Gain Creator",
        "Cost Structure"
      ],
      answer: 1,
      reason: "A Customer Job is an important issue, task or need that customers are trying to solve or complete."
    },
    {
      question_id: "SCM_c12_cs_016_3",
      question: "Uncertainty caused by appointment cancellations primarily represents:",
      options: [
        "Customer Pain",
        "Customer Gain",
        "Key Activity",
        "Revenue Stream"
      ],
      answer: 1,
      reason: "Pains include negative situations, emotions, risks and other aspects that annoy customers before, during or after getting a job done."
    },
    {
      question_id: "SCM_c12_cs_016_4",
      question: "Automated reminders and appointment tracking are best classified as:",
      options: [
        "Pain Relievers",
        "Customer Jobs",
        "Key Resources",
        "Channels"
      ],
      answer: 1,
      reason: "Pain Relievers explain how products and services alleviate specific customer pains."
    },
    {
      question_id: "SCM_c12_cs_016_5",
      question: "If the value proposition map matches the customer profile but the market has not yet validated the proposition through actual customer traction, the company has:",
      options: [
        "Problem-solution fit but not necessarily product-market fit",
        "Product-market fit automatically",
        "Cost leadership automatically",
        "A core competency automatically"
      ],
      answer: 1,
      reason: "Problem-solution fit occurs when the value proposition map matches the customer segment profile. Product-market fit requires market validation and traction with real customers."
    }
  ]
},

{
  case_id: "SCM_c12_cs_017",
  difficulty: "Hard",
  case_topic: ["Porter's Five Forces", "Entry Barriers", "Exit Barriers", "Industry Profitability"],
  case_chapter: "Chapter12",
  caseText: `
    <p>SkyLink Cargo operates in the air-freight transportation industry. The industry requires substantial investment in aircraft, specialised equipment, technology systems, trained personnel and regulatory compliance. Several established players operate large fleets and have developed long-term relationships with major customers.</p>

    <p>SkyLink's strategic team observed that economies of scale were significant. Larger operators could spread fixed costs over greater volumes and negotiate favourable terms with airports, fuel suppliers and service providers. New entrants therefore faced difficulty competing with established companies on cost.</p>

    <p>However, the company noticed that several new technology-driven logistics companies were considering entering the market by using asset-light models and outsourcing several activities. These companies intended to use digital platforms to coordinate capacity from existing operators rather than immediately purchasing aircraft.</p>

    <p>On the customer side, major e-commerce companies accounted for a substantial proportion of air-freight demand. These customers negotiated aggressively and had detailed information about prices, delivery performance and service quality. They could shift volumes between providers if service levels deteriorated or prices became unattractive.</p>

    <p>On the supplier side, aircraft manufacturers and specialised aviation service providers were relatively concentrated. Fuel was also a major cost, and airlines had limited ability to control international fuel prices.</p>

    <p>Alternative modes such as road and rail transportation could replace air freight for certain routes, particularly where delivery urgency was lower. Technological improvements in logistics planning also made these alternatives more competitive.</p>

    <p>Competition among existing air-freight companies was intense. High fixed costs meant that operators had an incentive to maintain capacity utilisation. During periods of weak demand, excess capacity resulted in aggressive pricing.</p>

    <p>The strategy team concluded that entry barriers were substantial, but the industry could still face significant profitability pressure because several other forces were strong. It therefore decided to assess the strongest competitive force rather than assuming that high entry barriers alone guaranteed attractive profitability.</p>
  `,
  questions: [
    {
      question_id: "SCM_c12_cs_017_1",
      question: "Economies of scale and substantial capital requirements primarily act as:",
      options: [
        "Barriers to entry",
        "Customer gains",
        "Revenue streams",
        "Executional cost drivers"
      ],
      answer: 1,
      reason: "Economies of scale and capital requirements are important sources of barriers to entry."
    },
    {
      question_id: "SCM_c12_cs_017_2",
      question: "The ability of major e-commerce customers to shift volumes between providers indicates:",
      options: [
        "High bargaining power of buyers",
        "Low buyer power",
        "Low rivalry",
        "High exit barriers only"
      ],
      answer: 1,
      reason: "Low switching costs and concentrated buyers purchasing significant volumes can increase bargaining power."
    },
    {
      question_id: "SCM_c12_cs_017_3",
      question: "The concentration of aircraft manufacturers and specialised service providers suggests:",
      options: [
        "Higher bargaining power of suppliers",
        "Lower bargaining power of suppliers",
        "Lower threat of substitutes",
        "Lower rivalry"
      ],
      answer: 1,
      reason: "Supplier power is stronger where suppliers are concentrated and buyers have limited alternatives."
    },
    {
      question_id: "SCM_c12_cs_017_4",
      question: "Road and rail transportation for routes where urgency is lower represent:",
      options: [
        "Substitute services",
        "New entrants",
        "Key partners",
        "Support activities"
      ],
      answer: 1,
      reason: "Substitutes are alternative products or services that satisfy the underlying customer need and may come from another industry or segment."
    },
    {
      question_id: "SCM_c12_cs_017_5",
      question: "Why can SkyLink not conclude that high entry barriers alone guarantee high industry profitability?",
      options: [
        "Industry profitability is jointly determined by all five competitive forces",
        "Entry barriers have no relationship with profitability",
        "Only suppliers determine profitability",
        "Only customer segmentation determines profitability"
      ],
      answer: 1,
      reason: "All five competitive forces jointly determine industry competition and profitability. A strong force such as buyers, suppliers, substitutes or rivalry can limit returns despite high entry barriers."
    }
  ]
},

{
  case_id: "SCM_c12_cs_018",
  difficulty: "Hard",
  case_topic: ["Core Competencies", "Competitive Advantage", "Resources", "Capabilities"],
  case_chapter: "Chapter12",
  caseText: `
    <p>AutoSense Technologies began as a supplier of electronic components to automobile manufacturers. Over a period of fifteen years, the company developed specialised expertise in designing highly reliable sensors that could operate under extreme temperature, vibration and environmental conditions.</p>

    <p>Initially, management viewed its sensor technology as simply one of many products in its portfolio. However, the company's engineers gradually developed proprietary testing methods, accumulated extensive data regarding sensor performance and established close collaboration mechanisms with vehicle manufacturers.</p>

    <p>Several competitors attempted to replicate AutoSense's products. They acquired similar equipment and recruited engineers with relevant qualifications. Nevertheless, their products continued to experience higher failure rates under extreme conditions. AutoSense's management believed that the source of its advantage was not any single machine or employee but the combination of accumulated knowledge, organisational processes, engineering experience and supplier relationships.</p>

    <p>The company subsequently examined whether this capability could be applied outside traditional automobile components. The strategy team identified possible applications in industrial robotics, medical equipment, aerospace systems and environmental monitoring.</p>

    <p>Management therefore conducted a Core Competency Analysis. It asked whether the capability created something customers strongly valued, whether competitors could imitate it quickly and whether the capability could be applied across a sufficiently broad range of markets.</p>

    <p>The analysis showed that reliability under extreme conditions was highly valued by customers. Competitors found it difficult to replicate AutoSense's accumulated expertise quickly. The company also identified several industries in which the same capability could potentially create significant value.</p>

    <p>The Board then considered how to exploit the competency. Options included strengthening the existing automobile business, entering additional segments, reconfiguring existing value chains and creating new value chains around the company's technical capability.</p>

    <p>The management accountant was asked to determine whether the additional investments required for these alternatives were strategically justified and whether the proposed expansion would create sustainable competitive advantage rather than merely increase the company's cost base.</p>
  `,
  questions: [
    {
      question_id: "SCM_c12_cs_018_1",
      question: "AutoSense's capability is more appropriately regarded as a capability rather than merely a physical resource because:",
      options: [
        "It represents the ability to coordinate knowledge, processes and resources to create value",
        "It consists only of machinery",
        "It is necessarily owned by suppliers",
        "It represents a financial liability"
      ],
      answer: 1,
      reason: "Core competencies can arise from resources and capabilities. Capabilities refer to the ability to coordinate resources and make optimal use of them."
    },
    {
      question_id: "SCM_c12_cs_018_2",
      question: "The fact that customers strongly value reliability under extreme conditions satisfies which core competency test?",
      options: [
        "Relevance",
        "Breadth of application",
        "Cost allocation",
        "Supplier concentration"
      ],
      answer: 1,
      reason: "The relevance test requires that the competence give customers something that strongly influences their choice."
    },
    {
      question_id: "SCM_c12_cs_018_3",
      question: "Competitors' inability to quickly reproduce AutoSense's accumulated expertise relates to:",
      options: [
        "Difficulty of imitation",
        "Market segmentation",
        "Revenue stream",
        "Customer relationship"
      ],
      answer: 1,
      reason: "A core competence should be difficult to imitate, enabling the organisation to sustain its competitive position."
    },
    {
      question_id: "SCM_c12_cs_018_4",
      question: "Potential application of AutoSense's capability in aerospace, medical equipment and robotics primarily demonstrates:",
      options: [
        "Breadth of application",
        "Low supplier power",
        "Cost leadership",
        "Customer pain"
      ],
      answer: 1,
      reason: "Breadth of application requires the competence to open up a good number of potential markets."
    },
    {
      question_id: "SCM_c12_cs_018_5",
      question: "Which of the following is NOT listed as a method of exploiting core competencies?",
      options: [
        "Validating the competency in the current business",
        "Leveraging competencies in other existing business segments",
        "Using competencies to reconfigure existing value chains",
        "Automatically eliminating all existing value chains"
      ],
      answer: 4,
      reason: "Core competencies can be validated in the current business, leveraged in other segments, used to reconfigure existing value chains, or used to create new value chains."
    }
  ]
},

{
  case_id: "SCM_c12_cs_019",
  difficulty: "Hard",
  case_topic: ["Business Model Canvas", "Value Proposition Canvas", "Strategic Cost Management", "Cost Drivers"],
  case_chapter: "Chapter12",
  caseText: `
    <p>LearnSphere Education Limited operates a subscription-based digital learning platform for professional students. The company experienced rapid growth during its first two years, but its profitability remained weak despite a substantial increase in subscribers.</p>

    <p>The management initially assumed that the problem was caused by excessive marketing expenditure. It therefore reduced advertising expenditure significantly. Subscriber acquisition slowed, but profitability did not improve substantially. The Board then asked the management accountant to conduct a strategic review of the complete business model.</p>

    <p>The review began with the Business Model Canvas. LearnSphere identified professional students as its customer segment and examination-oriented learning, chapter-wise practice and performance tracking as its value proposition. Its primary channels were its website and mobile application.</p>

    <p>Customer interviews revealed that students particularly valued reliable content, realistic examination practice, quick doubt resolution and easy access to performance reports. Customers complained about delayed responses to queries and difficulty finding relevant practice material.</p>

    <p>The company then mapped the customer profile using the Value Proposition Canvas. Difficulty in finding relevant questions and delayed responses were treated as customer pains. Completing examination preparation efficiently and receiving timely feedback were identified as important customer jobs and desired gains.</p>

    <p>The management then examined the cost structure. It found that content development, software hosting, customer support and technology maintenance represented significant costs. More importantly, some customer segments generated disproportionately high support costs because they required frequent assistance.</p>

    <p>The management accountant proposed analysing cost drivers rather than simply reducing the overall support budget. The team examined the frequency of customer queries, number of support interactions and complexity of technical issues.</p>

    <p>Management concluded that reducing customer support indiscriminately could damage the value proposition. Instead, it considered improving the self-service knowledge system, redesigning the application interface and deploying technology to reduce avoidable support interactions while maintaining service quality.</p>
  `,
  questions: [
    {
      question_id: "SCM_c12_cs_019_1",
      question: "LearnSphere's professional students are primarily represented in the Business Model Canvas by:",
      options: [
        "Customer Segments",
        "Key Resources",
        "Key Partners",
        "Cost Structure"
      ],
      answer: 1,
      reason: "Customer Segments identify the customers of the business and the reasons they buy from it."
    },
    {
      question_id: "SCM_c12_cs_019_2",
      question: "Delayed responses to customer queries represent which element of the Value Proposition Canvas?",
      options: [
        "Customer Pain",
        "Customer Gain",
        "Key Activity",
        "Revenue Stream"
      ],
      answer: 1,
      reason: "A customer pain is anything that annoys the customer or creates an unwanted situation, cost, negative emotion or risk."
    },
    {
      question_id: "SCM_c12_cs_019_3",
      question: "The frequency of customer support interactions identified as causing support cost is best viewed as:",
      options: [
        "A cost driver",
        "A customer segment",
        "A value proposition",
        "A key partner"
      ],
      answer: 1,
      reason: "A cost driver is an activity unit that causes costs to be incurred. Greater frequency of the relevant activity can result in higher cost."
    },
    {
      question_id: "SCM_c12_cs_019_4",
      question: "Why could indiscriminate reduction in customer support be strategically harmful?",
      options: [
        "It may reduce a component of customer value and weaken differentiation",
        "Customer support can never create value",
        "All support costs are structural cost drivers",
        "Cost reduction always reduces profitability"
      ],
      answer: 1,
      reason: "Strategic Cost Management requires costs to be aligned with strategy. Reducing an activity that customers value can weaken the firm's strategic position."
    },
    {
      question_id: "SCM_c12_cs_019_5",
      question: "LearnSphere's proposed self-service system and interface redesign primarily seek to:",
      options: [
        "Reduce avoidable cost while preserving customer value",
        "Eliminate the Value Proposition Canvas",
        "Increase every cost driver",
        "Remove customer segmentation"
      ],
      answer: 1,
      reason: "Strategic Cost Management aims to reduce costs while maintaining or improving customer value and strategic position. Redesigning processes can reduce avoidable support costs without blindly cutting valuable service."
    }
  ]
},

{
  case_id: "SCM_c12_cs_020",
  difficulty: "Hard",
  case_topic: ["Strategic Cost Management", "Traditional Cost Management", "Cost Leadership", "Differentiation", "Strategic Emphasis"],
  case_chapter: "Chapter12",
  caseText: `
    <p>PrimeGear Tools Limited manufactures professional power tools for construction companies and individual users. The company operates two major product categories. The first category consists of standard tools sold primarily on price and availability. The second category consists of premium professional tools offering advanced durability, specialised design and extended after-sales support.</p>

    <p>Historically, PrimeGear used the same cost management system for both categories. Standard costs were established annually, overheads were closely monitored and departmental managers were evaluated primarily on their ability to meet budgetary targets. Competitor cost information was collected only occasionally.</p>

    <p>The premium product division increasingly complained that the traditional system encouraged managers to reduce expenditure even where additional expenditure was necessary to improve product design, service quality and customer relationships. The division argued that customers purchasing professional tools were less concerned with the lowest possible price and more concerned with reliability, durability, performance and after-sales support.</p>

    <p>In contrast, managers in the standard product division argued that tight cost control, flexible budgeting and competitor cost information were essential because their products competed heavily on price.</p>

    <p>The Chief Financial Officer therefore proposed that the organisation should recognise that the strategic emphasis of cost management may differ according to the competitive strategy being followed. He asked the management accountant to compare the relative importance of various cost management aspects under product differentiation and cost leadership.</p>

    <p>The review showed that standard performance costs and flexible budgeting were particularly important for the cost leadership division. Competitor cost analysis and product cost as an input to pricing decisions were also considered highly relevant. In the premium division, however, marketing cost analysis and customer value were considered much more critical to strategic success, while standard performance costs were relatively less important.</p>

    <p>The Board concluded that a single undifferentiated cost management approach could result in inappropriate decisions. It decided that cost information should be interpreted in the context of the strategy being pursued by each product division.</p>
  `,
  questions: [
    {
      question_id: "SCM_c12_cs_020_1",
      question: "For PrimeGear's standard product division competing primarily on price, standard performance costs are:",
      options: [
        "Relatively very important",
        "Not relevant at all",
        "Less important than marketing costs in every situation",
        "Unrelated to cost leadership"
      ],
      answer: 1,
      reason: "Under cost leadership, the role of standard performance costs in assessing performance is very important."
    },
    {
      question_id: "SCM_c12_cs_020_2",
      question: "Which aspect is particularly critical under a product differentiation strategy?",
      options: [
        "Marketing cost analysis",
        "Only standard performance costs",
        "Only competitor cost analysis",
        "Only production volume"
      ],
      answer: 1,
      reason: "Marketing cost analysis is critical to success under product differentiation because customer perception and value creation are important."
    },
    {
      question_id: "SCM_c12_cs_020_3",
      question: "Under cost leadership, competitor cost analysis is generally:",
      options: [
        "Highly important",
        "Completely irrelevant",
        "Relevant only to service firms",
        "Prohibited"
      ],
      answer: 1,
      reason: "Competitor cost analysis is highly important under cost leadership because the firm seeks to compete through lower cost."
    },
    {
      question_id: "SCM_c12_cs_020_4",
      question: "Why is PrimeGear's decision to apply different cost management emphasis to different divisions strategically appropriate?",
      options: [
        "The importance of cost management aspects depends on the competitive strategy being pursued",
        "Every division must use identical strategic priorities",
        "Differentiation and cost leadership are identical strategies",
        "Cost information has no strategic relevance"
      ],
      answer: 1,
      reason: "Strategic emphasis differs between product differentiation and cost leadership. The relevance of standard costs, flexible budgets, marketing cost analysis and competitor cost analysis varies with the strategy."
    },
    {
      question_id: "SCM_c12_cs_020_5",
      question: "If the premium division cuts after-sales service solely to meet a short-term cost target, the most likely strategic concern is:",
      options: [
        "The division may damage differentiation and customer value",
        "The division will automatically become cost leader",
        "Customer value is unrelated to differentiation",
        "After-sales service is never part of the value chain"
      ],
      answer: 1,
      reason: "After-sales service is a primary value-chain activity and can be a source of differentiation. Cutting it solely for short-term cost reduction may weaken customer value and strategic position."
    }
  ]
},
{
  case_id: "AI_c1_cs_026",
  difficulty: "Hard",
  case_topic: ["IT", "Porter's Five Forces", "Buyer Bargaining Power", "Customer Data", "Customer Lock-in", "Substitutes"],
  case_chapter: "Chapter1",
  caseText: `
    <p>UrbanBasket Technologies Limited operates a digital retail platform connecting customers with thousands of products offered by different sellers. Initially, the platform competed primarily on price. Customers could easily compare products across competing platforms and could shift between platforms without significant difficulty.</p>

    <p>As competition intensified, UrbanBasket recognised that price-based competition alone was creating pressure on margins. The company therefore began collecting detailed information regarding customer preferences, purchase history, search behaviour, frequency of purchases, product categories viewed and responses to promotional campaigns.</p>

    <p>The information was stored in a central data warehouse. The analytics team used this information to identify customer buying patterns and develop targeted marketing campaigns. Customers who frequently purchased certain products began receiving personalised recommendations and offers based on their historical behaviour.</p>

    <p>UrbanBasket also introduced a premium membership programme. Members received early access to selected offers, loyalty rewards, cashback and other privileges. Over time, management observed that high-value customers were increasingly using UrbanBasket for a wider proportion of their purchases.</p>

    <p>The company then introduced a technology ecosystem in which selected products, accessories and services were configured to operate particularly well with UrbanBasket's own platform and related services. Customers who wanted to move to another platform sometimes had to incur additional costs or lose accumulated rewards and privileges.</p>

    <p>Meanwhile, several alternative retail channels continued to exist. Physical stores, competing e-commerce platforms and direct-to-consumer websites provided customers with alternatives. Management therefore recognised that IT was not simply improving customer service; it was influencing buyer behaviour and the competitive environment.</p>

    <p>The Chief Strategy Officer asked the management accountant to identify exactly how each IT initiative was affecting the relevant competitive force and whether the initiatives were genuinely reducing competitive pressure or merely shifting it from one source to another.</p>
  `,
  questions: [
    {
      question_id: "AI_c1_cs_026_1",
      question: "The use of customer purchase history to generate targeted marketing recommendations primarily demonstrates:",
      options: [
        "Customer data warehousing and mining",
        "Supplier integration",
        "Inbound logistics",
        "Exit barrier creation"
      ],
      answer: 1,
      reason: "Customer data warehousing and mining involves collecting and storing large volumes of customer information and extracting relevant data for direct and targeted marketing."
    },
    {
      question_id: "AI_c1_cs_026_2",
      question: "The premium membership programme primarily attempts to:",
      options: [
        "Lock or retain customers",
        "Increase supplier bargaining power",
        "Create barriers to physical production",
        "Eliminate substitutes"
      ],
      answer: 1,
      reason: "IT can be used to retain customers through rewards, loyalty bonuses, cashback and premium status."
    },
    {
      question_id: "AI_c1_cs_026_3",
      question: "If customers can shift between platforms with very little inconvenience, this factor initially contributes to:",
      options: [
        "Higher buyer bargaining power",
        "Higher supplier bargaining power",
        "Lower buyer bargaining power",
        "Higher exit barriers"
      ],
      answer: 1,
      reason: "Buyer bargaining power is high where switching suppliers is easy or switching costs are low."
    },
    {
      question_id: "AI_c1_cs_026_4",
      question: "UrbanBasket's attempt to increase switching costs is primarily directed toward:",
      options: [
        "Reducing buyer bargaining power",
        "Increasing supplier power",
        "Increasing threat of new entrants",
        "Increasing threat of substitutes"
      ],
      answer: 1,
      reason: "IT can be used to lock customers by increasing switching costs or creating compatibility and loyalty arrangements that make customers less willing to change suppliers."
    },
    {
      question_id: "AI_c1_cs_026_5",
      question: "Which conclusion is most appropriate from the case?",
      options: [
        "IT can influence buyer power through information, service improvement and customer retention mechanisms",
        "Customer data affects only internal accounting",
        "Customer loyalty programmes increase buyer power in every case",
        "IT can counter only the threat of new entrants"
      ],
      answer: 1,
      reason: "IT can counter buyer bargaining power through improved customer service, customer data warehousing and mining, targeted marketing, and mechanisms that retain or lock customers."
    }
  ]
},

{
  case_id: "AI_c1_cs_027",
  difficulty: "Hard",
  case_topic: ["IT", "Value Chain", "Primary Activities", "Secondary Activities", "Procurement", "Technology Development", "HR"],
  case_chapter: "Chapter1",
  caseText: `
    <p>RapidMeals Foods Limited operates a large food-service business involving central kitchens, delivery hubs, online ordering platforms and a network of restaurants. Management decided to undertake a complete review of how information technology was influencing the company's value chain.</p>

    <p>The first project involved the company's incoming raw materials. Suppliers delivered vegetables, packaging materials and other inputs to central warehouses. The company introduced barcode and RFID systems to identify and track materials and connected several warehouses through an information system that provided consolidated inventory information.</p>

    <p>The second project concerned operations. The engineering department introduced computer-aided design for kitchen layouts and equipment planning. Computer-aided manufacturing and automated equipment were considered for selected production activities. Management also examined whether robots could perform repetitive food preparation tasks.</p>

    <p>The third project concerned outbound logistics. The delivery department introduced an automated vehicle scheduling system that allocated delivery vehicles based on orders, capacity and location. Finished food products were tracked through the distribution network.</p>

    <p>The fourth project concerned marketing and sales. The company maintained digital customer databases and analysed customer ordering habits. Marketing teams used this information to segment customers and conduct targeted campaigns.</p>

    <p>The fifth project concerned after-sales service. Customers could report issues digitally, while IoT-enabled systems were being considered for monitoring certain equipment used by franchisees and scheduling maintenance before failures occurred.</p>

    <p>Management also introduced an ERP-based workflow system for organisation-wide planning and coordination. The HR department introduced applicant tracking, performance analytics and digital learning systems.</p>

    <p>Finally, the procurement department implemented electronic tendering and Electronic Data Interchange with selected suppliers to facilitate automated exchange of information and supply processes.</p>

    <p>One director suggested that all these initiatives should simply be classified as 'operations technology'. The management accountant disagreed, explaining that the strategic significance of IT depends upon the particular value-chain activity it supports.</p>
  `,
  questions: [
    {
      question_id: "AI_c1_cs_027_1",
      question: "Which combination correctly matches the technology with the value-chain activity?",
      options: [
        "RFID tracking of incoming materials – Inbound Logistics",
        "Customer ordering analytics – Procurement",
        "Electronic tendering – Outbound Logistics",
        "Applicant tracking – Inbound Logistics"
      ],
      answer: 1,
      reason: "RFID can be used to track items throughout the supply chain and directly supports receiving, storing and handling of inputs in inbound logistics."
    },
    {
      question_id: "AI_c1_cs_027_2",
      question: "The vehicle scheduling system used for delivery allocation primarily supports:",
      options: [
        "Outbound Logistics",
        "Technology Development",
        "Human Resource Management",
        "Procurement"
      ],
      answer: 1,
      reason: "Outbound logistics includes storing, distributing and delivering finished goods. IT can be used for vehicle scheduling and automated warehousing."
    },
    {
      question_id: "AI_c1_cs_027_3",
      question: "The digital customer database used for segmentation and targeted campaigns primarily supports:",
      options: [
        "Marketing and Sales",
        "Procurement",
        "Inbound Logistics",
        "Firm Infrastructure"
      ],
      answer: 1,
      reason: "Marketing and sales includes market research and marketing activities. Digital customer databases facilitate segmentation, analysis of customer habits and CRM."
    },
    {
      question_id: "AI_c1_cs_027_4",
      question: "Which of the following is a SECONDARY activity rather than a primary activity?",
      options: [
        "After-sales service",
        "Outbound logistics",
        "Human resource management",
        "Operations"
      ],
      answer: 3,
      reason: "Human resource management is a secondary/support activity. Primary activities include inbound logistics, operations, outbound logistics, marketing and sales, and after-sales service."
    },
    {
      question_id: "AI_c1_cs_027_5",
      question: "The Electronic Data Interchange system used to exchange information with suppliers most directly supports:",
      options: [
        "Procurement",
        "Marketing and sales",
        "After-sales service",
        "Operations only"
      ],
      answer: 1,
      reason: "Procurement includes purchasing activities and techniques such as EDI for exchanging information with vendors for auto-supply and e-procurement/e-tendering."
    }
  ]
},

{
  case_id: "AI_c1_cs_028",
  difficulty: "Hard",
  case_topic: ["Management Accountant", "Communication", "Decision Making", "MBWA", "Leadership"],
  case_chapter: "Chapter1",
  caseText: `
    <p>Orion Industrial Systems Limited was implementing a major strategic transformation involving automation, restructuring of production processes and changes in performance measurement. The management accountant was appointed as one of the leaders responsible for translating the strategic plan into operational actions.</p>

    <p>The initial communication from senior management was delivered through a formal presentation circulated to all employees. Although the message explained the broad objectives of the transformation, employee feedback suggested that many workers did not understand why changes were required or how the new systems would affect their work.</p>

    <p>The management accountant therefore decided to supplement formal communication with direct interaction. Instead of remaining in his office, he periodically visited production areas, spoke informally with employees, observed equipment and discussed operational difficulties. These visits were not announced in advance and were not restricted to scheduled meetings.</p>

    <p>During these interactions, employees identified several problems that had not appeared in formal management reports. Some employees feared that automation would reduce their importance, while others believed that the new performance standards were unrealistic. The management accountant listened to these concerns and communicated the reasons behind the strategic changes to employees and functional managers.</p>

    <p>At the same time, the Board was considering whether to proceed with one of two alternative technology investments. One senior executive strongly supported one option and encouraged the management accountant to approve it immediately. However, the management accountant insisted on identifying the alternatives, gathering relevant information, examining assumptions and assessing the consequences before making a recommendation.</p>

    <p>He also consulted managers from production, human resources, technology and marketing because the decision would affect multiple departments. During the process, he discovered that some initial forecasts had been prepared using assumptions that had not been independently tested.</p>

    <p>The management accountant concluded that effective leadership required both effective communication and rational decision-making. He also recognised that simply agreeing with a senior executive's preferred option without adequate analysis could lead to an irrational decision.</p>
  `,
  questions: [
    {
      question_id: "AI_c1_cs_028_1",
      question: "The management accountant's unstructured visits to the production areas are an example of:",
      options: [
        "Management by Wandering Around",
        "Strategic positioning",
        "Cost driver analysis",
        "Customer profiling"
      ],
      answer: 1,
      reason: "MBWA involves managers wandering around the workplace in an unstructured manner to interact with employees, equipment and ongoing work."
    },
    {
      question_id: "AI_c1_cs_028_2",
      question: "The primary leadership dimension directly illustrated by MBWA in the case is:",
      options: [
        "Communication",
        "Business ethics",
        "Capital budgeting only",
        "Procurement"
      ],
      answer: 1,
      reason: "MBWA supports informal but effective communication, employee interaction, morale and TQM."
    },
    {
      question_id: "AI_c1_cs_028_3",
      question: "The management accountant's insistence on identifying alternatives, gathering information and assessing consequences reflects:",
      options: [
        "Rational decision-making",
        "Irrational decision-making",
        "Customer lock-in",
        "Supplier integration"
      ],
      answer: 1,
      reason: "A rational decision is objective, fully informed, conscious, explicit, deliberate, consistent, logical and directed toward end goals."
    },
    {
      question_id: "AI_c1_cs_028_4",
      question: "Which behaviour in the case could contribute to irrational decision-making?",
      options: [
        "Immediately agreeing with the senior executive's preferred proposal",
        "Consulting different functional managers",
        "Testing forecasts",
        "Considering alternative solutions"
      ],
      answer: 1,
      reason: "The material identifies readily agreeing with a leader's proposal, superficial understanding of facts, forecasting errors and pre-notions as possible causes of irrational decisions."
    },
    {
      question_id: "AI_c1_cs_028_5",
      question: "Why was two-way communication particularly important during the transformation?",
      options: [
        "Feedback could reveal employee resistance and help understand its nature",
        "Feedback is unnecessary once management has issued instructions",
        "Two-way communication eliminates the need for strategy",
        "Communication should always be one-directional"
      ],
      answer: 1,
      reason: "Communication is more than sending a message. Feedback creates dialogue and helps management understand resistance and the nature of that resistance."
    }
  ]
},

{
  case_id: "AI_c1_cs_029",
  difficulty: "Very Hard",
  case_topic: ["Business Ethics", "Triple Bottom Line", "Strategic Decision Making", "Management Accountant", "Lifecycle Cost"],
  case_chapter: "Chapter1",
  caseText: `
    <p>EcoBuild Infrastructure Limited was evaluating a large infrastructure project expected to generate substantial revenue over a fifteen-year period. The initial financial analysis prepared by the project team indicated that the project would generate attractive returns if construction costs were kept within the approved budget.</p>

    <p>The project involved the construction of a large industrial facility near a populated area. During the feasibility study, the management accountant identified several costs that had not been included in the initial financial model. These included environmental restoration costs at the end of the project, costs associated with disposal of certain materials, potential costs of relocating nearby communities and expenditure required to comply with evolving environmental standards.</p>

    <p>The project director argued that these costs should not be considered because they would arise many years in the future and would reduce the project's reported return. He suggested that the company should focus on maximising shareholder wealth and should approve the project if the immediate financial return was attractive.</p>

    <p>The management accountant disagreed. He explained that a business decision should not be evaluated solely from the perspective of immediate financial efficiency. The company's activities could create social and environmental costs that might ultimately affect stakeholders and the sustainability of the business.</p>

    <p>He therefore recommended incorporating the relevant lifecycle costs into the analysis. He also proposed using a broader performance framework that considered economic, social and environmental dimensions rather than relying exclusively on financial profit.</p>

    <p>The Board debated whether consideration of environmental and social consequences was consistent with the role of a management accountant. Some directors argued that such matters belonged exclusively to government regulators and were outside the accountant's responsibility.</p>

    <p>The management accountant responded that business ethics applies to all aspects of business conduct and that leaders establish the ethical boundaries within which organisational goals are achieved. He further explained that an excessive focus on efficiency and profit could result in ethical problems such as environmental damage and unequal distribution of benefits and costs.</p>

    <p>The Board ultimately requested a revised strategic evaluation that incorporated financial returns together with relevant social and environmental implications. The objective was not to ignore profitability but to assess whether the proposed strategy was sustainable and ethically defensible.</p>
  `,
  questions: [
    {
      question_id: "AI_c1_cs_029_1",
      question: "The management accountant's inclusion of environmental restoration and disposal costs occurring over the project's life is primarily an application of:",
      options: [
        "Lifecycle cost consideration",
        "Customer data mining",
        "Supplier bargaining analysis",
        "Market segmentation"
      ],
      answer: 1,
      reason: "Lifecycle cost considers costs over the entire life of a project/product, including relevant costs such as site cleaning at the end of a project."
    },
    {
      question_id: "AI_c1_cs_029_2",
      question: "The project director's exclusive emphasis on immediate shareholder wealth reflects which ethical orientation criticised in the case?",
      options: [
        "An overriding efficiency/profit focus without sufficient consideration of social costs",
        "A stakeholder-oriented socio-economic approach",
        "Triple bottom line",
        "Lifecycle management"
      ],
      answer: 1,
      reason: "The material explains that an overriding focus on efficiency and profit can create ethical issues such as environmental damage and unequal distribution of income."
    },
    {
      question_id: "AI_c1_cs_029_3",
      question: "The broader performance framework proposed by the management accountant is most closely associated with:",
      options: [
        "Triple Bottom Line",
        "Five Forces",
        "Value Chain",
        "Business Model Canvas"
      ],
      answer: 1,
      reason: "The management accountant may use the Triple Bottom Line as a framework for performance evaluation, considering economic, social and environmental dimensions."
    },
    {
      question_id: "AI_c1_cs_029_4",
      question: "Which statement best explains why the management accountant's approach is consistent with business ethics?",
      options: [
        "Business ethics concerns moral principles and ethical problems arising in the business environment",
        "Business ethics concerns only compliance with accounting standards",
        "Business ethics requires maximisation of profit regardless of consequences",
        "Business ethics applies only to external regulators"
      ],
      answer: 1,
      reason: "Business ethics is a form of applied or professional ethics examining ethical principles and moral problems arising in a business environment and applies to individuals and organisations."
    },
    {
      question_id: "AI_c1_cs_029_5",
      question: "Which conclusion is most consistent with the socio-economic approach described in the material?",
      options: [
        "Economic objectives should be balanced with social costs to support sustainable business",
        "Profit should always be ignored",
        "Only government authorities should consider environmental effects",
        "Shareholder wealth must always override stakeholder considerations"
      ],
      answer: 1,
      reason: "The socio-economic approach recognises that sustainable organisations need to balance economic motives with the social costs of their actions and consider stakeholders."
    }
  ]
},

{
  case_id: "AI_c1_cs_030",
  difficulty: "Very Hard",
  case_topic: ["IT", "Five Forces", "Value Chain", "Strategic Management", "Management Accountant", "Strategic Alignment"],
  case_chapter: "Chapter1",
  caseText: `
    <p>GlobalMove Logistics Limited is a large logistics company operating an integrated transportation and warehousing network. The company has historically competed by maintaining a large physical infrastructure of warehouses, vehicles and distribution centres. However, digital platforms have begun changing the industry. Customers increasingly demand real-time tracking, accurate delivery estimates, online booking, automated documentation and responsive customer support.</p>

    <p>The Board initiated a comprehensive digital transformation programme. The first proposal was to implement an advanced information system connecting warehouses, vehicles, customers and suppliers. The system would gather information from multiple sources, process it, store it and make relevant information available to users throughout the organisation.</p>

    <p>The procurement team proposed an e-procurement platform through which the company could identify alternative suppliers, compare prices and electronically exchange information. Selected suppliers would be given access to relevant ERP information so that inventory and supply requirements could be coordinated.</p>

    <p>The logistics department proposed RFID tracking for packages. The system would identify and track packages entering warehouses and moving through distribution centres. It would also provide updated information for vehicle scheduling and delivery planning.</p>

    <p>The marketing team proposed creating a customer data warehouse containing information about customer preferences, order history and service requirements. The analytics team would use this information to design targeted marketing campaigns and improve customer relationships.</p>

    <p>The customer service department proposed IoT-enabled monitoring for selected industrial equipment at customer locations. The system could identify potential maintenance requirements and allow service teams to schedule repairs before major failures occurred.</p>

    <p>Meanwhile, the HR department planned to introduce AI-based recruitment tools, applicant tracking systems, performance analytics and digital learning systems.</p>

    <p>Although the proposed investments were substantial, the Chief Financial Officer argued that the company should not evaluate them merely as technology expenses. He believed that the initiatives could alter the company's competitive position. For example, integrated systems could reduce costs and improve coordination, customer analytics could strengthen customer relationships, supplier platforms could reduce supplier dependence, and advanced systems could make the company's service more difficult for rivals to replicate.</p>

    <p>The management accountant was asked to evaluate the strategic proposal. He was required to consider both the impact on Porter's Five Forces and the impact on individual value-chain activities. He also had to ensure that the technology strategy, information-system strategy and information-management strategy were aligned with the overall organisational strategy.</p>

    <p>During the review, the management accountant noticed that different managers were using the terms IT, IS and IM interchangeably. The Chief Executive Officer therefore asked him to prepare a strategic explanation distinguishing the three and showing why treating them as identical could result in inappropriate decisions.</p>

    <p>The management accountant concluded that the digital transformation could not be viewed as a collection of isolated technology projects. It represented a strategic redesign of how information was acquired, processed, controlled, communicated and used across the organisation and its wider value chain.</p>
  `,
  questions: [
    {
      question_id: "AI_c1_cs_030_1",
      question: "The proposed system connecting warehouses, vehicles, customers and suppliers to gather, process, store and disseminate information is primarily:",
      options: [
        "Information System",
        "Information Management only",
        "Information Technology only",
        "Business ethics"
      ],
      answer: 1,
      reason: "An Information System is a collection of multiple information resources used to gather, process, store and disseminate information."
    },
    {
      question_id: "AI_c1_cs_030_2",
      question: "The decision regarding management controls, responsibilities and access to organisational information would fall primarily under:",
      options: [
        "IM strategy",
        "IT strategy",
        "IS strategy",
        "Marketing strategy"
      ],
      answer: 1,
      reason: "IM strategy defines the role and structure of IT activities and deals with management controls, responsibilities, performance measurement and management processes."
    },
    {
      question_id: "AI_c1_cs_030_3",
      question: "The e-procurement platform's ability to identify suppliers and compare their prices is primarily intended to influence:",
      options: [
        "Supplier bargaining power",
        "Threat of substitutes only",
        "Buyer bargaining power",
        "Exit barriers"
      ],
      answer: 1,
      reason: "IT can reduce supplier bargaining power by helping organisations identify new suppliers, compare prices and use e-procurement or tendering systems."
    },
    {
      question_id: "AI_c1_cs_030_4",
      question: "RFID used to track packages entering warehouses and moving through distribution centres affects which combination?",
      options: [
        "Inbound and outbound logistics",
        "Marketing and HR",
        "Procurement and HR",
        "After-sales service and marketing only"
      ],
      answer: 1,
      reason: "RFID can track items throughout the supply chain and therefore positively influence both inbound and outbound logistics."
    },
    {
      question_id: "AI_c1_cs_030_5",
      question: "The customer data warehouse and analytics system is most directly connected with:",
      options: [
        "Buyer bargaining power and marketing/sales",
        "Supplier bargaining power and procurement only",
        "Exit barriers and HR",
        "Operations and procurement only"
      ],
      answer: 1,
      reason: "Customer data warehousing and mining can be used for targeted marketing and can help counter buyer bargaining power by improving customer service and understanding customer preferences."
    }
  ]
},
{
  case_id: "AI_c1_cs_021",
  difficulty: "Medium",
  case_topic: ["Information Technology", "Information System", "Information Management", "Strategic Context"],
  case_chapter: "Chapter1",
  caseText: `
    <p>NovaMart Retail Limited operates a chain of physical supermarkets across several cities. For many years, the company relied primarily on store-based sales and maintained separate systems for purchasing, inventory, customer information and sales reporting. Each store maintained its own inventory records, while the head office received periodic reports from individual stores.</p>

    <p>As online retail platforms became increasingly popular, NovaMart noticed that customers were beginning to expect real-time information regarding product availability, online ordering, personalised offers and faster delivery. Several competitors had already introduced integrated digital platforms through which customers could place orders using mobile applications and receive recommendations based on their previous purchases.</p>

    <p>The Board decided that merely purchasing new computers and software would not be sufficient. The Chief Executive Officer therefore asked the management team to distinguish between Information Technology, Information Systems and Information Management before preparing a technology-related strategic plan.</p>

    <p>The Chief Information Officer explained that the company needed systems capable of gathering, processing, storing and disseminating information. The proposed system would connect stores, warehouses, suppliers, customers and the head office. However, another group of directors was more concerned with deciding who would be permitted to access customer information, who would be responsible for maintaining such information, how performance of IT activities would be measured and what controls would govern the use of information across the organisation.</p>

    <p>The strategy team also proposed developing a detailed plan regarding the technological applications that should be introduced in different activities, including online ordering, inventory tracking, customer analytics, supplier communication and employee applications.</p>

    <p>During the review, the Board realised that these three dimensions were interconnected but represented different strategic concerns. It therefore decided that the final strategy should align IT, IS and IM with the overall organisational strategy rather than treating technology expenditure as an isolated investment.</p>
  `,
  questions: [
    {
      question_id: "AI_c1_cs_021_1",
      question: "The system proposed to gather, process, store and disseminate information across stores, warehouses, suppliers and customers is primarily an example of:",
      options: [
        "Information Management",
        "Information System",
        "Information Technology strategy",
        "Strategic positioning"
      ],
      answer: 2,
      reason: "Information Systems are collections of multiple information resources used to gather, process, store and disseminate information."
    },
    {
      question_id: "AI_c1_cs_021_2",
      question: "The Board's concern regarding who may access customer information and who is responsible for information is primarily related to:",
      options: [
        "IS strategy",
        "IT strategy",
        "IM strategy",
        "Marketing strategy"
      ],
      answer: 3,
      reason: "Information Management concerns acquisition, custodianship and distribution of information and includes management controls, responsibilities and decisions regarding who can access data."
    },
    {
      question_id: "AI_c1_cs_021_3",
      question: "The plan concerning technological applications to be introduced in different activities is most closely associated with:",
      options: [
        "IT strategy",
        "IM strategy",
        "Customer segmentation",
        "Value proposition"
      ],
      answer: 1,
      reason: "IT strategy is a comprehensive plan outlining how technology should be used to meet IT and business goals and decides the layout of IT use cases in the organisation."
    },
    {
      question_id: "AI_c1_cs_021_4",
      question: "Which combination correctly describes the linkage among the three strategies?",
      options: [
        "IS – How; IT – Where; IM – What",
        "IS – What; IT – How; IM – Where",
        "IS – Where; IT – What; IM – How",
        "IS – How; IT – What; IM – Where"
      ],
      answer: 2,
      reason: "Under Michael J. Earl's framework, IS strategy resolves 'What', IT strategy resolves 'How', and IM strategy resolves 'Where'."
    },
    {
      question_id: "AI_c1_cs_021_5",
      question: "If NovaMart formulates a strategy at organisation-wide level dealing with management controls, responsibilities and performance measurement relating to IT, it is most appropriately:",
      options: [
        "IS strategy",
        "IT strategy",
        "IM strategy",
        "Value chain strategy"
      ],
      answer: 3,
      reason: "IM strategy is formulated at organisation-wide level and deals with control over the layout of IT uses, management responsibilities, performance measurement and management processes."
    }
  ]
},

{
  case_id: "AI_c1_cs_022",
  difficulty: "Medium",
  case_topic: ["IT", "Porter's Five Forces", "Threat of New Entrants", "Barriers to Entry"],
  case_chapter: "Chapter1",
  caseText: `
    <p>SecurePay Bank Limited had traditionally operated through a large network of physical branches. Establishing a banking business required significant investment in premises, employees, infrastructure and branch networks. For several years, the established banks believed that these requirements created a substantial barrier to new entrants.</p>

    <p>However, the competitive environment changed rapidly when digital banking technologies became widely available. Several technology-driven financial service providers began offering customers account-related services through mobile applications without establishing extensive branch networks. They used digital channels for customer interaction and automated processes for several routine activities.</p>

    <p>The management of SecurePay initially considered these new firms to be a relatively minor threat because they did not possess the same physical infrastructure as traditional banks. However, the strategy team pointed out that technology could play two opposite roles in relation to barriers to entry.</p>

    <p>On one hand, SecurePay could invest in sophisticated IT applications, automated processes and computer-controlled systems that would require substantial technological expertise and investment from competitors attempting to replicate them. Such investments could increase economies of scale and make entry more difficult.</p>

    <p>On the other hand, the same technological development could allow new entrants to avoid some traditional barriers. A digital entrant could reach customers without establishing an extensive branch network. Internet banking, mobile banking and other digital channels could therefore reduce the importance of the traditional branch-based distribution structure.</p>

    <p>The Board therefore instructed the strategy team not merely to determine whether technology increased or decreased barriers to entry, but to determine the circumstances under which technology could perform either role.</p>
  `,
  questions: [
    {
      question_id: "AI_c1_cs_022_1",
      question: "SecurePay's traditional branch network primarily represented:",
      options: [
        "A potential barrier to entry",
        "A substitute product",
        "Buyer bargaining power",
        "A customer gain"
      ],
      answer: 1,
      reason: "Capital requirements and access to distribution channels can operate as barriers to entry."
    },
    {
      question_id: "AI_c1_cs_022_2",
      question: "If SecurePay uses sophisticated IT applications requiring substantial investment and technical expertise, IT may:",
      options: [
        "Break down all entry barriers",
        "Create barriers to entry",
        "Increase buyer bargaining power",
        "Create substitutes"
      ],
      answer: 2,
      reason: "Sophisticated IT applications can be expensive, technically challenging and time-consuming to develop or imitate, thereby creating barriers to entry."
    },
    {
      question_id: "AI_c1_cs_022_3",
      question: "Digital entrants avoiding extensive branch networks illustrate which effect of IT?",
      options: [
        "IT can break down traditional barriers to entry",
        "IT always increases barriers",
        "IT eliminates rivalry",
        "IT eliminates substitutes"
      ],
      answer: 1,
      reason: "IT can be used by new entrants as a weapon to bypass traditional barriers. Internet and mobile banking can reduce the need for extensive physical branch networks."
    },
    {
      question_id: "AI_c1_cs_022_4",
      question: "The strategy team's conclusion that IT can both create and break down barriers indicates that:",
      options: [
        "IT has a uniform impact on every competitive force",
        "IT's strategic impact depends upon how it is deployed",
        "IT is relevant only to internal activities",
        "IT has no strategic relevance"
      ],
      answer: 2,
      reason: "The material specifically explains two possible roles of IT in relation to new entrants: creating barriers for existing players and breaking down barriers for new entrants."
    },
    {
      question_id: "AI_c1_cs_022_5",
      question: "A new entrant using mobile banking to avoid establishing branches is primarily changing the importance of:",
      options: [
        "Access to distribution channels",
        "Supplier concentration",
        "Buyer information",
        "Exit barriers"
      ],
      answer: 1,
      reason: "Traditional branch networks can act as distribution channels. Digital channels may allow new entrants to bypass this traditional barrier."
    }
  ]
},

{
  case_id: "AI_c1_cs_023",
  difficulty: "Medium",
  case_topic: ["IT", "Supplier Bargaining Power", "E-Procurement", "Supply Chain"],
  case_chapter: "Chapter1",
  caseText: `
    <p>Alpha Components Limited manufactures precision components for automobile manufacturers. The company traditionally purchased raw materials from a small group of suppliers. Purchasing managers generally contacted suppliers individually through telephone and email, obtained quotations manually and selected suppliers based largely on historical relationships.</p>

    <p>Over time, the purchasing department noticed that input prices were increasing even though several suppliers appeared to offer similar materials. Some managers suspected that the company's dependence on a limited number of suppliers had increased their bargaining power. The company also found it difficult to identify new suppliers because information about potential vendors was scattered across different sources.</p>

    <p>The Chief Financial Officer proposed introducing an electronic procurement and tendering system. The proposed system would allow Alpha Components to invite bids electronically, compare prices offered by several suppliers, maintain supplier information and identify alternative vendors.</p>

    <p>The company also planned to use commercial databases to obtain information about potential suppliers and their prices. In addition, management considered automatically rotating orders between approved suppliers, subject to quality requirements and contractual terms.</p>

    <p>The procurement team further proposed extending the company's ERP system to selected suppliers so that suppliers could obtain relevant information regarding demand and production requirements. The objective was to create a more integrated supply chain rather than treating suppliers merely as independent sellers.</p>

    <p>Some senior managers argued that the new system was simply a technology upgrade. The CFO disagreed and stated that the system could alter the company's relationship with suppliers and potentially reduce supplier bargaining power.</p>
  `,
  questions: [
    {
      question_id: "AI_c1_cs_023_1",
      question: "Alpha's dependence on a small number of suppliers is most likely to:",
      options: [
        "Increase supplier bargaining power",
        "Reduce supplier bargaining power",
        "Eliminate supplier power",
        "Increase buyer switching costs only"
      ],
      answer: 1,
      reason: "Supplier concentration and a limited number of suppliers can increase suppliers' bargaining power."
    },
    {
      question_id: "AI_c1_cs_023_2",
      question: "The electronic tendering system is primarily intended to:",
      options: [
        "Identify and compare alternative suppliers",
        "Increase dependence on existing suppliers",
        "Prevent customer segmentation",
        "Increase exit barriers"
      ],
      answer: 1,
      reason: "E-procurement and tendering can help identify new suppliers, compare prices and prevent supplier cartelisation."
    },
    {
      question_id: "AI_c1_cs_023_3",
      question: "Using commercial databases to scan prices from multiple suppliers demonstrates IT's ability to:",
      options: [
        "Improve information regarding supplier alternatives",
        "Eliminate all supplier costs",
        "Increase supplier uniqueness",
        "Create customer lock-in"
      ],
      answer: 1,
      reason: "Commercial databases can help organisations identify potential suppliers and compare prices from a number of suppliers."
    },
    {
      question_id: "AI_c1_cs_023_4",
      question: "Extending ERP access to suppliers primarily supports:",
      options: [
        "An integrated supply chain",
        "Customer segmentation",
        "Threat of substitutes",
        "Market penetration"
      ],
      answer: 1,
      reason: "IT is intensively used to make the concept of an integrated supply chain a reality, including extending ERP access to vendors."
    },
    {
      question_id: "AI_c1_cs_023_5",
      question: "The CFO's statement that the system could alter supplier relationships demonstrates the strategic role of IT because:",
      options: [
        "IT can influence competitive forces rather than merely automate existing activities",
        "IT has relevance only for accounting",
        "Technology cannot influence supplier power",
        "Supplier bargaining power is unrelated to information"
      ],
      answer: 1,
      reason: "IT/IS can influence supplier bargaining power by helping identify suppliers, compare prices, facilitate e-procurement and integrate suppliers into the wider supply chain."
    }
  ]
},

{
  case_id: "AI_c1_cs_024",
  difficulty: "Medium",
  case_topic: ["IT", "Value Chain", "Inbound Logistics", "Outbound Logistics", "RFID", "ERP", "JIT"],
  case_chapter: "Chapter1",
  caseText: `
    <p>PrimeAuto Parts Limited operates a large manufacturing facility supplying components to automobile companies. The factory receives thousands of components every day from suppliers located in different regions. Historically, the company relied on manual identification and recording of incoming materials. Warehouse employees had to physically locate components, update records and communicate inventory information to production departments.</p>

    <p>These processes resulted in delays and occasional differences between physical inventory and recorded inventory. Management also found that finished goods were sometimes difficult to locate when customer orders were received. Vehicles were not always scheduled efficiently because the logistics department did not have real-time information about inventory positions and dispatch requirements.</p>

    <p>The management team proposed introducing RFID tags throughout the supply chain. The tags would allow the company to automatically identify and track materials and finished products. The company also planned to integrate the system with its ERP platform and use JIT principles to improve stock control.</p>

    <p>The logistics manager explained that the technology would not be restricted to incoming materials. Finished products could also be tracked while being moved from the factory to distribution points and customers. Vehicle schedules could be generated using updated information regarding the location and availability of finished goods.</p>

    <p>At the same time, the production department proposed introducing CAD and CAM systems. The engineering team argued that these technologies would affect the transformation process itself rather than merely the movement and storage of materials.</p>

    <p>The Board asked the management accountant to distinguish the effect of each technology on the relevant primary value-chain activity before approving the investment.</p>
  `,
  questions: [
    {
      question_id: "AI_c1_cs_024_1",
      question: "RFID tracking of incoming components primarily improves:",
      options: [
        "Inbound logistics",
        "Marketing and sales",
        "After-sales service",
        "Human resource management"
      ],
      answer: 1,
      reason: "Inbound logistics deals with receiving, storing and handling raw materials and other inputs. RFID can automate identification and tracking of items."
    },
    {
      question_id: "AI_c1_cs_024_2",
      question: "Tracking finished goods during movement to customers primarily affects:",
      options: [
        "Inbound logistics",
        "Outbound logistics",
        "Procurement",
        "Technology development only"
      ],
      answer: 2,
      reason: "Outbound logistics covers storing, distributing and delivering finished goods to customers. RFID can support tracking throughout this process."
    },
    {
      question_id: "AI_c1_cs_024_3",
      question: "Which combination is most directly associated with stock/resource planning and stock control?",
      options: [
        "ERP and JIT",
        "CAD and CAM",
        "CRM and RFID only",
        "EDI and CAD"
      ],
      answer: 1,
      reason: "MRP and ERP can be used for resource planning, while JIT can be used for stock control."
    },
    {
      question_id: "AI_c1_cs_024_4",
      question: "CAD and CAM are primarily associated with:",
      options: [
        "Operations",
        "Marketing",
        "After-sales service",
        "Outbound logistics"
      ],
      answer: 1,
      reason: "Operations include transformation of raw materials into finished goods. CAD assists design and CAM assists material, capacity and production control."
    },
    {
      question_id: "AI_c1_cs_024_5",
      question: "Why should the company not classify RFID and CAD/CAM as affecting the same value-chain activity merely because all involve technology?",
      options: [
        "Technology must be analysed according to the business activity it improves",
        "Technology is never relevant to value-chain analysis",
        "All IT applications affect only procurement",
        "All IT applications affect only operations"
      ],
      answer: 1,
      reason: "IT/IS can affect every value-chain activity differently. RFID can improve logistics, while CAD/CAM directly support operations."
    }
  ]
},

{
  case_id: "AI_c1_cs_025",
  difficulty: "Medium",
  case_topic: ["Management Accountant", "Analysis", "Planning", "Innovation", "Leadership"],
  case_chapter: "Chapter1",
  caseText: `
    <p>Zenith Manufacturing Limited had traditionally viewed its management accountant primarily as a person responsible for preparing budgets, maintaining accounting records and reporting financial performance to senior management. Departmental managers generally approached the management accountant only when they required budget information or explanations regarding cost variances.</p>

    <p>Following a significant change in the competitive environment, the Chief Executive Officer decided that the management accountant should participate more actively in strategic decision-making. The company was considering automation, redesigning its supply chain, changing its product mix and introducing new technology.</p>

    <p>The management accountant began analysing both financial and non-financial information. Instead of simply reporting that customer profitability had declined, he examined customer behaviour, product profitability, quality information, supply-chain data and operational performance to identify the reasons behind the change.</p>

    <p>He then worked with senior executives to develop forecasts and budgets supporting the company's long-term strategy. He also encouraged management to consider technological innovations that could improve processes and supported the organisation in evaluating their financial and strategic implications.</p>

    <p>When the proposed changes were communicated to employees, resistance emerged. The management accountant therefore participated in meetings with employees and functional managers, explained why the changes were necessary and collected feedback regarding implementation difficulties.</p>

    <p>The CEO observed that the management accountant was no longer merely reporting numbers. He was helping management understand what was driving performance, shaping strategic alternatives, supporting technological change and assisting in execution.</p>
  `,
  questions: [
    {
      question_id: "AI_c1_cs_025_1",
      question: "The management accountant's examination of financial and non-financial information to discover the reasons behind customer profitability changes represents:",
      options: [
        "Analysis",
        "Stewardship accounting only",
        "Procurement",
        "Information disposal"
      ],
      answer: 1,
      reason: "Analysis involves using financial and non-financial information to uncover the meaning of numbers and offer new insights and vision."
    },
    {
      question_id: "AI_c1_cs_025_2",
      question: "Working with executives to develop forecasts and budgets for the long-term strategy represents:",
      options: [
        "Planning",
        "After-sales service",
        "Procurement",
        "Customer segmentation"
      ],
      answer: 1,
      reason: "Management accountants use forecasting and budgeting skills to assist senior leaders in making business and financial decisions and developing long-term plans."
    },
    {
      question_id: "AI_c1_cs_025_3",
      question: "Encouraging technological innovation and supporting the organisation in adopting new technology represents:",
      options: [
        "Innovation",
        "Stewardship",
        "Inbound logistics",
        "Market segmentation"
      ],
      answer: 1,
      reason: "Innovation involves the management accountant acting as an initiator or change advocate for technological innovation."
    },
    {
      question_id: "AI_c1_cs_025_4",
      question: "The management accountant's participation in communicating the need for change primarily reflects:",
      options: [
        "Leadership",
        "Cost allocation",
        "Procurement",
        "Customer profiling"
      ],
      answer: 1,
      reason: "Leadership involves moving from planning to execution, including decision-making and communication across departments."
    },
    {
      question_id: "AI_c1_cs_025_5",
      question: "Which statement best reflects the transformation illustrated by Zenith's management accountant?",
      options: [
        "The management accountant has moved beyond reporting and is contributing to strategy, technology and leadership",
        "The management accountant should only prepare budgets",
        "The management accountant's role is restricted to financial reporting",
        "The management accountant should avoid participation in strategic decisions"
      ],
      answer: 1,
      reason: "The modern management accountant operates at the crossroads of technology, financial analysis, strategy and leadership rather than merely reporting financial figures."
    }
  ]
},
{
  case_id: "AI_c1_cs_031",
  difficulty: "medium",
  case_topic: ["Information Systems", "Information Technology", "Information Management", "Strategic Alignment"],
  case_chapter: "An Introduction to Strategic Cost Management",
  caseText: `
    <p><b>Vistara Home Appliances Limited</b> manufactures refrigerators, washing machines and small kitchen appliances through three manufacturing locations. During the last three years, the company expanded rapidly through online sales. However, its information-related systems developed independently within different departments.</p>

    <p>The production department maintained a manufacturing database containing machine utilisation, production schedules and material requirements. The sales department maintained a separate customer database containing orders, complaints and purchase history. The procurement department used a supplier portal to compare quotations and place purchase orders. The finance department had another system for accounting and reporting.</p>

    <p>Although each department had access to technology, senior management noticed that the information available to one department was not always consistent with information maintained elsewhere. For example, the sales team would sometimes promise delivery dates without knowing the latest production capacity. Procurement managers occasionally placed urgent orders because they were unaware that another supplier had already delivered the required material. Customer service executives also had difficulty obtaining a complete history of customer complaints because service information was stored separately.</p>

    <p>The Chief Financial Officer proposed that the company should first identify what information each business unit actually requires for achieving its objectives. The Chief Information Officer, however, argued that the immediate priority should be deciding which technology platforms, servers and software should be acquired. The Chief Operating Officer suggested that the company should establish organisation-wide rules regarding who may access customer, supplier and production information, how information should be stored and when obsolete information should be archived or deleted.</p>

    <p>The Managing Director concluded that the problem was not simply the absence of computers. The company needed to distinguish between the business-oriented strategy for determining information requirements, the technology-oriented strategy for determining how technology would provide the required capabilities, and the organisation-wide managerial framework governing information.</p>
  `,
  questions: [
    {
      question_id: "AI_c1_cs_031_1",
      question: "Based on the facts of Vistara Home Appliances Limited, which approach most appropriately represents the primary concern of its Information Systems strategy?",
      options: [
        "Determining what information capabilities are required to support business needs",
        "Determining the physical location of servers and network devices",
        "Determining procedures for deletion of obsolete information only",
        "Determining the technical specifications of computers used by employees"
      ],
      answer: 1,
      reason: "IS strategy is business-driven and focuses on what information systems are required to support business needs."
    },
    {
      question_id: "AI_c1_cs_031_2",
      question: "The CIO's proposal to determine software platforms, servers and technological infrastructure is primarily associated with which concept?",
      options: [
        "Information Management strategy",
        "Information Technology strategy",
        "Information Systems strategy",
        "Value Proposition strategy"
      ],
      answer: 2,
      reason: "IT strategy is technology-focused and concerned with how technology will be used to achieve IT and business objectives."
    },
    {
      question_id: "AI_c1_cs_031_3",
      question: "The COO's proposal concerning access rights, storage, archiving and deletion of information most directly represents:",
      options: [
        "Information Technology",
        "Information Systems",
        "Information Management",
        "Inbound logistics"
      ],
      answer: 3,
      reason: "Information Management deals with acquisition, custodianship, distribution and disposal/archiving of information together with responsibilities and access controls."
    },
    {
      question_id: "AI_c1_cs_031_4",
      question: "Which of the following correctly matches the three approaches discussed by management?",
      options: [
        "IS – How; IT – Where; IM – What",
        "IS – What; IT – How; IM – Where",
        "IS – Where; IT – What; IM – How",
        "IS – How; IT – What; IM – Where"
      ],
      answer: 2,
      reason: "Michael J. Earl's framework associates IS with What, IT with How and IM with Where."
    },
    {
      question_id: "AI_c1_cs_031_5",
      question: "If Vistara develops an excellent technology platform but does not align the information provided by the system with business requirements, the most likely strategic weakness would be:",
      options: [
        "Technology has automatically become a substitute product",
        "IT investment may fail to create the required business advantage",
        "Supplier bargaining power will necessarily become zero",
        "The company's fixed costs will automatically disappear"
      ],
      answer: 2,
      reason: "Technology investment must be aligned with business requirements; otherwise significant IT expenditure may not generate strategic advantage."
    }
  ]
},
{
  case_id: "AI_c1_cs_032",
  difficulty: "medium",
  case_topic: ["Value Chain", "Inbound Logistics", "Operations", "Outbound Logistics", "Information Technology"],
  case_chapter: "An Introduction to Strategic Cost Management",
  caseText: `
    <p><b>Arclight Furniture Limited</b> manufactures customised office furniture for corporate customers. The company purchases wood panels, metal frames, fittings, glass and electronic components from several suppliers. Historically, materials were received at the factory and manually entered into inventory records. Production supervisors then issued paper-based instructions to workers regarding which materials were required for particular customer orders.</p>

    <p>As the number of customised orders increased, the company experienced frequent discrepancies between physical inventory and recorded inventory. Some materials remained unused for long periods while other materials were urgently purchased because production staff could not locate the required items. The warehouse manager therefore proposed the use of barcodes and RFID tags to identify and track materials from the time they entered the warehouse.</p>

    <p>The production department also introduced computer-aided design software. Customers could approve digital designs before manufacturing began. Once a design was approved, computer-aided manufacturing systems generated production instructions and helped determine machine utilisation and material requirements.</p>

    <p>After production, finished furniture was temporarily stored in an automated warehouse. Delivery schedules were generated based on customer locations, promised delivery dates and vehicle availability. The company also began using RFID and barcode information while goods moved from the warehouse to distribution vehicles.</p>

    <p>The Managing Director explained to the management accountant that the same technology could support different activities in the value chain depending upon where and how it was used. The accountant was asked to identify the primary value-chain activities affected by the company's new systems rather than simply classify all technology expenditure as one activity.</p>
  `,
  questions: [
    {
      question_id: "AI_c1_cs_032_1",
      question: "The use of RFID to identify and track raw materials when they enter and are stored in the factory primarily supports which value-chain activity?",
      options: [
        "Marketing and sales",
        "Inbound logistics",
        "After-sales service",
        "Human resource management"
      ],
      answer: 2,
      reason: "Inbound logistics covers receiving, storing and handling inputs/raw materials."
    },
    {
      question_id: "AI_c1_cs_032_2",
      question: "The computer-aided manufacturing system that helps control production and machine utilisation primarily supports:",
      options: [
        "Operations",
        "Outbound logistics",
        "Procurement",
        "Firm infrastructure"
      ],
      answer: 1,
      reason: "Operations involve transforming inputs into finished products, and CAM supports production and capacity control."
    },
    {
      question_id: "AI_c1_cs_032_3",
      question: "The automated warehouse and delivery scheduling system used after production primarily relates to:",
      options: [
        "Inbound logistics",
        "Operations",
        "Outbound logistics",
        "Technology development"
      ],
      answer: 3,
      reason: "Outbound logistics includes storing, distributing and delivering finished goods."
    },
    {
      question_id: "AI_c1_cs_032_4",
      question: "Which statement best reflects the Managing Director's observation?",
      options: [
        "A particular technology can support different value-chain activities depending on its use",
        "All IT expenditure is necessarily classified as technology development",
        "Technology can only affect secondary activities",
        "RFID can only be classified as procurement"
      ],
      answer: 1,
      reason: "The classification depends upon the business activity being supported, not merely the technology being used."
    },
    {
      question_id: "AI_c1_cs_032_5",
      question: "If the company uses the same RFID system to monitor finished goods during dispatch, the relevant value-chain classification would most appropriately change to:",
      options: [
        "Outbound logistics",
        "Inbound logistics",
        "Human resource management",
        "Customer relationship management"
      ],
      answer: 1,
      reason: "When RFID is used for finished-goods storage and dispatch, it supports outbound logistics."
    }
  ]
},
{
  case_id: "AI_c1_cs_033",
  difficulty: "medium",
  case_topic: ["Management Accountant", "Analysis", "Planning", "Innovation", "Leadership"],
  case_chapter: "An Introduction to Strategic Cost Management",
  caseText: `
    <p><b>Nova Medical Devices Limited</b> had traditionally viewed its management accountants mainly as people responsible for budgets, cost reports and financial control. The company's new Managing Director believed that this approach was too narrow because the business was entering a period of rapid technological change.</p>

    <p>The management accountant, Meera, was therefore asked to participate in a cross-functional project involving production, marketing, procurement, research and development and customer service.</p>

    <p>During the first stage, Meera examined both financial and non-financial information. She analysed warranty claims, customer complaints, machine downtime, supplier performance and customer profitability along with traditional cost data. She discovered that some customers who generated high sales revenue were actually less profitable because they required frequent customisation and extensive after-sales support.</p>

    <p>In the second stage, Meera prepared forecasts and alternative budgets for management. Instead of merely extending historical costs, she considered expected demand, production capacity, technological investment and long-term strategic objectives.</p>

    <p>During the third stage, the company considered introducing automated inspection equipment. Several managers opposed the investment because it would initially increase expenditure. Meera presented alternative scenarios and demonstrated how the technology could improve quality and reduce long-term operating costs. She encouraged management to consider the strategic consequences rather than focusing only on the current year's accounting figures.</p>

    <p>Finally, Meera had to explain the proposed changes to employees and managers across different departments. Some employees were concerned about automation, while others were unclear about how the project would affect their responsibilities. Meera therefore communicated the rationale for change, listened to objections and encouraged managers to provide feedback.</p>
  `,
  questions: [
    {
      question_id: "AI_c1_cs_033_1",
      question: "Meera's analysis of warranty claims, customer complaints, machine downtime and customer profitability demonstrates which modern role of a management accountant?",
      options: [
        "Analysis",
        "Stewardship only",
        "Bookkeeping",
        "External auditing"
      ],
      answer: 1,
      reason: "Modern management accountants analyse both financial and non-financial information to generate insights."
    },
    {
      question_id: "AI_c1_cs_033_2",
      question: "The preparation of alternative forecasts and budgets considering capacity, demand and long-term objectives primarily demonstrates:",
      options: [
        "Planning",
        "Procurement",
        "After-sales service",
        "Inbound logistics"
      ],
      answer: 1,
      reason: "Planning involves forecasting, budgeting and supporting business and financial decisions."
    },
    {
      question_id: "AI_c1_cs_033_3",
      question: "Meera's role in encouraging adoption of automated inspection technology most directly reflects:",
      options: [
        "Innovation",
        "Inbound logistics",
        "Supplier bargaining power",
        "Customer segmentation"
      ],
      answer: 1,
      reason: "The modern management accountant can act as an initiator and advocate of technological innovation."
    },
    {
      question_id: "AI_c1_cs_033_4",
      question: "When Meera explains the change, listens to objections and obtains feedback, she is primarily demonstrating which leadership dimension?",
      options: [
        "Communication",
        "Cost leadership",
        "Structural cost management",
        "Product differentiation"
      ],
      answer: 1,
      reason: "Communication is a key leadership dimension and involves two-way exchange, including feedback and listening."
    },
    {
      question_id: "AI_c1_cs_033_5",
      question: "Why would relying only on historical accounting figures be inappropriate when evaluating the automated inspection proposal?",
      options: [
        "Because financial information can never be used for strategic decisions",
        "Because strategic analysis may require financial and non-financial information and consideration of future effects",
        "Because management accountants should never prepare budgets",
        "Because automation is always profitable"
      ],
      answer: 2,
      reason: "Strategic analysis requires broader information, including non-financial factors and expected future consequences."
    }
  ]
},
{
  case_id: "AI_c1_cs_034",
  difficulty: "medium",
  case_topic: ["Communication", "Feedback", "Management by Wandering Around", "Leadership"],
  case_chapter: "An Introduction to Strategic Cost Management",
  caseText: `
    <p><b>Zenith Packaging Limited</b> decided to introduce a new production planning system. Senior management believed that the system would improve capacity utilisation and reduce production delays. A detailed circular explaining the new system was sent to all employees.</p>

    <p>Management initially believed that the communication exercise had been successful because the circular had been delivered to every employee. However, within two weeks, supervisors reported that employees were following the new procedures inconsistently. Some employees believed that the system would reduce their importance, while others did not understand why the existing method had to be changed.</p>

    <p>The management accountant leading the implementation realised that sending information was not equivalent to effective communication. He arranged small meetings with production teams and encouraged employees to ask questions. He also visited different production areas without following a fixed schedule. During these visits, he observed the actual working environment and spoke informally with employees.</p>

    <p>One employee explained that the new system required additional data entry during shift changes. Another pointed out that the system did not adequately reflect a particular production constraint. These observations had not appeared in formal management reports.</p>

    <p>The accountant subsequently modified the implementation process and explained to employees why the changes were being made. Senior management noticed that employees became more willing to cooperate after their concerns were heard and acted upon.</p>
  `,
  questions: [
    {
      question_id: "AI_c1_cs_034_1",
      question: "Why was the original circular insufficient to ensure effective communication?",
      options: [
        "Communication is complete whenever information is transmitted",
        "Effective communication requires feedback and understanding rather than merely sending a message",
        "Written communication is always ineffective",
        "Employees should never receive formal communication"
      ],
      answer: 2,
      reason: "Communication is a two-way process. Feedback helps determine whether the message was understood and reveals resistance or concerns."
    },
    {
      question_id: "AI_c1_cs_034_2",
      question: "The accountant's practice of visiting production areas without following a fixed schedule most closely represents:",
      options: [
        "Management by Wandering/Walking Around",
        "Zero-based budgeting",
        "Value engineering",
        "Activity-based costing"
      ],
      answer: 1,
      reason: "MBWA involves managers moving around the workplace in an unstructured or random manner to observe and interact with employees."
    },
    {
      question_id: "AI_c1_cs_034_3",
      question: "The informal conversations revealed information that was absent from formal reports mainly because:",
      options: [
        "Informal communication can provide direct insights from employees and the workplace",
        "Formal reports are legally prohibited",
        "Informal communication automatically replaces all formal systems",
        "Employees are never included in formal reports"
      ],
      answer: 1,
      reason: "Direct informal interaction can reveal operational issues and employee concerns that may not appear in formal reporting systems."
    },
    {
      question_id: "AI_c1_cs_034_4",
      question: "Which action would most likely reduce resistance to the new system?",
      options: [
        "Increasing the number of circulars without accepting feedback",
        "Listening to concerns, explaining the reasons for change and incorporating relevant feedback",
        "Stopping communication until employees accept the change",
        "Allowing only senior managers to discuss the system"
      ],
      answer: 2,
      reason: "Two-way communication, listening and feedback help reduce resistance during organisational change."
    },
    {
      question_id: "AI_c1_cs_034_5",
      question: "The accountant's observation that employees had concerns but were initially not expressing them demonstrates the importance of:",
      options: [
        "Listening in addition to merely hearing",
        "Increasing fixed costs",
        "Supplier concentration",
        "Product differentiation"
      ],
      answer: 1,
      reason: "Effective communication requires active listening and an attempt to understand the receiver's concerns."
    }
  ]
},
{
  case_id: "AI_c1_cs_035",
  difficulty: "medium",
  case_topic: ["Business Ethics", "Triple Bottom Line", "Lifecycle Cost", "Management Accountant"],
  case_chapter: "An Introduction to Strategic Cost Management",
  caseText: `
    <p><b>GreenCore Infrastructure Limited</b> was evaluating a proposal to construct a specialised manufacturing facility. The project appeared highly attractive on the basis of its projected sales and operating profit. The finance team therefore recommended immediate approval.</p>

    <p>The management accountant, however, requested that management consider costs that were not included in the initial financial evaluation. The proposed facility would require specialised land preparation and, after several years, substantial expenditure would be required to clean and restore the site. Certain nearby communities could also be displaced during the development of the project.</p>

    <p>The project manager argued that these costs should not affect the investment decision because they would arise many years after production began. The management accountant disagreed, stating that evaluating only current operating profitability could result in an incomplete assessment of the economic consequences of the project.</p>

    <p>At the board meeting, one director argued that the company's only responsibility was to maximise shareholder wealth. Another director stated that the company should consider employees, customers, suppliers, communities and environmental consequences while making decisions.</p>

    <p>The board finally requested an evaluation covering financial performance, social consequences and environmental impact. The management accountant was asked to prepare a framework that would allow management to evaluate the project without ignoring legitimate economic objectives.</p>
  `,
  questions: [
    {
      question_id: "AI_c1_cs_035_1",
      question: "The management accountant's insistence on including future site-cleaning expenditure is most closely associated with:",
      options: [
        "Lifecycle costing",
        "Customer segmentation",
        "Supplier concentration",
        "Market penetration"
      ],
      answer: 1,
      reason: "Lifecycle costing considers costs throughout the life of a project/product, including relevant end-of-life costs."
    },
    {
      question_id: "AI_c1_cs_035_2",
      question: "The director advocating consideration of communities and environmental consequences is closest to which approach?",
      options: [
        "Pure shareholder wealth maximisation without other considerations",
        "Socio-economic/stakeholder-oriented approach",
        "Cost-plus pricing",
        "Inbound logistics"
      ],
      answer: 2,
      reason: "The socio-economic approach considers economic objectives together with social costs and stakeholder interests."
    },
    {
      question_id: "AI_c1_cs_035_3",
      question: "Which combination best represents the triple bottom line perspective?",
      options: [
        "Profit, people and planet",
        "Price, production and procurement",
        "Profit, productivity and purchasing",
        "People, procurement and patents"
      ],
      answer: 1,
      reason: "Triple bottom line evaluates performance across economic, social and environmental dimensions."
    },
    {
      question_id: "AI_c1_cs_035_4",
      question: "If the board evaluates only projected operating profit and ignores environmental and social consequences, the major weakness would be:",
      options: [
        "The evaluation may be excessively narrow from an ethical and broader performance perspective",
        "The project automatically becomes loss-making",
        "Lifecycle costs become irrelevant",
        "The company can no longer prepare budgets"
      ],
      answer: 1,
      reason: "Excessive focus on financial efficiency can overlook social and environmental consequences."
    },
    {
      question_id: "AI_c1_cs_035_5",
      question: "Which statement best describes the management accountant's role in this situation?",
      options: [
        "To ignore non-financial information because it cannot be measured",
        "To provide relevant financial and non-financial information while maintaining ethical considerations",
        "To approve the project independently of the board",
        "To focus only on reducing current-year expenditure"
      ],
      answer: 2,
      reason: "Modern management accountants contribute broader analysis and should incorporate ethical and relevant non-financial considerations."
    }
  ]
},
{
  case_id: "AI_c1_cs_036",
  difficulty: "hard",
  case_topic: ["Porter's Five Forces", "Threat of New Entrants", "Information Technology", "Barriers to Entry"],
  case_chapter: "An Introduction to Strategic Cost Management",
  caseText: `
    <p><b>MetroTrust Bank</b> operates a large network of physical branches across several cities. For many years, management believed that the branch network itself created a significant barrier to entry because a new banking institution would need substantial capital and infrastructure to compete with the bank's geographic reach.</p>

    <p>Over time, however, digital banking platforms became increasingly sophisticated. Customers began opening accounts through mobile applications, conducting transactions electronically and obtaining services without visiting branches. Several new financial institutions entered selected markets without establishing traditional branch networks. Instead, they invested heavily in mobile applications, automated customer verification, cloud infrastructure and digital customer acquisition.</p>

    <p>MetroTrust responded by investing in a highly sophisticated integrated banking platform. The system required substantial capital expenditure and specialised technical expertise. It integrated customer information, transaction processing, risk monitoring, automated service and digital channels. Management believed that maintaining such a system would be difficult for a small entrant.</p>

    <p>At the same time, the bank discovered that technology had weakened some traditional barriers. New entrants could use internet-based distribution and mobile banking to reach customers without spending the amount traditionally required for a physical branch network.</p>

    <p>The strategy team therefore prepared two apparently contradictory observations. The first stated that advanced technology could create a barrier because sophisticated systems were expensive and technically challenging. The second stated that technology could reduce entry barriers because digital channels allowed entrants to reach customers without traditional infrastructure.</p>

    <p>The CEO asked the management accountant to explain whether these two observations were inconsistent and what conclusion should be drawn about the threat of new entrants.</p>
  `,
  questions: [
    {
      question_id: "AI_c1_cs_036_1",
      question: "Which of the following best resolves the apparent contradiction identified by the strategy team?",
      options: [
        "Technology always increases barriers to entry",
        "Technology always decreases barriers to entry",
        "Technology can increase or decrease barriers depending on how it changes infrastructure requirements and competitive capabilities",
        "Technology has no relationship with entry barriers"
      ],
      answer: 3,
      reason: "Sophisticated technology can create technical and capital barriers, while digital channels can simultaneously reduce the need for traditional infrastructure."
    },
    {
      question_id: "AI_c1_cs_036_2",
      question: "MetroTrust's expensive and technically sophisticated integrated platform can strengthen its position primarily because it may:",
      options: [
        "Make imitation and technological entry more difficult",
        "Eliminate all customer switching costs",
        "Guarantee that no substitute will ever arise",
        "Eliminate supplier bargaining power"
      ],
      answer: 1,
      reason: "Capital requirements and technically challenging applications can act as barriers to new entrants."
    },
    {
      question_id: "AI_c1_cs_036_3",
      question: "The new entrants' use of mobile banking primarily demonstrates that:",
      options: [
        "Digital technology can reduce dependence on traditional branch infrastructure",
        "Technology always increases fixed physical assets",
        "Banks must use physical branches to compete",
        "Digital channels eliminate competition"
      ],
      answer: 1,
      reason: "Internet and mobile technologies can reduce the need for extensive physical distribution networks."
    },
    {
      question_id: "AI_c1_cs_036_4",
      question: "If MetroTrust evaluates the threat of new entrants only by looking at the number of physical branches possessed by competitors, the analysis would be:",
      options: [
        "Strategically incomplete",
        "Perfectly rational",
        "A complete measure of technology barriers",
        "A measure of customer switching costs only"
      ],
      answer: 1,
      reason: "The digital environment changes the nature of entry barriers, so physical infrastructure alone cannot adequately assess the threat."
    },
    {
      question_id: "AI_c1_cs_036_5",
      question: "Which Porter Five Forces factor is most directly being evaluated throughout the case?",
      options: [
        "Threat of substitutes",
        "Bargaining power of suppliers",
        "Threat of new entrants",
        "Bargaining power of buyers"
      ],
      answer: 3,
      reason: "The central strategic issue is whether technology makes it easier or harder for new competitors to enter the banking industry."
    }
  ]
},
{
  case_id: "AI_c1_cs_037",
  difficulty: "hard",
  case_topic: ["Supplier Bargaining Power", "E-Procurement", "Supplier Concentration", "Information Technology"],
  case_chapter: "An Introduction to Strategic Cost Management",
  caseText: `
    <p><b>Orion Auto Components Limited</b> purchases specialised electronic components from a relatively small number of suppliers. Historically, procurement managers negotiated individually with suppliers. Because some suppliers supplied critical components that could not easily be replaced, Orion frequently accepted higher prices and unfavourable delivery terms.</p>

    <p>The procurement department proposed an electronic procurement platform. The platform would allow procurement managers to collect quotations from multiple suppliers, compare prices and technical specifications, monitor historical supplier performance and identify alternative sources. It would also connect selected suppliers with Orion's enterprise system.</p>

    <p>Under the proposed arrangement, suppliers would receive electronic information regarding expected demand. Certain routine orders could be automatically generated when predetermined requirements were reached. The procurement team also planned to use commercial databases to compare market prices before negotiating major contracts.</p>

    <p>However, the procurement director warned that the system would not automatically eliminate supplier power. One supplier controlled a proprietary component for which no close substitute was immediately available. Switching to another supplier would require redesigning the component and obtaining new approvals. Furthermore, the supplier had significant expertise and could potentially enter downstream activities.</p>

    <p>The management accountant was asked to assess whether the new IT system had solved the supplier-power problem or merely improved Orion's ability to manage it.</p>
  `,
  questions: [
    {
      question_id: "AI_c1_cs_037_1",
      question: "Which feature of the new system most directly helps Orion reduce information disadvantage during supplier negotiations?",
      options: [
        "Commercial databases that allow comparison of market prices",
        "Increasing dependence on one supplier",
        "Reducing the number of supplier quotations",
        "Eliminating supplier performance records"
      ],
      answer: 1,
      reason: "Commercial databases and price comparisons provide procurement managers with better market information."
    },
    {
      question_id: "AI_c1_cs_037_2",
      question: "Why does the proprietary component supplier continue to possess bargaining power despite Orion's e-procurement system?",
      options: [
        "Because IT systems automatically increase supplier concentration",
        "Because the component has no close substitute and switching requires redesign and approval",
        "Because electronic procurement prevents negotiation",
        "Because supplier power depends only on the number of employees"
      ],
      answer: 2,
      reason: "Supplier uniqueness, lack of substitutes and switching costs are important determinants of supplier bargaining power."
    },
    {
      question_id: "AI_c1_cs_037_3",
      question: "The possibility that the supplier may enter downstream activities is relevant because it represents:",
      options: [
        "Threat of forward integration",
        "Threat of backward integration by buyers",
        "Customer loyalty",
        "Economies of scope"
      ],
      answer: 1,
      reason: "Forward integration occurs when a supplier moves toward activities performed by its customers."
    },
    {
      question_id: "AI_c1_cs_037_4",
      question: "The proposed electronic connection between Orion and suppliers for automatic replenishment most directly supports:",
      options: [
        "Procurement and supply-chain integration",
        "Customer segmentation",
        "After-sales service only",
        "Firm infrastructure only"
      ],
      answer: 1,
      reason: "EDI/electronic integration with suppliers can support procurement and improve supply-chain coordination."
    },
    {
      question_id: "AI_c1_cs_037_5",
      question: "Which conclusion is most appropriate regarding Orion's IT investment?",
      options: [
        "It automatically eliminates supplier bargaining power",
        "It improves Orion's ability to identify, compare and manage suppliers but does not eliminate structural sources of supplier power",
        "It makes all suppliers interchangeable",
        "It guarantees that supplier prices will always fall"
      ],
      answer: 2,
      reason: "IT can strengthen procurement and negotiation capabilities, but structural factors such as uniqueness, substitutes and switching costs may continue to create supplier power."
    }
  ]
},
{
  case_id: "AI_c1_cs_038",
  difficulty: "hard",
  case_topic: ["Value Proposition Canvas", "Customer Profile", "Value Map", "Problem-Solution Fit", "Product-Market Fit"],
  case_chapter: "An Introduction to Strategic Cost Management",
  caseText: `
    <p><b>LearnSphere Technologies</b> operates an online professional education platform. The company initially assumed that students primarily wanted a large number of video lectures. Accordingly, its first value proposition emphasised the size of its lecture library.</p>

    <p>After collecting detailed customer information, the company discovered that students had several different jobs. Some wanted to pass professional examinations, some wanted to revise concepts quickly before tests, while others wanted practical application of concepts. Their pains also differed. Some students complained about the time required to locate relevant material, while others struggled to determine which topics required greater attention.</p>

    <p>The company also identified several gains students desired. Students wanted confidence about examination readiness, quick identification of weak areas, realistic practice and a clear indication of their progress.</p>

    <p>LearnSphere therefore redesigned its offering. Instead of simply increasing the number of lectures, it introduced topic-wise practice, performance analytics, targeted revision material and progress indicators. Management classified these features as part of the business's response to customer pains and desired gains.</p>

    <p>However, the strategy director warned that management should not assume that merely creating the redesigned value proposition meant the company had achieved product-market fit. The company first needed to determine whether the proposed value proposition actually matched the identified customer profile. After launch, the company would need evidence that the market accepted the offering and that the product achieved meaningful traction.</p>

    <p>The management accountant was asked to distinguish between customer-side elements and business-side elements and to explain the difference between problem-solution fit and product-market fit.</p>
  `,
  questions: [
    {
      question_id: "AI_c1_cs_038_1",
      question: "Which of the following belongs to the Customer Profile rather than the Value Map?",
      options: [
        "Progress indicators developed by LearnSphere",
        "Targeted revision material",
        "Students' difficulty in identifying weak areas",
        "Performance analytics introduced by the company"
      ],
      answer: 3,
      reason: "Customer Profile contains jobs, pains and gains. Difficulty in identifying weak areas is a customer pain."
    },
    {
      question_id: "AI_c1_cs_038_2",
      question: "LearnSphere's targeted revision material intended to address students' difficulty in locating important material is best classified as:",
      options: [
        "Customer pain",
        "Pain reliever",
        "Customer gain",
        "Customer segment"
      ],
      answer: 2,
      reason: "Pain relievers are business-side elements designed to reduce or remove customer pains."
    },
    {
      question_id: "AI_c1_cs_038_3",
      question: "Students' desire for confidence about examination readiness represents:",
      options: [
        "A gain",
        "A pain reliever",
        "A product/service",
        "A key resource"
      ],
      answer: 1,
      reason: "Desired benefits and outcomes from the customer's perspective are gains."
    },
    {
      question_id: "AI_c1_cs_038_4",
      question: "When LearnSphere designs a value proposition that matches the identified jobs, pains and gains of students, it is primarily seeking:",
      options: [
        "Problem-solution fit",
        "Product-market fit",
        "Backward integration",
        "Cost leadership"
      ],
      answer: 1,
      reason: "Problem-solution fit exists when the Value Map corresponds with the Customer Profile."
    },
    {
      question_id: "AI_c1_cs_038_5",
      question: "Why would management be incorrect in declaring product-market fit immediately after designing the new offering?",
      options: [
        "Because product-market fit requires market validation and evidence of traction",
        "Because customer profiles cannot contain pains",
        "Because a value proposition can never contain services",
        "Because product-market fit occurs before identifying customer needs"
      ],
      answer: 1,
      reason: "Product-market fit is reached after the market validates the offering and meaningful traction is achieved."
    }
  ]
},
{
  case_id: "AI_c1_cs_039",
  difficulty: "very hard",
  case_topic: ["Cost Drivers", "Structural Cost Drivers", "Executional Cost Drivers", "Activity Drivers", "Strategic Cost Management"],
  case_chapter: "An Introduction to Strategic Cost Management",
  caseText: `
    <p><b>PrecisionCast Industries</b> manufactures highly customised industrial components. Its management initially attempted to reduce manufacturing costs by negotiating lower prices for raw materials. Although material prices declined slightly, total manufacturing cost continued to rise.</p>

    <p>A detailed cost-driver investigation revealed that the company's production system had become increasingly complex. The company had added several product lines, each requiring different production processes. The number of components used across products had also increased. Certain products required specialised equipment and separate production procedures.</p>

    <p>The management accountant classified these factors as part of the underlying economic structure of the business. He explained that increasing the scale of operations, expanding the scope of products, adopting different technologies and increasing complexity can influence cost behaviour even before considering individual production activities.</p>

    <p>A second investigation identified several operational issues. Production workers were not sufficiently involved in improvement programmes, capacity utilisation varied significantly between departments, plant layout resulted in unnecessary movement, and relationships with some suppliers were poorly coordinated.</p>

    <p>At the shop-floor level, the accountant identified costs associated with machine hours, assembly labour hours, number of production setups, inspection hours, defective units and engineering change orders. Management initially wanted to classify all of these as the same type of cost driver.</p>

    <p>The accountant disagreed. He explained that the first set of factors represented strategic structural conditions, the second set represented executional choices, and the third set contained operational drivers operating at different levels such as unit, batch and product levels.</p>

    <p>The board requested a recommendation for cost reduction that would avoid the common mistake of treating every cost increase as a result of excessive spending on individual production units.</p>
  `,
  questions: [
    {
      question_id: "AI_c1_cs_039_1",
      question: "The increase in product lines, production processes and component variety is most closely associated with which type of cost driver?",
      options: [
        "Executional cost driver",
        "Structural cost driver",
        "Customer gain",
        "Resource driver only"
      ],
      answer: 2,
      reason: "Scale, scope, experience, technology and complexity are structural cost-driver factors."
    },
    {
      question_id: "AI_c1_cs_039_2",
      question: "Poor plant layout and inadequate supplier relationships are best classified as:",
      options: [
        "Structural cost drivers",
        "Executional cost drivers",
        "Customer pains",
        "Revenue drivers"
      ],
      answer: 2,
      reason: "Plant layout and supplier/customer linkages are examples of executional cost drivers."
    },
    {
      question_id: "AI_c1_cs_039_3",
      question: "Which of the following is most appropriately a batch-level operational cost driver?",
      options: [
        "Assembly labour hours for one unit",
        "Number of production setups",
        "Number of different product lines",
        "Electricity consumed by a machine per hour"
      ],
      answer: 2,
      reason: "Number of setups is a batch-level driver because setup activities are generally incurred for batches rather than individual units."
    },
    {
      question_id: "AI_c1_cs_039_4",
      question: "Which of the following is most appropriately associated with the product level?",
      options: [
        "Machine hours",
        "Number of defective units",
        "Number of engineering change orders",
        "Kilowatt-hours consumed"
      ],
      answer: 3,
      reason: "Engineering change orders are identified as product-level operational cost drivers."
    },
    {
      question_id: "AI_c1_cs_039_5",
      question: "Which conclusion would best support strategic cost management in PrecisionCast?",
      options: [
        "Cost reduction should focus only on negotiating cheaper materials",
        "Every cost should be reduced regardless of whether it supports strategic objectives",
        "Management should identify the underlying structural, executional and operational drivers before deciding how costs should be managed",
        "Only unit-level costs are strategically relevant"
      ],
      answer: 3,
      reason: "Strategic cost management requires understanding why costs arise through appropriate cost-driver analysis rather than merely cutting individual expenditures."
    }
  ]
},
{
  case_id: "AI_c1_cs_040",
  difficulty: "very hard",
  case_topic: ["Strategic Positioning", "Cost Leadership", "Differentiation", "Value Chain", "Value Proposition", "Business Model"],
  case_chapter: "An Introduction to Strategic Cost Management",
  caseText: `
    <p><b>NovaRide Mobility</b> operates in a highly competitive electric mobility market. At the time of entering the market, the company considered two broad strategic positions. The first was to become a cost leader by developing highly efficient production processes and maintaining relatively low prices. The second was to differentiate its products through superior software, customer experience, battery management and after-sales service.</p>

    <p>The founders initially attempted to pursue both approaches simultaneously. The company offered low introductory prices while also providing highly customised software, premium customer support, frequent product upgrades and specialised after-sales services. As sales increased, management discovered that the additional features significantly increased operating costs.</p>

    <p>At the same time, competitors introduced lower-priced products with standardised features. Other competitors offered premium products with strong brand positioning and advanced technology. NovaRide found itself unable to match the lowest-cost competitors on price and unable to charge the premium prices commanded by highly differentiated competitors.</p>

    <p>The strategy team therefore performed a value-chain analysis. It discovered that some activities created value from the customer's perspective, while others were costly activities that customers did not consider important. The company also identified opportunities to eliminate certain non-value-added activities while concentrating resources on features that customers valued.</p>

    <p>The management accountant was asked to work with marketing and operations to redefine the company's value proposition. The team identified customer jobs, pains and gains and compared them with the products, services, pain relievers and gain creators offered by NovaRide.</p>

    <p>During the review, the CEO argued that the company should simply try to become "the best at everything" so that it could appeal to every type of customer. The strategy director disagreed and stated that the business needed a clear basis of competition and should decide how it would create value differently from rivals.</p>

    <p>The board also reviewed the company's business model. It considered key partners, key activities, key resources, customer segments, customer relationships, channels, revenue streams and cost structure. Management concluded that changing the value proposition without changing the supporting resources, processes and economic logic could create another strategic mismatch.</p>

    <p>The management accountant was finally asked to explain how strategic positioning, value-chain analysis, the Value Proposition Canvas and the Business Model Canvas should interact in determining the company's future direction.</p>
  `,
  questions: [
    {
      question_id: "AI_c1_cs_040_1",
      question: "NovaRide's initial attempt to simultaneously compete through very low prices and extensive premium features creates the greatest risk of:",
      options: [
        "Becoming stuck in the middle without a clear strategic position",
        "Automatically becoming the cost leader",
        "Eliminating competitive rivalry",
        "Creating a monopoly"
      ],
      answer: 1,
      reason: "Trying to pursue conflicting strategic positions without a clear basis of competition can result in being 'stuck in the middle'."
    },
    {
      question_id: "AI_c1_cs_040_2",
      question: "The company's discovery that some activities consume resources but are not valued by customers should lead management primarily to:",
      options: [
        "Increase all activities equally",
        "Eliminate or reduce non-value-added activities while concentrating resources on value-added activities",
        "Eliminate all differentiation activities",
        "Ignore customer preferences"
      ],
      answer: 2,
      reason: "Value-chain analysis identifies value-added and non-value-added activities so that NVA activities can be reduced/eliminated and resources focused on value creation."
    },
    {
      question_id: "AI_c1_cs_040_3",
      question: "When NovaRide identifies customer jobs, pains and gains, it is constructing which part of the Value Proposition Canvas?",
      options: [
        "Value Map",
        "Customer Profile",
        "Cost Structure",
        "Key Resources"
      ],
      answer: 2,
      reason: "The Customer Profile contains customer jobs, pains and gains."
    },
    {
      question_id: "AI_c1_cs_040_4",
      question: "NovaRide's products and services, pain relievers and gain creators belong to:",
      options: [
        "Customer Profile",
        "Value Map",
        "Supplier analysis",
        "PESTEL analysis"
      ],
      answer: 2,
      reason: "The Value Map consists of products/services, pain relievers and gain creators."
    },
    {
      question_id: "AI_c1_cs_040_5",
      question: "Why is the strategy director correct in saying that changing NovaRide's value proposition without considering resources, processes and economic logic may create a mismatch?",
      options: [
        "Because the Business Model Canvas connects the value proposition with key resources, key activities, partners and the economic structure of the business",
        "Because value propositions are unrelated to business models",
        "Because customer segments determine all internal activities automatically",
        "Because a company can never change its business model"
      ],
      answer: 1,
      reason: "The business model explains how the business works and includes the value proposition together with key resources, processes/activities, partners and the profit/cost logic needed to deliver it."
    }
  ]
}
];