WebinarViewModel = function () {
    var self = this;
    self.webinarCollection = ko.observableArray();
    self.lawsCollection = ko.observableArray();
    self.editableWebinar = {
        Id: ko.observable(),
        Name: ko.observable(),
        VideoUrl: ko.observable()
    }
    self.createdWebinar = {
        Name : ko.observable(""),
        VideoUrl : ko.observable(""),
    }
    self.CreateNewWebinar = function () {
        
        //$.get('/Law/GetAllLaws', function (data) {
        //    var res = ko.mapping.fromJS(data)
        //    self.lawsCollection(res());
        //});
        //console.log(self.lawsCollection());
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
    }
    self.GetAllWebinars = function () {
        $.get('/Webinar/GetAllWebinars', function (data) {
            var res = ko.mapping.fromJS(data)
            self.webinarCollection(res());
        });
    }
    return {
        webinars: self.webinarCollection,
        getAllWebinars: self.GetAllWebinars,
        cWebinar: self.createdWebinar,
        createNewWebinar: self.CreateNewWebinar
    }
}()


$(document).ready(function () {
    ko.applyBindings(WebinarViewModel);
    WebinarViewModel.getAllWebinars();
});