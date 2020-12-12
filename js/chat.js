$(document).ready(function () {
    $("#professorChat").hide()
    $("#amigaChat").hide()
    $("#carlosChat").hide()
    $("#adrianoChat").hide()
    $("#priscilaChat").hide()
});

function hideChats() {
    $("#professorChat").hide()
    $("#amigaChat").hide()
    $("#carlosChat").hide()
    $("#adrianoChat").hide()
    $("#priscilaChat").hide()
    
    $("#professor").removeClass("active");
    $("#amiga").removeClass("active");
    $("#carlos").removeClass("active");
    $("#adriano").removeClass("active");
    $("#priscila").removeClass("active");
};

$(document).ready(function () {
    $("#professor").click(function (e) {
        hideChats();
        $("#"+e.currentTarget.id+"Chat").show();
        $("#"+e.currentTarget.id).addClass("active");
    });
});
$(document).ready(function () {
    $("#amiga").click(function (e) {
        hideChats();
        $("#"+e.currentTarget.id+"Chat").show()
        $("#"+e.currentTarget.id).addClass("active");
    });
});
$(document).ready(function () {
    $("#carlos").click(function (e) {
        hideChats();
        $("#"+e.currentTarget.id+"Chat").show()
        $("#"+e.currentTarget.id).addClass("active");
    });
});
$(document).ready(function () {
    $("#adriano").click(function (e) {
        hideChats();
        $("#"+e.currentTarget.id+"Chat").show()
        $("#"+e.currentTarget.id).addClass("active");
    });
});
$(document).ready(function () {
    $("#priscila").click(function (e) {
        hideChats();
        $("#"+e.currentTarget.id+"Chat").show()
        $("#"+e.currentTarget.id).addClass("active");
    });
});



