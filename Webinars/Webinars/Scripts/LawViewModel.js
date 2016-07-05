var LawViewModel= function(){

    this.laws = ko.observableArray("");
    this.GetAll = function()
    {
        $.get("/Law/GetAllLaws",
            function (data) {
                laws = ko.mapping.fromJS(data, {});
                console.log(laws()[0])
                    }
                )
    }
}

$(document).ready(function () {
    ko.applyBindings(LawViewModel);
    GetAll();
}
);