let currentProjectIndex = 0;
const projects = document.getElementsByClassName('project');

function changeProject(n) {
  projects[currentProjectIndex].classList.remove('active');
  currentProjectIndex =
    (currentProjectIndex + n + projects.length) % projects.length;
  projects[currentProjectIndex].classList.add('active');
}

changeProject(0); // Display the first project initially
