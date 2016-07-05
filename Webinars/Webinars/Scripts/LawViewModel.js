var LawViewModel = function(){
    var self = this;
    self.laws = ko.observableArray();
    self.singlelaw = {
        Name: ko.observable(""),
        Description : ko.observable("")
    }
    self.GetAllLaws = function()
    {
        $.get("/Law/GetAllLaws",
            function (data) {
                var res = ko.mapping.fromJS(data);
                self.laws(res());
            });
    }
    self.AddLaw = function ()
    {
        $.post("/Law/Create/", self.singlelaw,
            function () {
                self.laws.removeAll();
                self.GetAllLaws();
            });
    }
    self.RemoveLaw = function () {

    }
    return {
        laws: self.laws,
        getAll: self.GetAllLaws,
        addLaw: self.AddLaw,
        law :self.law
    }
}()

$(document).ready(function () {
    ko.applyBindings(LawViewModel);
    LawViewModel.getAll();
}
);