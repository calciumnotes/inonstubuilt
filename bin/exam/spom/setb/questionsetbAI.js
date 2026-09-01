const caseStudies = [
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
}
];