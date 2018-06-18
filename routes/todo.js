const Handlers = require('../handlers/todo.js');

const routes = [];
module.exports = routes;

routes.push({
  method: 'GET',
  path: '/',
  handler: Handlers.renderAddPage,
  config: {
    tags: ['api'],
    description: 'Page to render todo.html page',
  },
});

routes.push({
  method: 'POST',
  path: '/',
  handler: Handlers.add,
  config: {
    tags: ['api'],
    description: 'Page to add todo',
  },
});

routes.push({
  method: 'GET',
  path: '/edit/{id_index}',
  handler: Handlers.renderEdit,
  config: {
    tags: ['api'],
  },
})

routes.push({
  method: 'POST',
  path: '/edit/{id_index}',
  handler: Handlers.edit,
  config: {
    tags: ['api'],
    description: 'Page to add todo',
  },
});

routes.push({
  method: 'GET',
  path: '/delete/{id_index}',
  handler: Handlers.delete,
  config: {
    tags: ['api'],
  },
})
