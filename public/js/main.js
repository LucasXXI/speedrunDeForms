// Axios, Jquery
const btnSend = document.querySelector('button');

$('.item input').mask('000.000.000.000.000,00', {reverse: true});

btnSend.addEventListener('click', async () => {
  const name = document.querySelector('input').value
  const inputs = document.querySelectorAll('.item input');

  const data = {
    name,
    items: [],
  };

  for (input of inputs) {
    if (0 < input.value.length) {
      data.items.push(
        Number((input.value).replaceAll('.', '').replace(',', '.'))
      );
    } else {
      data.items.push(0);
    }
  }

  console.log(JSON.stringify(data));

  await axios({
    method: 'post',
    url: '/api/form',
    data
  });
});