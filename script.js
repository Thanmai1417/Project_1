// Initialize Pie Chart
const ctx = document.getElementById('emotionChart').getContext('2d');
const emotionChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['Love', 'Responsibilities', 'Affection', 'Sadness', 'Parenting', 'Financial struggle','Health'],
        datasets: [{
            label: 'Emotions',
            data: [20, 10, 10, 10, 20, 20, 10 ], // Example data
            backgroundColor: ['#ff9999', '#66b3ff', '#99ff99', '#ffcc99', '#ffcc10', '#92ff34', '#ff9923' ],
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            tooltip: {
                callbacks: {
                    label: function(context) {
                        let label = context.label || '';
                        if (context.parsed) {
                            label += ': ' + context.parsed + '%';
                        }
                        return label;
                    }
                }
            }
        }
    }
});

// Image Carousel
let index = 0;
const images = document.querySelectorAll('.carousel-image');
function showNextImage() {
    images[index].style.display = 'none';
    index = (index + 1) % images.length;
    images[index].style.display = 'block';
}
setInterval(showNextImage, 3000); // Change image every 3 seconds

// Surprise Button
document.getElementById('surpriseBtn').addEventListener('click', () => {
    const audio = document.getElementById('surpriseAudio');
    audio.play();
});


