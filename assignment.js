// https://github.com/niambaust17/js-assignment-1

function kilometerToMeter(kilometer)
{
    // if will check user give right or wrong input(like string, array and blank input)
    if (kilometer <= 0 || typeof (kilometer) != "number")
    {
        return "Please enter a positive number as input.";
    }
    else
    {
        return kilometer * 1000;
    }
}



function budgetCalculator(watch, phone, laptop)
{
    var watchPricePerUnit = 50;
    var phonePricePerUnit = 100;
    var laptopPricePerUnit = 500;
    // if will check user give right or wrong input(like string, array and blank input)
    if (watch <= 0 || phone <= 0 || laptop <= 0 || typeof (watch) != "number" || typeof (phone) != "number" || typeof (laptop) != "number")
    {
        return "Please enter 3 positive numbers as input.";
    }
    else
    {
        // if user input floating number parseInt will handle it and make it a integer number then calculate total budget
        var totalBudget =
            parseInt(watch) * watchPricePerUnit +
            parseInt(phone) * phonePricePerUnit +
            parseInt(laptop) * laptopPricePerUnit;
        return totalBudget;
    }
}



function hotelCost(days)
{
    if (days <= 0 || typeof (days) != "number")
    {
        return "Please enter a positive value as input.";
    }
    else if (days <= 10)
    {
        // parseInt handle floating value 
        return parseInt(days) * 100;
    }
    else if (days <= 20)
    {
        // parseInt handle floating value 
        var firstSlotCost = 10 * 100;
        var secondSlotRemainingDay = days - 10;
        var secondSlotCost = parseInt(secondSlotRemainingDay) * 80;
        return firstSlotCost + secondSlotCost;
    }
    else
    {
        // parseInt handle floating value 
        var firstSlotCost = 10 * 100;
        var secondSlotCost = 10 * 80;
        var finalSlotRemainingDay = days - 20;
        var finalSlotCost = parseInt(finalSlotRemainingDay) * 50;
        return firstSlotCost + secondSlotCost + finalSlotCost;
    }
}



function megaFriend(friendNames)
{
    // if will check you input a empty array or another type of input without an array
    if (friendNames.length == 0 || typeof (friendNames) != 'object')
    {
        return "You enter a empty array please fill it with your friends name";
    }
    else
    {
        var largestFriendName = friendNames[0];
        for (var i = 0; i < friendNames.length; i++)
        {
            if (largestFriendName.length < friendNames[i].length)
            {
                largestFriendName = friendNames[i];
            }
        }
        return largestFriendName;
    }

}

// var kilo = kilometerToMeter(6.7);
// console.log(kilo);
// var budget = budgetCalculator(10, 3.4, 5.6);
// console.log(budget);
// var cost = hotelCost(40.5);
// console.log(cost);
// var largestName = megaFriend(['abc', 'def', 'ghijk', 'lmno']);
// console.log(largestName);