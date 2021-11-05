export default function updateViews(items, id) {
    return items.map(item => {
        if (item.id === id) {
            item.view++;
            return item;
        }
        return item;
    });
}