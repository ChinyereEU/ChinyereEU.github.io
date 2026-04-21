/**
 * data.js
 * -------
 * All portfolio content lives here.
 * Edit this file to update experience, projects, presentations, and education.
 */

const DATA = {

  experience: [
    {
      date: "Mar 2025 – Present",
      role: "Graduate Research Assistant",
      org: "Rutgers – Office of Institutional Research & Decision Support",
      bullets: [
        "Led multi-campus administration of the Undergraduate Experience Survey across 40,000+ students in Qualtrics",
        "Identified a Qualtrics anomaly affecting 950 respondents; built corrective workflows to maintain pipeline integrity",
        "Executed large-scale roster QA across three campuses using R, Python, SPSS, and Excel",
        "Built fuzzy-matching & duplicate-resolution workflows in R to integrate 941 student org records from the Engage API",
        "Conducted longitudinal cohort analyses on engagement, retention, and equity gaps for strategic planning",
        "Developed an M-index dining utilization algorithm (n = 4,800+, p < 0.001) for evidence-based resource allocation - <a href='https://studentaffairs.rutgers.edu/news/more-meal-new-data-dining-halls-social-connectedness-and-retention' target='_blank' rel='noopener' class='news-link'>↗ Featured in Rutgers News</a>",
        "Produced executive dashboards translating survey data into actionable insights for academic stakeholders",
        "Collaborated with academic units to align analyses with institutional priorities and support data-informed decisions",
      ],
    },
    {
      date: "Spr – Fall 2024",
      role: "Student Researcher, CS Education",
      org: "Rutgers Women in Computer Science",
      bullets: [
        "Designed Qualtrics surveys for 900+ students to assess CS and IT&I curriculum effectiveness and student engagement",
        "Built Tableau and Plotly visualizations supporting curriculum improvement recommendations",
      ],
    },
    {
      date: "Fall 2024",
      role: "Treasurer & At-Large Member",
      org: "RUSA Allocations Board, Rutgers University",
      bullets: [
        "Supported equitable distribution of $1M+ in funding across 400+ student organizations",
        "Tracked budgets, allocation requests, and managed bi-weekly appeals processes",
      ],
    },
  ],

  projects: [
    {
        title: "Student Organizations Survey Data Integration",
        status: "active",
        statusLabel: "In Progress",
        desc: "Integrated survey responses with 941 university club records via institutional API, building fuzzy-matching pipelines in R to standardize names, resolve duplicates, and link unstructured inputs to official identifiers.",
        tags: ["R", "Fuzzy Matching", "API", "Data Cleaning"],
        link: null,
    },
    {
      title: "SurveyList Webpage Rebuild",
      status: "done",
      statusLabel: "Completed",
      desc: `Rebuilt the OIRDS Survey Research Program site from scratch — audience-segmented sub-pages (undergraduate, graduate, faculty, 
              staff), structured data tables, full navigation, header, and footer. 
              Now live at oirds.rutgers.edu.`,
      tags: ["HTML", "CSS"],
      link: "https://oirds.rutgers.edu/surveys/SurveysList.html",
      linkLabel: "Live Site →",
      image: "../assets/oirds-before-after.png",
      imageAlt: "Before and after comparison of the OIRDS SurveyList webpage redesign",
    },
    {
      title: "COVID-19 Early Detection & Surveillance (NJ)",
      status: "active",
      statusLabel: "In Progress",
      desc: "ZIP-code-level NJ outbreak model using drift detection (KS test, CUSUM, Isolation Forest) to identify structural shifts earlier than county-level models.",
      tags: ["Python", "Epidemiology", "Anomaly Detection"],
      link: null,
    },
    {
      title: "WiDS 2026 — Wildfire Survival Model",
      status: "done",
      statusLabel: "Completed",
      desc: "Discrete-time survival model predicting wildfire proximity to evacuation zones at 12h / 24h / 48h / 72h horizons using gradient-boosted hazard estimation.",
      tags: ["Survival Analysis", "XGBoost", "Brier Score CV"],
      link: "https://github.com/ChinyereEU/WiDSWorldWide_GlobalDathon26",
    },
    {
      title: "Fake News Categorization (~45,000 articles)",
      status: "done",
      statusLabel: "Completed",
      desc: "NLP-based fake news classification pipeline achieving 98.33% accuracy. Built with Python, TF-IDF, and Random Forest. Includes a live interactive demo.",
      tags: ["NLP", "TF-IDF", "Feature Engineering", "Random Forest", "Streamlit"],
      link: "https://github.com/ChinyereEU/fake-news-detector",
      demo: "https://fake-news-detector-ceu.streamlit.app",
    },
    {
      title: "Airbnb NYC Price Prediction",
      status: "done",
      statusLabel: "Completed",
      desc: "Validated regression model on 40K+ listings with 5-fold CV identifying key price variability drivers across neighborhood, amenity, and host-level features.",
      tags: ["Regression", "Cross-validation"],
      link: "https://github.com/ChinyereEU/My-eCornell-Portfolio",
    },
  ],

  presentations: [
    {
      year: "2026",
      title: "Excellence in Career Readiness Award - Professionalism Category",
      venue: "Rutgers University Career Exploration and Success Center · Selected as one of eight recipients institution-wide.",
    },
    {
      year: "2026",
      title: "From Survey to Success: Predicting First-Year Retention Through Longitudinal Data Analysis",
      venue: "American Educational Research Association (AERA) Annual Meeting — Co-author",
    },
    {
      year: "2025",
      title: "Meet the Cohort of 2025: What Multi-Year New Student Survey Data Reveals About Our Newest Scarlet Knights",
      venue: "Rutgers University — Office of Institutional Research & Decision Support, December 2025",
    },
    {
      year: "2025",
      title: "Machine Learning Foundations",
      venue: "Cornell Tech — Break Through Tech AI/ML Program",
    },
    {
      year: "2024",
      title: "Social / Behavioral / Epidemiologic Research Investigators",
      venue: "CITI Program Certification",
    },
  ],

  education: [
    {
      degree: "MBS, Analytics & Data Science",
      school: "Rutgers University",
      meta: "GPA: 3.89 · Expected May 2026",
      courses: "Regression · BI & Visual Analytics · Data Warehousing · Data Management · Data Structures (Java)",
    },
    {
      degree: "B.S. Chemistry",
      school: "West Virginia State University",
      meta: "GPA: 3.84 · April 2021",
      courses: "General Chemistry · Organic Chemistry · Analytical Chemistry · Biochemistry · Physical Chemistry · Spectroscopic Methods",
    },
  ],

};