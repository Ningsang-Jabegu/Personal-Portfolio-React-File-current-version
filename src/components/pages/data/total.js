const Total_Project_Function = (skill_obj, skill_title, skill_subtitle) => {
    const remainingProjectKeys = Object.keys(skill_obj[skill_title]["skillInfo"][skill_subtitle]).filter(key => key !== "Total");
    let totalProject = 0;
    for (const key in remainingProjectKeys){
      totalProject += skill_obj[skill_title]["skillInfo"][skill_subtitle][remainingProjectKeys[key]];
    }
    return totalProject;
  };
  
  export default Total_Project_Function;
  