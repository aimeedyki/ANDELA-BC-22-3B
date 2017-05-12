const init =()=>{
 $('#ta').hide();	
}




const calculateSalary=()=>{

	const directorAllowance = 10000 ;
	const executiveAllowance = 9000 ;
	const managerAllowance = 8000 ;
	const associateAllowance = 7000 ;
	const internAllowance = 2000 ;

	let directorSalary = 100000;
	let executiveSalary = 80000;
	let managerSalary = 60000;
	let associateSalary = 40000;
	let internSalary = 20000;


	let directorLeave = 10000;
	let executiveLeave = 8000;
	let managerLeave = 6000;
	let associateLeave = 4000;
	let internLeave = 2000;

	let directorMedical = 1000;
	let executiveMedical = 800;
	let managerMedical = 600;
	let associateMedical = 400;
	let internMedical = 200;

	let directorFurniture = 4400;
	let executiveFurniture = 4200;
	let managerFurniture = 4000;
	let associateFurniture = 3800;
	let internFurniture = 3600;

	let salary = 0;
	let tax = 0;
	let basicSalary = 0;
	let furnitureAll = 0;
	let medicalAll = 0;
	let leaveAll = 0;

	
	
	const type = $('#type').val();
	const level = $('#level').val();

	if (type === "Select" || level === "Select") {
		alert("Opp!!, Invalid Input. Please fill the form appropriately");
	}else{
		if (type === "Director") {
		if (level === "Level One") {
			salary = directorSalary + directorAllowance + directorLeave + directorMedical + directorFurniture;
		}else if(level === "Level Two")	{
			
			salary = directorSalary + (2 * directorAllowance) + directorLeave + directorMedical + directorFurniture;
		}
		else if(level === "Level Three")	{
			salary = directorSalary + (3 * directorAllowance) + directorLeave + directorMedical + directorFurniture;
		}
		else if(level === "Level Four")	{
			salary = directorSalary + (4 * directorAllowance) + directorLeave + directorMedical + directorFurniture;
		}
		else if(level === "Level Five")	{
			salary = directorSalary + (5 * directorAllowance) + directorLeave + directorMedical + directorFurniture;
		}

			basicSalary = directorSalary;
			furnitureAll = directorFurniture;
			leaveAll = directorLeave;
			medicalAll = directorMedical;
			tax = 0.1 * salary;

	}

	if (type === "Manager") {
		if (level === "Level One") {
			salary = managerSalary + managerAllowance + managerLeave +managerMedical +managerFurniture;
		}else if(level === "Level Two")	{
			
			salary = managerSalary + (2 * managerAllowance)+ managerLeave +managerMedical + managerFurniture;
		}
		else if(level === "Level Three")	{
			salary = managerSalary + (3 * managerAllowance)+ managerLeave +managerMedical +managerFurniture;
		}
		else if(level === "Level Four")	{
			salary = managerSalary + (4 * managerAllowance)+ managerLeave +managerMedical +managerFurniture;
		}
		else if(level === "Level Five")	{
			salary = managerSalary + (5 * managerAllowance)+ managerLeave +managerMedical +managerFurniture;
		}

			basicSalary = managerSalary;
			furnitureAll = managerFurniture;
			leaveAll = managerLeave;
			medicalAll = managerMedical;
			tax = 0.1 * salary;
	}

	if (type === "Executive") {
		if (level === "Level One") {
			salary = executiveSalary + executiveAllowance + executiveLeave +executiveMedical + executiveFurniture;
		}else if(level === "Level Two")	{
			
			salary = executiveSalary + (2 * executiveAllowance)+ executiveLeave +executiveMedical + executiveFurniture;
		}
		else if(level === "Level Three")	{
			salary = executiveSalary + (3 * executiveAllowance)+ executiveLeave +executiveMedical + executiveFurniture;
		}
		else if(level === "Level Four")	{
			salary = executiveSalary + (4 * executiveAllowance)+ executiveLeave +executiveMedical + executiveFurniture;
		}
		else if(level === "Level Five")	{
			salary = executiveSalary + (5 * executiveAllowance) + executiveLeave +executiveMedical + executiveFurniture;
		}

			basicSalary = executiveSalary;
			furnitureAll = executiveFurniture;
			leaveAll = executiveLeave ;
			medicalAll = executiveMedical;
			tax = 0.1 * salary;

	}
	if (type === "Associate") {
		if (level === "Level One") {
			salary = associateSalary + associateAllowance + associateLeave + associateMedical + associateFurniture;
		}else if(level === "Level Two")	{
			
			salary = associateSalary + (2 * associateAllowance) + associateLeave + associateMedical + associateFurniture;
		}
		else if(level === "Level Three")	{
			salary = associateSalary + (3 * associateAllowance)+ associateLeave + associateMedical + associateFurniture;
		}
		else if(level === "Level Four")	{
			salary = associateSalary + (4 * associateAllowance) + associateLeave + associateMedical + associateFurniture;
		}
		else if(level === "Level Five")	{
			salary = associateSalary + (5 * associateAllowance) + associateLeave + associateMedical + associateFurniture;
		}

			basicSalary = associateSalary;
			furnitureAll = associateFurniture;
			leaveAll =  associateLeave;
			medicalAll = associateMedical;
			tax = 0.1 * salary;

	}
	if (type === "Intern") {
		if (level === "Level One") {
			salary = internSalary +internAllowance + internLeave + internMedical + internFurniture;
		}else if(level === "Level Two")	{
			
			salary = internSalary + (2 * internAllowance) + internLeave + internMedical + internFurniture;
		}
		else if(level === "Level Three")	{
			salary = internSalary + (3 * internAllowance) + internLeave + internMedical + internFurniture;
		}
		else if(level === "Level Four")	{
			salary = internSalary + (4 * internAllowance) + internLeave + internMedical + internFurniture;
		}
		else if(level === "Level Five")	{
			salary = internSalary + (5 * internAllowance) + internLeave + internMedical + internFurniture;
		}
			basicSalary = internSalary;
			furnitureAll = internFurniture;
			leaveAll = internLeave;
			medicalAll = internMedical;
			tax = 0.1 * salary;

	};

	}

	$("#bs").html("");
	$("#bs").html('&#8358;'+formatToNaira(basicSalary));

	$("#tax").html("");
	$("#tax").html('&#8358;'+formatToNaira(tax));
	
	$("#lb").html("");
	$("#lb").html('&#8358;'+formatToNaira(leaveAll));

	$("#fa").html("");
	$("#fa").html('&#8358;'+formatToNaira(furnitureAll));

	$("#ma").html("");
	$("#ma").html('&#8358;'+formatToNaira(medicalAll));

	$("#gross").html("");
	$("#gross").html('&#8358;'+ formatToNaira(salary));

	$("#typee").html("");
	$("#typee").html((type));

	$("#levele").html("");
	$("#levele").html((level));


	// alert(salary);
	// alert(type);
	// alert(level);
	$('#ta').show();
}

 formatToNaira =(num) =>{

  let p = num.toFixed(2).split(".");
  return  p[0].split("").reverse().reduce(function(acc, num, i, orig) {
    return   num + (i && !(i % 3) ? "," : "") + acc;
  }, "") + "." + p[1];
}

