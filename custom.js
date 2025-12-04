document.addEventListener("DOMContentLoaded", () => {
  // Translate Table of Contents title
  const tocTitle = document.querySelector(".toc-title");
  if (tocTitle) tocTitle.textContent = "תוכן העניינים";

  // Translate Search placeholder text
  const searchInput = document.querySelector("input.search-input");
  if (searchInput) searchInput.setAttribute("placeholder", "חפש");

  // Translate navigation buttons text (next, previous)
  const nextLinks = document.querySelectorAll(".nav-next a");
  nextLinks.forEach(link => link.textContent = "הבא");

  const prevLinks = document.querySelectorAll(".nav-prev a");
  prevLinks.forEach(link => link.textContent = "הקודם");

  // Translate author label
  const authorLabels = document.querySelectorAll(".quarto-meta-author > label");
  authorLabels.forEach(label => label.textContent = "מחבר");

  // Translate published label
  const publishedLabels = document.querySelectorAll(".quarto-meta-published > label");
  publishedLabels.forEach(label => label.textContent = "פורסם");

  // Translate "Preface" heading if it exists
  const prefaceHeadings = document.querySelectorAll("h1, h2, h3, h4");
  prefaceHeadings.forEach(heading => {
    if (heading.textContent.trim() === "Preface") {
      heading.textContent = "הקדמה";
    }
  });
});
