import DS from 'ember-data';

export default DS.Model.extend({

  body: DS.attr('string'),
  user: DS.belongsTo('string'),
  post: DS.belongsTo('post')
});
