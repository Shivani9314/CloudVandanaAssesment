const form = document.getElementById("survey-form");
    const popup = document.getElementById("popup");
    const resetButton = document.getElementById("reset-button");
    const closePopupButton = document.getElementById("close-popup");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const firstName = document.getElementById("first-name").value;
        const lastName = document.getElementById("last-name").value;
        const dob = document.getElementById("dob").value;
        const country = document.getElementById("country").value;
        const genderElements = document.querySelectorAll("input[name=gender]:checked");
        const gender = Array.from(genderElements).map(e => e.value).join(", ");
        const profession = document.getElementById("profession").value;
        const email = document.getElementById("email").value;
        const mobile = document.getElementById("mobile").value;

        document.getElementById("popup-first-name").textContent = firstName;
        document.getElementById("popup-last-name").textContent = lastName;
        document.getElementById("popup-dob").textContent = dob;
        document.getElementById("popup-country").textContent = country;
        document.getElementById("popup-gender").textContent = gender;
        document.getElementById("popup-profession").textContent = profession;
        document.getElementById("popup-email").textContent = email;
        document.getElementById("popup-mobile").textContent = mobile;

        popup.style.display = "block";
    });

    resetButton.addEventListener("click", function () {
        form.reset();
    });

    closePopupButton.addEventListener("click", function () {
        popup.style.display = "none";
        form.reset();
    });