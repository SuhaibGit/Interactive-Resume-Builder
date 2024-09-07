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
    function generateResume() {
        // Get form values
        const name = (document.getElementById("name") as HTMLInputElement).value;
        const email = (document.getElementById("email") as HTMLInputElement).value;
        const phone = (document.getElementById("phone") as HTMLInputElement).value;

        // Education entries
        const educationEntries = document.querySelectorAll('.education-entry');
        const educationDetails: string[] = [];
        educationEntries.forEach((entry) => {
            const degree = (entry.querySelector('input[name="degree"]') as HTMLInputElement).value;
            const institution = (entry.querySelector('input[name="institution"]') as HTMLInputElement).value;
            const graduationYear = (entry.querySelector('input[name="graduation-year"]') as HTMLInputElement).value;
            educationDetails.push(`${degree} from ${institution}, ${graduationYear}`);
        });

        // Work entries
        const workEntries = document.querySelectorAll('.work-entry');
        const workDetails: string[] = [];
        workEntries.forEach((entry) => {
            const jobTitle = (entry.querySelector('input[name="job-title"]') as HTMLInputElement).value;
            const company = (entry.querySelector('input[name="company"]') as HTMLInputElement).value;
            const workDuration = (entry.querySelector('input[name="work-duration"]') as HTMLInputElement).value;
            workDetails.push(`${jobTitle} at ${company} (${workDuration})`);
        });


        // Corrected line: Get all skill inputs and map to their values
        // const skills = Array.from(document.querySelectorAll('.skill-entry input'))
        //                    .map(input => (input as HTMLInputElement).value);
        const skillInputs = document.querySelectorAll('.skill-entry input');
        const skills: string[] = [];
                           
        skillInputs.forEach((input) => {
            skills.push((input as HTMLInputElement).value);
        });

        // Generate the resume dynamically
        const resumeOutput = `
            <h2>${name}</h2>
            <p>Email: ${email} | Phone: ${phone}</p>
            <h3>Education</h3>
            <p>${educationDetails.join('<br>')}</p>
            <h3>Work Experience</h3>
            <p>${workDetails.join('<br>')}</p>
            <h3>Skills</h3>
            <ul>
                ${skills.map(skill => `<li>${skill.trim()}</li>`).join('')}
            </ul>
        `;

        // Display the generated resume
        (document.getElementById("resume-output") as HTMLElement).innerHTML = resumeOutput;
    }

    // Attach generateResume function to the button
    const generateButton = document.getElementById("generate-resume-button");
    if (generateButton) {
        generateButton.addEventListener('click', generateResume);
    }

    // Add new education entry
    const addEducationButton = document.getElementById('add-education');
    if (addEducationButton) {
        addEducationButton.addEventListener('click', () => {
            const educationSection = document.getElementById('education-section');
            const newEducationEntry = document.createElement('div');
            newEducationEntry.classList.add('education-entry');
            newEducationEntry.innerHTML = `
                <label for="degree">Degree:</label>
                <input type="text" name="degree"><br>
                <label for="institution">Institution:</label>
                <input type="text" name="institution"><br>
                <label for="graduation-year">Year of Graduation:</label>
                <input type="number" name="graduation-year"><br>
            `;
            educationSection?.insertBefore(newEducationEntry, addEducationButton);
        });
    }
    const addExperienceButton = document.getElementById('add-experience');
    if (addExperienceButton) {
        addExperienceButton.addEventListener('click', () => {
            const experienceSection = document.getElementById('work-experience-section');
            const newExperienceEntry = document.createElement('div');
            newExperienceEntry.classList.add('work-entry');
            newExperienceEntry.innerHTML = `
                <label for="job-title">Job Title:</label>
                <input type="text" name="job-title"><br>
                <label for="company">Company:</label>
                <input type="text" name="company"><br>
                <label for="work-duration">Duration:</label>
                <input type="text" name="work-duration"><br>
            `;
            experienceSection?.insertBefore(newExperienceEntry, addEducationButton);
        });
    }

    // Add new skill entry
    const addSkillButton = document.getElementById('add-skill');
    if (addSkillButton) {
        addSkillButton.addEventListener('click', () => {
            const skillsSection = document.getElementById('skills-section');
            const newSkillEntry = document.createElement('div');
            newSkillEntry.classList.add('skill-entry');
            newSkillEntry.innerHTML = `
                <label for="skills">Skill:</label>
                <input type="text" name="skills"><br>
            `;
            skillsSection?.insertBefore(newSkillEntry, addSkillButton);
        });
    }
});
