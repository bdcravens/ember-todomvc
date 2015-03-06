Todos.Router.map(function() {
    this.resource('todos', { path: '/' }),
    this.route('foo')
});

Todos.TodosRoute = Ember.Route.extend({
    model: function() {
        return this.store.find('todo');
    }
});
