/* =====================================================================
   PORTFOLIO DATA — edit this file to update the website.
   Open it in any text editor (Notepad, VS Code), change the text inside
   the quotes, save, and re-upload. You do not need to touch index.html.
   ===================================================================== */

/* ---------- 1. Contact details and social links ----------
   To remove a link, delete its line. To add one, copy a line and change it.
   Icons come from https://fontawesome.com/icons (free icons). */
const PROFILE = {
  name: "Md Feroz Ahmed",
  email: "ferozahmedafm@gmail.com",
  phoneDisplay: "+880 1794 525185",
  phoneIntl: "8801794525185",          // used for the WhatsApp link, digits only
  location: "Bogura, Bangladesh (UTC+6)",
  cv: "Md_Feroz_Ahmed_CV.pdf",         // replace the PDF file with the same name to update your CV
  socials: [
    { label: "GitHub",   icon: "fa-brands fa-github",      url: "https://github.com/feroz-afm" },
    { label: "LinkedIn", icon: "fa-brands fa-linkedin-in", url: "https://www.linkedin.com/in/md-feroz-ahmed-8126b53aa/" },
    { label: "Kaggle",   icon: "fa-brands fa-kaggle",      url: "https://www.kaggle.com/mdferozahmedafm" },
    { label: "Codeforces", icon: "fa-solid fa-chart-column", url: "https://codeforces.com/profile/feroz_cse" },
    { label: "Facebook", icon: "fa-brands fa-facebook-f",  url: "https://www.facebook.com/feroz.ahmed.01/" },
    { label: "Telegram", icon: "fa-brands fa-telegram",    url: "https://t.me/feroz_ahmed_afm" },
    { label: "WhatsApp", icon: "fa-brands fa-whatsapp",    url: "https://wa.me/8801794525185" },
    { label: "Coursera", icon: "fa-solid fa-graduation-cap", url: "https://www.coursera.org/learner/feroz-afm-01" },
  ],
};

/* ---------- Kaggle numbers ----------
   Kaggle has no public feed, so update these numbers by hand when your profile changes.
   Every place on the site that shows them reads from here. */
const KAGGLE = { rank: 469, total: "57,237", best: 433, notebooks: 56, medals: 22, datasets: 24, upvotes: 745, competitions: 13, updated: "November 2026" };

/* ---------- GitHub live feed ----------
   The "Latest on GitHub" strip loads your newest public repositories by itself every
   time someone opens the site. Change GITHUB_SHOW to show more or fewer cards. */
const GITHUB_USER = "feroz-afm";
const GITHUB_SHOW = 6;
const GITHUB_HIDE = ["feroz-afm", "feroz-portfolio"]; // repositories to leave out of the strip

/* ---------- 2. "Specialized in" line under your name ---------- */
const SPECIALTIES = ["Computer Vision","Deep Learning","Generative AI"];

/* ---------- Demo videos ----------
   title / desc: what the demo shows. url: the LinkedIn (or YouTube) post.
   video: optional — put an .mp4 file in the folder and write its name here
   (for example "attendeye-demo.mp4") to play it directly on the site.
   thumb: optional cover picture for the card, e.g. "img/my-demo.jpg"
   (a screenshot from the video, saved in the img folder). */
const DEMOS = [
  { title: "30 Seconds of Glory: AgriShift AI", desc: "Pick a field and get a crop rotation plan from 25 years of NASA data, in Bangla, by voice, even offline.", url: "https://lnkd.in/p/gX7cAiDs", video: "", thumb: "img/demo-agrishift-ai.jpg", live: "https://agrishiftai.hax.com.bd/" },
  { title: "License Plate Detection and OCR with YOLO", desc: "Custom Roboflow dataset, trained YOLO model, and real-time plate detection with text reading on video.", url: "https://lnkd.in/p/g6RiiBGc", video: "", thumb: "img/demo-license-plate-ocr.jpg" },
  { title: "Real-Time Vehicle Tracking and Counting", desc: "YOLO11 detection with persistent track IDs and virtual line-crossing counts for traffic video.", url: "https://lnkd.in/p/gu-JRRZ3", video: "", thumb: "img/demo-vehicle-tracking.jpg" },
  { title: "Vehicle Speed Estimation and Counting", desc: "YOLOv8 with BoT-SORT tracking, speed from line crossings, class-wise counts, CSV log and Gradio app.", url: "https://lnkd.in/p/gd-Mpbpw", video: "", thumb: "img/demo-speed-estimation.jpg" },
];

/* ---------- Certificates ----------
   group: "ai" = shown first and highlighted (AI / ML / computer vision); "other" = the rest.
   verify: the Coursera verification code (the part after /verify/). img: file name in img/ (cert-NAME.jpg and cert-NAME-thumb.jpg).
   learned: one short line on what you learned. */
const CERTS = [
  { group:"ai", key:"ml-spec", icon:"fa-solid fa-award", org:"DeepLearning.AI and Stanford University · Specialization (3 courses)", t:"Machine Learning Specialization", by:"Andrew Ng", date:"January 2025", verify:"specialization/Q3CO83KHCM51",
    learned:"Supervised learning (linear and logistic regression, neural networks, decision trees), unsupervised learning (clustering, anomaly detection), recommender systems, reinforcement learning, and best practices for building models.", star:true },
  { group:"ai", key:"ml-supervised", icon:"fa-solid fa-chart-line", org:"DeepLearning.AI and Stanford · Course 1", t:"Supervised Machine Learning: Regression and Classification", date:"December 2024", verify:"DA0SZACGIDVL",
    learned:"Linear and logistic regression, gradient descent, feature scaling and regularization." },
  { group:"ai", key:"ml-advanced", icon:"fa-solid fa-brain", org:"DeepLearning.AI and Stanford · Course 2", t:"Advanced Learning Algorithms", date:"January 2025", verify:"GJ5Y41AZFU34",
    learned:"Neural networks in TensorFlow, decision trees and ensembles, and how to diagnose and improve a model." },
  { group:"ai", key:"ml-unsupervised", icon:"fa-solid fa-diagram-project", org:"DeepLearning.AI and Stanford · Course 3", t:"Unsupervised Learning, Recommenders, Reinforcement Learning", date:"January 2025", verify:"USBKUSA720A3",
    learned:"Clustering, anomaly detection, recommender systems and reinforcement learning." },
  { group:"ai", key:"opencv", icon:"fa-solid fa-camera", org:"EDUCBA", t:"Master OpenCV Fundamentals for Real-Time Computer Vision", date:"June 2026", verify:"25F7H604CZ92",
    learned:"OpenCV basics for working with images and video in real-time computer vision." },
  { group:"ai", key:"ibm-ml-python", icon:"fa-brands fa-python", org:"IBM", t:"Machine Learning with Python", date:"February 2025", verify:"9SBUR27FY9VP",
    learned:"Building and evaluating machine learning models in Python with scikit-learn." },
  { group:"ai", key:"ibm-eda", icon:"fa-solid fa-chart-column", org:"IBM · with honors", t:"Exploratory Data Analysis for Machine Learning", date:"February 2025", verify:"KH7O7O3OX0LR",
    learned:"Cleaning, exploring and visualizing data before modelling." },
  { group:"other", key:"meta-mysql", icon:"fa-solid fa-database", org:"Meta", t:"Database Structures and Management with MySQL", date:"February 2025", verify:"C3G29NJN4271",
    learned:"Relational database design and SQL queries." },
  { group:"other", key:"meta-backend", icon:"fa-solid fa-server", org:"Meta", t:"Introduction to Back-End Development", date:"October 2024", verify:"OLC4FJZQKZN0",
    learned:"Server-side development basics." },
  { group:"other", key:"meta-frontend", icon:"fa-solid fa-code", org:"Meta", t:"Introduction to Front-End Development", date:"October 2024", verify:"X7HC3GEKHUGF",
    learned:"Building web pages with HTML, CSS and JavaScript." },
  { group:"other", key:"ms-excel-prep", icon:"fa-solid fa-table", org:"Microsoft", t:"Preparing Data for Analysis with Microsoft Excel", date:"October 2024", verify:"YOQE1JWHZZCC",
    learned:"Preparing and cleaning data in Excel for analysis." },
  { group:"other", key:"excel-start", icon:"fa-solid fa-table-cells", org:"Coursera Project", t:"Getting Started with Microsoft Excel", date:"October 2024", verify:"2OS4QI3USEC2",
    learned:"Spreadsheet basics and formulas." },
  { group:"other", key:"html-intro", icon:"fa-brands fa-html5", org:"Coursera Project", t:"Introduction to HTML", date:"October 2024", verify:"7X1ZH5H1OV1D",
    learned:"The structure of a web page in HTML." },
  { group:"other", key:"leeds-online", icon:"fa-solid fa-graduation-cap", org:"University of Leeds", t:"Training and Learning Online", date:"October 2024", verify:"4IT05EECO4JJ",
    learned:"Learning and teaching effectively online." },
];

/* ---------- 3. Skills ----------
   Format: ["Name", "icon", "categories", "small note (optional)"]
   Categories (space separated): core lang dl cv ml agent data ops remote robo lead
   "core" puts the skill in the first "Core Skills" view. */
const SKILLS = [
  ["Python","fa-brands fa-python","core lang"],
  ["C++","fa-solid fa-code","lang"],
  ["C","fa-solid fa-terminal","lang"],
  ["Java","fa-brands fa-java","lang"],
  ["SQL","fa-solid fa-database","lang data"],
  ["Deep Learning","fa-solid fa-brain","core dl"],
  ["PyTorch","fa-solid fa-fire","core dl"],
  ["TensorFlow","fa-solid fa-cube","core dl"],
  ["Keras","fa-solid fa-layer-group","dl"],
  ["CNNs","fa-solid fa-table-cells","dl"],
  ["Transfer Learning","fa-solid fa-right-left","dl","EfficientNet, ResNet, VGG"],
  ["Transformers","fa-solid fa-shuffle","dl agent"],
  ["Computer Vision","fa-solid fa-eye","core cv"],
  ["OpenCV","fa-solid fa-camera","core cv"],
  ["YOLO","fa-solid fa-crosshairs","core cv","v8, v9, 11, 26"],
  ["Object Tracking","fa-solid fa-location-crosshairs","cv","ByteTrack, SORT"],
  ["Face Recognition","fa-solid fa-face-smile","cv","YuNet, SFace"],
  ["Pose Estimation","fa-solid fa-person-running","cv"],
  ["Segmentation","fa-solid fa-object-group","cv"],
  ["OCR","fa-solid fa-font","cv"],
  ["MediaPipe","fa-solid fa-hand","cv"],
  ["Roboflow","fa-solid fa-tags","cv","dataset labelling"],
  ["Albumentations","fa-solid fa-wand-magic","cv dl","augmentation"],
  ["Machine Learning","fa-solid fa-robot","core ml"],
  ["scikit-learn","fa-solid fa-diagram-project","ml"],
  ["XGBoost","fa-solid fa-tree","ml"],
  ["LightGBM","fa-solid fa-bolt","ml"],
  ["CatBoost","fa-solid fa-cat","ml"],
  ["H2O","fa-solid fa-droplet","ml"],
  ["AI Agents","fa-solid fa-user-astronaut","core agent","tool use, function calling"],
  ["Gemini API","fa-solid fa-gem","agent"],
  ["LangChain","fa-solid fa-link","agent"],
  ["Hugging Face","fa-solid fa-face-grin-stars","agent dl"],
  ["Generative AI","fa-solid fa-wand-magic-sparkles","core agent"],
  ["NumPy","fa-solid fa-hashtag","data"],
  ["Pandas","fa-solid fa-table","data"],
  ["Polars","fa-solid fa-snowflake","data"],
  ["Matplotlib & Seaborn","fa-solid fa-chart-line","data"],
  ["EDA","fa-solid fa-magnifying-glass-chart","data ml"],
  ["Kaggle","fa-brands fa-kaggle","core data"],
  ["FastAPI","fa-solid fa-gauge-high","ops"],
  ["Flask","fa-solid fa-flask","ops"],
  ["Streamlit & Gradio","fa-solid fa-display","ops","model demos"],
  ["Docker","fa-brands fa-docker","core ops"],
  ["MLflow & W&B","fa-solid fa-flask-vial","ops","experiment tracking"],
  ["Supabase","fa-solid fa-server","ops"],
  ["React & Next.js","fa-brands fa-react","ops"],
  ["Git & GitHub","fa-brands fa-git-alt","core ops remote"],
  ["Linux","fa-brands fa-linux","core ops remote"],
  ["Jupyter & Colab","fa-solid fa-book-open","ops remote","GPU training"],
  ["English communication","fa-solid fa-comments","remote"],
  ["Documentation","fa-solid fa-file-lines","remote","README, notebooks"],
  ["Team leadership","fa-solid fa-people-group","remote lead","Club GS, Blood AID Joint GS, team leader"],
  ["Async collaboration","fa-solid fa-clock","remote","GitHub teams, UTC+6"],
  ["Event & program management","fa-solid fa-calendar-check","lead","olympiads, hackathons"],
  ["Volunteer coordination","fa-solid fa-hands-holding-circle","lead","PUB Blood AID, BDOAA"],
  ["Public communication","fa-solid fa-bullhorn","lead","campus ambassador"],
  ["Outreach & promotion","fa-solid fa-share-nodes","lead","student campaigns"],
  ["Budgeting","fa-solid fa-coins","lead","IEEE PUB Treasurer, 2025 onward"],
  ["Arduino","fa-solid fa-microchip","robo","UNO, Nano, Arduino IDE"],
  ["Embedded C/C++","fa-solid fa-code","robo lang"],
  ["Motor control","fa-solid fa-gears","robo","L298N, PWM"],
  ["IR sensors","fa-solid fa-wave-square","robo","line detection"],
  ["Circuit prototyping","fa-solid fa-plug","robo","breadboard, wiring"],
];

/* ---------- 4. Projects ----------
   t = title, tag = small label, c = categories (cv dl ai ml sw),
   g = header colour g1..g5, i = icon, d = description,
   m = highlight box (optional), s = tech tags, l = buttons [["GitHub","url"],["Kaggle","url"]],
   lead: true shows a "Team leader" badge, img = photo for the card header,
   note = label shown when there are no links. Newest or best projects go first. */
const PROJECTS = [
  {t:"PUB AttendEye",tag:"Computer Vision",c:"cv featured",g:"g1",i:"fa-solid fa-user-check",
   d:"Face-recognition attendance platform for Pundra University with student, teacher and admin portals, a review queue and audit-logged corrections. Stores embeddings only, no photos.",
   m:"Team version: liveness checks, rotating QR check-in, 94 automated tests",
   s:["OpenCV YuNet + SFace","FastAPI","Next.js 15","Supabase"],
   l:[["GitHub","https://github.com/feroz-afm/Computer-Vision-Based-Smart-Attendance-System-for-Pundra-University"],["Team repo","https://github.com/naimNB/Attendeye"]]},
  {t:"Bangla License Plate Detection",tag:"Computer Vision · Deep Learning",c:"cv dl featured",g:"g2",i:"fa-solid fa-car-rear",
   d:"YOLOv9 detector for Bangladeshi licence plates trained on 4,592 images with 24,174 boxes for 50 epochs. Collaborative project.",
   m:"Precision 0.980 · Recall 0.976 · mAP@50 0.992",
   s:["YOLOv9","PyTorch","Kaggle GPU"],
   l:[["GitHub","https://github.com/feroz-afm/Bangla-License-Plate-Detection-using-YOLOv9"]]},
  {t:"Vehicle Analytics Dashboard",tag:"Computer Vision",c:"cv featured",g:"g5",i:"fa-solid fa-chart-simple",
   d:"Detects and tracks cars, motorcycles, buses and trucks in traffic video and shows live class-wise counts.",
   s:["YOLO26","ByteTrack","OpenCV"],
   l:[["GitHub","https://github.com/feroz-afm/yolo26-vehicle-detection-tracking-dashboard"]]},
  {t:"MIRA: AI Voice Assistant",tag:"AI Engineering · AI Agent",c:"ai featured",g:"g3",i:"fa-solid fa-microphone-lines",
   d:"Bilingual (English and Bangla) assistant for Windows that uses Gemini function calling to manage files, search the web with Google Search grounding and operate WhatsApp Web.",
   m:"Safety: face lock with password fallback, confirmation before risky actions, prompt-injection guard",
   s:["Python","Gemini API","Playwright","OpenCV"],l:[]},
  {t:"AgriShift AI",tag:"AI Engineering · NASA Space Apps 2026",c:"ai featured",g:"g4",i:"fa-solid fa-seedling",lead:true,
   d:"Crop rotation decision support system built by team Cosmic Intelligence. Turns NASA POWER weather, MODIS NDVI and SoilGrids data into climate-resilient crop-rotation plans for Bangladeshi farmers. Bangla-first offline PWA with a voice assistant.",
   m:"22 crops ranked across 64 districts · 2040 climate projection",
   s:["React 19","Vite","Tailwind","Leaflet","Node.js"],
   l:[["Live app","https://agrishiftai.hax.com.bd/"],["Demo video","https://lnkd.in/p/gX7cAiDs"],["GitHub","https://github.com/feroz-afm/Agrishift-AI"]]},
  {t:"Brain Tumor MRI Classification",tag:"Deep Learning",c:"dl featured",g:"g2",i:"fa-solid fa-brain",
   d:"CNN that classifies brain MRI scans into tumor types. My most-voted Kaggle notebook.",
   m:"47 upvotes on Kaggle",
   s:["CNN","TensorFlow / Keras","Medical imaging"],
   l:[["GitHub","https://github.com/feroz-afm/Brain-Tumor-Classificaion-CNN-"],["Kaggle","https://www.kaggle.com/mdferozahmedafm/code"]]},
  {t:"Scientific Image Forgery Detection",tag:"Deep Learning · Computer Vision",c:"dl cv",g:"g2",i:"fa-solid fa-magnifying-glass",
   d:"Segments copy-move forgeries in biomedical research images (Kaggle competition).",
   m:"27 upvotes on Kaggle",
   s:["Segmentation","PyTorch"],
   l:[["GitHub","https://github.com/feroz-afm/Scientific-Image-Forgery-Detection"]]},
  {t:"Hull Tactical Market Prediction",tag:"Machine Learning · Kaggle",c:"ml",g:"g3",i:"fa-solid fa-chart-line",
   d:"Market return prediction and allocation strategy for a Kaggle code competition.",
   m:"43 upvotes on Kaggle",
   s:["Time series","LightGBM"],
   l:[["GitHub","https://github.com/feroz-afm/Hull-Tactical-Market-Prediction-Strategy"]]},
  {t:"Mental Health Prediction",tag:"Machine Learning",c:"ml",g:"g2",i:"fa-solid fa-heart-pulse",
   d:"Ensemble of boosted models for mental health risk prediction.",
   m:"35 upvotes on Kaggle",
   s:["XGBoost","CatBoost","Ensembling"],
   l:[["GitHub","https://github.com/feroz-afm/Mental-Health-Prediction-with-Ensemble-Models"]]},
  {t:"Line Follower Robot",tag:"Robotics · Contest",c:"sw",g:"g3",i:"fa-solid fa-robot",note:"Robotics contest",
   d:"Two-wheel robot built with a five-member team for a robotics contest. Two IR sensors read the track and an Arduino UNO steers two geared DC motors through an L298N driver.",
   m:"Learned: Arduino C/C++, PWM motor control, IR sensor calibration, wiring and power management",
   s:["Arduino UNO","L298N","IR sensors","C/C++"],l:[]},
];
