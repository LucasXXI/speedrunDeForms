import Form from '../models/Form.js';

class FormsController {
  async show(req, res) {
    const forms = await Form.find({});
    
    return res.send({forms});
  }

  async showOne(req, res) {
    return res.send(req.params.id);
  }

  async saveForm(req, res) {
    const { name, items } = req.body;

    try {
      if (!name) return res.status(400).send({ Error: 'Need a name'});

      if (!typeof items === 'object' && items.length != 25) 
        return res.send({ Error: 'Items is bad formated.'});

      await Form.create({ name, items });
    } catch (err) {
      return res.status(400).send({ Error: 'Try again.'});
    }
  }
}

export default new FormsController();