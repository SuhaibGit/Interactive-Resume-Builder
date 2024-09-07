document.addEventListener('DOMContentLoaded', function () {
    var toggleSkillsButton = document.getElementById('Hide-skills');
    var skillsSection = document.getElementById('skills');
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
});
