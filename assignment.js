function kilometerToMeter(kilometer)
{
    if (kilometer < 0)
    {
        return "Please enter a positive number or zero(0) as input.";
    } else
    {
        var meter = kilometer * 1000
        return meter;
    }
}
function budgetCalculator(watch, phone, laptop)
{
    var watchPricePerUnit = 50;
    var phonePricePerUnit = 100;
    var laptopPricePerUnit = 500;
    if (watch < 0 || phone < 0 || laptop < 0)
    {
        return "Please enter 3 positive numbers or zero(0) as input if you don't want to buy any specific product.";
    } else
    {
        var totalBudget =
            watch * watchPricePerUnit +
            phone * phonePricePerUnit +
            laptop * laptopPricePerUnit;
        return totalBudget;
    }
}
function hotelCost(days)
{
    if (days <= 0)
    {
        return "Please enter a positive value";
    }
    else if (days <= 10)
    {
        return days * 100;
    }
    else if (days <= 20)
    {
        var firstSlotCost = 10 * 100;
        var secondSlotRemainingDay = days - 10;
        var secondSlotCost = secondSlotRemainingDay * 80;
        return firstSlotCost + secondSlotCost;
    }
    else
    {
        var firstSlotCost = 10 * 100;
        var secondSlotCost = 10 * 80;
        var finalSlotRemainingDay = days - 20;
        var finalSlotCost = finalSlotRemainingDay * 50;
        return firstSlotCost + secondSlotCost + finalSlotCost;
    }
}
function megaFriend(friendNames)
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

// var kilo = kilometerToMeter(6);
// console.log(kilo);
// var budget = budgetCalculator(10, 0, 0);
// console.log(budget);
// var cost = hotelCost(-10);
// console.log(cost);
// var largestName = megaFriend(["abir", "akash roy", "rabea", "fultushi  ", "john", "hero", "mou"]);
// console.log(largestName);