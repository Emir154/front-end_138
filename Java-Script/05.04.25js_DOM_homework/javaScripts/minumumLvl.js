//traffic lights
let lights = document.querySelectorAll('.light');
let current = 0;

document.getElementById('switch').onclick = () => {
    lights.forEach(light => light.classList.remove('active'));

    lights[current].classList.add('active');

    current = (current + 1) % lights.length;
};