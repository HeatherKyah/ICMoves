
function startOver() {

    document.loan_form.loan_amt.value="";
    document.loan_form.months.value="";
    document.loan_form.rate.value="";
    document.loan_form.extra.value="0";

    document.getElementById("loan_info").innerHTML="";
    document.getElementById("table").innerHTML = "";

    location.reload();


}

function validate() {


    var loan_amt = document.loan_form.loan_amt.value;
    var months = document.loan_form.months.value;
    var rate = document.loan_form.rate.value;
    var extra = document.loan_form.extra.value;


    // isNaN(number()) checks to see if the user entered a float
    if (loan_amt <= 0 || isNaN(Number(loan_amt)) ){

        alert("Please enter a valid loan amount.");
        document.loan_form.loan_amt.value = "";

    }


    else if (months <= 0 || parseInt(months) != months ){
        alert("Please enter a valid number of months.");
        document.loan_form.months.value="";

    }

    else if (rate <= 0 || rate > 99 ||  isNaN(Number(rate)) ) {
        alert("Please enter a valid interest rate.");
        document.loan_form.rate.value="";

    }
    else if (extra < 0 ||  isNaN(Number(extra)) ){
        alert("Please enter a valid extra payment.");
        document.loan_form.extra.value="0";

    }


    else {  // all the data has been validated

        calculate(parseFloat(loan_amt), parseInt(months), parseFloat(rate), parseFloat(extra));
    }




}


function calculate(loan_amt, months, rate, extra) {

    i = rate / 100;

    var monthly_payment = loan_amt * (i / 12) * Math.pow((1 + i / 12), months) / (Math.pow((1 + i / 12), months) - 1);


    var info = " ";

    info += "<table width='250'>";
    info += "<tr><td>Property Amount:</td>";
    info += "<td align='right'>£" + loan_amt + "</td></tr>";

    info += "<tr><td>Num of Months:</td>";
    info += "<td align='right'>" + months + "</td></tr>";

    info += "<tr><td>Interest Rate:</td>";
    info += "<td align='right'>" + rate + "%</td></tr>";

    info += "<tr><td>Monthly Re-payment:</td>";
    info += "<td align='right'>£" + round(monthly_payment, 2) + "</td></tr>";

    info += "<tr><td>+Extra:</td>";
    info += "<td align='right'>£" + extra + "</td></tr>";

    info += "<tr><td>Total Monthly Re-payment:</td>";
    info += "<td align='right' style='color: red'>£" + round(monthly_payment + extra, 2) + "</td></tr>";

    info += "</table>";

    document.getElementById("loan_info").innerHTML = (info);  // info is a string container all the html table code

}



function round(num, dec) {

    return (Math.round(num*Math.pow(10,dec))/ Math.pow(10,dec)).toFixed(dec);

}






