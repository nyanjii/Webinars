WebinarViewModel = function () {
    var self = this;
    self.adminModeEnabled = ko.observable(false);
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
        self.createdWebinar.Name("");
        self.createdWebinar.VideoUrl("");
    };
    self.EditWebinar = function () {
        var unmapped = ko.mapping.toJS(self.editableWebinar);
        self.PostData('Edit', { Webinar: unmapped });
        $("#edit-zone").fadeOut();
    };
    self.DeleteWebinar = function () {
        self.PostData('Delete', { id: this.Id });
        self.DeleteConfirmation();
    };
    self.GetAllWebinars = function () {
        $.get('/Webinar/GetAllWebinars', function (data) {
            var res = ko.mapping.fromJS(data)
            self.webinarCollection(res());
        });
    };
    self.GetWebinar = function () {
        $("#edit-zone").fadeIn();
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
    self.DeleteConfirmation = function () {
        $.arcticmodal({
            type: 'ajax',
            url: 'Webinar/DeleteConfirmation',
            content: {}
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
        adminMode: self.adminModeEnabled
    };
}()


$(document).ready(function () {
    ko.applyBindings(WebinarViewModel);
    WebinarViewModel.getAllWebinars();
    $("#edit-zone").hide();
    $(".admin-mode").hide();
});



$("#cancel-edit").click(function () {
    $("#edit-zone").hide();
});

$('.admin-mode-button').click(function () {
    if (WebinarViewModel.adminMode()){
        WebinarViewModel.adminMode(false);
        $(".admin-mode").fadeOut();
    }
    else {
        WebinarViewModel.adminMode(true);
        $(".admin-mode").fadeIn();
    }
});
