const nav = document.querySelector(".site-nav");
const menuToggle = document.querySelector(".menu-toggle");

menuToggle?.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

document.querySelectorAll(".site-nav a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuToggle?.setAttribute("aria-expanded", "false");
  });
});

document.querySelector("#year").textContent = new Date().getFullYear();

// Project cards open full documentation pages
const projectLinks = {
  "Multi-Account Cloud Governance": "projects/multi-account-cloud-governance.html",
  "Infrastructure Deployment Automation": "projects/infrastructure-deployment-automation.html",
  "Cloud Fleet Operations": "projects/cloud-fleet-operations.html",
  "Credential Rotation Automation": "projects/credential-rotation-automation.html",
  "Security & Compliance Monitoring": "projects/security-compliance-monitoring.html",
  "Cloud Cost & Operations Reviews": "projects/cloud-cost-operations-reviews.html",
  "DNS & Disaster Recovery Operations": "projects/dns-disaster-recovery-operations.html",
  "Cloud Email Migration & Operations": "projects/cloud-email-migration-operations.html",
  "Cloud Web Hosting & LAMP Stack Operations": "projects/cloud-web-hosting-lamp-stack-operations.html",
  "Serverless Application Architecture": "projects/serverless-application-architecture.html",
  "Container DevOps & Application Delivery": "projects/container-devops-application-delivery.html"
};

document.querySelectorAll(".case-study").forEach((card) => {
  const title = card.querySelector("summary strong")?.textContent?.trim();

  if (title && projectLinks[title]) {
    card.removeAttribute("open");

    card.addEventListener("click", (event) => {
      event.preventDefault();
      window.location.href = projectLinks[title];
    });
  }
});
