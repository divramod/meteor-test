Meteor.publish('Tasks', function() {
    return Tasks.find({});
});

Tasks.allow({
    insert: function() {
        return true;
    },
    update: function() {
        return true;
    },
    remove: function() {
        return true;
    }
});
