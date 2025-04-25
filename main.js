const datepicker = require('js-datepicker');
const { DateTime } = require('luxon');

const picker = datepicker('#birthdate', {
  formatter: (input, date, instance) => {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    input.value = `${year}-${month}-${day}`;
  }
});

function calculateAge(birthDateStr) {
  const birthDate = DateTime.fromISO(birthDateStr); // "YYYY-MM-DD"
  const now = DateTime.now();

  const diff = now.diff(birthDate, ['years', 'months', 'days']).toObject();
  const years = Math.floor(diff.years);
  const months = Math.floor(diff.months);
  const days = Math.floor(diff.days);

  return { years, months, days };
}

// مثال: جلب التاريخ من input
const input = document.querySelector('#birthdate');
const button = document.querySelector('button');
const result = document.querySelector('#result');

button.addEventListener('click', () => {
  const date = input.value; // لازم يكون بصيغة YYYY-MM-DD
  const age = calculateAge(date);
  result.textContent = `عمرك هو: ${age.years} سنة، ${age.months} شهر و ${age.days} يوم`;
});




