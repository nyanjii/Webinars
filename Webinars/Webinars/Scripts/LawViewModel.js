var LawViewModel= function(){

    this.laws = ko.observableArray("");
    this.GetAll()
    {
        $.get("/Law/GetAllLaws",
            function (data) {
            laws = ko.mapping.fromJS(data);
                    }
                )
    }
}

$(document).ready(function () {
    ko.applyBindings(LawViewModel);
    GetAll();
}
);