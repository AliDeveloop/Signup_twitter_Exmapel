function f() {
    var email = document.forms["myForm"]["email"].value;
    var dob = document.forms["myForm"]["dob"].value;
    var nationalId = document.forms["myForm"]["national-id"].value;
    var password = document.forms["myForm"]["password"].value;
    var gender = document.querySelector('input[name="gender"]:checked');
    var province = document.forms["myForm"]["province"].value;
    var address = document.forms["myForm"]["address"].value;
    var maritalStatus = document.querySelector('input[name="marital-status"]:checked');
    var income = document.forms["myForm"]["income"].value;
    var birthDate = new Date(dob);
    var birthYear = birthDate.getFullYear();
    var currentYear = new Date().getFullYear();
    var profilePic = document.forms["myForm"]["profile-pic"].value;

    var x=0;
    var errorMessage1 = "";
    var errorMessage2 = "";
    var errorMessage3 = "";
    var errorMessage4 = "";
    var errorMessage5 = "";
    var errorMessage6 = "";
    var errorMessage7 = "";
    var errorMessage8 = "";
    var errorMessage9 = "";
    var errorMessage10 = "";

    if (email == "") {
        errorMessage1 += "<p class='error'>ایمیل را وارد کنید.</p>";
    } else if (!email.includes("@")) {
        errorMessage1 += "<p class='error'>ایمیل باید شامل @ باشد.</p>";
    }else{
        errorMessage1 += "";
        x=x+10;
    }

    if (dob == "") {
        errorMessage2 += "<p class='error'>تاریخ تولد را وارد کنید.</p>";
    } else if (currentYear - birthYear < 18) {
        errorMessage2 += "<p class='error'>سن شما باید بیشتر از 18 سال باشد.</p>";
    }else{
        errorMessage2 += "";
        x=x+10;
    }

    if (nationalId == "") {
        errorMessage3 += "<p class='error'>شماره ملی را وارد کنید.</p>";
    } else if (nationalId.length != 10) {
        errorMessage3 += "<p class='error'>شماره ملی باید 10 رقم باشد.</p>";
    }else{
        errorMessage3 += "";
        x=x+10;
    }
    if (password=="") {
        errorMessage4 += "<p class='error'>رمز عبور خود را وارد کنید</p>";
    }else if (password.length < 3 || password.length > 11) {
        errorMessage4 += "<p class='error'>رمز باید بین 3 تا 11 کاراکتر باشد.</p>";
    }else{
        errorMessage4 += "";
        x=x+10;
    }

    if (!gender) {
        errorMessage5 += "<p class='error'>جنسیت را انتخاب کنید.</p>";
    }
    else{
        errorMessage5 += "";
        x=x+10;
    }

    if (province == "") {
        errorMessage6 += "<p class='error'>استان را انتخاب کنید.</p>";
    }
    else{
        errorMessage6 += "";
        x=x+10;
    }

    if (address == "") {
        errorMessage7 += "<p class='error'>آدرس را وارد کنید.</p>";
    } else {
        errorMessage7 += "";
        x=x+10;
    }

    if (!maritalStatus) {
        errorMessage8 += "<p class='error'>وضعیت تاهل را انتخاب کنید.</p>";
    }
    else{
        errorMessage8 += "";
        x=x+10;
    }

    if (income == "") {
        errorMessage9 += "<p class='error'>درآمد ماهیانه را انتخاب کنید.</p>";
    }
    else{
        errorMessage9 += "";
        x=x+10;
    }

    if (profilePic == "") {
        errorMessage10 += "<p class='error'>عکس را انتخاب کنید.</p>";
    } else {
        var allowedExtensions = /(\.jpg|\.jpeg|\.png)$/i;
        if (!allowedExtensions.exec(profilePic)) {
            errorMessage10 += "<p class='error'>فرمت عکس باید jpg/jpeg/png باشد.</p>";
        } else {
            errorMessage10 += "";
            x=x+10;
        }
    }
    if (x==100){
        alert("ثبت نام شما با موفقیت انجام شد")
    }

    

    document.getElementById("error-messages1").innerHTML = errorMessage1;
    document.getElementById("error-messages2").innerHTML = errorMessage2;
    document.getElementById("error-messages3").innerHTML = errorMessage3;
    document.getElementById("error-messages4").innerHTML = errorMessage4;
    document.getElementById("error-messages5").innerHTML = errorMessage5;
    document.getElementById("error-messages6").innerHTML = errorMessage6;
    document.getElementById("error-messages7").innerHTML = errorMessage7;
    document.getElementById("error-messages8").innerHTML = errorMessage8;
    document.getElementById("error-messages9").innerHTML = errorMessage9;
    document.getElementById("error-messages10").innerHTML = errorMessage10;

}

function showProfilePic() {
    var fileInput = document.getElementById('profile-pic');
    var previewImg = document.getElementById('profile-pic-preview');
    previewImg.style.display = "block";
    previewImg.src = URL.createObjectURL(fileInput.files[0]);
}