Meteor.publish('Projects', function() {
    return Projects.find({});
});

Projects.allow({
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

