//SIDEBAR
const menuItems = document.querySelectorAll('.menu-item');
//MESAGES
const messagesNotification = document.querySelector('#messages-notifications');
 const messages = document.querySelector('.messages');


//===================SIDEBAR ==

// remove active class from all menu items
const changeActiveItem = () => {
    menuItems.forEach(item => {
        item.classList.remove('active');
    })
}

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        changeActiveItem();
        item.classList.add('active');
        if(item.id != 'notifications'){
            document.querySelector('.notification-popur').style.display = 'none';
        } else{
            document.querySelector('.notification-popur').style.display ='block'
            document.querySelector('#notificationns .notifacition-count').style.display = 'none';

        }
    })
})
//MESSAGES========
messagesNotification.addEventListener('click', () => {
    messages.style.boxShadow = '0 0 1rem  var(--primary)';
    messagesNotification.querySelector('notifacation-count').style.display = 'none'
    setTimeout(() => {
        messages.style.boxShadow = 'none'
    },2000)
})