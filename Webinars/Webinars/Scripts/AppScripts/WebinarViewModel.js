WebinarViewModel = function () {
    var self = this;
    self.webinarCollection = ko.observableArray();
    self.lawsCollection = ko.observableArray();
    self.editableWebinar = ko.observable({
        Id: ko.observable(""),
        Name: ko.observable("lol"),
        VideoUrl: ko.observable(""),
        Law: ko.observable(""),
        LawId: ko.observable("")
    });
    self.createdWebinar = {
        Name: ko.observable(""),
        VideoUrl: ko.observable(""),
    };
    self.CreateNewWebinar = function () {
        $.ajax({
            type: 'POST',
            url: '/Webinar/Create',
            dataType: 'json',
            data: {
                Name: createdWebinar.Name(),
                VideoUrl: createdWebinar.VideoUrl(),
                LawId: 1
            },
            success: function (data) {
                console.log("success");
                self.GetAllWebinars();
            },
            error: function (xhr, ajaxOptions, error) {
                console.log("error. create");
            }
        });
    };
    self.EditWebinar = function () {
        var unmapped = ko.mapping.toJS(self.editableWebinar);
        $.ajax({
            type: 'POST',
            url: '/Webinar/Edit',
            dataType: 'json',
            data: {
                Webinar: unmapped
            },
            success: function (data) {
                console.log("edit success");
                self.GetAllWebinars();
            },
            error: function (xhr, ajaxOptions, error) {
                console.log("error. edit");
            }
        });
    };
    self.DeleteWebinar = function () {
        $.ajax({
            type: 'POST',
            url: '/Webinar/Delete',
            dataType: 'json',
            data: {
                id: this.Id
            },
            success: function (data) {
                console.log("delete success");
                self.GetAllWebinars();
            },
            error: function (xhr, ajaxOptions, error) {
                console.log("error. delete");
            }
        });
    };
    self.GetAllWebinars = function () {
        $.get('/Webinar/GetAllWebinars', function (data) {
            var res = ko.mapping.fromJS(data)
            self.webinarCollection(res());
        });
    };
    self.GetWebinar = function () {
        $.get('/Webinar/GetWebinar', { Id: this.Id }, function (data) {
            var res = ko.mapping.fromJS(data);
            self.editableWebinar(res);
        });
    };
    return {
        webinars: self.webinarCollection,
        getAllWebinars: self.GetAllWebinars,
        cWebinar: self.createdWebinar,
        createNewWebinar: self.CreateNewWebinar,
        getWebinar: self.GetWebinar,
        eWebinar: self.editableWebinar,
        editWebinar: self.EditWebinar,
        deleteWebinar: self.DeleteWebinar,
    };
}()


$(document).ready(function () {
    ko.applyBindings(WebinarViewModel);
    WebinarViewModel.getAllWebinars();
});