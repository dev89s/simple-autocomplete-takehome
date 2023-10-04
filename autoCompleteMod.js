const tz = await fetch('./tz.json');
const timezone = await tz.json();
const timeZoneArr = [];
Object.keys(timezone).forEach(key => {
  timezone[key].forEach(city => {
    timeZoneArr.push(city);
  })
});

const cityInput = document.querySelector('.city-input');
const cityList = document.querySelector('.city-list');

cityInput.addEventListener('keyup', (e) => {
  const matches = []
  if (cityInput.value != '') {
    cityList.style.visibility = 'visible';
    timeZoneArr.forEach(item => {
      if (item.city.toLowerCase().indexOf(cityInput.value.toLowerCase()) == 0) {
        if (!matches.includes(item.city))
          matches.push(item.city);
      }
    })
    console.log(matches);
    cityList.innerHTML = '';
    matches.forEach((city) => {
      const option = document.createElement('option');
      option.value = city;
      option.textContent = city
      cityList.size = matches.length
      cityList.appendChild(option);
    });
    const option = cityList.firstChild;
    if (option != null)
      option.selected = 'true';
  }
  else {
    cityList.innerHTML = '';
    cityList.style.visibility = 'hidden';
    cityList.size = 1;
  }
});

const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
  console.log('submited');
  if (cityList.childNodes.length == 1) {
    cityInput.value = cityList.firstChild.value;
  } else {
    e.preventDefault();
  }
});

cityList.addEventListener('click', (e) => {
  console.log(cityList.option);
})
