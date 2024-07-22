/*Вам необхідно використовувати масив нотифікацій з минулих занять.
 До отриманого під час групування об'єкта notifications, вам необхідно додати ітератор,
  щоб під час перебору в циклі for of ми отримували кожен елемент із вкладених списків об'єкта notifications таким чином,
 немов працюємо з "плоским" масивом.
*/
const notifications = [
    { source: 'email', text: 'Привіт', date: '2024-07-21' },
    { source: 'sms', text: 'Я пропустила 1 заняття', date: '2024-07-22' },
    { source: 'email', text: 'Чи можна перескласти іспит?', date: '2024-07-22' },
    { source: 'push', text: 'Замовлення доставлено', date: '2024-07-20' },
    { source: 'sms', text: 'Чи складна домашка?', date: '2024-07-23' }
  ];
  const groupBySource = (notifications) => {
    const grouped = notifications.reduce((acc, notification) => {
      const { source } = notification;
      if (!acc[source]) {
        acc[source] = [];
      }
        acc[source].push({notification});
        return acc;
      }, {});
    
grouped[Symbol.iterator] = function* () {
    for (const source in this) {
      if (this.hasOwnProperty(source) && Array.isArray(this[source])) {
        for (const notification of this[source]) {
          yield notification;
        }
      }
    }
  };

  return grouped;
};
const groupedNotifications = groupBySource(notifications);
for (const notification of groupedNotifications) {
    console.log(notification);
  }
  console.log(groupedNotifications);