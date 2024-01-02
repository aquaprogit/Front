function validateForm() {
    var form = document.getElementById("myForm");

    var inputs = form.querySelectorAll("input");
    inputs.forEach(function (input) {
        input.classList.remove("error");
    });

    var patterns = {
        fullName: /^[А-ЯІЇЄ][а-яіїє]+\s[А-ЯІЇЄ]\.[А-ЯІЇЄ]\.$/,
        idCard: /^[А-ЯІЇЄ]{2} №[А-ЯІЇЄЁё0-9]{5}$/,
        faculty: /^[А-ЯІЇЄ]{3,5}/,
        dob: /^\d{2}\.\d{2}\.\d{4}$/,
        address: /^м\.\s[А-ЯІЇЄ][А-ЯІЇЄЁёа-яіїє0-9]+$/
    };

    var isValid = true;
    inputs.forEach(function (input) {
        var name = input.name;
        var value = input.value.trim();

        if (!patterns[name].test(value)) {
            input.classList.add("error");
            isValid = false;
        }
    });

    if (isValid) {
        alert("Form submitted successfully!");
    } else {
        alert("Please correct the highlighted errors.");
    }
}