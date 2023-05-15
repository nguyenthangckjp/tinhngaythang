function calculateDays() {
    let monthInput = document.getElementById("month");
    let month = parseInt(monthInput.value);
    let result = document.getElementById("result");
    switch (month) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            result.innerText="Tháng " + month + " có 31 ngày ";
            break;
        case 4:    
        case 6:    
        case 9:    
        case 11:
            result.innerText ="tháng " + month + " có 30 ngày ";
            break;
        case 2:
            result.innerText ="Tháng " + month + " có 28 hoặc 29 ngày";
            break;
        default:
            result.innerText = "vui lòng nhập một số từ 1 đến 12.";
            break;
    }         

}