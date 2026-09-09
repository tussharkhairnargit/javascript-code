profileStatusList = [
    { label: 'General Information', key: 'personalInformation', code: 'PERSONAL_INFORMATION', display: true, complete: false, panel: 'personalInformationPanel', stepNumber: 1 },
    { label: 'Resume', key: 'resume', code: 'RESUME', display: false, complete: false, panel: 'resumePanel', stepNumber: 2 },
    { label: 'Credentials', key: 'certifications', code: 'CERTIFICATION_CREDENTIAL', display: false, complete: false, panel: 'credentialsCertificatesPanel', stepNumber: 3 },
    { label: 'License(s)', key: 'licenses', code: 'LICENSE', display: false, complete: false, panel: 'licensePanel', stepNumber: 4 },
    { label: 'References', key: 'reference', code: 'REFERENCE', display: false, complete: false, panel: 'referencesPanel', stepNumber: 5 },
    { label: 'Skills Checklist', key: 'skillChecklist', code: 'SKILL_CHECLIST', display: false, complete: false, panel: 'skillsChecklistPanel', stepNumber: 6 },
    { label: 'Complete & Sign', key: 'completeAndSubmit', code: 'APPLICATION_OF_EMPLOYMENT', display: false, complete: false, panel: 'aoePanel', stepNumber: 8 }
];

function getPhysicianOfferingProfileSectionsList() {
    const requiredSectionKeys = ['personalInformation', 'resume', 'completeAndSubmit'];
    return this.profileStatusList.filter(ele => requiredSectionKeys.includes(ele.key));
}

console.log("getPhysicianOfferingProfileSectionsList", JSON.stringify(getPhysicianOfferingProfileSectionsList(), null, 2));

