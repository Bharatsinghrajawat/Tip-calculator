
function calculation(){
    let billValue = document.getElementById('bill').value;
    let tipValue = document.getElementById('tip').value;
    let peoples = document.getElementById('peoples').value;

    let total = billValue*tipValue/100/peoples;
    document.getElementById('para').textContent = total;

    let totalAmount = billValue/peoples+total;
    document.getElementById('para2').textContent = totalAmount;
}