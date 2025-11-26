const certificationsData = [
  {
    "id": "OSEE",
    "abbreviation": "OSEE",
    "name": "Offensive Security Exploitation Expert",
    "details": [
      "$5,000 lab",
      "Plus travel"
    ],
    "url": "https://www.offensive-security.com/awe-osee/",
    "category": "Security Operations (Red Team)",
    "level": "Expert",
    "raw_tooltip": "Offensive Security Exploitation Expert\n    $5,000 lab\n    Plus travel"
  },
  {
    "id": "CCIE Sec",
    "abbreviation": "CCIE Sec",
    "name": "Cisco Certified Implementation Expert - Security",
    "details": [
      "$2,050 Hands-on Lab",
      "$12,000 est Travel cost"
    ],
    "url": "https://www.cisco.com/c/en/us/training-events/training-certifications/certifications/expert/ccie-security.html",
    "category": "Network Security",
    "level": "Expert",
    "raw_tooltip": "Cisco Certified Implementation Expert - Security\n    $2,050 Hands-on Lab\n    $12,000 est Travel cost"
  },
  {
    "id": "CREST CRTSA",
    "abbreviation": "CREST CRTSA",
    "name": "CREST Registered Technical Security Architect",
    "details": [
      "$2,300 two exams",
      "In person in the UK"
    ],
    "url": "https://www.crest-approved.org/examination/technical-security-architecture/index.html",
    "category": "Security Architecture and Engineering",
    "level": "Expert",
    "raw_tooltip": "CREST Registered Technical Security Architect\n    $2,300 two exams\n    In person in the UK"
  },
  {
    "id": "ITIL Master",
    "abbreviation": "ITIL Master",
    "name": "ITIL Master",
    "details": [
      "$4,000 Interview"
    ],
    "url": "https://www.axelos.com/certifications/itil-certifications/itil-master",
    "category": "Security and Risk Management",
    "level": "Expert",
    "raw_tooltip": "ITIL Master\n    $4,000 Interview"
  },
  {
    "id": "OSCE3",
    "abbreviation": "OSCE3",
    "name": "Offensive Security Certified Expert 3",
    "details": [
      "$4,649 3 labs"
    ],
    "url": "https://help.offensive-security.com/hc/en-us/articles/4403282452628-What-is-OSCE3-",
    "category": "Security Operations (Red Team)",
    "level": "Expert",
    "raw_tooltip": "Offensive Security Certified Expert 3\n    $4,649 3 labs"
  },
  {
    "id": "CCIE Ent",
    "abbreviation": "CCIE Ent",
    "name": "Cisco Certified Internetwork Expert - Enterprise Infrastructure",
    "details": [
      "~$2,050 hands-on lab",
      "~$12,000 in travel costs"
    ],
    "url": "https://www.cisco.com/c/en/us/training-events/training-certifications/certifications/expert/ccie-security-v2.html",
    "category": "Network Security",
    "level": "Expert",
    "raw_tooltip": "Cisco Certified Internetwork Expert - Enterprise Infrastructure\n    ~$2,050 hands-on lab\n    ~$12,000 in travel costs"
  },
  {
    "id": "VCDX DCV",
    "abbreviation": "VCDX DCV",
    "name": "VMware Certified Design Expert in Datacenter Virtualization",
    "details": [
      "$3,995 exams",
      "Application also req."
    ],
    "url": "https://www.vmware.com/education-services/certification/vcdx-dcv.html",
    "category": "Security Architecture and Engineering",
    "level": "Expert",
    "raw_tooltip": "VMware Certified Design Expert in Datacenter Virtualization\n    $3,995 exams\n    Application also req."
  },
  {
    "id": "RHCA",
    "abbreviation": "RHCA",
    "name": "Red Hat Certified Architect",
    "details": [
      "~$3,745 exam",
      "plus travel"
    ],
    "url": "https://www.redhat.com/en/services/certification/rhca",
    "category": "Security Architecture and Engineering",
    "level": "Expert",
    "raw_tooltip": "Red Hat Certified Architect\n    ~$3,745 exam\n    plus travel"
  },
  {
    "id": "SABSA SCM",
    "abbreviation": "SABSA SCM",
    "name": "SABSA Chartered Security Architect - Master Certificate",
    "details": [
      "$3,750 exam & thesis",
      "Branded course required"
    ],
    "url": "https://sabsa.org/certification/",
    "category": "Security Architecture and Engineering",
    "level": "Expert",
    "raw_tooltip": "SABSA Chartered Security Architect - Master Certificate\n    $3,750 exam & thesis\n    Branded course required"
  },
  {
    "id": "GSE",
    "abbreviation": "GSE",
    "name": "GIAC Security Expert",
    "details": [
      "~$7475 for 10 exams"
    ],
    "url": "https://www.giac.org/get-certified/giac-portfolio-certifications/#GSE",
    "category": "Security and Risk Management",
    "level": "Expert",
    "raw_tooltip": "GIAC Security Expert\n    ~$7475 for 10 exams"
  },
  {
    "id": "GREM",
    "abbreviation": "GREM",
    "name": "GIAC Reverse Engineering Malware",
    "details": [
      "$979 exam",
      "SANS course recommended"
    ],
    "url": "https://www.giac.org/certifications/reverse-engineering-malware-grem/",
    "category": "Security Operations (Blue Team)",
    "level": "Expert",
    "raw_tooltip": "GIAC Reverse Engineering Malware\n    $979 exam\n    SANS course recommended"
  },
  {
    "id": "OSWE",
    "abbreviation": "OSWE",
    "name": "Offensive Security Web Expert",
    "details": [
      "~$1649 lab"
    ],
    "url": "https://www.offensive-security.com/awae-oswe/",
    "category": "Security Operations (Red Team)",
    "level": "Expert",
    "raw_tooltip": "Offensive Security Web Expert\n    ~$1649 lab"
  },
  {
    "id": "OSEP",
    "abbreviation": "OSEP",
    "name": "Offensive Security Experienced Penetration Tester",
    "details": [
      "$1,499 lab"
    ],
    "url": "https://www.offensive-security.com/pen300-osep/",
    "category": "Security Operations (Red Team)",
    "level": "Expert",
    "raw_tooltip": "Offensive Security Experienced Penetration Tester\n    $1,499 lab"
  },
  {
    "id": "OSED",
    "abbreviation": "OSED",
    "name": "Offensive Security Exploit Developer",
    "details": [
      "$1,499 lab"
    ],
    "url": "https://www.offensive-security.com/exp301-osed/",
    "category": "Security Operations (Red Team)",
    "level": "Expert",
    "raw_tooltip": "Offensive Security Exploit Developer\n    $1,499 lab"
  },
  {
    "id": "PgMP",
    "abbreviation": "PgMP",
    "name": "PMI Program Management Professional",
    "details": [
      "$1,000 exam"
    ],
    "url": "https://www.pmi.org/certifications/types/program-management-pgmp",
    "category": "Security and Risk Management",
    "level": "Expert",
    "raw_tooltip": "PMI Program Management Professional\n    $1,000 exam"
  },
  {
    "id": "CISSP Concentrations",
    "abbreviation": "CISSP Concentrations",
    "name": "(ISC)2 Certified Information Systems Security Professional Concentrations",
    "details": [
      "$599 exam"
    ],
    "url": "https://www.isc2.org/certifications#Specialized",
    "category": "Security and Risk Management",
    "level": "Expert",
    "raw_tooltip": "(ISC)2 Certified Information Systems Security Professional Concentrations\n    $599 exam"
  },
  {
    "id": "NCSC CCPLP",
    "abbreviation": "NCSC CCPLP",
    "name": "NCSC Certified Cybersecurity Professional - Lead Practitioner",
    "details": [
      "$1388 interview"
    ],
    "url": "https://www.ncsc.gov.uk/information/about-certified-professional-scheme",
    "category": "Security and Risk Management",
    "level": "Expert",
    "raw_tooltip": "NCSC Certified Cybersecurity Professional - Lead Practitioner\n    $1388 interview"
  },
  {
    "id": "CFCE",
    "abbreviation": "CFCE",
    "name": "IACIS Certified Forensic Computer Examiner",
    "details": [
      "$750 4 peer reviewed exams"
    ],
    "url": "https://www.iacis.com/certification/",
    "category": "Security Operations (Blue Team)",
    "level": "Expert",
    "raw_tooltip": "IACIS Certified Forensic Computer Examiner\n    $750 4 peer reviewed exams"
  },
  {
    "id": "GXPN",
    "abbreviation": "GXPN",
    "name": "GIAC Exploit Researcher and Advanced Penetration Tester",
    "details": [
      "$979 exam",
      "SANS course recommended"
    ],
    "url": "https://www.giac.org/certification/gxpn",
    "category": "Security Operations (Red Team)",
    "level": "Expert",
    "raw_tooltip": "GIAC Exploit Researcher and Advanced Penetration Tester\n    $979 exam\n    SANS course recommended"
  },
  {
    "id": "VCIX DCV",
    "abbreviation": "VCIX DCV",
    "name": "VMware Certified Implementation Expert in Datacenter Virtualization",
    "details": [
      "$900 two exams"
    ],
    "url": "https://www.vmware.com/education-services/certification/vcap-dcv-design.html",
    "category": "Security Architecture and Engineering",
    "level": "Expert",
    "raw_tooltip": "VMware Certified Implementation Expert in Datacenter Virtualization\n    $900 two exams"
  },
  {
    "id": "ASIS CPP",
    "abbreviation": "ASIS CPP",
    "name": "ASIS Certified Protection Professional",
    "details": [
      "$485 exam"
    ],
    "url": "https://www.asisonline.org/certification/certified-protection-professional-cpp/",
    "category": "Asset Security",
    "level": "Expert",
    "raw_tooltip": "ASIS Certified Protection Professional\n    $485 exam"
  },
  {
    "id": "Zach EAPro",
    "abbreviation": "Zach EAPro",
    "name": "Zachman Enterprise Architect Professional (Level 3)",
    "details": [
      "$2,999 exam & case study",
      "Level 1 & 2 cert not req'd"
    ],
    "url": "https://www.zachman.com/certification/what-we-certify/enterprise-architect",
    "category": "Security and Risk Management",
    "level": "Expert",
    "raw_tooltip": "Zachman Enterprise Architect Professional (Level 3)\n    $2,999 exam & case study\n    Level 1 & 2 cert not req'd"
  },
  {
    "id": "PMP",
    "abbreviation": "PMP",
    "name": "PMI Project Management Professional",
    "details": [
      "$555 exam"
    ],
    "url": "https://www.pmi.org/certifications/project-management-pmp",
    "category": "Security and Risk Management",
    "level": "Expert",
    "raw_tooltip": "PMI Project Management Professional\n    $555 exam"
  },
  {
    "id": "CISM",
    "abbreviation": "CISM",
    "name": "ISACA Certified Information Security Manager",
    "details": [
      "$760 exam"
    ],
    "url": "https://www.isaca.org/credentialing/cism",
    "category": "Security and Risk Management",
    "level": "Expert",
    "raw_tooltip": "ISACA Certified Information Security Manager\n    $760 exam"
  },
  {
    "id": "S-ISME",
    "abbreviation": "S-ISME",
    "name": "SECO Information Security Management Expert",
    "details": [
      "$850 exam"
    ],
    "url": "https://www.seco-institute.org/certifications/information-security-certification-track/",
    "category": "Security and Risk Management",
    "level": "Expert",
    "raw_tooltip": "SECO Information Security Management Expert\n    $850 exam"
  },
  {
    "id": "NCSC CCPSP",
    "abbreviation": "NCSC CCPSP",
    "name": "NCSC Certified Cybersecurity Professional - Senior Practitioner",
    "details": [
      "$907 interview"
    ],
    "url": "https://www.ncsc.gov.uk/information/about-certified-professional-scheme",
    "category": "Security and Risk Management",
    "level": "Expert",
    "raw_tooltip": "NCSC Certified Cybersecurity Professional - Senior Practitioner\n    $907 interview"
  },
  {
    "id": "CSFA",
    "abbreviation": "CSFA",
    "name": "CSIAC CyberSecurity Forensic Analyst",
    "details": [
      "$750 exam & lab"
    ],
    "url": "https://www.csiac.org/certification/cybersecurity-forensic-analyst-csfa-certification/",
    "category": "Security Operations (Blue Team)",
    "level": "Expert",
    "raw_tooltip": "CSIAC CyberSecurity Forensic Analyst\n    $750 exam & lab"
  },
  {
    "id": "GIME",
    "abbreviation": "GIME",
    "name": "GIAC iOS and MacOS Examiner",
    "details": [
      "$979 exam",
      "SANS course recommended"
    ],
    "url": "https://www.giac.org/certifications/ios-macos-examiner-gime/",
    "category": "Security Operations (Blue Team)",
    "level": "Expert",
    "raw_tooltip": "GIAC iOS and MacOS Examiner\n    $979 exam\n    SANS course recommended"
  },
  {
    "id": "GAWN",
    "abbreviation": "GAWN",
    "name": "GIAC Assessing Wireless Networks",
    "details": [
      "$979 exam",
      "SANS course recommended"
    ],
    "url": "https://www.giac.org/certification/gawn",
    "category": "Security Operations (Red Team)",
    "level": "Expert",
    "raw_tooltip": "GIAC Assessing Wireless Networks\n    $979 exam\n    SANS course recommended"
  },
  {
    "id": "CISSP",
    "abbreviation": "CISSP",
    "name": "(ISC)2 Certified Information Systems Security Professional",
    "details": [
      "$749 exam"
    ],
    "url": "https://www.isc2.org/Certifications/CISSP",
    "category": "Security and Risk Management",
    "level": "Expert",
    "raw_tooltip": "(ISC)2 Certified Information Systems Security Professional\n    $749 exam"
  },
  {
    "id": "CCD",
    "abbreviation": "CCD",
    "name": "Certified CyberDefender",
    "details": [
      "$800 course",
      "2 exam attempt included"
    ],
    "url": "https://cyberdefenders.org/blue-team-training/courses/certified-cyberdefender-certification/",
    "category": "Security Operations (Blue Team)",
    "level": "Expert",
    "raw_tooltip": "Certified CyberDefender\n    $800 course\n    2 exam attempt included"
  },
  {
    "id": "CAWFE",
    "abbreviation": "CAWFE",
    "name": "IACIS Certified Advanced Windows Forensic Examiner",
    "details": [
      "$750 written exam & lab"
    ],
    "url": "https://www.iacis.com/certification/cawfe/",
    "category": "Security Operations (Blue Team)",
    "level": "Expert",
    "raw_tooltip": "IACIS Certified Advanced Windows Forensic Examiner\n    $750 written exam & lab"
  },
  {
    "id": "GCFA",
    "abbreviation": "GCFA",
    "name": "GIAC Certified Forensic Analyst",
    "details": [
      "$979 exam",
      "SANS course recommended"
    ],
    "url": "https://www.giac.org/certification/gcfa",
    "category": "Security Operations (Blue Team)",
    "level": "Expert",
    "raw_tooltip": "GIAC Certified Forensic Analyst\n    $979 exam\n    SANS course recommended"
  },
  {
    "id": "GCTI",
    "abbreviation": "GCTI",
    "name": "GIAC Cyber Threat Intelligence",
    "details": [
      "$979 exam",
      "SANS course recommended"
    ],
    "url": "https://www.giac.org/certification/gcti",
    "category": "Security Operations (Blue Team)",
    "level": "Expert",
    "raw_tooltip": "GIAC Cyber Threat Intelligence\n    $979 exam\n    SANS course recommended"
  },
  {
    "id": "CREST CSAM",
    "abbreviation": "CREST CSAM",
    "name": "CREST Certified Simulated Attack Manager",
    "details": [
      "$2,499 2 exams"
    ],
    "url": "https://www.crest-approved.org/certification-careers/crest-certifications/crest-certified-simulated-attack-manager",
    "category": "Security Operations (Red Team)",
    "level": "Expert",
    "raw_tooltip": "CREST Certified Simulated Attack Manager\n    $2,499 2 exams"
  },
  {
    "id": "JNCIE Sec",
    "abbreviation": "JNCIE Sec",
    "name": "Juniper Networks Certified Internet Expert, Security",
    "details": [
      "$1,400 Hands-on Lab"
    ],
    "url": "https://www.juniper.net/us/en/training/certification/certification-tracks/junos-security-track/?tab=jnciesec",
    "category": "Network Security",
    "level": "Expert",
    "raw_tooltip": "Juniper Networks Certified Internet Expert, Security\n    $1,400 Hands-on Lab"
  },
  {
    "id": "CCDE",
    "abbreviation": "CCDE",
    "name": "Cisco Certified Design Expert",
    "details": [
      "~$1,600 written exam",
      "with hands-on lab"
    ],
    "url": "https://www.cisco.com/c/en/us/training-events/training-certifications/certifications/expert/ccde.html",
    "category": "Network Security",
    "level": "Expert",
    "raw_tooltip": "Cisco Certified Design Expert\n    ~$1,600 written exam\n    with hands-on lab"
  },
  {
    "id": "AWS SAP",
    "abbreviation": "AWS SAP",
    "name": "Amazon Web Services Certified Solutions Architect - Professional",
    "details": [
      "$300 exam"
    ],
    "url": "https://aws.amazon.com/certification/certified-solutions-architect-professional/",
    "category": "Security Architecture and Engineering",
    "level": "Expert",
    "raw_tooltip": "Amazon Web Services Certified Solutions Architect - Professional\n    $300 exam"
  },
  {
    "id": "RHCE",
    "abbreviation": "RHCE",
    "name": "Red Hat Certified Engineer",
    "details": [
      "$400 exam"
    ],
    "url": "https://www.redhat.com/en/services/certification/rhce",
    "category": "Security Architecture and Engineering",
    "level": "Expert",
    "raw_tooltip": "Red Hat Certified Engineer\n    $400 exam"
  },
  {
    "id": "GDAT",
    "abbreviation": "GDAT",
    "name": "GIAC Defending Advanced Threats",
    "details": [
      "$979 exam",
      "SANS course recommended"
    ],
    "url": "https://www.giac.org/certification/defending-advanced-threats-gdat",
    "category": "Security Architecture and Engineering",
    "level": "Expert",
    "raw_tooltip": "GIAC Defending Advanced Threats\n    $979 exam\n    SANS course recommended"
  },
  {
    "id": "SC-100",
    "abbreviation": "SC-100",
    "name": "Microsoft Cybersecurity Architect",
    "details": [
      "$165 exam"
    ],
    "url": "https://docs.microsoft.com/en-us/certifications/exams/sc-100",
    "category": "Security Architecture and Engineering",
    "level": "Expert",
    "raw_tooltip": "Microsoft Cybersecurity Architect\n    $165 exam"
  },
  {
    "id": "TOGAF",
    "abbreviation": "TOGAF",
    "name": "OpenGroup TOGAF Certified",
    "details": [
      "$360 exam"
    ],
    "url": "https://www.opengroup.org/certifications/togaf",
    "category": "Security and Risk Management",
    "level": "Expert",
    "raw_tooltip": "OpenGroup TOGAF Certified\n    $360 exam"
  },
  {
    "id": "CCISO",
    "abbreviation": "CCISO",
    "name": "EC Council Certified Information Security Officer",
    "details": [
      "$3,150 course exam",
      "Branded course required"
    ],
    "url": "https://ciso.eccouncil.org/cciso-certification/",
    "category": "Security and Risk Management",
    "level": "Expert",
    "raw_tooltip": "EC Council Certified Information Security Officer\n    $3,150 course exam\n    Branded course required"
  },
  {
    "id": "EEXIN ISM",
    "abbreviation": "EEXIN ISM",
    "name": "EXIN Information Security Management Expert",
    "details": [
      "EST $799 oral exam"
    ],
    "url": "https://www.exin.com/certifications/information-security-management-expert-based-isoiec-27001-exam",
    "category": "Security and Risk Management",
    "level": "Expert",
    "raw_tooltip": "EXIN Information Security Management Expert\n    EST $799 oral exam"
  },
  {
    "id": "GSTRT",
    "abbreviation": "GSTRT",
    "name": "GIAC Strategic Planning, Policy and Leadership",
    "details": [
      "$979 exam",
      "SANS course recommended"
    ],
    "url": "https://www.giac.org/certification/gstrt",
    "category": "Security and Risk Management",
    "level": "Expert",
    "raw_tooltip": "GIAC Strategic Planning, Policy and Leadership\n    $979 exam\n    SANS course recommended"
  },
  {
    "id": "NCSC CCPP",
    "abbreviation": "NCSC CCPP",
    "name": "NCSC Certified Cybersecurity Professional - Practitioner",
    "details": [
      "$225 interview"
    ],
    "url": "https://www.ncsc.gov.uk/information/about-certified-professional-scheme",
    "category": "Security and Risk Management",
    "level": "Expert",
    "raw_tooltip": "NCSC Certified Cybersecurity Professional - Practitioner\n    $225 interview"
  },
  {
    "id": "CFSR",
    "abbreviation": "CFSR",
    "name": "OpenText Certified Forensic Security Responder",
    "details": [
      "$250 written exam & lab"
    ],
    "url": "https://www.opentext.com/products-and-solutions/services/training-and-learning-services/encase-training/forensic-security-responder-certification",
    "category": "Security Operations (Blue Team)",
    "level": "Expert",
    "raw_tooltip": "OpenText Certified Forensic Security Responder\n    $250 written exam & lab"
  },
  {
    "id": "GNFA",
    "abbreviation": "GNFA",
    "name": "GIAC Network Forensic Analyst",
    "details": [
      "$979 exam",
      "SANS course recommended"
    ],
    "url": "https://www.giac.org/certification/network-forensic-analyst-gnfa",
    "category": "Security Operations (Blue Team)",
    "level": "Expert",
    "raw_tooltip": "GIAC Network Forensic Analyst\n    $979 exam\n    SANS course recommended"
  },
  {
    "id": "eWPTX",
    "abbreviation": "eWPTX",
    "name": "eLearnSecurity Web Application Penetration Tester eXtreme",
    "details": [
      "$400 exam",
      "$2000 training"
    ],
    "url": "https://elearnsecurity.com/product/ewptxv2-certification/",
    "category": "Security Operations (Red Team)",
    "level": "Expert",
    "raw_tooltip": "eLearnSecurity Web Application Penetration Tester eXtreme\n    $400 exam\n    $2000 training"
  },
  {
    "id": "CREST CCSAS",
    "abbreviation": "CREST CCSAS",
    "name": "CREST Certified Simulated Attack Specialist",
    "details": [
      "$2,520 2 exams & lab"
    ],
    "url": "https://www.crest-approved.org/certification-careers/crest-certifications/crest-certified-simulated-attack-specialist",
    "category": "Security Operations (Red Team)",
    "level": "Expert",
    "raw_tooltip": "CREST Certified Simulated Attack Specialist\n    $2,520 2 exams & lab"
  },
  {
    "id": "FCX",
    "abbreviation": "FCX",
    "name": "Fortinet Certified Expert",
    "details": [
      "$400 written exam",
      "$1600 in-person lab"
    ],
    "url": "https://training.fortinet.com/local/staticpage/view.php?page=fcx_cybersecurity",
    "category": "Network Security",
    "level": "Expert",
    "raw_tooltip": "Fortinet Certified Expert\n                    $400 written exam\n                    $1600 in-person lab"
  },
  {
    "id": "AZ-305",
    "abbreviation": "AZ-305",
    "name": "Microsoft Azure Solutions Architect Expert",
    "details": [
      "$330 exam"
    ],
    "url": "https://docs.microsoft.com/en-us/learn/certifications/azure-solutions-architect?wt.mc_id=learningredirect_certs-web-wwl",
    "category": "Security Architecture and Engineering",
    "level": "Expert",
    "raw_tooltip": "Microsoft Azure Solutions Architect Expert\n    $330 exam"
  },
  {
    "id": "VCIX NV",
    "abbreviation": "VCIX NV",
    "name": "VMware Certified Implementation Expert in Network Virtualization",
    "details": [
      "$900 two exams"
    ],
    "url": "https://www.vmware.com/education-services/certification/vcap-nv-deploy.html",
    "category": "Security Architecture and Engineering",
    "level": "Expert",
    "raw_tooltip": "VMware Certified Implementation Expert in Network Virtualization\n    $900 two exams"
  },
  {
    "id": "LPIC-3",
    "abbreviation": "LPIC-3",
    "name": "Linux Professional Institute Certified: 303 Security",
    "details": [
      "$200 exam"
    ],
    "url": "https://www.lpi.org/our-certifications/lpic-3-303-overview",
    "category": "Security Architecture and Engineering",
    "level": "Expert",
    "raw_tooltip": "Linux Professional Institute Certified: 303 Security\n    $200 exam"
  },
  {
    "id": "SABSA SCP",
    "abbreviation": "SABSA SCP",
    "name": "SABSA Chartered Security Architect - Practitioner Certificate",
    "details": [
      "$3,750 written exam",
      "Branded course required"
    ],
    "url": "https://sabsa.org/certification/",
    "category": "Security Architecture and Engineering",
    "level": "Expert",
    "raw_tooltip": "SABSA Chartered Security Architect - Practitioner Certificate\n    $3,750 written exam\n    Branded course required"
  },
  {
    "id": "PSM III",
    "abbreviation": "PSM III",
    "name": "Scrum.org Professional Scrum Master III",
    "details": [
      "$500 exam",
      "Branded course required"
    ],
    "url": "https://www.scrum.org/assessments/professional-scrum-master-iii-certification",
    "category": "Security and Risk Management",
    "level": "Expert",
    "raw_tooltip": "Scrum.org Professional Scrum Master III\n    $500 exam\n    Branded course required"
  },
  {
    "id": "GSP",
    "abbreviation": "GSP",
    "name": "GIAC Security Professional",
    "details": [
      "~$3735 for 5 exams"
    ],
    "url": "https://www.giac.org/get-certified/giac-portfolio-certifications/#gsp",
    "category": "Security and Risk Management",
    "level": "Expert",
    "raw_tooltip": "GIAC Security Professional\n    ~$3735 for 5 exams"
  },
  {
    "id": "GISP",
    "abbreviation": "GISP",
    "name": "GIAC Information Security Professional",
    "details": [
      "$979 exam",
      "SANS course recommended"
    ],
    "url": "https://www.giac.org/certification/gisp",
    "category": "Security and Risk Management",
    "level": "Expert",
    "raw_tooltip": "GIAC Information Security Professional\n    $979 exam\n    SANS course recommended"
  },
  {
    "id": "MTIA",
    "abbreviation": "MTIA",
    "name": "Mosse Institute Certified Threat Intelligence Analyst Certification",
    "details": [
      "$450 certification programme",
      "100% practical. No expiry."
    ],
    "url": "https://www.mosse-institute.com/certifications/mtia-certified-threat-intelligence-analyst.html",
    "category": "Security Operations (Blue Team)",
    "level": "Expert",
    "raw_tooltip": "Mosse Institute Certified Threat Intelligence Analyst Certification\n  $450 certification programme\n  100% practical. No expiry."
  },
  {
    "id": "GCFR",
    "abbreviation": "GCFR",
    "name": "GIAC Cloud Forensics Responder",
    "details": [
      "$979 exam",
      "SANS course recommended"
    ],
    "url": "https://www.giac.org/certifications/cloud-forensics-responder-gcfr/",
    "category": "Security Operations (Blue Team)",
    "level": "Expert",
    "raw_tooltip": "GIAC Cloud Forensics Responder\n    $979 exam\n    SANS course recommended"
  },
  {
    "id": "BTL2",
    "abbreviation": "BTL2",
    "name": "Security Blue Team Level 2",
    "details": [
      "$2,190 course",
      "1 exam attempt included"
    ],
    "url": "https://securityblue.team/btl2/",
    "category": "Security Operations (Blue Team)",
    "level": "Expert",
    "raw_tooltip": "Security Blue Team Level 2\n    $2,190 course\n    1 exam attempt included"
  },
  {
    "id": "MRT",
    "abbreviation": "MRT",
    "name": "Mosse Institute Certified Red Teamer Certification",
    "details": [
      "$450 certification programme",
      "100% practical. No expiry."
    ],
    "url": "https://www.mosse-institute.com/certifications/mrt-certified-red-teamer.html",
    "category": "Security Operations (Red Team)",
    "level": "Expert",
    "raw_tooltip": "Mosse Institute Certified Red Teamer Certification\n  $450 certification programme\n  100% practical. No expiry."
  },
  {
    "id": "CREST CCTINF",
    "abbreviation": "CREST CCTINF",
    "name": "CREST Certified Infrastructure Tester",
    "details": [
      "$2,520 exam & lab"
    ],
    "url": "hhttps://www.crest-approved.org/certification-careers/crest-certifications/crest-certified-infrastructure-tester",
    "category": "Security Operations (Red Team)",
    "level": "Expert",
    "raw_tooltip": "CREST Certified Infrastructure Tester\n    $2,520 exam & lab"
  },
  {
    "id": "HTB CWEE",
    "abbreviation": "HTB CWEE",
    "name": "Hack the Box Certified Web Exploitation Expert",
    "details": [
      "$1260 Subscription available"
    ],
    "url": "https://academy.hackthebox.com/preview/certifications/htb-certified-web-exploitation-expert",
    "category": "Security Operations (Red Team)",
    "level": "Expert",
    "raw_tooltip": "Hack the Box Certified Web Exploitation Expert\n    $1260 Subscription available"
  },
  {
    "id": "Google PCSA",
    "abbreviation": "Google PCSA",
    "name": "Google Professional Cloud Architect",
    "details": [
      "$200 exam"
    ],
    "url": "https://cloud.google.com/certification/cloud-architect",
    "category": "Security Architecture and Engineering",
    "level": "Expert",
    "raw_tooltip": "Google Professional Cloud Architect\n    $200 exam"
  },
  {
    "id": "SCE",
    "abbreviation": "SCE",
    "name": "SUSE Certified Engineer",
    "details": [
      "$195 practical exam"
    ],
    "url": "https://www.suse.com/training/exam/sce-sles-15/",
    "category": "Security Architecture and Engineering",
    "level": "Expert",
    "raw_tooltip": "SUSE Certified Engineer\n    $195 practical exam"
  },
  {
    "id": "ISA CE",
    "abbreviation": "ISA CE",
    "name": "ISA Cybersecurity Expert",
    "details": [
      "$2,700 course + exam",
      "Course required"
    ],
    "url": "https://www.isa.org/training-and-certifications/isa-certification/isa99iec-62443/isa99iec-62443-cybersecurity-certificate-programs/",
    "category": "Security Architecture and Engineering",
    "level": "Expert",
    "raw_tooltip": "ISA Cybersecurity Expert\n    $2,700 course + exam\n    Course required"
  },
  {
    "id": "GDSA",
    "abbreviation": "GDSA",
    "name": "GIAC Defensible Security Architecture",
    "details": [
      "$979 exam",
      "SANS course recommended"
    ],
    "url": "https://www.giac.org/certification/defensible-security-architecture-gdsa",
    "category": "Security Architecture and Engineering",
    "level": "Expert",
    "raw_tooltip": "GIAC Defensible Security Architecture\n    $979 exam\n    SANS course recommended"
  },
  {
    "id": "ITIL SL",
    "abbreviation": "ITIL SL",
    "name": "ITIL Strategic Leader",
    "details": [
      "$4,800 two course exams",
      "2 branded courses required"
    ],
    "url": "https://www.axelos.com/certifications/itil-certifications/itil-strategic-leader-itil-4",
    "category": "Security and Risk Management",
    "level": "Expert",
    "raw_tooltip": "ITIL Strategic Leader\n    $4,800 two course exams\n    2 branded courses required"
  },
  {
    "id": "Zach EAP",
    "abbreviation": "Zach EAP",
    "name": "Zachman Enterprise Architect Practitioner (Level 2)",
    "details": [
      "$2,999 exam & case study",
      "Level 1 cert not req'd"
    ],
    "url": "https://www.zachman.com/certification/what-we-certify/enterprise-architect",
    "category": "Security and Risk Management",
    "level": "Expert",
    "raw_tooltip": "Zachman Enterprise Architect Practitioner (Level 2)\n    $2,999 exam & case study\n    Level 1 cert not req'd"
  },
  {
    "id": "GSLC",
    "abbreviation": "GSLC",
    "name": "GIAC Security Leadership Certification",
    "details": [
      "$979 exam",
      "SANS course recommended"
    ],
    "url": "https://www.giac.org/certification/gslc",
    "category": "Security and Risk Management",
    "level": "Expert",
    "raw_tooltip": "GIAC Security Leadership Certification\n    $979 exam\n    SANS course recommended"
  },
  {
    "id": "S-CISO",
    "abbreviation": "S-CISO",
    "name": "SECO Certified Information Security Officer",
    "details": [
      "Resume review"
    ],
    "url": "https://www.seco-institute.org/certifications/information-security-certification-track/",
    "category": "Security and Risk Management",
    "level": "Expert",
    "raw_tooltip": "SECO Certified Information Security Officer\n    Resume review"
  },
  {
    "id": "GCFE",
    "abbreviation": "GCFE",
    "name": "GIAC Cerified Forensics Examiner",
    "details": [
      "$979 exam",
      "SANS course recommended"
    ],
    "url": "https://www.giac.org/certification/gcfe",
    "category": "Security Operations (Blue Team)",
    "level": "Expert",
    "raw_tooltip": "GIAC Cerified Forensics Examiner\n    $979 exam\n    SANS course recommended"
  },
  {
    "id": "GEIR",
    "abbreviation": "GEIR",
    "name": "GIAC Enterprise Incident Response",
    "details": [
      "$979 exam",
      "SANS course recommended"
    ],
    "url": "https://www.giac.org/certifications/enterprise-incident-responder-geir/",
    "category": "Security Operations (Blue Team)",
    "level": "Expert",
    "raw_tooltip": "GIAC Enterprise Incident Response\n    $979 exam\n    SANS course recommended"
  },
  {
    "id": "PACES",
    "abbreviation": "PACES",
    "name": "Pentester Academy Certified Enterprise Security Specialist",
    "details": [
      "$339-749 Lab access",
      "Exam included"
    ],
    "url": "https://www.pentesteracademy.com/gcb",
    "category": "Security Operations (Red Team)",
    "level": "Expert",
    "raw_tooltip": "Pentester Academy Certified Enterprise Security Specialist\n    $339-749 Lab access\n    Exam included"
  },
  {
    "id": "S-CEHL",
    "abbreviation": "S-CEHL",
    "name": "SECO Certified Ethical Hacker Leader",
    "details": [
      "Application"
    ],
    "url": "https://www.seco-institute.org/certifications/ethical-hacking-track/leader/",
    "category": "Security Operations (Red Team)",
    "level": "Expert",
    "raw_tooltip": "SECO Certified Ethical Hacker Leader\n    Application"
  },
  {
    "id": "CREST CRT",
    "abbreviation": "CREST CRT",
    "name": "CREST Registered Penetration Tester",
    "details": [
      "$612 exam"
    ],
    "url": "https://www.crest-approved.org/certification-careers/crest-certifications/crest-registered-penetration-tester",
    "category": "Security Operations (Red Team)",
    "level": "Expert",
    "raw_tooltip": "CREST Registered Penetration Tester\n    $612 exam"
  },
  {
    "id": "CRTO II",
    "abbreviation": "CRTO II",
    "name": "Zero Point Security Red Team Operator II",
    "details": [
      "$121 lab"
    ],
    "url": "https://training.zeropointsecurity.co.uk/courses/red-team-ops-ii",
    "category": "Security Operations (Red Team)",
    "level": "Expert",
    "raw_tooltip": "Zero Point Security Red Team Operator II\n    $121 lab"
  },
  {
    "id": "MCD",
    "abbreviation": "MCD",
    "name": "Mosse Institute Certified Code Deobfuscation Specialist Certification",
    "details": [
      "$450 certification programme",
      "100% practical. No expiry."
    ],
    "url": "https://www.mosse-institute.com/certifications/mcd-certified-code-deobfuscation-specialist.html",
    "category": "Security Operations (Red Team)",
    "level": "Expert",
    "raw_tooltip": "Mosse Institute Certified Code Deobfuscation Specialist Certification\n    $450 certification programme\n    100% practical. No expiry."
  },
  {
    "id": "CCNP Sec",
    "abbreviation": "CCNP Sec",
    "name": "Cisco Certified Network Professional - Security",
    "details": [
      "~$1,200 exam"
    ],
    "url": "https://www.cisco.com/c/en/us/training-events/training-certifications/certifications/professional/ccnp-security-v2.html",
    "category": "Network Security",
    "level": "Expert",
    "raw_tooltip": "Cisco Certified Network Professional - Security\n    ~$1,200 exam"
  },
  {
    "id": "CIMP",
    "abbreviation": "CIMP",
    "name": "Identify Management Institute Certified Identity Management Professional",
    "details": [
      "$295 + Membership"
    ],
    "url": "https://www.identitymanagementinstitute.org/cimp/",
    "category": "Identity and Access Management",
    "level": "Expert",
    "raw_tooltip": "Identify Management Institute Certified Identity Management Professional\n    $295 + Membership"
  },
  {
    "id": "CASP+",
    "abbreviation": "CASP+",
    "name": "CompTIA Advanced Security Practitioner+",
    "details": [
      "$509 exam"
    ],
    "url": "https://www.comptia.org/certifications/comptia-advanced-security-practitioner",
    "category": "Security and Risk Management",
    "level": "Expert",
    "raw_tooltip": "CompTIA Advanced Security Practitioner+\n    $509 exam"
  },
  {
    "id": "GASF",
    "abbreviation": "GASF",
    "name": "GIAC Advanced Smartphone Forensics",
    "details": [
      "$979 exam",
      "SANS course recommended"
    ],
    "url": "https://www.giac.org/certification/advanced-smartphone-forensics-gasf",
    "category": "Security Operations (Blue Team)",
    "level": "Expert",
    "raw_tooltip": "GIAC Advanced Smartphone Forensics\n    $979 exam\n    SANS course recommended"
  },
  {
    "id": "eCTHP",
    "abbreviation": "eCTHP",
    "name": "eLearnSecurity Certified Threat Hunting Professional",
    "details": [
      "$400 lab"
    ],
    "url": "https://security.ine.com/certifications/ecthp-certification/",
    "category": "Security Operations (Blue Team)",
    "level": "Expert",
    "raw_tooltip": "eLearnSecurity Certified Threat Hunting Professional\n    $400 lab"
  },
  {
    "id": "S-EHE",
    "abbreviation": "S-EHE",
    "name": "SECO Ethical Hacker Expert",
    "details": [
      "TBD (still)",
      "Being redesigned"
    ],
    "url": "https://www.seco-institute.org/certifications/ethical-hacking-certification-track/",
    "category": "Security Operations (Red Team)",
    "level": "Expert",
    "raw_tooltip": "SECO Ethical Hacker Expert\n    TBD (still)\n    Being redesigned"
  },
  {
    "id": "JNCIP Sec",
    "abbreviation": "JNCIP Sec",
    "name": "Juniper Networks Certified Internet Professional, Security",
    "details": [
      "$400 exam"
    ],
    "url": "https://www.juniper.net/us/en/training/certification/certification-tracks/junos-security-track/?tab=jncip-sec",
    "category": "Network Security",
    "level": "Expert",
    "raw_tooltip": "Juniper Networks Certified Internet Professional, Security\n    $400 exam"
  },
  {
    "id": "PCNSE",
    "abbreviation": "PCNSE",
    "name": "Palo Alto Networks Certified Network Security Engineer",
    "details": [
      "$175 exam"
    ],
    "url": "https://www.paloaltonetworks.com/services/education/certification#pcnse",
    "category": "Network Security",
    "level": "Expert",
    "raw_tooltip": "Palo Alto Networks Certified Network Security Engineer\n    $175 exam"
  },
  {
    "id": "FCSS ZTA",
    "abbreviation": "FCSS ZTA",
    "name": "Fortinet Certified Solution Specialist - Zero Trust Access",
    "details": [
      "$800 two exams"
    ],
    "url": "https://training.fortinet.com/local/staticpage/view.php?page=fcss_zta",
    "category": "Network Security",
    "level": "Expert",
    "raw_tooltip": "Fortinet Certified Solution Specialist - Zero Trust Access\n    $800 two exams"
  },
  {
    "id": "FCSS SASE",
    "abbreviation": "FCSS SASE",
    "name": "Fortinet Certified Solution Specialist - Secure Access Service Edge",
    "details": [
      "$800 two exams"
    ],
    "url": "https://training.fortinet.com/local/staticpage/view.php?page=fcss_SASE",
    "category": "Identity and Access Management",
    "level": "Expert",
    "raw_tooltip": "Fortinet Certified Solution Specialist - Secure Access Service Edge\n    $800 two exams"
  },
  {
    "id": "FCSS PCS",
    "abbreviation": "FCSS PCS",
    "name": "Fortinet Certified Solution Specialist - Public Cloud Security",
    "details": [
      "$400 exam"
    ],
    "url": "https://training.fortinet.com/local/staticpage/view.php?page=fcss_public_cloud_security",
    "category": "Security Architecture and Engineering",
    "level": "Expert",
    "raw_tooltip": "Fortinet Certified Solution Specialist - Public Cloud Security\n    $400 exam"
  },
  {
    "id": "GCTD",
    "abbreviation": "GCTD",
    "name": "GIAC Cloud Threat Detection",
    "details": [
      "$979 exam",
      "SANS course recommended"
    ],
    "url": "https://www.giac.org/certifications/cloud-threat-detection-gctd/",
    "category": "Security Architecture and Engineering",
    "level": "Expert",
    "raw_tooltip": "GIAC Cloud Threat Detection\n    $979 exam\n    SANS course recommended"
  },
  {
    "id": "CACE",
    "abbreviation": "CACE",
    "name": "Excida IEC 62443 Certified Automation Cybersecurity Expert",
    "details": [
      "$700 exam"
    ],
    "url": "https://www.exidacace.com/Apply/CACE",
    "category": "Security Architecture and Engineering",
    "level": "Expert",
    "raw_tooltip": "Excida IEC 62443 Certified Automation Cybersecurity Expert\n    $700 exam"
  },
  {
    "id": "ITIL MP",
    "abbreviation": "ITIL MP",
    "name": "ITIL Managing Professional",
    "details": [
      "$9,600 4 course exams",
      "4 branded courses requires"
    ],
    "url": "https://www.axelos.com/certifications/itil-certifications/itil-managing-professional-itil-4",
    "category": "Security and Risk Management",
    "level": "Expert",
    "raw_tooltip": "ITIL Managing Professional\n    $9,600 4 course exams\n    4 branded courses requires"
  },
  {
    "id": "Scrum SPS",
    "abbreviation": "Scrum SPS",
    "name": "Scrum Scaled Professional Scrum",
    "details": [
      "$250 exam"
    ],
    "url": "https://www.scrum.org/scaled-professional-scrum-certification",
    "category": "Security and Risk Management",
    "level": "Expert",
    "raw_tooltip": "Scrum Scaled Professional Scrum\n    $250 exam"
  },
  {
    "id": "GLEG",
    "abbreviation": "GLEG",
    "name": "GIAC Law of Data Security & Investigations",
    "details": [
      "$979 exam",
      "SANS course recommended"
    ],
    "url": "https://www.giac.org/certification/law-data-security-investigations-gleg",
    "category": "Security and Risk Management",
    "level": "Expert",
    "raw_tooltip": "GIAC Law of Data Security & Investigations\n    $979 exam\n    SANS course recommended"
  },
  {
    "id": "CISSM",
    "abbreviation": "CISSM",
    "name": "GAQM Certified Information Systems Security Manager",
    "details": [
      "$170 exam"
    ],
    "url": "https://gaqm.org/certifications/information_systems_security/cissm",
    "category": "Security and Risk Management",
    "level": "Expert",
    "raw_tooltip": "GAQM Certified Information Systems Security Manager\n    $170 exam"
  },
  {
    "id": "CGRC",
    "abbreviation": "CGRC",
    "name": "(ISC)2 Certified in Governance, Risk and Compliance",
    "details": [
      "$599 exam"
    ],
    "url": "https://www.isc2.org/Certifications/CGRC",
    "category": "Security and Risk Management",
    "level": "Expert",
    "raw_tooltip": "(ISC)2 Certified in Governance, Risk and Compliance\n    $599 exam"
  },
  {
    "id": "CRISC",
    "abbreviation": "CRISC",
    "name": "ISACA Certified in Risk and Information Systems Control",
    "details": [
      "$760 exam"
    ],
    "url": "https://www.isaca.org/credentialing/crisc",
    "category": "Security and Risk Management",
    "level": "Expert",
    "raw_tooltip": "ISACA Certified in Risk and Information Systems Control\n    $760 exam"
  },
  {
    "id": "GWEB",
    "abbreviation": "GWEB",
    "name": "GIAC Certified Web Application Defender",
    "details": [
      "$979 exam",
      "SANS course recommended"
    ],
    "url": "https://www.giac.org/certification/certified-web-application-defender-gweb",
    "category": "Software Development Security",
    "level": "Expert",
    "raw_tooltip": "GIAC Certified Web Application Defender\n    $979 exam\n    SANS course recommended"
  },
  {
    "id": "Cisco COP",
    "abbreviation": "Cisco COP",
    "name": "Cisco Certified CyberOps Professional",
    "details": [
      "$700 two exams"
    ],
    "url": "https://www.cisco.com/c/en/us/training-events/training-certifications/certifications/professional/cyberops-professional.html",
    "category": "Security Operations (Blue Team)",
    "level": "Expert",
    "raw_tooltip": "Cisco Certified CyberOps Professional\n    $700 two exams"
  },
  {
    "id": "CCFE",
    "abbreviation": "CCFE",
    "name": "Infosec Institute Certified Computer Forensics Examiner",
    "details": [
      "$4,599 exam",
      "Course required"
    ],
    "url": "https://app.infosecinstitute.com/portal/courses/a0t1A000009H5RcQAK",
    "category": "Security Operations (Blue Team)",
    "level": "Expert",
    "raw_tooltip": "Infosec Institute Certified Computer Forensics Examiner\n    $4,599 exam\n    Course required"
  },
  {
    "id": "GCED",
    "abbreviation": "GCED",
    "name": "GIAC Certified Enterprise Defender",
    "details": [
      "$979 exam",
      "SANS course recommended"
    ],
    "url": "https://www.giac.org/certification/certified-enterprise-defender-gced",
    "category": "Security Operations (Blue Team)",
    "level": "Expert",
    "raw_tooltip": "GIAC Certified Enterprise Defender\n    $979 exam\n    SANS course recommended"
  },
  {
    "id": "MCPE",
    "abbreviation": "MCPE",
    "name": "Mosse Institute Certified Cyber Protection Expert",
    "details": [
      "$800 exam"
    ],
    "url": "https://www.mosse-institute.com/certifications/mcpe-certified-cyber-protection-expert.html",
    "category": "Security Operations (Blue Team)",
    "level": "Expert",
    "raw_tooltip": "Mosse Institute Certified Cyber Protection Expert\n    $800 exam"
  },
  {
    "id": "CREST CCTIM",
    "abbreviation": "CREST CCTIM",
    "name": "CREST Certified Threat Intelligence Manager",
    "details": [
      "$2,480 3 exams"
    ],
    "url": "https://www.crest-approved.org/certification-careers/crest-certifications/crest-certified-threat-intelligence-manager",
    "category": "Security Operations (Red Team)",
    "level": "Expert",
    "raw_tooltip": "CREST Certified Threat Intelligence Manager\n    $2,480 3 exams"
  },
  {
    "id": "OSCP",
    "abbreviation": "OSCP",
    "name": "Offensive Security Certified Professional",
    "details": [
      "$1,499 labs"
    ],
    "url": "https://www.offensive-security.com/pwk-oscp/",
    "category": "Security Operations (Red Team)",
    "level": "Expert",
    "raw_tooltip": "Offensive Security Certified Professional\n    $1,499 labs"
  },
  {
    "id": "F5 CSE Sec",
    "abbreviation": "F5 CSE Sec",
    "name": "F5 Big-IP Certified Solution Expert - Security",
    "details": [
      "$135 exam"
    ],
    "url": "https://view.ceros.com/f5/certification-roadmap/p/9?heightOverride=740",
    "category": "Network Security",
    "level": "Expert",
    "raw_tooltip": "F5 Big-IP Certified Solution Expert - Security\n    $135 exam"
  },
  {
    "id": "CCNP Ent",
    "abbreviation": "CCNP Ent",
    "name": "Cisco Certified Network Professional - Enterprise",
    "details": [
      "~$600 exam"
    ],
    "url": "https://www.cisco.com/c/en/us/training-events/training-certifications/certifications/professional/ccnp-enterprise.html",
    "category": "Network Security",
    "level": "Expert",
    "raw_tooltip": "Cisco Certified Network Professional - Enterprise\n    ~$600 exam"
  },
  {
    "id": "MS-100",
    "abbreviation": "MS-100",
    "name": "Microsoft 365 Certified Enterprise Administrator Expert",
    "details": [
      "$165 exam"
    ],
    "url": "https://docs.microsoft.com/en-us/learn/certifications/m365-enterprise-administrator",
    "category": "Security Architecture and Engineering",
    "level": "Expert",
    "raw_tooltip": "Microsoft 365 Certified Enterprise Administrator Expert\n    $165 exam"
  },
  {
    "id": "GPCS",
    "abbreviation": "GPCS",
    "name": "GIAC Public Cloud Security",
    "details": [
      "$979 exam",
      "SANS course recommended"
    ],
    "url": "https://www.giac.org/certifications/public-cloud-security-gpcs/",
    "category": "Security Architecture and Engineering",
    "level": "Expert",
    "raw_tooltip": "GIAC Public Cloud Security\n    $979 exam\n    SANS course recommended"
  },
  {
    "id": "GCSA",
    "abbreviation": "GCSA",
    "name": "GIAC Cloud Security Automation",
    "details": [
      "$979 exam",
      "SANS course recommended"
    ],
    "url": "https://www.giac.org/certification/cloud-security-automation-gcsa",
    "category": "Security Architecture and Engineering",
    "level": "Expert",
    "raw_tooltip": "GIAC Cloud Security Automation\n    $979 exam\n    SANS course recommended"
  },
  {
    "id": "GCWN",
    "abbreviation": "GCWN",
    "name": "GIAC Certified Windows Security Administrator",
    "details": [
      "$979 exam",
      "SANS course recommended"
    ],
    "url": "https://www.giac.org/certifications/certified-windows-security-administrator-gcwn/",
    "category": "Security Architecture and Engineering",
    "level": "Expert",
    "raw_tooltip": "GIAC Certified Windows Security Administrator\n    $979 exam\n    SANS course recommended"
  },
  {
    "id": "GRID",
    "abbreviation": "GRID",
    "name": "GIAC Response and Industrial Defense",
    "details": [
      "$979 exam",
      "SANS course encouraged"
    ],
    "url": "https://www.giac.org/certification/response-industrial-defense-grid",
    "category": "Security Architecture and Engineering",
    "level": "Expert",
    "raw_tooltip": "GIAC Response and Industrial Defense\n    $979 exam\n    SANS course encouraged"
  },
  {
    "id": "CIS LI",
    "abbreviation": "CIS LI",
    "name": "IBITGQ Certified ISO 27001 Information Security Management Specialist Lead Implementer",
    "details": [
      "$2,008 course exam",
      "Branded course required"
    ],
    "url": "https://www.itgovernance.co.uk/shop/product/certified-iso-27001-isms-lead-implementer-training-course",
    "category": "Security Architecture and Engineering",
    "level": "Expert",
    "raw_tooltip": "IBITGQ Certified ISO 27001 Information Security Management Specialist Lead Implementer\n    $2,008 course exam\n    Branded course required"
  },
  {
    "id": "CIPT",
    "abbreviation": "CIPT",
    "name": "IAPP Certified Information Privacy Technologist",
    "details": [
      "$550 exam"
    ],
    "url": "https://iapp.org/certify/cipt/",
    "category": "Asset Security",
    "level": "Expert",
    "raw_tooltip": "IAPP Certified Information Privacy Technologist\n    $550 exam"
  },
  {
    "id": "CDPSE",
    "abbreviation": "CDPSE",
    "name": "ISACA Certified Data Privacy Solutions Engineer",
    "details": [
      "$880 Application"
    ],
    "url": "https://www.isaca.org/credentialing/certified-data-privacy-solutions-engineer",
    "category": "Asset Security",
    "level": "Expert",
    "raw_tooltip": "ISACA Certified Data Privacy Solutions Engineer\n    $880 Application"
  },
  {
    "id": "CSM",
    "abbreviation": "CSM",
    "name": "GAQM Certified Scrum Master",
    "details": [
      "$128 exam"
    ],
    "url": "https://gaqm.org/certifications/scrum_agile/csm",
    "category": "Security and Risk Management",
    "level": "Expert",
    "raw_tooltip": "GAQM Certified Scrum Master\n    $128 exam"
  },
  {
    "id": "CASM",
    "abbreviation": "CASM",
    "name": "GAQM Certified Agile Scrum Master",
    "details": [
      "$128 exam"
    ],
    "url": "https://gaqm.org/certifications/scrum_agile/casm",
    "category": "Security and Risk Management",
    "level": "Expert",
    "raw_tooltip": "GAQM Certified Agile Scrum Master\n    $128 exam"
  },
  {
    "id": "CM)ISSO",
    "abbreviation": "CM)ISSO",
    "name": "Mile2 Certified Master Information Systems Security Officer",
    "details": [
      "Complete C)SP, C)ISSO, C)ISSM and IS20 ($2200)"
    ],
    "url": "https://www.mile2.com/master-certifications/",
    "category": "Security and Risk Management",
    "level": "Expert",
    "raw_tooltip": "Mile2 Certified Master Information Systems Security Officer\n    Complete C)SP, C)ISSO, C)ISSM and IS20 ($2200)"
  },
  {
    "id": "S-ISP",
    "abbreviation": "S-ISP",
    "name": "SECO Information Security Practitioner",
    "details": [
      "$550"
    ],
    "url": "https://www.seco-institute.org/certifications/information-security-certification-track/",
    "category": "Security and Risk Management",
    "level": "Expert",
    "raw_tooltip": "SECO Information Security Practitioner\n    $550"
  },
  {
    "id": "S-CSPL",
    "abbreviation": "S-CSPL",
    "name": "SECO Secure Programming Certified Leader",
    "details": [
      "$460 exam"
    ],
    "url": "https://www.seco-institute.org/certifications/certified-secure-software-developer/",
    "category": "Software Development Security",
    "level": "Expert",
    "raw_tooltip": "SECO Secure Programming Certified Leader\n    $460 exam"
  },
  {
    "id": "GCDA",
    "abbreviation": "GCDA",
    "name": "GIAC Certified Detection Analyst",
    "details": [
      "$979 exam",
      "SANS course recommended"
    ],
    "url": "https://www.giac.org/certification/certified-detection-analyst-gcda",
    "category": "Security Operations (Blue Team)",
    "level": "Expert",
    "raw_tooltip": "GIAC Certified Detection Analyst\n        $979 exam\n        SANS course recommended"
  },
  {
    "id": "CMFE",
    "abbreviation": "CMFE",
    "name": "Infosec Institute Certified Mobile Forensics Examiner",
    "details": [
      "$1,699 exam",
      "Course required"
    ],
    "url": "https://app.infosecinstitute.com/portal/courses/a0t1A000009H6juQAC",
    "category": "Security Operations (Blue Team)",
    "level": "Expert",
    "raw_tooltip": "Infosec Institute Certified Mobile Forensics Examiner\n    $1,699 exam\n    Course required"
  },
  {
    "id": "GX-FA",
    "abbreviation": "GX-FA",
    "name": "GIAC Experienced Forensics Analyst",
    "details": [
      "$1299 exam",
      "SANS course recommended"
    ],
    "url": "https://www.giac.org/certifications/experienced-forensics-analyst-gxfa/",
    "category": "Security Operations (Blue Team)",
    "level": "Expert",
    "raw_tooltip": "GIAC Experienced Forensics Analyst\n    $1299 exam\n    SANS course recommended"
  },
  {
    "id": "GCIH",
    "abbreviation": "GCIH",
    "name": "GIAC Certified Forensics Analystr",
    "details": [
      "$979 exam",
      "SANS course recommended"
    ],
    "url": "https://www.giac.org/certification/gcih",
    "category": "Security Operations (Blue Team)",
    "level": "Expert",
    "raw_tooltip": "GIAC Certified Forensics Analystr\n    $979 exam\n    SANS course recommended"
  },
  {
    "id": "GX-PT",
    "abbreviation": "GX-PT",
    "name": "GIAC Experienced Penetration Tester",
    "details": [
      "$1299 exam",
      "SANS course recommended"
    ],
    "url": "https://www.giac.org/certifications/experienced-penetration-tester-gxpt/",
    "category": "Security Operations (Red Team)",
    "level": "Expert",
    "raw_tooltip": "GIAC Experienced Penetration Tester\n    $1299 exam\n    SANS course recommended"
  },
  {
    "id": "GPEN",
    "abbreviation": "GPEN",
    "name": "GIAC Certified Penetration Tester",
    "details": [
      "$979 exam",
      "SANS course recommended"
    ],
    "url": "https://www.giac.org/certification/gpen",
    "category": "Security Operations (Red Team)",
    "level": "Expert",
    "raw_tooltip": "GIAC Certified Penetration Tester\n    $979 exam\n    SANS course recommended"
  },
  {
    "id": "OSWP",
    "abbreviation": "OSWP",
    "name": "Offensive Security Wireless Professional",
    "details": [
      "$450 labs"
    ],
    "url": "https://www.offensive-security.com/wifu-oswp/",
    "category": "Security Operations (Red Team)",
    "level": "Expert",
    "raw_tooltip": "Offensive Security Wireless Professional\n    $450 labs"
  },
  {
    "id": "CRTO",
    "abbreviation": "CRTO",
    "name": "Zero Point Security Certified Red Team Operator",
    "details": [
      "$121 lab"
    ],
    "url": "https://courses.zeropointsecurity.co.uk/courses/red-team-ops",
    "category": "Security Operations (Red Team)",
    "level": "Expert",
    "raw_tooltip": "Zero Point Security Certified Red Team Operator\n    $121 lab"
  },
  {
    "id": "CCSM",
    "abbreviation": "CCSM",
    "name": "Checkpoint Certified Security Master",
    "details": [
      "$350 exam"
    ],
    "url": "https://training-certifications.checkpoint.com/#/courses/Check%20Point%20Certified%20Master%20(CCSM)%20R80.x",
    "category": "Network Security",
    "level": "Expert",
    "raw_tooltip": "Checkpoint Certified Security Master\n    $350 exam"
  },
  {
    "id": "PCSAE",
    "abbreviation": "PCSAE",
    "name": "Palo Alto Certified Cloud Security Automation Engineer",
    "details": [
      "$350 exam"
    ],
    "url": "https://www.paloaltonetworks.com/services/education/certification",
    "category": "Network Security",
    "level": "Expert",
    "raw_tooltip": "Palo Alto Certified Cloud Security Automation Engineer\n    $350 exam"
  },
  {
    "id": "PCCSE",
    "abbreviation": "PCCSE",
    "name": "Prisma Certified Cloud Security Engineer",
    "details": [
      "$350 exam"
    ],
    "url": "https://www.paloaltonetworks.com/services/education/certification",
    "category": "Network Security",
    "level": "Expert",
    "raw_tooltip": "Prisma Certified Cloud Security Engineer\n    $350 exam"
  },
  {
    "id": "CIAM",
    "abbreviation": "CIAM",
    "name": "Identify Management Institute Certified Identify and Access Manager",
    "details": [
      "$390 Exam"
    ],
    "url": "https://www.identitymanagementinstitute.org/ciam/",
    "category": "Identity and Access Management",
    "level": "Expert",
    "raw_tooltip": "Identify Management Institute Certified Identify and Access Manager\n    $390 Exam"
  },
  {
    "id": "FCSS SO",
    "abbreviation": "FCSS SO",
    "name": "Fortinet Certified Solution Specialist - Security Operations",
    "details": [
      "$400 exam"
    ],
    "url": "https://training.fortinet.com/local/staticpage/view.php?page=fcss_security_operations",
    "category": "Security Architecture and Engineering",
    "level": "Expert",
    "raw_tooltip": "Fortinet Certified Solution Specialist - Security Operations\n    $400 exam"
  },
  {
    "id": "PDSO CDE",
    "abbreviation": "PDSO CDE",
    "name": "PDSO Certified DevSecOps Expert",
    "details": [
      "$1199",
      "Exam and training bundled"
    ],
    "url": "https://www.practical-devsecops.com/certified-devsecops-expert",
    "category": "Security Architecture and Engineering",
    "level": "Expert",
    "raw_tooltip": "PDSO Certified DevSecOps Expert\n    $1199\n    Exam and training bundled"
  },
  {
    "id": "VCP DCV",
    "abbreviation": "VCP DCV",
    "name": "VMware Certified Professional in Datacenter Virtualization",
    "details": [
      "$375 exam",
      "Branded course required"
    ],
    "url": "https://www.vmware.com/education-services/certification/vcp-dcv.html",
    "category": "Security Architecture and Engineering",
    "level": "Expert",
    "raw_tooltip": "VMware Certified Professional in Datacenter Virtualization\n    $375 exam\n    Branded course required"
  },
  {
    "id": "CKS",
    "abbreviation": "CKS",
    "name": "Cloud Native Computing Foundation Certified Kubernetes Security Specialist",
    "details": [
      "$375 lab",
      "Branded course required"
    ],
    "url": "https://www.cncf.io/certification/cks/",
    "category": "Security Architecture and Engineering",
    "level": "Expert",
    "raw_tooltip": "Cloud Native Computing Foundation Certified Kubernetes Security Specialist\n    $375 lab\n    Branded course required"
  },
  {
    "id": "LFCS",
    "abbreviation": "LFCS",
    "name": "Linux Foundation Certified System Administrator",
    "details": [
      "$300 exam"
    ],
    "url": "https://training.linuxfoundation.org/certification/linux-foundation-certified-sysadmin-lfcs/",
    "category": "Security Architecture and Engineering",
    "level": "Expert",
    "raw_tooltip": "Linux Foundation Certified System Administrator\n    $300 exam"
  },
  {
    "id": "FCSS OT",
    "abbreviation": "FCSS OT",
    "name": "Fortinet Certified Solution Specialist - OT Security",
    "details": [
      "$400 exam"
    ],
    "url": "https://training.fortinet.com/local/staticpage/view.php?page=fcss_ot_security",
    "category": "Security Architecture and Engineering",
    "level": "Expert",
    "raw_tooltip": "Fortinet Certified Solution Specialist - OT Security\n    $400 exam"
  },
  {
    "id": "CSSA",
    "abbreviation": "CSSA",
    "name": "Infosec Institute Certified SCADA Security Architect",
    "details": [
      "$4,599 exam",
      "Course required"
    ],
    "url": "https://app.infosecinstitute.com/portal/courses/a0tC0000000Fp4JIAS",
    "category": "Security Architecture and Engineering",
    "level": "Expert",
    "raw_tooltip": "Infosec Institute Certified SCADA Security Architect\n    $4,599 exam\n    Course required"
  },
  {
    "id": "Scrum PSD",
    "abbreviation": "Scrum PSD",
    "name": "Scrum Professional Scrum Developer",
    "details": [
      "$200 exam"
    ],
    "url": "https://www.scrum.org/professional-scrum-developer-certification",
    "category": "Security and Risk Management",
    "level": "Expert",
    "raw_tooltip": "Scrum Professional Scrum Developer\n    $200 exam"
  },
  {
    "id": "GCPM",
    "abbreviation": "GCPM",
    "name": "GIAC Certified Project Manager",
    "details": [
      "$979 exam",
      "SANS course recommended"
    ],
    "url": "https://www.giac.org/certification/gcpm",
    "category": "Security and Risk Management",
    "level": "Expert",
    "raw_tooltip": "GIAC Certified Project Manager\n    $979 exam\n    SANS course recommended"
  },
  {
    "id": "BCS PCIRM",
    "abbreviation": "BCS PCIRM",
    "name": "BCS Practitioner Certificate in Information Risk Management",
    "details": [
      "$287 exam"
    ],
    "url": "https://www.bcs.org/get-qualified/certifications-for-professionals/information-security-and-ccp-scheme-certifications/bcs-practitioner-certificate-in-information-risk-management/",
    "category": "Security and Risk Management",
    "level": "Expert",
    "raw_tooltip": "BCS Practitioner Certificate in Information Risk Management\n    $287 exam"
  },
  {
    "id": "PEXIN ISM",
    "abbreviation": "PEXIN ISM",
    "name": "EXIN Information Security Management Professional",
    "details": [
      "$268 exam"
    ],
    "url": "https://www.exin.com/certifications/information-security-management-professional-based-isoiec-27001-exam",
    "category": "Security and Risk Management",
    "level": "Expert",
    "raw_tooltip": "EXIN Information Security Management Professional\n    $268 exam"
  },
  {
    "id": "MGRC",
    "abbreviation": "MGRC",
    "name": "Mosse Institute Certified GRC Expert Certification",
    "details": [
      "$450 certification programme",
      "100% practical. No expiry."
    ],
    "url": "https://www.mosse-institute.com/certifications/mgrc-certified-grc-practitioner.html",
    "category": "Security and Risk Management",
    "level": "Expert",
    "raw_tooltip": "Mosse Institute Certified GRC Expert Certification\n  $450 certification programme\n  100% practical. No expiry."
  },
  {
    "id": "CSSLP",
    "abbreviation": "CSSLP",
    "name": "(ISC)2 Certified Secure Software Lifecycle Professional",
    "details": [
      "$599 exam"
    ],
    "url": "https://www.isc2.org/Certifications/CSSLP",
    "category": "Software Development Security",
    "level": "Expert",
    "raw_tooltip": "(ISC)2 Certified Secure Software Lifecycle Professional\n    $599 exam"
  },
  {
    "id": "MTH",
    "abbreviation": "MTH",
    "name": "Mosse Institute Certified Threat Hunter Certification",
    "details": [
      "$450 certification programme",
      "100% practical. No expiry."
    ],
    "url": "https://www.mosse-institute.com/certifications/mth-certified-threat-hunter.html",
    "category": "Security Operations (Blue Team)",
    "level": "Expert",
    "raw_tooltip": "Mosse Institute Certified Threat Hunter Certification\n                    $450 certification programme\n                    100% practical. No expiry."
  },
  {
    "id": "CDRP",
    "abbreviation": "CDRP",
    "name": "Infosec Institute Certified Data Recovery Professional",
    "details": [
      "$4,599 exam",
      "Course required"
    ],
    "url": "https://app.infosecinstitute.com/portal/courses/a0tC0000000FovhIAC",
    "category": "Security Operations (Blue Team)",
    "level": "Expert",
    "raw_tooltip": "Infosec Institute Certified Data Recovery Professional\n    $4,599 exam\n    Course required"
  },
  {
    "id": "eCDFP",
    "abbreviation": "eCDFP",
    "name": "eLearnSecurity Certified Digital Forensics Professional",
    "details": [
      "$400 exam"
    ],
    "url": "https://security.ine.com/certifications/ecdfp-certification/",
    "category": "Security Operations (Blue Team)",
    "level": "Expert",
    "raw_tooltip": "eLearnSecurity Certified Digital Forensics Professional\n    $400 exam"
  },
  {
    "id": "GPYC",
    "abbreviation": "GPYC",
    "name": "GIAC Python Coder",
    "details": [
      "$979 exam",
      "SANS course recommended"
    ],
    "url": "https://www.giac.org/certification/python-coder-gpyc",
    "category": "Security Operations (Blue Team)",
    "level": "Expert",
    "raw_tooltip": "GIAC Python Coder\n    $979 exam\n    SANS course recommended"
  },
  {
    "id": "MDFIR",
    "abbreviation": "MDFIR",
    "name": "Mosse Institute Certified DFIR Specialist",
    "details": [
      "$450 certification programme",
      "100% practical. No expiry."
    ],
    "url": "https://www.mosse-institute.com/certifications/mdfir-certified-dfir-specialist.html",
    "category": "Security Operations (Blue Team)",
    "level": "Expert",
    "raw_tooltip": "Mosse Institute Certified DFIR Specialist\n  $450 certification programme\n  100% practical. No expiry."
  },
  {
    "id": "LPT",
    "abbreviation": "LPT",
    "name": "EC Council Licensed Penetration Tester",
    "details": [
      "$899 exam"
    ],
    "url": "https://www.eccouncil.org/programs/licensed-penetration-tester-lpt-master/",
    "category": "Security Operations (Red Team)",
    "level": "Expert",
    "raw_tooltip": "EC Council Licensed Penetration Tester\n    $899 exam"
  },
  {
    "id": "PNPT",
    "abbreviation": "PNPT",
    "name": "TCM Security Practical Network Penetration Tester",
    "details": [
      "$299 exam"
    ],
    "url": "https://certifications.tcm-sec.com/pnpt/",
    "category": "Security Operations (Red Team)",
    "level": "Expert",
    "raw_tooltip": "TCM Security Practical Network Penetration Tester\n    $299 exam"
  },
  {
    "id": "GCPN",
    "abbreviation": "GCPN",
    "name": "GIAC Cloud Penetration Tester",
    "details": [
      "$2,499 exam",
      "SANS course recommended"
    ],
    "url": "https://www.giac.org/certification/gcpn",
    "category": "Security Operations (Red Team)",
    "level": "Expert",
    "raw_tooltip": "GIAC Cloud Penetration Tester\n    $2,499 exam\n    SANS course recommended"
  },
  {
    "id": "GRTP",
    "abbreviation": "GRTP",
    "name": "GIAC Red Team Professional",
    "details": [
      "$979 exam",
      "SANS course recommended"
    ],
    "url": "https://www.giac.org/certifications/red-team-professional-grtp/",
    "category": "Security Operations (Red Team)",
    "level": "Expert",
    "raw_tooltip": "GIAC Red Team Professional\n    $979 exam\n    SANS course recommended"
  },
  {
    "id": "SOG CAPenX",
    "abbreviation": "SOG CAPenX",
    "name": "The SecurityOps Group Certified AppSec Pentesting eXpert",
    "details": [
      "$800 exam"
    ],
    "url": "https://secops.group/product/certified-appsec-pentesting-expert-capenx/",
    "category": "Security Operations (Red Team)",
    "level": "Expert",
    "raw_tooltip": "The SecurityOps Group Certified AppSec Pentesting eXpert\n    $800 exam"
  },
  {
    "id": "GMOB",
    "abbreviation": "GMOB",
    "name": "GIAC Mobile Device Security Analyst",
    "details": [
      "$399 exam",
      "SANS course recommended"
    ],
    "url": "https://www.giac.org/certification/mobile-device-security-analyst-gmob",
    "category": "Security Operations (Red Team)",
    "level": "Expert",
    "raw_tooltip": "GIAC Mobile Device Security Analyst\n    $399 exam\n    SANS course recommended"
  },
  {
    "id": "FCSS NS",
    "abbreviation": "FCSS NS",
    "name": "Fortinet Certificed Solution Specialist - Network Security",
    "details": [
      "$800 two exams"
    ],
    "url": "https://training.fortinet.com/local/staticpage/view.php?page=fcss_network_security",
    "category": "Network Security",
    "level": "Expert",
    "raw_tooltip": "Fortinet Certificed Solution Specialist - Network Security\n    $800 two exams"
  },
  {
    "id": "CIDPRO",
    "abbreviation": "CIDPRO",
    "name": "IDPro Certified Identity Professional",
    "details": [
      "$700 exam"
    ],
    "url": "https://idpro.org/cidpro/",
    "category": "Identity and Access Management",
    "level": "Expert",
    "raw_tooltip": "IDPro Certified Identity Professional\n    $700 exam"
  },
  {
    "id": "CCSP",
    "abbreviation": "CCSP",
    "name": "(ISC)2 Certified Cloud Security Professional",
    "details": [
      "$599 exam"
    ],
    "url": "https://www.isc2.org/Certifications/CCSP",
    "category": "Security Architecture and Engineering",
    "level": "Expert",
    "raw_tooltip": "(ISC)2 Certified Cloud Security Professional\n    $599 exam"
  },
  {
    "id": "FCP PCS",
    "abbreviation": "FCP PCS",
    "name": "Fortinet Certified Professional - Public Cloud Security",
    "details": [
      "$400 for 2 exams"
    ],
    "url": "https://training.fortinet.com/local/staticpage/view.php?page=fcp_public_cloud_security",
    "category": "Security Architecture and Engineering",
    "level": "Expert",
    "raw_tooltip": "Fortinet Certified Professional - Public Cloud Security\n    $400 for 2 exams"
  },
  {
    "id": "FCP SO",
    "abbreviation": "FCP SO",
    "name": "Fortinet Certified Professional - Security Operations",
    "details": [
      "$400 for 2 exams"
    ],
    "url": "https://training.fortinet.com/local/staticpage/view.php?page=fcp_security_operations",
    "category": "Security Architecture and Engineering",
    "level": "Expert",
    "raw_tooltip": "Fortinet Certified Professional - Security Operations\n    $400 for 2 exams"
  },
  {
    "id": "RHCSA",
    "abbreviation": "RHCSA",
    "name": "Red Hat Certified System Administrator",
    "details": [
      "$400 exam"
    ],
    "url": "https://www.redhat.com/en/services/certification/rhcsa",
    "category": "Security Architecture and Engineering",
    "level": "Expert",
    "raw_tooltip": "Red Hat Certified System Administrator\n    $400 exam"
  },
  {
    "id": "ISA CDS",
    "abbreviation": "ISA CDS",
    "name": "ISA Certified Design Specialist",
    "details": [
      "$2,700 course + exam"
    ],
    "url": "https://www.isa.org/training-and-certifications/isa-certification/isa99iec-62443/isa99iec-62443-cybersecurity-certificate-programs/",
    "category": "Security Architecture and Engineering",
    "level": "Expert",
    "raw_tooltip": "ISA Certified Design Specialist\n    $2,700 course + exam"
  },
  {
    "id": "SFCTA",
    "abbreviation": "SFCTA",
    "name": "Salesforce Certified Technical Architect",
    "details": [
      "$6000",
      "Must be SF SA Certified"
    ],
    "url": "https://trailhead.salesforce.com/help?article=Salesforce-Certified-Technical-Architect-Exam-Guide",
    "category": "Security Architecture and Engineering",
    "level": "Expert",
    "raw_tooltip": "Salesforce Certified Technical Architect\n    $6000\n    Must be SF SA Certified"
  },
  {
    "id": "EPDPP",
    "abbreviation": "EPDPP",
    "name": "EXIN Privacy and Data Protection Practitioner",
    "details": [
      "$243 Exam",
      "Course req'd"
    ],
    "url": "https://embed.exin.totalservices.io/certifications/exin-privacy-and-data-protection-practitioner-exam",
    "category": "Asset Security",
    "level": "Expert",
    "raw_tooltip": "EXIN Privacy and Data Protection Practitioner\n    $243 Exam\n    Course req'd"
  },
  {
    "id": "M_o_R P",
    "abbreviation": "M_o_R P",
    "name": "Axelos M_o_R Practitioner Risk Management",
    "details": [
      "$560 exam"
    ],
    "url": "https://www.axelos.com/certifications/propath/mor-risk-management/mor-4-practitioner",
    "category": "Security and Risk Management",
    "level": "Expert",
    "raw_tooltip": "Axelos M_o_R Practitioner Risk Management\n    $560 exam"
  },
  {
    "id": "CPD",
    "abbreviation": "CPD",
    "name": "GAQM Certified Project Director",
    "details": [
      "$210 exam"
    ],
    "url": "https://gaqm.org/certifications/project_management/cpd",
    "category": "Security and Risk Management",
    "level": "Expert",
    "raw_tooltip": "GAQM Certified Project Director\n    $210 exam"
  },
  {
    "id": "PMI ACP",
    "abbreviation": "PMI ACP",
    "name": "PMI Agile Certified Practitioner",
    "details": [
      "$495 exam"
    ],
    "url": "https://www.pmi.org/certifications/types/agile-acp",
    "category": "Security and Risk Management",
    "level": "Expert",
    "raw_tooltip": "PMI Agile Certified Practitioner\n    $495 exam"
  },
  {
    "id": "EISM",
    "abbreviation": "EISM",
    "name": "EC Council Information Security Manager",
    "details": [
      "$3,499",
      "Branded course required"
    ],
    "url": "https://ciso.eccouncil.org/cciso-certification/eism-program/",
    "category": "Security and Risk Management",
    "level": "Expert",
    "raw_tooltip": "EC Council Information Security Manager\n    $3,499\n    Branded course required"
  },
  {
    "id": "CGEIT",
    "abbreviation": "CGEIT",
    "name": "ISACA Certified in the Governance of Enterprise IT",
    "details": [
      "$760 exam"
    ],
    "url": "https://www.isaca.org/credentialing/cgeit",
    "category": "Security and Risk Management",
    "level": "Expert",
    "raw_tooltip": "ISACA Certified in the Governance of Enterprise IT\n    $760 exam"
  },
  {
    "id": "EXIN 27001E",
    "abbreviation": "EXIN 27001E",
    "name": "EXIN ISO/IEC 27001 Expert",
    "details": [
      "~$379 Oral Presentation"
    ],
    "url": "https://www.exin.com/certifications/information-security-management-expert-based-isoiec-27001-exam?language_content_entity=en",
    "category": "Security and Risk Management",
    "level": "Expert",
    "raw_tooltip": "EXIN ISO/IEC 27001 Expert\n    ~$379 Oral Presentation"
  },
  {
    "id": "PECB 27005LM",
    "abbreviation": "PECB 27005LM",
    "name": "PECB ISO/IEC 27005 Lead Risk Manager",
    "details": [
      "~$1,595 exam",
      "Course required"
    ],
    "url": "https://pecb.com/en/education-and-certification-for-individuals/iso-iec-27005/iso-27005-lead-risk-manager",
    "category": "Security and Risk Management",
    "level": "Expert",
    "raw_tooltip": "PECB ISO/IEC 27005 Lead Risk Manager\n    ~$1,595 exam\n    Course required"
  },
  {
    "id": "DCCRP",
    "abbreviation": "DCCRP",
    "name": "DRI Certified Cyber Resilience Professional",
    "details": [
      "$400 Exam"
    ],
    "url": "https://drii.org/certification/ccrp",
    "category": "Security and Risk Management",
    "level": "Expert",
    "raw_tooltip": "DRI Certified Cyber Resilience Professional\n    $400 Exam"
  },
  {
    "id": "DevNet Pro",
    "abbreviation": "DevNet Pro",
    "name": "Cisco DevNet Professional",
    "details": [
      "$1200 two exams",
      "DevNet Associate req'd"
    ],
    "url": "https://www.cisco.com/site/us/en/learn/training-certifications/certifications/devnet/professional/index.html",
    "category": "Software Development Security",
    "level": "Expert",
    "raw_tooltip": "Cisco DevNet Professional\n    $1200 two exams\n    DevNet Associate req'd"
  },
  {
    "id": "SC-400",
    "abbreviation": "SC-400",
    "name": "Microsoft Certified Information Protection Administrator Associate",
    "details": [
      "$165 exam"
    ],
    "url": "https://docs.microsoft.com/en-us/learn/certifications/information-protection-administrator/",
    "category": "Security Operations (Blue Team)",
    "level": "Expert",
    "raw_tooltip": "Microsoft Certified Information Protection Administrator Associate\n    $165 exam"
  },
  {
    "id": "CCE",
    "abbreviation": "CCE",
    "name": "ISFCE Certified Computer Examiner",
    "details": [
      "$485 written exam"
    ],
    "url": "https://www.isfce.com/certification.htm",
    "category": "Security Operations (Blue Team)",
    "level": "Expert",
    "raw_tooltip": "ISFCE Certified Computer Examiner\n    $485 written exam"
  },
  {
    "id": "CM)DFI",
    "abbreviation": "CM)DFI",
    "name": "Mile2 Certified Master Digital Forensic Investigator",
    "details": [
      "Complete C)SP, C)DFE, C)NFE and C)CSA ($2200)"
    ],
    "url": "https://www.mile2.com/master-certifications/",
    "category": "Security Operations (Blue Team)",
    "level": "Expert",
    "raw_tooltip": "Mile2 Certified Master Digital Forensic Investigator\n    Complete C)SP, C)DFE, C)NFE and C)CSA ($2200)"
  },
  {
    "id": "CREST CRIA",
    "abbreviation": "CREST CRIA",
    "name": "CREST Registered Intrusion Analyst",
    "details": [
      "$612 exam & lab"
    ],
    "url": "https://www.crest-approved.org/certification-careers/crest-certifications/crest-registered-intrusion-analyst",
    "category": "Security Operations (Blue Team)",
    "level": "Expert",
    "raw_tooltip": "CREST Registered Intrusion Analyst\n    $612 exam & lab"
  },
  {
    "id": "CREST CRTIA",
    "abbreviation": "CREST CRTIA",
    "name": "CREST Registered Threat Intelligence Analyst",
    "details": [
      "$615 2 exams"
    ],
    "url": "https://www.crest-approved.org/certification-careers/crest-certifications/crest-registered-threat-intelligence-analyst",
    "category": "Security Operations (Blue Team)",
    "level": "Expert",
    "raw_tooltip": "CREST Registered Threat Intelligence Analyst\n    $615 2 exams"
  },
  {
    "id": "GWAPT",
    "abbreviation": "GWAPT",
    "name": "GIAC Web Application Penetration Tester",
    "details": [
      "$979 exam",
      "SANS course recommended"
    ],
    "url": "https://www.giac.org/certification/gwapt",
    "category": "Security Operations (Red Team)",
    "level": "Expert",
    "raw_tooltip": "GIAC Web Application Penetration Tester\n    $979 exam\n    SANS course recommended"
  },
  {
    "id": "OSMR",
    "abbreviation": "OSMR",
    "name": "Offensive Security MacOS Researcher",
    "details": [
      "$2,499 exam",
      "Learning subscription required"
    ],
    "url": "https://www.offensive-security.com/exp312-osmr/",
    "category": "Security Operations (Red Team)",
    "level": "Expert",
    "raw_tooltip": "Offensive Security MacOS Researcher\n    $2,499 exam\n    Learning subscription required"
  },
  {
    "id": "GCPT",
    "abbreviation": "GCPT",
    "name": "GAQM Certified Penetration Tester",
    "details": [
      "$128 exam"
    ],
    "url": "https://gaqm.org/certifications/information_systems_security/certified_penetration_tester_cpt",
    "category": "Security Operations (Red Team)",
    "level": "Expert",
    "raw_tooltip": "GAQM Certified Penetration Tester\n    $128 exam"
  },
  {
    "id": "CCPenX-AWS",
    "abbreviation": "CCPenX-AWS",
    "name": "The SecurityOps Group Certified Cloud Pentesting eXpert-AWS",
    "details": [
      "$800 exam"
    ],
    "url": "https://secops.group/product/certified-cloud-pentesting-expert/",
    "category": "Security Operations (Red Team)",
    "level": "Expert",
    "raw_tooltip": "The SecurityOps Group Certified Cloud Pentesting eXpert-AWS\n    $800 exam"
  },
  {
    "id": "CCSE",
    "abbreviation": "CCSE",
    "name": "Checkpoint Certified Security Expert",
    "details": [
      "$250 exam"
    ],
    "url": "https://training-certifications.checkpoint.com/#/courses/Check%20Point%20Certified%20Expert%20(CCSE)%20R80.x",
    "category": "Network Security",
    "level": "Expert",
    "raw_tooltip": "Checkpoint Certified Security Expert\n    $250 exam"
  },
  {
    "id": "AWS CSS",
    "abbreviation": "AWS CSS",
    "name": "Amazon Web Services Certified Security - Specialty",
    "details": [
      "$150 exam"
    ],
    "url": "https://aws.amazon.com/certification/certified-security-specialty/",
    "category": "Security Architecture and Engineering",
    "level": "Expert",
    "raw_tooltip": "Amazon Web Services Certified Security - Specialty\n    $150 exam"
  },
  {
    "id": "SFCCCC",
    "abbreviation": "SFCCCC",
    "name": "SalesForce Certified Community Cloud Consultant",
    "details": [
      "$200 exam",
      "Must be SalesForce Admin Certified"
    ],
    "url": "https://trailhead.salesforce.com/help?article=Salesforce-Certified-Community-Cloud-Consultant-Exam-Guide",
    "category": "Security Architecture and Engineering",
    "level": "Expert",
    "raw_tooltip": "SalesForce Certified Community Cloud Consultant\n    $200 exam\n    Must be SalesForce Admin Certified"
  },
  {
    "id": "EXIN PCSA",
    "abbreviation": "EXIN PCSA",
    "name": "EXIN Professional Cloud Solution Architect",
    "details": [
      "$315 exam"
    ],
    "url": "https://www.exin.com/certifications/ccc-professional-cloud-solution-architect-exam",
    "category": "Security Architecture and Engineering",
    "level": "Expert",
    "raw_tooltip": "EXIN Professional Cloud Solution Architect\n    $315 exam"
  },
  {
    "id": "CKA",
    "abbreviation": "CKA",
    "name": "Cloud Native Computing Foundation Certified Kubernetes Administrator",
    "details": [
      "$375 lab",
      "Branded course required"
    ],
    "url": "https://www.cncf.io/certification/cka/",
    "category": "Security Architecture and Engineering",
    "level": "Expert",
    "raw_tooltip": "Cloud Native Computing Foundation Certified Kubernetes Administrator\n    $375 lab\n    Branded course required"
  },
  {
    "id": "TUV COTCP",
    "abbreviation": "TUV COTCP",
    "name": "TUV Rheinland Certified Operational Technology Cybersecurity Professional (GERMAN)",
    "details": [
      "$415 exam"
    ],
    "url": "https://www.tuv.com/landingpage/en/lp-certified-operational-technology-cybersecurity-professional-program/",
    "category": "Security Architecture and Engineering",
    "level": "Expert",
    "raw_tooltip": "TUV Rheinland Certified Operational Technology Cybersecurity Professional (GERMAN)\n                        $415 exam"
  },
  {
    "id": "SABSA SCF",
    "abbreviation": "SABSA SCF",
    "name": "SABSA Chartered Security Architect - Foundation Certificate",
    "details": [
      "$3,750 exam",
      "Branded course required"
    ],
    "url": "https://sabsa.org/certification/",
    "category": "Security Architecture and Engineering",
    "level": "Expert",
    "raw_tooltip": "SABSA Chartered Security Architect - Foundation Certificate\n    $3,750 exam\n    Branded course required"
  },
  {
    "id": "CIPA",
    "abbreviation": "CIPA",
    "name": "IMI Certified Identity Protection comptia-advanced-security-practitioner",
    "details": [
      "$295 Exam"
    ],
    "url": "https://www.identitymanagementinstitute.org/cipa/",
    "category": "Asset Security",
    "level": "Expert",
    "raw_tooltip": "IMI Certified Identity Protection comptia-advanced-security-practitioner\n    $295 Exam"
  },
  {
    "id": "DCPP",
    "abbreviation": "DCPP",
    "name": "DSCI Certified Privacy Professional",
    "details": [
      "$205 Exam"
    ],
    "url": "https://www.dsci.in/content/dsci-certified-privacy-professional-dcpp",
    "category": "Asset Security",
    "level": "Expert",
    "raw_tooltip": "DSCI Certified Privacy Professional\n    $205 Exam"
  },
  {
    "id": "Scrum PAL",
    "abbreviation": "Scrum PAL",
    "name": "Scrum  Professional Agile Leadership",
    "details": [
      "$200 exam"
    ],
    "url": "https://www.scrum.org/professional-agile-leadership-certification",
    "category": "Security and Risk Management",
    "level": "Expert",
    "raw_tooltip": "Scrum  Professional Agile Leadership\n    $200 exam"
  },
  {
    "id": "CAPM",
    "abbreviation": "CAPM",
    "name": "PMI Certified Associate in Project Management",
    "details": [
      "$300 exam"
    ],
    "url": "https://www.pmi.org/certifications/types/certified-associate-capm",
    "category": "Security and Risk Management",
    "level": "Expert",
    "raw_tooltip": "PMI Certified Associate in Project Management\n    $300 exam"
  },
  {
    "id": "PSM II",
    "abbreviation": "PSM II",
    "name": "Scrum.org Professional Scrum Master II",
    "details": [
      "$250 exam"
    ],
    "url": "https://www.scrum.org/assessments/professional-scrum-master-ii-certification",
    "category": "Security and Risk Management",
    "level": "Expert",
    "raw_tooltip": "Scrum.org Professional Scrum Master II\n    $250 exam"
  },
  {
    "id": "APMG 20000P",
    "abbreviation": "APMG 20000P",
    "name": "APMG ISO/IEC 20000 Practitioner",
    "details": [
      "$308 Exam",
      "Foundation or ITIL req'd"
    ],
    "url": "https://apmg-international.com/product/iso-iec-20000",
    "category": "Security and Risk Management",
    "level": "Expert",
    "raw_tooltip": "APMG ISO/IEC 20000 Practitioner\n    $308 Exam\n    Foundation or ITIL req'd"
  },
  {
    "id": "C)ISRM",
    "abbreviation": "C)ISRM",
    "name": "Mile2 Certified Information Systems Risk Manager",
    "details": [
      "$550 exam"
    ],
    "url": "https://www.mile2.com/information-systems-risk-mangager-outline/",
    "category": "Security and Risk Management",
    "level": "Expert",
    "raw_tooltip": "Mile2 Certified Information Systems Risk Manager\n    $550 exam"
  },
  {
    "id": "APMG 27001P",
    "abbreviation": "APMG 27001P",
    "name": "APMG ISO/IEC 27001 Practitioner",
    "details": [
      "$400 exam",
      "Application essay"
    ],
    "url": "https://apmg-international.com/product/isoiec-27001",
    "category": "Security and Risk Management",
    "level": "Expert",
    "raw_tooltip": "APMG ISO/IEC 27001 Practitioner\n    $400 exam\n    Application essay"
  },
  {
    "id": "PECB 27001LI",
    "abbreviation": "PECB 27001LI",
    "name": "PECB ISO/IEC 27001 Lead Implementer",
    "details": [
      "$930 exam",
      "Course required"
    ],
    "url": "https://pecb.com/en/education-and-certification-for-individuals/iso-iec-27001/iso-iec-27001-lead-implementer",
    "category": "Security and Risk Management",
    "level": "Expert",
    "raw_tooltip": "PECB ISO/IEC 27001 Lead Implementer\n    $930 exam\n    Course required"
  },
  {
    "id": "CASE",
    "abbreviation": "CASE",
    "name": "EC Council Certified Application Security Engineer (.NET or Java)",
    "details": [
      "$550 exam"
    ],
    "url": "https://www.eccouncil.org/programs/certified-application-security-engineer-case/",
    "category": "Software Development Security",
    "level": "Expert",
    "raw_tooltip": "EC Council Certified Application Security Engineer (.NET or Java)\n    $550 exam"
  },
  {
    "id": "C)DRE",
    "abbreviation": "C)DRE",
    "name": "Mile2 Certified Disaster Recovery Engineer",
    "details": [
      "$550 exam"
    ],
    "url": "https://www.mile2.com/cdre_outline/",
    "category": "Security Operations (Blue Team)",
    "level": "Expert",
    "raw_tooltip": "Mile2 Certified Disaster Recovery Engineer\n                    $550 exam"
  },
  {
    "id": "GSOC",
    "abbreviation": "GSOC",
    "name": "GIAC Security Operations Certified",
    "details": [
      "$979 exam",
      "SANS course recommended"
    ],
    "url": "https://www.giac.org/certifications/security-operations-certified-gsoc/",
    "category": "Security Operations (Blue Team)",
    "level": "Expert",
    "raw_tooltip": "GIAC Security Operations Certified\n    $979 exam\n    SANS course recommended"
  },
  {
    "id": "GBFA",
    "abbreviation": "GBFA",
    "name": "GIAC Battlefield Forensics and Acquisition",
    "details": [
      "$979 exam",
      "SANS course recommended"
    ],
    "url": "https://www.giac.org/certification/gbfa",
    "category": "Security Operations (Blue Team)",
    "level": "Expert",
    "raw_tooltip": "GIAC Battlefield Forensics and Acquisition\n    $979 exam\n    SANS course recommended"
  },
  {
    "id": "BTL1",
    "abbreviation": "BTL1",
    "name": "Security Blue Team Level 1",
    "details": [
      "$660 course",
      "1 exam attempt included"
    ],
    "url": "https://www.securityblue.team/why-btl1/",
    "category": "Security Operations (Blue Team)",
    "level": "Expert",
    "raw_tooltip": "Security Blue Team Level 1\n    $660 course\n    1 exam attempt included"
  },
  {
    "id": "MBT",
    "abbreviation": "MBT",
    "name": "Mosse Institute Certified Blue Teamer Certification",
    "details": [
      "$450 certification programme",
      "100% practical. No expiry."
    ],
    "url": "https://www.mosse-institute.com/certifications/mbt-certified-blue-teamer.html",
    "category": "Security Operations (Blue Team)",
    "level": "Expert",
    "raw_tooltip": "Mosse Institute Certified Blue Teamer Certification\n  $450 certification programme\n  100% practical. No expiry."
  },
  {
    "id": "MPT",
    "abbreviation": "MPT",
    "name": "Mosse Institute Certified Penetration Tester Certification",
    "details": [
      "$450 certification programme",
      "100% practical. No expiry."
    ],
    "url": "https://www.mosse-institute.com/certifications/mpt-certified-penetration-tester.html",
    "category": "Security Operations (Red Team)",
    "level": "Expert",
    "raw_tooltip": "Mosse Institute Certified Penetration Tester Certification\n    $450 certification programme\n    100% practical. No expiry."
  },
  {
    "id": "CPENT",
    "abbreviation": "CPENT",
    "name": "EC Council Certified Penetration Testing Professional",
    "details": [
      "$999 exam"
    ],
    "url": "https://www.eccouncil.org/programs/certified-penetration-testing-professional-cpent/",
    "category": "Security Operations (Red Team)",
    "level": "Expert",
    "raw_tooltip": "EC Council Certified Penetration Testing Professional\n    $999 exam"
  },
  {
    "id": "CREST CCTAPP",
    "abbreviation": "CREST CCTAPP",
    "name": "CREST Certified Web Application Tester",
    "details": [
      "$2,520 exam & lab"
    ],
    "url": "https://www.crest-approved.org/certification-careers/crest-certifications/crest-certified-web-application-tester/",
    "category": "Security Operations (Red Team)",
    "level": "Expert",
    "raw_tooltip": "CREST Certified Web Application Tester\n    $2,520 exam & lab"
  },
  {
    "id": "HTB CPTS",
    "abbreviation": "HTB CPTS",
    "name": "Hack the Box Certified Penetration Testing Specialist",
    "details": [
      "$200 modules + $210 exam",
      "$490 Subscription available"
    ],
    "url": "https://academy.hackthebox.com/preview/certifications/htb-certified-penetration-testing-specialist/",
    "category": "Security Operations (Red Team)",
    "level": "Expert",
    "raw_tooltip": "Hack the Box Certified Penetration Testing Specialist\n    $200 modules + $210 exam\n    $490 Subscription available"
  },
  {
    "id": "MRE",
    "abbreviation": "MRE",
    "name": "Mosse Institute Certified Reverse Engineer Certification",
    "details": [
      "$450 certification programme",
      "100% practical. No expiry."
    ],
    "url": "https://www.mosse-institute.com/certifications/mre-certified-reverse-engineer.html",
    "category": "Security Operations (Red Team)",
    "level": "Expert",
    "raw_tooltip": "Mosse Institute Certified Reverse Engineer Certification\n    $450 certification programme\n    100% practical. No expiry."
  },
  {
    "id": "JNCIS Sec",
    "abbreviation": "JNCIS Sec",
    "name": "Juniper Networks Certified Internet Specialist, Security",
    "details": [
      "$300 exam"
    ],
    "url": "https://www.juniper.net/us/en/training/certification/certification-tracks/junos-security-track/?tab=jncisec",
    "category": "Network Security",
    "level": "Expert",
    "raw_tooltip": "Juniper Networks Certified Internet Specialist, Security\n    $300 exam"
  },
  {
    "id": "Programming Language",
    "abbreviation": "Programming Language",
    "name": "Learning a programming language is valuable to any IT professionals career.",
    "details": [
      "Recommendations: Python, Ruby, C++"
    ],
    "url": "https://www.learnpython.org/",
    "category": "Security and Risk Management",
    "level": "Expert",
    "raw_tooltip": "Learning a programming language is valuable to any IT professionals career.\n    Recommendations: Python, Ruby, C++"
  },
  {
    "id": "GMLE",
    "abbreviation": "GMLE",
    "name": "GIAC Machine Learning Engineer",
    "details": [
      "$979 exam"
    ],
    "url": "https://www.giac.org/certifications/machine-learning-engineer-gmle/",
    "category": "Software Development Security",
    "level": "Expert",
    "raw_tooltip": "GIAC Machine Learning Engineer\n    $979 exam"
  },
  {
    "id": "CREST CCHIA",
    "abbreviation": "CREST CCHIA",
    "name": "CREST Certified Host intrustion Analyst",
    "details": [
      "$2,481 exam & essay",
      "Hands on exam in UK"
    ],
    "url": "https://www.crest-approved.org/certification-careers/crest-certifications/crest-certified-host-intrusion-analyst",
    "category": "Security Operations (Blue Team)",
    "level": "Expert",
    "raw_tooltip": "CREST Certified Host intrustion Analyst\n    $2,481 exam & essay\n    Hands on exam in UK"
  },
  {
    "id": "EnCE",
    "abbreviation": "EnCE",
    "name": "OpenText EnCase Certified Examiner",
    "details": [
      "$200 two exams"
    ],
    "url": "https://www.opentext.com/products-and-solutions/services/training-and-learning-services/encase-training/examiner-certification",
    "category": "Security Operations (Blue Team)",
    "level": "Expert",
    "raw_tooltip": "OpenText EnCase Certified Examiner\n    $200 two exams"
  },
  {
    "id": "ACE",
    "abbreviation": "ACE",
    "name": "AccessData Certified Examiner",
    "details": [
      "$100 + software"
    ],
    "url": "https://accessdata.com/training/computer-forensics-certification",
    "category": "Security Operations (Blue Team)",
    "level": "Expert",
    "raw_tooltip": "AccessData Certified Examiner\n    $100 + software"
  },
  {
    "id": "eCIR",
    "abbreviation": "eCIR",
    "name": "eLearnSecurity Certified Incident Responder",
    "details": [
      "$400 lab"
    ],
    "url": "https://security.ine.com/certifications/ecir-certification/",
    "category": "Security Operations (Blue Team)",
    "level": "Expert",
    "raw_tooltip": "eLearnSecurity Certified Incident Responder\n    $400 lab"
  },
  {
    "id": "C)IHE",
    "abbreviation": "C)IHE",
    "name": "Mile2 Certified Incident Handling Engineer",
    "details": [
      "$550 exam"
    ],
    "url": "https://www.mile2.com/cihe_outline/",
    "category": "Security Operations (Blue Team)",
    "level": "Expert",
    "raw_tooltip": "Mile2 Certified Incident Handling Engineer\n    $550 exam"
  },
  {
    "id": "CSTL",
    "abbreviation": "CSTL",
    "name": "Cyber Scheme Team Leader",
    "details": [
      "$1945 exam"
    ],
    "url": "https://thecyberscheme.org/cyber-scheme-team-leader-cstl-exam/",
    "category": "Security Operations (Red Team)",
    "level": "Expert",
    "raw_tooltip": "Cyber Scheme Team Leader\n    $1945 exam"
  },
  {
    "id": "eCPPT",
    "abbreviation": "eCPPT",
    "name": "eLearnSecurity Certified Professional Penetration Tester",
    "details": [
      "$400 lab"
    ],
    "url": "https://security.ine.com/certifications/ecppt-certification/",
    "category": "Security Operations (Red Team)",
    "level": "Expert",
    "raw_tooltip": "eLearnSecurity Certified Professional Penetration Tester\n    $400 lab"
  },
  {
    "id": "eWPT",
    "abbreviation": "eWPT",
    "name": "eLearnSecurity Web Application Penetration Tester",
    "details": [
      "$400 lab"
    ],
    "url": "https://security.ine.com/certifications/ewpt-certification/",
    "category": "Security Operations (Red Team)",
    "level": "Expert",
    "raw_tooltip": "eLearnSecurity Web Application Penetration Tester\n    $400 lab"
  },
  {
    "id": "CM)IPS",
    "abbreviation": "CM)IPS",
    "name": "Mile2 Certified Master Intrusion Prevention Specialist",
    "details": [
      "Complete C)VA, C)PEH, C)PTE and C)PTC ($2200)"
    ],
    "url": "https://www.mile2.com/master-certifications/",
    "category": "Security Operations (Red Team)",
    "level": "Expert",
    "raw_tooltip": "Mile2 Certified Master Intrusion Prevention Specialist\n    Complete C)VA, C)PEH, C)PTE and C)PTC ($2200)"
  },
  {
    "id": "HTB CBBH",
    "abbreviation": "HTB CBBH",
    "name": "Hack the Box Certified Bug Bounty Hunter",
    "details": [
      "$145 modules + $210 exam",
      "$490 Subscription available"
    ],
    "url": "https://academy.hackthebox.com/preview/certifications/htb-certified-bug-bounty-hunter/",
    "category": "Security Operations (Red Team)",
    "level": "Expert",
    "raw_tooltip": "Hack the Box Certified Bug Bounty Hunter\n    $145 modules + $210 exam\n    $490 Subscription available"
  },
  {
    "id": "PJMR",
    "abbreviation": "PJMR",
    "name": "Practical Junior Malware Researcher",
    "details": [
      "$399 lab"
    ],
    "url": "https://certifications.tcm-sec.com/pjmr/",
    "category": "Security Operations (Red Team)",
    "level": "Expert",
    "raw_tooltip": "Practical Junior Malware Researcher\n    $399 lab"
  },
  {
    "id": "F5 CTS APM",
    "abbreviation": "F5 CTS APM",
    "name": "F5 Big-IP Certified Technical Specialist - Access Policy Manager",
    "details": [
      "$135 exam"
    ],
    "url": "https://view.ceros.com/f5/certification-roadmap/p/9?heightOverride=740",
    "category": "Network Security",
    "level": "Intermediate",
    "raw_tooltip": "F5 Big-IP Certified Technical Specialist - Access Policy Manager\n    $135 exam"
  },
  {
    "id": "FCP NS",
    "abbreviation": "FCP NS",
    "name": "Fortinet Certified Professional - Network Security",
    "details": [
      "$400 for 2 exams"
    ],
    "url": "https://training.fortinet.com/local/staticpage/view.php?page=fcp_network_security",
    "category": "Network Security",
    "level": "Intermediate",
    "raw_tooltip": "Fortinet Certified Professional - Network Security\n    $400 for 2 exams"
  },
  {
    "id": "CCNA",
    "abbreviation": "CCNA",
    "name": "Cisco Certified Network Associate",
    "details": [
      "~$330 exam"
    ],
    "url": "https://www.cisco.com/c/en/us/training-events/training-certifications/certifications/associate/ccna.html",
    "category": "Network Security",
    "level": "Intermediate",
    "raw_tooltip": "Cisco Certified Network Associate\n    ~$330 exam"
  },
  {
    "id": "AZ-500",
    "abbreviation": "AZ-500",
    "name": "Microsoft Azure Security Engineer Associate",
    "details": [
      "$165 exam"
    ],
    "url": "https://docs.microsoft.com/en-us/learn/certifications/azure-security-engineer?wt.mc_id=learningredirect_certs-web-wwl",
    "category": "Security Architecture and Engineering",
    "level": "Intermediate",
    "raw_tooltip": "Microsoft Azure Security Engineer Associate\n    $165 exam"
  },
  {
    "id": "CSA CGC",
    "abbreviation": "CSA CGC",
    "name": "Cloud Security Alliance Cloud Governance & Compliance",
    "details": [
      "$315 exam"
    ],
    "url": "https://cloudsecurityalliance.org/education/cloud-governance-and-compliance/",
    "category": "Security Architecture and Engineering",
    "level": "Intermediate",
    "raw_tooltip": "Cloud Security Alliance Cloud Governance & Compliance\n    $315 exam"
  },
  {
    "id": "VCP NV",
    "abbreviation": "VCP NV",
    "name": "VMware Certified Professional in Network Virtualization",
    "details": [
      "$375 exam",
      "Branded course required"
    ],
    "url": "https://www.vmware.com/education-services/certification/vcp-nv-tracks.html",
    "category": "Security Architecture and Engineering",
    "level": "Intermediate",
    "raw_tooltip": "VMware Certified Professional in Network Virtualization\n    $375 exam\n    Branded course required"
  },
  {
    "id": "CKAD",
    "abbreviation": "CKAD",
    "name": "Cloud Native Computing Foundation Certified Kubernetes Application Developer",
    "details": [
      "$375 lab",
      "Branded course required"
    ],
    "url": "https://www.cncf.io/certification/ckad/",
    "category": "Security Architecture and Engineering",
    "level": "Intermediate",
    "raw_tooltip": "Cloud Native Computing Foundation Certified Kubernetes Application Developer\n    $375 lab\n    Branded course required"
  },
  {
    "id": "LPIC-2",
    "abbreviation": "LPIC-2",
    "name": "Linux Professional Institute Certified: Linux Engineer",
    "details": [
      "$400 2 exams"
    ],
    "url": "https://www.lpi.org/our-certifications/lpic-2-overview",
    "category": "Security Architecture and Engineering",
    "level": "Intermediate",
    "raw_tooltip": "Linux Professional Institute Certified: Linux Engineer\n    $400 2 exams"
  },
  {
    "id": "GCIP",
    "abbreviation": "GCIP",
    "name": "GIAC Critical Infrastructure Protection",
    "details": [
      "$979 exam",
      "SANS course encouraged"
    ],
    "url": "https://www.giac.org/certification/critical-infrastructure-protection-gcip",
    "category": "Security Architecture and Engineering",
    "level": "Intermediate",
    "raw_tooltip": "GIAC Critical Infrastructure Protection\n    $979 exam\n    SANS course encouraged"
  },
  {
    "id": "CIMP",
    "abbreviation": "CIMP",
    "name": "IMI Certified Identity Management Professional",
    "details": [
      "$295 Exam"
    ],
    "url": "https://www.identitymanagementinstitute.org/cimp/",
    "category": "Asset Security",
    "level": "Intermediate",
    "raw_tooltip": "IMI Certified Identity Management Professional\n    $295 Exam"
  },
  {
    "id": "CDP",
    "abbreviation": "CDP",
    "name": "IMI Certified in Data Protection",
    "details": [
      "$395 Exam"
    ],
    "url": "https://www.identitymanagementinstitute.org/cdp/",
    "category": "Asset Security",
    "level": "Intermediate",
    "raw_tooltip": "IMI Certified in Data Protection\n    $395 Exam"
  },
  {
    "id": "CCP",
    "abbreviation": "CCP",
    "name": "EC First Certified CCMC Professional",
    "details": [
      "$2,995 exam",
      "Course required"
    ],
    "url": "https://ecfirst.biz/index.php?route=product/product&path=59_83&product_id=281",
    "category": "Security and Risk Management",
    "level": "Intermediate",
    "raw_tooltip": "EC First Certified CCMC Professional\n    $2,995 exam\n    Course required"
  },
  {
    "id": "C)ISSO",
    "abbreviation": "C)ISSO",
    "name": "Mile2 Certified Information Systems Security Officer",
    "details": [
      "$550 exam"
    ],
    "url": "https://www.mile2.com/cisso_outline/",
    "category": "Security and Risk Management",
    "level": "Intermediate",
    "raw_tooltip": "Mile2 Certified Information Systems Security Officer\n    $550 exam"
  },
  {
    "id": "CIS RM",
    "abbreviation": "CIS RM",
    "name": "IBITGQ Certified ISO 27005 Information Security Management Specialist Risk Management",
    "details": [
      "$2,783 course exam",
      "Branded course required"
    ],
    "url": "https://www.itgovernance.co.uk/shop/product/iso-27005-certified-isms-risk-management",
    "category": "Security and Risk Management",
    "level": "Intermediate",
    "raw_tooltip": "IBITGQ Certified ISO 27005 Information Security Management Specialist Risk Management\n    $2,783 course exam\n    Branded course required"
  },
  {
    "id": "EXIN 27001P",
    "abbreviation": "EXIN 27001P",
    "name": "EXIN ISO/IEC 27001 Professional",
    "details": [
      "$279 exam"
    ],
    "url": "https://www.exin.com/certifications/information-security-management-professional-based-isoiec-27001-exam",
    "category": "Security and Risk Management",
    "level": "Intermediate",
    "raw_tooltip": "EXIN ISO/IEC 27001 Professional\n    $279 exam"
  },
  {
    "id": "PECB 27032CM",
    "abbreviation": "PECB 27032CM",
    "name": "PECB ISO/IEC 27032 Lead Cybersecurity Manager",
    "details": [
      "$899-$2,999 course exam",
      "Course required"
    ],
    "url": "https://pecb.com/en/education-and-certification-for-individuals/iso-iec-27032/iso-iec-27032-lead-cyber-security-manager",
    "category": "Security and Risk Management",
    "level": "Intermediate",
    "raw_tooltip": "PECB ISO/IEC 27032 Lead Cybersecurity Manager\n    $899-$2,999 course exam\n    Course required"
  },
  {
    "id": "C)HISSP",
    "abbreviation": "C)HISSP",
    "name": "Mile2 Certified Healthcare Information Systems Security Practitioner",
    "details": [
      "$550 exam"
    ],
    "url": "https://www.mile2.com/chissp_outline/",
    "category": "Security and Risk Management",
    "level": "Intermediate",
    "raw_tooltip": "Mile2 Certified Healthcare Information Systems Security Practitioner\n    $550 exam"
  },
  {
    "id": "CASST",
    "abbreviation": "CASST",
    "name": "GAQM Certified Advanced Software Security Tester",
    "details": [
      "$210 exam"
    ],
    "url": "https://gaqm.org/certifications/software_security_testing/casst",
    "category": "Software Development Security",
    "level": "Intermediate",
    "raw_tooltip": "GAQM Certified Advanced Software Security Tester\n    $210 exam"
  },
  {
    "id": "OSIP",
    "abbreviation": "OSIP",
    "name": "IntelTechniques Open Source Intelligence Professional",
    "details": [
      "$300 practical exam"
    ],
    "url": "https://inteltechniques.com/training-osip.html",
    "category": "Security Operations (Blue Team)",
    "level": "Intermediate",
    "raw_tooltip": "IntelTechniques Open Source Intelligence Professional\n    $300 practical exam"
  },
  {
    "id": "Cisco COA",
    "abbreviation": "Cisco COA",
    "name": "Cisco Certified CyberOps Associate Cyber Operations",
    "details": [
      "~$325 exam"
    ],
    "url": "https://www.cisco.com/c/en/us/training-events/training-certifications/certifications/associate/cyberops-associate.html",
    "category": "Security Operations (Blue Team)",
    "level": "Intermediate",
    "raw_tooltip": "Cisco Certified CyberOps Associate Cyber Operations\n    ~$325 exam"
  },
  {
    "id": "C)CSA",
    "abbreviation": "C)CSA",
    "name": "Mile2 Certified Cybersecurity Analyst",
    "details": [
      "$550 exam"
    ],
    "url": "https://www.mile2.com/ccsa_outline/",
    "category": "Security Operations (Blue Team)",
    "level": "Intermediate",
    "raw_tooltip": "Mile2 Certified Cybersecurity Analyst\n    $550 exam"
  },
  {
    "id": "CHFI",
    "abbreviation": "CHFI",
    "name": "EC Council Computer Hacking Forensics Investigator",
    "details": [
      "$650 exam"
    ],
    "url": "https://www.eccouncil.org/programs/computer-hacking-forensic-investigator-chfi/",
    "category": "Security Operations (Blue Team)",
    "level": "Intermediate",
    "raw_tooltip": "EC Council Computer Hacking Forensics Investigator\n    $650 exam"
  },
  {
    "id": "S-TA",
    "abbreviation": "S-TA",
    "name": "SECO Certified Threat Analyst",
    "details": [
      "$550 exam"
    ],
    "url": "https://www.seco-institute.org/get-trained/cyber-defense-track/threat-analyst-certification/",
    "category": "Security Operations (Blue Team)",
    "level": "Intermediate",
    "raw_tooltip": "SECO Certified Threat Analyst\n    $550 exam"
  },
  {
    "id": "ECIH",
    "abbreviation": "ECIH",
    "name": "EC Council Certified Incident Handler",
    "details": [
      "$300 exam"
    ],
    "url": "https://www.eccouncil.org/programs/ec-council-certified-incident-handler-ecih/",
    "category": "Security Operations (Blue Team)",
    "level": "Intermediate",
    "raw_tooltip": "EC Council Certified Incident Handler\n    $300 exam"
  },
  {
    "id": "C)PSH",
    "abbreviation": "C)PSH",
    "name": "Mile2 Certified Powershell Hacker",
    "details": [
      "$550 exam"
    ],
    "url": "https://www.mile2.com/cpSH_outline/",
    "category": "Security Operations (Red Team)",
    "level": "Intermediate",
    "raw_tooltip": "Mile2 Certified Powershell Hacker\n    $550 exam"
  },
  {
    "id": "CMWAPT",
    "abbreviation": "CMWAPT",
    "name": "Infosec Institute Certified Mobile and Web App Penetration Tester",
    "details": [
      "$4,599 exam",
      "Course required"
    ],
    "url": "https://app.infosecinstitute.com/portal/courses/a0tC0000000Fow6IAC",
    "category": "Security Operations (Red Team)",
    "level": "Intermediate",
    "raw_tooltip": "Infosec Institute Certified Mobile and Web App Penetration Tester\n    $4,599 exam\n    Course required"
  },
  {
    "id": "C)PTC",
    "abbreviation": "C)PTC",
    "name": "Mile2 Certified Penetration Testing Consultant",
    "details": [
      "$550 exam"
    ],
    "url": "https://mile2.com/cptc_outline/",
    "category": "Security Operations (Red Team)",
    "level": "Intermediate",
    "raw_tooltip": "Mile2 Certified Penetration Testing Consultant\n    $550 exam"
  },
  {
    "id": "CRTOP",
    "abbreviation": "CRTOP",
    "name": "Infosec Institute Certified Red Team Operations Professional",
    "details": [
      "$4,599 exam",
      "Course required"
    ],
    "url": "https://app.infosecinstitute.com/portal/courses/a0t0y00000BK8IcAAL",
    "category": "Security Operations (Red Team)",
    "level": "Intermediate",
    "raw_tooltip": "Infosec Institute Certified Red Team Operations Professional\n    $4,599 exam\n    Course required"
  },
  {
    "id": "CSR",
    "abbreviation": "CSR",
    "name": "Cyber Struggle Ranger",
    "details": [
      "Location Based Cost",
      "Course Req"
    ],
    "url": "https://cyberstruggle.org/ranger-certification/",
    "category": "Security Operations (Red Team)",
    "level": "Intermediate",
    "raw_tooltip": "Cyber Struggle Ranger\n    Location Based Cost\n    Course Req"
  },
  {
    "id": "F5 CTS DNS",
    "abbreviation": "F5 CTS DNS",
    "name": "F5 Big-IP Certified Technical Specialist - Domain Name Services",
    "details": [
      "$135 exam"
    ],
    "url": "https://view.ceros.com/f5/certification-roadmap/p/9?heightOverride=740",
    "category": "Network Security",
    "level": "Intermediate",
    "raw_tooltip": "F5 Big-IP Certified Technical Specialist - Domain Name Services\n    $135 exam"
  },
  {
    "id": "PCDRA",
    "abbreviation": "PCDRA",
    "name": "Palo Alto Networks Certified Detection and Remediation Analyst",
    "details": [
      "$155 exam"
    ],
    "url": "https://www.paloaltonetworks.com/services/education/certification",
    "category": "Network Security",
    "level": "Intermediate",
    "raw_tooltip": "Palo Alto Networks Certified Detection and Remediation Analyst\n    $155 exam"
  },
  {
    "id": "SF CIAMD",
    "abbreviation": "SF CIAMD",
    "name": "SalesForce Certified Identity and Access Management Designer",
    "details": [
      "$400 exam"
    ],
    "url": "https://trailhead.salesforce.com/help?article=Salesforce-Certified-Identity-and-Access-Management-Designer-Exam-Guide",
    "category": "Identity and Access Management",
    "level": "Intermediate",
    "raw_tooltip": "SalesForce Certified Identity and Access Management Designer\n    $400 exam"
  },
  {
    "id": "GCLD",
    "abbreviation": "GCLD",
    "name": "GIAC Cloud Security Essentials",
    "details": [
      "$979 exam SANS course recommended"
    ],
    "url": "https://www.giac.org/certifications/cloud-security-essentials-gcld/",
    "category": "Security Architecture and Engineering",
    "level": "Intermediate",
    "raw_tooltip": "GIAC Cloud Security Essentials\n    $979 exam SANS course recommended"
  },
  {
    "id": "AWS SAA",
    "abbreviation": "AWS SAA",
    "name": "Amazon Web Services Certified Solutions Architect - Associate",
    "details": [
      "$150 exam"
    ],
    "url": "https://aws.amazon.com/certification/certified-solutions-architect-associate/",
    "category": "Security Architecture and Engineering",
    "level": "Intermediate",
    "raw_tooltip": "Amazon Web Services Certified Solutions Architect - Associate\n    $150 exam"
  },
  {
    "id": "EXIN PCSerM",
    "abbreviation": "EXIN PCSerM",
    "name": "EXIN Professional Cloud Service Manager",
    "details": [
      "$315 exam"
    ],
    "url": "https://www.exin.com/certifications/ccc-professional-cloud-service-manager-exam",
    "category": "Security Architecture and Engineering",
    "level": "Intermediate",
    "raw_tooltip": "EXIN Professional Cloud Service Manager\n    $315 exam"
  },
  {
    "id": "ISA CRAS",
    "abbreviation": "ISA CRAS",
    "name": "ISA Certified Risk Assesment Specialist",
    "details": [
      "$2,700 course + exam",
      "Course required"
    ],
    "url": "https://www.isa.org/training-and-certifications/isa-certification/isa99iec-62443/isa99iec-62443-cybersecurity-certificate-programs/",
    "category": "Security Architecture and Engineering",
    "level": "Intermediate",
    "raw_tooltip": "ISA Certified Risk Assesment Specialist\n    $2,700 course + exam\n    Course required"
  },
  {
    "id": "SPLK-3001",
    "abbreviation": "SPLK-3001",
    "name": "Splunk Enterprise Security Certified Administrator",
    "details": [
      "$130 exam",
      "Branded course recommended"
    ],
    "url": "https://www.splunk.com/en_us/training/certification-track/splunk-es-certified-admin.html",
    "category": "Security Architecture and Engineering",
    "level": "Intermediate",
    "raw_tooltip": "Splunk Enterprise Security Certified Administrator\n    $130 exam\n    Branded course recommended"
  },
  {
    "id": "BCS PCIAA",
    "abbreviation": "BCS PCIAA",
    "name": "BCS Practitioner Certificate in Information Assurance Architecture",
    "details": [
      "$290 exam"
    ],
    "url": "https://www.bcs.org/get-qualified/certifications-for-professionals/information-security-and-ccp-scheme-certifications/bcs-practitioner-certificate-in-information-assurance-architecture/",
    "category": "Security and Risk Management",
    "level": "Intermediate",
    "raw_tooltip": "BCS Practitioner Certificate in Information Assurance Architecture\n    $290 exam"
  },
  {
    "id": "CCSA",
    "abbreviation": "CCSA",
    "name": "EC First Certified Cyber Security Architect",
    "details": [
      "$695 exam"
    ],
    "url": "https://ecfirst.biz/index.php?route=product/product&path=59_61&product_id=77",
    "category": "Security and Risk Management",
    "level": "Intermediate",
    "raw_tooltip": "EC First Certified Cyber Security Architect\n    $695 exam"
  },
  {
    "id": "PPM",
    "abbreviation": "PPM",
    "name": "GAQM Professional in Project Management",
    "details": [
      "$210 exam"
    ],
    "url": "https://gaqm.org/certifications/project_management/ppm",
    "category": "Security and Risk Management",
    "level": "Intermediate",
    "raw_tooltip": "GAQM Professional in Project Management\n    $210 exam"
  },
  {
    "id": "C)ISSM",
    "abbreviation": "C)ISSM",
    "name": "Mile2 Certified Information Systems Security Manager",
    "details": [
      "$550 exam"
    ],
    "url": "https://mile2.com/cissm_outline/",
    "category": "Security and Risk Management",
    "level": "Intermediate",
    "raw_tooltip": "Mile2 Certified Information Systems Security Manager\n    $550 exam"
  },
  {
    "id": "TUV ITSM",
    "abbreviation": "TUV ITSM",
    "name": "TUV IT Security Manager (GERMAN)",
    "details": [
      "$415 exam",
      "Course required"
    ],
    "url": "https://www.certipedia.com/quality_marks/0000063483?locale=en",
    "category": "Security and Risk Management",
    "level": "Intermediate",
    "raw_tooltip": "TUV IT Security Manager (GERMAN)\n    $415 exam\n    Course required"
  },
  {
    "id": "CCRMP",
    "abbreviation": "CCRMP",
    "name": "IBITGQ Certified in Managing Cyber Security Risk",
    "details": [
      "$2,629 course exam",
      "Branded course required"
    ],
    "url": "https://www.itgovernance.co.uk/shop/product/managing-cyber-security-risk-training-course",
    "category": "Security and Risk Management",
    "level": "Intermediate",
    "raw_tooltip": "IBITGQ Certified in Managing Cyber Security Risk\n    $2,629 course exam\n    Branded course required"
  },
  {
    "id": "PECB 27005RM",
    "abbreviation": "PECB 27005RM",
    "name": "PECB ISO/IEC 27005 Risk Manager",
    "details": [
      "~$995 exam",
      "Course required"
    ],
    "url": "https://pecb.com/en/education-and-certification-for-individuals/iso-iec-27005/iso-iec-27005-risk-manager",
    "category": "Security and Risk Management",
    "level": "Intermediate",
    "raw_tooltip": "PECB ISO/IEC 27005 Risk Manager\n    ~$995 exam\n    Course required"
  },
  {
    "id": "CSBA",
    "abbreviation": "CSBA",
    "name": "QAI Certified Software Business Analyst",
    "details": [
      "$350 exam + written essay"
    ],
    "url": "https://www.softwarecertifications.org/csba/",
    "category": "Security and Risk Management",
    "level": "Intermediate",
    "raw_tooltip": "QAI Certified Software Business Analyst\n    $350 exam + written essay"
  },
  {
    "id": "DevNet A",
    "abbreviation": "DevNet A",
    "name": "Cisco DevNet Associate",
    "details": [
      "$300 Exam"
    ],
    "url": "https://www.cisco.com/site/us/en/learn/training-certifications/certifications/devnet/associate/index.html",
    "category": "Software Development Security",
    "level": "Intermediate",
    "raw_tooltip": "Cisco DevNet Associate\n    $300 Exam"
  },
  {
    "id": "CySA+",
    "abbreviation": "CySA+",
    "name": "CompTIA Cybersecurity Analyst+",
    "details": [
      "$404 exam"
    ],
    "url": "https://www.comptia.org/certifications/cybersecurity-analyst",
    "category": "Security Operations (Blue Team)",
    "level": "Intermediate",
    "raw_tooltip": "CompTIA Cybersecurity Analyst+\n    $404 exam"
  },
  {
    "id": "CSX-P",
    "abbreviation": "CSX-P",
    "name": "ISACA Cybersecurity Practitioner",
    "details": [
      "$549 lab"
    ],
    "url": "https://cybersecurity.isaca.org/csx-certifications/csx-practitioner-certification",
    "category": "Security Operations (Blue Team)",
    "level": "Intermediate",
    "raw_tooltip": "ISACA Cybersecurity Practitioner\n    $549 lab"
  },
  {
    "id": "C)NFE",
    "abbreviation": "C)NFE",
    "name": "Mile2 Certified Network Forensics Examiner",
    "details": [
      "$550 exam",
      "Groups only"
    ],
    "url": "https://www.mile2.com/network-forensics-examiner-outline/",
    "category": "Security Operations (Blue Team)",
    "level": "Intermediate",
    "raw_tooltip": "Mile2 Certified Network Forensics Examiner\n    $550 exam\n    Groups only"
  },
  {
    "id": "GOSI",
    "abbreviation": "GOSI",
    "name": "GIAC Open Source Intelligence",
    "details": [
      "$979 exam",
      "SANS course recommended"
    ],
    "url": "https://www.giac.org/certification/open-source-intelligence-gosi",
    "category": "Security Operations (Blue Team)",
    "level": "Intermediate",
    "raw_tooltip": "GIAC Open Source Intelligence\n    $979 exam\n    SANS course recommended"
  },
  {
    "id": "C)TIA",
    "abbreviation": "C)TIA",
    "name": "Mile2 Certified Threat Intelligence Analyst",
    "details": [
      "$550 exam"
    ],
    "url": "https://www.mile2.com/threat-analyst/",
    "category": "Security Operations (Blue Team)",
    "level": "Intermediate",
    "raw_tooltip": "Mile2 Certified Threat Intelligence Analyst\n    $550 exam"
  },
  {
    "id": "OSDA",
    "abbreviation": "OSDA",
    "name": "Offensive Security Defense Analyst",
    "details": [
      "$2,499 exam",
      "Learning subscription required"
    ],
    "url": "https://www.offensive-security.com/soc200-osda/",
    "category": "Security Operations (Blue Team)",
    "level": "Intermediate",
    "raw_tooltip": "Offensive Security Defense Analyst\n    $2,499 exam\n    Learning subscription required"
  },
  {
    "id": "eMAPT",
    "abbreviation": "eMAPT",
    "name": "eLearnSecurity Mobile Application Penetration Tester",
    "details": [
      "$400"
    ],
    "url": "https://security.ine.com/certifications/emapt-certification/",
    "category": "Security Operations (Red Team)",
    "level": "Intermediate",
    "raw_tooltip": "eLearnSecurity Mobile Application Penetration Tester\n    $400"
  },
  {
    "id": "BSCP",
    "abbreviation": "BSCP",
    "name": "Portswigger Burp Suite Certified Practioner",
    "details": [
      "$99 exam"
    ],
    "url": "https://portswigger.net/web-security/certification",
    "category": "Security Operations (Red Team)",
    "level": "Intermediate",
    "raw_tooltip": "Portswigger Burp Suite Certified Practioner\n    $99 exam"
  },
  {
    "id": "OPST",
    "abbreviation": "OPST",
    "name": "ISECOM OSSTMM Professional Security Tester",
    "details": [
      "Unknown"
    ],
    "url": "https://www.isecom.org/certification.html",
    "category": "Security Operations (Red Team)",
    "level": "Intermediate",
    "raw_tooltip": "ISECOM OSSTMM Professional Security Tester\n    Unknown"
  },
  {
    "id": "OSWA",
    "abbreviation": "OSWA",
    "name": "Offensive Security Web Assessor",
    "details": [
      "$2,499 Exam",
      "Learning subscription required"
    ],
    "url": "https://www.offensive-security.com/web200-oswa/",
    "category": "Security Operations (Red Team)",
    "level": "Intermediate",
    "raw_tooltip": "Offensive Security Web Assessor\n    $2,499 Exam\n    Learning subscription required"
  },
  {
    "id": "CREA",
    "abbreviation": "CREA",
    "name": "Infosec Institute Certified Reverse Engineering Analyst",
    "details": [
      "$4,599 exam",
      "Course required"
    ],
    "url": "https://app.infosecinstitute.com/portal/courses/a0tC0000000Fp4IIAS",
    "category": "Security Operations (Red Team)",
    "level": "Intermediate",
    "raw_tooltip": "Infosec Institute Certified Reverse Engineering Analyst\n    $4,599 exam\n    Course required"
  },
  {
    "id": "CWSP",
    "abbreviation": "CWSP",
    "name": "CWNP Certified Wireless Security Professional",
    "details": [
      "$325 exam"
    ],
    "url": "https://www.cwnp.com/certifications/cwsp",
    "category": "Network Security",
    "level": "Intermediate",
    "raw_tooltip": "CWNP Certified Wireless Security Professional\n    $325 exam"
  },
  {
    "id": "CREST CCNIA",
    "abbreviation": "CREST CCNIA",
    "name": "CREST Certified Network Intrusion Analyst",
    "details": [
      "$2,481 exam & essay",
      "Hands on exam in UK"
    ],
    "url": "https://www.crest-approved.org/certification-careers/crest-certifications/crest-certified-network-intrusion-analyst",
    "category": "Network Security",
    "level": "Intermediate",
    "raw_tooltip": "CREST Certified Network Intrusion Analyst\n    $2,481 exam & essay\n    Hands on exam in UK"
  },
  {
    "id": "CIGE",
    "abbreviation": "CIGE",
    "name": "IMI Certified Identity Governance Expert",
    "details": [
      "$395 exam"
    ],
    "url": "https://www.identitymanagementinstitute.org/cige/",
    "category": "Identity and Access Management",
    "level": "Intermediate",
    "raw_tooltip": "IMI Certified Identity Governance Expert\n    $395 exam"
  },
  {
    "id": "AZ-104",
    "abbreviation": "AZ-104",
    "name": "Microsoft Azure Administrator Associate",
    "details": [
      "$165 exam"
    ],
    "url": "https://docs.microsoft.com/en-us/learn/certifications/azure-administrator?wt.mc_id=learningredirect_certs-web-wwl",
    "category": "Security Architecture and Engineering",
    "level": "Intermediate",
    "raw_tooltip": "Microsoft Azure Administrator Associate\n    $165 exam"
  },
  {
    "id": "CLCSM",
    "abbreviation": "CLCSM",
    "name": "PECB Lead Cloud Security Manager",
    "details": [
      "~$930 exam",
      "Course required"
    ],
    "url": "https://pecb.com/en/education-and-certification-for-individuals/cloud-security/lead-cloud-security-manager",
    "category": "Security Architecture and Engineering",
    "level": "Intermediate",
    "raw_tooltip": "PECB Lead Cloud Security Manager\n    ~$930 exam\n    Course required"
  },
  {
    "id": "CCSE",
    "abbreviation": "CCSE",
    "name": "EC Council Certified Cloud Security Engineer",
    "details": [
      "$100 exam",
      "EC Council Course Recommended"
    ],
    "url": "https://cert.eccouncil.org/certified-cloud-security-engineer.html",
    "category": "Security Architecture and Engineering",
    "level": "Intermediate",
    "raw_tooltip": "EC Council Certified Cloud Security Engineer\n    $100 exam\n    EC Council Course Recommended"
  },
  {
    "id": "MCSE",
    "abbreviation": "MCSE",
    "name": "Mosse Institute Cloud Security Engineer",
    "details": [
      "$600 exam"
    ],
    "url": "https://www.mosse-institute.com/certifications/mcse-certified-cloud-security-engineer.html",
    "category": "Security Architecture and Engineering",
    "level": "Intermediate",
    "raw_tooltip": "Mosse Institute Cloud Security Engineer\n                    $600 exam"
  },
  {
    "id": "SFSA",
    "abbreviation": "SFSA",
    "name": "SalesForce System Architect",
    "details": [
      "$400 hands-on lab"
    ],
    "url": "https://trailhead.salesforce.com/credentials/systemarchitect",
    "category": "Security Architecture and Engineering",
    "level": "Intermediate",
    "raw_tooltip": "SalesForce System Architect\n    $400 hands-on lab"
  },
  {
    "id": "ASIS APP",
    "abbreviation": "ASIS APP",
    "name": "ASIS Associate Protection Professional",
    "details": [
      "$350 exam"
    ],
    "url": "https://www.asisonline.org/certification/associate-protection-professional-app/",
    "category": "Asset Security",
    "level": "Intermediate",
    "raw_tooltip": "ASIS Associate Protection Professional\n    $350 exam"
  },
  {
    "id": "CNDA",
    "abbreviation": "CNDA",
    "name": "EC Council Certified Network Defense Architect",
    "details": [
      "$200 application",
      "Requires CEH cert"
    ],
    "url": "https://www.eccouncil.org/programs/certified-network-defense-architect-cnda/",
    "category": "Security and Risk Management",
    "level": "Intermediate",
    "raw_tooltip": "EC Council Certified Network Defense Architect\n    $200 application\n    Requires CEH cert"
  },
  {
    "id": "DACRP",
    "abbreviation": "DACRP",
    "name": "DRI Associate Cyber Resilience Professional",
    "details": [
      "$200 exam",
      "Course req"
    ],
    "url": "https://drii.org/certification/acrp",
    "category": "Security and Risk Management",
    "level": "Intermediate",
    "raw_tooltip": "DRI Associate Cyber Resilience Professional\n    $200 exam\n    Course req"
  },
  {
    "id": "CISRM",
    "abbreviation": "CISRM",
    "name": "IBITGQ Certified ISO 27005 Information Security Management Specialist Risk Management",
    "details": [
      "$2,783 course exam",
      "Branded course required"
    ],
    "url": "https://www.itgovernance.co.uk/shop/product/iso-27005-certified-isms-risk-management",
    "category": "Security and Risk Management",
    "level": "Intermediate",
    "raw_tooltip": "IBITGQ Certified ISO 27005 Information Security Management Specialist Risk Management\n    $2,783 course exam\n    Branded course required"
  },
  {
    "id": "DCRMP",
    "abbreviation": "DCRMP",
    "name": "DRI Certified Risk Management Professional",
    "details": [
      "$400 exam",
      "Application essay"
    ],
    "url": "https://drii.org/certification/crmp",
    "category": "Security and Risk Management",
    "level": "Intermediate",
    "raw_tooltip": "DRI Certified Risk Management Professional\n    $400 exam\n    Application essay"
  },
  {
    "id": "SSAP",
    "abbreviation": "SSAP",
    "name": "SANS Security Awareness Professional",
    "details": [
      "$1219 Exam",
      "SANS MGT433 course recommended"
    ],
    "url": "https://www.sans.org/security-awareness-training/career-development/credential/",
    "category": "Security and Risk Management",
    "level": "Intermediate",
    "raw_tooltip": "SANS Security Awareness Professional\n    $1219 Exam\n    SANS MGT433 course recommended"
  },
  {
    "id": "GRCP",
    "abbreviation": "GRCP",
    "name": "OCEG Governance, Risk, and Compliance Professional",
    "details": [
      "$399 12 month license"
    ],
    "url": "https://www.oceg.org/certifications/grc-professional-certification/",
    "category": "Security and Risk Management",
    "level": "Intermediate",
    "raw_tooltip": "OCEG Governance, Risk, and Compliance Professional\n    $399 12 month license"
  },
  {
    "id": "SACP",
    "abbreviation": "SACP",
    "name": "The H Layer Security Awareness and Culture Professional",
    "details": [
      "$369 Exam"
    ],
    "url": "https://www.thehlayer.com/about-exam/",
    "category": "Security and Risk Management",
    "level": "Intermediate",
    "raw_tooltip": "The H Layer Security Awareness and Culture Professional\n    $369 Exam"
  },
  {
    "id": "CISP",
    "abbreviation": "CISP",
    "name": "GAQM Certified Information Security Professional",
    "details": [
      "$170 exam"
    ],
    "url": "https://gaqm.org/certifications/information_systems_security/cisp",
    "category": "Security and Risk Management",
    "level": "Intermediate",
    "raw_tooltip": "GAQM Certified Information Security Professional\n    $170 exam"
  },
  {
    "id": "CCSC",
    "abbreviation": "CCSC",
    "name": "CertNexus Cyber Secure Coder",
    "details": [
      "$300 exam"
    ],
    "url": "https://certnexus.com/certification/cyber-secure-coder/",
    "category": "Software Development Security",
    "level": "Intermediate",
    "raw_tooltip": "CertNexus Cyber Secure Coder\n    $300 exam"
  },
  {
    "id": "SC-200",
    "abbreviation": "SC-200",
    "name": "Microsoft Certified: Security Operations Analyst Associate",
    "details": [
      "~$165 exam"
    ],
    "url": "https://docs.microsoft.com/en-us/learn/certifications/security-operations-analyst/",
    "category": "Security Operations (Blue Team)",
    "level": "Intermediate",
    "raw_tooltip": "Microsoft Certified: Security Operations Analyst Associate\n    ~$165 exam"
  },
  {
    "id": "MRCI",
    "abbreviation": "MRCI",
    "name": "Mosse Institute Remote Cybersecurity Internship Programme",
    "details": [
      "$49 certification programme",
      "100% practical. No expiry."
    ],
    "url": "https://www.mosse-institute.com/certifications/mrci-remote-cybersecurity-internship.html",
    "category": "Security Operations (Blue Team)",
    "level": "Intermediate",
    "raw_tooltip": "Mosse Institute Remote Cybersecurity Internship Programme\n  $49 certification programme\n  100% practical. No expiry."
  },
  {
    "id": "EDRP",
    "abbreviation": "EDRP",
    "name": "EC Council Disaster Recovery Professional",
    "details": [
      "$450 exam"
    ],
    "url": "https://www.eccouncil.org/programs/disaster-recovery-professional-edrp/",
    "category": "Security Operations (Blue Team)",
    "level": "Intermediate",
    "raw_tooltip": "EC Council Disaster Recovery Professional\n    $450 exam"
  },
  {
    "id": "HTB CDSA",
    "abbreviation": "HTB CDSA",
    "name": "Hack the Box Certified Defensive Security Analyst",
    "details": [
      "$145 modules + $210 exam",
      "$490 Subscription available"
    ],
    "url": "https://academy.hackthebox.com/preview/certifications/htb-certified-defensive-security-analyst",
    "category": "Security Operations (Blue Team)",
    "level": "Intermediate",
    "raw_tooltip": "Hack the Box Certified Defensive Security Analyst\n                    $145 modules + $210 exam\n                    $490 Subscription available"
  },
  {
    "id": "CFR",
    "abbreviation": "CFR",
    "name": "CertNexus CyberSec First Responder",
    "details": [
      "$250 exam"
    ],
    "url": "https://certnexus.com/certification/cybersec-first-responder/",
    "category": "Security Operations (Blue Team)",
    "level": "Intermediate",
    "raw_tooltip": "CertNexus CyberSec First Responder\n    $250 exam"
  },
  {
    "id": "CTIA",
    "abbreviation": "CTIA",
    "name": "EC Council Certified Threat intelligence Analyst",
    "details": [
      "$450 exam"
    ],
    "url": "https://www.eccouncil.org/programs/certified-threat-intelligence-analyst-ctia/",
    "category": "Security Operations (Blue Team)",
    "level": "Intermediate",
    "raw_tooltip": "EC Council Certified Threat intelligence Analyst\n    $450 exam"
  },
  {
    "id": "CSTM",
    "abbreviation": "CSTM",
    "name": "Cyber Scheme Team Member",
    "details": [
      "$610 exam"
    ],
    "url": "https://thecyberscheme.org/cyber-scheme-team-member-cstm-exam/",
    "category": "Security Operations (Red Team)",
    "level": "Intermediate",
    "raw_tooltip": "Cyber Scheme Team Member\n    $610 exam"
  },
  {
    "id": "eJPT",
    "abbreviation": "eJPT",
    "name": "eLearnSecurity Junior Penetration Tester",
    "details": [
      "$249 lab"
    ],
    "url": "https://ine.com/learning/certifications/internal/elearnsecurity-junior-penetration-tester-v2",
    "category": "Security Operations (Red Team)",
    "level": "Intermediate",
    "raw_tooltip": "eLearnSecurity Junior Penetration Tester\n    $249 lab"
  },
  {
    "id": "S-EHP",
    "abbreviation": "S-EHP",
    "name": "SECO Ethical Hacking Practitioner",
    "details": [
      "$550 exam"
    ],
    "url": "hhttps://www.seco-institute.org/certifications/ethical-hacking-track/practitioner/",
    "category": "Security Operations (Red Team)",
    "level": "Intermediate",
    "raw_tooltip": "SECO Ethical Hacking Practitioner\n    $550 exam"
  },
  {
    "id": "CHAT",
    "abbreviation": "CHAT",
    "name": "ISECOM Certified Hacker Analyst Trainer",
    "details": [
      "$100 annual sub",
      "Unknown exam price"
    ],
    "url": "https://www.isecom.org/certification.html",
    "category": "Security Operations (Red Team)",
    "level": "Intermediate",
    "raw_tooltip": "ISECOM Certified Hacker Analyst Trainer\n    $100 annual sub\n    Unknown exam price"
  },
  {
    "id": "CREST CPSA",
    "abbreviation": "CREST CPSA",
    "name": "CREST Practitioner Security Analyst",
    "details": [
      "$425 exam"
    ],
    "url": "https://www.crest-approved.org/certification-careers/crest-certifications/crest-practitioner-security-analyst",
    "category": "Security Operations (Red Team)",
    "level": "Intermediate",
    "raw_tooltip": "CREST Practitioner Security Analyst\n    $425 exam"
  },
  {
    "id": "F5 CA",
    "abbreviation": "F5 CA",
    "name": "F5 Big-IP Certified Administrator",
    "details": [
      "$135 exam"
    ],
    "url": "https://view.ceros.com/f5/certification-roadmap/p/9?heightOverride=740",
    "category": "Network Security",
    "level": "Intermediate",
    "raw_tooltip": "F5 Big-IP Certified Administrator\n    $135 exam"
  },
  {
    "id": "eNDP",
    "abbreviation": "eNDP",
    "name": "eLearnSecurity Network Defense Professional",
    "details": [
      "$400 exam"
    ],
    "url": "https://www.elearnsecurity.com/certification/endp/",
    "category": "Network Security",
    "level": "Intermediate",
    "raw_tooltip": "eLearnSecurity Network Defense Professional\n    $400 exam"
  },
  {
    "id": "CIST",
    "abbreviation": "CIST",
    "name": "IMI Certfied Identity and Security Technologist",
    "details": [
      "$295 exam"
    ],
    "url": "https://www.identitymanagementinstitute.org/cist/",
    "category": "Identity and Access Management",
    "level": "Intermediate",
    "raw_tooltip": "IMI Certfied Identity and Security Technologist\n    $295 exam"
  },
  {
    "id": "Google PCSE",
    "abbreviation": "Google PCSE",
    "name": "Google Professional Cloud Security Engineer",
    "details": [
      "$200 exam"
    ],
    "url": "https://cloud.google.com/certification/cloud-security-engineer",
    "category": "Security Architecture and Engineering",
    "level": "Intermediate",
    "raw_tooltip": "Google Professional Cloud Security Engineer\n    $200 exam"
  },
  {
    "id": "EXIN PCSM",
    "abbreviation": "EXIN PCSM",
    "name": "EXIN Professional Cloud Security Manager",
    "details": [
      "$315 exam"
    ],
    "url": "https://www.exin.com/certifications/ccc-professional-cloud-security-manager-exam",
    "category": "Security Architecture and Engineering",
    "level": "Intermediate",
    "raw_tooltip": "EXIN Professional Cloud Security Manager\n    $315 exam"
  },
  {
    "id": "MDSO",
    "abbreviation": "MDSO",
    "name": "Mosse Institute Certified DevSecOps Engineer",
    "details": [
      "$450 exam"
    ],
    "url": "https://www.mosse-institute.com/certifications/mdso-certified-devsecops-engineer.html",
    "category": "Security Architecture and Engineering",
    "level": "Intermediate",
    "raw_tooltip": "Mosse Institute Certified DevSecOps Engineer\n    $450 exam"
  },
  {
    "id": "SCA",
    "abbreviation": "SCA",
    "name": "SUSE Certified Administrator",
    "details": [
      "$149 exam"
    ],
    "url": " https://www.suse.com/training/exam/sca-sles-15/",
    "category": "Security Architecture and Engineering",
    "level": "Intermediate",
    "raw_tooltip": "SUSE Certified Administrator\n    $149 exam"
  },
  {
    "id": "ISA CAP",
    "abbreviation": "ISA CAP",
    "name": "ISA Certified Automation Specialist",
    "details": [
      "$467 exam"
    ],
    "url": "https://www.isa.org/training-and-certifications/isa-certification/isa99iec-62443/isa99iec-62443-cybersecurity-certificate-programs/",
    "category": "Security Architecture and Engineering",
    "level": "Intermediate",
    "raw_tooltip": "ISA Certified Automation Specialist\n    $467 exam"
  },
  {
    "id": "TUV COSM",
    "abbreviation": "TUV COSM",
    "name": "TUV Certified OT Security Manager",
    "details": [
      "$3,070 Course"
    ],
    "url": "https://limessecurity.com/en/academy/ics-211/",
    "category": "Security Architecture and Engineering",
    "level": "Intermediate",
    "raw_tooltip": "TUV Certified OT Security Manager\n    $3,070 Course"
  },
  {
    "id": "Zach EAA",
    "abbreviation": "Zach EAA",
    "name": "Zachman Enterprise Architect Associate (Level 1)",
    "details": [
      "$2,999 course exam",
      "Branded course required"
    ],
    "url": "https://www.zachman.com/certification/what-we-certify/enterprise-architect",
    "category": "Security and Risk Management",
    "level": "Intermediate",
    "raw_tooltip": "Zachman Enterprise Architect Associate (Level 1)\n    $2,999 course exam\n    Branded course required"
  },
  {
    "id": "CAD",
    "abbreviation": "CAD",
    "name": "GAQM Certified Agile Developer",
    "details": [
      "$128 exam"
    ],
    "url": "https://gaqm.org/certifications/scrum_agile/cad",
    "category": "Security and Risk Management",
    "level": "Intermediate",
    "raw_tooltip": "GAQM Certified Agile Developer\n    $128 exam"
  },
  {
    "id": "CAC",
    "abbreviation": "CAC",
    "name": "GAQM Certified Agile Coach",
    "details": [
      "$170"
    ],
    "url": "https://gaqm.org/certifications/scrum_agile/cac",
    "category": "Security and Risk Management",
    "level": "Intermediate",
    "raw_tooltip": "GAQM Certified Agile Coach\n    $170"
  },
  {
    "id": "ISMI CSMP",
    "abbreviation": "ISMI CSMP",
    "name": "ISMI Certified Security Management Professional",
    "details": [
      "$1159"
    ],
    "url": "https://www.ismi.org.uk/csmp/csmp%C2%AE-overview.aspx",
    "category": "Security and Risk Management",
    "level": "Intermediate",
    "raw_tooltip": "ISMI Certified Security Management Professional\n    $1159"
  },
  {
    "id": "CSCS",
    "abbreviation": "CSCS",
    "name": "EC First Certified Security Compliance Specialist",
    "details": [
      "$695 exam"
    ],
    "url": "https://ecfirst.biz/index.php?route=product/product&path=59_61&product_id=89",
    "category": "Security and Risk Management",
    "level": "Intermediate",
    "raw_tooltip": "EC First Certified Security Compliance Specialist\n    $695 exam"
  },
  {
    "id": "APMG 27001F",
    "abbreviation": "APMG 27001F",
    "name": "APMG ISO/IEC 27001 Foundation",
    "details": [
      "$400 exam",
      "Application essay"
    ],
    "url": "https://apmg-international.com/product/isoiec-27001",
    "category": "Security and Risk Management",
    "level": "Intermediate",
    "raw_tooltip": "APMG ISO/IEC 27001 Foundation\n    $400 exam\n    Application essay"
  },
  {
    "id": "PECB 27001F",
    "abbreviation": "PECB 27001F",
    "name": "PECB ISO/IEC 27001 Foundation",
    "details": [
      "$500-749 exam",
      "Course required"
    ],
    "url": "https://pecb.com/en/education-and-certification-for-individuals/iso-iec-27001/iso-iec-27001-foundation",
    "category": "Security and Risk Management",
    "level": "Intermediate",
    "raw_tooltip": "PECB ISO/IEC 27001 Foundation\n    $500-749 exam\n    Course required"
  },
  {
    "id": "C)SLO",
    "abbreviation": "C)SLO",
    "name": "Mile2 Certified Security Leadership Officer",
    "details": [
      "$550 exam"
    ],
    "url": "https://www.mile2.com/cslo_outline/",
    "category": "Security and Risk Management",
    "level": "Intermediate",
    "raw_tooltip": "Mile2 Certified Security Leadership Officer\n    $550 exam"
  },
  {
    "id": "C)SWAE",
    "abbreviation": "C)SWAE",
    "name": "Mile2 Secure Web Application Engineer",
    "details": [
      "$550 exam"
    ],
    "url": "https://www.mile2.com/cswae_outline/",
    "category": "Software Development Security",
    "level": "Intermediate",
    "raw_tooltip": "Mile2 Secure Web Application Engineer\n    $550 exam"
  },
  {
    "id": "OPSA",
    "abbreviation": "OPSA",
    "name": "ISECOM OSSTMM Professional Security Analyst",
    "details": [
      "$100 annual sub",
      "Unknown exam fee"
    ],
    "url": "https://www.isecom.org/certification.html",
    "category": "Security Operations (Blue Team)",
    "level": "Intermediate",
    "raw_tooltip": "ISECOM OSSTMM Professional Security Analyst\n    $100 annual sub\n    Unknown exam fee"
  },
  {
    "id": "CSAE",
    "abbreviation": "CSAE",
    "name": "Cyber Struggle AEGIS",
    "details": [
      "$1,700 course exam",
      "Branded course required"
    ],
    "url": "https://cyberstruggle.org/aegis-certification/",
    "category": "Security Operations (Blue Team)",
    "level": "Intermediate",
    "raw_tooltip": "Cyber Struggle AEGIS\n    $1,700 course exam\n    Branded course required"
  },
  {
    "id": "ASIS PCI",
    "abbreviation": "ASIS PCI",
    "name": "ASIS Professional Certified Investigator",
    "details": [
      "$485 exam"
    ],
    "url": "https://www.asisonline.org/certification/professional-certified-investigator-pci",
    "category": "Security Operations (Blue Team)",
    "level": "Intermediate",
    "raw_tooltip": "ASIS Professional Certified Investigator\n    $485 exam"
  },
  {
    "id": "MAD SOCA",
    "abbreviation": "MAD SOCA",
    "name": "Mitre Att&ck Defender Security Operations Center Assessment",
    "details": [
      "$299 annual subscription"
    ],
    "url": "https://mitre-engenuity.org/mad/",
    "category": "Security Operations (Blue Team)",
    "level": "Intermediate",
    "raw_tooltip": "Mitre Att&ck Defender Security Operations Center Assessment\n                    $299 annual subscription"
  },
  {
    "id": "MAD CTI",
    "abbreviation": "MAD CTI",
    "name": "Mitre Att&ck Defender Cyber Threat intelligence",
    "details": [
      "$299 annual subscription"
    ],
    "url": "https://mitre-engenuity.org/mad/",
    "category": "Security Operations (Blue Team)",
    "level": "Intermediate",
    "raw_tooltip": "Mitre Att&ck Defender Cyber Threat intelligence\n                    $299 annual subscription"
  },
  {
    "id": "CEH",
    "abbreviation": "CEH",
    "name": "EC Council Certified Ethical Hacker",
    "details": [
      "$1,199 exam"
    ],
    "url": "https://www.eccouncil.org/programs/certified-ethical-hacker-ceh/",
    "category": "Security Operations (Red Team)",
    "level": "Intermediate",
    "raw_tooltip": "EC Council Certified Ethical Hacker\n    $1,199 exam"
  },
  {
    "id": "SOG CAPen",
    "abbreviation": "SOG CAPen",
    "name": "The SecOps Group Certified AppSec Pentester",
    "details": [
      "$500 exam"
    ],
    "url": "https://secops.group/product/certified-appsec-pentester/",
    "category": "Security Operations (Red Team)",
    "level": "Intermediate",
    "raw_tooltip": "The SecOps Group Certified AppSec Pentester\n    $500 exam"
  },
  {
    "id": "C)PTE",
    "abbreviation": "C)PTE",
    "name": "Mile2 Certified Penetration Testing Engineer",
    "details": [
      "$550 exam"
    ],
    "url": "https://www.mile2.com/penetration-testing-engineer-outline/",
    "category": "Security Operations (Red Team)",
    "level": "Intermediate",
    "raw_tooltip": "Mile2 Certified Penetration Testing Engineer\n    $550 exam"
  },
  {
    "id": "SOG CNPen",
    "abbreviation": "SOG CNPen",
    "name": "The SecOps Group Certified Network Pentester",
    "details": [
      "$500 exam"
    ],
    "url": "https://secops.group/product/certified-network-pentester/",
    "category": "Security Operations (Red Team)",
    "level": "Intermediate",
    "raw_tooltip": "The SecOps Group Certified Network Pentester\n    $500 exam"
  },
  {
    "id": "DV RTOS",
    "abbreviation": "DV RTOS",
    "name": "Dark Vortex Red Team & Operational Security",
    "details": [
      "$2500 exam",
      "Course required"
    ],
    "url": "https://0xdarkvortex.dev/training-programs/red-team-and-operational-security/",
    "category": "Security Operations (Red Team)",
    "level": "Intermediate",
    "raw_tooltip": "Dark Vortex Red Team & Operational Security\n    $2500 exam\n    Course required"
  },
  {
    "id": "DV OTD",
    "abbreviation": "DV OTD",
    "name": "Dark Vortex Offensive Tool Development",
    "details": [
      "$2000 exam",
      "Course required"
    ],
    "url": "https://0xdarkvortex.dev/training-programs/offensive-tool-development/",
    "category": "Security Operations (Red Team)",
    "level": "Intermediate",
    "raw_tooltip": "Dark Vortex Offensive Tool Development\n    $2000 exam\n    Course required"
  },
  {
    "id": "MVRE",
    "abbreviation": "MVRE",
    "name": "Mosse Institute Vulnerability Researcher and Exploitation Specialist",
    "details": [
      "$450 Exam"
    ],
    "url": "https://www.mosse-institute.com/certifications/mvre-vulnerability-researcher-and-exploitation-specialist.html",
    "category": "Security Operations (Red Team)",
    "level": "Intermediate",
    "raw_tooltip": "Mosse Institute Vulnerability Researcher and Exploitation Specialist\n                    $450 Exam"
  },
  {
    "id": "MNSE",
    "abbreviation": "MNSE",
    "name": "Mosse Institute Network Security Essentials",
    "details": [
      "$450 certification programme",
      "100% practical. No expiry."
    ],
    "url": "https://www.mosse-institute.com/certifications/mnse-network-security-essentials.html",
    "category": "Network Security",
    "level": "Intermediate",
    "raw_tooltip": "Mosse Institute Network Security Essentials\n  $450 certification programme\n  100% practical. No expiry."
  },
  {
    "id": "PCNSA",
    "abbreviation": "PCNSA",
    "name": "Palo Alto Networks Certified Network Security Administrator",
    "details": [
      "$155 exam"
    ],
    "url": "https://www.paloaltonetworks.com/services/education/certification",
    "category": "Network Security",
    "level": "Intermediate",
    "raw_tooltip": "Palo Alto Networks Certified Network Security Administrator\n  $155 exam"
  },
  {
    "id": "OWSE",
    "abbreviation": "OWSE",
    "name": "ISECOM OSSTMM Wireless Security Expert",
    "details": [
      "$100 annual sub",
      "Unknown exam cost"
    ],
    "url": "https://www.isecom.org/certification.html",
    "category": "Network Security",
    "level": "Intermediate",
    "raw_tooltip": "ISECOM OSSTMM Wireless Security Expert\n    $100 annual sub\n    Unknown exam cost"
  },
  {
    "id": "SC-300",
    "abbreviation": "SC-300",
    "name": "Microsoft Certfied: Identity and Access Administrator Associate",
    "details": [
      "$165 exam"
    ],
    "url": "https://docs.microsoft.com/en-us/learn/certifications/identity-and-access-administrator/",
    "category": "Identity and Access Management",
    "level": "Intermediate",
    "raw_tooltip": "Microsoft Certfied: Identity and Access Administrator Associate\n    $165 exam"
  },
  {
    "id": "CSA CCSK",
    "abbreviation": "CSA CCSK",
    "name": "Cloud Security Alliance Certificate of Cloud Security Knowledge",
    "details": [
      "$395 exam"
    ],
    "url": "https://cloudsecurityalliance.org/education/ccsk/",
    "category": "Security Architecture and Engineering",
    "level": "Intermediate",
    "raw_tooltip": "Cloud Security Alliance Certificate of Cloud Security Knowledge\n    $395 exam"
  },
  {
    "id": "C)CSO",
    "abbreviation": "C)CSO",
    "name": "Mile2 Certified Cloud Security Officer",
    "details": [
      "$550 exam"
    ],
    "url": "https://mile2.com/ccso_outline/",
    "category": "Security Architecture and Engineering",
    "level": "Intermediate",
    "raw_tooltip": "Mile2 Certified Cloud Security Officer\n    $550 exam"
  },
  {
    "id": "DCA",
    "abbreviation": "DCA",
    "name": "Docker Certified Associate",
    "details": [
      "$195 exam"
    ],
    "url": "https://training.mirantis.com/dca-certification-exam/",
    "category": "Security Architecture and Engineering",
    "level": "Intermediate",
    "raw_tooltip": "Docker Certified Associate\n    $195 exam"
  },
  {
    "id": "LPIC-1",
    "abbreviation": "LPIC-1",
    "name": "Linux Professional Institute Certified: Linux Administrator",
    "details": [
      "$400 2 exams"
    ],
    "url": "https://www.lpi.org/our-certifications/lpic-1-overview",
    "category": "Security Architecture and Engineering",
    "level": "Intermediate",
    "raw_tooltip": "Linux Professional Institute Certified: Linux Administrator\n    $400 2 exams"
  },
  {
    "id": "GICSP",
    "abbreviation": "GICSP",
    "name": "GIAC Global Industrial Security Professional",
    "details": [
      "$979 exam",
      "SANS course encouraged"
    ],
    "url": "https://www.giac.org/certification/global-industrial-cyber-security-professional-gicsp",
    "category": "Security Architecture and Engineering",
    "level": "Intermediate",
    "raw_tooltip": "GIAC Global Industrial Security Professional\n    $979 exam\n    SANS course encouraged"
  },
  {
    "id": "GSEC",
    "abbreviation": "GSEC",
    "name": "GIAC Security Essentials Certification",
    "details": [
      "$979 exam",
      "SANS course recommended"
    ],
    "url": "https://www.giac.org/certification/security-essentials-gsec",
    "category": "Security and Risk Management",
    "level": "Intermediate",
    "raw_tooltip": "GIAC Security Essentials Certification\n    $979 exam\n    SANS course recommended"
  },
  {
    "id": "MOIS",
    "abbreviation": "MOIS",
    "name": "MOIS Certified OSINT Expert Certification",
    "details": [
      "$450 certification programme",
      "100% practical. No expiry."
    ],
    "url": "https://www.mosse-institute.com/certifications/mois-certified-osint-expert.html",
    "category": "Security Operations (Blue Team)",
    "level": "Intermediate",
    "raw_tooltip": "MOIS Certified OSINT Expert Certification\n  $450 certification programme\n  100% practical. No expiry."
  },
  {
    "id": "CFA",
    "abbreviation": "CFA",
    "name": "GAQM Certified Forensic Analyst",
    "details": [
      "$128 exam"
    ],
    "url": "https://gaqm.org/certifications/information_systems_security/cfa",
    "category": "Security Operations (Blue Team)",
    "level": "Intermediate",
    "raw_tooltip": "GAQM Certified Forensic Analyst\n    $128 exam"
  },
  {
    "id": "CSA",
    "abbreviation": "CSA",
    "name": "EC Council Certified SOC Analyst",
    "details": [
      "$550 exam"
    ],
    "url": "https://www.eccouncil.org/programs/certified-soc-analyst-csa/",
    "category": "Security Operations (Blue Team)",
    "level": "Intermediate",
    "raw_tooltip": "EC Council Certified SOC Analyst\n    $550 exam"
  },
  {
    "id": "GFACT",
    "abbreviation": "GFACT",
    "name": "GIAC Foundational Cybersecurity Technologies",
    "details": [
      "$979 exam",
      "SANS course recommended"
    ],
    "url": "https://www.giac.org/certifications/foundational-cybersecurity-technologies-gfact/",
    "category": "Security Operations (Blue Team)",
    "level": "Intermediate",
    "raw_tooltip": "GIAC Foundational Cybersecurity Technologies\n    $979 exam\n    SANS course recommended"
  },
  {
    "id": "SOG CMPen And",
    "abbreviation": "SOG CMPen And",
    "name": "The SecOps Group Certified Mobile Pentester - Android",
    "details": [
      "$400 exam"
    ],
    "url": "https://secops.group/product/certified-mobile-pentester-cmpen-android/",
    "category": "Security Operations (Red Team)",
    "level": "Intermediate",
    "raw_tooltip": "The SecOps Group Certified Mobile Pentester - Android\n    $400 exam"
  },
  {
    "id": "SOG CMPen iOS",
    "abbreviation": "SOG CMPen iOS",
    "name": "The SecOps Group Certified Mobile Pentester - iOS",
    "details": [
      "$400 exam"
    ],
    "url": "https://secops.group/product/certified-mobile-pentester-cmpen-ios/",
    "category": "Security Operations (Red Team)",
    "level": "Intermediate",
    "raw_tooltip": "The SecOps Group Certified Mobile Pentester - iOS\n    $400 exam"
  },
  {
    "id": "DV MoS",
    "abbreviation": "DV MoS",
    "name": "Dark Vortex Malware on Steroids",
    "details": [
      "$2000 exam",
      "Course required"
    ],
    "url": "https://0xdarkvortex.dev/training-programs/malware-on-steroids/#certification",
    "category": "Security Operations (Red Team)",
    "level": "Intermediate",
    "raw_tooltip": "Dark Vortex Malware on Steroids\n    $2000 exam\n    Course required"
  },
  {
    "id": "Pentest+",
    "abbreviation": "Pentest+",
    "name": "CompTIA Pentest+",
    "details": [
      "$404 exam"
    ],
    "url": "https://www.comptia.org/certifications/pentest",
    "category": "Security Operations (Red Team)",
    "level": "Intermediate",
    "raw_tooltip": "CompTIA Pentest+\n    $404 exam"
  },
  {
    "id": "CREST CSAS",
    "abbreviation": "CREST CSAS",
    "name": "CREST Certified Simulated Attack Specialist",
    "details": [
      "$2,520 2 exams & lab"
    ],
    "url": "https://www.crest-approved.org/certification-careers/crest-certifications/crest-certified-simulated-attack-specialist",
    "category": "Security Operations (Red Team)",
    "level": "Intermediate",
    "raw_tooltip": "CREST Certified Simulated Attack Specialist\n    $2,520 2 exams & lab"
  },
  {
    "id": "ECES",
    "abbreviation": "ECES",
    "name": "EC Council Certified Encryption Specialist",
    "details": [
      "$249 exam"
    ],
    "url": "https://www.eccouncil.org/programs/ec-council-certified-encryption-specialist-eces/",
    "category": "Security Operations (Red Team)",
    "level": "Intermediate",
    "raw_tooltip": "EC Council Certified Encryption Specialist\n    $249 exam"
  },
  {
    "id": "JNCIA Sec",
    "abbreviation": "JNCIA Sec",
    "name": "Juniper Networks Certified Internet Associate, Security",
    "details": [
      "$200 exam"
    ],
    "url": "https://www.juniper.net/us/en/training/certification/certification-tracks/junos-security-track/?tab=jnciasec",
    "category": "Network Security",
    "level": "Intermediate",
    "raw_tooltip": "Juniper Networks Certified Internet Associate, Security\n    $200 exam"
  },
  {
    "id": "FCA",
    "abbreviation": "FCA",
    "name": "Fortinet Certificed Associate",
    "details": [
      "Free course and exam required"
    ],
    "url": "https://training.fortinet.com/local/staticpage/view.php?page=fca_cybersecurity",
    "category": "Network Security",
    "level": "Intermediate",
    "raw_tooltip": "Fortinet Certificed Associate\n    Free course and exam required"
  },
  {
    "id": "WCNA",
    "abbreviation": "WCNA",
    "name": "Protocol Analysis Institute Wireshark Certified Network Analyst",
    "details": [
      "$299 exam"
    ],
    "url": "https://www.wcnacertification.com/exam-information-1",
    "category": "Network Security",
    "level": "Intermediate",
    "raw_tooltip": "Protocol Analysis Institute Wireshark Certified Network Analyst\n    $299 exam"
  },
  {
    "id": "Server+",
    "abbreviation": "Server+",
    "name": "CompTIA Server+",
    "details": [
      "$319 exam"
    ],
    "url": "https://www.comptia.org/certifications/server",
    "category": "Security Architecture and Engineering",
    "level": "Intermediate",
    "raw_tooltip": "CompTIA Server+\n    $319 exam"
  },
  {
    "id": "PDSO CDP",
    "abbreviation": "PDSO CDP",
    "name": "PDSO Certified DevSecOps Professional",
    "details": [
      "$799",
      "Exam and training bundled"
    ],
    "url": "https://www.practical-devsecops.com/certified-devsecops-professional/",
    "category": "Security Architecture and Engineering",
    "level": "Intermediate",
    "raw_tooltip": "PDSO Certified DevSecOps Professional\n    $799\n    Exam and training bundled"
  },
  {
    "id": "EXIN PCD",
    "abbreviation": "EXIN PCD",
    "name": "EXIN Professional Cloud Developer",
    "details": [
      "$315 exam"
    ],
    "url": "https://www.exin.com/certifications/ccc-professional-cloud-developer-exam",
    "category": "Security Architecture and Engineering",
    "level": "Intermediate",
    "raw_tooltip": "EXIN Professional Cloud Developer\n    $315 exam"
  },
  {
    "id": "KCNA",
    "abbreviation": "KCNA",
    "name": "Cloud Native Computing Foundation Kubernetes and Cloud Native Associate",
    "details": [
      "$250 exam",
      "Branded course required"
    ],
    "url": "https://www.cncf.io/certification/kcna/",
    "category": "Security Architecture and Engineering",
    "level": "Intermediate",
    "raw_tooltip": "Cloud Native Computing Foundation Kubernetes and Cloud Native Associate\n    $250 exam\n    Branded course required"
  },
  {
    "id": "Linux+",
    "abbreviation": "Linux+",
    "name": "CompTIA Linux+",
    "details": [
      "$369 exam"
    ],
    "url": "https://www.comptia.org/certifications/linux",
    "category": "Security Architecture and Engineering",
    "level": "Intermediate",
    "raw_tooltip": "CompTIA Linux+\n    $369 exam"
  },
  {
    "id": "AZ-220",
    "abbreviation": "AZ-220",
    "name": "Azure IoT Developer Specialty",
    "details": [
      "$165 exam"
    ],
    "url": "https://docs.microsoft.com/en-us/learn/certifications/azure-iot-developer-specialty?wt.mc_id=learningredirect_certs-web-wwl",
    "category": "Security Architecture and Engineering",
    "level": "Intermediate",
    "raw_tooltip": "Azure IoT Developer Specialty\n    $165 exam"
  },
  {
    "id": "CRFS",
    "abbreviation": "CRFS",
    "name": "IMI Certified Red Flag Specialist",
    "details": [
      "$295 exam"
    ],
    "url": "https://www.identitymanagementinstitute.org/crfs/",
    "category": "Asset Security",
    "level": "Intermediate",
    "raw_tooltip": "IMI Certified Red Flag Specialist\n    $295 exam"
  },
  {
    "id": "SSCP",
    "abbreviation": "SSCP",
    "name": "(ISC)2 Systems Security Certified Practitioner",
    "details": [
      "$249 exam"
    ],
    "url": "https://www.isc2.org/Certifications/SSCP",
    "category": "Security and Risk Management",
    "level": "Intermediate",
    "raw_tooltip": "(ISC)2 Systems Security Certified Practitioner\n    $249 exam"
  },
  {
    "id": "SOG CAP",
    "abbreviation": "SOG CAP",
    "name": "SecOps Group Certified AppSec Practitioner",
    "details": [
      "$249 exam"
    ],
    "url": "https://secops.group/product/certified-application-security-practitioner/",
    "category": "Software Development Security",
    "level": "Intermediate",
    "raw_tooltip": "SecOps Group Certified AppSec Practitioner\n    $249 exam"
  },
  {
    "id": "CCOA",
    "abbreviation": "CCOA",
    "name": "ISACA Certified Cybersecurity Operations Analyst",
    "details": [
      "$760 exam"
    ],
    "url": "https://www.isaca.org/credentialing/ccoa",
    "category": "Security Operations (Blue Team)",
    "level": "Intermediate",
    "raw_tooltip": "ISACA Certified Cybersecurity Operations Analyst\n    $760 exam"
  },
  {
    "id": "CREST CPIA",
    "abbreviation": "CREST CPIA",
    "name": "CREST Practitioner Intrusion Analyst",
    "details": [
      "$425 exam"
    ],
    "url": "https://www.crest-approved.org/certification-careers/crest-certifications/crest-practitioner-intrusion-analyst",
    "category": "Security Operations (Blue Team)",
    "level": "Intermediate",
    "raw_tooltip": "CREST Practitioner Intrusion Analyst\n    $425 exam"
  },
  {
    "id": "MESE",
    "abbreviation": "MESE",
    "name": "Mosse Institute Enterprise Security Engineer",
    "details": [
      "$450 exam"
    ],
    "url": "https://www.mosse-institute.com/certifications/mese-certified-enterprise-security-engineer.html",
    "category": "Security Operations (Blue Team)",
    "level": "Intermediate",
    "raw_tooltip": "Mosse Institute Enterprise Security Engineer\n    $450 exam"
  },
  {
    "id": "CREST CPTIA",
    "abbreviation": "CREST CPTIA",
    "name": "CREST Practitioner Threat Intelligence Analyst",
    "details": [
      "$425 exam"
    ],
    "url": "https://www.crest-approved.org/certification-careers/crest-certifications/crest-practitioner-threat-intelligence-analyst/",
    "category": "Security Operations (Blue Team)",
    "level": "Intermediate",
    "raw_tooltip": "CREST Practitioner Threat Intelligence Analyst\n    $425 exam"
  },
  {
    "id": "MCPT",
    "abbreviation": "MCPT",
    "name": "Mosse Institute Cloud Penetration Tester",
    "details": [
      "$450 exam"
    ],
    "url": "https://www.mosse-institute.com/certifications/mcpt-cloud-penetration-tester.html",
    "category": "Security Operations (Red Team)",
    "level": "Intermediate",
    "raw_tooltip": "Mosse Institute Cloud Penetration Tester\n    $450 exam"
  },
  {
    "id": "C)PEH",
    "abbreviation": "C)PEH",
    "name": "Mile2 Certified Professional Ethical Hacker",
    "details": [
      "$550 exam"
    ],
    "url": "https://mile2.com/professional-ethical-hacker/",
    "category": "Security Operations (Red Team)",
    "level": "Intermediate",
    "raw_tooltip": "Mile2 Certified Professional Ethical Hacker\n    $550 exam"
  },
  {
    "id": "GCPEH",
    "abbreviation": "GCPEH",
    "name": "GAQM Certified Professional Ethical Hacker",
    "details": [
      "$170 exam"
    ],
    "url": "https://gaqm.org/certifications/information_systems_security/cpeh",
    "category": "Security Operations (Red Team)",
    "level": "Intermediate",
    "raw_tooltip": "GAQM Certified Professional Ethical Hacker\n    $170 exam"
  },
  {
    "id": "CCSA",
    "abbreviation": "CCSA",
    "name": "Checkpoint Certified Security Administrator",
    "details": [
      "$250 exam"
    ],
    "url": "https://training-certifications.checkpoint.com/#/courses/Check%20Point%20Certified%20Admin%20(CCSA)%20R80.x",
    "category": "Network Security",
    "level": "Intermediate",
    "raw_tooltip": "Checkpoint Certified Security Administrator\n    $250 exam"
  },
  {
    "id": "ITS-NS",
    "abbreviation": "ITS-NS",
    "name": "Certiport IT Specialist - Network Security",
    "details": [
      "$127 exam"
    ],
    "url": "https://certiport.filecamp.com/s/ITS_OD_102_Network_Security/fi",
    "category": "Network Security",
    "level": "Intermediate",
    "raw_tooltip": "Certiport IT Specialist - Network Security\n    $127 exam"
  },
  {
    "id": "CCT",
    "abbreviation": "CCT",
    "name": "Cisco Certified Technician",
    "details": [
      "$165 exam"
    ],
    "url": "https://www.cisco.com/c/en/us/training-events/training-certifications/certifications/entry/technician-cct.html",
    "category": "Network Security",
    "level": "Intermediate",
    "raw_tooltip": "Cisco Certified Technician\n    $165 exam"
  },
  {
    "id": "Cloud+",
    "abbreviation": "Cloud+",
    "name": "CompTIA Cloud+",
    "details": [
      "$369 exam"
    ],
    "url": "https://www.comptia.org/certifications/cloud",
    "category": "Security Architecture and Engineering",
    "level": "Intermediate",
    "raw_tooltip": "CompTIA Cloud+ \n    $369 exam"
  },
  {
    "id": "Google ACE",
    "abbreviation": "Google ACE",
    "name": "Google Associate Cloud Engineer",
    "details": [
      "$125 exam"
    ],
    "url": "https://cloud.google.com/certification/cloud-engineer",
    "category": "Security Architecture and Engineering",
    "level": "Intermediate",
    "raw_tooltip": "Google Associate Cloud Engineer\n    $125 exam"
  },
  {
    "id": "SOG CCSP-AWS",
    "abbreviation": "SOG CCSP-AWS",
    "name": "SecOps Group Certified Cloud Security Practitioner - AWS",
    "details": [
      "$249 exam"
    ],
    "url": "https://secops.group/product/certified-cloud-security-practitioner-aws-ccsp-aws/",
    "category": "Security Architecture and Engineering",
    "level": "Intermediate",
    "raw_tooltip": "SecOps Group Certified Cloud Security Practitioner - AWS\n    $249 exam"
  },
  {
    "id": "LFCA",
    "abbreviation": "LFCA",
    "name": "Linux Foundation Certified IT Associate",
    "details": [
      "$200 exam"
    ],
    "url": "https://training.linuxfoundation.org/certification/certified-it-associate/",
    "category": "Security Architecture and Engineering",
    "level": "Intermediate",
    "raw_tooltip": "Linux Foundation Certified IT Associate\n    $200 exam"
  },
  {
    "id": "ISA CFS",
    "abbreviation": "ISA CFS",
    "name": "ISA Certified Fundamentals Specialist",
    "details": [
      "$2,700 course + exam",
      "Course required"
    ],
    "url": "https://www.isa.org/training-and-certifications/isa-certification/isa99iec-62443/isa99iec-62443-cybersecurity-certificate-programs/",
    "category": "Security Architecture and Engineering",
    "level": "Intermediate",
    "raw_tooltip": "ISA Certified Fundamentals Specialist\n    $2,700 course + exam\n    Course required"
  },
  {
    "id": "EITCA/IS",
    "abbreviation": "EITCA/IS",
    "name": "EITCA/IS Information Security Certificate",
    "details": [
      "$120 exam"
    ],
    "url": "https://eitca.org/eitca-is-information-security-academy/",
    "category": "Security Architecture and Engineering",
    "level": "Intermediate",
    "raw_tooltip": "EITCA/IS Information Security Certificate\n    $120 exam"
  },
  {
    "id": "CIPP",
    "abbreviation": "CIPP",
    "name": "IAPP Certified Information Privacy Professional",
    "details": [
      "$550 exam"
    ],
    "url": "https://iapp.org/certify/cipp",
    "category": "Asset Security",
    "level": "Intermediate",
    "raw_tooltip": "IAPP Certified Information Privacy Professional\n    $550 exam"
  },
  {
    "id": "Security+",
    "abbreviation": "Security+",
    "name": "CompTIA Security+",
    "details": [
      "$404 exam"
    ],
    "url": "https://www.comptia.org/certifications/security",
    "category": "Security and Risk Management",
    "level": "Intermediate",
    "raw_tooltip": "CompTIA Security+\n    $404 exam"
  },
  {
    "id": "ECSS",
    "abbreviation": "ECSS",
    "name": "EC Council Certified Security Specialist",
    "details": [
      "$249 exam"
    ],
    "url": "https://www.eccouncil.org/programs/certified-security-specialist-ecss/",
    "category": "Security Operations (Blue Team)",
    "level": "Intermediate",
    "raw_tooltip": "EC Council Certified Security Specialist\n    $249 exam"
  },
  {
    "id": "C)DFE",
    "abbreviation": "C)DFE",
    "name": "Mile2 Certified Digital Forensics Examiner",
    "details": [
      "$550 exam"
    ],
    "url": "https://www.mile2.com/cdfe_outline/",
    "category": "Security Operations (Blue Team)",
    "level": "Intermediate",
    "raw_tooltip": "Mile2 Certified Digital Forensics Examiner\n    $550 exam"
  },
  {
    "id": "S-SA",
    "abbreviation": "S-SA",
    "name": "SECO Associate SOC Analyst",
    "details": [
      "$480 exam"
    ],
    "url": "https://www.seco-institute.org/get-trained/cyber-defense-track/associate-soc-analyst-certification/",
    "category": "Security Operations (Blue Team)",
    "level": "Intermediate",
    "raw_tooltip": "SECO Associate SOC Analyst\n    $480 exam"
  },
  {
    "id": "DV AOPH",
    "abbreviation": "DV AOPH",
    "name": "Dark Vortex Adversary Operations and Proactive Hunting",
    "details": [
      "$2500 exam",
      "Course required"
    ],
    "url": "https://0xdarkvortex.dev/training-programs/adversary-operations-and-proactive-hunting/",
    "category": "Security Operations (Blue Team)",
    "level": "Intermediate",
    "raw_tooltip": "Dark Vortex Adversary Operations and Proactive Hunting\n    $2500 exam\n    Course required"
  },
  {
    "id": "SOG NSP",
    "abbreviation": "SOG NSP",
    "name": "SecOps Group Certified Network Security Practitioner",
    "details": [
      "$249 exam"
    ],
    "url": "https://secops.group/product/certified-network-security-practitioner/",
    "category": "Network Security",
    "level": "Beginner",
    "raw_tooltip": "SecOps Group Certified Network Security Practitioner\n    $249 exam"
  },
  {
    "id": "Net+",
    "abbreviation": "Net+",
    "name": "CompTIA Network+",
    "details": [
      "$369 exam"
    ],
    "url": "https://www.comptia.org/certifications/network",
    "category": "Network Security",
    "level": "Beginner",
    "raw_tooltip": "CompTIA Network+\n    $369 exam"
  },
  {
    "id": "CAMS",
    "abbreviation": "CAMS",
    "name": "IMI Certfied Access Management Specialist",
    "details": [
      "$195 exam"
    ],
    "url": "https://www.identitymanagementinstitute.org/cams/",
    "category": "Identity and Access Management",
    "level": "Beginner",
    "raw_tooltip": "IMI Certfied Access Management Specialist\n    $195 exam"
  },
  {
    "id": "AZ-900",
    "abbreviation": "AZ-900",
    "name": "Microsoft Azure Fundamentals",
    "details": [
      "$165 exam"
    ],
    "url": "https://docs.microsoft.com/en-us/learn/certifications/azure-fundamentals",
    "category": "Security Architecture and Engineering",
    "level": "Beginner",
    "raw_tooltip": "Microsoft Azure Fundamentals\n    $165 exam"
  },
  {
    "id": "MCSF",
    "abbreviation": "MCSF",
    "name": "Mosse Institute Cloud Services Fundamentals",
    "details": [
      "$450 exam"
    ],
    "url": "https://www.mosse-institute.com/certifications/mcsf-cloud-services-fundamentals.html",
    "category": "Security Architecture and Engineering",
    "level": "Beginner",
    "raw_tooltip": "Mosse Institute Cloud Services Fundamentals\n                    $450 exam"
  },
  {
    "id": "MSAF",
    "abbreviation": "MSAF",
    "name": "Mosse Institute System Administration Fundamentals",
    "details": [
      "$450 exam"
    ],
    "url": "https://www.mosse-institute.com/certifications/msaf-system-administration-fundamentals.html",
    "category": "Security Architecture and Engineering",
    "level": "Beginner",
    "raw_tooltip": "Mosse Institute System Administration Fundamentals\n                    $450 exam"
  },
  {
    "id": "Apple ACSP",
    "abbreviation": "Apple ACSP",
    "name": "Apple Certified Support Professional",
    "details": [
      "$250 exam",
      "Limited test locations"
    ],
    "url": "https://training.apple.com/us/en/recognition",
    "category": "Security Architecture and Engineering",
    "level": "Beginner",
    "raw_tooltip": "Apple Certified Support Professional\n    $250 exam\n    Limited test locations"
  },
  {
    "id": "CACS",
    "abbreviation": "CACS",
    "name": "Excida IEC 62443 Certified Automation Cybersecurity Specialist",
    "details": [
      "$700 exam"
    ],
    "url": "https://www.exidacace.com/Apply/CACS",
    "category": "Security Architecture and Engineering",
    "level": "Beginner",
    "raw_tooltip": "Excida IEC 62443 Certified Automation Cybersecurity Specialist\n    $700 exam"
  },
  {
    "id": "TUV COSTE",
    "abbreviation": "TUV COSTE",
    "name": "TUV Certified OT Security Technical Expert",
    "details": [
      "$3,070 course"
    ],
    "url": "https://limessecurity.com/en/academy/ics-211/",
    "category": "Security Architecture and Engineering",
    "level": "Beginner",
    "raw_tooltip": "TUV Certified OT Security Technical Expert\n    $3,070 course"
  },
  {
    "id": "EPDPF",
    "abbreviation": "EPDPF",
    "name": "EXIN Privacy and Data Protection Foundation",
    "details": [
      "$207 exam"
    ],
    "url": "https://www.exin.com/certifications/exin-privacy-and-data-protection-foundation-exam",
    "category": "Asset Security",
    "level": "Beginner",
    "raw_tooltip": "EXIN Privacy and Data Protection Foundation\n    $207 exam"
  },
  {
    "id": "TOGAF Fdn",
    "abbreviation": "TOGAF Fdn",
    "name": "OpenGroup TOGAF Certified",
    "details": [
      "$360 exam"
    ],
    "url": "https://www.opengroup.org/certifications/togaf",
    "category": "Security and Risk Management",
    "level": "Beginner",
    "raw_tooltip": "OpenGroup TOGAF Certified\n    $360 exam"
  },
  {
    "id": "CSP",
    "abbreviation": "CSP",
    "name": "GAQM Certified SAFe Practitioner",
    "details": [
      "$170 exam"
    ],
    "url": "https://gaqm.org/certifications/scrum_agile/csp-410",
    "category": "Security and Risk Management",
    "level": "Beginner",
    "raw_tooltip": "GAQM Certified SAFe Practitioner\n    $170 exam"
  },
  {
    "id": "IIBA CCA",
    "abbreviation": "IIBA CCA",
    "name": "IIBA Certification in Cybersecurity Analysis",
    "details": [
      "$475 exam"
    ],
    "url": "https://www.iiba.org/certification/iiba-certifications/specialized-business-analysis-certifications/certificate-in-cybersecurity-analysis/",
    "category": "Security and Risk Management",
    "level": "Beginner",
    "raw_tooltip": "IIBA Certification in Cybersecurity Analysis\n    $475 exam"
  },
  {
    "id": "CITGP",
    "abbreviation": "CITGP",
    "name": "IBITGQ Certified in Implementing IT Governance - Foundation & Principles",
    "details": [
      "~$2,499 course exam",
      "Branded course required"
    ],
    "url": "https://www.itgovernance.co.uk/shop/product/implementing-it-governance-foundation-principles-training-course",
    "category": "Security and Risk Management",
    "level": "Beginner",
    "raw_tooltip": "IBITGQ Certified in Implementing IT Governance - Foundation & Principles\n    ~$2,499 course exam\n    Branded course required"
  },
  {
    "id": "C)ISCAP",
    "abbreviation": "C)ISCAP",
    "name": "Mile2 Information Systems Certification and Accredidation Professional",
    "details": [
      "$550 exam"
    ],
    "url": "https://www.mile2.com/iscap_outline/",
    "category": "Security and Risk Management",
    "level": "Beginner",
    "raw_tooltip": "Mile2 Information Systems Certification and Accredidation Professional\n    $550 exam"
  },
  {
    "id": "CSAP",
    "abbreviation": "CSAP",
    "name": "Infosec Institute Certified Security Awareness Practitioner",
    "details": [
      "$2,599 exam",
      "Course required"
    ],
    "url": "https://app.infosecinstitute.com/portal/courses/a0t0y000009lTzjAAE",
    "category": "Security and Risk Management",
    "level": "Beginner",
    "raw_tooltip": "Infosec Institute Certified Security Awareness Practitioner\n    $2,599 exam\n    Course required"
  },
  {
    "id": "PECB 27032F",
    "abbreviation": "PECB 27032F",
    "name": "PECB ISO/IEC 27032 Foundation",
    "details": [
      "$500-749 exam",
      "Course required"
    ],
    "url": "https://pecb.com/en/education-and-certification-for-individuals/iso-iec-27032/iso-iec-27032-foundation",
    "category": "Security and Risk Management",
    "level": "Beginner",
    "raw_tooltip": "PECB ISO/IEC 27032 Foundation\n    $500-749 exam\n    Course required"
  },
  {
    "id": "MCL",
    "abbreviation": "MCL",
    "name": "Mosse Institute Cybersecurity Leadership",
    "details": [
      "$450 exam"
    ],
    "url": "https://www.mosse-institute.com/certifications/mcl-cybersecurity-leadership.html",
    "category": "Security and Risk Management",
    "level": "Beginner",
    "raw_tooltip": "Mosse Institute Cybersecurity Leadership\n                    $450 exam"
  },
  {
    "id": "ITS-C",
    "abbreviation": "ITS-C",
    "name": "Certiport IT Specialist - Cybersecurity",
    "details": [
      "$127 exam"
    ],
    "url": "https://certiport.filecamp.com/s/JTIy1sX0ci0ZI3ss/fi",
    "category": "Security and Risk Management",
    "level": "Beginner",
    "raw_tooltip": "Certiport IT Specialist - Cybersecurity\n                    $127 exam"
  },
  {
    "id": "CSST",
    "abbreviation": "CSST",
    "name": "GAQM Certified Software Security Tester",
    "details": [
      "$170 exam"
    ],
    "url": "https://gaqm.org/certifications/software_security_testing/csst",
    "category": "Software Development Security",
    "level": "Beginner",
    "raw_tooltip": "GAQM Certified Software Security Tester\n    $170 exam"
  },
  {
    "id": "OPSE",
    "abbreviation": "OPSE",
    "name": "ISECOM OSSTMM Professional Security Expert",
    "details": [
      "$100 annual sub",
      "Unknown exam cost"
    ],
    "url": "https://www.isecom.org/certification.html",
    "category": "Security Operations (Blue Team)",
    "level": "Beginner",
    "raw_tooltip": "ISECOM OSSTMM Professional Security Expert\n    $100 annual sub\n    Unknown exam cost"
  },
  {
    "id": "CSX-F",
    "abbreviation": "CSX-F",
    "name": "IBITGQ Cyber Incident Response Management Foundation",
    "details": [
      "$768 course exam",
      "Branded course required"
    ],
    "url": "https://www.itgovernance.co.uk/shop/product/cyber-incident-response-management-foundation-training-course",
    "category": "Security Operations (Blue Team)",
    "level": "Beginner",
    "raw_tooltip": "IBITGQ Cyber Incident Response Management Foundation\n    $768 course exam\n    Branded course required"
  },
  {
    "id": "DV MILF",
    "abbreviation": "DV MILF",
    "name": "Dark Vortex Malware Incident and Log Foensics",
    "details": [
      "$2000 exam"
    ],
    "url": "https://0xdarkvortex.dev/training-programs/malware-incident-and-log-forensics/",
    "category": "Security Operations (Blue Team)",
    "level": "Beginner",
    "raw_tooltip": "Dark Vortex Malware Incident and Log Foensics\n    $2000 exam"
  },
  {
    "id": "CIRM Fdn",
    "abbreviation": "CIRM Fdn",
    "name": "IBITGQ Cyber Incident Response Management Foundation",
    "details": [
      "$768 course exam",
      "Branded course required"
    ],
    "url": "https://www.itgovernance.co.uk/shop/product/cyber-incident-response-management-foundation-training-course",
    "category": "Security Operations (Blue Team)",
    "level": "Beginner",
    "raw_tooltip": "IBITGQ Cyber Incident Response Management Foundation\n    $768 course exam\n    Branded course required"
  },
  {
    "id": "EEHF",
    "abbreviation": "EEHF",
    "name": "EXIN Ethical Hacking Foundation",
    "details": [
      "$232 exam"
    ],
    "url": "https://www.exin.com/certifications/exin-ethical-hacking-foundation-exam",
    "category": "Security Operations (Red Team)",
    "level": "Beginner",
    "raw_tooltip": "EXIN Ethical Hacking Foundation\n    $232 exam"
  },
  {
    "id": "S-EHF",
    "abbreviation": "S-EHF",
    "name": "SECO Ethical Hacking Foundation",
    "details": [
      "$460 exam"
    ],
    "url": "https://www.seco-institute.org/certifications/ethical-hacking-certification-track/ethical-hacking-foundation/",
    "category": "Security Operations (Red Team)",
    "level": "Beginner",
    "raw_tooltip": "SECO Ethical Hacking Foundation\n    $460 exam"
  },
  {
    "id": "CHA",
    "abbreviation": "CHA",
    "name": "ISECOM Certified Hacker Analyst",
    "details": [
      "$100 annual sub",
      "Unknown exam cost"
    ],
    "url": "https://www.isecom.org/certification.html",
    "category": "Security Operations (Red Team)",
    "level": "Beginner",
    "raw_tooltip": "ISECOM Certified Hacker Analyst\n    $100 annual sub\n    Unknown exam cost"
  },
  {
    "id": "FCF",
    "abbreviation": "FCF",
    "name": "Fortinet Certified Fundamentals Cybersecurity",
    "details": [
      "Free 3 courses with exams req"
    ],
    "url": "https://training.fortinet.com/local/staticpage/view.php?page=fcf_cybersecurity",
    "category": "Network Security",
    "level": "Beginner",
    "raw_tooltip": "Fortinet Certified Fundamentals Cybersecurity\n    Free 3 courses with exams req"
  },
  {
    "id": "PCCET",
    "abbreviation": "PCCET",
    "name": "Palo Alto Networks Certified Cybersecurity Entry-level Technician",
    "details": [
      "$110 exam"
    ],
    "url": "https://www.paloaltonetworks.com/services/education/certification",
    "category": "Network Security",
    "level": "Beginner",
    "raw_tooltip": "Palo Alto Networks Certified Cybersecurity Entry-level Technician\n    $110 exam"
  },
  {
    "id": "AWS CP",
    "abbreviation": "AWS CP",
    "name": "Amazon Web Services Certified Cloud Practitioner",
    "details": [
      "$100 exam"
    ],
    "url": "https://aws.amazon.com/certification/certified-cloud-practitioner/",
    "category": "Security Architecture and Engineering",
    "level": "Beginner",
    "raw_tooltip": "Amazon Web Services Certified Cloud Practitioner\n    $100 exam"
  },
  {
    "id": "EXIN PCA",
    "abbreviation": "EXIN PCA",
    "name": "EXIN Professional Cloud Administrator",
    "details": [
      "$315 exam"
    ],
    "url": "https://www.exin.com/certifications/ccc-professional-cloud-administrator-exam",
    "category": "Security Architecture and Engineering",
    "level": "Beginner",
    "raw_tooltip": "EXIN Professional Cloud Administrator\n    $315 exam"
  },
  {
    "id": "A+",
    "abbreviation": "A+",
    "name": "CompTIA A+",
    "details": [
      "$253 exam"
    ],
    "url": "https://www.comptia.org/certifications/a",
    "category": "Security Architecture and Engineering",
    "level": "Beginner",
    "raw_tooltip": "CompTIA A+\n    $253 exam"
  },
  {
    "id": "CIOTSP",
    "abbreviation": "CIOTSP",
    "name": "CertNexus Certified Internet of Things Security Practitioner",
    "details": [
      "$250 exam"
    ],
    "url": "https://certnexus.com/certification/ciotsp/",
    "category": "Security Architecture and Engineering",
    "level": "Beginner",
    "raw_tooltip": "CertNexus Certified Internet of Things Security Practitioner\n    $250 exam"
  },
  {
    "id": "TUV COSP",
    "abbreviation": "TUV COSP",
    "name": "TUV Certified OT Security Practitioner",
    "details": [
      "$2725 course"
    ],
    "url": "https://limessecurity.com/en/academy/ics-201/",
    "category": "Security Architecture and Engineering",
    "level": "Beginner",
    "raw_tooltip": "TUV Certified OT Security Practitioner\n    $2725 course"
  },
  {
    "id": "EPDPE",
    "abbreviation": "EPDPE",
    "name": "EXIN Privacy and Data Protection Essentials",
    "details": [
      "$145 exam"
    ],
    "url": "https://www.exin.com/certifications/exin-privacy-and-data-protection-essentials-exam",
    "category": "Asset Security",
    "level": "Beginner",
    "raw_tooltip": "EXIN Privacy and Data Protection Essentials\n    $145 exam"
  },
  {
    "id": "M_o_R Fdn",
    "abbreviation": "M_o_R Fdn",
    "name": "Axelos M_o_R Framework Foundation",
    "details": [
      "$495 exam"
    ],
    "url": "https://www.axelos.com/certifications/propath/mor-risk-management/mor-foundation",
    "category": "Security and Risk Management",
    "level": "Beginner",
    "raw_tooltip": "Axelos M_o_R Framework Foundation\n    $495 exam"
  },
  {
    "id": "Fair Fdn",
    "abbreviation": "Fair Fdn",
    "name": "Fair Institute Analysis Fundamentals",
    "details": [
      "$1499 exam",
      "Course required"
    ],
    "url": "https://risklens-academy.myshopify.com/collections/popular-courses/products/fair-analysis-fundamentals-2",
    "category": "Security and Risk Management",
    "level": "Beginner",
    "raw_tooltip": "Fair Institute Analysis Fundamentals\n    $1499 exam\n    Course required"
  },
  {
    "id": "PSM I",
    "abbreviation": "PSM I",
    "name": "Scrum.org Professional Scrum Master I",
    "details": [
      "$150 exam"
    ],
    "url": "https://www.scrum.org/assessments/professional-scrum-master-i-certification",
    "category": "Security and Risk Management",
    "level": "Beginner",
    "raw_tooltip": "Scrum.org Professional Scrum Master I\n    $150 exam"
  },
  {
    "id": "APMG 20000F",
    "abbreviation": "APMG 20000F",
    "name": "APMG ISO/IEC 20000 Foundation",
    "details": [
      "$308 exam"
    ],
    "url": "https://apmg-international.com/product/iso-20000",
    "category": "Security and Risk Management",
    "level": "Beginner",
    "raw_tooltip": "APMG ISO/IEC 20000 Foundation\n    $308 exam"
  },
  {
    "id": "ISMI CSM",
    "abbreviation": "ISMI CSM",
    "name": "ISMI Certified Security Manager",
    "details": [
      "$TBD"
    ],
    "url": "https://www.ismi.org.uk/csmp/certified-security-manager%C2%AE",
    "category": "Security and Risk Management",
    "level": "Beginner",
    "raw_tooltip": "ISMI Certified Security Manager\n    $TBD"
  },
  {
    "id": "BCS FISMP",
    "abbreviation": "BCS FISMP",
    "name": "BCS Foundation Certifiate in Information Security Management Principles",
    "details": [
      "$249 exam"
    ],
    "url": "https://www.bcs.org/get-qualified/certifications-for-professionals/information-security-and-ccp-scheme-certifications/bcs-foundation-certificate-in-information-security-management-principles/",
    "category": "Security and Risk Management",
    "level": "Beginner",
    "raw_tooltip": "BCS Foundation Certifiate in Information Security Management Principles\n    $249 exam"
  },
  {
    "id": "CC",
    "abbreviation": "CC",
    "name": "ISC2 Certified in Cybersecurity",
    "details": [
      "Free exam"
    ],
    "url": "https://www.isc2.org/Certifications/CC",
    "category": "Security and Risk Management",
    "level": "Beginner",
    "raw_tooltip": "ISC2 Certified in Cybersecurity\n    Free exam"
  },
  {
    "id": "S-ISF",
    "abbreviation": "S-ISF",
    "name": "SECO Information Security Foundation",
    "details": [
      "$460 exam"
    ],
    "url": "https://www.seco-institute.org/certifications/information-security-certification-track/",
    "category": "Security and Risk Management",
    "level": "Beginner",
    "raw_tooltip": "SECO Information Security Foundation\n                    $460 exam"
  },
  {
    "id": "GISF",
    "abbreviation": "GISF",
    "name": "GIAC Information Security Fundamentals",
    "details": [
      "$979 exam",
      "SANS course recommended"
    ],
    "url": "https://www.giac.org/certification/information-security-fundamentals-gisf",
    "category": "Security and Risk Management",
    "level": "Beginner",
    "raw_tooltip": "GIAC Information Security Fundamentals\n    $979 exam\n    SANS course recommended"
  },
  {
    "id": "MASE",
    "abbreviation": "MASE",
    "name": "Mosse Institute Certified Application Security Engineer",
    "details": [
      "$450 exam"
    ],
    "url": "https://www.mosse-institute.com/certifications/mase-certified-application-security-engineer.html",
    "category": "Software Development Security",
    "level": "Beginner",
    "raw_tooltip": "Mosse Institute Certified Application Security Engineer\n    $450 exam"
  },
  {
    "id": "C)SP",
    "abbreviation": "C)SP",
    "name": "Mile2 Certified Security Principles",
    "details": [
      "$550 exam"
    ],
    "url": "https://www.mile2.com/csp_outline/",
    "category": "Security Operations (Blue Team)",
    "level": "Beginner",
    "raw_tooltip": "Mile2 Certified Security Principles\n    $550 exam"
  },
  {
    "id": "CND",
    "abbreviation": "CND",
    "name": "EC Council Certified Network Defender",
    "details": [
      "$550 exam"
    ],
    "url": "https://www.eccouncil.org/programs/certified-network-defender-cnd/",
    "category": "Security Operations (Blue Team)",
    "level": "Beginner",
    "raw_tooltip": "EC Council Certified Network Defender\n    $550 exam"
  },
  {
    "id": "C)VA",
    "abbreviation": "C)VA",
    "name": "Mile2 Certified Vulnerability Assessor",
    "details": [
      "$550 exam"
    ],
    "url": "https://www.mile2.com/vulnerability-assessor-outline/",
    "category": "Security Operations (Red Team)",
    "level": "Beginner",
    "raw_tooltip": "Mile2 Certified Vulnerability Assessor\n    $550 exam"
  },
  {
    "id": "KLCP",
    "abbreviation": "KLCP",
    "name": "Kali Linux Certified Professional",
    "details": [
      "$299 exam"
    ],
    "url": "https://kali.training/klcp/",
    "category": "Security Operations (Red Team)",
    "level": "Beginner",
    "raw_tooltip": "Kali Linux Certified Professional\n    $299 exam"
  },
  {
    "id": "SC-900",
    "abbreviation": "SC-900",
    "name": "Microsoft Certified: Security, Compliance, and Identity Fundamentals",
    "details": [
      "$99 exam"
    ],
    "url": "https://docs.microsoft.com/en-us/learn/certifications/security-compliance-and-identity-fundamentals/",
    "category": "Identity and Access Management",
    "level": "Beginner",
    "raw_tooltip": "Microsoft Certified: Security, Compliance, and Identity Fundamentals\n    $99 exam"
  },
  {
    "id": "Cloud Essnt",
    "abbreviation": "Cloud Essnt",
    "name": "CompTIA Cloud Essentials",
    "details": [
      "$138 exam"
    ],
    "url": "https://www.comptia.org/certifications/cloud-essentials",
    "category": "Security Architecture and Engineering",
    "level": "Beginner",
    "raw_tooltip": "CompTIA Cloud Essentials\n    $138 exam"
  },
  {
    "id": "ITIL Fdn",
    "abbreviation": "ITIL Fdn",
    "name": "ITIL Foundation",
    "details": [
      "$383 exam"
    ],
    "url": "https://www.axelos.com/certifications/itil-certifications/itil-foundation",
    "category": "Security and Risk Management",
    "level": "Beginner",
    "raw_tooltip": "ITIL Foundation\n    $383 exam"
  },
  {
    "id": "Project+",
    "abbreviation": "Project+",
    "name": "CompTIA Project+",
    "details": [
      "$369 exam"
    ],
    "url": "https://www.comptia.org/certifications/project",
    "category": "Security and Risk Management",
    "level": "Beginner",
    "raw_tooltip": "CompTIA Project+\n    $369 exam"
  },
  {
    "id": "CIISec ICSF",
    "abbreviation": "CIISec ICSF",
    "name": "CIISec Information and Cybersecurity Fundamentals",
    "details": [
      "$450 exam"
    ],
    "url": "https://www.ciisec.org/ICSF_Exam",
    "category": "Security and Risk Management",
    "level": "Beginner",
    "raw_tooltip": "CIISec Information and Cybersecurity Fundamentals\n    $450 exam"
  },
  {
    "id": "FEXIN",
    "abbreviation": "FEXIN",
    "name": "EXIN Information Security Foundation",
    "details": [
      "$232 exam"
    ],
    "url": "https://www.exin.com/certifications/information-security-foundation-based-iso-iec-27001-exam?language_content_entity=en",
    "category": "Security and Risk Management",
    "level": "Beginner",
    "raw_tooltip": "EXIN Information Security Foundation\n    $232 exam"
  },
  {
    "id": "EXIN 27001F",
    "abbreviation": "EXIN 27001F",
    "name": "EXIN ISO/IEC 27001 Foundation",
    "details": [
      "$232 exam"
    ],
    "url": "https://www.exin.com/certifications/information-security-foundation-based-iso-iec-27001-exam",
    "category": "Security and Risk Management",
    "level": "Beginner",
    "raw_tooltip": "EXIN ISO/IEC 27001 Foundation\n    $232 exam"
  },
  {
    "id": "PECB 27005F",
    "abbreviation": "PECB 27005F",
    "name": "PECB ISO/IEC 27005 Foundation",
    "details": [
      "$500-749 exam",
      "Course required"
    ],
    "url": "https://pecb.com/en/education-and-certification-for-individuals/iso-iec-27005/iso-iec-27005-foundation",
    "category": "Security and Risk Management",
    "level": "Beginner",
    "raw_tooltip": "PECB ISO/IEC 27005 Foundation\n    $500-749 exam\n    Course required"
  },
  {
    "id": "C CS F",
    "abbreviation": "C CS F",
    "name": "IBITGQ Certified Cyber Security Foundation",
    "details": [
      "$725 course exam",
      "Branded course required"
    ],
    "url": "https://www.itgovernance.co.uk/shop/product/certified-cyber-security-foundation-training-course",
    "category": "Security and Risk Management",
    "level": "Beginner",
    "raw_tooltip": "IBITGQ Certified Cyber Security Foundation\n    $725 course exam\n    Branded course required"
  },
  {
    "id": "CIS F",
    "abbreviation": "CIS F",
    "name": "IBITGQ Certified ISO 27001 Information Security Management Specialist Foundation",
    "details": [
      "$853 course exam",
      "Brandeed course required"
    ],
    "url": "https://www.itgovernance.co.uk/shop/product/certified-iso-27001-isms-foundation-training-course",
    "category": "Security and Risk Management",
    "level": "Beginner",
    "raw_tooltip": "IBITGQ Certified ISO 27001 Information Security Management Specialist Foundation\n    $853 course exam\n    Brandeed course required"
  },
  {
    "id": "S-SPF",
    "abbreviation": "S-SPF",
    "name": "SECO Secure Programming Foundation",
    "details": [
      "$460 exam"
    ],
    "url": "https://www.seco-institute.org/certifications/secure-software-certification-track/secure-programming-foundation/",
    "category": "Software Development Security",
    "level": "Beginner",
    "raw_tooltip": "SECO Secure Programming Foundation\n                    $460 exam"
  },
  {
    "id": "CSCU",
    "abbreviation": "CSCU",
    "name": "EC Council Certified Secure Computer User",
    "details": [
      "$125 exam"
    ],
    "url": "https://www.eccouncil.org/Certification/certified-secure-computer-user",
    "category": "Security Operations (Blue Team)",
    "level": "Beginner",
    "raw_tooltip": "EC Council Certified Secure Computer User\n                    $125 exam"
  },
  {
    "id": "MICS",
    "abbreviation": "MICS",
    "name": "Mosse Institute Introductions to Cyber Security",
    "details": [
      "Free exam"
    ],
    "url": "https://www.mosse-institute.com/certifications/mics-introduction-to-cyber-security.html",
    "category": "Security Operations (Blue Team)",
    "level": "Beginner",
    "raw_tooltip": "Mosse Institute Introductions to Cyber Security\n                    Free exam"
  }
];