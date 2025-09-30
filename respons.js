$(document).ready(function () {
  const texts = [
    "an Informatics Student '24",
    "a 2nd Ambassador of the Faculty of Computer Science Jember University",
    "a Research and Development Staff of HMIF UNEJ"
  ];
  let count = 0,
    index = 0,
    currentText = "",
    isDeleting = false;

  function type() {
    currentText = texts[count];
    if (!isDeleting) {
      $("#typed").text(currentText.substring(0, index++));
      if (index > currentText.length) {
        isDeleting = true;
        setTimeout(type, 1500);
        return;
      }
    } else {
      $("#typed").text(currentText.substring(0, index--));
      if (index < 0) {
        isDeleting = false;
        count = (count + 1) % texts.length;
      }
    }
    setTimeout(type, isDeleting ? 50 : 100);
  }
  type();

  // --- Navbar Active Scroll ---
  const sections = $("section");
  const navLinks = $(".navbar-nav .nav-link");

  $(window).on("scroll", function () {
    let current = "";

    sections.each(function () {
      const sectionTop = $(this).offset().top - 70; // offset biar pas
      const sectionHeight = $(this).outerHeight();
      if (
        $(window).scrollTop() >= sectionTop &&
        $(window).scrollTop() < sectionTop + sectionHeight
      ) {
        current = $(this).attr("id");
      }
    });

    navLinks.removeClass("active");
    navLinks.each(function () {
      if ($(this).attr("href") === "#" + current) {
        $(this).addClass("active");
      }
    });
  });
});
