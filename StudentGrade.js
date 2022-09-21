    function gradeCheck(marks){

        switch(marks/10){

            case 10:
            case 9:
                console.log("Students marks are 90-100 and the Grade is S grade");
                break;
            case 8:
                console.log("Students marks are 80-90 and the Grade is A Grade");
                break;
            case 7:
                console.log("Students marks are 70-80 and the Grade is B Grade");
                break;
            case 6:
                console.log("Students marks are 60-70 and the Grade is C Grade");
                break;
            case 5:
                console.log("Students marks are 50-60 and the Grade is D Grade");
                break;
            case 4: 
                console.log("Students marks are 40 -50 and the Grade is E Grade");
                break;
            case 3:
                console.log("Students marks are 0-40 and Student has Failed");
                break;
            case 2:
                console.log("Students marks are 0-40 and Student has Failed");
                break;
            case 1:
                console.log("Students marks are 0-40 and Student has Failed");
                break;
            case 0:
                console.log("Students marks are 0-40 and Student has Failed");
                break;
            default:
                console.log("Invalid Marks");
                break;
        }

    }

    gradeCheck()