const toggleSwitch = document.querySelector('#theme-switcher');
const wallpaper = document.querySelector('.bg-wrapper');
const currentTheme = localStorage.getItem("theme");
const page = document.querySelector(".all-page");
  
if (currentTheme) {
    page.setAttribute("data-theme", currentTheme);
  
    if (currentTheme === "dark") {
      	toggleSwitch.checked = true;
      	wallpaper.classList.add('dark');
    } else {
        toggleSwitch.checked = false;
    }
}
  
function switchTheme(e) {
    if (e.target.checked) {
      	page.setAttribute("data-theme", "dark");
		  localStorage.setItem("theme", "dark");
      	wallpaper.classList.remove('light');
      	void wallpaper.offsetWidth;
      	wallpaper.classList.add('dark');
    } else {
      	page.setAttribute("data-theme", "light");
		  localStorage.setItem("theme", "light");
      	wallpaper.classList.remove('dark');
      	void wallpaper.offsetWidth;
      	wallpaper.classList.add('light');
    }
}
  
toggleSwitch.addEventListener("change", switchTheme, false);