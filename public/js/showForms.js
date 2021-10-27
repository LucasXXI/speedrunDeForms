async function getForm() {
  const { data } = await axios({
    method: 'get',
    url: '/api/form'
  });

  const container = document.querySelector('.container');

  for (form of await data.forms) {
    const item = document.createElement('div');
    const id = document.createElement('p');
    id.innerHTML = 'Id: ' + form._id
    const name = document.createElement('p');
    name.innerHTML = 'Name: ' + form.name

    for (info of [id, name]) item.appendChild(info);

    const R$ = form.items;

    for (var i = 0;i < R$.length;i++) R$[i] = R$[i].toFixed(2).replace('.', ',');

    for (var i = 0;i < R$.length;i += 5) {
      
      const p = document.createElement('p');
      p.innerHTML = 
        `Item ${i + 1}: R$${R$[i]}
         Item ${i + 2}: R$${R$[i + 1]} 
         Item ${i + 3}: R$${R$[i + 2]} 
         Item ${i + 4}: R$${R$[i + 3]} 
         Item ${i + 5}: R$${R$[i + 4]}`;


      item.appendChild(p);
    }

    item.className = 'form';

    container.appendChild(item);
  }
}

getForm();