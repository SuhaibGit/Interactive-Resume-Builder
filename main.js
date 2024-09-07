document.addEventListener('DOMContentLoaded', function () {
    var toggleSkillsButton = document.getElementById('Hide-skills');
    var skillsSection = document.getElementById('skills');
    var resumeContainer = document.getElementById("resume-container");
    var editButton = document.getElementById("edit-button");
    var saveButton = document.getElementById("save-button");
    if (toggleSkillsButton && skillsSection) {
        toggleSkillsButton.addEventListener('click', function () {
            if (skillsSection.style.display === 'none') {
                skillsSection.style.display = 'flex';
            }
            else {
                skillsSection.style.display = 'none';
            }
        });
    }
    function generateResume() {
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var phone = document.getElementById("phone").value;
        var educationEntries = document.querySelectorAll('.education-entry');
        var educationDetails = [];
        educationEntries.forEach(function (entry) {
            var degree = entry.querySelector('input[name="degree"]').value;
            var institution = entry.querySelector('input[name="institution"]').value;
            var graduationYear = entry.querySelector('input[name="graduation-year"]').value;
            educationDetails.push("".concat(degree, " from ").concat(institution, ", ").concat(graduationYear));
        });
        var workEntries = document.querySelectorAll('.work-entry');
        var workDetails = [];
        workEntries.forEach(function (entry) {
            var jobTitle = entry.querySelector('input[name="job-title"]').value;
            var company = entry.querySelector('input[name="company"]').value;
            var workDuration = entry.querySelector('input[name="work-duration"]').value;
            workDetails.push("".concat(jobTitle, " at ").concat(company, " (").concat(workDuration, ")"));
        });
        var skillInputs = document.querySelectorAll('.skill-entry input');
        var skills = [];
        skillInputs.forEach(function (input) {
            skills.push(input.value);
        });
        var resumeHtml = "\n            <h2>".concat(name, "</h2>\n            <p>Email: ").concat(email, " | Phone: ").concat(phone, "</p>\n            <h3>Education</h3>\n            <p>").concat(educationDetails.join('<br>'), "</p>\n            <h3>Work Experience</h3>\n            <p>").concat(workDetails.join('<br>'), "</p>\n            <h3>Skills</h3>\n            <ul>\n                ").concat(skills.map(function (skill) { return "<li>".concat(skill.trim(), "</li>"); }).join(''), "\n            </ul>\n        ");
        if (resumeContainer) {
            var resumeOutput = document.getElementById("resume-output");
            if (resumeOutput) {
                resumeOutput.innerHTML = resumeHtml;
                resumeOutput.setAttribute('contenteditable', 'false');
            }
        }
        if (editButton)
            editButton.style.display = 'inline';
        if (saveButton)
            saveButton.style.display = 'none';
    }
    function enableEditing() {
        var resumeSections = document.querySelectorAll('#resume-output h2, #resume-output p, #resume-output ul');
        resumeSections.forEach(function (section) {
            section.contentEditable = "true";
        });
        if (editButton)
            editButton.style.display = 'none';
        if (saveButton)
            saveButton.style.display = 'inline';
    }
    function saveChanges() {
        var resumeSections = document.querySelectorAll('#resume-output h2, #resume-output p, #resume-output ul');
        resumeSections.forEach(function (section) {
            section.contentEditable = "false";
        });
        if (editButton)
            editButton.style.display = 'inline';
        if (saveButton)
            saveButton.style.display = 'none';
    }
    var generateButton = document.getElementById("generate-resume-button");
    if (generateButton) {
        generateButton.addEventListener('click', generateResume);
    }
    var addEducationButton = document.getElementById('add-education');
    if (addEducationButton) {
        addEducationButton.addEventListener('click', function () {
            var educationSection = document.getElementById('education-section');
            var newEducationEntry = document.createElement('div');
            newEducationEntry.classList.add('education-entry');
            newEducationEntry.innerHTML = "\n                <label for=\"degree\">Degree:</label>\n                <input type=\"text\" name=\"degree\"><br>\n                <label for=\"institution\">Institution:</label>\n                <input type=\"text\" name=\"institution\"><br>\n                <label for=\"graduation-year\">Year of Graduation:</label>\n                <input type=\"number\" name=\"graduation-year\"><br>\n            ";
            educationSection === null || educationSection === void 0 ? void 0 : educationSection.insertBefore(newEducationEntry, addEducationButton);
        });
    }
    var addExperienceButton = document.getElementById('add-experience');
    if (addExperienceButton) {
        addExperienceButton.addEventListener('click', function () {
            var experienceSection = document.getElementById('work-experience-section');
            var newExperienceEntry = document.createElement('div');
            newExperienceEntry.classList.add('work-entry');
            newExperienceEntry.innerHTML = "\n                <label for=\"job-title\">Job Title:</label>\n                <input type=\"text\" name=\"job-title\"><br>\n                <label for=\"company\">Company:</label>\n                <input type=\"text\" name=\"company\"><br>\n                <label for=\"work-duration\">Duration:</label>\n                <input type=\"text\" name=\"work-duration\"><br>\n            ";
            experienceSection === null || experienceSection === void 0 ? void 0 : experienceSection.insertBefore(newExperienceEntry, addExperienceButton);
        });
    }
    var addSkillButton = document.getElementById('add-skill');
    if (addSkillButton) {
        addSkillButton.addEventListener('click', function () {
            var skillsSection = document.getElementById('skills-section');
            var newSkillEntry = document.createElement('div');
            newSkillEntry.classList.add('skill-entry');
            newSkillEntry.innerHTML = "\n                <label for=\"skills\">Skill:</label>\n                <input type=\"text\" name=\"skills\"><br>\n            ";
            skillsSection === null || skillsSection === void 0 ? void 0 : skillsSection.insertBefore(newSkillEntry, addSkillButton);
        });
    }
    if (editButton) {
        editButton.addEventListener('click', enableEditing);
    }
    if (saveButton) {
        saveButton.addEventListener('click', saveChanges);
    }
});
