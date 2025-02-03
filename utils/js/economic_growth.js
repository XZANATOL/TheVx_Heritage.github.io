function onElementInView(element, callback) {
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        callback(entry.target); // Run the callback when the element is in the viewport
        observer.unobserve(entry.target); // Optional: Stop observing after it's triggered once
      }
    });
  });

  observer.observe(element);
}

// **********************************
// Contributed Countries Start
// **********************************
const data = {
  labels: ["الدول المشاركة"],
  datasets: [{
    label: "الدول المشاركة",
    data: [195],
    backgroundColor: [
      '#91B9B4',
    ],
    borderColor: [
      '#91B9B4',
    ],
    borderWidth: 1
  }]
};

const config = {
  type: 'doughnut',
  data: data,
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: { label: () => {return ""} }
      }
    }
  }
};

function contibutedCountriesChart(){
  const ctx = document.querySelector('#countriesContributed').getContext('2d');
  const countriesContributed = new Chart(ctx, config);
}
// **********************************
// Contributed Countries End
// **********************************

onElementInView(document.querySelector('#countriesContributed'), contibutedCountriesChart)
