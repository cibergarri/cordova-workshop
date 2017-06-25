var EmployeeListView = function (service) {

    var employees;

    this.initialize = function() {
        this.$el = $('<div/>');
        var self=this;
        service.findByName("").done(function(employees) {
           self.setEmployees(employees);
        });
        this.render();
    };

    this.setEmployees = function(list) {
        employees = list;
        this.render();
    }

    this.render = function() {
        
        this.$el.html(this.template(employees));
        return this;
    };

    this.initialize();

}