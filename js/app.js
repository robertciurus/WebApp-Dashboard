//alert banner + click event listener on close button

const alertBox = document.getElementById("alert");

alertBox.innerHTML = " <div class='alert-banner'>  <p><strong>Alert:</strong> You have <strong>6</strong> overdue tasks to complete</p><p class='alert-banner-close'>x</p> </div> "

alertBox.addEventListener("click", e => {
  const element = e.target

  if (element.classList.contains("alert-banner-close")) {
    alertBox.style.display = "none"
  }

})


//***charts***//

//traffic chart

const trafficCanvas = document.getElementById("traffic-chart");

let trafficData = {
  labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3",
"4-10", "11-17", "18-24", "25-31"],
  datasets: [{
    data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500,
2500],
    backgroundColor: 'rgba(116, 119, 191, .3)',
    borderWidth: 1,
}]
};

let trafficOptions = {
  aspectRatio: 2.5,
  animation: {
    duration: 0
  },
  scales: {
    yAxes: [{
      ticks: {
        beginAtZero:true
      }
    }]
  },
  legend : {
      display: false
    }
  };

let trafficChart = new Chart(trafficCanvas, {
  type: 'line',
  data: trafficData,
  options: trafficOptions
});

//daily chart

const dailyCanvas = document.getElementById("daily-chart");

const dailyData = {
  labels: ["S", "M", "T", "W", "T", "F", "S"],
  datasets: [{
    label: '# of Hits',
    data: [75, 115, 175, 125, 225, 200, 100],
    backgroundColor: '#7477BF',
    borderWidth: 1
  }]
};
const dailyOptions = {
  scales: {
    yAxes: [{
      ticks: {
        beginAtZero:true
      }
    }]
  },
  legend : {
    display: false
  }
}

let dailyChart = new Chart(dailyCanvas, {
  type: 'bar',
  data: dailyData,
  options: dailyOptions
});

//doughnut chart

const mobileCanvas = document.getElementById("mobile-chart");

const mobileData = {
  labels: ["Desktop", "Tablet", "Phones"],
  datasets: [{
    label: '# of Users',
    data: [2000, 550, 500],
    borderWidth: 0,
    backgroundColor: [
      '#7477BF',
      '#78CF82',
      '#51B6C8'
    ]
  }]
};

const mobileOptions = {
  legend: {
    position: 'right',
    labels: {
      boxWidth: 20,
      fontStyle: 'bold'
    }
  }
}

let mobileChart = new Chart(mobileCanvas, {
  type: 'doughnut',
  data: mobileData,
  options: mobileOptions
});

//message widget

const user = document.getElementById("userField");
const message = document.getElementById("messageField");
const send = document.getElementById("send");

send.addEventListener('click', () => {
  if (user.value === "" && message.value === "") {
    alert("Please fill out user and message fields before sending");
  } else if (user.value === "" ) {
    alert("Please fill out user field before sending");
  } else if (message.value === "" ) {
    alert("Please fill out message field before sending");
  } else {
    alert("Message successfully sent!");
  }
});
