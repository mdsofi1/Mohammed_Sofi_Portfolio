export interface Project {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  technologies: string[];
  contributions: string[];
  githubUrl: string;
  secondaryGithubUrl?: string;
  liveUrl?: string;
  workflowSteps: string[];
  terminalSnippet?: {
    command: string;
    outputLines: string[];
  };
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  type: string;
  period: string;
  responsibilities: string[];
  technologies: string[];
}

export interface SkillCategory {
  category: string;
  iconName: string;
  skills: string[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  badge: string;
}

export interface GitHubRepo {
  name: string;
  description: string;
  language: string;
  url: string;
  category: 'DevOps' | 'Automation' | 'Application';
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "Mohammed Sofi Sarmad",
    title: "DevOps & Cloud Engineer",
    location: "Bengaluru, Karnataka",
    phone: "+91-9164876055",
    email: "mdsofisarmad@gmail.com",
    githubUrl: "https://github.com/mdsofi1",
    linkedinUrl: "https://www.linkedin.com/in/md-sofi-sarmad-b6a79929a",
    resumeUrl: "/Mohammed_Sofi_Sarmad_Resume.pdf",
    availabilityStatus: "Open to DevOps & Cloud Opportunities",
    heroDescription:
      "DevOps & Cloud Engineering enthusiast with hands-on experience in CI/CD automation, cloud infrastructure, containerization, configuration management and deployment automation.",
    targetRoles: [
      "DevOps Engineer",
      "Cloud Engineer",
      "Junior DevOps Engineer",
      "Cloud Support Engineer",
      "Infrastructure Engineer",
      "DevOps Intern / Graduate Engineer"
    ]
  },

  about: {
    degree: "B.Tech in Electronics & Computer Engineering",
    university: "Visvesvaraya Technological University, Kalaburagi",
    duration: "2022 – 2026",
    cgpa: "8.0/10",
    summary:
      "DevOps & Cloud Engineering enthusiast with hands-on internship experience in CI/CD pipeline design, containerization, and AWS cloud infrastructure. Skilled in Jenkins, Docker, Kubernetes, and automation scripting, with a strong software development background in Python, Node.js, and databases. Dedicated to building reliable, reproducible deployment systems and scalable infrastructure.",
    pillars: [
      {
        title: "Continuous Delivery",
        desc: "Designing automated Jenkins pipelines with GitHub webhook triggers and Maven artifact packaging."
      },
      {
        title: "Cloud & Containers",
        desc: "Architecting on AWS (EC2, IAM, S3, VPC) containerized with Docker and orchestrated on Kubernetes."
      },
      {
        title: "Infrastructure as Code",
        desc: "Automating server configurations with Ansible playbooks and provisioning reproducible infrastructure using Terraform."
      },
      {
        title: "Observability & Linux",
        desc: "Operating Linux/Ubuntu systems, crafting crontab/Bash automation, and monitoring health with Grafana and PagerDuty."
      }
    ]
  },

  skillCategories: [
    {
      category: "DevOps & CI/CD",
      iconName: "GitMerge",
      skills: ["Jenkins", "Git", "GitHub", "GitLab", "CI/CD Pipeline Design & Automation"]
    },
    {
      category: "Containerization & Orchestration",
      iconName: "Container",
      skills: ["Docker", "Docker Compose", "Kubernetes (K8s)"]
    },
    {
      category: "Cloud Platforms",
      iconName: "Cloud",
      skills: ["AWS", "EC2", "IAM", "S3", "VPC", "Azure DevOps"]
    },
    {
      category: "Infrastructure as Code / Automation",
      iconName: "Terminal",
      skills: ["Terraform", "Ansible", "Bash", "Shell Scripting", "crontab"]
    },
    {
      category: "Build & Deployment Tools",
      iconName: "PackageCheck",
      skills: ["Maven", "Apache Tomcat"]
    },
    {
      category: "Monitoring & Incident Management",
      iconName: "Activity",
      skills: ["Grafana", "PagerDuty"]
    },
    {
      category: "Operating Systems",
      iconName: "Cpu",
      skills: ["Linux / Ubuntu", "Windows"]
    },
    {
      category: "Networking & System Administration",
      iconName: "Network",
      skills: ["Linux User & Permission Management", "System Monitoring"]
    }
  ] as SkillCategory[],

  pipelineToolchain: [
    { step: 1, name: "Developer", role: "Code Commit & Feature Branching", icon: "Code" },
    { step: 2, name: "Git", role: "Local Version Control & Tags", icon: "GitBranch" },
    { step: 3, name: "GitHub", role: "Remote Repo & Webhook Triggers", icon: "Github" },
    { step: 4, name: "Jenkins", role: "Automated Build Pipeline Execution", icon: "Cpu" },
    { step: 5, name: "Maven", role: "Compile, Unit Test & WAR Packaging", icon: "Package" },
    { step: 6, name: "Docker", role: "Multi-stage Image Containerization", icon: "Box" },
    { step: 7, name: "Kubernetes", role: "Cluster Pod Orchestration & Scale", icon: "Layers" },
    { step: 8, name: "AWS", role: "Cloud Infra (EC2, IAM, S3, VPC)", icon: "Cloud" },
    { step: 9, name: "Ansible / Terraform", role: "IaC Provisioning & Config Automation", icon: "FileCode" },
    { step: 10, name: "Grafana / PagerDuty", role: "Real-time Metrics & Incident Alerting", icon: "Activity" }
  ],

  experience: [
    {
      id: "exp-1",
      title: "DevOps & Cloud Intern",
      company: "DevOps Academy",
      type: "Onsite",
      period: "July 2026 – Present",
      responsibilities: [
        "Working on end-to-end CI/CD pipeline design and automation using Jenkins, Git, and GitHub for continuous integration and continuous deployment.",
        "Gaining hands-on exposure to Docker containerization, Kubernetes orchestration, and AWS cloud infrastructure including EC2, IAM, S3, and VPC.",
        "Practicing Bash shell scripting and Ansible for configuration management and deployment automation.",
        "Learning monitoring and incident-management workflows using Grafana and PagerDuty."
      ],
      technologies: ["Jenkins", "Git", "GitHub", "Docker", "Kubernetes", "AWS (EC2, IAM, S3, VPC)", "Ansible", "Bash", "Grafana", "PagerDuty"]
    },
    {
      id: "exp-2",
      title: "AI Research & Development Intern",
      company: "Learners Byte",
      type: "Remote",
      period: "January 2025 – May 2025",
      responsibilities: [
        "Contributed to AI/ML-driven projects under the Bharat Unnati AI Fellowship (AICTE NEAT 6.0), including an AI Learning Coach (n8n, Google Gemini) and an AI-Powered CRM Assistant.",
        "Gained hands-on experience with automation workflows, model evaluation, and data-driven development — skills directly transferable to DevOps automation and tooling."
      ],
      technologies: ["n8n", "Google Gemini", "Python", "Workflow Automation", "Model Evaluation", "APIs"]
    }
  ] as Experience[],

  projects: [
    {
      id: "proj-1",
      name: "One-Click Deployment CI/CD Platform",
      subtitle: "End-to-End Automated Java Web Application Delivery",
      description: "Designed and implemented an end-to-end CI/CD pipeline enabling fully automated one-click deployment of Java web applications.",
      technologies: ["Jenkins", "Git", "GitHub", "Maven", "Apache Tomcat", "PagerDuty", "Linux"],
      contributions: [
        "Integrated GitHub Webhooks with Jenkins to automatically trigger builds upon code commits.",
        "Configured Maven for automated build, testing, packaging, and artifact management.",
        "Automated WAR deployment to Apache Tomcat servers.",
        "Designed for reliable one-click deployment with incident monitoring using PagerDuty on Linux environments."
      ],
      githubUrl: "https://github.com/mdsofi1/jenkins-practice",
      secondaryGithubUrl: "https://github.com/mdsofi1/maven-project",
      workflowSteps: [
        "GitHub Webhook",
        "Jenkins Trigger",
        "Maven Build & Test",
        "WAR Packaging",
        "Tomcat Auto-Deploy",
        "PagerDuty Alerting"
      ],
      terminalSnippet: {
        command: "jenkins-pipeline --trigger=github-webhook --env=production",
        outputLines: [
          "[INFO] GitHub push event received on main branch",
          "[INFO] Triggering Jenkins declarative pipeline #42",
          "[INFO] Maven clean package: BUILD SUCCESS (34 unit tests passed)",
          "[INFO] Deploying application.war to Apache Tomcat /webapps",
          "[INFO] Health check 200 OK — zero downtime deployment completed",
          "[INFO] PagerDuty status: All monitors green"
        ]
      }
    },
    {
      id: "proj-2",
      name: "Infrastructure Automation and Web Deployment Using Ansible",
      subtitle: "Cloud Provisioning & Configuration Management",
      description: "Automated application deployment, server configuration, and AWS cloud infrastructure provisioning using Ansible and Terraform.",
      technologies: ["Ansible", "Jenkins", "Terraform", "AWS EC2", "Nginx", "Tomcat"],
      contributions: [
        "Automated application deployment and server configuration using Ansible Playbooks.",
        "Provisioned and managed AWS cloud infrastructure using Terraform (Infrastructure as Code).",
        "Deployed applications on AWS EC2 instances and configured Nginx and Tomcat servers.",
        "Automated end-to-end deployment workflows, reducing manual effort and ensuring consistent releases."
      ],
      githubUrl: "https://github.com/mdsofi1/ansible-ci-cd",
      workflowSteps: [
        "Terraform AWS Init",
        "EC2 Instance Provisioning",
        "Ansible Playbook Execution",
        "Nginx & Tomcat Config",
        "Automated Release"
      ],
      terminalSnippet: {
        command: "ansible-playbook -i aws_ec2.yml site.yml --check=false",
        outputLines: [
          "PLAY [Configure Web and App Servers on AWS EC2] ********************",
          "TASK [terraform : ensure AWS EC2 infrastructure state] => ok: [ec2-54-x-x-x]",
          "TASK [nginx : install and configure reverse proxy] => changed: [ec2-54-x-x-x]",
          "TASK [tomcat : deploy web application bundle] => changed: [ec2-54-x-x-x]",
          "PLAY RECAP *********************************************************",
          "ec2-54-x-x-x : ok=5  changed=2  unreachable=0  failed=0  rescued=0"
        ]
      }
    },
    {
      id: "proj-3",
      name: "AI Research & Development Projects",
      subtitle: "Bharat Unnati AI Fellowship / AICTE NEAT 6.0",
      description: "Contributed to AI/ML-driven automation projects, including an AI Learning Coach using n8n and Google Gemini, and an AI-Powered CRM Assistant with automated evaluation workflows.",
      technologies: ["n8n", "Google Gemini", "Python", "Automation Workflows", "Model Evaluation"],
      contributions: [
        "AI Learning Coach: Built intelligent workflow automation integrating n8n with Google Gemini API.",
        "AI-Powered CRM Assistant: Automated customer context analysis, automated ticket classification, and workflow triggers.",
        "Gained hands-on experience with automation workflows, model evaluation, and data-driven development directly applicable to DevOps tooling."
      ],
      githubUrl: "https://github.com/mdsofi1/AI-Interview-Assistant",
      workflowSteps: [
        "Event Trigger",
        "n8n Node Pipeline",
        "Google Gemini Analysis",
        "Model Evaluation Guardrail",
        "CRM Action Dispatch"
      ],
      terminalSnippet: {
        command: "n8n execute --workflow=gemini-crm-assistant.json",
        outputLines: [
          "[n8n] Workflow execution started: ID #8129",
          "[Node: Webhook] Inbound customer interaction detected",
          "[Node: Gemini-API] Prompt evaluated in 320ms with structured response",
          "[Node: Evaluation] Validation checks passed (safety score: 0.98)",
          "[Node: Dispatch] Automated CRM record updated successfully"
        ]
      }
    }
  ] as Project[],

  certifications: [
    {
      id: "cert-1",
      title: "AWS Cloud Practitioner Essentials",
      issuer: "Amazon Web Services (AWS)",
      date: "May 2026",
      badge: "Cloud Foundation"
    },
    {
      id: "cert-2",
      title: "Infosys: Certified in HTML5 & CSS3",
      issuer: "Infosys",
      date: "Certified",
      badge: "Web Technologies"
    },
    {
      id: "cert-3",
      title: "Accenture Nordics Software Engineering Job Simulation",
      issuer: "Forage",
      date: "2025",
      badge: "Job Simulation"
    },
    {
      id: "cert-4",
      title: "Deloitte Australia – Technology Job Simulation",
      issuer: "Forage",
      date: "2025",
      badge: "Job Simulation"
    }
  ] as Certification[],

  education: {
    degree: "B.Tech – Electronics & Computer Engineering",
    institution: "Visvesvaraya Technological University, Kalaburagi",
    period: "2022 – 2026",
    cgpa: "8.0/10",
    description: "Coursework focused on Computer Engineering, Operating Systems, Networking, Cloud Infrastructure, and Software Engineering practices."
  },

  githubRepositories: [
    {
      name: "ansible-ci-cd",
      description: "Ansible playbooks and configuration scripts for automated CI/CD server deployments.",
      language: "Ansible / YAML / Shell",
      url: "https://github.com/mdsofi1/ansible-ci-cd",
      category: "DevOps"
    },
    {
      name: "jenkins-practice",
      description: "Jenkins declarative pipelines with Git integration, automated webhooks, and build stages.",
      language: "Jenkinsfile / Groovy",
      url: "https://github.com/mdsofi1/jenkins-practice",
      category: "DevOps"
    },
    {
      name: "maven-project",
      description: "Maven project configuration for automated build, unit testing, and artifact packaging.",
      language: "Java / XML",
      url: "https://github.com/mdsofi1/maven-project",
      category: "DevOps"
    },
    {
      name: "ansible-example-static-website",
      description: "Ansible playbook example for provisioning and configuring static web servers.",
      language: "YAML / HTML",
      url: "https://github.com/mdsofi1/ansible-example-static-website",
      category: "Automation"
    },
    {
      name: "demowebapp",
      description: "Java web application used as a deployment artifact target for Apache Tomcat and CI/CD pipelines.",
      language: "Java",
      url: "https://github.com/mdsofi1/demowebapp",
      category: "Application"
    },
    {
      name: "AI-Interview-Assistant",
      description: "Modern AI-powered interview workflow system built with React, features timed evaluations and data persistence.",
      language: "TypeScript / React",
      url: "https://github.com/mdsofi1/AI-Interview-Assistant",
      category: "Application"
    }
  ] as GitHubRepo[]
};
