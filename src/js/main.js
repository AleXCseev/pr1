$(function () {
    Date.prototype.daysInMonth = function () {
        return 32 - new Date(this.getFullYear(), this.getMonth(), 32).getDate();
    };

    function getDate(plusDays) {
        var today = new Date();
        var dd = String(today.getDate() + plusDays).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0');
        var yyyy = today.getFullYear();
        var currentDaysInMonth = new Date().daysInMonth()
        if (+dd > currentDaysInMonth) {
            dd = String(dd - currentDaysInMonth).padStart(2, '0');
            mm++
        }
        return `${dd}.${mm}.${yyyy}`
    }
    $(".time").text(getDate(2));
})

