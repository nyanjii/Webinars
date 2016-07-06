var LawViewModel = function () {
    var self = this;
    self.laws = ko.observableArray();
    self.addinglaw = {
        Id: ko.observable(""),
        Name: ko.observable(""),
        Description: ko.observable("")
    };
    self.editinglaw = {
        Id: ko.observable(""),
        Name: ko.observable(""),
        Description: ko.observable("")
    };
    self.GetAllLaws = function () {
        $.get("/Law/GetAllLaws",
            function (data) {
                var res = ko.mapping.fromJS(data);
                self.laws(res());
            });
    };
    self.AddLaw = function () {
        $.post("/Law/Create/", self.addinglaw,
            function () {
                self.laws.removeAll();
                self.GetAllLaws();
                self.CancelEdit();
            });
    };
    self.RemoveLaw = function (item) {
        console.log("I`m here");
        console.log(item.Id());
        $.ajax({
            url: "/Law/Delete",
            type: 'POST',
            dataType:'json',
            data: {id:item.Id()},
            success: function () {
                self.GetAllLaws();
            }
        });
    };
    self.EditLaw = function (item) {
        $("#edit-panel").show();
        self.editinglaw.Id(item.Id());
        self.editinglaw.Name(item.Name());
        self.editinglaw.Description(item.Description());
     
    };
    self.CancelEdit = function () {
        self.editinglaw.Id("");
        self.editinglaw.Name("");
        self.editinglaw.Description("");
        self.addinglaw.Id("");
        self.addinglaw.Name("");
        self.addinglaw.Description("");
        $("#edit-panel").hide();
    };
    self.SaveLaw = function (item) {
        $("#edit-panel").hide();
        var unmapped = ko.mapping.toJS(self.editinglaw);
        $.ajax({
            url: '/Law/Edit',
            dataType: 'json',
            type: 'POST',
            data: { Law: unmapped },
            success: function (data) {
                self.CancelEdit();
                self.GetAllLaws();
            }
        });
    };
    self.AdminMode = ko.observable(true);
    self.AdminModeChange = function ()
    {
        self.AdminMode() ? self.AdminMode(false) : self.AdminMode(true);
    }
    return {
        laws: self.laws,
        getAll: self.GetAllLaws,
        addLaw: self.AddLaw,
        removeLaw: self.RemoveLaw,
        addinglaw: self.addinglaw,
        editinglaw: self.editinglaw,
        editLaw: self.EditLaw,
        cancel: self.CancelEdit,
        save: self.SaveLaw,
        mode: self.AdminMode,
        adminModeChange: self.AdminModeChange
    };
}()

$(document).ready(function () {
    $("#edit-panel").hide();
    ko.applyBindings(LawViewModel);
    LawViewModel.getAll();
});