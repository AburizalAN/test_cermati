const highlights = [
  {
    title: 'Consult',
    desc: 'Co-create, design thinking; strengthen infrastructure resist granular. Revolution circular, movements or framework social impact low-hanging fruit. Save the world compelling revolutionary progress.',
    icon: '<i class="fa-regular fa-comments"></i>',
  },
  {
    title: 'Design',
    desc: 'Policymaker collaborates collective impact humanitarian shared value vocabulary inspire issue outcomes agile. Overcome injustice deep dive agile issue outcomes vibrant boots on the ground sustainable.',
    icon: '<i class="fa-solid fa-paintbrush"></i>',
  },
  {
    title: 'Develop',
    desc: 'Revolutionary circular, movements a or impact framework social impact lowhanging. Save the compelling revolutionary inspire progress. Collective impacts and challenges for opportunities of thought provoking.',
    icon: '<i class="fa-solid fa-cubes"></i>',
  },
  {
    title: 'Marketing',
    desc: 'Peaceful; vibrant paradigm, collaborative cities. Shared vocabulary agile, replicable, effective altruism youth. Mobilize commitment to overcome injustice resilient, uplift social transparent effective.',
    icon: '<i class="fa-solid fa-bullhorn"></i>',
  },
  {
    title: 'Manage',
    desc: 'Change-makers innovation or shared unit of analysis. Overcome injustice outcomes strategize vibrant boots on the ground sustainable. Optimism, effective altruism invest optimism corporate social.',
    icon: '<i class="fa-solid fa-bars-progress"></i>',
  },
  {
    title: 'Evolve',
    desc: 'Activate catalyze and impact contextualize humanitarian. Unit of analysis overcome injustice storytelling altruism. Thought leadership mass incarceration. Outcomes big data, fairness, social game-changer.',
    icon: '<i class="fa-solid fa-chart-line"></i>',
  },
];

let renderHighlights = '';

highlights.forEach((item, i) => {
  renderHighlights += `
  <div class="highlight-item">
    <div class="icon">
      ${item.icon}
    </div>
    <h2>${item.title}</h2>
    <p>${item.desc}</p>
  </div>
  `;
})

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}


document.getElementById("highlight-wrapper").innerHTML = renderHighlights;

const newsletter = document.querySelector(".newsletter");
const newsletterClose = document.querySelector(".newsletter .close");
const notificationPanel = document.querySelector(".notification-panel");
const notifClose = document.querySelector(".notification-panel .close");

let isShowNotifPanel = true

newsletterClose.addEventListener('click', () => {
  newsletter.style.transform = "translateY(100%)";
  const date = new Date();
  date.setTime(date.getTime() + (10 * 60 * 1000));
  document.cookie = 'isScroll=0; expires=' + date.toUTCString() + '; path=/';
});

notifClose.addEventListener('click', () => {
  notificationPanel.style.transform = "translateY(-100%)";
  document.body.style.marginTop = (-1 * notificationPanel.clientHeight) + 'px';
  isShowNotifPanel = false;
})

document.body.style.marginTop = (-1 * notificationPanel.clientHeight) + 'px';

window.onscroll = function() {
  const isScrollCookie = getCookie('isScroll');
  const isScroll = isScrollCookie == '' ? 1 : parseInt(isScrollCookie);
  if (isScroll && ((window.innerHeight + window.scrollY) >= (document.body.scrollHeight / 3))) {
      newsletter.style.transform = "translateY(0)";
  } else {
      newsletter.style.transform = "translateY(100%)";
  }

  if (isShowNotifPanel) {
    notificationPanel.style.transform = "translateY(0)";
    document.body.style.marginTop = '0px';
  }
};