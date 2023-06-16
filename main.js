const dropdownCreate = document.querySelector('.dropdown-create');
const dropdownMenuCreate = document.querySelector('.dropdown-menu-create');

dropdownCreate.addEventListener('click', function() {
  dropdownCreate.classList.toggle('open');
});

// document.addEventListener('click', (e) => {
//   if (!e.target.classList.contains('dropdown-menu-create')) {
//     dropdownCreate.classList.remove('open');
//   }
// })


const searchInput = document.querySelector('input[type="search"]');
const searchIcon = document.querySelector('.search i');

searchInput.addEventListener('focus', () => {
  searchIcon.style.display = 'none';
  searchInput.style.paddingLeft = '15px';
})

searchInput.addEventListener('blur', () => {
  searchIcon.style.display = 'block';
  searchInput.style.paddingLeft = '40px';
})


function showNotification() {
  const notificationMenu = document.querySelector('#notification-menu');
  const notificationIcon = document.querySelector('.notification .icon');
  notificationMenu.classList.toggle('active');
  if (notificationMenu.classList.contains('active')) {
    notificationIcon.style.fill = "black";
  } else {
    notificationIcon.style.fill = "#5f5f5f";
  }
}


const searchMenu = document.querySelector('#search-dropdown');

function showSearchDropdown() {
  searchMenu.classList.toggle('show');
}


document.addEventListener('click', (e) => {
  if (e.target.id !== "search-dropdown") {
    if (searchMenu.classList.contains('show')) {
      searchMenu.classList.remove('show');
    }
  }
}, {capture: true})

const inboxMenu = document.querySelector(".inbox-menu");

function showInboxMenu() {
  inboxMenu.classList.toggle('show');
}

const inboxSearchInput = document.querySelector(".message-search input[type='search']");
const inboxSearchIcon = document.querySelector(".message-search i");

inboxSearchInput.addEventListener('focus', () => {
  inboxSearchIcon.style.display = "none";
  // inboxSearchInput.style.paddingLeft = "15px";
  // inboxSearchInput.style.marginTop = "25px";
})

inboxSearchInput.addEventListener('blur', () => {
  inboxSearchIcon.style.display = "inline";
  // inboxSearchInput.style.paddingLeft= "40px";
  // inboxSearchInput.style.marginBottom = "0px";
})

const messageMenu = document.querySelector('#message-dropdown');
const messageIcon = document.querySelector('.message .icon');

function showMessageMenu() {
  messageMenu.classList.toggle('show');
  if (messageMenu.classList.contains('show')) {
    messageIcon.style.fill = "black";
  } else {
    messageIcon.style.fill = "#5f5f5f";
  }
}

// document.addEventListener('click', (e) => {
//   if (e.target.id !== "message-dropdown") {
//     if (messageMenu.classList.contains('show')) {
//       messageMenu.classList.remove('show');
//       messageIcon.style.fill = "#5f5f5f";
//     }
//   }
// },{capture: true})

document.addEventListener('click', (e) => {
  if (!e.target.classList.contains('inboxMenu')) {
    if (inboxMenu.classList.contains('show')) {
      inboxMenu.classList.remove('show');
    }
  }
}, {capture: true})


const optionsMenu = document.querySelector('.options-menu');

function showOptionsMenu() {
  const optionsIcon = document.querySelector('.options-menu-icon')
  optionsMenu.classList.toggle('show');

  if (optionsMenu.classList.contains('show')) {
    optionsIcon.style.fill = "black";
  } else {
    optionsIcon.style.fill = "#5f5f5f";
  }
}

document.addEventListener('click', (e) => {
  if (!e.target.classList.contains('options-menu')) {
    if (optionsMenu.classList.contains('show')) {
      optionsMenu.classList.remove('show');
    }
  }
}, {capture: true})


// Profile page tab functionality

document.addEventListener('DOMContentLoaded', function() {
  var tabLinks = document.querySelectorAll('.tab-link');
  var tabPanels = document.querySelectorAll('.tab-panel');

  function showPanel(panelId) {
    tabPanels.forEach(function(panel) {
      panel.classList.remove('active');
    });
    document.getElementById(panelId).classList.add('active');
  }

  tabLinks.forEach(function(link) {
    link.addEventListener('click', function() {
      var tabId = this.getAttribute('data-tab');
      tabLinks.forEach(function(link) {
        link.classList.remove('active');
      });
      this.classList.add('active');
      showPanel(tabId);
    });
  });


  var activeTabLink = document.querySelector('.tab-link.active');
  var activeTabId = activeTabLink.getAttribute('data-tab');
  showPanel(activeTabId);
});
