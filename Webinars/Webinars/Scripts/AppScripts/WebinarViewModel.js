WebinarViewModel = function () {
    var self = this;
    self.webinarCollection = ko.observableArray();
    self.editableWebinar = ko.observable({
        Id: ko.observable(""),
        Name: ko.observable(""),
        VideoUrl: ko.observable(""),
        Law: ko.observable(""),
        LawId: ko.observable("")
    });
    self.createdWebinar = {
        Name: ko.observable(""),
        VideoUrl: ko.observable(""),
    };
    self.CreateNewWebinar = function () {
        self.PostData('Create', {
            Name: createdWebinar.Name(),
            VideoUrl: createdWebinar.VideoUrl(),
            LawId: 1
        });
    };
    self.EditWebinar = function () {
        var unmapped = ko.mapping.toJS(self.editableWebinar);
        self.PostData('Edit', { Webinar: unmapped });
    };
    self.DeleteWebinar = function () {
        self.PostData('Delete', { id: this.Id });
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
    self.PostData = function (action, dataObj) {
        $.ajax({
            type: 'POST',
            url: '/Webinar/' + action,
            dataType: 'json',
            data: dataObj,
            success: function (data) {
                console.log(action + " success");
                self.GetAllWebinars();
            },
            error: function (xhr, ajaxOptions, error) {
                console.log(action + " error");
            }
        });
    }
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