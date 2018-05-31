const bubbleSort = (items) => {
    let swapped;
    do {
        swapped = false;
        for (let i=0; i<items.length; i++) {
            if (items[i] > items[i+1]) {
                let tmp = items[i];
                items[i] = items[i+1];
                items[i+1] = tmp;
                swapped = true;
            }
        }
    } while (swapped);
    return items;
}