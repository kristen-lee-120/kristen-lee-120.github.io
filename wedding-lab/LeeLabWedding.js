
function weddingPlan() {
    let guests, tables, guestsPerTable, remainingGuests;
    let rerun = true;
    while (rerun) {
        guests = prompt("How many guests are coming to the wedding?");
        tables = prompt("How many tables do you want?");

        guestsPerTable = Math.floor(guests/tables);
        remainingGuests = guests % tables;
        if (remainingGuests == 0) {
            alert("With " + guests + " guests and " + tables + " tables, you will have: " + tables + " tables with " + guestsPerTable + " guests each.");
            document.querySelector("h4").innerHTML += " <br> With " + guests + " guests and " + tables + " tables, you will have: " + tables + " tables with " + guestsPerTable + " guests each.";
        
        } else {
            alert("With " + guests + " guests and " + tables + " tables, you will have: " + remainingGuests + " tables with " + (guestsPerTable + 1) + " guests, and " + (tables - remainingGuests) + " tables with " + guestsPerTable + " guests.");
            document.querySelector("h4").innerHTML += " <br> With " + guests + " guests and " + tables + " tables, you will have: " + remainingGuests + " tables with " + (guestsPerTable + 1) + " guests, and " + (tables - remainingGuests) + " tables with " + guestsPerTable + " guests.";

            }
        

        rerun = confirm("You said " + guests + " guests and " + tables + " tables. Try other numbers?");
    }
    //using recursion instead of while loop:
    // if (rerun == true) {
    //     weddingPlan();
    // } else {
    // if (remainingGuests == 0) {
    //     alert("With " + guests + " guests and " + tables + " tables, you will have: " + tables + " tables with " + guestsPerTable + " guests each.");
        
    //     } else {
    //     alert("With " + guests + " guests and " + tables + " tables, you will have: "+ remainingGuests + " tables with " + (guestsPerTable + 1) + " guests, and " + (tables - remainingGuests) + " tables with " + guestsPerTable + " guests.");
    //     }
    // }
}




        
   


