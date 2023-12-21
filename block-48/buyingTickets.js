function buyingTickets(tickets,k){
    let timeSpent = 0;
     timeSpent = (tickets[k]+1) * k
    return timeSpent

}

console.log(buyingTickets([2,3,2],2))