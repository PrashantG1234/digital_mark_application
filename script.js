document.getElementById("contactButton").addEventListener("click", function () {
  window.location.href = "contact_us.html";
});

const dots = document.querySelectorAll(".dot");
const serviceItems = document.querySelectorAll(".service-item");

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    serviceItems.forEach((item) => item.classList.remove("service-hover"));
    dots.forEach((d) => d.classList.remove("active"));
    serviceItems[index].classList.add("service-hover");
    dot.classList.add("active");
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const detailItems = document.querySelectorAll(".detail-item");
  const projectImage = document.querySelector(".project-image img");

  const images = [
    "media/images/2-2.png",
    "media/images/image.png",
    "media/images/1-1.png",
  ];

  detailItems.forEach((item, index) => {
    item.addEventListener("click", () => {
      detailItems.forEach((detail) => detail.classList.remove("active"));
      item.classList.add("active");
      projectImage.src = images[index];
    });
  });
});
