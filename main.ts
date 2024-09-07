document.addEventListener('DOMContentLoaded', () => {
    const toggleSkillsButton = document.getElementById('Hide-skills');
    const skillsSection = document.getElementById('skills');

    if (toggleSkillsButton && skillsSection) {
        toggleSkillsButton.addEventListener('click', () => {
            if (skillsSection.style.display === 'none') {
                skillsSection.style.display = 'flex';
            } else {
                skillsSection.style.display = 'none';
            }
        });
    }
});
