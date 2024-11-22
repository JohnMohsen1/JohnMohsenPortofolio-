
// btn hover //

const btns = document.querySelectorAll('.btn');

  btns.forEach(btn => {

    btn.addEventListener("mouseover", () =>{
        btn.style.transform = "translateY(-0.5em)";
    } )

    btn.addEventListener('mouseout', ()=> {
        btn.style.transform = "translateY(0px)";
    })}
)

// download resume //

  const resume = document.querySelector('.resume')

  resume.addEventListener('click', () => {
    const link = document.createElement('a');
    link.href = 'https://drive.google.com/file/d/1tUyApo2vymzW25J2J7G6YQDTzPMDxpBJ/view?usp=sharing';
    link.download = 'John Mohsen UI/UX Designer.pdf';
    link.click();
})

// menu circle when clicked //

  const menuCircleContainer = document.querySelector('.heroHeaderCircleContainer')
  const menuCircle = document.getElementById('menucircle')
  const closeCircle = document.getElementById('closecircle');

  window.onscroll = function () {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100){
      menuCircle.style.display = 'block'
      menuCircle.style.animation = 'menuCircleOpenMov 0.5s ease-in-out'
    } else {
      document.getElementById('menucircle').style.display = 'none'
      document.getElementById('homecircle').style.display = 'none'
      document.getElementById('aboutcircle').style.display = 'none'
      document.getElementById('workcircle').style.display = 'none'
      document.getElementById('contactcircle').style.display = 'none'
      closeCircle.style.display = 'none'
      document.querySelector('.heroHeaderCircle').style.animation = 'menuCircleCloseMov 0.5s ease-in-out'
    }
  }


  menuCircle.addEventListener('click', menuResult => {   
    document.getElementById('homecircle').style.display = 'block'
    document.getElementById('aboutcircle').style.display = 'block'
    document.getElementById('workcircle').style.display = 'block'
    document.getElementById('contactcircle').style.display = 'block'
      closeCircle.style.display = 'block'
      closeCircle.style.animation = 'none'
      menuCircle.style.display = 'none'
    
  });

  closeCircle.addEventListener('click', closeResult => {
    document.getElementById('homecircle').style.display = 'none'
    document.getElementById('aboutcircle').style.display = 'none'
    document.getElementById('workcircle').style.display = 'none'
    document.getElementById('contactcircle').style.display = 'none'
    closeCircle.style.display = 'none'
    menuCircle.style.display = 'block'
    menuCircle.style.animation = 'none'
  })



// Portofolio show //

document.addEventListener('DOMContentLoaded', () => {
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    const modal = document.getElementById('project-modal');
    const closeModal = document.querySelector('.closeBtn');

    const projectTitle = document.getElementById('project-title');
    const projectImage = document.getElementById('project-image');

    const projectData = {
        project1: {
          title: "Abiosa furniture website UI/UX caseStudy",
          image: "MyWorksImgs/UI UX project.png",
        },

        project2: {
          title: "UI/UX case study for E-commerce app",
          image: "MyWorksImgs/prime UI UX .png",
        },

        project3: {
          title: "UI for Fox Gaming Market",
          image: "MyWorksImgs/gaming UI.png",
        },

        project4: {
          title: "UI/UX for Gym Website",
          image: "MyWorksImgs/gym UI UX.png",
        },

        project5: {
          title: "UI for E-teaching Website",
          image: "MyWorksImgs/E-teaching UI.png",
        },

        project6: {
          title: "UI/UX for Music application",
          image: "MyWorksImgs/music UI.png",
        },

        project7: {
          title: "UI for cyber security website",
          image: "MyWorksImgs/cyber UI.png",
        },
      };

      portfolioItems.forEach((item) => {
        item.addEventListener('click', () => {
          const projectId = item.dataset.project;
    
          // Set modal content based on project data
          if (projectData[projectId]) {
            projectTitle.textContent = projectData[projectId].title;
            projectImage.src = projectData[projectId].image;
          }
    
          // Show modal
          modal.style.display = 'flex';
        });
      });

      closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
      });
    
      // Close modal on outside click
      modal.addEventListener('click', (e) => {
        if (e.target === modal) {
          modal.style.display = 'none';
        }
      });
    });


// menu in monile version // 

  const menu = document.querySelector('.menu');
  const close =document.querySelector('.close')

  menu.addEventListener('click', result);


  function result (e) {
    e.preventDefault();
    menu.style.display = 'none';
    closeBox.style.display = 'block';
  }

  close.addEventListener('click', result2)

  function result2 (x) {
    x.preventDefault();
    menu.style.display = 'block';
  }