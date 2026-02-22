document.addEventListener("DOMContentLoaded", () => {
  // 1. จัดการเรื่อง TABS (สลับสีขาว-ดำ)
  const tabs = document.querySelectorAll(".faq__tab");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      // ลบคลาส active และตั้งค่า aria ออกจากทุกปุ่ม
      tabs.forEach((t) => {
        t.classList.remove("faq__tab--active");
        t.setAttribute("aria-selected", "false");
      });

      // เพิ่มคลาส active ให้ปุ่มที่ถูกกด
      tab.classList.add("faq__tab--active");
      tab.setAttribute("aria-selected", "true");

      // (Optional) ตรงนี้คุณสามารถเพิ่ม Logic การกรอง Category ได้ในอนาคต
      console.log("Category selected:", tab.dataset.category);
    });
  });

  // 2. จัดการเรื่อง ACCORDION (Slide ลงมา)
  const questions = document.querySelectorAll(".faq__question");

  questions.forEach((question) => {
    question.addEventListener("click", () => {
      const item = question.parentElement;
      const isOpen = item.classList.contains("is-open");

      // ปิดอันอื่นก่อน (ถ้าต้องการให้เปิดได้ทีละอันเดียว)
      document
        .querySelectorAll(".faq__item")
        .forEach((i) => i.classList.remove("is-open"));

      // Toggle คลาส is-open
      if (isOpen) {
        item.classList.remove("is-open");
        question.setAttribute("aria-expanded", "false");
      } else {
        item.classList.add("is-open");
        question.setAttribute("aria-expanded", "true");
      }
    });
  });
});
